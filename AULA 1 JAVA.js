/* TESTANDO */
const input = require ('prompt-sync') ();

    // Obtém os valores de peso e altura inseridos pelo usuário
    var peso = parseFloat(input('peso: '));
    var altura = parseFloat(input('altura: '));
  
    // Calcula o IMC
    var imc = peso / (altura * altura);
  
    // Define a classificação de acordo com o IMC
    if (imc < 18.5) {
      console.log(imc = "cracudo");
    } else if (imc >= 18.5 && imc < 24.9) {
      console.log(imc = "Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
      console.log(imc = "Acima do peso");
    } else if (imc >= 30 && imc < 34.9) {
      console.log(imc = "Obesidade grau 1");
    } else if (imc >= 35 && imc < 39.9) {
      console.log(imc = "Obesidade grau 2");
    } else if (imc >= 40) {
      console.log(imc = "karaio jão");
    }
    

  
    // Exibe o resultado na página
