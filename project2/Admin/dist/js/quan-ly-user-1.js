// Định nghĩa lớp
class User {
  constructor(
    id = 0,
    username = "",
    email = "",
    phone = "",
    password = "",
    status = false
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.status = status;
  }
}

// Khai báo khởi tạo, neu chua co thi khoi tao mang co san
var users = JSON.parse(localStorage.getItem("users")) || [];

// Định nghĩa hàm hiển thị User
function loadUser() {
  let rows = "";
  for (let t of users) {
    rows += ` <tr data-id="${t.id}">
          <td>${t.id}</td>
          <td>${t.username}</td>
          <td>${t.email}</td>
          <td>${t.phone}</td>
          <td>${t.status ? "Hoạt động" : "Không hoạt động"}</td>
          <td>
          <div class="form-group">
              <div class="col-md-6">
                <button class="btn btn-warning btnEdit">
                  <i class="fas fa-pencil-alt"></i>
                </button>
              </div>
              <div class="col-md-6">
                <button class="btn btn-danger btnDelete">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
          </div>
          </td>
        </tr>`;
  }
  $(".tbl_user").html(rows);
}

$(document).on("click", ".btnEdit", function () {
  let tr = $(this).parents("tr");
  let id = $(tr).data("id");
  let _user = users.find((t) => t.id == id);
  $("#userId").val(_user.id);
  $("#username").val(_user.username);
  $("#email").val(_user.email);
  $("#phone").val(_user.phone);
  $("#psw").val(_user.password);
  $("#psw").attr("readonly", true);
  $("#userStatus").attr("checked", _user.status);
});
$(document).on("click", ".btnDelete", function () {
  if (confirm("Bạn có muốn xóa user không?")) {
    let tr = $(this).parents("tr");
    let id = $(tr).data("id");
    let _userIndex = users.findIndex((t) => t.id == id);
    if (_userIndex >= 0) {
      users.splice(_userIndex, 1);
      localStorage.setItem("users", JSON.stringify(users));
      loadUser();
    }
  }
});

// $(".btnSave").click(function () {
//   console.log($("#psw").prop("readonly"));
//   if ($("#userId").val() != "") {
//     // Tìm và update
//     let id = parseInt($("#userId").val());
//     for (let i = 0; i < users.length; i++) {
//       if (users[i].id == id) {
//         users[i].username = $("#username").val();
//         users[i].email = $("#email").val();
//         users[i].phone = $("#phone").val();
//         user[i].status = $("#userStatus").is(":checked");
//         break;
//       }
//     }
//   } else {
//     // Thêm
//     let newUser = new User();
//     newUser.id = users.length + 1;
//     newUser.username = $("#username").val();
//     newUser.email = $("#email").val();
//     newUser.phone = $("#phone").val();
//     newUser.password = $("#psw").val();
//     newUser.status = $("#userStatus").is(":checked");
//     users.push(newUser);
//   }
//   // Load lại danh sách
//   loadUser();
//   // Lưu lại localStorage
//   localStorage.setItem("users", JSON.stringify(users));
//   // Làm mới form
//   $("#userId").val("");
//   $("#username").val("");
//   $("#phone").val("");
//   $("#email").val("");
//   $("#psw").val("");
//   $("#psw").attr("readonly", false);
//   $("#userStatus").attr("checked", false);
// });
$(".btnSave").click(function () {
  let id = $("#userId").val();
  if (id !== "") {
    let user = users.find((c) => c.id == id);
    if (user) {
      // update
      user.username = $("#username").val();
      user.email = $("#email").val();
      user.phone = $("#phone").val();
      user.status = $("#userStatus").is(":checked");
    }
  } else {
    //create
    let newUser = new User();
    newUser.id = users.length + 1;
    newUser.username = $("#username").val();
    newUser.email = $("#email").val();
    newUser.phone = $("#phone").val();
    newUser.password = $("#psw").val();
    newUser.status = $("#userStatus").is(":checked");
    users.push(newUser);
  }
  // Load lại danh sách
  loadUser();
  // Lưu lại localStorage
  localStorage.setItem("users", JSON.stringify(users));
  // Làm mới form
  $("#userId").val("");
  $("#username").val("");
  $("#phone").val("");
  $("#email").val("");
  $("#psw").val("");
  $("#psw").attr("readonly", false);
  $("#userStatus").attr("checked", false);
});
loadUser();
