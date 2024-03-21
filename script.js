const btn = document.querySelector("button");
const birthYear = document.querySelector("#birthYear");
const male = document.querySelector("#gender-male");
const female = document.querySelector("#gender-female");
const result = document.querySelector("#result");
const imageResult = document.createElement("img");

imageResult.style.cssText =
  "border-radius: 50%; width: 340px; height: 340px; display: block; margin: 25px auto 5px auto; transition: 1.2s";

let year = new Date().getFullYear();
let age;

function youngMale() {
  imageResult.src =
    "https://st2.depositphotos.com/3433891/6661/i/450/depositphotos_66613339-stock-photo-man-with-crossed-arms.jpg";
  setTimeout(() => {
    result.innerHTML = `Identificamos um homem novo de ${age} anos`;
    result.appendChild(imageResult);
  }, 1200);
}

function elderMale() {
  imageResult.src =
    "https://img.freepik.com/fotos-gratis/homem-idoso-que-sorri_1149-1117.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709769600&semt=ais";
  setTimeout(() => {
    result.innerHTML = `Identificamos um homem de ${age} anos`;
    result.appendChild(imageResult);
  }, 1200);
}

function resultFemale() {
  result.innerHTML = `Identificamos uma mulher de ${age} anos`;
  imageResult.src =
    "https://img.freepik.com/fotos-premium/mulher-jovem-e-bonita-africana-em-roupas-casuais-olhando-para-a-camera-e-sorrindo_425904-1661.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1710979200&semt=ais";
  result.appendChild(imageResult);
}

function resultMale() {
  age = year - birthYear.value;
  if (age < 50) {
    youngMale();
  } else {
    elderMale();
  }
}

btn.addEventListener("click", () => {
  if (birthYear.value) {
    if (male.checked) {
      resultMale();
    } else if (female.checked) {
      resultFemale();
    } else {
      alert("Insira um sexo");
    }
  } else {
    alert("Insira seu ano de nascimento");
  }
});
