document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("search").addEventListener("input", function() {
        var searchTerm = this.value.trim().toLowerCase();
        var itemList = ["rocket", "tnt","football", "fidget", "joystick", "ball"]; // Replace with your actual list of items
        
        if (itemList.includes(searchTerm)) {
            window.location.href = "index." + searchTerm + ".html";
        }
    });
    // Check if the user is not logged in and the page is being accessed directly
    if (!sessionStorage.getItem('isLoggedIn') && window.location.pathname.endsWith("/index.home.html")) {
        // Redirect to another page
        window.location.href = "./index.html"; // Redirect to index.html or any other page you want
    }
});