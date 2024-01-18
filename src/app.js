/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed on", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  function randomTime(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  let randomWho = randomTime(who);
  let randomAction = randomTime(action);
  let randomWhat = randomTime(what);
  let randomWhen = randomTime(when);

  document.getElementById("excuse").innerHTML =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
};
