document.addEventListener("DOMContentLoaded", () => { const loginScreen = document.getElementById("loginScreen"); const signupScreen = document.getElementById("signupScreen"); const chatScreen = document.getElementById("chatScreen"); const usernameDisplay = document.getElementById("username");

const savedUser = localStorage.getItem("user"); if (savedUser) { showScreen("chatScreen"); usernameDisplay.textContent = savedUser; } else { showScreen("loginScreen"); }

document.getElementById("loginBtn").addEventListener("click", () => { const username = document.getElementById("loginUsername").value; const password = document.getElementById("loginPassword").value; if (username && password) { localStorage.setItem("user", username); showScreen("chatScreen"); usernameDisplay.textContent = username; } });

document.getElementById("signupBtn").addEventListener("click", () => { const username = document.getElementById("signupUsername").value; const password = document.getElementById("signupPassword").value; if (username && password) { localStorage.setItem("user", username); showScreen("chatScreen"); usernameDisplay.textContent = username; } });

document.getElementById("toSignup").addEventListener("click", () => { showScreen("signupScreen"); });

document.getElementById("toLogin").addEventListener("click", () => { showScreen("loginScreen"); });

function showScreen(screenId) { loginScreen.classList.add("hidden"); signupScreen.classList.add("hidden"); chatScreen.classList.add("hidden");

document.getElementById(screenId).classList.remove("hidden");

}

// Navigation logic document.getElementById("toChat").addEventListener("click", () => { showScreen("chatScreen"); });

document.getElementById("toVideos").addEventListener("click", () => { window.location.href = "videos.html"; });

document.getElementById("toSearch").addEventListener("click", () => { window.location.href = "search.html"; });

document.getElementById("toSettings").addEventListener("click", () => { window.location.href = "settings.html"; }); });

