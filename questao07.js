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

let cachorro = new Animal("cachorro", 10); //objeto cachorro da classe animal
cachorro.descrever(); //chama método definido

let gato = new Animal ("gato",7);//objeto gato da classe animal
gato.descrever();//chama método definido