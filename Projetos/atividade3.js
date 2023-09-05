let MA = 0;
let MNA = Infinity;
let TAH = 0;
let NM = 0;

for (let i = 1; i <= 15; i++) {
  const altura = parseFloat(prompt(`Informe a sua altura:`));
  const genero = prompt(`Informe o seu gênero (H ou M):`).toUpperCase();

  if (altura > MA) {
    MA = altura;
  }
  if (altura < MNA) {
    MNA = altura;
  }

  if (genero === 'H') {
    TAH += altura;
  } else if (genero === 'M') {
    NM++;
  }
}

const MAH = TAH / 15;

console.log(`Maior altura do grupo: ${MA} metros`);
console.log(`Menor altura do grupo: ${MNA} metros`);
console.log(`Média de altura dos homens: ${MAH.toFixed(2)} metros`);
console.log(`Número de mulheres: ${NM}`);