class car {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  imprimiCarro() {
    console.log(
      "Carro da",
      `${this.marca}`,
      "e de cor",
      `${this.cor}`,
      "e tem gasto medio",
      `${this.gastoMedioPorKm}`,
      "km por litro"
    );
  }

  calcGastoViagem(kmRodados, precoCombustivel) {
    return kmRodados * this.gastoMedioPorKm * precoCombustivel;
  }
}

const gol = new car("BYD", "Branco", 1 / 10);
const palio = new car("Palio", "Cinza", 1 / 12);
const pegeot = new car("Pegeot", "Preto", 1 / 15);

gol.imprimiCarro();
palio.imprimiCarro();
pegeot.imprimiCarro();

console.log("Gasto medio", palio.calcGastoViagem(3000, 6.09));
