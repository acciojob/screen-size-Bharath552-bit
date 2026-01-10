const head = document.querySelector("h1");

function updateSize() {
	head.innerHTML = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}

updateSize();
window.addEventListener("resize", updateSize);
