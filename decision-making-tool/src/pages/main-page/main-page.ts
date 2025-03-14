import { appState } from "../../state/application-state";
import { createNode } from "../../utils/node";
import { addOption } from "./add-option";
import { handleAddOption } from "./handle-click";

const buttonStyle =
  "bg-indigo-300 border rounded-md border-black px-5 py-1 hover:cursor-pointer hover:bg-indigo-500 w-5/6";

const createMainPage = (): void => {
  const wrapper = createNode(
    "div",
    "flex justify-start flex-col items-center bg-emerald-300 grow py-6 max-w-2xl w-5/6 mx-auto gap-y-2",
    document.body,
    "",
  );
  createNode("h1", "text-2xl", wrapper, "Decision making tool");
  const listOfOption = createNode(
    "ul",
    "flex flex-col gap-y-2 py-1 px-3",
    wrapper,
  );

  appState.options.forEach((option) => {
    addOption(option, listOfOption);
  });

  const buttonAddOption = createNode(
    "button",
    buttonStyle,
    wrapper,
    "add option",
  );
  buttonAddOption.addEventListener("click", () =>
    handleAddOption(appState, listOfOption),
  );

  const buttonPastList = createNode(
    "button",
    buttonStyle,
    wrapper,
    "past list",
  );
  const buttonClearList = createNode(
    "button",
    buttonStyle,
    wrapper,
    "clear list",
  );
  const buttonSafeListToFile = createNode(
    "button",
    buttonStyle,
    wrapper,
    "safe list to file",
  );
  const buttonLoadListFromFile = createNode(
    "button",
    buttonStyle,
    wrapper,
    "load list from file",
  );
  const buttonStart = createNode("button", buttonStyle, wrapper, "start");

  console.log(
    buttonPastList,
    buttonClearList,
    buttonSafeListToFile,
    buttonLoadListFromFile,
    buttonStart,
  );
};

export { createMainPage };
