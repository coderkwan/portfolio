const theme_switcher = document.getElementById('switch_theme')

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

const theme = localStorage.getItem('theme')
const body = document.getElementsByTagName('body')[0]

if (theme) {
    if (theme == 'dark') {
        body.classList.add('dark-mode')
        body.classList.remove('light-mode')
    } else {
        body.classList.remove('dark-mode')
        body.classList.add('light-mode')
    }
} else {
    localStorage.setItem('theme', 'light')
}

theme_switcher.addEventListener('click', (e) => {
    const theme = localStorage.getItem('theme')

    if (theme) {
        if (theme == 'light') {
            localStorage.setItem('theme', 'dark')
            body.classList.add('dark-mode')
            body.classList.remove('light-mode')
        } else {
            localStorage.setItem('theme', 'light')
            body.classList.remove('dark-mode')
            body.classList.add('light-mode')
        }
    } else {
        localStorage.setItem('theme', 'dark')
        body.classList.add('dark-mode')
        body.classList.remove('light-mode')
    }
})
