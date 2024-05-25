let cabecalho = document.querySelector(".cabecalho")
let inicio = document.querySelector("#inicio")
let novidades = document.querySelector("#novidades")
let loja = document.querySelector("#loja")
let sobre = document.querySelector("#sobre")
let suporte = document.querySelector("#suporte")
let login = document.querySelector("#login")
let politica = document.querySelector("#politica")
let jogar = document.querySelector(".opcao_jogar")
let logar = document.querySelector(".opcao_login")

/* Funções de tema*/
function temaInicio(){
    cor_menu()
    cabecalho.style.background = "linear-gradient(45deg, #2e2e2e, rgb(12, 45, 105), #2e2e2e)" 
}
function temaLogin(){
    cor_menu()
    cabecalho.style.background = "linear-gradient(45deg, #2e2e2e, rgb(12, 45, 105), #2e2e2e)"
}
function temaLoja(){
    cor_menu()
    cabecalho.style.background = "linear-gradient(45deg, #2e2e2e, rgb(5, 66, 77), #2e2e2e)"
    loja.style.color = '#fb9a40';
}
function temaNovidades(){
    cor_menu()
    cabecalho.style.background = "linear-gradient(45deg, #2e2e2e, rgb(77, 5, 67), #2e2e2e)"
    novidades.style.color = '#fb9a40';
}
function temaSobre(){
    cor_menu()
    cabecalho.style.background = "linear-gradient(45deg, #2e2e2e, rgb(65, 65, 65), #2e2e2e)"
    sobre.style.color = '#fb9a40';
}
function temaSuporte(){
    cor_menu()
    cabecalho.style.background = "linear-gradient(45deg, #2e2e2e, rgb(65, 65, 65), #2e2e2e)"
    suporte.style.color = '#fb9a40';
}
function temaJogo(){
    cor_menu()
    cabecalho.style.background = "linear-gradient(45deg, #2e2e2e, rgb(65, 65, 65), #2e2e2e)"
}

/* Função para resetar a cor de seleção do menu */
function cor_menu(){
    let opcoes = document.querySelectorAll('.opcoes_menu');
    opcoes.forEach(function(opcoes) {
        opcoes.style.color = 'white';
    });
}

/* Responsável por escutar e receber solicitações vindas de dentro do iframe */
window.addEventListener('message', function(event) {
    if(event.data === 'logado'){
        jogar.style.display = 'inline';
        logar.innerHTML = "Sair";
        inicio.style.pointerEvents = 'none'
        cabecalho.style.background = "linear-gradient(45deg, #2e2e2e, rgb(65, 65, 65), #2e2e2e)";
        puxar_dados();
        cor_menu();
    } else if(event.data === 'loja'){
        temaLoja();
    } else if(event.data === 'pagina_login'){
        temaLogin();
    } else if(event.data === 'dinheiro') {
        atualizarDinheiro();
    }
});

/* Função responsável em extrair o nickname e dinheiro do usuario logado */
function puxar_dados(){
    let acessos = JSON.parse(localStorage.getItem('acessos'));
    let dados_usuario_logado = document.querySelector(".dados_usuario_logado")
    let nick_usuario_logado = document.querySelector(".nick_usuario_logado")
    let dinheiro_usuario_logado = document.querySelector(".dinheiro_usuario_logado")
    let usuario = localStorage.getItem('usuario')
    nick_usuario_logado.innerHTML = `<i class="bi bi-person-fill"></i>${acessos[usuario]["nickname"]}`
    dinheiro_usuario_logado.innerHTML = `<i class="bi bi-currency-dollar"></i>${acessos[usuario]["dinheiro"]}`
    dados_usuario_logado.style.visibility = 'visible'
}

/* Função responsável em atualizar o dinheiro */
function atualizarDinheiro(){
    let acessos = JSON.parse(localStorage.getItem('acessos'));
    let dinheiro_usuario_logado = document.querySelector(".dinheiro_usuario_logado")
    let usuario = localStorage.getItem('usuario')
    dinheiro_usuario_logado.innerHTML = `<i class="bi bi-currency-dollar"></i>${acessos[usuario]["dinheiro"]}`
}


/* Se o usuario clicar em "Sair"
O botão volta a ficar como "Login", a opção "Jogar" fica invisivel e ele reseta o usuario.
*/
function deslogar(){
    if (logar.innerHTML === "Sair"){
        let dados_usuario_logado = document.querySelector(".dados_usuario_logado")
        let nick_usuario_logado = document.querySelector(".nick_usuario_logado")
        let dinheiro_usuario_logado = document.querySelector(".dinheiro_usuario_logado")
        nick_usuario_logado.innerHTML = 'Nickname'
        dinheiro_usuario_logado.innerHTML = '0'
        dados_usuario_logado.style.visibility = 'hidden'
        logar.innerHTML = "Login"
        jogar.style.display = 'none'
        inicio.style.pointerEvents = 'auto'
        localStorage.setItem('usuario',"desconectado");
    }
}


/* Tocador da musica tema */
let tocando = false;
let audio = document.getElementById("audio");

function playAudio() {
    if (!tocando) {
        audio.play();
        document.querySelector('.bi').classList.remove('bi-volume-mute');
        document.querySelector('.bi').classList.add('bi-volume-up');
        inicio.style.color = '#47c04f'
        tocando = true;
        audio.volume = 0.5;
    } else {
        audio.pause();
        document.querySelector('.bi').classList.remove('bi-volume-up');
        document.querySelector('.bi').classList.add('bi-volume-mute');
        inicio.style.color = 'white'
        tocando = false;
    }
}