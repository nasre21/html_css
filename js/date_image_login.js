
// Date
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

// change imagen

const image=document.getElementById("img");
const image1=document.getElementById("img1");


    image.addEventListener("mouseover", go);
    image.addEventListener("mouseout", turn);

    function go(){


        image.setAttribute("src","../img/lik.jpg");
    }
 
    function turn(){

        image.setAttribute("src","../img/image1.jpg");
    }


    image1.addEventListener("mouseover", volver);
    image1.addEventListener("mouseout", devolver);

    function volver(){


        image1.setAttribute("src","../img/image1.jpg");
    }
 
    function devolver(){

        image1.setAttribute("src","../img/lik.jpg");
    }



// validate login

const loginButton = document.getElementById("boton");

loginButton.addEventListener("click", validateLogin);

function validateLogin() {
  
    let nombre = document.getElementById('name').value;
    var contraseña = document.getElementById('pass').value;

    if (nombre === 'nasser' && contraseña === 'oufallah') {
      alert('Correct Pass.');
      window.location.href = 'https://8devmx.com/fundamentos-validacion-de-login-con-javascript/'

      return true; 
    }
    else{
      alert('Incorrect Pass!');
      return false;
    }

  }
  

