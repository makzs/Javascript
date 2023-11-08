function atividade_1(btn){
    if(btn == 1){
        alert(`Voce pressionou o botão 1!`)
    }
    else if(btn == 2){
        alert(`Voce pressionou o botão 2!`)
    }
    else{
        alert(`Voce pressionou o botão 3!`)
    }
}

function atividade_2(){
    let nome = prompt("Informe o seu nome: ");
    let idade = prompt("Informe sua idade: ");

    alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade`);
}

function atividade_3(){
    let num = Number (prompt("Informe um numero: "));

    alert(`O numero informado pelo usuário foi ${num}. Antes do número ${num}, temos o número ${num-1}. Após o número ${num}, temos o número ${num+1}`)
}

function atividade_4(){
    let nome = prompt("Informe o nome do produto: ");
    let preco = Number(prompt("Informe o preço do produto: "));
    let valor_entregue = Number(prompt("Informe o valor entregue ao vendedor: "));

    alert(`Você comprou um produto (${nome}) por R$ ${preco.toFixed(2)} e entregou ao vendedor R$ ${valor_entregue.toFixed(2)} em dinheiro. Você vai receber R$ ${(valor_entregue-preco).toFixed(2)} de troco. Volte sempre!`)
}

function atividade_5(){
    let nome = prompt("Informe o nome do produto: ");
    let preco = Number(prompt("Informe o preço do produto: "));

    document.getElementById("mensagem").innerHTML = (`Voce comprou um produto (${nome}) por R$ ${preco.toFixed(2)} e acaba de ganhar um desconto de 10%. Assim você vai pagar apenas R$ ${((preco - (preco * 10) / 100)).toFixed(2)} pelo seu produto. Volte Sempre!`)
}

/*Variavel global*/
let contador = 0;

function atividade_6(num){

    if(num == 1){
        contador++;
        document.getElementById("mensagem").innerText = (`O contador esta com ${contador} cliques`);
    }
    else if(num == 2){
        contador = 0;
        document.getElementById("mensagem").innerText = (`O contador esta com 0 cliques`);
    }
}

function atividade_7(){
    let num = Number(prompt("Informe um numero: "));

    if(num <= 90 && num >= 20){
        document.getElementById("mensagem").innerHTML = (`O numero ${num} esta entre 20 e 90!`);
    }
    else{
        document.getElementById("mensagem").innerHTML = (`O numero ${num} nao esta entre 20 e 90!`);
    }
}

function atividade_8(){
    let num = Number(prompt("Informe um numero que deseja saber a tabuada: "));
    let i;
    let tabuada = '';

    for(i=1;i<=10;i++){
        tabuada += `${num} x ${i} = ${num * i}<br>`

    }

    document.getElementById("resultado").innerHTML = (`${tabuada}`);
}