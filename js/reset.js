localStorage.setItem('usuario',"desconectado");

let versao_atual = "25051016"

let versao_navegador = JSON.parse(localStorage.getItem('versao')) ?? "00000000"
localStorage.setItem('versao',JSON.stringify(versao_navegador))

if(versao_atual != versao_navegador){
    localStorage.removeItem('acessos')
    localStorage.setItem('versao',JSON.stringify(versao_atual))
}


let acessos = JSON.parse(localStorage.getItem('acessos')) ?? [
    { nickname: "adm", senha: "adm" , email: "adm@crewmate.com.br", skins: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42], dinheiro: 999},
    { nickname: "carloshenrique", senha: "123" , email: "carloshenrique@crewmate.com.br", skins: [11], dinheiro: 100},
    { nickname: "danieloliveira", senha: "123" , email: "danieloliveira@crewmate.com.br", skins: [15], dinheiro: 100},
    { nickname: "edersonluan", senha: "123" , email: "edersonluan@crewmate.com.br", skins: [2,3,4], dinheiro: 100},
    { nickname: "eduardotadeu", senha: "123" , email: "eduardotadeu@crewmate.com.br", skins: [32], dinheiro: 100},
    { nickname: "fabiomagalhaes", senha: "123" , email: "fabiomagalhaes@crewmate.com.br", skins: [33], dinheiro: 100},
    { nickname: "gabrielalmeida", senha: "123" , email: "gabrielalmeida@crewmate.com.br", skins: [31], dinheiro: 100},
    { nickname: "gabrielerenata", senha: "123" , email: "gabrielerenata@crewmate.com.br", skins: [34], dinheiro: 100},
    { nickname: "guilhermecosta", senha: "123" , email: "guilhermecosta@crewmate.com.br", skins: [20], dinheiro: 100},
    { nickname: "guilhermegabriel", senha: "123" , email: "guilhermegabriel@crewmate.com.br", skins: [2,3,4], dinheiro: 100},
    { nickname: "guilhermelati", senha: "123" , email: "guilhermelati@crewmate.com.br", skins: [42], dinheiro: 100},
    { nickname: "higorlima", senha: "123" , email: "higorlima@crewmate.com.br", skins: [18], dinheiro: 100},
    { nickname: "ilanioalves", senha: "123" , email: "ilanioalves@crewmate.com.br", skins: [6], dinheiro: 100},
    { nickname: "isabelaaraujo", senha: "123" , email: "isabelaaraujo@crewmate.com.br", skins: [35], dinheiro: 100},
    { nickname: "joaovitor", senha: "123" , email: "joaovitor@crewmate.com.br", skins: [30], dinheiro: 100},
    { nickname: "lucasgabriel", senha: "123" , email: "lucasgabriel@crewmate.com.br", skins: [2,3,4], dinheiro: 100},
    { nickname: "lucassoares", senha: "123" , email: "lucassoares@crewmate.com.br", skins: [19], dinheiro: 100},
    { nickname: "luizhenrique", senha: "123" , email: "luizhenrique@crewmate.com.br", skins: [41], dinheiro: 100},
    { nickname: "luizvitor", senha: "123" , email: "luizvitor@crewmate.com.br", skins: [14], dinheiro: 100},
    { nickname: "mariohenrique", senha: "123" , email: "mariohenrique@crewmate.com.br", skins: [40], dinheiro: 100},
    { nickname: "marioroberto", senha: "123" , email: "marioroberto@crewmate.com.br", skins: [22], dinheiro: 100},
    { nickname: "moiseshenrique", senha: "123" , email: "moiseshenrique@crewmate.com.br", skins: [2,3,4], dinheiro: 100},
    { nickname: "paulogabriel", senha: "123" , email: "paulogabriel@crewmate.com.br", skins: [36], dinheiro: 100},
    { nickname: "ramonsilva", senha: "123" , email: "ramonsilva@crewmate.com.br", skins: [26], dinheiro: 100},
    { nickname: "ranierisales", senha: "123" , email: "ranierisales@crewmate.com.br", skins: [38], dinheiro: 100},
    { nickname: "viniciusfelipe", senha: "123" , email: "viniciusfelipe@crewmate.com.br", skins: [37], dinheiro: 100},
    { nickname: "yarahelfenstein", senha: "123" , email: "yarahelfenstein@crewmate.com.br", skins: [2,3,4], dinheiro: 100},
    { nickname: "yurilucka", senha: "123" , email: "yurilucka@crewmate.com.br", skins: [2,3,4,6,9,10], dinheiro: 200},
    { nickname: "richardandrius", senha: "123" , email: "richardandrius@crewmate.com.br", skins: [17], dinheiro: 100},
];

localStorage.setItem('acessos',JSON.stringify(acessos))