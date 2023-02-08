/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let perfectExcuse = document.querySelector("#excuse");
  perfectExcuse.textContent =
    who[Math.floor(Math.random() * 3)] +
    " " +
    what[Math.floor(Math.random() * 3)] +
    " " +
    when[Math.floor(Math.random() * 4)];

  console.log("Hello Rigo from the console!");
};
