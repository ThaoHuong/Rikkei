let divElement = document.querySelector("#root");
let inputElement = document.querySelector("#item-todo");
let buttonElement = document.querySelector("#submit-item");
let ulElement = document.querySelector("#list");

//day la phan bai tap
//xu ly thang khi no thay doi
inputElement.addEventListener("change", (e) => {
  console.log(e.target.value);
});

function addItem() {
  // kiem tra validate
  if (!buttonElement && !inputElement && !ulElement) return;
  console.log("value", inputElement.value);

  if (inputElement.value !== "") {
    let liElement = document.createElement("li");
    // gan noi dung vua nhap bang voi thuoc tinh
    liElement.innerText = inputElement.value;
    // Them thuoc tinh
    ulElement.appendChild(liElement);
    // thay doi mau
    inputElement.value = "";
    inputElement.value === "" &&
      (inputElement.style.backgroundColor = "yellow");
  } else {
    inputElement.style.backgroundColor = "yellow";
  }
}
