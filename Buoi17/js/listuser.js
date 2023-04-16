// Định nghĩa lớp Nhiệm vụ
class User {
  constructor(id = 0, username = "", phone = "", email = "", password = "") {
    this.id = id;
    this.username = username;
    this.phone = phone;
    this.email = email;
    this.password = password;
  }
}

// Khai báo khởi tạo, neu chua co thi khoi tao mang co san
var users = JSON.parse(localStorage.getItem("users")) || [
  new user(1, "Huong", "0973005725", "nguyenthaohuonghy@gmail.com", "12345678"),
];

// Định nghĩa hàm hiển thị User
function loadUser() {
  let rows = "";
  for (let t of users) {
    rows += ` <tr data-id="${t.id}">
        <td>${t.id}</td>
        <td>${t.username}</td>
        <td>${t.phone}</td>
        <td>${t.email}</td>
        <td>${t.password}</td>
        <td>
          <div class="btn-group">
            <button type="button" class="btn btn-primary btnEdit">
              EDIT
            </button>
          </div>
          <div class="btn-group">
            <button type="button" class="btn btn-primary btnDelete">
              DELETE
            </button>
          </div>
          <div class="btn-group">
            <button type="button" class="btn btn-primary btnFinished">
              FINISHED
            </button>
          </div>
        </td>
      </tr>`;
  }
  $(".list").html(rows);
}

$(document).on("click", ".btnEdit", function () {
  let tr = $(this).parents("tr");
  let id = $(tr).data("id");
  let _user = users.find((t) => t.id == id);
  $(".userId").val(_user.id);
  $("#username").val(_user.username);
  $("#phone").val(_user.phone);
  $("#email").val(_user.email);
  $("#psw").val(_user.password);
});
$(document).on("click", ".btnDelete", function () {
  if (confirm("Bạn có muốn xóa user không?")) {
    let tr = $(this).parents("tr");
    let id = $(tr).data("id");
    let _userIndex = users.findIndex((t) => t.id == id);
    users.splice(_userIndex, 1);
    localStorage.setItem("users", JSON.stringify(users));
    loadUser();
  }
});
$(document).on("click", ".btnFinished", function () {
  location.reload();
});
$(".btnSave").click(function () {
  if ($(".userId").val() != "") {
    let id = parseInt($(".userId").val());
    // let ipType = ip.getAttribute("type");
    // if (id != null) {
    //   // Hiện
    //   ip.setAttribute("type", "text");
    //   btn.innerText = "Edit";
    // }
    // Tìm và update
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == id) {
        users[i].username = $("#username").val();
        users[i].phone = $("#phone").val();
        users[i].email = $("#email").val();
        users[i].password = $("#psw").val();
        break;
      }
    }
  } else {
    let newUser = new User();
    newUser.id = users.length + 1;
    newUser.username = $("#username").val();
    newUser.phone = $("#phone").val();
    newUser.email = $("#email").val();
    newUser.password = $("#psw").val();
    users.push(newUser);
  }
  $(".userId").val("");
  $("#username").val("");
  $("#phone").val("");
  $("#email").val("");
  $("#psw").val("");
  localStorage.setItem("users", JSON.stringify(users));
  loadUser();
});
loadUser();
