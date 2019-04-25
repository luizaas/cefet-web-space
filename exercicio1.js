// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML
let botoes = document.querySelectorAll(".botao-expandir-retrair")
botoes.forEach( botaoAtual =>
  botaoAtual.addEventListener("click", (botaoAtual) => {
    let pai = botaoAtual.path[1]
    if (pai.classList == "expandido") {
        pai.classList = ""
        botaoAtual.path[0].innerHTML="+"
    } else {
        pai.classList = "expandido"
        botaoAtual.path[0].innerHTML="-"
    }
}));
