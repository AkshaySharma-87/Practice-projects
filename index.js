let isLogged = false;
const loginBtn = document.getElementById("login-btn");
function handleLogin() {
  if (isLogged) {
    alert("Trying to logout...");
    loginBtn.innerHTML = "Log In";
    isLogged = false;
  } else {
    alert("Trying to login...");
    loginBtn.innerHTML = "Log Out";
    isLogged = true;
  }
}
