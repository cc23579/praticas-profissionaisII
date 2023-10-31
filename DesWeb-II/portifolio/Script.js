function adicionarCard(){
   
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
        
        var card = document.createElement("div");
        card.className = "card";

       
        var titulo = document.createElement("h4");
        titulo.textContent = filmes[i].titulo;
        card.appendChild(titulo);

        
        var imagem = document.createElement("img");
        imagem.src = "#"; 
        card.appendChild(imagem);

        
        var sinopse = document.createElement("p");
        sinopse.textContent = "Sinopse:";
        card.appendChild(sinopse);

        var sinopseLabel = document.createElement("label");
        sinopseLabel.textContent = "Descrição do filme aqui."; 
        card.appendChild(sinopseLabel);

        
        var diretor = document.createElement("p");
        diretor.textContent = "Diretor:";
        card.appendChild(diretor);

        var diretorLabel = document.createElement("label");
        diretorLabel.textContent = filmes[i].diretor;
        card.appendChild(diretorLabel);

        
        var ano = document.createElement("p");
        ano.textContent = "Ano de Lançamento:";
        card.appendChild(ano);

        var anoLabel = document.createElement("label");
        anoLabel.textContent = filmes[i].ano;
        card.appendChild(anoLabel);

       
        var nota = document.createElement("p");
        nota.textContent = "Nota:";
        card.appendChild(nota);

        var notaLabel = document.createElement("label");
        notaLabel.textContent = filmes[i].nota;
        card.appendChild(notaLabel);

        
        container.appendChild(card);
    }

}

adicionarCard()