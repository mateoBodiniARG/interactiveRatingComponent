const inputNumbers = document.querySelectorAll(".input-label");
const btn = document.querySelector(".form__button");
const thankYou = document.querySelector('.thankYou')
const mainContainer = document.querySelector('.container')
const numberSelect = document.querySelector('.thankYou__number')
const errorMessage = document.querySelector(".error-message");

inputNumbers.forEach((inp) => {
  inp.addEventListener("click", (e) => {
    if (!inp.classList.contains("orange-active")) {
      inputNumbers.forEach((b) => {
        if (b.classList.contains("orange-active")) {
          b.classList.remove("orange-active");
        }
      });
      inp.classList.add("orange-active");
    } else {
      inp.classList.remove("orange-active");
    }
  });
});

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedNumber = document.querySelector('input[name="number"]:checked');
    if (selectedNumber) {
        mainContainer.style.display = "none";
        thankYou.classList.remove("hidden");
        numberSelect.textContent = selectedNumber.value;
    } else {
      errorMessage.classList.remove("hidden2");
    }
  });
  

