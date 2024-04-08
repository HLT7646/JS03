function getMonday(d) {
    d = new Date(d);
    let day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1); 
    return new Date(d.setDate(diff));
  }
  
console.log( getMonday(new Date('2024-04-13')) ); //2024/04/08