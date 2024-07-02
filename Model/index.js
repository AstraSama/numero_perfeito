const PERFEITO = (data) => {
    let soma = 0;

    for(let i = 1; i < data; i++) {
        if(data % i == 0) {
            soma += i;

        }
    }
    
    if(soma == data) {
        return console.log("Seu número é perfeito.");

    } else {
        return console.log("Seu número não é perfeito.");

    }
}

module.exports = PERFEITO;