let n1, n2
Entrada()
Soma(n1,n2)
Sub(n1,n2)
Mult(n1,n2)
Div(n1,n2)




function Entrada (){
    n1 =  parseFloat(prompt("Digite o primeiro valor "))
    n2 =  parseFloat(prompt("Digite o segundo valor "))
    return n1,n2
}

function Soma(num1, num2){
    console.log(num1+num2)
}

function Sub(num1, num2){
    console.log(num1-num2)
}

function Mult(fator1,fator2){
    console.log(fator1*fator2)
}

function Div (dividendo, divisor){
    console.log(dividendo/divisor)
}



