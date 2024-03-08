
// Evento para abrir a aba de Painel de Controle.
let cPainel = document.querySelector(".c-painel"); // Target da classe c-Painel.


cPainel.addEventListener('click', (event) => {
    let target = document.querySelector(".control-painel-containner")
    let targetColor = document.querySelector('.color-content')
    let targetAudio = document.querySelector('.audio-content')

    if (target.classList.contains('hide')) {
        target.classList.remove('hide')
    }
    else {
        target.classList.add('hide')
        targetAudio.classList.remove('show')
        targetColor.classList.remove('show')

    }
});

window.addEventListener('scroll', (event) => {
    let target = document.querySelector(".control-painel-containner")
    target.classList.add('hide');
});
// Evento para abrir a aba de Painel de Controle.

// Evento para abrir a paleta de cores do Painel.
let colorPainel = document.querySelector('.tittle-content .color'); //Target de Color tittle.

colorPainel.addEventListener('click', (event) => {

    let target = document.querySelector('.color-content')

    if (target.classList.contains('show')) {
        target.classList.remove('show')
    } else {
        target.classList.add('show')
    }
});
// Controle de cor do portifólio.

// Controle de cor do portifólio.

// Evento para abrir a paleta de cores do Painel.

// Evento para abrir o controlador de som do Painel.

let audioPainel = document.querySelector('.tittle-content .audio'); //Target de Color tittle.

audioPainel.addEventListener('click', (event) => {

    let target = document.querySelector('.audio-content')

    if (target.classList.contains('show')) {
        target.classList.remove('show')
    } else {
        target.classList.add('show')
    }
});

// Controle de som do portifólio.


// Controle de som do portifólio.

// Evento para abrir o controlador de som do Painel.

// Evento de escrita "Olá Mundo"!
function Escrita(divEscrita, Texto, velEscrita, delay) {

    setTimeout(() => {
        let letra = Texto.split("").reverse()
        let escrita = setInterval(() => {

            if (!letra.length) {
                return clearInterval(escrita)
            }

            let proximaLetra = letra.pop()

            divEscrita.innerHTML += proximaLetra

        }, velEscrita)
    }, delay)
};

Escrita(document.querySelector("#type-effect"), "</Olá Mundo!>" , 100, 1000);

Escrita(document.querySelector("#about-p1"), `Olá, eu sou Leonardo Rodrigues, mas você pode me chamar de Krieger. Tenho 26 anos sou de Santa Catarina, sou um entusiasta do mundo do desenvolvimento.` , 10, 3000);

Escrita(document.querySelector("#about-p2"), `Minha paixão é o desenvolvimento backend, onde busco aplicar com criatividade e inovação para construir soluções robustas e eficientes.`, 10, 6000);

Escrita(document.querySelector("#about-p3"), `Estou em constante busca por novos conhecimentos e desafios, sempre ansioso para explorar novas áreas de desenvolvimento. Acredito que a aprendizagem é uma jornada contínua e estou determinado a aplicar cada novo insight de maneira prática.`, 10, 9000);

// Evento de escrita "Olá Mundo"!

// Evento de Fade com rolagem de tela.
function fade() {
    var uiFade = document.querySelectorAll('.fade')

    for (var i = 0; i < uiFade.length; i++) {
        var userView = window.innerHeight
        var userUiView = uiFade[i].getBoundingClientRect().top
        var uiFadeCounter = 20

        if (userUiView < userView - uiFadeCounter) {
            uiFade[i].classList.add('active')
        }
    }
}

function pageLoad() {
    fade()
    window.addEventListener('scroll', fade)
}
window.addEventListener('load', pageLoad);
// Evento de Fade com rolagem de tela.

// Iniciador de cards de projeto e fullscreen
let cardContainer = document.querySelector('.card-projects-content')
let cardFullscreen = document.querySelector('.fullscreen')

const card = [
    {
        id: 1,
        nome: 'LandPage',
        subtitulo: 'Redirecionador de vendas',
        info: 'Este projeto foi utilizado apenas Html, CSS e Javascript, com estilização simples e responsividade. Foram adicionados links para redes sociais e cards para compra de produtos.',
        image: 'D-ribas-personal.jpg',
        repositorio: 'https://github.com/Kriegerl1/drrPersonalSite',
        deploy: 'https://drrpersonal.netlify.app/',
        tecnologias: ['css3', 'html5', 'javascript'],
        status: 'enable'
    }, {
        id: 2,
        nome: 'Desafio 1',
        subtitulo: 'Processo Seletivo Academia de programação',
        info: 'Desenvolvido para o processo seletivo da Academia de Programação, este aplicativo simples permite aos usuários determinar o tipo de triângulo com base nos comprimentos dos lados fornecidos. Com uma interface intuitiva, o usuário insere os comprimentos dos lados e recebe instantaneamente uma classificação do triângulo como equilátero, isósceles ou escaleno. Além disso, o aplicativo verifica se os lados fornecidos formam um triângulo válido. É uma ferramenta prática e eficiente para identificar triângulos.',
        image: 'P-Chall-AP-1.jpg',
        repositorio: 'https://github.com/Kriegerl1/Chall1AcadProgram',
        deploy: 'https://apdtt.netlify.app',
        tecnologias: ['css3', 'html5', 'javascript'],
        status: 'enable'
    }, {
        id: 3,
        nome: 'Desafio 2',
        subtitulo: 'Processo Seletivo Academia de programação',
        info: 'O código representa o Teste 2 da academia de programação, demonstrando um sistema de gerenciamento de estoque e serviços com operações CRUD. Os usuários interagem com uma interface para criar, visualizar, atualizar e excluir itens. Os dados são armazenados e processados no backend, com validações e feedback visual fornecidos na interface do usuário.',
        image: 'P-Chall-AP-2.jpg',
        repositorio: 'https://github.com/Kriegerl1/Chall2AcadProgram-',
        deploy: 'https://ap2dtt.netlify.app',
        tecnologias: ['css3', 'html5', 'javascript'],
        status: 'enable'
    }, {
        id: 4,
        nome: 'Card projeto 4',
        subtitulo: 'Subtitulo do card 4',
        info: 'Card projeto 4 com Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur amet quis dolorem blanditiis voluptates maiores quo placeat alias, omnis atque nihil delectus provident autem aut accusamus.',
        image: 'image4.jpg',
        repositorio: 'http://www.github.com/Kriegerl1',
        deploy: 'http://www.deploydo.site.com',
        tecnologias: [''],
        status: 'disable'
    }, {
        id: 5,
        nome: 'Card projeto 5',
        subtitulo: 'Subtitulo do card 5',
        info: 'Card projeto 5 com Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur amet quis dolorem blanditiis voluptates maiores quo placeat alias, omnis atque nihil delectus provident autem aut accusamus.',
        image: 'image3.jpg',
        repositorio: 'http://www.github.com/Kriegerl1',
        deploy: 'http://www.deploydo.site.com',
        tecnologias: [''],
        status: 'disable'
    }, {
        id: 6,
        nome: 'Card projeto 6',
        subtitulo: 'Subtitulo do card 6',
        info: 'Card projeto 6 com Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur amet quis dolorem blanditiis voluptates maiores quo placeat alias, omnis atque nihil delectus provident autem aut accusamus.',
        image: 'image2.jpg',
        repositorio: 'http://www.github.com/Kriegerl1',
        deploy: 'http://www.deploydo.site.com',
        tecnologias: [''],
        status: 'disable'
    }
]

function openFullscreenCard(value) {

    let newCardFullscreen = document.createElement('div');
    newCardFullscreen.classList.add('fade-fullscreen');

    let tech = '';
    for (let i = 0; i < value.tecnologias.length; i++) {
        let arrayDeTechs = value.tecnologias[i];
        tech += `<ion-icon name="logo-${arrayDeTechs}">@</ion-icon>`;
    }

    newCardFullscreen.innerHTML = `
    <div class="containner-fullscreen">
        <div class="close-btn">
            <ion-icon name="close"></ion-icon>
        </div>
        <div class="fullscreen-inner-content">
            <div class="image-content-fullscreen">
                <img src="./assets/scr/media/${value.image}" alt="ImageFullscreen">
            </div>
            <div class="info-content-fullscreen">
                <div class="tittle-content">
                    <h2 class="tittle">${value.nome}</h2>
                    <h3 class="subtittle">${value.subtitulo}</h3>
                </div>
                <div class="description-content-fullscreen">
                    <p>${value.info}</p>
                </div>
                <div class="link-button-content">
                    <button><a href="${value.deploy}" target="_blank" rel="link-deploy">Deploy</a></button>
                    <button><a href="${value.repositorio}" target="_blank" rel="link-repositório">Github</a></button>
                </div>
                <div class="tech-content-fullscreen">
                ${tech}
                </div>
            </div>
        </div>
    </div>
    `;

    cardFullscreen.innerHTML = ''; // Limpa o conteúdo anterior
    cardFullscreen.appendChild(newCardFullscreen);

    // Evento para fechar Projetos em fullscreen.

    let closeFullscreen = document.querySelector('.close-btn'); //Target do botão de fechar fullscreen.

    document.body.style.setProperty('--set-body-overflow', ' hidden');
    closeFullscreen.addEventListener('click', (event) => {
        let target = document.querySelector('.fade-fullscreen')

        if (!target.classList.contains('hide')) {
            target.classList.add('hide')
            document.body.style.setProperty('--set-body-overflow', ' none');

        }
    });
    // Evento para fechar Projetos em fullscreen.

}

function initCards() {
    card.forEach((value) => {
        let newCard = document.createElement('div');
        newCard.classList.add('project-card');
        newCard.classList.add(`${value.status}`);

        let tech = '';
        for (let i = 0; i < value.tecnologias.length; i++) {
            let arrayDeTechs = value.tecnologias[i];
            tech += `<li class="tech" style="--i:${i}"><ion-icon name="logo-${arrayDeTechs}"></ion-icon><span>${arrayDeTechs.toUpperCase()}</span></li>`;
        }

        newCard.innerHTML = `
        <div class="demo-project-image" ${value.status}>
        <img src="./assets/scr/media/${value.image}" alt="IMG-CARD">
    </div>
    <div class="info-project-content">
        <div class="card-tittle-content">
            <h2 class="tittle">${value.nome}</h2>
            <h3 class="subtittle">${value.subtitulo}</h3>
        </div>
        <div class="card-tech-content">
            ${tech}
        </div>
    </div>
        `;

        // Adicione um ouvinte de clique ao novo card

        newCard.addEventListener('click', () => {
            if (value.status !== "disable") {
                openFullscreenCard(value);
            }
        });

        cardContainer.appendChild(newCard);
    });
}

initCards();

// Iniciador de cards de projeto e fullscreen

// Menu burguer
let menuBurguer = document.querySelector('.r-menu-btn');

menuBurguer.addEventListener('click', (event) => {
    let target = document.querySelector('.nav-header-content');

    if (target.classList.contains('show')) {
        target.classList.remove('show');
        document.querySelector('.r-menu-btn ion-icon').name = "menu-outline";
    } else {
        target.classList.add('show');
        document.querySelector('.r-menu-btn ion-icon').name = "return-down-forward-outline";
    }
});

// Menu burguer

// Controlador de música ambiente
let audio = document.getElementById("control-sound");
audio.volume = 0.1;

function playSound() {
    if (audio.muted) {
        document.querySelector('.play-btn ion-icon').name = "pause-outline";
    } else {
        document.querySelector('.play-btn ion-icon').name = "play-outline";
    }
    audio.muted = !audio.muted;
}

function plussSound() {
    audio.volume += 0.1;
}

function lessSound() {
    audio.volume -= 0.1;
}

// Controlador de música ambiente


