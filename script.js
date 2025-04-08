// script.js
document.getElementById('login-btn').addEventListener('click', authenticate);

// Provided usernames
const validUsernames = [
    "admin", "user", "guest", "test", "demo", "root", "info", 
    "username", "administrator", "support", "webmaster", "contact",
    "default", "manager", "member", "client", "customer", "student",
    "staff", "anonymous", "postgres", "mysql", "oracle", "sa"
];

// Updated passwords list
const validPasswords = [
    "123456", "password", "123456789", "12345", "12345678",
    "qwerty", "abc123", "password1", "1234567", "111111",
    "letmein", "admin", "welcome", "monkey", "login",
    "iloveyou", "123123", "sunshine", "princess", "passw0rd",
    "root", "toor", "raspberry", "changeme", "postgres",
    "mysql", "cisco", "1234"
];

function authenticate() {
    const usernameInput = document.getElementById('username').value.toLowerCase();
    const passwordInput = document.getElementById('password').value.toLowerCase();

    // Independent checks for username and password
    if (validUsernames.includes(usernameInput) && validPasswords.includes(passwordInput)) {
        window.location.href = "success.html";
    } else {
        document.getElementById('error-msg').textContent = "Oops! Wrong credentials.";
    }
}
