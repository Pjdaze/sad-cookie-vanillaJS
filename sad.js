const light = document.querySelector(".cookie-eye");
const rim = document.querySelector(".cookie-rim");
const buttons = document.querySelectorAll(".news");
const bad = document.querySelector(".bad-news");
const trick = document.querySelector(".good-news");
const resett = document.querySelector(".reset");
const sad = document.querySelectorAll(".sad");

const makeItSad = elem => {
  elem.forEach(elem => {
    elem.addEventListener(
      "click",
      () => {
        if (!elem.classList.contains("active")) {
          elem.classList.add("active");
        }
      },
      false
    );
  });
};

makeItSad(sad);

const handleSadClick = button => {
  button.forEach(elem => {
    elem.addEventListener(
      "click",
      () => {
        if (
          !rim.classList.contains("active") ||
          !light.classList.contains("active")
        ) {
          rim.classList.add("active");
          light.classList.add("active");
        }
      },
      false
    );
  });
};

handleSadClick(buttons);

const handleTrick = button => {
  button.addEventListener(
    "click",
    button => {
      button.innerHTML = "<h4>Still Bad</h4>";
      button.style.backgroundColor = "red";
    },
    false
  );
};

handleTrick(trick);

const handleReset = button => {
  resett.addEventListener(
    "click",
    () => {
      rim.classList.remove("active");
      light.classList.remove("active");
      resett.innerHTML = "Are You Ready To Work";
      trick.innerHTML = "<h4>Good News</h4>";
      trick.style.background = "transparent";
    },
    false
  );
};

handleReset();
