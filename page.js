// Crie um variável que guardará a resposta
var resultado
function send(){
    // Digite o 'id' da caixa de texto, onde você pegará o número
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    //Digite o nome da variável que guardará a resposta
   resultado= parseInt(number1)*parseInt(number2);
    document.getElementById("resultado").innerHTML = "O resultado é " + resultado;
}
  