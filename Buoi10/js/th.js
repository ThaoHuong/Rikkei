// nhap vao 1 so co 3 chu so, tinh tong 3 so
var i = parseFloat(prompt("nhap so = "));
var tong = 0;
while (i > 0) {
  tong += i % 10;
  i = parseInt(i / 10);
}
console.log("tong la " + tong);
