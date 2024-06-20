// 1 = Debito - 10%
// 2 = Dinheiro ou PIX - 15%
// 3 = Duas vezes normal
// 4 = Acima + 10%

let varProduto = 100;
const tpPagamento = 4;

let valorProdutoFinal = 0; // Inicializando a variável valorProdutoFinal

if (tpPagamento === 1) {
  valorProdutoFinal = varProduto - (varProduto * 10) / 100;
  console.log("O valor do produto, pagando no Débito é R$", valorProdutoFinal);
} else if (tpPagamento === 2) {
  valorProdutoFinal = varProduto - (varProduto * 15) / 100;
  console.log(
    "O valor do produto, pagando no Dinheiro ou Pix é R$",
    valorProdutoFinal
  );
} else if (tpPagamento === 3) {
  valorProdutoFinal = varProduto / 2;
  console.log("O valor do produto, pagando em 2x de R$", valorProdutoFinal);
} else if (tpPagamento > 3) {
  valorProdutoFinal = varProduto * (1 + tpPagamento / 100); // Ajustando o cálculo para mais de 2x
  console.log(
    "Pagando em mais de 2x, o valor final do produdo fica R$",
    valorProdutoFinal
  );
} else {
  console.log("Tipo de pagamento inválido.");
}
