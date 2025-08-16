let inputElement = document.querySelector('.form-control')
let colorsElemens = document.querySelectorAll('.color-box')
let deleteElement = document.querySelector('#btn-delete')
let listElement = document.querySelector('#listed')
let addElement = document.querySelector('#btn-save')
let cardTextElement = document.querySelector('.card-text')
let cardElement = deleteElement.querySelector('.card')

colorsElemens.forEach(function (colorsElemens){
    colorsElemens.addEventListener('click' , function (event){
        let mianColor = event.target.style.backgroundColor
        inputElement.style.backgroundColor = mianColor
    })
})

deleteElement.addEventListener('click' , function (){
    inputElement.style.backgroundColor = 'white'
    inputElement.value = ''
})

addElement.addEventListener('click' , function(){
    let createDivElement = document.createElement('div')
    createDivElement.className = "card shadow-sm rounded"

    let mianColor = inputElement.style.backgroundColor
    createDivElement.style.backgroundColor = mianColor

    let createPElement = document.createElement('p')
    createPElement.className = "card-text p-3"
    createPElement.innerHTML = inputElement.value
    createDivElement.append(createPElement)
    listElement.append(createDivElement)

    inputElement.style.backgroundColor = 'white'
    inputElement.value = ''

    createDivElement.addEventListener('click' , function(){
        createDivElement.remove()
    })
})
