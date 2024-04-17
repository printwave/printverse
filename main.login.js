// Load user accounts from localStorage if available
var userList = JSON.parse(localStorage.getItem('userList')) || [];

function login() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    // Check if the email and password match a user in the userList
    var userFound = userList.some(user => user.email === email && user.password === password);

    // If user is found, redirect to the dashboard or desired page
    if (userFound) {
        window.location.href = "./index.home.html";
    } else {
        alert("Invalid email or password. Please try again.");
        // Clear input fields (optional)
        document.getElementById("loginEmail").value = "";
        document.getElementById("loginPassword").value = "";
    }
}
