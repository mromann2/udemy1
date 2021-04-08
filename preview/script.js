const button = document.querySelector('button')
const link = document.querySelector('a')
// не верно button.onclick =  () => alert('salam e')

let i = 0
const deleElement =  () => {
    alert('salam yyyy')
    // button.removeEventListener('click', deleElement)
}

button.addEventListener('click', deleElement, {once: true})
// button.addEventListener('click', (event) => event.target.remove())

link.addEventListener('click', (event) => 
event.preventDefault(alert('фигушки!')))