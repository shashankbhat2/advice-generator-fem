//IIFE - Immediately Invoked Function Expression
(async function () {
  let adviceNumber = document.getElementById("advice_number");
  let adviceContent = document.getElementById("advice_content");
  let adviceCircle = document.getElementById("advice_circle");
  let adviceDice = document.getElementById("dice");
  let shareButton = document.getElementById("share_btn");
  let shareTooltip = document.getElementById('share_tooltip')
  let advice = "";

  async function getAdvice() {
    let result = await fetch("https://api.adviceslip.com/advice");
    let data = await result.json();
    return data.slip
  }

  async function generateAdvice() {
    advice = await getAdvice();
    adviceNumber.innerHTML = `Advice #${advice.id}`;
    adviceContent.innerHTML = `"${advice.advice}"`;
  }

  window.onload = await generateAdvice();
  adviceCircle.addEventListener("click", () => {
    adviceDice.classList.add("rotate");
    generateAdvice();
    setTimeout(function () {
      dice.classList.remove("rotate"); 
    }, 1000);
  });

  shareButton.addEventListener('click', () => {
    navigator.clipboard.writeText(`"${advice.advice}"`)
    shareTooltip.classList.remove('hide')
    setTimeout(function () {
      shareTooltip.classList.add("hide"); 
    }, 1000);
  })
})();
