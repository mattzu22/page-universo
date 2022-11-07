
const screenTechnology = {
  technology: document.querySelector(".technology"),
  renderTechnology(api) {
    let abaTechnology = "";

    api.technology.forEach((technology, index) => {
      abaTechnology += `<div class="info-img" id="techno-${index}">
                            <div class="info">
                                <h3 class="sub-title">THE TERMINOLOGY…</h3>
                                <h1 class="title">${technology.name}</h1>
                                <p>${technology.description}</p>
                            </div>

                            <img src="${technology.images.portrait}" alt="technology">
                        </div>`;
    });

    this.technology.innerHTML = `<div class="description">
                                    <h2><span class="number">03</span> SPACE LAUNCH 101</h2>

                                    <div class="menu-info">
                                        <nav class="nav-techno">
                                            <ol>
                                                <li><a href="#" class="menu-techno selecionado" id="0">1</a></li>
                                                <li><a href="#" class="menu-techno" id="1">2</a></li>
                                                <li><a href="#" class="menu-techno" id="2">3</a></li>
                                            </ol>
                                        </nav>
                                         
                                        ${abaTechnology}
                                        
                                    </div>
                                   </div>`;
  },
};

export { screenTechnology };
