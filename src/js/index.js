import { api } from "./data.js";
import { screenCrew } from "./screencrew.js";
import { screenDestination } from "./screendestination.js";


screenCrew.renderCrew(api)

const bolinhas = document.querySelectorAll(".bola");
const primeiraDescription = document.getElementById("description-0");
primeiraDescription.classList.add("selecionado");

bolinhas.forEach((bola) => {
  bola.addEventListener("click", () => {
    const selecionado = document.querySelector(".bola.selecionado");
    selecionado.classList.remove("selecionado");

    bola.classList.add("selecionado");

    const abaComSelecionado = document.querySelector(
      ".description.selecionado"
    );

    abaComSelecionado.classList.remove("selecionado");

    const idDaPaginaASerMostrada = `description-${bola.id}`;

    const abaASerMostradaNaTela = document.getElementById(
      idDaPaginaASerMostrada
    );

    abaASerMostradaNaTela.classList.add("selecionado");
  });
});

screenDestination.renderDestination(api)

const menuPlanet = document.querySelectorAll(".menu-planet");
const primeiroPlaneta = document.getElementById("planet-0");
primeiroPlaneta.classList.add("selecionado");

menuPlanet.forEach((planet) => {
  planet.addEventListener("click", () => {
    const selecionado = document.querySelector(".menu-planet.selecionado");
    selecionado.classList.remove("selecionado");

    planet.classList.add("selecionado");

    const planetaComSelecionado = document.querySelector(
      ".planet.selecionado"
    );

    planetaComSelecionado.classList.remove("selecionado");

    const idDoPlanetaASerMostrado = `planet-${planet.id}`;

    const planetaASerMostradoNaTela = document.getElementById(
        idDoPlanetaASerMostrado
    );

    planetaASerMostradoNaTela.classList.add("selecionado");
  });
});


// const menuNavegation = document.querySelectorAll(".link")

// menuNavegation.forEach(nave => {
//     nave.addEventListener('click', (event) =>{
//         event.preventDefault()
//         const selecionado = document.querySelector('.link.selecionado')
//         selecionado.classList.remove('selecionado')

//         nave.classList.add('selecionado')
//     })
// })
