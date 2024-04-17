// Load user accounts from localStorage if available
var userList = JSON.parse(localStorage.getItem('userList')) || [];

function addAccount() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validate password
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    if (!/\d/.test(password)) {
        alert("Password must contain at least one number.");
        return;
    }
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
        alert("Password must contain at least one special character.");
        return;
    }

    // Check if email already exists
    if (userList.some(user => user.email === email)) {
        alert("Email already exists.");
        return;
    }

    // Create an account object
    var account = {
        email: email,
        password: password
    };

    // If all criteria are met, add account
    userList.push(account);

    // Save updated user list to localStorage
    localStorage.setItem('userList', JSON.stringify(userList));

    console.log("Account added:", email);

    // Redirect to login page
    window.location.href = "./index.html";
}

// Other JavaScript code
