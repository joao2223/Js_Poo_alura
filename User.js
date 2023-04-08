export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || "estudante"
        this.#ativo = true
    }

    get nome(){
        return `${this.#nome}`
    }

    get email(){
        return `${this.#email}`
    }

    set nome(novoNome){
        if(novoNome === ""){
            throw Error ("Formato não válido")
        }
        this.#nome = novoNome
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}`
    }
}

