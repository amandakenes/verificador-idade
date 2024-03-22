const btn = document.querySelector("button");
const birthYear = document.querySelector("#birthYear");
const male = document.querySelector("#gender-male");
const female = document.querySelector("#gender-female");
const result = document.querySelector("#result");
const imageResult = document.createElement("img");

const imgs = {
  kidFemale:
    "https://images.pexels.com/photos/20167083/pexels-photo-20167083/free-photo-of-uma-garota-inocente.jpeg?auto=compress&cs=tinysrgb&w=600",
  teenYoungAdultFemale:
    "https://img.freepik.com/free-photo/stylish-confident-african-american-girl-pink-t-shirt-smiling-happy_176420-31169.jpg?t=st=1711112425~exp=1711116025~hmac=4fe9af159abe94c3f683737dee0a22eca5dc3d09cf05bc47753e2e2fbcd64028&w=900",
  youngFemale:
    "https://img.freepik.com/fotos-premium/mulher-jovem-e-bonita-africana-em-roupas-casuais-olhando-para-a-camera-e-sorrindo_425904-1661.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1710979200&semt=ais",
  elderFemale:
    "https://img.freepik.com/fotos-premium/bela-senhora-com-cabelo-branco-sorrindo-em-um-estudio-de-fundo-laranja-tiro-generative-ai_63135-5405.jpg?w=826",
  kidMale:
    "https://img.freepik.com/free-photo/portrait-happy-cute-little-kid-eyeglasses_171337-7222.jpg?t=st=1711111893~exp=1711115493~hmac=eb3acf52a988e4321412943612bd94953729ee3fa10f5c0e725ab4e6236ac32f&w=900",
  teenYoungAdultMale:
    "https://img.freepik.com/free-photo/content-handsome-young-man-blue-tshirt-pointing-aside_1262-17845.jpg?t=st=1711112190~exp=1711115790~hmac=39674d4d698f294df892a897cc431036737ad262e90b7cb6a02deafe244b929a&w=900",
  youngMale:
    "https://img.freepik.com/fotos-gratis/cara-elegante-confiante-com-tatuagens-posando-na-varanda-do-apartamento_74855-2711.jpg?t=st=1711053178~exp=1711056778~hmac=15bfb44b429ff2a6f54d09a0ee3b4bd150e4516f19dfad6685b2c50b463ae598&w=826",
  elderMale:
    "https://img.freepik.com/fotos-gratis/vista-lateral-velho-posando-dentro-de-casa_23-2149883574.jpg?t=st=1711053209~exp=1711056809~hmac=d87d3c7da5239caeed9650801d67fe9459dccf29818218ebbda094aa6000a79a&w=826",
};

imageResult.style.cssText =
  "border-radius: 50%; width: 340px; height: 340px; display: block; margin: 25px auto 5px auto; transition: 1.2s";

let year = new Date().getFullYear();
let age;

function kidFemale() {
  result.innerHTML = `Identificamos uma menina de ${age} anos`;
  imageResult.src = imgs.kidFemale;
  result.appendChild(imageResult);
}

function teenYoungAdultFemale() {
  result.innerHTML = `Identificamos uma mulher de ${age} anos`;
  imageResult.src = imgs.teenYoungAdultFemale;
  result.appendChild(imageResult);
}

function youngFemale() {
  result.innerHTML = `Identificamos uma mulher de ${age} anos`;
  imageResult.src = imgs.youngFemale;
  result.appendChild(imageResult);
}

function elderFemale() {
  result.innerHTML = `Identificamos uma mulher de ${age} anos`;
  imageResult.src = imgs.elderFemale;
  result.appendChild(imageResult);
}

function kidMale() {
  result.innerHTML = `Identificamos um menino de ${age} anos`;
  imageResult.src = imgs.kidMale;
  result.appendChild(imageResult);
}

function teenYoungAdultMale() {
  result.innerHTML = `Identificamos uma mulher de ${age} anos`;
  imageResult.src = imgs.teenYoungAdultMale;
  result.appendChild(imageResult);
}

function youngMale() {
  result.innerHTML = `Identificamos um homem de ${age} anos`;
  imageResult.src = imgs.youngMale;
  result.appendChild(imageResult);
}

function elderMale() {
  result.innerHTML = `Identificamos um homem de ${age} anos`;
  imageResult.src = imgs.elderMale;
  result.appendChild(imageResult);
}

function resultFemale() {
  age = year - birthYear.value;
  if (age <= 10) {
    kidFemale();
  } else if (age <= 22) {
    teenYoungAdultFemale();
  } else if (age <= 50) {
    youngFemale();
  } else {
    elderFemale();
  }
}

function resultMale() {
  age = year - birthYear.value;
  if (age <= 10) {
    kidMale();
  } else if (age <= 22) {
    teenYoungAdultMale();
  } else if (age <= 50) {
    youngMale();
  } else {
    elderMale();
  }
}

console.log();

btn.addEventListener("click", () => {
  if (birthYear.value) {
    if (birthYear.value > year) {
      alert("Insira um ano válido");
    } else {
      if (male.checked) {
        document.body.style.background = 'rgb(95, 160, 190)';
        resultMale();
      } else if (female.checked) {
        document.body.style.background = 'rgb(179, 133, 197)';
        resultFemale();
      } else {
        alert("Insira um sexo");
      }
    }
  } else {
    alert("Insira seu ano de nascimento");
  }
});
