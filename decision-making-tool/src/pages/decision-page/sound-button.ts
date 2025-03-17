export const handleClickSoundButton = (element: HTMLElement): void => {
  const context = element.textContent;
  element.textContent = context === "sound: off" ? "sound: on" : "sound: off";
};
