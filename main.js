//IIFE - Immediately Invoked Function Expression
(async function () {
  let adviceNumber = document.getElementById("advice_number");
  let adviceContent = document.getElementById("advice_content");
  let adviceCircle = document.getElementById("advice_circle");
  let adviceDice = document.getElementById("dice");
  async function getAdvice() {
    let result = await fetch("https://api.adviceslip.com/advice");
    return result.json();
  }
  async function generateAdvice() {
    let advice = await getAdvice();
    adviceNumber.innerHTML = `Advice #${advice.slip.id}`;
    adviceContent.innerHTML = `"${advice.slip.advice}"`;
  }
  window.onload = await generateAdvice();
  adviceCircle.addEventListener("click", () => {
    adviceDice.classList.add("rotate");
    generateAdvice();
    setTimeout(function () {
      dice.classList.remove("rotate"); 
    }, 1000);
  });
})();
