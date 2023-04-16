let users = JSON.parse(localStorage.getItem("users")) || [];

let form = document.getElementById("register-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;

  let usernameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordRegex = /^.{8,}$/;

  if (!username.match(usernameRegex)) {
    alert("Invalid username");
    return;
  }

  if (!email.match(emailRegex)) {
    alert("Invalid email");
    return;
  }

  if (!password.match(passwordRegex)) {
    alert("Password must be at least 8 characters");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      alert("Username already exists");
      return;
    }
    if (users[i].email === email) {
      alert("Email already exists");
      return;
    }
  }

  let user = {
    username: username,
    email: email,
    password: password,
    status: true,
  };

  // Thêm thông tin người dùng vào mảng users
  users.push(user);

  // Cập nhật lại danh sách người dùng trong localStorage
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful");

  window.location.href = "login.html";
});
