const add = document.querySelector('.add')
const gadd = document.querySelector('.gadd')
const list = document.querySelector('.todos')

add.addEventListener('submit',(e) => {
	e.preventDefault()
	const todo = gadd.value.trim()
	if(todo.length){
		generateLi(todo)
		// todo.reset()
	}
})

const generateLi = (todo) =>{
	const html = `
	<li
					class="
						list-group-item
						d-flex
						justify-content-between
						align-items-center
					"
				>
					<span>${todo}</span>
					<i class="far fa-trash-alt delete"></i>
				</li>`

			list.innerHTML += html
}
list.addEventListener('click', function(e){
	if(e.target.classList.contains('delete')){
		e.target.parentElement.remove()
	}
})

const search = document.querySelector('.search input')
search.addEventListener('keyup', () => {
	const term = search.value.trim().toLowerCase();
	filtered(term)
})

const filtered = (term) => {
	Array.from(list.children)
		.filter((todo) => !todo.textContent.toLowerCase().includes(term))
		.forEach((todo) => todo.classList.add('filtered'))
	Array.from(list.children)
		.filter((todo) => todo.textContent.toLowerCase().includes(term))
		.forEach((todo) => todo.classList.remove('filtered'))
}