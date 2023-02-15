const screenTechnology = {
    technologies: document.querySelector(".technologies"),
    renderTechnology(api) {
        let descriptionTechnology = "";
        let imgTechnology = "";

        api.technology.forEach((technology, index) => {
            descriptionTechnology += `
                                        <div class="info" id="info-${index}">
                                            <h3 class="sub-title">THE TERMINOLOGY…</h3>
                                            <h1 class="title">${technology.name}</h1>
                                            <p>${technology.description}</p>
                                        </div>
                                     `;

        });

        api.technology.forEach((technology, index) => {
            imgTechnology += `
                                        <img class="img-tech" id="img-${index}" src="${technology.images.portrait}" alt="technology">
                                     `;
        });



        this.technologies.innerHTML = `
                                    <div class="technology">
                                        <h2><span class="number">03</span> SPACE LAUNCH 101</h2>

                                        <div class="description">
                                            <nav class="nav-techno">
                                                <ol>
                                                    <li><a href="#" class="menu-techno selecionado" id="0">1</a></li>
                                                    <li><a href="#" class="menu-techno" id="1">2</a></li>
                                                    <li><a href="#" class="menu-techno" id="2">3</a></li>
                                                </ol>
                                            </nav>

                                            <div class="info-tech">
                                                ${descriptionTechnology}

                                                ${imgTechnology}
                                            </div>
                                        </div>
                                    </div>
                                      `;
    },
};

export { screenTechnology };