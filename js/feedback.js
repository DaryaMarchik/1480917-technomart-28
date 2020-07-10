var feedbackLink = document.querySelector(".red-button-feedback");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = feedbackPopup.querySelector(".modal-close");
var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var feedbackName = feedbackPopup.querySelector(".feedback-name-user");
var feedbackEmail = feedbackPopup.querySelector(".feedback-email-user");
var feedbackLetter = feedbackPopup.querySelector(".feedback-letter");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name"),
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  if (storageName && storageEmail) {
    feedbackName.value = storageName
    feedbackEmail.value = storageEmail;
    feedbackLetter.focus();
  } else if (storageName) {
    feedbackName.value = storageName
    feedbackEmail.focus();
  } else if (storageEmail) {
    feedbackEmail.value = storageEmail;
    feedbackName.focus();
  } else {
    feedbackName.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("name", feedbackName.value);
    localStorage.setItem("email", feedbackEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
});
