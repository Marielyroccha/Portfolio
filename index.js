const menuLinks = document.querySelectorAll('.nav a');

menuLinks.forEach(link => {
  link.addEventListener('click', scrollToSectionOnClick);
});

function scrollToSectionOnClick(event) {
  event.preventDefault();
  const target = event.target.getAttribute('href');
  const section = document.querySelector(target);
  const sectionTop = section.offsetTop;

  window.scrollTo({
    top: sectionTop,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', function() {
    var btnVoltarTopo = document.getElementById('btn-voltar-topo');
    if (window.pageYOffset > 700) {
      btnVoltarTopo.style.display = 'block'; 
    } else {
      btnVoltarTopo.style.display = 'none'; 
    }
  });
  
document.getElementById('btn-voltar-topo').addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'}); 
  });
  
function atualizarRelogioData() {
    var dataHoraAtual = new Date();
    var horas = padZero(dataHoraAtual.getHours());
    var minutos = padZero(dataHoraAtual.getMinutes());
    var dia = padZero(dataHoraAtual.getDate());
    var mes = padZero(dataHoraAtual.getMonth() + 1);
    var ano = dataHoraAtual.getFullYear();
  
    var relogioDataElemento = document.getElementById("relogio-data");
    relogioDataElemento.textContent ="Hoje é dia: " + dia + "/" + mes + "/" + ano + " - " + " Horario de Brasilia: " + horas + ":" + minutos;
}
  
function padZero(numero) {
    return numero < 10 ? "0" + numero : numero;
}
  
  setInterval(atualizarRelogioData, 1000); 
  