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

function idadePessoa(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho que ${p2.nome}`);
  } else {
    console.log(`${p2.nome} é mais velho que ${p2.nome}`);
  }
}

const lucas = new Pessoa("Lucas", 37);
const maria = new Pessoa("Maria", 33);

idadePessoa(lucas, maria);
