function isWeekend(date) {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
}

console.log(isWeekend(new Date('2024-04-07'))); 