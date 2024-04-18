/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  // Put your answers in here

  //1

  const newlink = document.querySelector('.alert-warning')
  newlink.href="https://developer.mozilla.org/en-US/docs/Web/JavaScript";

  const newText = document.querySelector('.alert-success');
  newText.innerHTML = "I am victorious!";

  const newBgColor = document.querySelector(".alert-info");
  newBgColor.style.background = "pink";

  const txtColor = document.querySelector('#change-color');
  txtColor.classList.add("text-white");

  const mybutton = document.querySelector("#my-button");
  const textDarkDiv = document.querySelector("#second-button");
  if(mybutton.classList.contains("btn-primary")){
    textDarkDiv.textContent = " blue";

  }


})();
