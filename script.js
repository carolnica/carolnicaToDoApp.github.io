let toDo = document.getElementById('todo');
let addBtn = document.getElementById('add');
let clearBtn = document.getElementById('clear');
let containerDiv = document.getElementById('container');

addBtn.onclick = () => {
    let display = document.createElement('p');
    display.classList.add('stringText');
    let checkString = document.createElement("button");
    checkString.classList.add('checkString')
    checkString.innerHTML = '&#10004'
    let impTask = document.createElement("button");
    impTask.classList.add('impTask');
    impTask.innerHTML = 'X'
    let cBox = document.createElement('input')
    cBox.type = 'checkbox'
    cBox.classList.add('cBox')

    if (toDo.value) {
    display.innerHTML = `${toDo.value}`
    containerDiv.appendChild(display)
    containerDiv.appendChild(impTask)
    containerDiv.appendChild(cBox)
} 
    impTask.onclick = () => {
        display.style.backgroundColor = '#a50000'
    }

    cBox.addEventListener('change', function() {
        if (cBox.checked) {
        display.style.backgroundColor = 'green'
        } else {
        display.style.backgroundColor = '#f2c900'
        }
    })

    toDo.value = ''

}

clearBtn.onclick = () => {
    containerDiv.innerHTML = ''
}
