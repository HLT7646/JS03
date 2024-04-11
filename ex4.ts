function calculateMinutes(hours: number, minutes: number) {
    let totalMinutes = hours * 60 + minutes;
    return totalMinutes;
  }
console.log(calculateMinutes(5, 30));