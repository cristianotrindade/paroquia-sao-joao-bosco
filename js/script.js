console.log("Paróquia São João Bosco carregada!");


// SCROLL SUAVE MENU
document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener('click', function(e) {

    e.preventDefault();

    const id = this.getAttribute('href');
    const section = document.querySelector(id);

    section.scrollIntoView({
      behavior: 'smooth'
    });

  });

});


// BOTÃO VOLTAR AO TOPO
const btnTopo = document.createElement("button");

btnTopo.innerHTML = "↑";
btnTopo.id = "topo";

document.body.appendChild(btnTopo);

btnTopo.style.position = "fixed";
btnTopo.style.bottom = "20px";
btnTopo.style.right = "20px";
btnTopo.style.width = "50px";
btnTopo.style.height = "50px";
btnTopo.style.border = "none";
btnTopo.style.borderRadius = "50%";
btnTopo.style.background = "#082b63";
btnTopo.style.color = "white";
btnTopo.style.fontSize = "24px";
btnTopo.style.cursor = "pointer";
btnTopo.style.display = "none";


window.addEventListener("scroll", () => {

  if(window.scrollY > 300){
    btnTopo.style.display = "block";
  }else{
    btnTopo.style.display = "none";
  }

});


const eventos = [
  {
    titulo:"Festa da Paroquia",
    data:"10/05/2026"
  },

  {
    titulo:"Festa de São João Bosco",
    data:"31/05/2026"
  },
  
  {
    titulo:"Encontro de Casais",
    data:"14/06/2026"
  },

  {
    titulo:"Retiro de Jovens",
    data:"26/06/2026"
  }
];

const listaEventos = document.getElementById("lista-eventos");

eventos.forEach(evento => {

  listaEventos.innerHTML += `
  
    <div class="evento">
      <h3>${evento.titulo}</h3>
      <p>${evento.data}</p>
    </div>

  `;

});

const celebracoes = [

  {
    titulo: "Ascensão do Senhor",
    data: "17/05/2026"
  },

  {
    titulo: "Pentecostes",
    data: "24/05/2026"
  },

  {
    titulo: "Santíssima Trindade",
    data: "31/05/2026"
  },

  {
    titulo: "Corpus Christi",
    data: "04/06/2026"
  },

  {
    titulo: "Sagrado Coração de Jesus",
    data: "12/06/2026"
  },

  {
    titulo: "Nossa Senhora Aparecida",
    data: "12/10/2026"
  },

  {
    titulo: "Natal do Senhor",
    data: "25/12/2026"
  }

];

const listaLiturgica = document.getElementById("lista-liturgica");

celebracoes.forEach(item => {

  listaLiturgica.innerHTML += `

    <div class="celebracao-item">

      <span>✝️</span>

      <div>
        <h3>${item.titulo}</h3>
        <p>${item.data}</p>
      </div>

    </div>

  `;

});

btnTopo.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});