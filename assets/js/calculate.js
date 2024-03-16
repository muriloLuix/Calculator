export default function calculate() {
  const resultInput = document.querySelector("#result");
  resultInput.value = "ERROR";
  resultInput.classList.add("error");

  const result = eval(input.value); // eval() significa avaliar, serve para avaliar o código javascript e executar esse código
  resultInput.value = result;
  resultInput.classList.remove("error");
}
