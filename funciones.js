//menu pegajoso

var menu = document.getElementById('menu');
var altura = menu.offsetTop;

window.addEventListener('scroll', function () {
  if (window.pageYOffset > altura && navigator) {
    menu.classList.add('fixed');
  } else{
    menu.classList.remove('fixed');
  }
});

//menu hamburguesa

function ocultarMenu(){
  menu.style.display='initial';
}

var inicio = document.getElementById("inicio");
var conoceme = document.getElementById("conoceme");
var contanto = document.getElementById("contacto");

inicio.addEventListener('click', function(){
  menu.style.display = 'none';
});

conoceme.addEventListener('click', function () {
  menu.style.display = 'none';
});

contanto.addEventListener('click', function () {
  menu.style.display = 'none';
});

//selecion de menu
function isMobile() {
  return (
    (navigator.userAgent.match(/Android/i)) ||
    (navigator.userAgent.match(/webOS/i)) ||
    (navigator.userAgent.match(/iPhone/i)) ||
    (navigator.userAgent.match(/iPod/i)) ||
    (navigator.userAgent.match(/iPad/i)) ||
    (navigator.userAgent.match(/BlackBerry/i))
  );
}

if(isMobile){
  menu.classList.add('menu-movil');
}else{
  menu.classList.remove('menu-movil');
}