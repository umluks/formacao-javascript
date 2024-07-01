function meuNome(nome) {
  return "O meu nome é: " + nome;
}

const nome = "Lucas Santiago Gonçalves dos Anjos";

meuNome(nome);

function verificarIdade(idade) {
  if (idade >= 19) {
    return "Você é maior de idade: " + idade + " anos";
  } else {
    return "Você é menor de idade: " + idade + " anos";
  }
}

let idade = 37;

verificarIdade(idade);

function imprimeFunction() {
  return meuNome(nome) + " " + verificarIdade(idade);
}

imprimeFunction();
