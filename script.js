var respostasCertas = ["c", "b", "a", "d", "c", "b", "a", "d", "b", "c"];

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

function verResultado() {
  var acertos = 0;

  for (var i = 0; i < respostasCertas.length; i++) {
    var numero = i + 1;
    var caixa = document.getElementById("pergunta" + numero);

    var marcada = document.querySelector('input[name="p' + numero + '"]:checked');

    caixa.classList.remove("acertou");
    caixa.classList.remove("errou");
    var antiga = caixa.querySelector(".resposta-certa");
    if (antiga) {
      antiga.remove();
    }
    if (marcada && marcada.value === respostasCertas[i]) {
      acertos = acertos + 1;
      caixa.classList.add("acertou");
    } else {
      caixa.classList.add("errou");

      var aviso = document.createElement("p");
      aviso.className = "resposta-certa";
      aviso.textContent = "Resposta certa: " + explicacoes[i];
      caixa.appendChild(aviso);
    }
  }

  mostrarMensagem(acertos);
}

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

  resultado.classList.remove("escondido");
  resultado.scrollIntoView({ behavior: "smooth" });
}

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
