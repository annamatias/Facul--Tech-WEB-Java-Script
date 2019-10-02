alert("Aula de JavaScript");

//var soma = 0; ///Variaveis que iram armazenar um calculo, tem que inicializar com 0, para que não dê erro, 
///ou demora para executar e zerar a variavel e também para não trazer outras coisas para dentro da variavel
//var nome = "Anna";
//var num = 12;
//var numDecimal = 1.0;
//var caracter = 'a'; ///tipo de caracter, feito com uma aspas simples///

//var soma = 2+3;
//var bolean = true; ///java não reconhece, ao não ser letras minusculas///
//var express = (2+3)>5 & (true) ///(operador lógico) &&(e), ! (não), !=(diferente)///
///variaveis constantes é com letra maiuscula///

///var soma = 0;
///var nome = "";
///var sobrenome = "";
///var nome_completo = "";

//nome = "Anna"
//sobrenome = "Santos"
//nome_completo = "Anna Santos";

/// OBJETOS - FUNÇÕES

//function soma(){alert(3+5);}
//soma();
//função só funciona se for chamada ***deve ser criada antes a função, para depois chamar, se não, não funciona***

//function subtrair(num1, num2) { alert (num1 - num2);}
//subtrair(10.5);

/*Criar uma função que mostre um alert com a tabuada do número 2 quando o botão do formulario for clicado*/

function tabuada(){
    var tab = 0;
    for(tab; tab<=10; tab++){
        
        //alert("2 X " + tab + " = " 2 * tab);}
        write("2 x "+tab "=" +2*tab+"<br/>");

}