document.addEventListener("DOMContentLoaded", function () {
  // Pega o nome do arquivo da página onde você está (ex: "habilidade.html")
  const paginaAtual = window.location.pathname.split('/').pop();

  // Seleciona todos os links <a> do seu menu-hacker
  const botoesMenu = document.querySelectorAll('#menu-hacker a');

  botoesMenu.forEach(botao => {
    const href = botao.getAttribute('href');

    if (href) {
      // Pega apenas o nome do arquivo do link
      const arquivoLink = href.split('/').pop();

      // Se o link corresponder à página atual, adiciona a classe active
      if (arquivoLink === paginaAtual && paginaAtual !== "") {
        botao.classList.add('active');
      }
    }
  });
});
const descricoes = {
  java: "Possuo conhecimentos em desenvolvimento Java, com experiência na utilização de Bootstrap para criação de interfaces responsivas e modernas, além do padrão arquitetural MVC (Model-View-Controller) para organização e estruturação das aplicações. Tenho familiaridade com a aplicação desses conceitos no desenvolvimento de sistemas, buscando manter o código organizado, reutilizável e de fácil manutenção",
  python: "Tenho conhecimento em Python, sabendo trabalhar com diferentes bibliotecas e frameworks amplamente utilizados no mercado. Tenho familiaridade com ferramentas como Django, Flask, FastAPI, Pandas, NumPy, Matplotlib e PyTorch, além de compreender como escolher e utilizar as tecnologias mais adequadas para cada projeto. Também consigo desenvolver soluções utilizando boas práticas de programação, buscando escrever códigos organizados, eficientes e de fácil manutenção.",
  postgresql: "Tenho conhecimento em PostgreSQL, sabendo trabalhar com bancos de dados relacionais, criação e gerenciamento de tabelas, consultas SQL, relacionamentos entre dados e operações de inserção, atualização e exclusão de registros.",
  linguagemc: "Tenho conhecimento em linguagem C, sendo capaz de desenvolver programas e soluções utilizando seus principais recursos. Tenho familiaridade com ponteiros, estruturas, funções, arrays, manipulação de memória e alocação dinâmica, além de compreender conceitos fundamentais de programação de baixo nível. Também consigo trabalhar com arquivos, bibliotecas e organização de projetos em C, buscando desenvolver códigos eficientes, organizados e com bom desempenho."
};
function mostrarTexto(linguagem){
    const elementoTexto = document.getElementById("texto-terminal"); // Coloque o ID que você deu ao <p>
  elementoTexto.textContent = descricoes[linguagem];
}
document.getElementById("button-java").addEventListener("click", () => mostrarTexto("java"));
document.getElementById("button-python").addEventListener("click", () => mostrarTexto("python"));
document.getElementById("button-postgre").addEventListener("click", () => mostrarTexto("postgresql"));
document.getElementById("button-c").addEventListener("click", () => mostrarTexto("linguagemc"));