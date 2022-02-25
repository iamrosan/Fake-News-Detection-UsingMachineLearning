const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const articleDiv = document.querySelector(".article-div");
const urlDiv = document.querySelector(".url-div");
const predictBtn = document.querySelector(".predict-btn");
const output = document.querySelector("#output");
  let outputText = document.querySelector('#output-text');

predictBtn.addEventListener("click", function () {
  
  document.querySelector(".below_textarea").style.display = "block";
  setTimeout(setFun, 3000);
  console.log('h');
  // let changeSpanColor = setInterval(myfunc, 100);
 
});

// function clickkevent(){
//   const output = document.querySelector("#output");
//   let outputText = document.querySelector('#output-text');
//   document.querySelector(".below_textarea").style.display = "block";
//   setTimeout(setFun, 3000);
//   console.log('h');
// }

function setFun(){
  outputText.style.display='inline';
  console.log('h')

}
// outputText.style.display='inline';
  

function myfunc(){
  console.log('h');
  if (output.innerText == "FAKE") {
    output.style.color = "red";
    clearInterval(changeSpanColor);
  } else {
    output.style.color = "green";
    clearInterval(changeSpanColor);
  }
}

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
