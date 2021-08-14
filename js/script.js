const btn__right  = document.querySelector('.btn__right');
const btn__left  = document.querySelector('.btn__left');
const slide  = document.querySelector('.slide');
const array = ['first', 'second', 'third'];
const blocks = document.querySelectorAll('.info');

let z = 0;
btn__right.addEventListener('click', () => {     
    slide.classList.remove("first", "second", "third");
    
    if (z < 2) {
        slide.classList.add(array[++z]); 
    } else {
        z = 0;
        slide.classList.add(array[z]);
    }

    showBlock(z) 
})

btn__left.addEventListener('click', () => {     
    slide.classList.remove("first", "second", "third");
    if (z <= 0) {
        z = 2;
        slide.classList.add(array[z]); 
    } else {
        slide.classList.add(array[--z]);
    }
    showBlock(z) 
})

function showBlock(i) {
    blocks.forEach(item => {
        item.classList.remove("active");
    });

    blocks[i].classList.add("active");
}

