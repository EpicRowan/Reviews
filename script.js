// sample data

const people = [{
	id:1,
	name: "Bob Bobson",
	review: "5 stars",
},
{
	id:2,
	name: "Jim Jimmyson",
	review: "3 stars",
},
];

// select items

const author = document.getElementById("name");
const review = document.getElementById("review");

const prevBtn = document.querySelector("prev");
const nextBtn = document.querySelector("next");

let currentItem = 0;

// load first item

window.addEventListener("DOMContentLoaded", function () {
	console.log("working maybe")
})