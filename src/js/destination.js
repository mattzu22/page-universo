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
  const imgComSelecionado = document.querySelector(".img-planet.selecionado");
  
  imgComSelecionado.classList.remove("selecionado");
  
  const textComSelecionado = document.querySelector(".texto-planet.selecionado");
  
  textComSelecionado.classList.remove("selecionado");
  
  const idDaImgParaMostrar = `img-planet-${planet.id}`;
  
  const idDoTextoParaMostrar = `info-planet-${planet.id}`;
  
  const imgNaTela = document.getElementById(idDaImgParaMostrar);
  imgNaTela.classList.add("selecionado")
  
  const textoNaTela = document.getElementById(idDoTextoParaMostrar);
  textoNaTela.classList.add("selecionado")
}

function colocarClassSelecionado(){
  const firstImg = document.getElementById("img-planet-0");
  const firstInfo = document.getElementById("info-planet-0");
  
  firstImg.classList.add("selecionado");
  firstInfo.classList.add("selecionado");
}