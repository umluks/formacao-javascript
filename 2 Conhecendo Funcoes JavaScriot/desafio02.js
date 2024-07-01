// 1 = Debito - 10%
// 2 = Dinheiro ou PIX - 15%
// 3 = Duas vezes normal
// 4 = Acima + 10%

let varProduto = 100;
const tpPagamento = 4;

function aplicarDesconto(varProduto, tpPagamento) {
  if (tpPagamento === 1) {
    return varProduto - (varProduto * 10) / 100; // Desconto de 10% para Débito
  } else if (tpPagamento === 2) {
    return varProduto - (varProduto * 15) / 100; // Desconto de 15% para Dinheiro ou PIX
  } else if (tpPagamento === 3) {
    return varProduto / 2; // Pagamento em duas vezes, sem juros
  } else if (tpPagamento === 4) {
    return varProduto + (varProduto * 10) / 100; // Acima de 2 vezes, acrescido de 10%
  } else {
    return "Tipo de pagamento inválido.";
  }
}

aplicarDesconto();

let valorProdutoFinal = aplicarDesconto(varProduto, tpPagamento);

if (tpPagamento === 1) {
  console.log("O valor do produto, pagando no Débito é R$", valorProdutoFinal);
} else if (tpPagamento === 2) {
  console.log(
    "O valor do produto, pagando no Dinheiro ou Pix é R$",
    valorProdutoFinal
  );
} else if (tpPagamento === 3) {
  console.log("O valor do produto, pagando em 2x de R$", valorProdutoFinal);
} else if (tpPagamento > 3) {
  console.log(
    "Pagando em mais de 2x, o valor final do produto fica R$",
    valorProdutoFinal
  );
} else {
  console.log("Tipo de pagamento inválido.");
}
