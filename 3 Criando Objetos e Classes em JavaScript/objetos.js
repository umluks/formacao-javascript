// Conhecendo objetos
// Objetos é igual uma coleção dinamica de chave e valores
// Funcao dentro de um objeto = METODO

const pessoa = {
  nome: "Lucas Santiago",
  idade: 37,
  sexo: "M",

  descraver: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  },
};

pessoa.nome = "Lucas dos Anjos"; //acess direto ao objeto
pessoa["nome"] = "Lucas"; //acesso dinamico ao objeto

const atributo = "nome";

console.log(pessoa[atributo]);

pessoa.descraver();
