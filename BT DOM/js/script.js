function Dong_ho() {
  // lay id
  var gio = document.getElementById("gio");
  var phut = document.getElementById("phut");
  var giay = document.getElementById("giay");
  //
  let music = document.getElementById("music");
  let listMusics = ["media/LaAnh-PhamLichBMZ-8811329.mp3"];
  // lay ra ngay gio hien tai
  var Gio_hien_tai = new Date().getHours();
  var Phut_hien_tai = new Date().getMinutes();
  var Giay_hien_tai = new Date().getSeconds();
  // Gan gia tri cho cac the
  gio.innerHTML = Gio_hien_tai;
  phut.innerHTML = Phut_hien_tai;
  giay.innerHTML = Giay_hien_tai;
}
// su dung setInterval(). de lap lai nhieu lan thoi gian se duoc cap nhat sau moi giay
var Dem_gio = setInterval(Dong_ho, 1000);
var mybackground = setInterval(setColor, 10 * 60 * 1000);
var myaudio = setInterval(setmedia, 5 * 60 * 1000);

function setColor() {
  var bodystyle = document.getElementById("wrap");
  bodystyle.style.background =
    bodystyle.style.background == "salmon" ? "red" : "salmon";
}

function stopColor() {
  clearInterval(mybackground);
}

//

function setmedia() {
  // var audio = new Audio(""); // link duong dan audio
  // audio.play();
}
function stopMedia() {
  clearInterval(myaudio);
}
let playMusic = setInterval(function () {
  // Chuyển bài hát, đọc đường dẫn nhạc từ mảng listMusics

  // Chạy bài hát
  music.play();
}, 5 * 60 * 1000);
