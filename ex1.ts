function getCurrentDate(separator:string) {
    const now = new Date();
    const year = now.getFullYear();
    let month:number = now.getMonth() + 1;
    let day:number = now.getDate();

    if (month < 10) {
        month = 0 + month;
    }
    if (day < 10) {
        day = 0 + day;
    }

    return `${day}${separator}${month}${separator}${year}`;
}
console.log(getCurrentDate('/')); 
