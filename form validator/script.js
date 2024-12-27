const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const rePassword = document.getElementById("re-password");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents form submission

  // Output the username value to the console
  console.log(username.value);

  // Optionally, you can validate passwords match
  if (password.value !== rePassword.value) {
    console.log("Passwords do not match");
    // You could add more handling here like an alert or error message.
  }
});
