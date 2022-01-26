const login = document.querySelector("#login");
const pwd = document.querySelector("#password");
const btn = document.querySelector(".btn");

const msg = document.querySelectorAll(".msg-error");

const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".btn-close");

function text() {
  msg.forEach((msg) => {
    msg.classList.remove("active");
  });
}

function showModal() {
  if (login.value === "") {
    msg.forEach((msg) => {
      msg.classList.add("active");
    });
  } else {
    modal.classList.add("active");
  }
}

function closeMenu() {
  modal.classList.remove("active");
}

login.addEventListener("mousedown", text);
btn.addEventListener("click", showModal);

btnClose.addEventListener("click", closeMenu);

const newPwd = document.querySelector("#new-pwd");
const confirmPwd = document.querySelector("#confirm-pwd");

const strPwd = document.querySelector(".str-new-pwd");

const strMsg = document.querySelector(".str-msg");
const confirmMsg = document.querySelector(".confirm-msg");

function newPass() {
  const newPassValue = newPwd.value;

  const rule1 = /[a-z]/g.test(newPassValue);
  const rule2 = /[A-Z]/g.test(newPassValue);
  const rule3 = /\d/g.test(newPassValue);
  const rule4 = /\W/g.test(newPassValue);
  const rule5 = newPassValue.length >= 8 ? true : false;

  const rules = [rule1, rule2, rule3, rule4, rule5];

  let activeRules = 0;

  rules.forEach((rule) => {
    if (rule === true) {
      activeRules++;
    }
  });

  if (activeRules == 1) {
    strPwd.classList.add("very-weak");
    strPwd.classList.remove("weak");

    strMsg.innerText = "senha muito fraca!";
    strMsg.style.color = "#c71717";
  } else if (activeRules == 2) {
    strPwd.classList.remove("very-weak");
    strPwd.classList.add("weak");
    strPwd.classList.remove("medium");

    strMsg.innerText = "senha fraca!";
    strMsg.style.color = "#c74f17";
  } else if (activeRules == 3) {
    strPwd.classList.remove("weak");
    strPwd.classList.add("medium");
    strPwd.classList.remove("good");

    strMsg.innerText = "senha mediana!";
    strMsg.style.color = "#ddcf0b";
  } else if (activeRules == 4) {
    strPwd.classList.remove("medium");
    strPwd.classList.add("good");
    strPwd.classList.remove("very-good");

    strMsg.innerText = "senha boa.";
    strMsg.style.color = "#89c717";
  } else if (activeRules == 5) {
    strPwd.classList.remove("good");
    strPwd.classList.add("very-good");

    strMsg.innerText = "senha muito boa!";
    strMsg.style.color = "#2cc705";
  } else {
    strPwd.classList.remove("very-weak");
    strPwd.classList.remove("weak");
    strPwd.classList.remove("medium");
    strPwd.classList.remove("good");
    strPwd.classList.remove("very-good");
  }
}

function confirmPass() {
  if (confirmPwd.value !== newPwd.value) {
    confirmMsg.innerText = "A senha não confere!";
    confirmMsg.style.color = "#c71717";
  } else {
    confirmMsg.innerText = "A senhas são iguais!";
    confirmMsg.style.color = "#2cc705";
    confirmMsg.style.transition = "opacity 1.5s ease";
    confirmMsg.style.opacity = "0";
  }
}

newPwd.addEventListener("keyup", newPass);
confirmPwd.addEventListener("keyup", confirmPass);
