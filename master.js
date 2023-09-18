// Start Header

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let scrollPosition = window.scrollY;
  let windowHeight = window.innerHeight;

  if (scrollPosition > 150 && scrollPosition < windowHeight) {
    header.style.cssText = "transform: translateY(-100%);";
  } else {
    header.style.cssText = "position : sticky ; transform: translateY(0%) ";
  }
});

// End Header

// Start Menu Small Screen

let pMenu = document.querySelector(".p-menu");
let side = document.querySelector(".side");
let allLi = document.querySelectorAll(".a-side .sp");
let iconX = document.querySelector(".icon");
let aSide = document.querySelector(".a-side");

pMenu.onclick = function () {
  side.classList.remove("hidden-black");
  side.classList.add("show-black");
  aSide.classList.remove("hidden-side");
};

side.onclick = function () {
  side.classList.remove("show-black");
  side.classList.add("hidden-black");
  aSide.classList.add("hidden-side");
};

// End Menu Small Screen
// Start main sec-1

let parent = document.querySelector(".p-chan");
parent.style.width = "100%";
let elements = document.querySelectorAll(".change");

setInterval(() => {
  if (parent.style.width === "0%") {
    parent.style.width = "100%";
  } else {
    parent.style.width = "0%";
  }
}, 1000);

let count = 0;

setInterval(() => {
  elements.forEach(function (e) {
    e.classList.add("hid");
    e.classList.remove("vis");
  });

  elements[count].classList.add("vis");
  count++;
  if (count == 3) {
    count = 0;
  }
}, 2000);

// End Main Sec-1
// Start Main Sec-4

let navSec4 = document.querySelectorAll(".b-s");

navSec4.forEach(function (e) {
  e.onclick = function () {
    navSec4.forEach(function (e) {
      e.classList.remove("sec-4-vis");
    });

    e.classList.add("sec-4-vis");
  };
});

// *****************************

let tube = document.querySelectorAll(".tube");
tube.forEach(function (r) {
  r.style.setProperty("--before-translateX", "-100%");
});

let allContentSec4 = document.querySelectorAll(".content-resume");
let buttonSec4 = document.querySelectorAll(".con");

buttonSec4.forEach(function (t) {
  t.onclick = function () {
    buttonSec4.forEach(function (e) {
      e.classList.add("res-off-a");
      e.classList.remove("res-on-a");
    });

    t.classList.add("res-on-a");
    t.classList.remove("res-off-a");

    if (true) {
      allContentSec4.forEach(function (f) {
        f.classList.add("sec-4-hidden");
        f.classList.remove("sec-4-show");
      });
      for (let y = 0; y < allContentSec4.length; y++) {
        if (allContentSec4[y].getAttribute("show") === t.getAttribute("show")) {
          allContentSec4[y].classList.remove("sec-4-hidden");
          allContentSec4[y].classList.add("sec-4-show");
          tube.forEach(function (r) {
            r.style.setProperty("--before-translateX", "-100%");
          });
        }
      }
      if (t.getAttribute("show") === "b") {
        tube.forEach(function (r) {
          r.style.setProperty("--before-translateX", "0%");
        });
      }
    }
  };
});

// End Main Sec-4
// Start Main Sec-5

let icon = document.querySelectorAll(".arrows .arro");
let bullet = document.querySelectorAll(".bullet");
let right = document.querySelector(".right-arrow");
let left = document.querySelector(".left-arrow");
let move = 1;
let p = document.querySelector(".all-testii");
let allTesti = document.querySelectorAll(".testi");

right.onclick = function () {
  icon.forEach(function (j) {
    j.children[0].style.color = "var(--dark-color-text)";
  });
  right.children[0].style.color = "var(--red-words)";
  move += 1;
  if (move == 3) {
    move = 0;
  }

  bullet.forEach(function (e) {
    e.style.backgroundImage = "linear-gradient(to bottom, #1214157e, #303132)";
  });
  bullet[move].style.backgroundImage =
    "linear-gradient(to bottom right, #12141500, #ff014fbf)";
};

left.onclick = function () {
  icon.forEach(function (j) {
    j.children[0].style.color = "var(--dark-color-text)";
  });
  left.children[0].style.color = "var(--red-words)";
  move -= 1;
  if (move == -1) {
    move = 2;
  }
  bullet.forEach(function (e) {
    e.style.backgroundImage = "linear-gradient(to bottom, #1214157e, #303132)";
  });
  bullet[move].style.backgroundImage =
    "linear-gradient(to bottom right, #12141500, #ff014fbf)";
};

// *******************************

// allTesti.forEach(function (e) {
//   if (e.classList.contains("sec-5active")) {
//     arrTesti.unshift(e.nextElementSibling);
//     arrTesti.unshift(e);
//     arrTesti.unshift(e.previousElementSibling);

//     if (e.nextElementSibling === null) {
//       arrTesti[2] = allTesti[0];
//     } else if (e.previousElementSibling === null) {
//       arrTesti[0] = allTesti[allTesti.length - 1];
//     }
//     console.log(arrTesti);
//     arrTesti[0].classList.add("sec-5hidden-2");
//     arrTesti[1].classList.add("sec-5active");
//     arrTesti[2].classList.add("sec-5hidden-1");
//   }

//   arrTesti = [];
// });

// End Main Sec-5
// Start Main Sec-6

let navSec6 = document.querySelectorAll(".b-s6");
let buttonSec6 = document.querySelectorAll(".cont");

navSec6.forEach(function (e) {
  e.onclick = function () {
    navSec6.forEach(function (e) {
      e.classList.remove("sec-6-vis");
    });

    e.classList.add("sec-6-vis");
  };
});

buttonSec6.forEach(function (t) {
  t.onclick = function () {
    buttonSec6.forEach(function (e) {
      e.classList.add("res-off-a6");
      e.classList.remove("res-on-a6");
    });

    t.classList.add("res-on-a6");
    t.classList.remove("res-off-a6");
  };
});

// End Main Sec-6
// Start Main Sec-7

let navSec7 = document.querySelectorAll(".b-s7");

navSec7.forEach(function (e) {
  e.onclick = function () {
    navSec7.forEach(function (e) {
      e.classList.remove("sec-7-vis");
    });

    e.classList.add("sec-7-vis");
  };
});

let allContentSec7 = document.querySelectorAll(".content-price");
let buttonSec7 = document.querySelectorAll(".conte");

buttonSec7.forEach(function (t) {
  t.onclick = function () {
    buttonSec7.forEach(function (e) {
      e.classList.add("res-off-a7");
      e.classList.remove("res-on-a7");
    });

    t.classList.add("res-on-a7");
    t.classList.remove("res-off-a7");

    if (true) {
      allContentSec7.forEach(function (f) {
        f.classList.add("sec-7-hidden");
        f.classList.remove("sec-7-show");
      });
      for (let y = 0; y < allContentSec7.length; y++) {
        if (allContentSec7[y].getAttribute("show") === t.getAttribute("show")) {
          allContentSec7[y].classList.remove("sec-7-hidden");
          allContentSec7[y].classList.add("sec-7-show");
        }
      }
    }
  };
});

// End Main Sec-7
