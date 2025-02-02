import clickForGame from "../assets/sounds/click_for_game.mp3";
import clickForButton from "../assets/sounds/click_for_button.mp3";
import winSound from "../assets/sounds/win_sound.mp3";
import focusSound from "../assets/sounds/slide-click-92152.mp3";
function soundPlayGame() {
  const audio = new Audio(clickForGame);
  audio.play();
}

function soundPlayFocus() {
  const audio = new Audio(focusSound);
  audio.play();
}

function soundPlayWin() {
  const audio = new Audio(clickForButton);
  audio.play();
}

function soundButtonClick() {
  const audio = new Audio(winSound);
  audio.play();
}

export { soundButtonClick, soundPlayGame, soundPlayWin, soundPlayFocus };
