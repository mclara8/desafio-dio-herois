let heroisTime = [
    {nome: "Heimerdinger", xp: 3000},
    {nome: "Samira", xp: 5560},
    {nome: "Ahri", xp: 7809},
    {nome: "Thresh", xp: 1000},
    {nome: "Master Yi", xp: 11020},
]
// array armazenando herois escolhidos para o desafio

for (let i = 0; i < heroisTime.length; i++){
    let nomeHeroi = heroisTime[i].nome; // irá acessar o elemento na matriz heroisTime e extrair o valor da propriedade
    let xpHeroi = heroisTime[i].xp; // irá armazenar o nível do herói na iteração
// estrutura de loop, onde o .length determina até que ponto o loop deverá continuar  

    // estrutura condicional que armazena a quantidade de xp para cada nível
    if (xpHeroi <= 1000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível ferro com " + xpHeroi + " XP")
    } else if (xpHeroi <= 2000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível de bronze com " + xpHeroi + " XP") 
    } else if (xpHeroi <= 5000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível prata com " + xpHeroi + " XP")
    } else if (xpHeroi <= 7000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível ouro com " + xpHeroi + " XP")
    } else if (xpHeroi <= 8000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível platina com " + xpHeroi + " XP")
    } else if (xpHeroi <= 9000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível ascendente com " + xpHeroi + " XP")
    } else if (xpHeroi <= 10000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível imortal com " + " XP")
    } else if (xpHeroi >= 10001){
        console.log("O Herói de nome " + nomeHeroi + " está no nível radiante com " + xpHeroi + " XP")
    }
}
