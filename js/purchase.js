var purchaseLink = document.querySelectorAll(".button-buy");
var purchasePopup = document.querySelector(".modal-order");
var purchaseClose = purchasePopup.querySelector(".modal-close");

for (var i = 0; i < purchaseLink.length; i++) {
  purchaseLink[i].addEventListener("click", function (evt) {
  evt.preventDefault();
	purchasePopup.classList.add("modal-show");
	});
};

purchaseClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  purchasePopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (purchasePopup.classList.contains("modal-show")) {
      evt.preventDefault();
      purchasePopup.classList.remove("modal-show");
    }
  }
});
