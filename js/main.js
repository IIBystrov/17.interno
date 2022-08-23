"use strict";

//burger

const burger = document.querySelector(".burger");
const burgerLineFirst = document.querySelector(".burger").firstElementChild;
const burgerLineLast = document.querySelector(".burger").lastElementChild;

burger.addEventListener("click", function(evt) {
	evt.preventDefault();
	burgerLineFirst.classList.toggle("burger__line--first");
	burgerLineLast.classList.toggle("burger__line--last");
})