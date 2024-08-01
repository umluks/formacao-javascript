let numeros = [];

for (let i = 0; i <= 100; i++) {
  numeros.push(i);
  if ((numberPar = i % 2 === 0)) {
    console.log("Numero par =", i);
  }
}
