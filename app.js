const menuButton1 = document.querySelector('#menu-button-1')
const menuButton2 = document.querySelector('#menu-button-2')
const menuButton3 = document.querySelector('#menu-button-3')
const menuButton4 = document.querySelector('#menu-button-4')

const menuPopup1 = document.querySelector('#menu-1')
const menuPopup2 = document.querySelector('#menu-2')
const menuPopup3 = document.querySelector('#menu-3')
const menuPopup4 = document.querySelector('#menu-4')

const menu1 = (e) => {
    e.preventDefault()
    menuPopup1.style.display = "block"
    menuPopup2.style.display = "none"
    menuPopup3.style.display = "none"
    menuPopup4.style.display = "none"
}

const menu2 = (e) => {
    e.preventDefault()
    menuPopup1.style.display = "none"
    menuPopup2.style.display = "block"
    menuPopup3.style.display = "none"
    menuPopup4.style.display = "none"
}

const menu3 = (e) => {
    e.preventDefault()
    menuPopup1.style.display = "none"
    menuPopup2.style.display = "none"
    menuPopup3.style.display = "block"
    menuPopup4.style.display = "none"
}

const menu4 = (e) => {
    e.preventDefault()
    menuPopup1.style.display = "none"
    menuPopup2.style.display = "none"
    menuPopup3.style.display = "none"
    menuPopup4.style.display = "block"
}

menuButton1.addEventListener('click', menu1)
menuButton2.addEventListener('click', menu2)
menuButton3.addEventListener('click', menu3)
menuButton4.addEventListener('click', menu4)