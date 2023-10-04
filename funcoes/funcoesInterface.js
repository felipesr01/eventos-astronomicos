import { inverteData, retornaHemisferio, retornaIntensidade } from "./funcoesLogicas.js";

function imprimeDados(chuva) {
    let nome = chuva.nome.padEnd(27,' ');
    let hemisferio = retornaHemisferio(chuva.declinacao)
    let intensidade = retornaIntensidade(chuva.intensidade)

    intensidade = intensidade.padEnd(11, ' ')
    hemisferio = hemisferio.padEnd(10, ' ')

    let dataInicio = inverteData(chuva.inicio);
    let dataFim = inverteData(chuva.fim);

    console.log(`${nome} - ${intensidade} - ${hemisferio} - ${dataInicio} à ${dataFim}`)
}

function imprimeLista(lista) {
    console.log(('\nNOME DA CHUVA               - INTENSIDADE - HEMISFÉRIO - PERÍODO'))

    lista.forEach(imprimeDados)
}

export default imprimeLista;