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


const buy  = document.querySelector('.buy__wrapper');
const counter  = document.querySelector('.counter');
const modalWrapper  = document.querySelector('.modal__wrapper');

let zero = 0
buy.addEventListener('click', (e) => {

        if (e.target.parentNode.className == "buy__item" && e.target.tagName == "BUTTON") {
            let product = e.target.parentNode.childNodes[3].innerText;

            let x = pushData(product);
            modalWrapper.append(x);
        }

})

function pushData(product) {

    const temp = document.createElement('div');
    temp.classList.add("product__item");

    const title = document.createElement('div');
    title.classList.add("product__title");

    title.innerText = `${product}`;

    const count = document.createElement('div');
    count.classList.add("product__count");

    let testArr = [];
    let products = document.querySelectorAll('.product__title');
    products.forEach((item) => {
        testArr.push(item.innerText);
    })

    if (testArr.includes(product)) {

    } else {
        counter.innerText = ++zero;
        count.innerText = `${counter.innerText}`;
        temp.append(title);
        temp.append(count);
    }

    return temp;
}

const allBtns = document.querySelectorAll('.buy__btn');
const modalWindow = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const overlay = document.querySelector('.overlay');

allBtns.forEach((item) => {
    item.addEventListener('click' , () => {
        modalWindow.classList.remove('hiding');
        overlay.classList.remove('hiding');
    })
})

closeBtn.addEventListener('click', () => {
    modalWindow.classList.add('hiding');
    overlay.classList.add('hiding');

})

overlay.addEventListener('click', () =>{
    modalWindow.classList.add('hiding');
    overlay.classList.add('hiding');
})



