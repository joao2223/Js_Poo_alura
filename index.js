import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User("Mariana", "m@m.com", "20/20/20")

console.log(novoUser.nome)
novoUser.nome = ""
console.log(novoUser.nome)
