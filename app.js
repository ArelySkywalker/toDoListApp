loadEvents();
// load every event on the page
function loadEvents() {
	document.querySelector('form').addEventListener('submit', submit);
	document.getElementById('clear').addEventListener('click', clearList);
	// recently added
	document.querySelector('ul').addEventListener('click', deleteOrTick);
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

// deleteTick
function deleteOrTick(e) {
	if(e.target.className == 'delete') {
		deleteTask(e);
	}else {
		tickTask(e);
	}
}

// delete tast
function deleteTask(e) {
	let remove = e.target.parentNode;
	let parentNode = remove.parentNode;
	parentNode.removeChild(remove);
}

// tick a task
function tickTask(e) {
	const task = e.target.nextSibling;
	if(e.target.checked) {
		task.style.textDecoration = 'line-through';
		task.style.color = '#ffcdab';
	}else {
		task.style.textDecoration = 'none';
		task.style.color = '#2f4f4f';
	}
}