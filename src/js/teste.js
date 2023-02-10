const screenCrew = {
  technicalTeam: document.querySelector(".technical-team"),
  renderCrew(api) {
    let infoCrew = "";
    let imgCrew = "";

    api.crew.forEach((crew, index) => {
      infoCrew += `
                    <div class="info-crew" id="crew-${index}">
                        <p class="office">${crew.role}</p>
                        <p class="name">${crew.name}</p>
                        <p class="bio">${crew.bio}</p>
                    </div>
                    `;
    });

    api.crew.forEach((crew, index) => {
        imgCrew += `
                    <img class="img-crew" id="img-crew-${index}" src="${crew.images.png}" />
                   `;
      });

    this.technicalTeam.innerHTML = `
                                    <div class="crew">
                                        <div class="description">
                                                <h2 class="title">02 Meet your crew</h2>

                                            ${infoCrew}

                                            <div class="navegation">
                                                <div class="bola selecionado" id="0"></div>
                                                <div class="bola" id="1"></div>
                                                <div class="bola" id="2"></div>
                                                <div class="bola" id="3"></div>
                                            </div>       
                                        /div>

                                        ${imgCrew}
                                    </div>        
                                  `;
  },
};

export { screenCrew };
