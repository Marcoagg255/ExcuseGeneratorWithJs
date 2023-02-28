/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const who = ["the dog", "my granma", "his turtle", "my bird"];
  const what = ["eat", "pissed", "crushed", "broked"];
  const when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const perfectExcuse = document.querySelector("#miBoton");
  perfectExcuse.textContent =
    who[Math.floor(Math.random() * 3)] +
    " " +
    what[Math.floor(Math.random() * 3)] +
    " " +
    when[Math.floor(Math.random() * 4)];

  // console.log("Hello Rigo from the console!");

  const boton = document.getElementById("miBoton");

  boton.addEventListener("click", function() {
    const indexWho = Math.floor(Math.random() * who.length);
    const indexWhat = Math.floor(Math.random() * what.length);
    const indexWhen = Math.floor(Math.random() * when.length);

    const excusaAleatoria =
      who[indexWho] + " " + what[indexWhat] + " " + when[indexWhen];

    boton.innerText = excusaAleatoria;
  });
};
