// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const featureImages = document.querySelectorAll('.feature img');

    featureImages.forEach(image => {
        image.addEventListener('click', () => {
            alert('Feature image clicked!');
        });
    });
});
