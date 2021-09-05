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
    verificarEstado(){
        if(this.estado == "Novo") {
            console.log(`>> é um livro que não precisará de manutenção.`)
        } else {
            console.log(`>> é um livro que precisará de manutenção.`)
        }
    }
}
//criando objeto
const Java = new Livro("Primeiros passos com Java", "java.org", 557, "Novo")
//método
Java.descreverLivro()
//método para verificação
Java.verificarEstado()

