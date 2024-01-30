function startGame() {
  console.log("Iniciou o jogo");

  document.getElementById("start-screen").hidden = true;
  document.getElementById("success-screen").hidden = false;

  runGameLogic()
}

function runGameLogic(){

  if (false) {
    let numeroMaximo = 100;
    let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
    console.log(numeroSecreto);
    let chute;
    let tentativas = 1;

    //enquanto o chute for diferente do numero secre
    while (chute != numeroSecreto) {
      chute = prompt(`Chute um número entre 1 e ${numeroMaximo}:`);
      // se o chute for igual ao numero secreto:
      if (numeroSecreto == chute) {
        break;
      } else {
        if (chute > numeroSecreto) {
          alert(`O número secreto é menor que ${chute}`);
        } else {
          alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = (tentativas + 1)
        tentativas++;
      } // senao
    }
    //essa palhaçada toda aqui significa oq ta comentado em baixo
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    alert(
      `arrazou amg, o numero era ${numeroSecreto} e você acertou com ${tentativas} ${palavraTentativa}.`
    );
    // if (tentativas > 1) {
    //     alert (`arrazou amg, o numero era ${numeroSecreto} e você acertou de primera`);
    //     }
    // else (
    //     alert (`arrazou amg, o numero era ${numeroSecreto} e você acertou com ${tentativas}`));
  }
}
