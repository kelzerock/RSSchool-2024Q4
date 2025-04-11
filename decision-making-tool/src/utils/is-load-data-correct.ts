import { type ApplicationState } from "../types/application-state";

export const isLoadDataCorrect = (
  data: unknown,
): data is Pick<ApplicationState, "options" | "lastIndex"> => {
  return typeof data === "object" &&
    data !== null &&
    "lastIndex" in data &&
    typeof data.lastIndex === "number" &&
    "options" in data &&
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
