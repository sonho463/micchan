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

const linkButtonCollection= document.getElementsByTagName('a');
const linkButtonArray = Array.from(linkButtonCollection)
console.log(linkButtonArray)

linkButtonArray.forEach((ele)=>{
	ele.addEventListener('click',()=>{
		console.log('click')
		if(hamburger.classList.contains('open')){
			hamburger.classList.remove('open')
			headerRight.classList.remove('open')
		}
	})
})
