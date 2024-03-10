class Animal{//define a classe animal
    constructor(nome, idade){//constroi os atributos
        //define os dois atributos
        this.nome = nome; 
        this.idade = idade;
    }

    //cria o metodo descrever  
    descrever(){
        console.log(`Este animal é um ${this.nome} e tem ${this.idade} anos de idade`);
    }
}

class Gato extends Animal{
    constructor(nome, idade, cor){
        //herdando nome e idade da classe Animal
        super(nome,idade);
        //adicionando atributo extra
        this.cor = cor;
    }

    //adicionando novo método, chamado miar
    miar(){
        console.log('Miauuuu!');
    }
}

//criando objetos
let cachorro = new Animal ('Cachorro', 5);
let gato = new Gato ('Gato',7);

//chamando métodos
cachorro.descrever();
gato.descrever();
gato.miar();