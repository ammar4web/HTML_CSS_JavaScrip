// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

// If There's Color Item In Local Storage
if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color", mainColors);

  // Remove Active Class From All Colors List Item
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    // Add Active Class On Element With Data-Color === Local Storage Item
    if (element.dataset.color === mainColors) {
      // Add Active Class
      element.classList.add("active");
    }
  });
}

// Toggle Spin Class On Icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  // Toggle Class Fa-spin For Rotation on Self
  this.classList.toggle("fa-spin");

  // Toggle Class Open On Main Settings Box
  document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach((li) => {
  // Click On Every List Items
  li.addEventListener("click", (e) => {
    // Set Color On Root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    // Remove Active Class From All Childrens
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    // Add Active Class On Self
    e.target.classList.add("active");
  });
});

// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All Spans
randomBackEl.forEach((span) => {
  // Click On Every Span
  span.addEventListener("click", (e) => {
    // Remove Active Class From All Childrens
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    // Add Active Class On Self
    e.target.classList.add("active");
  });
});
// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Amages
let imgsArray = ["01.jpg", "02.jpg", "04.jpg", "05.jpg"];

setInterval(() => {
  // Get Random Number
  let randomNumber = Math.floor(Math.random() * imgsArray.length);

  // Change Background Image URL
  landingPage.style.backgroundImage =
    'url("images/' + imgsArray[randomNumber] + '")';
}, 6000);
