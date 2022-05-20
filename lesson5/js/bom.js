const ulRef = document.querySelector("ul");
const inputRef = document.querySelector("input");
const btnRef = document.querySelector("button");

inputRef.focus();

btnRef.addEventListener("click", () => {
  let inputVal = inputRef.value;
  inputRef.value = "";

  const liElm = document.createElement("li");
  const spanElm = document.createElement("span");
  const xBtnElm = document.createElement("button");

  liElm.appendChild(spanElm);
  liElm.appendChild(xBtnElm);

  spanElm.textContent = inputVal;
  xBtnElm.textContent = "X"
  xBtnElm.ariaLabel = "Delete";

  ulRef.appendChild(liElm);

  xBtnElm.addEventListener("click", () => {
    ulRef.removeChild(liElm);
  });
});