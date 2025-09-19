
const car = JSON.parse(localStorage.getItem("car"));
const container = document.getElementById("car-details");

if (car) {
    container.innerHTML = `
        <h1>${car.name}</h1>
        <img src="${car.image}" alt="${car.name}">
        <p><strong>السعر:</strong> ${car.price}</p>
        <p><strong>النوع:</strong> ${car.type}</p>
        <p><strong>نوع المحرك:</strong> سيتم التحديث لاحقاً</p>
        <p><strong>السنة:</strong> سيتم التحديث لاحقاً</p>
    `;
} else {
    container.innerHTML = "<p>لا توجد بيانات لعرضها</p>";
}
