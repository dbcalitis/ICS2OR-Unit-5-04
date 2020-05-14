// Javascript File
let date;
let age;
document.getElementById("enter").addEventListener("click", discount);

function discount() {
    age = document.getElementById("age").value;
    date = new Date().getDay();
    if ((date == 2 || date == 4) || (age > 12 && age < 21)) {
        document.getElementById("response").textContent = "You are eligible for student pricing.";
    }
    else {
        document.getElementById("response").textContent = "You must pay the regular price.";
    }
    alert("Thank you for verifying your age.");
}