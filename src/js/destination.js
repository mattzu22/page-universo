import { api } from "./data.js";
import { screenDestination } from "./screendestination.js";
import { screenDestinationTeste } from "./testedestination.js";

screenDestinationTeste.renderDestination(api);
const menuPlanet = document.querySelectorAll(".menu-planet");
const primeiroPlaneta = document.getElementById("planet-container-0");
primeiroPlaneta.classList.add("selecionado");

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
  const planetaComSelecionado = document.querySelector(".planet-container.selecionado");

  planetaComSelecionado.classList.remove("selecionado");

  const idDoPlanetaASerMostrado = `planet-container-${planet.id}`;

  const planetaASerMostradoNaTela = document.getElementById(
    idDoPlanetaASerMostrado
  )

  planetaASerMostradoNaTela.classList.add("selecionado");
}
