const btnOldImg2 = document.querySelector('.old-img-2');
const btnLastImg2 = document.querySelector('.last-img-2');
const container2 = document.querySelector('.container-2');
const currentImage2 = document.querySelector('.current-image-2');

let index1 = 1;

btnLastImg2.addEventListener("click", () => {
    if (index1 === container2.children.length) {
        index1 = 1;
    } else {
        index1++;
    }
    showImg(index1 - 1);
})

btnOldImg2.addEventListener("click", () => {
    if (index1 === 1) {
        index1 = container2.children.length;
    } else {
        index1--;
    }
    showImg(index1 - 1);
})

const showImg = (indexImg) => {
    container2.children.item(indexImg).style.display = "block";
    for (let i = 0; i < container2.children.length; i++) {
        if (i !== indexImg) {
            container2.children.item(i).style.display = "none";
        }
    }
    showActivItem(currentImage2.children.item(indexImg));
}

currentImage2.addEventListener("click", (element) => {
    index1 = Number.parseInt(element.target.textContent);
    showImg(index1 - 1);
    showActivItem(element.target);
})

const showActivItem = (element) => {
    if (element.classList[0] !== "current-image-2") {
        element.classList.add("active");
        if (element.classList.contains('active')) {
            document.querySelectorAll('.active').forEach(item => item.classList.remove('active'));
            element.classList.add('active');
        }
    }
}

showActivItem(currentImage2.children.item(index1 - 1));