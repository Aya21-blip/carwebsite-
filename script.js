
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email && password) {
        window.location.href = "cars.html";
    } else {
        alert("يرجى إدخال البريد وكلمة المرور");
    }
}
