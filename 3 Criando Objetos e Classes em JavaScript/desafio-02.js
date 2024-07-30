class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcImc(peso, altura) {
    return this.peso / Math.pow(this.altura, 2); // A função Math.pow é usada para calcular a potência de um número em JavaScript.
  }

  classificaImc() {
    const imc = this.calcImc();
    if (this.calcImc() >= 40) {
      return "Obesidade Grave, IMC = " + this.calcImc();
    } else if (this.calcImc() >= 30 && this.calcImc() < 40) {
      return "Obeso, IMC = " + this.calcImc();
    } else if (this.calcImc() >= 25 && this.calcImc() < 30) {
      return "Acima do Peso, IMC = " + this.calcImc();
    } else if (this.calcImc() >= 18.5 && this.calcImc() < 25) {
      return "Peso Normal, IMC = " + this.calcImc();
    } else {
      return "Abaixo do Peso, IMC = " + this.calcImc();
    }
  }

  impPessoa() {
    console.log(`Nome: ${this.nome}; IMC: ${this.classificaImc()}`);
  }
}

const pessoa1 = new Pessoa("José", 60, 1.9).impPessoa();
const pessoa2 = new Pessoa("Lucas", 100, 1.87).impPessoa();
const pessoa3 = new Pessoa("Joao", 120, 1.67).impPessoa();
