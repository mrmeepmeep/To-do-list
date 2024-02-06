import './style.css'
// Dynamically creates Todo
 const createTodo = (title, description, dueDate, priority, notes) => {
    return {
        id : Date.now(),
        title,
        description,
        dueDate,
        priority,
        notes
    }
}

// Array libraries
const library = {
    todoLibrary : [],
    projectLibrary : [],
    allTasksLibrary : []
}

// Some dummy content
const legend = createTodo("Sleep","Sleep in bed", "today", "Important","taking magnesium")
const legend2 = createTodo("Sunshine", "Adventure time", "Moonlight", "Urgent", "Exploring galaxies");
const legend3 = createTodo("Sunshine", "Adventure time", "Moonlight", "Urgent", "Exploring galaxies");
library.todoLibrary.push(legend,legend2,legend3)


// Checks amount of Todos in a Array and dynamically creates li elements for each object
const content = document.querySelector(".todo-container")

library.todoLibrary.forEach(function(todo) {
    let div = document.createElement('div')
    div.classList.add('babem')
    div.style.listStyleType = 'none'

    div.innerHTML = `<li>Title: ${todo.title}</li> <li>Description: ${todo.description}</li> <li>Duedate: ${todo.dueDate}</li>
    <li>Priority: ${todo.priority}</li>`
    content.append(div)
})


/* // Checks amount of objects in array
 function generateTodo(arg) {
    let items = ''
    for(let i = 0; i < arg.length; i++){
        items += `<li>${arg[i]}</li>`
    }
    return items
}
*/




console.log(library.todoLibrary)
console.log(legend2,legend)

export {createTodo, library}