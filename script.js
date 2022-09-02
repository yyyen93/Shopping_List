var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll('li');



// Add delete button
function deleteButton(parent) {
	var deleteButton = parent.appendChild(document.createElement("button"));
	deleteButton.classList.add('delBtn');
	deleteButton.appendChild(document.createTextNode('Delete'));
	deleteButton.addEventListener('click', function () {
		this.parentElement.remove();
	})
}

// Add class 'done' and delete button to the existing 'li'
for (var i = 0; i < li.length; i++) {
	li[i].addEventListener('click', function (event) {
		event.target.classList.toggle('done');
	});
	deleteButton(li[i]);
}






function inputLength() {
	return input.value.length;
}


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	deleteButton(li)
	// Add class 'done' to the other 'li'
	li.addEventListener('click', function (event) {
		event.target.classList.toggle('done');
	})
	ul.appendChild(li);

	input.value = "";
}







function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}


function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


// https://stackoverflow.com/questions/61173115/how-to-add-buttons-next-to-each-list-item-to-delete-the-item-when-clicked-on-its