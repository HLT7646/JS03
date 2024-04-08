function getLastDayOfMonth(date) {
    const year = date.getFullYear(); 
    const month = date.getMonth(); 
    const lastDay = new Date(year, month + 1, 0).getDate(); 
    const lastDayOfMonth = new Date(year, month, lastDay); 
    const formattedDate = lastDayOfMonth.toLocaleDateString(); 
    
    return formattedDate;
  }
  const today = new Date('2024-2-1'); 
console.log(getLastDayOfMonth(today)); //2/29/2024