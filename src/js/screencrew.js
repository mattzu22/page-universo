
const screenCrew = {
  technicalTeam: document.querySelector(".technical-team"),
  renderCrew(api) {
    let infoCrew = ""

    api.crew.forEach((crew, index) => {
        infoCrew += `<div class="description" id="description-${index}">
                        <div class="info-crew">   
                            <p class="office">${crew.role}</p>
                            <p class="name">${crew.name}</p>
                            <p class="bio"> ${crew.bio}</p> 
                        </div> 

                        <img class="img-crew" src="${crew.images.png}" alt="image crew" />
                     </div>`
    })

    this.technicalTeam.innerHTML = `<div class="crew">
                                        <h2 class="title">02 Meet your crew</h2>
        
                                            ${infoCrew}
                                    
                                        <div class="navegation">
                                            <div class="bola selecionado" id="0"></div>
                                            <div class="bola" id="1"></div>
                                            <div class="bola" id="2"></div>
                                            <div class="bola" id="3"></div>
                                        </div>
                                    <div>`;
  },
};

export { screenCrew };
