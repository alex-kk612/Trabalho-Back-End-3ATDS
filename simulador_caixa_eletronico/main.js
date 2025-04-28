const obterValorSaque = require('./caixa/entrada');
const calcularNotas = require('./caixa/calculo');
const exibirResultado = require('./caixa/exibicao');

function main() {
  const valorSaque = obterValorSaque();
  const distribuicaoNotas = calcularNotas(valorSaque);
  exibirResultado(distribuicaoNotas);
}

main();