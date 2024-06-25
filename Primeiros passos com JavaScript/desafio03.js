let nota1 = 10;
let nota2 = 9;
let nota3 = 1;

const mediaAluno = (nota1 + nota2 + nota3) / 3;

if (mediaAluno >= 7) {
  console.log("Aluno aprovado, media:", mediaAluno);
} else if (mediaAluno >= 5 && mediaAluno < 7) {
  console.log("Aluno recuperacao, media:", mediaAluno);
} else {
  console.log("Aluno reprovado, media:", mediaAluno);
}
