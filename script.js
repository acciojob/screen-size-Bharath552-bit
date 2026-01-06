//your JS code here. If required.
const head=document.querySelector("h1");
window.addEventListener('resize',()=>{
	head.innerHTML=`Width: ${window.innerHeight} and Height: ${window.innerWidth}`
})
