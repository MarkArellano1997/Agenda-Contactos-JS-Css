const form = document.getElementById('form')
const nombre = form[0]
const teléfono = form[1]

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let contactItem = document.createElement('li')
    contactItem.innerHTML = `<span>${nombre.value} - ${teléfono.value}</span>`
    let btnDelete = document.createElement('button')
    btnDelete.innerHTML = "Eliminar"
    btnDelete.addEventListener('click', () => {
        contactItem.remove()
    })
    contactItem.appendChild(btnDelete)
    document.getElementById('contactList').appendChild(contactItem)
    nombre.value = ""
    teléfono.value = ""
})

const search = (item) => {
    let contacts = document.querySelectorAll('li')
    contacts.forEach((contact) => {
        if (contact.innerText.includes(item.value)) {
            contact.style.display = ""
        }else {
            contact.style.display = "none"
        }
    })
}