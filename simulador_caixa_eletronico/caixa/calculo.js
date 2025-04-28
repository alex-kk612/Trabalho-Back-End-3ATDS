function calcularNotas(valor) {
    const notasDisponiveis = [100, 50, 20, 10, 5, 2];
    const resultado = {};
  
    for (const nota of notasDisponiveis) {
      if (valor >= nota) {
        const quantidade = Math.floor(valor / nota);
        resultado[nota] = quantidade;
        valor -= quantidade * nota;
      }
    }
  
    // Adicionando a nota de 1 real, caso ainda reste algum valor
    if (valor > 0) {
      resultado[1] = valor;
    }
  
    return resultado;
  }
  
  module.exports = calcularNotas;