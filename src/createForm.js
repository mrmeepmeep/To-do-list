const dialog = document.querySelector("dialog")
const confirmBtn = document.querySelector("#confirmBtn")
const container = document.querySelector(".container")
import './style.css'

function createForm(){
    const form = document.createElement("form")
    const taskInput = document.createElement("input")
    taskInput.setAttribute("placeholder","Task name")
    const dateInput = document.createElement("input")
    dateInput.setAttribute("type", "date")
    const priorityInput = document.createElement("input")
    priorityInput.setAttribute("type","checkbox")
    const priorityLabel = document.createElement("label")
    priorityLabel.textContent = "Priority"


    confirmBtn.addEventListener("click",(e) => {
        e.preventDefault
        dialog.close()

        const taskValue = document.createElement('p')
        taskValue.textContent += `Task: ${taskInput.value}`
        
        let dateValue = document.createElement('p')
        dateValue += `Date: ${dateInput.value}`

        let priorityValue = document.createElement('span')
        if (priorityInput.checked){
            priorityValue.textContent = `Priority: Yes`
        } else (priorityValue.textContent = 'Priority: No')
        const content = document.createElement("div")
        content.classList.add('todo-container')
        content.append(taskValue,dateValue,priorityValue)
        container.appendChild(content)
        
    })

    form.append(taskInput,dateInput,priorityInput,priorityLabel)
    dialog.appendChild(form)
};



export default createForm 
    

