function exibirResultado(distribuicao) {
    console.log('\nNotas entregues:');
    for (const nota in distribuicao) {
      if (distribuicao.hasOwnProperty(nota)) {
        const quantidade = distribuicao[nota];
        const plural = quantidade > 1 ? 's' : '';
        console.log(`${quantidade} nota${plural} de R$ ${nota}`);
      }
    }
  }
  
  module.exports = exibirResultado;