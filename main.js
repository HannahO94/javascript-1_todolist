const listOfToDos = []
const addToDobtn = document.querySelector('#addtodobtn')
const toDoInput = document.querySelector('#todoinput')
const theList = document.querySelector('#theList')

addToDobtn.addEventListener('submit', function(event){
    event.preventDefault()
    listOfToDos.push(toDoInput)
    creatingList(toDoInput)    
})

function creatingList(toDo){
    const listtodo = document.querySelector('#theList')
    const li = document.createElement('li')
    li.textContent = toDo
    listtodo.appendChild(li)
        
    }


creatingList(toDoInput)