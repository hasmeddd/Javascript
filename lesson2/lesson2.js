// BT JS 17/1
// Switch case
var mang = [
  "Thứ hai",
  "Thứ ba",
  "Thứ tư",
  "Thứ năm",
  "Thứ sáu",
  "Thứ bảy",
  "Chủ nhật",
];
var x = 5;
switch (x) {
  case 2:
    document.getElementById("thu_sw").innerHTML = "Thứ hai";
    break;
  case 3:
    document.getElementById("thu_sw").innerHTML = "Thứ ba";
    break;
  case 4:
    document.getElementById("thu_sw").innerHTML = "Thứ tư";
    break;
  case 5:
    document.getElementById("thu_sw").innerHTML = "Thứ năm";
    break;
  case 6:
    document.getElementById("thu_sw").innerHTML = "Thứ sáu";
    break;
  case 7:
    document.getElementById("thu_sw").innerHTML = "Thứ bảy";
    break;

  default:
    document.getElementById("thu_sw").innerHTML = "Chủ nhật";
    break;
}

// Swich case array
var y = 5;
switch (y) {
  case 2:
    document.getElementById("thu_ar").innerHTML = mang[y - 2];
    break;
  case 3:
    document.getElementById("thu_ar").innerHTML = mang[y - 2];
    break;
  case 4:
    document.getElementById("thu_ar").innerHTML = mang[y - 2];
    break;
  case 5:
    document.getElementById("thu_ar").innerHTML = mang[y - 2];
    break;
  case 6:
    document.getElementById("thu_ar").innerHTML = mang[y - 2];
    break;
  case 7:
    document.getElementById("thu_ar").innerHTML = mang[y - 2];
    break;

  default:
    document.getElementById("thu_ar").innerHTML = mang[y - 2];
    break;
}

// Function kiểm tra số nguyên tố
var so = 13;

function songuyento() {
  for (let index = 2; index < so; index++) {
    if (so % index == 0) {
      return false;
    }
  }
  return true;
}

if (songuyento()) {
  document.write(so + " là số nguyên tố <br/>");
} else {
  document.write(so + " không phải là số nguyên tố <br/>");
}

// Ma trận
var x = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 1, 1],
];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    document.write(x[i][j] + " ");
  }
  document.write("<br>");
}

//Kiểm tra regex
function checkPassword(password) {
  var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (regex.test(password)) {
    document.getElementById("r_password").innerHTML = "Password ok!";
    return true;
  }else if(password == ""){
    document.getElementById("r_password").innerHTML = "";
    return true;
  } else {
    document.getElementById("r_password").innerHTML =
      "Password phải có ít nhất một chữ cái in hoa, ít nhất một số, ít nhất một chữ cái thường, và có ít nhất tám ký tự";
    return false;
  }
}
function checkEmail(email) {
  var regex = /^(?=.*[0-9])(?=.*[a-zA-Z]).*@gmail\.com$/;
  if (regex.test(email)) {
    document.getElementById("r_email").innerHTML = "Email ok!";
    return true;
  } else if(email == ""){
    document.getElementById("r_email").innerHTML = "";
    return true;
  }
  else {
    document.getElementById("r_email").innerHTML =
      "Email phải chứa ít nhất một số, một chữ cái, và kết thúc bằng @gmail.com";
    return false;
  }
}

function submitForm() {
  var hotenValue = document.getElementById("hoten").value;
  var emailValue = document.getElementById("email").value;
  var tendangnhapValue = document.getElementById("tendangnhap").value;
  var passwordValue = document.getElementById("password").value;
  if (hotenValue === "") {
    alert("Họ tên không được để trống");
  }
  if (emailValue === "") {
    alert("Email không được để trống");
  }
  if (tendangnhapValue === "") {
    alert("Tên đăng nhập không được để trống");
  }
  if (passwordValue === "") {
    alert("Mật khẩu không được để trống");
  }
  if (checkEmail(emailValue) && checkPassword(passwordValue) === false) {
  } else {
    document.getElementById("hoten").innerHTML = "";
    document.getElementById("email").innerHTML = "";
    document.getElementById("tendangnhap").innerHTML = "";
    document.getElementById("password").innerHTML = "";
    document.getElementById("r_email").innerHTML = "";
    document.getElementById("r_password").innerHTML = "";
  }
  const info = {
    hoten: hotenValue,
    email: emailValue,
    tendangnhap: tendangnhapValue,
    matkhau: passwordValue,
  };
  var result =
    "Họ và tên: " +
    info.hoten +
    "<br>" +
    "Email: " +
    info.email +
    "<br>" +
    "Tên đăng nhập: " +
    info.tendangnhap +
    "<br>" +
    "Mật khẩu: " +
    info.matkhau;
  // var result = JSON.stringify(info);

  document.getElementById("ketqua").innerHTML = result;
}
