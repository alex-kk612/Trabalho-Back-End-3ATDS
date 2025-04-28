const readlineSync = require('readline-sync');

function obterValorSaque() {
  let valor = readlineSync.questionInt('Digite o valor que deseja sacar (inteiro e positivo): ');
  while (valor <= 0) {
    console.log('Valor inválido. Digite um valor inteiro e positivo.');
    valor = readlineSync.questionInt('Digite o valor que deseja sacar: ');
  }
  return valor;
}

module.exports = obterValorSaque;