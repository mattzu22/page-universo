

const menuNavegation = document.querySelectorAll(".link")

menuNavegation.forEach(nave => {
    nave.addEventListener('click', () =>{
        const selecionado = document.querySelector('.link.selecionado')
        selecionado.classList.remove('selecionado')

        nave.classList.add('selecionado')
    })
})
