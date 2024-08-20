//functionality for game navigation
const navButton = document.querySelector("button[aria-expanded]");

function toggleNav({ target }) {
  const expanded = target.getAttribute("aria-expanded") === "true" || false;
  navButton.setAttribute("aria-expanded", !expanded);
}

navButton.addEventListener("click", toggleNav);

//button to add more squares
const buttonContainer = document.querySelector("#buttonContainer");
const customButton = document.createElement("button");
customButton.textContent = "New Grid";
buttonContainer.appendChild(customButton);

//main div container
const boxContainer = document.querySelector("#container");

//button function
customButton.addEventListener("click", userInput);

//user inputs grid numbers to generate new grid
function userInput() {
  clearParent();
  let validatedInput = false;
  while (validatedInput === false) {
    let pick = prompt("how many boxes per side? Max-100!");
    if (pick === null || pick > 100) {
      continue;
    } else if ((validatedInput = true)) {
      parseInt(pick);
    }

    // for loop for new grid using eventlisteners
    console.log("hello");
    for (let i = 0; i < pick; i++) {
      for (let j = 0; j < pick; j++) {
        let boxes = document.createElement("div");
        boxes.className = "boxes";
        boxContainer.style.gridTemplateColumns = `repeat(${pick}, 1fr)`;
        boxContainer.style.gridTemplateRows = `repeat(${pick}, 1fr)`;
        boxContainer.appendChild(boxes);
        boxes.addEventListener("mouseenter", mouseEnter);
        function mouseEnter() {
          boxes.style.backgroundColor = random_bg_color();
        }
      }
    }
  }
}

//startup little div boxes 16 x 16 using css grid and for loop
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let boxes = document.createElement("div");
    boxContainer.style.gridTemplateColumns = `repeat(${16}, 1fr)`;
    boxContainer.appendChild(boxes);
    boxes.addEventListener("mouseenter", mouseEnter);

    function mouseEnter() {
      boxes.style.backgroundColor = random_bg_color();
    }
  }
}

// clearing grid function
function clearParent() {
  boxContainer.textContent = "";
}

function random_bg_color() {
  // Generate random values for red, green, and blue components between 0 and 255.
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  // Construct the RGB color string.
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  // Output the generated color to the console.
  console.log(bgColor);
  // Set the background color of the document body to the generated color.
  return bgColor;
}
