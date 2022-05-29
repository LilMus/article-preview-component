const button = document.getElementsByClassName("button")[0];
const socials = document.getElementsByClassName("socials")[0];
const arrow = document.getElementsByClassName("arrow")[0];
const author = document.getElementsByClassName("author")[0];

function setClickedTrue(element) {
	element.setAttribute("isClicked", true);
}

function setClickedFalse(element) {
	element.setAttribute("isClicked", false);
}

function displaySocials() {
	socials.style.display = "flex";
	arrow.style.display = "inline-block";
	if (window.screen.width < 1300) {
		author.style.display = "none";
		button.style = `
			position : absolute;
			right: 0;
			top : 20%;
		`;
	}
}

function hideSocials() {
	socials.style.display = "none";
	arrow.style.display = "none";
	if (window.screen.width < 1300) {
		author.style.display = "flex";
		button.style.position = "static";
	}
}

button.addEventListener("click", function () {
	if (button.getAttribute("isClicked") === "true") {
		setClickedFalse(button);
		hideSocials();
		return;
	}
	setClickedTrue(button);
	displaySocials();
});

setClickedFalse(button);
