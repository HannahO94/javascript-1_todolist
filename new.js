const listOfToDos = []
const addToDobtn = document.querySelector('#addtodobtn')
const toDoInput = document.querySelector('#todoinput')
const theList = document.querySelector('#theList')
const todo = document.querySelector('#todo')
const form = document.querySelector('form')
let checkbox
let li
let div


addToDobtn.addEventListener('submit', function(event){
    event.preventDefault()
    listOfToDos.push(toDoInput)
    creatingList(toDoInput)    
})

function createList(){
todo.addEventListener('submit',function(event){
    event.preventDefault()
    if (toDoInput.value !== ''){
    checkbox = document.createElement('input')
    checkbox.setAttribute("type", "checkbox")
    const deleteButton = document.createElement('button')
    li = document.createElement('li')
    li.textContent = toDoInput.value
    toDoInput.value = ''
    addToArray(checkbox, li, deleteButton)
    /*theList.appendChild(checkbox)
    theList.appendChild(li)
    theList.appendChild(deleteButton)*/
    }
    })
}
//Start
//createList()

function deleteToDo(deleteButton, div){
    deleteButton.addEventListener('click', function(){
        event.target.remove()
    })

}
//deleteToDo(deleteButton, div)

function addToArray(checkbox,li, deleteButton){
    div = document.createElement('div') //.setAttribute("id", `div${[i]}`)
    div.appendChild(checkbox)
    div.appendChild(li)
    div.appendChild(deleteButton)
    form.appendChild(div)
    
}



/*Innan knappar

todo.addEventListener('submit',function(event){
    event.preventDefault()
    let li = document.createElement('li')
    li.textContent = toDoInput.value
    if (toDoInput.value !== ''){
    toDoInput.value = ''
    theList.appendChild(li)
    }
    })
    */