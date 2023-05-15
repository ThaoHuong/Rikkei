let btnlogin = document.getElementById("btnlogin");
// let register = document.getElementById("btnregister");
let username = document.getElementById("username");
let password = document.getElementById("password");

btnlogin.onclick = () => {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  var listUser = users.find(
    (user) =>
      user.username === username.value && user.password === password.value
  );
  if (listUser) {
    // Lưu session nếu đăng nhập thành công
    sessionStorage.setItem("username", listUser.username);
    window.location.href = "home-admin.html";
  } else {
    alert("Sai tài khoản mật khẩu!");
  }
};
// register.onclick = () => {
//   window.location.href = "register.html";
// };
