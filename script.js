document.addEventListener('DOMContentLoaded', function() {
    const changeColorButton = document.getElementById('changeColorButton');
    const textToChangeColor = document.querySelector('.TITRE');

    changeColorButton.addEventListener('click', function() {
        textToChangeColor.style.color = getRandomColor();
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const changeStyleButton = document.getElementById('changeStyleButton');

    changeStyleButton.addEventListener('click', function() {
        changePageColor();
    });

    function changePageColor() {
        document.body.style.backgroundColor = getRandomColor();
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});