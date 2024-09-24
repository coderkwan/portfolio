
const contact = document.getElementById('contact_form')
const form_update = document.getElementById('form_update')

contact.addEventListener('submit', async (e) => {
    e.preventDefault()
    form_update.style.display = 'flex'
    form_update.style.color = '#3b82f6'
    form_update.innerText = 'Hold tight 🔃...'

    let email = e.target.email.value
    let name = e.target.name.value
    let message = e.target.message.value

    const response = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, message}),
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
