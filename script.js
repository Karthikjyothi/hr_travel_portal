let isLogin = true;

// Check session
window.onload = () => {
  if (localStorage.getItem("loggedIn") === "true") {
    showDashboard();
  }
};

function toggleMode() {
  isLogin = !isLogin;

  document.getElementById("confirmPassword").style.display =
    isLogin ? "none" : "block";

  document.getElementById("actionBtn").innerText =
    isLogin ? "LOGIN" : "SIGN UP";

  document.getElementById("toggleMsg").innerText =
    isLogin ? "New user?" : "Already have an account?";

  document.querySelector(".toggle-text a").innerText =
    isLogin ? "Sign up" : "Login";
}

function handleAuth() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;

  if (!user || !pass) {
    alert("Please fill all fields");
    return;
  }

  if (!isLogin && pass !== confirm) {
    alert("Passwords do not match");
    return;
  }

  // Demo auth (replace later with backend)
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("user", user);

  window.location.href = "home.html";
}

function showDashboard() {
  document.getElementById("authBox").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
}

function logout() {
  localStorage.clear();
  location.reload();
}
