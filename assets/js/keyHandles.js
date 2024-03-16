import calculate from "./calculate.js";

const input = document.querySelector("#input");

export function handleButtonPress(ev) {
  const value = ev.currentTarget.dataset.value; // dataset é usado para acessar as tags datas do HTML, ou seja, ele já começa com um valor pré-definido
  input.value += value;
}

export function handleClearButton() {
  input.value = "";
  input.focus();
}

export function handleTyping(ev) {
  ev.preventDefault();
  const allowedKeys = [
    "(",
    ")",
    "/",
    "*",
    "-",
    "+",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    ".",
    "%",
    " ",
  ];
  if (allowedKeys.includes(ev.key)) {
    // ev.key é a tecla vinculada ao evento ou a teclada que o usuário pressionou
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1); // -1 vai pegar o penultimo caracter
  }
  if (ev.key === "Enter") {
    calculate();
  }
}
