secondHeaderButton.addEventListener('click', function() {
    const secondHeader = document.querySelector('#secondHeader')
    secondHeader.textContent = 'Changed 2nd User Directory'
    document.querySelector('#secondHeader').style.setProperty('color', 'red')
})

saveButton.addEventListener('click', function() {
    secondHeader.textContent = document.querySelector('#textInput').value
    document.querySelector('#secondHeader').style.setProperty('color', 'blue')
})