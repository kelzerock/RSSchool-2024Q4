import winSound from "../../assets/sound/win_sound.mp3";
import { appState, saveToLocalStorage } from "../../state/application-state";

export const handleClickSoundButton = (element: HTMLElement): void => {
  const context = element.textContent;
  if (context === "sound: off") {
    element.textContent = "sound: on";
    element.dataset.sound = "true";
    appState.sound = true;
  } else {
    element.textContent = "sound: off";
    element.dataset.sound = "false";
    appState.sound = false;
  }
  saveToLocalStorage();
};

export const playingWinSound = (element: HTMLElement): void => {
  if (element.dataset.sound === "true") {
    const audio = new Audio(winSound);
    audio.play();
  }
};
