import { api } from "./data.js";
import { screenCrew } from "./screencrew.js";
screenCrew.renderCrew(api)
const bolinhas = document.querySelectorAll(".bola");
const primeiraDescription = document.getElementById("crew-0");
primeiraDescription.classList.add("selecionado");

bolinhas.forEach((bola) => {
  bola.addEventListener("click", () => {

    adicionarOuRemoverClassDoMenu(bola)

    mostrarCrewSelecionadoNatela(bola)
  });
});

function adicionarOuRemoverClassDoMenu(bola){
    const selecionado = document.querySelector(".bola.selecionado");
    selecionado.classList.remove("selecionado");

    bola.classList.add("selecionado");
}

function mostrarCrewSelecionadoNatela(bola){
    const abaComSelecionado = document.querySelector(
        ".crew.selecionado"
      );
  
      abaComSelecionado.classList.remove("selecionado");
  
      const idDaPaginaASerMostrada = `crew-${bola.id}`;
      console.log(idDaPaginaASerMostrada);
  
      const abaASerMostradaNaTela = document.getElementById(
        idDaPaginaASerMostrada
      );
  
      abaASerMostradaNaTela.classList.add("selecionado");
}