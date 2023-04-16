class RegisterUser {
  constructor(id = 0, username = "", phone = "", email = "", password = "") {
    this.id = id;
    this.username = username;
    this.phone = phone;
    this.email = email;
    this.password = password;
  }
}
// Khoi tao, lay du lieu users voi localStorage va mot mang trong

var users = JSON.parse(localStorage.getItem("users")) || [];

$(document).ready(function () {
  $("#register_form").submit(function (e) {
    e.preventDefault();
    var username = $("#username").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var password = $("#psw").val();
    var pswrepeat = $("#psw-repeat").val();
    $(".error").remove();

    if (username.length < 1) {
      $("#username").after('<span class="error">This field is required</span>'); // bat buoc
      return;
    }
    if (phone.length < 1) {
      $("#phone").after('<span class="error">This field is required</span>');
      return;
    }
    if (email.length < 1) {
      $("#email").after('<span class="error">This field is required</span>');
      return;
    }
    if (password.length < 8) {
      $("#psw").after(
        '<span class="error">Password must be at least 8 characters long</span>'
      );
      return;
    }
    if (pswrepeat.length < 8) {
      $("#psw-repeat").after(
        '<span class="error"> Repeat Password must be at least 8 characters long</span>'
      );
      return;
    }
    if (password != pswrepeat) {
      $("#psw-repeat").after(
        '<span class="error">Password do not match</span>'
      );
      return;
    } else {
      var usernameEx = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
      var validUsername = usernameEx.test(username);
      if (!validUsername) {
        $("#username").after(
          '<span class="error">Enter a valid User Name</span>'
        );
        return;
      }
      var phoneEx = /^0[938]{1}\d{8}$/;
      var validphone = phoneEx.test(phone);
      if (!validphone) {
        $("#phone").after('<span class="error">Enter a valid phone</span>');
        return;
      }
      // var emailregEx =
      //   /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var regexEmail = /^[\w\.]+@[\w\-\.]+\.[a-z]{2,4}$/;
      var validEmail = regexEmail.test(email);
      // if (!validEmail) {
      //   $("#email").after('<span class="error">Enter a valid Email</span>');
      //   return;
      // }

      var passwordEx = /^.{8,}$/;
      var validPass = passwordEx.test(password);
      if (!validPass) {
        $("#psw").after('<span class="error">Enter a valid Password</span>');
        return;
      }
      var validrepeatPass = passwordEx.test(pswrepeat);
      if (!validrepeatPass) {
        $("#psw-repeat").after(
          '<span class="error">Enter a valid Repeat Password</span>'
        );
        return;
      }
    }

    // for (let i = 0; i < users.length; i++) {
    //   if (users[i].username === username) {
    //     $("#username").after(
    //       '<span class="error"> User Name already exists</span>'
    //     );
    //     return;
    //   }
    //   if (users[i].email === email) {
    //     $("#email").after('<span class="error"> Email already exists</span>');
    //     return;
    //   }
    // }
    let newUser = new RegisterUser();
    newUser.id = users.length + 1;
    newUser.username = $("#username").val();
    newUser.phone = $("#phone").val();
    newUser.email = $("#email").val();
    newUser.password = $("#psw").val();
    users.push(newUser);

    // update localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful");

    window.location.href = "login.html";
  });
});
