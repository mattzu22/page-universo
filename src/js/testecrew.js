const screenCrew = {
    technicalTeam: document.querySelector(".technical-team"),
    renderCrew(api) {
        let infoCrew = ""

        api.crew.forEach((crew, index) => {
            infoCrew += `<div class="crew" id="crew-${index}">
                            <div class="description">
                                    <h2 class="title">02 Meet your crew</h2>

                                    <div class="info-crew">
                                        <p class="office">${crew.role}</p>
                                        <p class="name">${crew.name}</p>
                                        <p class="bio">${crew.bio}</p>
                                    </div>

                                    <div class="navegation">
                                        <div class="bola selecionado" id="0"></div>
                                        <div class="bola" id="1"></div>
                                        <div class="bola" id="2"></div>
                                        <div class="bola" id="3"></div>
                                    </div>       
                            </div>

                            <img class="img-crew" src="${crew.images.png}" />
                         </div>`
        })

        this.technicalTeam.innerHTML = `${infoCrew}`;
    },
};

export { screenCrew };
