let countDown = document.getElementById("countDown");
let num = 0;
let clearInter = null;

let setTimer = () => {
  if (!clearInter) {
    clearInter = setInterval(() => {
      num += 1;
      countDown.innerText = num;
    }, 1000);
  }
};

let start_btn = document
  .querySelector(".start_btn")
  .addEventListener("click", () => {
    setTimer();
  });

let reset_btn = document
  .querySelector(".reset_btn")
  .addEventListener("click", () => {
    clearInterval(clearInter);
    clearInter = null;
    num = 0;
    countDown.innerText = num;
  });

let stop_btn = document
  .querySelector(".stop_btn")
  .addEventListener("click", () => {
    clearInterval(clearInter);
    clearInter=null
  });

let restValue = document.querySelector(".restValue");

let showStopValue = () => {
  let p = document.createElement("p");
  p.innerText = `The stop time is ${num}`;
  console.log(p);
  restValue.append(p);
};
let time_btn = document
  .querySelector(".time_btn")
  .addEventListener("click", () => {
    showStopValue();
    console.log(restValue);
  });

let clear_btn = document
  .querySelector(".clear_btn")
  .addEventListener("click", () => {
    restValue.innerHTML = "";
    console.log(restValue);
  });
