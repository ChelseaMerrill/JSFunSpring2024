(function () {
  /**
   * As a user, I should be able to click on the a button to see random dog images.
   * Please use axios in this example.
   *
   * You will be making an HTTP request to this API:
   * https://dog.ceo/api/breeds/image/random
   *
   * You should expect this as a response:
   * {
   *    "status": "success",
   *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
   * }
   */

  const button = document.querySelector('.button');
  button.addEventListener('click', () => {
    axios ({
      method: "GET",
      url: "https://dog.ceo/api/breeds/image/random"
    })
    .then((response) =>{
      const img = document.getElementById('image');
      img.src = response.data.message;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
      document.getElementById('image').innerHTML = "No image found";
    });
  }); 

})();
