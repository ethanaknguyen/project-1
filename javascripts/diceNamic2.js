// jshint esversion: 7
let rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};
//define helper functions her

//Define a controller to handle the button click
let controller = () => {
  let target,
    die1,
    die2,
    rollCount = 0,
    die1URL,
    die2URL,
    imgElem1,
    cheeryMsg;
  //Input: prompt the user for cost and diameter

  //Processing: assemble the result string
  //use <br> in the result string for html newline
  target = document.querySelector("input").value;
  console.log(target);

  do {
    die1 = rollDie();
    die2 = rollDie();
    console.log(`${die1} ${die2} ${rollCount}`);

    rollCount += 1;

    console.log(``);
    
  } while (die1 + die2 != target);

  die1URL = `images/die${die1}.gif`;
  imgElem1 = document.querySelector("img");
  imgElem1.setAttribute("src", die1URL);

  die2URL = `images/die${die2}.gif`;
  imgElem1 = document.querySelector("img")[1];
  imgElem1.setAttribute("src", die2URL);

  cheeryMsg = `You hit your number in ${rollCount} roll ${
    rollCount == 1 ? "" : "s"
  }!`;
  document.querySelector("div").innerHTML = cheeryMsg;
};

//Register the controller after the DOM is complete
window.addEventListener("load", () => {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
