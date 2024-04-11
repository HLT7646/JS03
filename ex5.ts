function countDaysPassed() {
    const now:any = new Date(); 
    const startOfYear:any = new Date(now.getFullYear(), 0, 0); 
  
    const timeDiff = now - startOfYear; 
    const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); 
  
    return daysPassed;
  }
let daysPassed = countDaysPassed();
console.log(daysPassed); 