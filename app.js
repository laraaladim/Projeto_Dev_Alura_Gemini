// Função para exibir a seção com a caixa de texto ao clicar no botão de pesquisa
function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let sectionResultados = document.getElementById("resultados-pesquisa");
    let sectionCaixaTexto = document.getElementById("caixa-texto");

    // Exibe a seção com a caixa de texto
    sectionResultados.style.display = "none"; // Esconde a seção de resultados de pesquisa se estiver visível
    sectionCaixaTexto.style.display = "block"; // Exibe a seção com a caixa de texto
}
