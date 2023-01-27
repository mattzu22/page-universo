const screenDestination1 = {
  destination: document.querySelector(".planets"),
  renderDestination(api) {
    let infoPlanet = "";
    let imgPlanet = "";

    api.destinations.forEach((img, index) => {
      imgPlanet += `
                            <div class="img-planet" id="img-planet-${index}">
                                <img src="${img.images.png}" alt="imagem de um planeta" />
                            </div>
                            `;
    });

    api.destinations.forEach((info, index) => {
      infoPlanet += `      
                        <div class="texto-planet" id="info-planet-${index}">
                            <h2 class="title">${info.name}</h2>
                            <p class="text-planet">
                                ${info.description}
                            </p>
                
                            <div class="info-planet">
                                <div class="info">
                                    <p class="text">AVG. DISTANCE</p>
                                    <h2>${info.distance}</h2>
                                </div>
                    
                                <div class="info">
                                    <p class="text">Est. travel time</p>
                                    <h2>${info.travel}</h2>
                                </div>
                            </div>
                        </div>
                     `;
    });

    this.destination.innerHTML = `
                                <div class="planet">
                                    <div class="planet-img">
                                        <h3><span class="number">01</span> Pick your destination</h3>
                                        ${imgPlanet}
                                    </div>

                                    <div class="description">
                                        <nav class="menu">
                                            <ul>
                                                <li><a class="menu-planet selecionado" id="0">MOON</a></li>
                                                <li><a class="menu-planet" id="1">MARS</a></li>
                                                <li><a class="menu-planet" id="2">EUROPA</a></li>
                                                <li><a class="menu-planet" id="3">TITAN</a></li>
                                            </ul>
                                        </nav>

                                        ${infoPlanet}
                                    </div>
                                </div>
                                 `;
  },
};

export { screenDestination1 };
