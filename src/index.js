import './style.css'
import createForm from './createForm.js'

const dialogBtn = document.querySelector('#dialogBtn')
const closeBtn = document.querySelector("#closeBtn")
const dialog = document.querySelector("dialog")

createForm()


dialogBtn.addEventListener("click",() => {
dialog.showModal()
})

closeBtn.addEventListener("click", () => {
    dialog.close()
})
