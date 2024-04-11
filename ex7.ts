function getFormattedMonday(d: Date): string {
  d = new Date(d);
  let day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1);
  let lastMonday = new Date(d.setDate(diff));

  let formattedDate = lastMonday.toLocaleDateString(); 

  return formattedDate;
}

console.log(getFormattedMonday(new Date('2024-04-16'))); //4/15/2024