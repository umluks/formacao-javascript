// Conhecendo classes
// CLasse = Definicao

class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2024 - idade;
  }

  descraver() {
    console.log(
      `Meu nome é ${this.nome} e minha idade é ${this.idade}. Voce nasceu no ano de ${this.anoDeNascimento}`
    );
  }
}

const lucas = new Pessoa("Lucas", 37);
const maria = new Pessoa("Maria", 33);

lucas.descraver();
maria.descraver();
