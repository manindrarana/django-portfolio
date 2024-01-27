//text typing

const aboutText = document.getElementById("about-text");
const textArray = ["I am a student", "I am studying masters in informatics"];
let index = 0;
let isDeleting = false;
let charIndex = 0;

function typeText() {
  const currentText = textArray[index];
  if (isDeleting) {
    aboutText.textContent = currentText.substring(0, charIndex - 1) + "_";
    charIndex--;
  } else {
    aboutText.textContent = currentText.substring(0, charIndex + 1) + "_";
    charIndex++;
  }

  if (charIndex <= 0) {
    isDeleting = false;
    index++;
  }

  if (charIndex === currentText.length + 1) {
    isDeleting = true;
    setTimeout(() => {
      typeText();
    }, 100);
  } else {
    setTimeout(typeText, 100);
  }

  if (index === textArray.length) {
    index = 0;
  }
}

typeText();

//bottomto top
const bottomToTopBtn = document.getElementById("bottomToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    bottomToTopBtn.style.display = "block";
  } else {
    bottomToTopBtn.style.display = "none";
  }
}

bottomToTopBtn.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
