// Get Slider Items
let sliderImages = document.querySelectorAll(".slider-container img");

//  Get Number Of Slides
let slidesCount = sliderImages.length;

// Set Current Slide
let currentSlide = 1;

// Slide Number Element
let slideNumberElement = document.getElementById("slide-number");

// Previous and Next Buttons
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

// Handle Click on Previous and Next Buttons
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", previousSlide);

// Create The Main UL Element
let paginationElement = document.createElement("ul");

// Set ID On Created UL Element
paginationElement.setAttribute("id", "pagination-ul");

// Create List Items Based On Slider Count
for (let i = 0; i < slidesCount; i++) {
  // Create The List
  let paginationItem = document.createElement("li");
  // Set Custom Attribute
  paginationItem.setAttribute("data-index", i + 1);
  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i + 1));
  // Append Items to The  Main UL List
  paginationElement.appendChild(paginationItem);
}

// Add The Created UL Element to The Page
document.getElementById("indicators").appendChild(paginationElement);

// Get The New Created UL
let paginationCreatedUl = document.getElementById("pagination-ul");

// Get Pagination Items
let paginationBullets = Array.from(paginationCreatedUl.children);

// Loop Through All Bullets Items
paginationBullets.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    currentSlide = +bullet.getAttribute('data-index');
    theChecker();
  })
})

// Trigger The Checker Function
theChecker();

setInterval(() => {
  if (currentSlide !== slidesCount) {
    currentSlide++;
  } else {
    currentSlide = 1;
  }
  theChecker();
},2000)

// Next Slide Function
function nextSlide() {
  if (currentSlide !== slidesCount) {
    currentSlide++;
    theChecker();
  }
}

// Previous Slide Function
function previousSlide() {
  if (currentSlide !== 1) {
    currentSlide--;
    theChecker();
  }
}

// Create The Checker Function
function theChecker() {
  // Set the Slide Number
  slideNumberElement.textContent = `Slide #${currentSlide} of ${slidesCount}`;

  // Remove All Active Classes From Images and Pagination Bullets
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });

  // Loop Through Pagination Bullets
  paginationBullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });

  // Set Active Class On Current Slide
  sliderImages[currentSlide - 1].classList.add("active");

  // Set Active Class on Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (currentSlide == slidesCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

console.log();
