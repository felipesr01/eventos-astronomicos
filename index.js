import dados from "./data/chuvas-de-meteoros.js";
import {verificaChuvaHoje, verificaChuva2Meses} from './funcoes/funcoesLogicas.js'
let data = new Date()

const chuvasHoje = dados.filter(
    (chuva) => verificaChuvaHoje(chuva, data)
);

const chuvasProx2Meses = dados.filter(
    (chuva) => verificaChuva2Meses(chuva, data)
)

console.log("\nChuvas de Meteoro\n\n")
if(chuvasHoje.length > 0) {
    console.log("CHUVAS QUE PODERAO SER VISTAS HOJE")
    console.log(chuvasHoje)
} else {
    console.log("Nenhuma chuva podera ser vista hoje")
}

console.log("CHUVAS QUE PODERAO SER VISTAS NOS PROXIMOS 2 MESES")
console.log(chuvasProx2Meses)