"use strict";

//burger

const burger = document.querySelector(".burger");
const burgerLineFirst = document.querySelector(".burger").firstElementChild;

burger.addEventListener("click", function(evt) {
	evt.preventDefault();
	burgerLineFirst.classList.toggle("burger__line--first");
})