document.getElementById("meuFormulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário

  const campoA = parseFloat(document.getElementById("campoA").value);
  const campoB = parseFloat(document.getElementById("campoB").value);
  const mensagem = document.getElementById("mensagem");

  if (campoB > campoA) {
    mensagem.textContent = "Formulário válido! Campo B é maior que Campo A.";
    mensagem.className = "mensagem valido";
  } else {
    mensagem.textContent = "Formulário inválido. Campo B deve ser maior que Campo A.";
    mensagem.className = "mensagem invalido";
  }
});