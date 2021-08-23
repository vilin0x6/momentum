const images = [
    "0.jpg", "1.png", "2.jpg", "3.png", "4.jpg", "5.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const backgroundImage = document.createElement("img");

backgroundImage.src = `img/${chosenImage}`;

document.body.appendChild(backgroundImage);
backgroundImage.id = 'backgroundImage';