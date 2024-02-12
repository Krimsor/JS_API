window.addEventListener('load', () => {
    renderPhoto();
});

const localStorageKey = "LikeIt";
const liked = document.querySelector('.liked');

async function getRandomPhoto() {
    const apiKey = 'FgiaKClJGM8v0SCryDxer3Tj4mSly5kErtAflrhWkSY';
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`);
        const photo = await response.json();
        return photo;
    } catch (error) {
        console.error('Ошибка при загрузке фотографий:', error);
        return {};
    }
}

async function renderPhoto() {
    const photo = await getRandomPhoto();
    if (photo) {
        const imageBox = document.querySelector('.image_box');
        const img = document.createElement('img');
        img.classList.add('image');

        img.src = photo.urls.small;
        img.alt = photo.alt_description;
        imageBox.appendChild(img);

        const imagePhotographerNameDiv = document.querySelector('.image_photographer-name');
        imagePhotographerNameDiv.textContent = `${photo.user.name}`;

        const imageLikesCounterSpan = document.querySelector('.image_likes-counter');
        imageLikesCounterSpan.textContent = `${photo.likes}`;

    }
}

const counterButton = document.querySelector(".image_likes-button");
counterButton.addEventListener('click', function () {
    increaseCounter();
});

function increaseCounter() {
    // Получаем кнопку "Лайка"
    const likeCounter = document.querySelector(".image_likes-counter");
    const currentCounter = parseInt(likeCounter.textContent)

    // Начисляем лайки
    likeCounter.textContent = currentCounter + 1;

    // Сохраняем данные о количестве лайков
    localStorage.setItem(localStorageKey, likeCounter.textContent);
}