/*
Declarer une variable qui récupere la saisie dans le input
Enlever les espaces de cette variable 
Mettre la variable en miniscule 

function inverserTexte(notre variable en miniscule et sans espace) {
  Créer une nouvelle variable pour stocker le texte inversé.
  Pour chaque caractère dans la chaîne (en partant de la fin) :
    Ajouter le caractère à la variable de texte inversé.
  Retourner le texte inversé.
}

*/ 
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
