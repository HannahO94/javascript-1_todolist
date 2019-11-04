
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

//adds a new item to the to do list
function addItemToDo(text){
    let list = document.querySelector('.theList')
    let item = document.createElement('li')
    item.innerText = text

    let buttons = document.createElement('div')
    buttons.classList.add('buttons')

    let remove = document.createElement('button')
    remove.classList.add('remove')
    remove.textContent = 'TA BORT'

    // click event for removing button
    remove.addEventListener('click', removeItem)

    /*let complete = document.createElement('button')
    complete.classList.add('complete')
    complete.textContent = 'Complete'*/
    let complete = document.createElement('input')
    complete.setAttribute("type", "checkbox")

    //click for completing
    complete.addEventListener('click', function(){
        if (this.checked){
            item.classList.add('done')
        }
    })

    buttons.appendChild(remove)
    buttons.appendChild(complete)
    item.appendChild(buttons)
    //list.insertBefore(item, list.childNodes[0])
    list.appendChild(item)


}

/*function completeItem(event){
    console.log('hej')
    
    
}*/