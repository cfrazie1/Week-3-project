const clearBtn = document.querySelector(".clearbutton"),
      calWindow = document.querySelector(".calWindow"),
      sevenBtn = document.querySelector(".sevenBtn"),
      eightBtn = document.querySelector(".eightBtn"),
      nineBtn = document.querySelector(".nineBtn"),
      dividerBtn = document.querySelector(".dividerBtn"),
      fourBtn = document.querySelector(".fourBtn"),
      fiveBtn = document.querySelector(".fiveBtn"),
      sixBtn = document.querySelector(".sixBtn"),
      multiplierBtn = document.querySelector(".multiplierBtn"),
      oneBtn = document.querySelector(".oneBtn"),
      twoBtn = document.querySelector(".twoBtn"),
      threeBtn = document.querySelector(".threeBtn"),
      subtractorBtn = document.querySelector(".subtractorBtn"),
      zeroBtn = document.querySelector(".zeroBtn"),
      decimalBtn = document.querySelector(".decimalBtn"),
      equalBtn = document.querySelector(".equalBtn"),
      adderBtn = document.querySelector(".adderBtn");


// multiplierBtn.onclick = function() {
//   console.log("multiplierBtn")
// };
// let arithmeticBtns = document.querySelectorAll(".arithmeticBtn")
// console.log(arithmeticBtns)

let buttons = document.querySelectorAll("p");

// console.log(buttons);
console.log(buttons.length)
//create a for loop to click buttons
//
for (let i = 0; i < buttons.length; i++){
  let btn = buttons[i];

  //add eventlisterner
   btn.addEventListener("click", function(){

     if(btn.innerHTML == "=") {

      let equation = calWindow.innerHTML;
      equation = equation.replace("x", "*");
      calWindow.innerHTML = eval(equation);

       //  console.log(equation)
       //  1 + 2
       //  1 / 2
       //  1 - 1
       //  1 * 1
     } else if(btn.innerHTML == "C") {
       calWindow.innerHTML = "";


     } else {

       calWindow.innerHTML += btn.innerHTML;

     }


  // var msg = btn.textContent;
  // console.log("msg",msg)

   });
}
