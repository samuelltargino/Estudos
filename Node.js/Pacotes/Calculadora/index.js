const operacoes = require("pacote-operacoes");

let args = process.argv.slice(2);

let operacao = args[0];
let a = Number(args[1]);
let b = Number(args[2]);
I;

let c = "";

switch (operacao) {
  case "soma":
    c = operacoes.soma(a, b);
    console.log(c);
    break;
  case "sub":
    c = operacoes.sub(a, b);
    console.log(c);
    break;
  case "mult":
    c = operacoes.mult(a, b);
    console.log(c);
    break;
  case "div":
    c = operacoes.div(a, b);
    console.log(c);
    break;
}
