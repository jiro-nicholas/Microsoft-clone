"use strict";
const mainBtn = document.querySelector(".menu-btn");
const mainMenu = document.querySelector(".main-menu");

mainBtn.addEventListener("click", () => mainMenu.classList.toggle("show"));
