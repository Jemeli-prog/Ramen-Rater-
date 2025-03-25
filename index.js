// Ramens object
const ramens = [
    {
        name: "Shoyu Ramen",
        restaurant: "Ichiran", 
        image: "Photos/shoyu1.jpg", 
        rating: 5, 
        comment: "Delicious",
    },
    {
        name: "Naruto Ramen",
        restaurant: "Menya",
        image: "Photos/naruto1.jpg",
        rating: 6,
        comment: "Flavoured",
    },
    {
        name: "Nirvana Ramen",
        restaurant: "Ramen-ya",
        image: "Photos/nirvana 3.jpg", 
        rating: 7,
        comment: "Sweeet",
    },
    {
        name: "Gyukotsu Ramen",
        restaurant: "Tiffy",
        image: "Photos/gyukotsu4.jpg",
        rating: 8,
        comment: "Delicious",
    },
    {
        name: "Kojiro Ramen",
        restaurant: "Menya",
        image: "Photos/kojiro5.jpg",
        rating: 8,
        comment: "Delicious",
    }
];

// Display ramen images function
function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = ""; 
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

// Function to display ramen details
function handleClick(ramen) {
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-rating").textContent = ramen.rating;
    document.getElementById("ramen-comment").textContent = ramen.comment;
}

// Function to handle form submission
function addSubmitListener() {
    document.getElementById("new-ramen-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const newRamen = {
            name: event.target.name.value,
            restaurant: event.target.restaurant.value,
            image: event.target.image.value,
            rating: parseInt(event.target.rating.value, 10), // Convert rating to number
            comment: event.target.comment.value,
        };

        ramens.push(newRamen);
        displayNewRamen(newRamen);

        event.target.reset();
    });
}

// Function to display newly added ramen
function displayNewRamen(ramen) {
    const ramenMenu = document.getElementById("ramen-menu");
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener("click", () => handleClick(ramen));
    ramenMenu.appendChild(img);
}

// Function to initialize the app
function main() {
    displayRamens();
    addSubmitListener();
    if (ramens.length > 0) {
        handleClick(ramens[0]); // Display first ramen by default
    }
}

document.addEventListener("DOMContentLoaded", main);
