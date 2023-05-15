class Cart {
  constructor(productId = 0, price = 0, quantity = 0) {
    this.productId = productId;
    this.price = price;
    this.quantity = quantity;
  }
}
// Khai báo biến giỏ hàng
var carts = JSON.parse(sessionStorage.getItem("carts")) || [];

// XỬ LÝ MUA HÀNG
// Hiển thị giỏ hàng
function showCarts() {
  if (carts != null) {
    $(".total-carts-item").html(carts.length);
  } else {
    $(".total-carts-item").html("0");
  }
}
// Mua hàng
function buy(evt, proId) {
  // Kiểm tra xem sp đó đã được mua chưa
  let cartItem = carts.find((c) => c.productId == proId);
  if (cartItem) {
    // tăng số lượng
    cartItem.quantity += 1;
  } else {
    let pro = products.find((t) => t.id == proId);
    // Thêm sản phẩm được mua vào giỏ hàng
    let newCart = new Cart();
    newCart.productId = proId;
    newCart.price = pro.price;
    newCart.quantity = 1;
    carts.push(newCart);
  }
  // Lưu session
  sessionStorage.setItem("carts", JSON.stringify(carts));
  showCarts();
}
showCarts();

// update
$(document).on("click", ".btnFinished", function () {
  location.reload();
});

// load tt product
var products = JSON.parse(localStorage.getItem("products")) || [];

function loadProduct_Cart() {
  let item = "";

  for (let c of carts) {
    item += ` <tr data-id="${c.productId}">
                <td class="shoping__cart__item ">
                    <img src="/Admin/dist/imgs/featured/${
                      products.find((p) => p.id == c.productId)?.images
                    }" alt=""/>
                    <h5>${
                      products.find((p) => p.id == c.productId)?.productname
                    }</h5>
                </td>
                <td class="shoping__cart__price" id="price_${c.productId}">${
      products.find((p) => p.id == c.productId)?.price
    }</td>
                <td class="shoping__cart__quantity">
                    <div class="quantity">
                    <div class="pro-qty">
                        <span class="dec qtybtn dec_span">-</span>
                        <input type="text" class="quantity" id="ql_${
                          c.productId
                        }" value="${c.quantity}" />
                        <span class="inc qtybtn inc_span">+</span>
                    </div>
                    </div>
                </td>
                <td class="shoping__cart__item__close">
                    <span><i class="icon_close"  onclick="delCart(event, '${
                      c.productId
                    }')" ></i></span>
                </td>
            </tr>`;
  }
  $(".list_proCart").html(item);
}
loadProduct_Cart();
// update so luong
// function changeTotalProduct(id, e) {
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].id == id) {
//       products[i].count = Number(e.target.value);
//     }
//   }
// }
// xoa item product
function delCart(evt, id) {
  if (confirm("Bạn có muốn xóa không?")) {
    let index = carts.findIndex((c) => c.productId == id);
    if (index >= 0) {
      carts.splice(index, 1);
      // Lưu lại localStorage
      sessionStorage.setItem("carts", JSON.stringify(carts));
      // Load lại
      loadProduct_Cart();
    }
  }
}
// total

function total_cart() {
  // tính tổng tiền
  // var total_span = document.getElementById("cart_total_item");
  var total_c = document.getElementById("cart_total");
  var tt = 0;
  // for (let i = 0; i < carts.length; i++) {
  //   var total = parseInt(carts[i].quantity) * parseInt(carts[i].price);
  //   tt += total;
  // }
  for (let c of carts) {
    var total = parseInt(c.quantity) * parseInt(c.price);
    tt += total;
  }
  // total_span.innerText = total;
  total_c.innerHTML = tt;
}
total_cart();
// checkout
$(document).on("click", ".btnpro", function () {
  if (confirm("Bạn có muốn đặt hàng không?")) {
    alert("Đặt hàng thành công");
    sessionStorage.removeItem("carts");
    window.location.href = "index.html";
  }
});
// input -
$(document).on("click", ".dec_span", function () {
  let tr = $(this).parents("tr");
  let id = $(tr).data("id");
  let cartItem = carts.find((c) => c.productId == id);
  if (cartItem && cartItem.quantity >= 0) {
    // giam số lượng
    cartItem.quantity -= 1;
  } else {
    cartItem.quantity = 0;
  }
  sessionStorage.setItem("carts", JSON.stringify(carts));
  location.reload();
  total_cart();
  loadProduct_Cart();
});
// input +
$(document).on("click", ".inc_span", function () {
  let tr = $(this).parents("tr");
  let id = $(tr).data("id");
  let cartItem = carts.find((c) => c.productId == id);
  if (cartItem) {
    // tăng số lượng
    cartItem.quantity += 1;
  } else {
    // alert(" vượt quá số lượng trong kho");
    location.reload();
  }
  sessionStorage.setItem("carts", JSON.stringify(carts));
  location.reload();
  total_cart();
  loadProduct_Cart();
});
