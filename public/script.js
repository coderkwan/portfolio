const open_menu = document.getElementById('menu_icon')
const close_menu = document.getElementById('close_menu_icon')
const menu = document.getElementById('mobile_nav')

open_menu.addEventListener('click', (e) => {
    e.preventDefault()
    open_menu.style.display = 'none'
    close_menu.style.display = 'flex'
    menu.style.display = 'flex'
})
close_menu.addEventListener('click', (e) => {
    e.preventDefault()
    close_menu.style.display = 'none'
    open_menu.style.display = 'flex'
    menu.style.display = 'none'
})
