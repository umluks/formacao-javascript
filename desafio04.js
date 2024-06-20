const varPeso = 100;
const varAltura = 1.87;

const varIMC = varPeso / Math.pow(varAltura, 2); //função Math.pow é usada para calcular a potência de um número em JavaScript.

console.log(varIMC);

if (varIMC >= 40) {
  console.log("Obesidade Grave, IMC =", varIMC);
} else if (varIMC >= 30 && varIMC <= 40) {
  console.log("Obeso, IMC =", varIMC);
} else if (varIMC >= 25 && varIMC <= 29) {
  console.log("Acima do Peso, IMC =", varIMC);
} else if (varIMC >= 18.5 && varIMC <= 24) {
  console.log("Peso Normal, IMC =", varIMC);
} else {
  console.log("Abaixo do Peso, IMC =", varIMC);
}
