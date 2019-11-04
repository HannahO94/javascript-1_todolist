
const listOfToDos = []

document.querySelector('#addtodobtn').addEventListener('click', function(event){
    event.preventDefault()
    var inputValue = document.querySelector('#todoinput').value
    var dated = document.querySelector('#datumet').value
    let category = document.querySelector('#category').value
    if (inputValue && dated && category){
         addItemToDo(inputValue, dated, category)    
         document.querySelector('#todoinput').value = ''
         document.querySelector('#datumet').value = ''
         document.querySelector('#datumet').classList.remove('giveTime')
    }
    else {
        document.querySelector('#datumet').classList.add('giveTime')
    }
    
})

function removeItem(event){
    let item = this.parentNode.parentNode
    let parent = item.parentNode
    parent.removeChild(item)
}


//adds a new item to the to do list
function addItemToDo(text, dated, category){
    let list = document.querySelector('.theList')
    let row = document.createElement('tr')
    let item = document.createElement('td')
    item.innerText = text
    listOfToDos.push(item.innerText)
    let timeitem = document.createElement('td')
    timeitem.innerText = dated
    let categoryitem = document.createElement('td')
    categoryitem.innerText = category

    let buttons = document.createElement('td')
    buttons.classList.add('buttons')

    let remove = document.createElement('button')
    remove.classList.add('remove')
    remove.textContent = 'TA BORT'
    let removebuttontd = document.createElement('td')

    // click event for removing button
    remove.addEventListener('click', removeItem)

    let complete = document.createElement('input')
    complete.setAttribute("type", "checkbox")
    let checkboxtd = document.createElement('td')
    
    //click for completing
    complete.addEventListener('click', function(){
        if (this.checked){
            item.classList.add('done')
            timeitem.classList.add('done')
            categoryitem.classList.add('done')
        }
        else{
            item.classList.remove('done')
            timeitem.classList.remove('done')
            categoryitem.classList.remove('done')
        }
    })

    let td = document.createElement('td')  
    let cattd = document.createElement('td')
    cattd.appendChild(categoryitem)
    td.appendChild(timeitem)
    removebuttontd.appendChild(remove)
    checkboxtd.appendChild(complete)
    row.appendChild(checkboxtd)
    row.appendChild(item)
    row.appendChild(buttons)
    row.appendChild(td)
    row.appendChild(cattd)
    row.appendChild(removebuttontd)
    list.appendChild(row)
    //getDate(dated, row)
    checkIfDatePassed(timeitem)
    
}


const filterField = document.querySelector('#filter')
filterField.addEventListener('input', filteredListOfToDos)

//shows a list of filtered to dos 
function filteredListOfToDos() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('filter');
    filter = input.value.toUpperCase();
    ul = document.getElementById("filterlista");
    tr = ul.getElementsByTagName('tr');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
}
function checkIfDatePassed(timeitem){
    const now = new Date()
    const nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate())

    if (parseInt(timeitem) > nowDate){
        timeitem.classList.add('timePassed')
        timeitem.innerText = timeitem + '🕚'
    }
}