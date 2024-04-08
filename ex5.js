function countDaysPassed() {
    const now = new Date(); 
    const startOfYear = new Date(now.getFullYear(), 0, 0); 
  
    const timeDiff = now - startOfYear; 
    const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); 
  
    return daysPassed;
  }
let daysPassed = countDaysPassed();
console.log(daysPassed); 