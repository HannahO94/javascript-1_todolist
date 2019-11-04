const listOfToDos = []

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
    let row = document.createElement('tr')
    let item = document.createElement('td')
    item.innerText = text
    listOfToDos.push(item.innerText)

    let buttons = document.createElement('td')
    buttons.classList.add('buttons')

    let remove = document.createElement('button')
    remove.classList.add('remove')
    remove.textContent = 'TA BORT'
    let removebuttontd = document.createElement('td')

    // click event for removing button
    remove.addEventListener('click', removeItem)

    /*let complete = document.createElement('button')
    complete.classList.add('complete')
    complete.textContent = 'Complete'*/
    let complete = document.createElement('input')
    complete.setAttribute("type", "checkbox")
    let checkboxtd = document.createElement('td')

    //click for completing
    complete.addEventListener('click', function(){
        if (this.checked){
            item.classList.add('done')
        }
    })

    removebuttontd.appendChild(remove)
    checkboxtd.appendChild(complete)
    row.appendChild(item)
    row.appendChild(checkboxtd)
    row.appendChild(removebuttontd)
    row.appendChild(buttons)
    
    //list.insertBefore(item, list.childNodes[0])

    list.appendChild(row)
}


const filterField = document.querySelector('#filter')
filterField.addEventListener('input', myFunction)
/*filterField.addEventListener('input', function(event){
    console.log(event.currentTarget.value)
    const filteredList = listOfToDos.filter(function(todo){
        //console.log(todo.currentTarget.value)
        return todo.toLowerCase().includes(event.currentTarget.value.toLowerCase())
    })
    filteredListOfToDos(filteredList)
})*/

/*function filteredListOfToDos(filtered){
    const newToDoList = document.querySelector('#filterlista')
    newToDoList.innerHTML = ''
    filtered.forEach(function(todo){
        const newLi = document.createElement('tr')
        newLi.textContent = todo
        newToDoList.appendChild(newLi)
    })
}
filteredListOfToDos(listOfToDos)*/

/*filterField.addEventListener('input', function(event){
    let list = document.querySelector('.theList')
    for (let i = 0; i < list.length; i++){
        if (list[i].includes(event.currentTarget.value.toLowerCase())){
            continue
        }else {
            list[i].style.display = 'none' 
        }
    }

})*/

function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('filter');
    filter = input.value.toUpperCase();
    ul = document.getElementById("filterlista");
    tr = ul.getElementsByTagName('tr');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }