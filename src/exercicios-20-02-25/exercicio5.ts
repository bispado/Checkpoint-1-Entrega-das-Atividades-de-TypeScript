type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Resposta recebida: ${resposta}`);
    } else {
        console.log(`Resposta booleana: ${resposta ? "Sucesso" : "Falha"}`);
    }
}

processarResposta("Tudo certo!");
processarResposta(true);
