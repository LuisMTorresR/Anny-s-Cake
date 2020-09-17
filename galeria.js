

var regresar = document.getElementById('volver');
var altura = regresar.offsetTop;

window.addEventListener('scroll', function () {
  if (window.pageYOffset > altura && navigator) {
    regresar.classList.add('volver-fixed');
  }else{
    regresar.classList.remove('volver-fixed');
  }
})