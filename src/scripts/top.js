const hamburger = document.querySelector(".hamburger");

console.log(hamburger);
const headerRight = document.querySelector('.header-right')

hamburger.addEventListener("click", () => {
	if (!hamburger.classList.contains("open")) {
		hamburger.classList.add("open");
		headerRight.classList.add('open')
	} else {
		hamburger.classList.remove("open");
		headerRight.classList.remove('open')
	}
});
