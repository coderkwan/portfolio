
const form_update = document.getElementById('form_update')
const subscribe = document.getElementById('subscribe_form')

subscribe.addEventListener('submit', async (e) => {
    e.preventDefault()
    form_update.style.display = 'flex'
    form_update.style.color = '#3b82f6'
    form_update.innerText = 'Hold tight 🔃...'

    let email = e.target.email.value

    let url = 'https://portfolio-contact-server-jv9v.onrender.com/subscribe'
    // let url = 'http://localhost:3001/subscribe'

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}),
    });

    const result = await response.json();

    if (result.success) {
        e.target.reset()
        form_update.style.display = 'flex'
        form_update.style.color = '#22c55e'
        form_update.innerText = result.message
    } else {
        form_update.style.display = 'flex'
        form_update.style.color = '#fca5a5'
        form_update.innerText = result.message
    }
})
