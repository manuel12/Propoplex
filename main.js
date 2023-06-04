// Code for BardAPI
import Bard, { askAI } from "bard-ai";

var platform = document.getElementById("platform").value;
var name = document.getElementById("name").value;
var description = document.getElementById("desc").value;
var role = document.getElementById("role").value;
var price = document.getElementById("price").value;
var experience = document.getElementById("experience").value;
var pastwork = document.getElementById("pastwork").value;
var link = document.getElementById("link").value;
var goodfit = document.getElementById("goodfit").value;
var words = document.getElementById("words").value;

var prompt =
  "${description} I am going to apply for this job. write me an attractive proposal for ${platform} in about ${words} with given details. 1) ${name} 2) Role ${role} 3)  price ${price} 4) I have ${experience} Years of experience in this field. 5) Attached Past works ${pastwork} 6) link for the portfolio ${portfolio}. I am good fit for this job because ${goodfit}. Write me an attactive proposal with this details. Write it about 150 words. End with strong CTA";

await Bard.init(
  "XQiIjGefHBGXO_fJH7_H9WpGimggRbpseEJOaQQugmoDjZLaUS2Tr1Dw_HKnrarPFCFInQ."
);

console.log(await askAI(prompt));

// Summa
function selectCard(button) {
  let card = button.parentNode;
  // Remove "selected" class from all cards except the clicked one and change button text to "USE NOW"
  let cards = document.querySelectorAll(".card");
  cards.forEach(function (c) {
    if (c !== card && c.classList.contains("selected")) {
      c.classList.remove("selected");
      //gets the last children of the card (the button) and change the text
      c.children.item(c.children.length - 1).innerHTML = "USE NOW";
    }
  });

  // Add "selected" class to clicked card
  card.classList.add("selected");

  // change button text to Selected
  button.innerHTML = "Selected";
}
let navbar = document.getElementById("navbarId");
function myFunction() {
  navbar.classList.add("navbar1");
}
function closeFunction() {
  navbar.classList.remove("navbar1");
}

// Code for the form needs to be same as selected card
function selectCard(button) {
  var value = button.value;
  var formA = document.getElementById("upwork");
  var formB = document.getElementById("fiverr");
  var formC = document.getElementById("resume");
  let card1 = document.getElementById("upwork-selected");
  let card2 = document.getElementById("fiverr-selected");
  let card3 = document.getElementById("resume-selected");
  let card4 = document.getElementById("cover-letter-selected");
  let card5 = document.getElementById("biodata-selected");
  let textbtn1 = document.getElementById("upwork-btn");
  let textbtn2 = document.getElementById("fiverr-btn");
  let textbtn3 = document.getElementById("resume-btn");
  let textbtn4 = document.getElementById("cover-letter-btn");
  let textbtn5 = document.getElementById("biodata-btn");

  if (value === "1") {
    formA.classList.remove("form");
    formB.classList.add("form");
    formC.classList.add("form");
    card1.classList.add("selected");
    card2.classList.remove("selected");
    card3.classList.remove("selected");
    card4.classList.remove("selected");
    card5.classList.remove("selected");
    textbtn1.textContent = "selected";
    textbtn2.textContent = "USE NOW";
    textbtn3.textContent = "USE NOW";
    textbtn4.textContent = "USE NOW";
    textbtn5.textContent = "USE NOW";
  } else if (value === "2") {
    formA.classList.add("form");
    formB.classList.remove("form");
    formC.classList.add("form");
    card1.classList.remove("selected");
    card3.classList.remove("selected");
    card4.classList.remove("selected");
    card5.classList.remove("selected");
    card2.classList.add("selected");
    textbtn2.textContent = "selected";
    textbtn1.textContent = "USE NOW";
    textbtn3.textContent = "USE NOW";
    textbtn4.textContent = "USE NOW";
    textbtn5.textContent = "USE NOW";
  } else if (value === "3") {
    formA.classList.add("form");
    formB.classList.add("form");
    formC.classList.remove("form");
    card3.classList.add("selected");
    card1.classList.remove("selected");
    card2.classList.remove("selected");
    card4.classList.remove("selected");
    card5.classList.remove("selected");
    textbtn3.textContent = "selected";
    textbtn1.textContent = "USE NOW";
    textbtn2.textContent = "USE NOW";
    textbtn4.textContent = "USE NOW";
    textbtn5.textContent = "USE NOW";
  } else if (value === "4") {
    card4.classList.add("selected");
    card1.classList.remove("selected");
    card2.classList.remove("selected");
    card3.classList.remove("selected");
    card5.classList.remove("selected");
    textbtn4.textContent = "selected";
    textbtn2.textContent = "USE NOW";
    textbtn3.textContent = "USE NOW";
    textbtn1.textContent = "USE NOW";
    textbtn5.textContent = "USE NOW";
  } else if (value === "5") {
    card5.classList.add("selected");
    card1.classList.remove("selected");
    card2.classList.remove("selected");
    card3.classList.remove("selected");
    card4.classList.remove("selected");
    textbtn5.textContent = "selected";
    textbtn2.textContent = "USE NOW";
    textbtn3.textContent = "USE NOW";
    textbtn4.textContent = "USE NOW";
    textbtn1.textContent = "USE NOW";
  }
}
