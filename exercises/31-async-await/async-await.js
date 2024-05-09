(function () {
  /**
   * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
   *
   *  Developer notes:
   *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
   *
   * This is the API you will be using. The method will be GET.
   * https://ron-swanson-quotes.herokuapp.com/v2/quotes
   */

  const quote = document.getElementById("quote");
  
  const getData = async () => {
    try{
      const response = await axios.get(
        "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
      );
      quote.textContent = response.data[0];
    }
    catch (err) {
      console.error(err);
      quote.textContent = "Error";
    }
};
const btn = document.querySelector("button");
btn.addEventListener("click", getData);
})();
