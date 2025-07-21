const header = document.querySelector('header');
window.addEventListener('scroll', function () {
    x = window.pageYOffset;
    if (x > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");

    }
});


// Slider
const imgPosition = document.querySelectorAll('.aspect-ratio-169 img');
const imgContainer = document.querySelector('.aspect-ratio-169');
const dotItem = document.querySelectorAll('.dot');
let imgNumber = imgPosition.length;
let index = 0;

imgPosition.forEach((img, index) => {
    img.style.left = `${index * 100}%`;
    dotItem[index].addEventListener('click', () => {
        slider(index);
        clearInterval(runSlider);
        index = index;
    });
});

function runSlider() {
    index++;
    if (index >= imgNumber) {
        index = 0;
    }
    slider(index);
}

function slider(index) {
    imgContainer.style.transform = `translateX(${-index * 100}%)`;
    dotItem.forEach(dot => dot.classList.remove('active'));
    dotItem[index].classList.add('active');
}
setInterval(runSlider, 5000);


//Category slide bar
const itemslidebar = document.querySelectorAll('.category-left-li');
itemslidebar.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('block');
        item.querySelector('ul').classList.toggle('block');
    });
});

//product details

const bigImg = document.querySelector('.product-content-left-big-img img');
const smallImg = document.querySelectorAll('.product-content-left-small-img img');
smallImg.forEach((imgItem, X) => {
    imgItem.addEventListener('click', () => {
        bigImg.src = imgItem.src;
    });
});



const baoquan = document.querySelector('.baoquan');
const chitiet = document.querySelector('.chitiet');

if(baoquan) {
    baoquan.addEventListener('click', () => {
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none";
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "block";
    });
}
if(chitiet) {
    chitiet.addEventListener('click', () => {
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block";
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none";
    });
}

const button= document.querySelector('.product-content-right-bottom-top');
if(button){
    button.addEventListener('click', () => {
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB");
    });
}