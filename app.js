// التأكد من وجود مستخدم مسجل دخوله مسبقاً
document.addEventListener('DOMContentLoaded', () => {
  const currentUser = localStorage.getItem('currentUser');
  if (currentUser && window.location.pathname.endsWith('index.html')) {
    window.location.href = 'chat.html'; // يدخل للدردشة مباشرة
  }
});

// تسجيل الدخول
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

  const user = savedUsers.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "chat.html";
  } else {
    alert("اسم المستخدم أو كلمة المرور غير صحيحة");
  }
}

// الانتقال إلى صفحة التسجيل
function goToSignup() {
  window.location.href = "signup.html";
}

// إنشاء حساب جديد
function signup() {
  const username = document.getElementById("signup-username").value.trim();
  const password = document.getElementById("signup-password").value.trim();

  if (!username || !password) {
    alert("الرجاء إدخال اسم مستخدم وكلمة مرور");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.some(u => u.username === username);

  if (userExists) {
    alert("اسم المستخدم مأخوذ مسبقاً");
    return;
  }

  const newUser = { username, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(newUser));

  window.location.href = "chat.html";
}