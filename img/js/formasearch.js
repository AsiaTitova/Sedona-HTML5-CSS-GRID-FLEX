<script src="../js/map.js"></s
  
  var button = document.querySelector(".offers-button");
  var popup = document.querySelector(".form-show"); 
  var checkin = popup.querySelector("[name=checkin]");
  var checkout = popup.querySelector("[name=checkout]");
  var adults = popup.querySelector("[name=adults]");
  var children = popup.querySelector("[name=children]");
  var form = popup.querySelector(".form-wrap");

  button.addEventListener("click", function (evt) {
      
      evt.preventDefault();
      popup.classList.toggle("form-show");
  });

  form.addEventListener("submit", function (evt) {
    if (!checkin.value || !checkout.value || !adults.value) {
      evt.preventDefault();
      console.log("Заполните форму регистрации!");
    }
  });


  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("form-show")) {
        evt.preventDefault();
        popup.classList.remove("form-show");
      }
    }
  }