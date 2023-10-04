import dados from '../data/chuvas-de-meteoros.js'

function verificaChuvaHoje(chuva, dataAtual) {
    const anoAtual = dataAtual.getFullYear();

    const dataInicio = new Date(chuva.inicio+'/'+anoAtual);
    const dataFim = new Date(chuva.fim+'/'+anoAtual);
    
    if(dataInicio.getMonth() + 1 > dataFim.getMonth() + 1) {
        const anoFim = dataFim.getFullYear()
        dataFim.setFullYear(anoFim+1)
    }

    return (dataAtual >= dataInicio && dataAtual <= dataFim)
}

function verificaChuva2Meses (chuva, data){
    const dataAtual = data;
    const anoAtual = dataAtual.getFullYear();
    const dataInicio = new Date(chuva.inicio+'/'+anoAtual);
    const dataFim = new Date(dataAtual);

    if(dataAtual.getMonth()+1 > dataInicio.getMonth()+1) {
        const AnoFinal = dataInicio.getFullYear();
        dataInicio.setFullYear(AnoFinal +1);
    }

    dataFim.setMonth(dataFim.getMonth()+2);

    return (dataAtual < dataInicio && dataInicio < dataFim)
}

function inverteData (data) {
    const dataInvertida = data.split('/')

    return dataInvertida[1]+'/'+dataInvertida[0]
}

function retornaIntensidade (intensidade) {
    let novaIntensidade = '1 (Fraca)';

    if(intensidade.indexOf('Forte') >= 0) {
        novaIntensidade = '3 (Forte)';
    }
    else if (intensidade.indexOf('Média') >= 0) {
        novaIntensidade = '2 (Média)';
    }
    else if (intensidade.indexOf('Irregular') >= 0) {
        novaIntensidade = '(Irregular)';
    }

    return novaIntensidade;
}

const retornaHemisferio = (declinacao) => declinacao >= 0 ? 'Norte' : 'Sul';

export {verificaChuvaHoje, verificaChuva2Meses, inverteData, retornaIntensidade, retornaHemisferio};
