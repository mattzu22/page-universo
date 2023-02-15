

// const menuNavegation = document.querySelectorAll(".link")

// menuNavegation.forEach(nave => {
//     nave.addEventListener('click', () =>{
//         const selecionado = document.querySelector('.link.selecionado')
//         selecionado.classList.remove('selecionado')

//         nave.classList.add('selecionado')
//     })
// })

const menuHamburguer = document.querySelector('.menu-hamburguer')

menuHamburguer.addEventListener('click', () =>{
    const iconeMenuHamburguer = document.querySelector('i')

    const menuComSelecionado = document.querySelector('.menu-mob')

    menuComSelecionado.classList.toggle('selecionado')
})