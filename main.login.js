// Load user accounts from localStorage if available
var userList = JSON.parse(localStorage.getItem('userList')) || [];

function login() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    // Check if the email and password match a user in the userList
    var userFound = userList.some(user => user.email === email && user.password === password);

    // If user is found, set a session variable and redirect to the dashboard or desired page
    if (userFound) {
        // Set a session variable to indicate that the user is logged in
        sessionStorage.setItem('isLoggedIn', true);
        // Add event listener to handle page unload
        window.location.href = "./index.home.html";
    } else {
        alert("Invalid email or password. Please try again.");
        // Clear input fields (optional)
        document.getElementById("loginEmail").value = "";
        document.getElementById("loginPassword").value = "";
    }
}

