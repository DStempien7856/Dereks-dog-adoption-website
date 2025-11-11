const menuButton1 = document.querySelector('#menu-button-1')
const menuButton2 = document.querySelector('#menu-button-2')
const menuButton3 = document.querySelector('#menu-button-3')
const menuButton4 = document.querySelector('#menu-button-4')
const menuClose1 = document.querySelector('#menu-close1')
const menuClose2 = document.querySelector('#menu-close2')
const menuClose3 = document.querySelector('#menu-close3')
const menuClose4 = document.querySelector('#menu-close4')

const menuPopup1 = document.querySelector('#menu-1')
const menuPopup2 = document.querySelector('#menu-2')
const menuPopup3 = document.querySelector('#menu-3')
const menuPopup4 = document.querySelector('#menu-4')

const hamButton = document.querySelector('.hamburger')
const hamMenu = document.querySelector('.ham-menu')
const hamClose = document.querySelector('.ham-close')

const menu1 = () => {
    menuPopup1.style.display = "block"
    menuPopup2.style.display = "none"
    menuPopup3.style.display = "none"
    menuPopup4.style.display = "none"
}

const menu2 = () => {
    menuPopup1.style.display = "none"
    menuPopup2.style.display = "block"
    menuPopup3.style.display = "none"
    menuPopup4.style.display = "none"
}

const menu3 = () => {
    menuPopup1.style.display = "none"
    menuPopup2.style.display = "none"
    menuPopup3.style.display = "block"
    menuPopup4.style.display = "none"
}

const menu4 = () => {
    menuPopup1.style.display = "none"
    menuPopup2.style.display = "none"
    menuPopup3.style.display = "none"
    menuPopup4.style.display = "block"
}

const ham = () => {
    hamMenu.style.display = "block"
}

menuClose1.addEventListener('click', () => {
    menuPopup1.style.display = "none"
})

menuClose2.addEventListener('click', () => {
    menuPopup2.style.display = "none"
})

menuClose3.addEventListener('click', () => {
    menuPopup3.style.display = "none"
})

menuClose4.addEventListener('click', () => {
    menuPopup4.style.display = "none"
})

hamClose.addEventListener('click', () => {
    hamMenu.style.display = "none"
})

menuButton1.addEventListener('click', menu1)
menuButton2.addEventListener('click', menu2)
menuButton3.addEventListener('click', menu3)
menuButton4.addEventListener('click', menu4)
hamButton.addEventListener('click', ham)