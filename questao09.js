//criando classe
class SomadorDeNotas{
    constructor(){
        this.total = 0; //novo atributo para armazenar a soma das notas
    }

    adicionarNota(nota){ //novo método, recebe a nota e soma ela ao atributo total
        this.total += nota;
    }

    verTotal (){
        console.log('Total das notas:',this.total); //método para ver o total de notas
    }
}

//objeto somador
let somador = new SomadorDeNotas();

//adicionando notas
somador.adicionarNota(8);
somador.adicionarNota(10);
somador.adicionarNota(7.5);
somador.adicionarNota(8);

//chamando o método para ver o total de notas
somador.verTotal();
