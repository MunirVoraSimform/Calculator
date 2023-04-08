const display = document.querySelector(".display");
const input = document.querySelector("#inputScreen");
const btn = document.querySelectorAll(".btn");
const digit = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operators");
const equal = document.querySelector(".equal");
var first = 0;
var result = 0;
var arr = [];
var operator = "";
var operatorTap = 0;

function clr() {
    display.innerText = "";
    input.value = "";
    first = 0;
    result = 0;
    arr = [];
    operator = "";
    operatorTap = 0;
}
function del() {
  input.value = input.value.slice(0, -1);
}

digit.forEach((btn) => {
  btn.addEventListener("click", () => {
    input.value += btn.innerText;
  });
});

operators.forEach((btn) => {
  btn.addEventListener("click", () => {
    operatorTap += 1;
    arr.push(btn.innerText);
    first = input.value;
    if(operatorTap == 1) {
        result = first;
    }
    else if(operatorTap >= 2){
        operator = arr[arr.length - 2];
        console.log(operator);
        result = eval(`${result} ${operator} ${parseInt(first)}`);
    }
    input.value = "";
  });
});

equal.addEventListener("click", () => {
  operator = arr[arr.length - 1];
  console.log(operator);
  first = input.value;
  result = eval(`${result} ${operator} ${parseInt(first)}`);
  display.innerText = "";
  input.value = result;
});

// display output
btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    display.innerText = result;
  });
});
