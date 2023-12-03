
//Passar o rato e mostrar mensagem
const elemento = document.querySelector("#rato");

elemento.addEventListener("mouseover", function() {
  const mensagem = document.createElement("div");
  mensagem.innerHTML = "Mensagem que aparece quando o mouse passa por cima";
  mensagem.style.position = "absolute";
  mensagem.style.top = "100%";
  mensagem.style.left = "50%";
  mensagem.style.transform = "translateX(-50%)";
  mensagem.style.backgroundColor = "#333";
  mensagem.style.color = "#fff";
  mensagem.style.padding = "5px 10px";
  mensagem.style.borderRadius = "5px";
  mensagem.style.fontSize = "14px";
  elemento.appendChild(mensagem);
});

elemento.addEventListener("mouseout", function() {
  const mensagem = document.querySelector("#mensagem");
  elemento.removeChild(mensagem);
});
