"use strict";

const typingAnimation = function (text, i, callback) {
  if (i < text.length) {
    document.querySelector(".description-animation").innerHTML =
      text.substring(0, i + 1) + '<span hidden="true"></span>';
    setTimeout(function () {
      typingAnimation(text, i + 1, callback);
    }, 100);
  } else if (typeof callback == "function") {
    setTimeout(callback, 600);
  }
};

const initDescriptionAnimation = function (i) {
  //Array of descriptions to be typed out
  const descriptions = [
    "Student",
    "Goalkeeper",
    "Software Engineer",
    "Traveler",
    "Creator",
  ];

  //Check to make sure the index is valid and initiate the animation
  if (typeof descriptions[i] != "string") {
    setTimeout(function () {
      initDescriptionAnimation(0);
    }, 700);
  }

  //
  if (i < descriptions[i].length) {
    typingAnimation(descriptions[i], 0, function () {
      initDescriptionAnimation(i + 1);
    });
  }
};

document.addEventListener("DOMContentLoaded", initDescriptionAnimation(0));
