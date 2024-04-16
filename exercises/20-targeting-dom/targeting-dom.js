/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  const firstList = document.querySelector("li");
  console.log(firstList);

  const myID = document.querySelector('#myId');
  console.log(myID);

  const warningLi = document.querySelectorAll(".bg-warning");
  console.log(warningLi);

  const targetButton = document.querySelector(".target-button");
  console.log(targetButton);

  const socialMedia = document.querySelectorAll(".social-site");
  console.log(socialMedia);

  const nestElements = document.querySelectorAll("div#myRow div.col");
  console.log(nestElements);
})();
