 const checkBtn = document.getElementById('check-btn');
const text = document.getElementById('text-input');
const resultText = document.querySelector('.result-text');
const lettersDiv = document.querySelector('.letters');

text.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
      checkBtn.click();
  }
});

checkBtn.addEventListener("click",  () => {
    if (text.value === "") {
        alert("Please input a value");
        return;
    }

    const texteModifie = text.value.toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "");
    Palindrome(texteModifie);
});

function Palindrome(texteModifie){
  let texteInverser ="";
  for(let i = texteModifie.length - 1; i >= 0; i--){
    texteInverser += texteModifie[i];
  }

  if(texteModifie === texteInverser){
    resultText.textContent = `${text.value}` + " est un palindrome 👍";
  }else{
    resultText.textContent = `${text.value}` + " n'est pas un palindrome 👎";
  }
}
