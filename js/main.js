// comandos básicos, após a parte de funções, inicia os comandos trabalhando junto ao HTML

var nome = "Anderson";
var idade = 19;
var n1 = 10;
var n2 = 5;
var string1 = "23";
var string2 = "20";
var frase = "Paraná é o melhor time do mundo";

// alert (nome + " tem " + idade + " anos "); /*alert faz um pop-up*/
// alert (n1 + n2);
// alert (n1 * n2);
// alert (string1 + string2);

// console.log (nome); /* serve para ver a execução no navegador */
// console.log (idade);
// console.log (frase.replace("Paraná", "Coritiba")); // trocar termos da string 
// console.log (frase.toUpperCase()); // deixa tudo maiusculo 
// console.log (frase.toLowerCase()); // deixa tudo minusculo 


//Arrays

var lista = ["maça", "pêra", "laranja"];
// lista.push("uva"); //acrescenta uva
// lista.pop(); // remove o ultimo elemento
// console.log(lista);
// console.log(lista.length); //numero de elementos na lista
// console.log(lista.reverse()); //inverte o array
// console.log(lista.toString()); // transforma em string
// console.log(lista.join(" - ")) // troca a virgula dos itens da string

/* diferença entre imprimir o array e a string */
// console.log(lista[0]);
// console.log(lista.toString()[0]);


// dicionário

var fruta = {nome:"maça", cor:"vermelha"}
// console.log(fruta);
// console.log(fruta.nome);

var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
// console.log(frutas);
// console.log(frutas[1].nome); //maça seria elemento 0


// laço condicional

/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/

// laço de repetição

/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
}

var n;
for(n=0; n <= 3; n++){
    console.log(n);
}
*/

// Datas
/*
var d = new Date();
alert(d);
alert(d.getMonth());
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/


// funções

/*
function soma(n1, n2){
    return n1+n2;
}
alert(soma(5, 10));

function validarIdade(idade){
    if(idade >= 18){
        return true;
    }else{
        return false;
    }
}
var idade = prompt("Qual sua idade?");
console.log(validarIdade(idade));
*/


// TRABALHANDO JUNTO AO index.html

function load(){
    alert("página carregada");
}

function clicou(){
    // alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>obrigado por clicar</b>"; //innerHTML serve para injetar um texto HTML. <b> é para negrito
}

function redirecionar(){
   // window.location.href = "https://google.com.br/"; // redireciona
   window.open("https://google.com.br/"); // abe outra aba
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function trocar2(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse 2";
}

function voltar2(elemento){
    elemento.innerHTML = "Passe o mouse aqui 2";
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
