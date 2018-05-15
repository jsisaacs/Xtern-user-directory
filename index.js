// DAY 1 
// secondHeaderButton.addEventListener('click', function() {
//     const secondHeader = document.querySelector('#secondHeader')
//     secondHeader.textContent = 'Changed 2nd User Directory'
//     document.querySelector('#secondHeader').style.setProperty('color', 'red')
// })

// saveButton.addEventListener('click', function() {
//     secondHeader.textContent = document.querySelector('#textInput').value
//     document.querySelector('#secondHeader').style.setProperty('color', 'blue')
// })

// DAY 2
const form = document.querySelector('form#userForm')

function renderList(ev) {
  const form = ev.target
  const userName = form.userName.value
  const age = form.age.value
  const favoriteColor = form.favoriteColor.value
  const users = document.querySelector('#users')
  const list = document.createElement('ul')

  const nameItem = document.createElement('li')
  nameItem.textContent = `Name: ${userName}`
  
  const ageItem = document.createElement('li')
  ageItem.textContent = `Age: ${age}`

  itemCollection = [nameItem, ageItem]

  function renderColor(favColor) {
    list.style.borderLeft = `6px solid ${favColor}`
    list.style.backgroundColor = 'whitesmoke'
    list.style.paddingTop = '1rem'
    list.style.paddingBottom = '1rem'
  }

  function renderListItem(favColor, collection) {
    renderColor(favColor)
    list.appendChild(collection[0])
    list.appendChild(collection[1])
  }

  renderListItem(favoriteColor, itemCollection)
  users.appendChild(list)
}

const handleSubmit = function(ev) {
  ev.preventDefault()
  renderList(ev)
  form.reset()
  form.userName.focus()
}

form.addEventListener('submit', handleSubmit)