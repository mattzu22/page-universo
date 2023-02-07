import { api } from "./data.js";
import { screenDestination } from "./screendestination.js";

screenDestination.renderDestination(api);

colocarClassSelecionado()

const menuPlanet = document.querySelectorAll(".menu-planet");

menuPlanet.forEach((planet) => {
  planet.addEventListener("click", () => {
    adicionarERemoverClassDoMenu(planet);
    
    mostrarPlanetaSelecionadoNaTela(planet);
  });
});

function adicionarERemoverClassDoMenu(planet) {
  const selecionado = document.querySelector(".menu-planet.selecionado");
  selecionado.classList.remove("selecionado");
  
  planet.classList.add("selecionado");
}

function mostrarPlanetaSelecionadoNaTela(planet) {
  const imgComSelecionado = document.querySelector(".img-planet.selecionada");
  
  imgComSelecionado.classList.remove("selecionada");
  
  const textComSelecionado = document.querySelector(".texto-planet.selecionada");
  
  textComSelecionado.classList.remove("selecionada");
  
  const idDaImgParaMostrar = `img-planet-${planet.id}`;
  
  const idDoTextoParaMostrar = `info-planet-${planet.id}`;
  
  const imgNaTela = document.getElementById(idDaImgParaMostrar);
  imgNaTela.classList.add("selecionada")
  
  const textoNaTela = document.getElementById(idDoTextoParaMostrar);
  textoNaTela.classList.add("selecionada")
}

function colocarClassSelecionado(){
  const firstImg = document.getElementById("img-planet-0");
  const firstInfo = document.getElementById("info-planet-0");
  
  firstImg.classList.add("selecionada");
  firstInfo.classList.add("selecionada");
}