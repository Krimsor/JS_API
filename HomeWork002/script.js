const btnOldImg = document.querySelector('.old-img');
const btnLastImg = document.querySelector('.last-img');
const container = document.querySelector('.container');
const currentImage = document.querySelector('.current-image');

let index = 0;

btnOldImg.addEventListener("click", () => {
    if (index === 0) {
        index = currentImage.children.length;
    }
    index--;
    wiewImg(index);
})

btnLastImg.addEventListener("click", () => {
    if (index === currentImage.children.length - 1) {
        index = -1;
    }
    index++;
    wiewImg(index);
})

const wiewImg = (index) => {
    container.children[0].src = currentImage.children.item(index).src;
}

for (let i = 0; i < currentImage.children.length; i++) {
    currentImage.children[i].addEventListener("click", (el) => {
        container.children[0].src = el.target.src;
        index = i;
    })
}