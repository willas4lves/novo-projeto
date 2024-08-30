console.log('Application is running')

const input = document.querySelector('#task')
const button = document.querySelector("#button_create" )
const ul = document.querySelector(".task-list")

const DB_KEY = "@test"
const array = [{description: ' Blazkowicz'  , isCompleted: false }]

document.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem(DB_KEY, JSON.stringify(array))

    const storage = localStorage.getItem(DB_KEY)

    if(storage) {
        console.log(JSON.parse(storage))
    }


}
)

button.addEventListener('click', (event) =>{
    event.preventDefault();

    if(!input.value) {
        return alert('precisa ser prencehida')
    }

    const checkbox = `<input type="checkbox" />`

    const li = `<li class="task-item">
    ${checkbox}
    <p>${input.value}</p>
    </li>`

    ul.innerHTML += li

    

})

