loadEvents();
// load every event on the page
function loadEvents() {
	document.querySelector('form').addEventListener('submit', submit);
	// recently added
	document.getElementById('clear').addEventListener('click', clearList);
}

// submit data function
function submit(e) {
	e.preventDefault();
	let input = document.querySelector('input');
	if(input.value != '') {
		addTask(input.value);
	}
	input.value = '';
}

// add tasks
function addTask(task) {
	let ul = document.querySelector('ul');
	let li = document.createElement('li');
	li.innerHTML = `<span class="delete">x</span><input type="checkbox"><label>${task}</label>`;
	ul.appendChild(li);
	document.querySelector('.tasksBoard').style.display = 'block';
}

// clear List
function clearList(e) {
	// setting the ul elements to an empty string
	let ul = document.querySelector('ul').innerHTML = '';
}