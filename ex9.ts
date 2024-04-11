function countdownToNextYear(day:Date) {
    const today = new Date(day); 
    const nextYear = today.getFullYear() + 1; 
    const newYear = new Date(nextYear, 0, 1); 
    const timeDifference = newYear.getTime() - today.getTime(); 
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); 
    
    return daysRemaining;
  }
  const now = new Date('2024-1-1');
  console.log(countdownToNextYear(now)); //366