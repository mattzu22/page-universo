import { api } from "./data.js"
// import { screenTechnology } from "./screentechnology.js"
import { screenTechnology } from "./testetechnology.js"

screenTechnology.renderTechnology(api)
const menuTechno = document.querySelectorAll(".menu-techno");
const technologySelecionada = document.getElementById("techno-0");
technologySelecionada.classList.add("selecionado");


menuTechno.forEach((techno) => {
  techno.addEventListener("click", () => {

    adicionarOuRemoverClassDoMenu(techno)

    mostrarTechnoSelecionadoNaTela(techno)
  });
});

function adicionarOuRemoverClassDoMenu(techno){
    const selecionado = document.querySelector(".menu-techno.selecionado");
    selecionado.classList.remove("selecionado");

    techno.classList.add("selecionado");
}

function mostrarTechnoSelecionadoNaTela(techno){
    const technoComSelecionado = document.querySelector(".technology.selecionado");

    technoComSelecionado.classList.remove("selecionado");

    const idDaTechnoParaSerMostrada = `techno-${techno.id}`;

    const technoASerMostradoNaTela = document.getElementById(
        idDaTechnoParaSerMostrada
    );

    technoASerMostradoNaTela.classList.add("selecionado");
}