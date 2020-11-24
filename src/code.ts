window.addEventListener("load", main);

let character: HTMLElement | null;
let position = { bottom: 0, left: 0 };

function main() {
  character = document.querySelector(".character");
  addEventListeners();

  runGameLoop();
}

function addEventListeners() {
  window.addEventListener("keydown", handleUserInput);
}

function runGameLoop() {
  setInterval(function () {
    applyGravity();
    renderCharacter();
  }, 10);
}

function applyGravity() {
  position.bottom -= 0.1;
  if (position.bottom < 0) {
    position.bottom = 0;
  }
}

function renderCharacter() {
  if (character) {
    character.style.bottom = position.bottom + "%";
    character.style.left = position.left + "%";
  }
}

function handleUserInput(event: KeyboardEvent) {
  switch (event.key) {
    case "ArrowLeft":
      position.left -= 1;
      break;
    case "ArrowRight":
      position.left += 1;
      break;
    case " ":
      if (position.bottom === 0) {
        position.bottom += 10;
      }
  }
}
