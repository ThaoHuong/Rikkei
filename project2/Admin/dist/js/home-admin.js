function checkLogin() {
  // neu nhu lay duoc thi set thong tin
  if (sessionStorage.getItem("username")) {
    let _username = sessionStorage.getItem("username");
    // Gan thong tin ten dang nhap vao the span
    document.getElementById("user").innerText = _username;
  } else {
    // neu nhu chua co thong tin thi chuyen sang trang login
    window.location.href = "login-1.html";
  }
}
checkLogin();
document.getElementById("logout").onclick = () => {
  sessionStorage.removeItem("username");
  checkLogin();
};
