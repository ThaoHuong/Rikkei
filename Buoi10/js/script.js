// kiem tra mot so la so chan
var a = prompt("nhap a = ");
a = parseInt(a);
// var a = 5;
if (a % 2 == 0) {
  console.log(a + " la so chan");
} else {
  console.log(a + " la so le");
}

// kiem tra gioi tinh
var gt = prompt(" goi tinh");
// var gt = "Nam";
if (gt == "Nam") {
  console.log(gt + " la nam");
} else if (gt == "Nu") {
  console.log(gt + " la nu");
} else {
  console.log(gt + " la gioi tinh khac");
}

// nhap vao gia tri tu 0-6. In ra thu trong tuan
var thu = prompt("nhap thu ");
thu = parseInt(thu);
switch (thu) {
  case 0:
    console.log("chu nhat");
    break;
  case 1:
    console.log("thu 2");
    break;
  case 2:
    console.log("thu 3");
    break;
  case 3:
    console.log("thu 4");
    break;
  case 4:
    console.log("thu 5");
    break;
  case 5:
    console.log("thu 6");
    break;
  case 6:
    console.log("thu 7");
    break;
  default:
    console.log("erro");
}

var i = parseFloat(prompt("nhap so"));
for (i; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i + "chan");
  } else {
    console.log(i + "le");
  }
}

// ben trong vong thu thi se viet cau lenh de thuc hien cau lenh thay doi bien
// var i = parseFloat(prompt("nhap so"));
while (i <= 10) {
  console.log(i);
  i++;
}

// cau lenh thuc thi 1 nhat 1 lan do...while
var a = true;
do {
  console.log("so a");
  a = false;
} while (a);

// kiem tra so nguyen to

var n = parseFloat(prompt("nhap so"));

var i = parseFloat(prompt("nhap i"));

var check = true;
for (i; i <= n; i++) {
  console.log(i);
  if (n % i == 0) {
    console.log("<h1> so nguyen to la:" + n + "</h1><br>");
    check = false;
    break; // ket thuc vong lap khong quay lai vong lap for
    // continue bo qua cau lenh sau continue
  }
}
if (check) {
  console.log(n + "SNT");
} else {
  console.log(n + "khong phai SNT");
}

//
var a = [];
a[0] = 1;
a[1] = 2;
a[2] = 3;
for (let i = 0; i < a.length; i++) {
  console.log(a.[i]);
}
var names = [];
for (let i = 0; i < names.length; i++){
  console.log(names[i]);
}

// mang nhieu chieu
var numbers = [];
numbers[0] = [1, 2, 3];
numbers[1] = [4, 5, 6];

// duyet mang da chieu
for (let i = 0; i < numbers.length; i++){
  for (let j = 0; j <= numbers[i].length; j++){
    console.log(numbers[i][j]);
  }
}