//IIFE - Immediately Invoked Function Expression
(async function () {
  let advice_number = document.getElementById("advice_number");
  let advice_content = document.getElementById("advice_content");
  let advice_circle = document.getElementById("advice_circle");
  let dice = document.getElementById("dice");
  async function getAdvice() {
    let result = await fetch("https://api.adviceslip.com/advice");
    return result.json();
  }
  async function generateAdvice() {
    let advice = await getAdvice();
    advice_number.innerHTML = `Advice #${advice.slip.id}`;
    advice_content.innerHTML = `"${advice.slip.advice}"`;
  }
  window.onload = generateAdvice();
  advice_circle.addEventListener("click", () => {
    dice.classList.add("rotate");
    generateAdvice();
    setTimeout(function () {
      dice.classList.remove("rotate"); 
    }, 1000);
  });
})();
