// Função para calcular a média aritmética de um array de notas
function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
    return soma / notas.length;
  }
  
  // Função para verificar a situação do aluno
  function verificarSituacao(media) {
    if (media <= 4) {
      return "Reprovado";
    } else if (media > 4 && media < 7) {
      return "Recuperação";
    } else {
      return "Aprovado";
    }
  }
  
  // Função principal
  function main() {
    const notas = [];
  
    // Solicitar três notas ao usuário
    for (let i = 1; i <= 3; i++) {
      const nota = parseFloat(prompt(`Digite a nota ${i}:`));
      notas.push(nota);
    }
  
    // Calcular a média das notas
    const media = calcularMedia(notas);
  
    // Verificar a situação do aluno
    const situacao = verificarSituacao(media);
  
    // Exibir a situação do aluno
    if (situacao === "Recuperação") {
      const notaRecuperacao = parseFloat(prompt("Digite a nota da recuperação:"));
      const mediaFinal = (media + notaRecuperacao) / 2;
  
      if (mediaFinal >= 5) {
        console.log(`Aprovado na recuperação com média final ${mediaFinal}`);
      } else {
        console.log(`Reprovado na recuperação com média final ${mediaFinal}`);
      }
    } else {
      console.log(`Situação do aluno: ${situacao}`);
    }
  }
  
  // Chamar a função principal
  main();
  