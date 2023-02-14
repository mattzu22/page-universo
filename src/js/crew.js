import { api } from "./data.js";
import { screenCrew } from "./screencrew.js";
screenCrew.renderCrew(api);
const bolinhas = document.querySelectorAll(".bola");

mostrarClassSelecionado()

bolinhas.forEach((bola) => {
  bola.addEventListener("click", () => {
    adicionarOuRemoverClassDoMenu(bola);

    mostrarCrewSelecionadoNatela(bola);
  });
});

function adicionarOuRemoverClassDoMenu(bola) {
  const selecionado = document.querySelector(".bola.selecionado");
  selecionado.classList.remove("selecionado");

  bola.classList.add("selecionado");
}

function mostrarCrewSelecionadoNatela(bola) {
  const imgComSelecionado = document.querySelector(".img-crew.selecionado");

  imgComSelecionado.classList.remove("selecionado");

  const infoComSelecionado = document.querySelector(".info-crew.selecionado");

  infoComSelecionado.classList.remove("selecionado");

  const imageASerMostrada = `img-crew-${bola.id}`;

  const infoASerMostrada = `info-crew-${bola.id}`;

  const imgNaTela = document.getElementById(imageASerMostrada);
  imgNaTela.classList.add("selecionado");

  const infoNaTela = document.getElementById(infoASerMostrada);
  infoNaTela.classList.add("selecionado");
}

function mostrarClassSelecionado() {
  const firstImage = document.getElementById("img-crew-0");
  const firstDescription = document.getElementById("info-crew-0");
  firstDescription.classList.add("selecionado");
  firstImage.classList.add("selecionado");
}
