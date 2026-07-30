// Soma + 10 + 5 = 15
// Subtração - 10 - 3 = 7
// Multiplicação * 4 * 5 = 20 
// Divisão / 10 / 5 = 2
// Resto (Modulo) % 10 % 3 = 1
// Potência ** 2 ** 3 = 8

// > maior que 
// < menor que 
// >= maior ou igual
// <= menor ou igual
// != diferente
// ==  igual (valor)
// === extritamente igual ()
// !== extritamente diferente



console.log(10 == "10") // true
console.log("-----------")
console.log(10 === "10") // false

let botao = null;

console.log(typeof botao); // verifica o tipo da variavel

console.log(18 >= 18);


let perfil = "Administrador";

if (perfil === "Administrador"){
    console.log("Oba, é administrador");
}else{
    console.log("Vish, é usuário comum");
}

// && AND 
// Condição A|Condição B|A && B
// true      |  true    | true
// true      |  false   | false 
// true      |  true    | false 
// false     | false    | false 

// || OR
// Condição A |Condição B|A || B
// true       |  true    |  true 
// true       |  false   |  true 
// false      |  true    |  true
// false      |  false   |  false  

// NOT  - inversão de valor 
let ativo = true;
console.log(!ativo);
console.log(!false)
// muito usado para alterar estados: v