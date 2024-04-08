function countdownToNextYear() {
    const today = new Date(); 
    const nextYear = today.getFullYear() + 1; 
    const newYear = new Date(nextYear, 0, 1); 
    const timeDifference = newYear.getTime() - today.getTime(); 
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); 
    
    return daysRemaining;
  }

  console.log(countdownToNextYear()); 