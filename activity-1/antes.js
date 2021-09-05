class Livro {
    constructor(nome, editora, paginas, estado){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
        this.estado = estado
    }
    descreverLivro(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas.`)
    }
}

//buscar estado do livro
const getEstado = "Novo";

//verificar estado 
if(getEstado == "Novo") {
    var estado = getEstado
} else {
    // chamar function externa para manutenção do livro
    console.log('>>livro vai para manutenção')
}
   
//criando objeto
const Java = new Livro("Primeiros passos com Java", "java.org", 557, estado);
//método
Java.descreverLivro()

