/* Quando você começa a usar o JavaScript, o foco inicial,
geralmente, é trabalhar com números, matemática, manipulação
de texto, datas e armazenamento de informações.

Às vezes, o JavaScript faz suposições sobre o tipo de dados
que você insere. Atribuição, matemática ou igualdade lógica
podem gerar resultados inesperados.

O JavaScript tenta ser amigável e ele tenta fazer com que o
código funcione e forneça uma solução, mesmo que o resultado
venha a ser um erro.

Para combater essas deficiências, você pode ativar o modo
estrito, que reduz erros silenciosos, melhora o desempenho,
fornece mais avisos e menos recursos não seguros.
*/

'use strict'


const switcher = document.querySelector(`.btn`);

switcher.addEventListener(`click`, function(){
    document.body.classList.toggle(`dark-theme`)

    var className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Dark";
    }else{
        this.textContent = "Light";
    }

console.log(`nome da classe atual: ` + className);


});