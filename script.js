var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var botoncito = document.createElement("button");
	botoncito.innerHTML = "Delete";
	botoncito.classList.add("botonlista");
	li.appendChild(botoncito);
	li.appendChild(document.createTextNode(input.value));
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

function actionItem(event) {
	console.log(event.target);

	/* If user clicks on the button (not the text item)*/
	if (event.target.classList.contains("botonlista")) {
		console.log("test" + event.target.parentNode);
		event.target.parentNode
	}

	if (event.target.classList.contains("done")) {
		event.target.classList.remove("done");
	}
	else {
		if (!event.target.classList.contains("botonlista")) {
			event.target.classList.add("done");
		}
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", actionItem);