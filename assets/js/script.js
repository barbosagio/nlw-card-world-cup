const card = document.querySelector('.card')
let isExplorer = true

card.addEventListener('click', () =>{
    const backgroundImage = isExplorer ? 'url(./assets/svg/bg-ignite.svg)' : 'url(./assets/svg/bg-explorer.svg)'
    card.style.backgroundImage = backgroundImage
    isExplorer = !isExplorer
})