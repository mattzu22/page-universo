
const center = document.querySelector('.center')
center.addEventListener('click', ()=>{

    center.classList.toggle('selecionado')

    const iconeMenuHamburguer = document.querySelector('.center')
    
    const menuMob = document.querySelector('.menu-mob')
    
    menuMob.classList.toggle('selecionado')
    if(menuComSelecionado){
        iconeMenuHamburguer.classList.toggle('fixed')
    }    
})
