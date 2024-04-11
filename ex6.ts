function calculateAge(birthDate) {
    const now = new Date(); // Lấy ngày hiện tại
    const currentYear = now.getFullYear(); // Lấy năm hiện tại
    const currentMonth = now.getMonth() + 1; // Lấy tháng hiện tại (0-indexed month)
    const currentDate = now.getDate(); // Lấy ngày hiện tại
  
    let age = currentYear - birthDate.getFullYear(); // Tính khoảng cách giữa năm sinh và năm hiện tại
  
    // Kiểm tra nếu ngày sinh trong năm hiện tại chưa đến
    if (
      currentMonth < birthDate.getMonth() + 1 ||
      (currentMonth === birthDate.getMonth() + 1 && currentDate < birthDate.getDate())
    ) {
      age--; // Giảm tuổi đi 1 nếu chưa đến sinh nhật trong năm hiện tại
    }
  
    return age;
  }
  
console.log(calculateAge(new Date(1999, 8, 11))); 