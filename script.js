//your JS code here. If required.
// const head=document.querySelector("h1");
// window.addEventListener('resize',()=>{
// 	head.innerHTML=`Width: ${window.innerWidth} and Height: ${window.innerHeight}`
// })

const sizeInfo = document.getElementById('sizeInfo').querySelector('h1');

// Function to update the dimensions
function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    sizeInfo.textContent = `Width: ${width} and Height: ${height}`;
}

// Add event listener for resize
window.addEventListener('resize', updateSize);

// Initial call to display the size on page load
updateSize();
