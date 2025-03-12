function formatDates(dates) {
    if (!Array.isArray(dates)) return "Dữ liệu không hợp lệ";
    if (dates.length === 0) return "Mảng không có phần tử nào";
  
    let formattedDates = dates.map(date => {
      let parts = date.split("-");
      if (parts.length !== 3) return "Dữ liệu không hợp lệ";
  
      let [year, month, day] = parts;
      if (isNaN(year) || isNaN(month) || isNaN(day)) return "Dữ liệu không hợp lệ";
      if (year.length !== 4 || month.length !== 2 || day.length !== 2) return "Dữ liệu không hợp lệ";
  
      return `${day}/${month}/${year}`;
    });
  
    return formattedDates;
  }
  
  let n = +prompt("Nhập số lượng ngày tháng:");
  let dates = [];
  
  for (let i = 0; i < n; i++) {
    let date = prompt(`Nhập ngày tháng thứ ${i + 1} (YYYY-MM-DD):`);
    dates.push(date);
  }
  
  console.log(formatDates(dates));