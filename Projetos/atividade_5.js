// Função principal
function main() {
    let soma = 0;
    let continuar = true;
  
    console.log("Digite os números que você deseja somar. Digite '0' para encerrar.");
  
    while (continuar) {
      const numero = parseFloat(prompt("Digite um número:"));
  
      if (!isNaN(numero)) {
        soma += numero;
      } else {
        console.log("Você digitou um valor inválido. Por favor, digite um número válido.");
      }
  
      continuar = numero !== 0;
  
      if (!continuar) {
        console.log(`A soma dos números é: ${soma}`);
      }
    }
  }
  
  // Chamar a função principal
  main();
  