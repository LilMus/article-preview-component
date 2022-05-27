const buttonArr = document.getElementsByClassName("button");
const button = buttonArr[0];

function setClickedTrue() {
	button.setAttribute("isClicked", true);
}

function setClickedFalse() {
	button.setAttribute("isClicked", false);
}

button.addEventListener("click", function () {
	setClickedTrue();
});

setClickedFalse();
