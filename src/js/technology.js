import { api } from "./data.js";
import { screenTechnology } from "./screentechnology.js";

screenTechnology.renderTechnology(api);
const menuTechno = document.querySelectorAll(".menu-techno");

mostrarClassSelecionado()

menuTechno.forEach((techno) => {
  techno.addEventListener("click", () => {
    adicionarOuRemoverClassDoMenu(techno);

    mostrarTechnoSelecionadoNaTela(techno);
  });
});

function adicionarOuRemoverClassDoMenu(techno) {
  const selecionado = document.querySelector(".menu-techno.selecionado");
  selecionado.classList.remove("selecionado");

  techno.classList.add("selecionado");
}

function mostrarTechnoSelecionadoNaTela(techno) {
  const infoComSelecionado = document.querySelector(".info.selecionado");
  infoComSelecionado.classList.remove("selecionado");

  const imgComSelecionado = document.querySelector(".img-tech.selecionado");
  imgComSelecionado.classList.remove("selecionado");

  const idDaImagem = `img-${techno.id}`;

  const idDaInfo = `info-${techno.id}`;

  const imgNaTela = document.getElementById(idDaImagem);
  imgNaTela.classList.add("selecionado");

  const infoNaTela = document.getElementById(idDaInfo);
  infoNaTela.classList.add("selecionado");
}

function mostrarClassSelecionado() {
  const infoSelecionada = document.getElementById("info-0");
  const imgComSelecinado = document.getElementById("img-0");
  imgComSelecinado.classList.add("selecionado");
  infoSelecionada.classList.add("selecionado");
}
