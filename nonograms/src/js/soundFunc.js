import clickForGame from "../assets/sounds/click_for_game.mp3";
import clickForButton from "../assets/sounds/click_for_button.mp3";
import winSound from "../assets/sounds/win_sound.mp3";
import focusSound from "../assets/sounds/slide-click-92152.mp3";
import { soundToggleButton } from "./buttons";
function soundPlayGame() {
  if (!soundToggleButton.getNode().classList.contains("off")) {
    const audio = new Audio(clickForGame);
    audio.play();
  }
}

function soundPlayFocus() {
  if (!soundToggleButton.getNode().classList.contains("off")) {
    const audio = new Audio(focusSound);
    audio.play();
  }
}

function soundPlayWin() {
  if (!soundToggleButton.getNode().classList.contains("off")) {
    const audio = new Audio(clickForButton);
    audio.play();
  }
}

function soundButtonClick() {
  if (!soundToggleButton.getNode().classList.contains("off")) {
    const audio = new Audio(winSound);
    audio.play();
  }
}

export { soundButtonClick, soundPlayGame, soundPlayWin, soundPlayFocus };
