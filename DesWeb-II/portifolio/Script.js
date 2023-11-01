function adicionarCards(){
   
    var filmes = [
        {
            titulo: "O Poderoso Chefão",
            diretor: "Francis Ford Coppola",
            ano: 1972,
            nota: 5.0
        },
        {
            titulo: "Interestelar",
            diretor: "Christopher Nolan",
            ano: 2014,
            nota: 2.0
        },
        {
            titulo: "Matrix",
            diretor: "Wachowski Brothers",
            ano: 1999,
            nota: 4.5
        },
        {
            titulo: "Pulp Fiction",
            diretor: "Quentin Tarantino",
            ano: 1994,
            nota: 3.2
        }
    ];


    var container = document.getElementsByClassName("container");

    
    for (var i = 0; i < filmes.length; i++) {
        
        document.inner

}
}
adicionarCards()




function irParaRedesSociais(){
    rolarSuavemente(2000, 300)
}


function irParaALista(){
    rolarSuavemente(1130, 300)
}


function rolarSuavemente(destino, duracao){
    const inicio = window.pageYOffset;
    const distancia = destino - inicio
    const passos = 50; // Número de etapas na animação
    const intervalo = duracao / passos;
    let etapa = 0;

    function animarScroll() {
        etapa++;
        const progresso = etapa / passos;
        const deslocamento = inicio + distancia * progresso;
        window.scrollTo(0, deslocamento);

        if (etapa < passos) {
            setTimeout(animarScroll, intervalo);
        }
    }
    animarScroll();
}