const calcular = document.getElementById('calcular');
       
function imc () {
 const nome = document.getElementById('nome').value;
 const altura = document.getElementById('altura').value;
 const peso = document.getElementById('peso').value;
 const resultado = document.getElementById('resultado');

 if (nome  !== "" && altura !== "" && peso !== "") {

     const valorIMC = (peso / (altura * altura) ).toFixed(1) 

     let classificacao = "";

     if(valorIMC < 19.5){
        classificacao = "Abaixo do peso";
     }else if(valorIMC < 25 ){
        classificacao = "Peso ideal. Parabéns!";
     }else if(valorIMC < 30 ){
        classificacao = "Levemente acima do peso.";
     }else if(valorIMC < 35 ) {
        classificacao = "Obesidade grau 1.";
     }else if(valorIMC < 40 ){
    classificacao = "obesidade grau 2."
     }else{
        classificacao = "Obesidade Mórbida. Cuidado!" 
     }

     resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

 }else{
    resultado.textContent = "Preencha todos os campos!!!";
 }

}
 calcular.addEventListener("click", imc)
 
