var cartaRafa = {
    nome: "Rafaella Ballerini",
    imagem: "https://yt3.ggpht.com/84ALFuw4UCyfL1TyoMU77D-I6xngPjn2X0kbx2bMAyoFzWwR-utcrbDn_MuNJcroPcmU9NdGGQ=s88-c-k-c0x00ffffff-no-rj",
    atributos: {
        BackEnd: parseInt(Math.random() * 100),
        FrontEnd: parseInt(Math.random() * 100),
        DBA: parseInt(Math.random() * 100),
        UX:parseInt(Math.random() * 100)        
    }
};

var cartaPaulo = {
    nome: "Paulo Silveira",
    imagem: "https://www.gravatar.com/avatar/c621f1575c6b408ed20d110b86873357.png?r=PG&size=100x100&date=2022-03-15&d=https%3A%2F%2Fcursos.alura.com.br%2Fassets%2Fimages%2Fforum%2Favatar_p.png",
    atributos: {
        BackEnd: parseInt(Math.random() * 100),
        FrontEnd: parseInt(Math.random() * 100),
        DBA: parseInt(Math.random() * 100),
        UX:parseInt(Math.random() * 100)        
    }
};

var cartaDevsoutinho = {
    nome: "Mario Souto",
    imagem: "https://www.gravatar.com/avatar/7c0b1603881b4593063f34a26cd58966.png?r=PG&size=100x100&date=2022-03-15&d=https%3A%2F%2Fcursos.alura.com.br%2Fassets%2Fimages%2Fforum%2Favatar_m.png",
    atributos: {
        BackEnd: parseInt(Math.random() * 100),
        FrontEnd: parseInt(Math.random() * 100),
        DBA: parseInt(Math.random() * 100),
        UX:parseInt(Math.random() * 100)        
    }
};

var cartaAtila = {
    nome: "Atila Iamarino",
    imagem: "https://yt3.ggpht.com/ytc/AKedOLS_h0p3VcxsxIIyCMP7XEL8ImQ3GauYC3KaDBXQ3A=s88-c-k-c0x00ffffff-no-rj",
    atributos: {
        BackEnd: parseInt(Math.random() * 100),
        FrontEnd: parseInt(Math.random() * 100),
        DBA: parseInt(Math.random() * 100),
        UX:parseInt(Math.random() * 100)        
    }
};

var cartaJovemnerd = {
    nome: "Jovem Nerd",
    imagem: "https://yt3.ggpht.com/ytc/AKedOLSQN3SUsEVV7XrEnTJxkRPLVY4hajsObHpczJXu=s88-c-k-c0x00ffffff-no-rj",
    atributos: {
        BackEnd: parseInt(Math.random() * 100),
        FrontEnd: parseInt(Math.random() * 100),
        DBA: parseInt(Math.random() * 100),
        UX:parseInt(Math.random() * 100)        
    }
};

var cartaCodigofonte = {
    nome: "Código Fonte TV",
    imagem: "https://yt3.ggpht.com/ytc/AKedOLTxp_yA1EqeS8rPJDe4m5qExsd3-OKqmlB3M6Oq5A=s88-c-k-c0x00ffffff-no-rj",
    atributos: {
        BackEnd: parseInt(Math.random() * 100),
        FrontEnd: parseInt(Math.random() * 100),
        DBA: parseInt(Math.random() * 100),
        UX:parseInt(Math.random() * 100)        
    }
};

var cartaMarcobruno = {
    nome: "Marco Bruno",
    imagem: "https://www.alura.com.br/assets/img/aluraverso/MarcoBruno.jpg",
    atributos: {
        BackEnd: parseInt(Math.random() * 100),
        FrontEnd: parseInt(Math.random() * 100),
        DBA: parseInt(Math.random() * 100),
        UX:parseInt(Math.random() * 100)        
    }
};

var cartas = [cartaRafa, cartaPaulo, cartaDevsoutinho, cartaAtila, cartaJovemnerd, cartaCodigofonte, cartaMarcobruno];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 7);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 7);
    while(numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 7);
    }
    cartaJogador = cartas[numeroCartaJogador];

    var btnSortear = document.getElementById("btnSortear");
    btnSortear.innerHTML = "Escolher Atributo";
    btnSortear.setAttribute("onclick", "jogar()");


    exibirCartaJogador();
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
        if(radioAtributo[i].checked) {
            return radioAtributo[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Venceu</p>"
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Derrotado</p>"
    }else {
        htmlResultado = "<p class='resultado-final'>Empatou</p>"
    }
    divResultado.innerHTML = htmlResultado;


    var btnSortear = document.getElementById("btnSortear");
    btnSortear.innerHTML = "Reiniciar";
    btnSortear.setAttribute("onclick", "reiniciarJogo()");

    exibirCartaMaquina();
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.display = "block";

    var imagemJogador = "<img class='carta-jogador' src='" + cartaJogador.imagem + "'>";

    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' checked='true' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class='carta-subtitle'>${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML = nome + imagemJogador + tagHTML + opcoesTexto + "</div>";
}

// //Exemplo utilizado pela na aula da imersaoDev da alura, porém sem o css utilizado por eles.
// function exibirCartaJogador() {
//     var divCartaJogador = document.getElementById("carta-jogador");
//     divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    
//     var tagHTML = "<div id='opcoes' class='carta-status'>";

//     var opcoesTexto = "";

//     for (var atributo in cartaJogador.atributos) {
//         opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
//     }

//     var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

//     divCartaJogador.innerHTML = nome + tagHTML + opcoesTexto + "</div>";
// }

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.display = "block";

    var imagemMaquina = "<img class='carta-maquina' src='" + cartaMaquina.imagem + "'>";

    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto +="<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }
    var nome = `<p class='carta-subtitle'>${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML = nome + imagemMaquina + tagHTML + opcoesTexto + "</div>";
}

// //Exemplo utilizado pela na aula da imersaoDev da alura, porém sem o css utilizado por eles.
// function exibirCartaMaquina() {
//     var divCartaMaquina = document.getElementById("carta-maquina");
//     divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    
//     var tagHTML = "<div id='opcoes' class='carta-status'>";

//     var opcoesTexto = "";

//     for (var atributo in cartaMaquina.atributos) {
//         opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<p>";
//     }

//     var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

//     divCartaMaquina.innerHTML = nome + tagHTML + opcoesTexto + "</div>";
// }

function reiniciarJogo() {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.innerHTML = "";
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.innerHTML = "";

    var divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "";

    var btnSortear = document.getElementById("btnSortear");
    btnSortear.innerHTML = "Sortear Carta";
    btnSortear.setAttribute("onclick", "sortearCarta()");
}