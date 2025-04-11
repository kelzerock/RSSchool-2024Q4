import { type ApplicationState } from "../types/application-state";

export const isAppStateDataCorrect = (
  data: unknown,
): data is Omit<ApplicationState, "elements"> => {
  return typeof data === "object" &&
    data !== null &&
    "lastIndex" in data &&
    typeof data.lastIndex === "number" &&
    "options" in data &&
    "animation" in data &&
    typeof data.animation === "object" &&
    data.animation &&
    "sound" in data &&
    typeof data.sound === "boolean" &&
    "duration" in data.animation &&
    typeof data.animation.duration === "number" &&
    Array.isArray(data.options) &&
    data.options.every(
      (option) =>
        option &&
        typeof option.index === "number" &&
        typeof option.description === "string" &&
        typeof option.weight === "string",
    )
    ? true
    : false;
};
