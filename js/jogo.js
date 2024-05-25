let chat = document.querySelector(".chat")
let bar_fome = document.querySelector(".bar_fome");
let bar_sono = document.querySelector(".bar_sono");
let bar_saude = document.querySelector(".bar_saude");
let bar_felicidade = document.querySelector(".bar_felicidade");

let skin_selecionada_na_selecao = parseInt(localStorage.getItem('skin_selecionada_na_selecao'))
let jogador = document.querySelector("#jogador");
jogador.src = `../images/assets/${skin_selecionada_na_selecao}.png`

// Definição do objeto Crewmate
let crewmate = {
    nome: "Crewmate",
    fome: 50, // Nível de fome do Crewmate (0 a 100)
    sono: 60, // Nível de sono do Crewmate (0 a 100)
    saude: 70, // Nível de saúde do Crewmate (0 a 100)
    felicidade: 30 // Nível de felicidade do Crewmate (0 a 100)
};

// Função para exibir diálogo aleatório com base nos status do Crewmate
function exibirDialogoAleatorio() {
    dialogoAleatorio = "";

    // Verificar os status do Crewmate e gerar diálogo correspondente
    if (crewmate.fome > 80) {
        dialogoAleatorio = "Estou faminto! Será que tem alguma coisa para comer por aqui?";
    } else if (crewmate.sono > 80) {
        dialogoAleatorio = "Não consegui dormir direito esta noite. Estou me sentindo exausto...";
    } else if (crewmate.saude < 30) {
        dialogoAleatorio = "Minha saúde não está muito boa. Preciso tomar mais cuidado comigo mesmo.";
    } else if (crewmate.felicidade < 30) {
        dialogoAleatorio = "Estou me sentindo um pouco pra baixo ultimamente. Será que podemos fazer algo divertido?";
    } else {
        const dialogosGenéricos = ["Será que existe vida em outros planetas... que também entregam pizza?",
        "Estou me sentindo tão leve que poderia flutuar até Plutão!",
        "Se minha saúde fosse um foguete, estaria prestes a decolar!",
        "Alguém mais sentiu a vibração do cosmo? Não? Só eu? Ok, vou pedir menos pizza...",
        "A felicidade é como um cometa... às vezes, você precisa persegui-la através do espaço!",
        "Quando o sono é bom, até os meteoros passam despercebidos!",
        "Opa, acho que acabei de passar por um buraco de minhoca... devo estar viajando!",
        "Às vezes, me sinto como uma estrela cadente: rápido, brilhante e um pouco misterioso!",
        "Será que existe uma academia intergaláctica? Preciso trabalhar esse músculo espacial!",
        "Você já viu uma constelação em forma de pizza? Acho que estou faminto...",
        "Estou pensando em iniciar uma banda espacial. O nome? 'The Galactic Groovers'!",
        "Minha escala de felicidade atingiu um novo recorde interplanetário! Vamos comemorar?",
        "Alguém mais acha que os cometas são apenas estrelas cadentes com pressa?",
        "Se eu fosse uma supernova, explodiria em purpurina cósmica!",
        "Preciso confessar: meu maior medo é encontrar um alienígena com um sentido de humor terrível!",
        "O que você acha de uma viagem para a Lua das Gelatinas? Dizem que é deliciosamente divertida!",
        "Meu combustível espacial preferido? Café, é claro! É o que me mantém voando!",
        "Às vezes, me sinto como uma estrela perdida em busca do seu sistema solar...",
        "Se o universo é infinito, isso significa que sempre haverá mais espaço para pizza?",
        "Estou tão relaxado que me sinto flutuando em um oceano de estrelas.",
        "Às vezes, imagino como seria surfar nas ondas gravitacionais...",
        "Se eu fosse um planeta, seria o mais brilhante e cintilante de todos!",
        "Ei, alguém sabe como se pronuncia 'supernova' em alienígena?",
        "Estou mais animado que um foguete prestes a decolar!",
        "Será que existe uma academia intergaláctica para manter a forma?",
        "Quando era mais novo, sonhava em ser um meteoro e cruzar o universo em alta velocidade.",
        "Uma vez sonhei que voava com uma asa delta através do anel de Saturno. Foi incrível!",
        "E se os buracos negros forem apenas buracos de minhoca gigantes?",
        "Se o amor estivesse no espaço, seria uma constelação brilhante e eterna.",
        "Meu sonho é encontrar uma raça alienígena que compartilhe minha paixão por música!",
        "O que acontece em Vênus, fica em Vênus...",
        "Eu me pergunto se as estrelas têm nomes uns para os outros, como 'Twinkle' e 'Shine'.",
        "Às vezes, acho que as nuvens em Marte devem ser feitas de algodão doce.",
        "Quando estou de bom humor, minha aura é mais brilhante que um cometa!",
        "Alguém mais se sente como um astronauta perdido no espaço sideral?",
        "E se todas as galáxias forem apenas uma grande rede social galáctica?",
    ];
    dialogoAleatorio = dialogosGenéricos[Math.floor(Math.random() * dialogosGenéricos.length)];
    }

    chat.innerHTML = dialogoAleatorio
}

 

function atualizar_status() {
    bar_fome.style.width = `${crewmate.fome}%`;
    bar_sono.style.width = `${crewmate.sono}%`;
    bar_saude.style.width = `${crewmate.saude}%`;
    bar_felicidade.style.width = `${crewmate.felicidade}%`;
    exibirDialogoAleatorio();
}

// Função para alimentar o Crewmate
function alimentarCrewmate() {
    crewmate.fome -= 4;
    if (crewmate.fome < 0) crewmate.fome = 0;
    // Adicionando efeito na saúde
    crewmate.saude += 3;
    if (crewmate.saude > 100) crewmate.saude = 100;
    atualizar_status();
}

// Função para cuidar do sono do Crewmate
function dormirCrewmate() {
    crewmate.sono -= 5;
    if (crewmate.sono < 0) crewmate.sono = 0;
    crewmate.fome += 3;
    if (crewmate.fome > 100) crewmate.fome = 100;
    crewmate.saude += 6;
    if (crewmate.saude > 100) crewmate.saude = 100;
    atualizar_status();
}

// Função para tratar a saúde do Crewmate
function exercitarCrewmate() {
    crewmate.saude += 5;
    if (crewmate.saude > 100) crewmate.saude = 100;
    // Efeitos adicionais
    crewmate.sono += 2;
    if (crewmate.sono > 100) crewmate.sono = 100;
    crewmate.fome += 4;
    if (crewmate.fome > 100) crewmate.fome = 100;
    atualizar_status();
}

// Função para entreter o Crewmate
function passearCrewmate() {
    crewmate.felicidade += 5;
    if (crewmate.felicidade > 100) crewmate.felicidade = 100;
    // Efeitos adicionais
    crewmate.sono += 2;
    if (crewmate.sono > 100) crewmate.sono = 100;
    crewmate.fome += 3;
    if (crewmate.fome > 100) crewmate.fome = 100;
    crewmate.saude += 4;
    if (crewmate.saude > 100) crewmate.saude = 100;
    atualizar_status();
}

// Função para simular o tempo passando e afetar os atributos do Crewmate
function passarTempo() {
    crewmate.fome += 2;
    if (crewmate.fome > 100) crewmate.fome = 100;
    
    crewmate.sono += 3;
    if (crewmate.sono > 100) crewmate.sono = 100;
    
    crewmate.saude -= 5;
    if (crewmate.saude < 0) crewmate.saude = 0;
    
    crewmate.felicidade -= 4;
    if (crewmate.felicidade < 0) crewmate.felicidade = 0;
    
    atualizar_status();
}

// Atualizar o status inicialmente
atualizar_status();


setInterval(passarTempo, 10000);
