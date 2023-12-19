const pictures = document.querySelectorAll('.picture');
for (const picture of pictures) {
    picture.addEventListener('click', () => {
        removeDisplayClasses();
        picture.classList.add('display');
    });
}

function removeDisplayClasses() {
    pictures.forEach(picture => {
        picture.classList.remove('display');
    })
}