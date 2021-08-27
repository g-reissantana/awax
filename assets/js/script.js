const menuIcon = document.querySelector('.menu-opener')
const menu = document.querySelector('[data-nav]')

document.addEventListener('load', handleClickMenuIcon())

function handleClickMenuIcon() {
    menuIcon.addEventListener('click', menuOpener)
}

function menuOpener() {
    let menuOpen = false

    if(menuOpen == false) {
        menu.classList.toggle('block')
    }
}