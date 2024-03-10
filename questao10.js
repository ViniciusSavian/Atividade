class Funcionario{
    //classe funcionario
    constructor(nome, idade, salarioBase){
        this.nome = nome;
        this.idade = idade;
        this.salarioBase = salarioBase; //salario base funcionario
    }

    //calculo de Salario do funcionário é o salário base dele
    calcularSalario(){
        console.log('Salario é: ', this.salarioBase);
    }
}
//classe professor herda da classe funcionário seus atributos
class Professor extends Funcionario{
    constructor(nome, idade, salarioBase, disciplina, horasAula){
        super(nome, idade,  salarioBase); //herda nome, idade e salario base
        this.disciplina = disciplina; //disciplina do professor
        this.horasAula = horasAula; //horas aula que ele deu no mês para calcular salário
    }

    //define o método de calcular sálario professores
    calcularSalario(){
        let valorHoraAula = 150; //valor hora de cada aula
        this.salarioTotal = this.salarioBase + this.horasAula*valorHoraAula; //calcula o salario total, somando o salario base com o valor da hora aula vezes a quantidade de horas
        console.log('Salário total do professor',this.nome, 'é de', this.salarioTotal); //retorna no console o valor que o professor recebe
    }
}

//definindo objetos = professores
let professor1 = new Professor ('Cristiano', 20, 3000, 'Programação', 40);
let professor2 = new Professor ('Claudio', 22, 3500, 'Programação', 50);

//chamando métodos
professor1.calcularSalario();
professor2.calcularSalario();