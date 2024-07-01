// Conceito basico sobre funcoes

function calImc(varPeso, varAltura) {
  return varPeso / Math.pow(varAltura, 2); // A função Math.pow é usada para calcular a potência de um número em JavaScript.
}

function classificaImc(varIMC) {
  if (varIMC >= 40) {
    return "Obesidade Grave, IMC = " + varIMC;
  } else if (varIMC >= 30 && varIMC < 40) {
    return "Obeso, IMC = " + varIMC;
  } else if (varIMC >= 25 && varIMC < 30) {
    return "Acima do Peso, IMC = " + varIMC;
  } else if (varIMC >= 18.5 && varIMC < 25) {
    return "Peso Normal, IMC = " + varIMC;
  } else {
    return "Abaixo do Peso, IMC = " + varIMC;
  }
}

function main() {
  const varPeso = 105;
  const varAltura = 1.87;
  const varIMC = calImc(varPeso, varAltura);

  console.log(classificaImc(varIMC));
}

main();
