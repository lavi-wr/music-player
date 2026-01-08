
function capitalise() {
  var input = document.getElementById("fullname");
  if (input) {
    input.style.textTransform = "capitalize";
  }
}


function handleSignup() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return false;
  }

  alert("Sign up successful! Please log in.");
  window.location.href = "signin.html";
  return false;
}


function signin() {
  localStorage.setItem("isLoggedIn", "true");
  alert("Login successful! Redirecting to the music player...");
  window.location.href = "../index.html";
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "pages/signin.html";
}
