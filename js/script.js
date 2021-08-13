const btn  = document.querySelector('button');
const slide  = document.querySelector('.slide');
// debugger;
const array = ['first', 'second', 'third'];
let z = 0;
btn.addEventListener('click', () => {     
    slide.classList.remove("first", "second", "third");
    if (z < 2) {
        slide.classList.add(array[++z]); 
    } else {
        z = 0;
        slide.classList.add(array[z]);
    }
})