var salario=(2000.50);

var aumento =(0.15);

var inflacao =(0.07);

var novoSalario =salario + (salario * aumento);

var novoSalarioInflacao = novoSalario - (novoSalario * inflacao);

//parseFloat(novoSalario);
//parseFloat(novoSalarioinflacao);

console.log('novo salario = ' + novoSalario );
console.log('novo salario com inflacao = ' + novoSalarioInflacao + "\n");

var strnovoSalario = `O novo salário é : \n R$\t ${novoSalario} `;
var strnovoSalarioInflacao = `O novo salário aplicado inflação é : \n R$\t ${novoSalarioInflacao} ` + "\n";

console.log( strnovoSalario );
console.log( strnovoSalarioInflacao );
