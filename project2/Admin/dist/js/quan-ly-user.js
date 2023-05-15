// Định nghĩa lớp Nhiệm vụ
class User {
  constructor(
    id = 0,
    username = "",
    email = "",
    phone = "",
    password = "",
    status = ""
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.status = status;
  }
}
// Khai bao, khoi tao bien (mang) chua tai khoan
var users = JSON.parse(localStorage.getItem("users")) || [];
function loadUser() {
  let rows = "";
  for (let u of users) {
    rows += `<tr>
            <td>${u.id}</td>
            <td>${u.username}</td>
            <td>${u.email}</td>
            <td>${u.phone}</td>
            <td>${u.status ? "Hoạt động" : "Không hoạt động"}</td>
            <td>
                <button class="btn btn-warning" onclick="editUser(event, ${
                  u.id
                })>
                <i class="fas fa-pencil-alt"></i>
                </button>
                <button class="btn btn-danger" onclick="delUser(event, ${u.id})>
                <i class="fas fa-trash-alt"></i>
                </button>
            </td>
            </tr>`;
  }
  $(".tbl_user").html(rows);
}
function editUser(evt, id) {
  let user = users.find((u) => u.id == id);
  if (user) {
    $("#userId").val(user.id);
    $("#userId").attr("readonly", true);
    $("#username").val(user.username);
    $("#email").val(user.email);
    $("#phone").val(user.phone);
    $("#userStatus").attr("checked", user.status);
  }
}
function delUser(evt, id) {
  // xác nhận xem có muốn xóa hay không?
  if (confirm("Bạn có muốn xóa không?")) {
    let index = users.findIndex((u) => u.id == id);
    if (index >= 0) {
      users.splice(index, 1);
      // Load lại danh sách
      loadUser();
      // Lưu lại localStorage
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
}
function save() {
  console.log($("#userId").prop("readonly"));
  let id = $("#userId").val();
  if (id) {
    let user = users.find((c) => c.id == id);
    if (user) {
      // update
      user.username = $("#username").val();
      user.email = $("#email").val();
      user.phone = $("#phone").val();
      user.status = $("#userStatus").is(":checked");
    } else {
      //create
      users.push({
        id: $("#userId").val(),
        username: $("#username").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        password: $("#psw").val(),
        status: $("#userStatus").is(":checked"),
      });
    }
    // Load lại danh sách
    loadUser();
    // Lưu lại localStorage
    localStorage.setItem("users", JSON.stringify(users));
    // Làm mới form
    $("#userId").val("");
    $("#userId").attr("readonly", false);
    $("#username").val("");
    $("#email").val("");
    $("#phone").val("");
    $("#psw").val("");
    $("#userStatus").attr("checked", false);
  }
}
loadUser();
