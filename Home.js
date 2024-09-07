const nav = document.querySelector(".nav2");
const hamburger = document.querySelector(".nav-toggle");
const submit_Btn = document.querySelector(".submitBtn");
const xmark = document.querySelector(".xmark");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("nav-visi");
});

const login_Btn = document.querySelector(".login");
const username_Box = document.querySelector(".usernameBox");
const username = document.querySelector(".username");
const welcome_title = document.querySelector(".sub-title");
const logout_Btn = document.querySelector(".logout");
const main = document.querySelector("main");

login_Btn.addEventListener("click", () => {
  username_Box.classList.add("visible");
  main.classList.add("hidden");
});

xmark.addEventListener("click", () => {
  username_Box.classList.remove("visible");
  username_Box.classList.add("hidden");
  username_Box.classList.remove("hidden");
  main.classList.remove("hidden");
});

submit_Btn.addEventListener("click", () => {
  localStorage.setItem("currentUser", username.value);
  welcome_title.innerHTML = " " + username.value;
  username.value = "";
});

welcome_title.innerHTML =
  " " + localStorage.getItem("currentUser", username.value);

logout_Btn.addEventListener("click", () => {
  welcome_title.innerHTML = " ";
  localStorage.removeItem("currentUser");
});

if (localStorage.getItem("currentUser") == null) {
  welcome_title.innerHTML = " ";
} else {
  welcome_title.innerHTML = localStorage.getItem("currentUser");
}
