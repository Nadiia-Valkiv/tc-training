//Registration
const element = document.getElementById("submit");
element.addEventListener("click", saveRegistrationData);

function saveRegistrationData() {
  if (isAcountExist()) {
    closeRegisterBlock();
    showMessadgeBlock("You already have account. Please login!");
  } else {
    if (matchPassword()) {
      let users = JSON.parse(localStorage.getItem("Users")) || [];
      let userData = {
        Email: document.getElementById("email").value,
        Password: document.getElementById("psw1").value
      }
      users.push(userData);
      localStorage.setItem("Users", JSON.stringify(users));
      showMessadgeBlock("Account successfully created");
    } else {
      console.log("Passwords did not match");
    }
  }
}

function isAcountExist() {
  let users = JSON.parse(localStorage.getItem("Users")) || [];
  let userData = {
    Email: document.getElementById("email").value,
    Password: document.getElementById("psw1").value
  }
  users.Email === userData.Email ? true : false;
}

function matchPassword() {
  let password = document.getElementById("psw1").value;
  let confirmPassword = document.getElementById("psw2").value;
  let isMatchPassword;
  console.log(password + "test");
  console.log(confirmPassword);
  if (!password && !confirmPassword) {
    showMessadgeBlock("Please enter your password");
    return;
  }
  if (password === confirmPassword) {
    isMatchPassword = true;
    //showMessadgeBlock("Account successfully created");
    closeRegisterBlock();
  } else {
    isMatchPassword = false;
    console.log("Passwords did not match");
  }
  return isMatchPassword;
}

//Login
const elementLogin = document.getElementById("login-submit");
elementLogin.addEventListener("click", userLogin);

function userLogin() {
  let users = JSON.parse(localStorage.getItem("Users")) || [];
  let userData = {
    Email: document.getElementById("login-email").value,
    Password: document.getElementById("login-psw").value
  }
  ;

  if (users.Email === userData.Email) {
    if (users.Password === userData.Password) {
      // console.log(checkPassword())
      // showMessadgeBlock("You succesfully loged in");
      console.log("You succesfully loged in");
      document.getElementById("login").style.display = "none";
    } else {
      console.log("Wrong password");
    }
  } else {
    console.log("No user was found with this mail. Please register.");
  }
}

////////////////////////////////////////////////////////////
function checkEmail() {
  users.Email === userData.Email ? true : false;
}
function checkPassword() {
  users.Password === userData.Password ? true : false;
}

function showMessadgeBlock(messadge) {
  const messadgeBlock = document.getElementsByClassName("messadge-block")[0];
  messadgeBlock.innerHTML = messadge;
  messadgeBlock.style.display = "block";
  setTimeout(
    () =>
      (document.getElementsByClassName("messadge-block")[0].style.display =
        "none"),
    5000
  );
}

function closeRegisterBlock() {
  document.getElementById("register").style.display = "none";
}
