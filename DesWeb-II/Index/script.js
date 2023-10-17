let filmes = [
    {
        nome: "Filme 1",
        sinopse: "Sinopse do Filme 1",
        avaliacaoMedia: 4.5
    },
    {
        nome: "Filme 2",
        sinopse: "Sinopse do Filme 2",
        avaliacaoMedia: 3.8
    }
];

let filmeIndex = 0;

function carregarFilme() {
    let nomeFilme = document.querySelector("#nomeFilme");
    let sinopseFilme = document.getElementById("sinopse");
    let avaliacaoMedia = document.getElementById("avaliacao-media");
    let filme = filmes[filmeIndex];
    nomeFilme.textContent = filme.nome;
    sinopseFilme.textContent = filme.sinopse;
    avaliacaoMedia.textContent = filme.avaliacaoMedia.toFixed(2);
}

function proximoFilme() {
    filmeIndex = (filmeIndex + 1) % filmes.length;
    carregarFilme();
}

carregarFilme(); // Chame a função para carregar o primeiro filme quando a página carregar