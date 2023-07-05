function showDate() {
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const date = new Date();
    const day = days[date.getDay()];
    const dia = date.getDate();
    const hour = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    document.getElementById("date").innerHTML = `${day} ${dia} de ${month} del ${year} a las ${hour}:${minutes}`;
  }
  
  showDate();