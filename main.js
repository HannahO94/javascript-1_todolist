
const listOfToDos = []
let cattd
//Puts default value in date input to todays date
let field = document.querySelector('#datumet')
let date = new Date
field.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +'-' + date.getDate().toString().padStart(2, 0);


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
         field.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +'-' + date.getDate().toString().padStart(2, 0);
         
    }
    else {
        document.querySelector('#datumet').classList.add('giveTime')
    }
    
})
//removes todo when remove button is clicked 
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
    checkIfDatePassed(timeitem)
    let td = document.createElement('td')  
    cattd = document.createElement('td')
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
    
    
    
}

// reading value from selected radiobutton
let radiobtns = document.querySelector('#filtercategory').querySelectorAll('.radio')
let prev
let checkcat
for (var i = 0; i < radiobtns.length; i++) {
    radiobtns[i].addEventListener('change', function() {
        (prev) ? console.log(prev.value): null;
        if (this !== prev) {
            prev = this;
        }
        //console.log(this.value)
        checkcat = this.value
        //console.log(checkcat)
        filterByCategory(checkcat)
        //filterFunc(filterByCategory, filteredListOfToDos)

    });
}

// function for filtering based on selection of radiobutton 
function filterByCategory(radiobuttoncategory){
    let tabl = document.querySelector('table')
    let trow = tabl.querySelectorAll('tr')
    const filterField = document.querySelector('#filter')
    for (i = 0; i < trow.length; i++) {
        tde = trow[i].getElementsByTagName("td")[5];
        txtCatValue = tde.textContent || tde.innerText;
        //console.log(txtValue)
        console.log(radiobuttoncategory)
        if(radiobuttoncategory.toUpperCase() === "ALLA"){
            trow[i].style.display = ""
            filterField.addEventListener('input', filteredListOfToDos)
        }
        else if (txtCatValue.toUpperCase() === radiobuttoncategory.toUpperCase()) {
            trow[i].style.display = ""
            filterField.addEventListener('input', filteredListOfToDos)

        }else if (txtCatValue.toUpperCase() === radiobuttoncategory[2].toUpperCase()) {
            trow[i].style.display = ""
            filterField.addEventListener('input', filteredListOfToDos)

        }else if (txtCatValue.toUpperCase() === radiobuttoncategory[3].toUpperCase()) {
            trow[i].style.display = ""
            filterField.addEventListener('input', filteredListOfToDos)
        }else {
            trow[i].style.display = "none";
            filterField.addEventListener('input', filteredListOfToDos)
        }
      }
   
}


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



//function for filtering both radiobuttons and filtertext input
/*function filterFunc(){
    filterByCategory()
    if(radiobuttoncategory !== 'Alla'){

    }
}*/

// ckecking if the set date has passed 
function checkIfDatePassed(timeitem){
    const now = new Date()
    const nowDate = now.getFullYear().toString() + (now.getMonth() + 1).toString().padStart(2, 0) + now.getDate().toString().padStart(2, 0);
    let nowtime = timeitem.innerText.toString()
    let styletime = nowtime
    nowtime = nowtime.replace('-', '')
    nowtime = nowtime.replace('-', '')
    if(parseInt(nowtime) < parseInt(nowDate)){
        timeitem.classList.add('timePassed')
        timeitem.textContent = styletime + '🕚'
        
    }
}