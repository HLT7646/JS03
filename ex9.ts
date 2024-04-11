
  function countdownToNextYear(day) {
    const today = new Date(day);
    const nextYear = today.getFullYear() + 1;
    const newYear = new Date(nextYear, 0, 1);
    const timeDifference = newYear.getTime() - today.getTime();
    let remainingTime = Math.ceil(timeDifference / 1000);
  
    const countdownInterval = setInterval(() => {
      const days = Math.floor(remainingTime / (24 * 60 * 60));
      const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
      const seconds = remainingTime % 60;
  
      if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        console.log("Happy New Year!");
      } else {
        console.log(
          `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds until next year`
        );
      }
  
      remainingTime--;
    }, 1000);
  }
  const now = new Date('2024-1-1');
  countdownToNextYear(now);