//classe de abstração
function Pessoa(idade, nacionalidade){
    this.nacionalidade = nacionalidade;
    this.idade = idade;
}
//classe com herança
function Funcionario(nome, cargo, salario, nacionalidade, idade){
    this.nome = nome;
    this.cargo = cargo;
    let _salario = salario;
    this.getSalario = function(){
        return _salario;
    }
    Pessoa.call(this, idade, nacionalidade);
}
// instancia
const funcionario1 = new Funcionario('Julia', 'dev front-end', 4800, 'Brasileira', 23);
const funcionario2 = new Funcionario('Max', 'dev back-end', 8000, 'Canadense', 33);
const funcionario3 = new Funcionario('Micael', 'dev full-stack', 5000, 'Brasileiro', 19);
console.log(funcionario1);
console.log(funcionario2);
console.log(funcionario3);