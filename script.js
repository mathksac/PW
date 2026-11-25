// ==========================================
// QUIZ - ROMA ANTIGA
// ==========================================

// Respostas certas de cada pergunta (na ordem: pergunta 1, 2, 3...)
var respostasCertas = ["c", "b", "a", "d", "c", "b", "a", "d", "b", "c"];

// Texto da resposta certa, para mostrar quando a pessoa errar
var explicacoes = [
  "O rei Amúlio, que tinha medo de perder o trono.",
  "Os etruscos, que viviam ao norte da Itália.",
  "Os questores.",
  "Vetar leis contrárias aos plebeus.",
  "Cipião, o Africano.",
  "Ela terminou com a morte de Marco Aurélio.",
  "O Édito de Tessalônica.",
  "Minerva.",
  "Trabalhadores presos à terra, origem dos servos da Idade Média.",
  "Odoacro, chefe germânico que derrubou Rômulo Augusto."
];

// Função que corrige o quiz
function verResultado() {
  var acertos = 0;

  // Passa por cada pergunta, uma de cada vez
  for (var i = 0; i < respostasCertas.length; i++) {
    var numero = i + 1;
    var caixa = document.getElementById("pergunta" + numero);

    // Pega a opção que a pessoa marcou (se marcou alguma)
    var marcada = document.querySelector('input[name="p' + numero + '"]:checked');

    // Apaga a correção antiga (caso clique duas vezes)
    caixa.classList.remove("acertou");
    caixa.classList.remove("errou");
    var antiga = caixa.querySelector(".resposta-certa");
    if (antiga) {
      antiga.remove();
    }

    // Confere se acertou
    if (marcada && marcada.value === respostasCertas[i]) {
      acertos = acertos + 1;
      caixa.classList.add("acertou");
    } else {
      caixa.classList.add("errou");

      // Mostra qual era a resposta certa
      var aviso = document.createElement("p");
      aviso.className = "resposta-certa";
      aviso.textContent = "Resposta certa: " + explicacoes[i];
      caixa.appendChild(aviso);
    }
  }

  mostrarMensagem(acertos);
}

// Mostra a nota e uma mensagem de acordo com os acertos
function mostrarMensagem(acertos) {
  var total = respostasCertas.length;
  var mensagem = "";

  if (acertos === total) {
    mensagem = "Ave! Você é digno de um imperador romano! 👑";
  } else if (acertos >= 7) {
    mensagem = "Muito bem! Você seria um ótimo senador. 🏛️";
  } else if (acertos >= 4) {
    mensagem = "Nada mal, legionário! Revise o conteúdo e tente de novo. ⚔️";
  } else {
    mensagem = "Os bárbaros venceram desta vez... Leia o site de novo! 📜";
  }

  var resultado = document.getElementById("resultado");
  resultado.innerHTML =
    "<h3>" + acertos + " de " + total + "</h3>" +
    "<p>" + mensagem + "</p>";

  // Mostra a caixa de resultado e rola a tela até ela
  resultado.classList.remove("escondido");
  resultado.scrollIntoView({ behavior: "smooth" });
}

// Limpa tudo para responder de novo
function recomecar() {
  document.getElementById("formulario-quiz").reset();

  for (var i = 1; i <= respostasCertas.length; i++) {
    var caixa = document.getElementById("pergunta" + i);
    caixa.classList.remove("acertou");
    caixa.classList.remove("errou");

    var aviso = caixa.querySelector(".resposta-certa");
    if (aviso) {
      aviso.remove();
    }
  }

  document.getElementById("resultado").classList.add("escondido");
  document.getElementById("pergunta1").scrollIntoView({ behavior: "smooth" });
}
