function getDaysInMonth(year:number, month:number) {
    return new Date(year, month, 0).getDate();
}
console.log(getDaysInMonth(2024, 2)); // Output: 29 
