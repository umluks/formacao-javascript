let valorGasolina = 5.64;
let valorAlcool = 3.81;

let consumoMedio = 10;
let kmViagem = 100;

const tpCombustivel = "Gasolina";

if (tpCombustivel === "Alcool") {
  const valorTotalAlcool = (kmViagem / consumoMedio) * valorAlcool;

  console.log("Alcool R$", valorTotalAlcool.toFixed(2));
} else {
  const valorTotalGasolina = (kmViagem / consumoMedio) * valorGasolina;

  console.log("Gasolina R$", valorTotalGasolina.toFixed(2));
}

console.log("Alcool", valorAlcool);
console.log("Gasolina", valorGasolina);
