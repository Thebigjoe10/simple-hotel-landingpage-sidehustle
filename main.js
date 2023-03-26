// Hide the preloader when the page is loaded
window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
});

// Open signup/login form
function openForm() {
  document.getElementById("signupForm").classList.add("show");
  document.getElementById("loginForm").classList.remove("show");
  document.body.classList.add("overlay");
}

// Close signup/login form
function closeForm() {
  document.getElementById("signupForm").classList.remove("show");
  document.getElementById("loginForm").classList.remove("show");
  document.body.classList.remove("overlay");
}

// Switch to login form
function showLoginForm() {
  document.getElementById("signupForm").classList.remove("show");
  document.getElementById("loginForm").classList.add("show");
}

const bgImages = [
  "url('/img/3.jpg')",
  "url('/img/4.jpg')",
  "url('/img/5.jpg')",
  "url('/img/6.jpg')",
  "url('/img/7.jpg')",
];

const bodyEl = document.querySelector("body");

function changeBackground() {
  const randomIndex = Math.floor(Math.random() * bgImages.length);
  bodyEl.style.backgroundImage = bgImages[randomIndex];
}

setInterval(changeBackground, 3000); // Change background every 3 seconds

// Get the Signup Form
var signupForm = document.getElementById("signupForm");

// Add an event listener to the Signup Form when submitted
signupForm.addEventListener(
  "submit",
  function (event) {
    // Prevent the default form submission action
    event.preventDefault();

    // Get the form data
    var username = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirm-password")
      .value.trim();

    // Check if the name field is empty
    if (!username || !email || !password || !confirmPassword) {
      errorMessage.innerHTML = "Please fill in all fields";
      return;
    }

    // check if password meets the minimum requirements
    if (password.length < 8) {
      alert("Password should be at least 8 characters long");
      return;
    }

    // check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // If all fields are valid, submit the form
    alert("Signup successful!");
    window.location.replace("index.html");
  },
  signupForm
);

// Function to validate email address format
function isValidEmail(email) {
  var emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

// Get the form element and add a submit event listener
const form = document.querySelector("#loginForm");
form.addEventListener(
  "submit",
  (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form inputs
    const username = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    // Validate the inputs
    if (!username === "" || !email === "" || !password === "") {
      alert("Please fill in all fields");
      return;
    }

    // Create an object to store the data
    const formData = { username, email, password };

    // Send a POST request to the server with the form data
    fetch("https://echo.hoppscotch.io/post/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the server response
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
    alert("Login sucessful");
    window.location.replace("index.html");
  },
  form
);
