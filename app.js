document.addEventListener("DOMContentLoaded", function () { const loginForm = document.getElementById("login-form"); const signupForm = document.getElementById("signup-form");

const usernameInput = document.getElementById("username"); const passwordInput = document.getElementById("password"); const signupUsername = document.getElementById("signup-username"); const signupPassword = document.getElementById("signup-password");

// تحقق إذا كان المستخدم مسجل دخوله مسبقًا if (localStorage.getItem("loggedIn") === "true") { window.location.href = "chat.html"; }

// تسجيل الدخول if (loginForm) { loginForm.addEventListener("submit", function (e) { e.preventDefault(); const storedUser = localStorage.getItem("user"); const storedPass = localStorage.getItem("pass");

if (
    usernameInput.value === storedUser &&
    passwordInput.value === storedPass
  ) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "chat.html";
  } else {
    alert("اسم المستخدم أو كلمة المرور غير صحيحة");
  }
});

}

// تسجيل حساب جديد if (signupForm) { signupForm.addEventListener("submit", function (e) { e.preventDefault(); localStorage.setItem("user", signupUsername.value); localStorage.setItem("pass", signupPassword.value); localStorage.setItem("loggedIn", "true"); window.location.href = "chat.html"; }); } });

