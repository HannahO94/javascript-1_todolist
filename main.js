/*const listOfToDos = []
const addToDobtn = document.querySelector('#addtodobtn')
const toDoInput = document.querySelector('#todoinput')
const theList = document.querySelector('#theList')
const todo = document.querySelector('#todo')
const form = document.querySelector('form')
let checkbox
let li
let div
*/

/*addToDobtn.addEventListener('submit', function(event){
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
    theList.appendChild(deleteButton)
    }
    })
}*/
//Start
//createList()

/*function deleteToDo(deleteButton, div){
    deleteButton.addEventListener('click', function(){
        event.target.remove()
    })

//}
//deleteToDo(deleteButton, div)

function addToArray(checkbox,li, deleteButton){
    div = document.createElement('div') //.setAttribute("id", `div${[i]}`)
    div.appendChild(checkbox)
    div.appendChild(li)
    div.appendChild(deleteButton)
    form.appendChild(div)
    
}



/* Innan knappar

todo.addEventListener('submit',function(event){
    event.preventDefault()
    let li = document.createElement('li')
    li.textContent = toDoInput.value
    if (toDoInput.value !== ''){
    toDoInput.value = ''
    theList.appendChild(li)
    }
    })*/

document.querySelector('#addtodobtn').addEventListener('click', function(event){
    event.preventDefault()
    var inputValue = document.querySelector('#todoinput').value
    if (inputValue){
         addItemToDo(inputValue)    
         document.querySelector('#todoinput').value = ''
    }
    
})

function removeItem(event){
    let item = this.parentNode.parentNode
    let parent = item.parentNode
    parent.removeChild(item)
}

function completeItem(){
    let item = this.parentNode.parentNode
    let parent = item.parentNode
    let parendId = parent.id

    let target = (parentId === 'todo') ? document.querySelector('#completed'):document.querySelector('#todo')
    parent.removeChild(item)
    target.insertBefore(item, target.childNodes[0])
}

//adds a new item to the to do list
function addItemToDo(text){
    let list = document.querySelector('.theList')
    let item = document.createElement('li')
    item.innerText = text

    let buttons = document.createElement('div')
    buttons.classList.add('buttons')

    let remove = document.createElement('button')
    remove.classList.add('remove')

    // click event for removing button
    remove.addEventListener('click', removeItem)

    let complete = document.createElement('button')
    complete.classList.add('complete')

    //click for completing
    complete.addEventListener('click', completeItem)

    buttons.appendChild(remove)
    buttons.appendChild(complete)
    item.appendChild(buttons)
    list.insertBefore(item, list.childNodes[0])


}