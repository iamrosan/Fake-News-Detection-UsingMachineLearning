const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const articleDiv = document.querySelector(".article-div");
const urlDiv = document.querySelector(".url-div");
const predictBtn = document.querySelector(".predict-btn");
const output = document.querySelector("#output");
let newsLabel = document.querySelector("#nw").innerText;

function showDiv() {
  document.getElementsByTagName("body").style.display = "none";
  document.getElementById("loadingGif").style.display = "block";
  setTimeout(function () {
    document.getElementById("loadingGif").style.display = "none";
    document.getElementById("body").style.display = "block";
  }, 2000);
}

// function timerMessage() {
//   articleDiv.innerHTML = "Thanks for waiting!";
// }

// let timeoutID = setTimeout(timerMessage, 000000000000000000000000);

// predictBtn.addEventListener("submit", function () {
//   clearTimeout(timeoutID);
// timerMsg.innerHTML = "Timer was stopped";
// document.onreadystatechange = function () {
//   if (document.readyState !== "complete") {
//     document.querySelector("body").style.visibility = "hidden";
//     document.querySelector("#loader").style.visibility = "visible";
//   } else {
//     document.querySelector("#loader").style.display = "none";
//     document.querySelector("body").style.visibility = "visible";
//   }
// };
// });
// function myFun() {
//   if (newsLabel == "FAKE") {
//     newsLabel.style.color = "red";
//     clearInterval(v1);
//   } else {
//     newsLabel.style.color = "green";
//     clearInterval(v1);
//   }
// }
// document.getElementById("txt_1").value = getSavedValue("txt_1"); // set the value to this input

// //Save the value function - save it to localStorage as (ID, VALUE)
// function saveValue(e) {
//   var id = e.id; // get the sender's id to save it .
//   var val = e.value; // get the value.
//   localStorage.setItem(id, val); // Every time user writing something, the localStorage's value will override .
// }

// //get the saved value function - return the value of "v" from localStorage.
// function getSavedValue(v) {
//   if (!localStorage.getItem(v)) {
//     return ""; // You can change this to your defualt value.
//   }
//   return localStorage.getItem(v);
// }

function toggleContent(num) {
  if (num == 1) {
    urlDiv.style.display = "none";
    articleDiv.style.display = "block";
  } else {
    articleDiv.style.display = "none";
    urlDiv.style.display = "block";
  }
}

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
