class Product {
  constructor(
    id = 0,
    productname = "",
    categoriesid = 0,
    price = 0,
    number = 0,
    images = "",
    status = false
  ) {
    this.id = id;
    this.productname = productname;
    this.categoriesid = categoriesid;
    this.price = price;
    this.number = number;
    this.images = images;
    this.status = status;
  }
}
var products = JSON.parse(localStorage.getItem("products")) || [];
var categories = JSON.parse(localStorage.getItem("categories")) || [];
// load danh mục sản phẩm
function loadCategories() {
  let opts = '<option value="">Danh mục sản phẩm</option>';
  for (let c of categories) {
    opts += `<option value="${c.id}">${c.categoriesname}</option>`;
  }
  $("#proCat").html(opts);
}
loadCategories();
function loadProducts() {
  let rows = "";
  for (let p of products) {
    rows += `<tr data-id="${p.id}">
                    <td>${p.id}</td>
                    <td>${
                      categories.find((c) => c.id == p.categoriesid)
                        ?.categoriesname
                    }</td>
                    <td>
                        ${p.productname}
                        <img width="50" src="/Admin/dist/imgs/featured/${
                          p.images
                        }" alt="" />
                    </td>
                    <td>${p.price} VNĐ</td>
                    <td>${p.number} </td>
                    <td>${p.status ? "Hoạt động" : "Không hoạt động"}</td>
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
  $(".tbl_products").html(rows);
}
$(document).on("click", ".btnEdit", function () {
  let tr = $(this).parents("tr");
  let id = $(tr).data("id");
  let pro = products.find((t) => t.id == id);
  $("#proId").val(pro.id);
  $("#proName").val(pro.productname);
  $("#proCat").val(pro.categoriesid);
  $("#price").val(pro.price);
  $("#number").val(pro.number);
  $("#proImage").val(pro.images).fileName;
  $("#proStt").attr("checked", pro.status);
});
$(document).on("click", ".btnDelete", function () {
  if (confirm("Bạn có muốn xóa sản phẩm không?")) {
    let tr = $(this).parents("tr");
    let id = $(tr).data("id");
    let proIndex = products.findIndex((t) => t.id == id);
    if (proIndex >= 0) {
      products.splice(proIndex, 1);
      localStorage.setItem("products", JSON.stringify(products));
      loadProducts();
    }
  }
});
$(".btnSave").click(function () {
  let prodId = $("#proId").val();
  let fileName = document.getElementById("proImage").files[0].name;
  if (prodId !== "") {
    let product = products.find((p) => p.id == prodId);
    if (product) {
      // cập nhật
      product.name = $("#proName").val();
      product.categoryId = $("#proCat").val();
      product.price = $("#price").val();
      product.number = $("#number").val();
      product.images = fileName;
      product.status = $("#proStt").is(":checked");
    }
  } else {
    // thêm mới
    let newProduct = new Product();
    newProduct.id = products.length + 1;
    newProduct.productname = $("#proName").val();
    newProduct.categoriesid = $("#proCat").val();
    newProduct.price = $("#price").val();
    newProduct.number = $("#number").val();
    newProduct.images = fileName;
    newProduct.status = $("#proStt").is(":checked");
    products.push(newProduct);
  }
  loadProducts();
  localStorage.setItem("products", JSON.stringify(products));
  // Làm mới form
  $("#proId").val("");
  $("#proName").val("");
  $("#proCat").val("");
  $("#price").val("");
  $("#number").val("");
  $("#proStt").attr("checked", false);
});
loadProducts();
