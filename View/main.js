const prompt = require("prompt-sync")();
const PERFEITO = require("../Model/index.js");

let saida = 0;

let numero = +prompt("Digite um número: ");

do{
    if(isNaN(numero)) {
        numero = +prompt("Digite um NÚMERO: ");
    } else {
        PERFEITO(numero);
        saida = 1;
    }
} while(!saida);