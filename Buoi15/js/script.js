function show_search_select() {
  // Lấy id thẻ a và search_select
  var a = document.getElementById("show");
  var search_select = document.getElementById("search_select");

  // Lấy nội dung của thẻ a
  var text = a.innerHTML;

  // Kiểm tra xử lý hiển thị và ẩn + đổi nội dung thẻ a
  if (text === "Tìm kiếm nâng cao") {
    search_select.style.display = "block"; // hien thi noi dung sau khi nhan vao the a or la display="table-row"
    a.innerHTML = "Bỏ tìm kiếm nâng cao";
  } else {
    search_select.style.display = "none";
    a.innerHTML = "Tìm kiếm nâng cao";
  }

  // Return false để khi click vào thẻ a sẽ không bị chuyển trang
  return false;
}
// 4 bước thần thánh khi làm việc với DOM,
// Bước 1: Query ELement (Lấy ra phần tử)
// Bước 2: Kiểm tra Element đó có tồn tại hay không? nếu có đi tiếp nếu không mình sẽ không làm gì cả
// Bước 3: Thao tác với elemet (add, remove, v.v.v)
// Bước 4: attach/ detach event thông qua thằng addeventListener
// note: 3 + 4 có thể thực hiện cùng nhau
