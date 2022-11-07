
const screenDestination = {
  destination: document.querySelector(".planets"),
  renderDestination(api) {
    let infoPlanet = "";

    api.destinations.forEach((destination, index) => {
      infoPlanet += `<div class="planet" id="planet-${index}">
                        <img src="${destination.images.png}" alt="imagem de um planeta">

                        <div class="description">
                            <h2 class="title">${destination.name}</h2>
                            <p class="text-planet">
                                ${destination.description}
                            </p>

                            <div class="info-planet">
                                <div class="info">
                                    <p class="text">AVG. DISTANCE</p>
                                    <h2>${destination.distance}</h2>
                                </div>

                                <div class="info">
                                    <p class="text">Est. travel time</p>
                                    <h2>${destination.travel}</h2>
                                </div>
                            </div>
                        </div>
                     </div>`;
    });

    this.destination.innerHTML = `<h3><span class="number">01</span> Pick your destination</h3>
    
                                    ${infoPlanet}

                                 <nav class="menu">
                                 <ul>
                                     <li><a class="menu-planet selecionado" id="0">MOON</a></li>
                                     <li><a class="menu-planet" id="1">MARS</a></li>
                                     <li><a class="menu-planet" id="2">EUROPA</a></li>
                                     <li><a class="menu-planet" id="3">TITAN</a></li>
                                 </ul>
                                </nav>`;
  },
};

export { screenDestination };
