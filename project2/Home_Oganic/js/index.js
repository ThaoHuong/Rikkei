// lay ten danh muc
var categories = JSON.parse(localStorage.getItem("categories")) || [];
// load danh mục sản phẩm
function loadCategories() {
  let opts = '<option value="">All Categories</option>';
  for (let c of categories) {
    opts += `<option value="${c.id}">${c.categoriesname}</option>`;
  }
  $("#proCate").html(opts);
}

loadCategories();
// load danh mục sản phẩm
function loadCategoriesnav() {
  let opts = "";
  for (let c of categories) {
    opts += ` <li><a href="#" value="${c.id}">${c.categoriesname}</a></li>`;
  }
  $("#navCate").html(opts);
}
loadCategoriesnav();

// Lay san pham tu local
var listProducts = JSON.parse(localStorage.getItem("products")) || [];

function loadProduct() {
  let item = "";
  for (let p of listProducts.filter((p) => p.status == true)) {
    item += `<div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
              <div class="featured__item">
                <div
                  class="featured__item__pic"
                >
                  <img
                    src="/Admin/dist/imgs/featured/${p.images}"
                    class="set-bg"
                    alt=""
                  />
                  <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#"><i class="fa fa-heart"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-retweet"></i></a>
                    </li>
                    <li>
                     <a href="#"><i class="fa fa-shopping-cart" onclick="buy(event, '${p.id}')"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="featured__item__text">
                  <h6><a href="#">${p.productname}</a></h6>
                  <h5><span class="price_pro">${p.price}</span></h5>
                </div>
              </div>
            </div>`;
  }
  $(".list_pro").html(item);
}
loadProduct();
