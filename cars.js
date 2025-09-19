
const cars = [
    { name: "Audi A4", price: "$40,000", type: "Sedan", image: "images/audi.jpg" },
    { name: "BMW X5", price: "$60,000", type: "SUV", image: "images/bmw.jpg" },
    { name: "Ford Mustang", price: "$55,000", type: "Sport", image: "images/mustang.jpg" },
    { name: "Tesla Model S", price: "$85,000", type: "Electric", image: "images/tesla.jpg" },
    { name: "Toyota Corolla", price: "$25,000", type: "Sedan", image: "images/corolla.jpg" }
];

cars.sort((a, b) => a.name.localeCompare(b.name));

const carList = document.getElementById("car-list");
cars.forEach((car, index) => {
    const card = document.createElement("div");
    card.className = "car-card";
    card.innerHTML = `<img src="${car.image}" alt="${car.name}"><h3>${car.name}</h3><p>${car.price}</p><p>${car.type}</p>`;
    card.onclick = () => {
        localStorage.setItem("car", JSON.stringify(car));
        window.location.href = "car-details.html";
    };
    carList.appendChild(card);
});
