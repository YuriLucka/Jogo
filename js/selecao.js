usuario = localStorage.getItem('usuario')
let acessos = JSON.parse(localStorage.getItem('acessos'))

let container_skins = document.querySelector(".container_skins")
for(i=0; i<acessos[usuario]["skins"].length; i++){
    container_skins.innerHTML += `
    <div class="campo_skin" onclick="selecao(${acessos[usuario]["skins"][i]})">
        <img src="../images/assets/${acessos[usuario]["skins"][i]}.png" alt="Skins" class="skins">
    </div>
    `
}
container_skins.innerHTML += `
<div class="campo_skin" onclick="comprar_skin()">
    <img src="../images/assets/loja.png" alt="Skins" class="skins">
</div>
`


/* Carrega a skins selecionada pelo usuario */
function selecao(imagem){
    let skin_personagem = document.querySelector(".skin_personagem")
    let confirmar = document.querySelector("#confirmar")

    skin_personagem.src = `../images/assets/${imagem}.png`
    localStorage.setItem('skin_selecionada_na_selecao',JSON.stringify(imagem))
    confirmar.style.visibility = "visible"

}

function confirmar_jogador(){
    window.location.href = "jogo.html";
    window.parent.postMessage('jogar','*')
}

/* Direciona o usuario para a loja, caso clique no icone de comprar skins */
function comprar_skin(){
    // Redireciona para a loja
    window.location.href = "loja.html";
    window.parent.postMessage('loja','*')
}