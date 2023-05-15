class Categories {
  constructor(id = 0, categoriesname = "", status = false) {
    this.id = id;
    this.categoriesname = categoriesname;
    this.status = status;
  }
}
// Khai báo biến chứa danh sách danh mục
var categories = JSON.parse(localStorage.getItem("categories")) || [];

/**
 * Hàm hiển thị danh sách danh mục lên table
 */
function loadCategories() {
  let rows = "";
  for (let c of categories) {
    rows += `<tr data-id="${c.id}">
                    <td>${c.id}</td>
                    <td>${c.categoriesname}</td>
                    <td>${c.status ? "Hoạt động" : "Không hoạt động"}</td>
                    <td>
                    <button class="btn btn-warning btnEdit">
                    <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button class="btn btn-danger btnDelete">
                    <i class="fas fa-trash-alt"></i>
                    </button>
                    </td>
                </tr>`;
  }
  $(".tbl_categories").html(rows);
}
$(document).on("click", ".btnEdit", function () {
  let tr = $(this).parents("tr");
  let id = $(tr).data("id");
  let cate = categories.find((t) => t.id == id);
  $("#cateId").val(cate.id);
  $("#cateName").val(cate.categoriesname);
  $("#cateStatus").attr("checked", cate.status);
});
// var products = JSON.parse(localStorage.getItem("products")) || [];
$(document).on("click", ".btnDelete", function () {
  if (confirm("Bạn có muốn xóa danh muc không?")) {
    let tr = $(this).parents("tr");
    let id = $(tr).data("id");
    let cateIndex = categories.findIndex((t) => t.id == id);
    if (cateIndex >= 0) {
      categories.splice(cateIndex, 1);
      localStorage.setItem("categories", JSON.stringify(categories));
      loadCategories();
    }
  }
});
$(".btnSave").click(function () {
  let id = $("#cateId").val();
  if (id !== "") {
    let categories = categories.find((c) => c.id == id);
    if (categories) {
      // update
      categories.categoriesname = $("#cateName").val();
      categories.status = $("#cateStatus").is(":checked");
    }
  } else {
    //create
    let newCategories = new Categories();
    newCategories.id = categories.length + 1;
    newCategories.categoriesname = $("#cateName").val();
    newCategories.status = $("#cateStatus").is(":checked");
    categories.push(newCategories);
  }
  // Load lại danh sách
  loadCategories();
  // Lưu lại localStorage
  localStorage.setItem("categories", JSON.stringify(categories));
  // Làm mới form
  $("#cateId").val("");
  $("#cateName").val("");
  $("#cateStatus").attr("checked", false);
});

loadCategories();
