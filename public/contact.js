
const contact = document.getElementById('contact_form')
const form_update = document.getElementById('form_update')

contact.addEventListener('submit', async (e) => {
    e.preventDefault()
    form_update.style.display = 'flex'
    form_update.style.color = '#3b82f6'
    form_update.innerText = 'Hold tight 🔃...'
    let data = new FormData(e.target)

    const response = await fetch('/api/submit_contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
