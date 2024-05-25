let loja = document.querySelector(".loja");
let acessos = JSON.parse(localStorage.getItem('acessos'));
let skin_selecionada = document.querySelector(".skin_selecionada")
let comprar = document.querySelector("#comprar")
let notificacao = document.getElementById("notificacao");

usuario = localStorage.getItem('usuario');

function atualiar_loja(){
    loja.innerHTML = ''

    if (usuario === "desconectado"){
        for(i=2; i<=42; i++){
            loja.innerHTML += `
            <div class="box">
                <div class="container_img skin" onclick="selecao(${i})">
                    <img src="../images/assets/${i}.png" alt="skin">
                </div>
            </div>
            `
        }
    } else {
        for(i=2; i<=42; i++){
            if(!acessos[usuario]["skins"].includes(i)){
                loja.innerHTML += `
                <div class="box">
                    <div class="container_img skin" onclick="selecao(${i})">
                        <img src="../images/assets/${i}.png" alt="skin">
                    </div>
                </div>
                `
            } else {
                loja.innerHTML += `
                <div class="box">
                    <div class="container_img comprado">
                        <img src="../images/assets/${i}.png" alt="skin">
                    </div>
                </div>
                `
            }
        }
    }
}



function selecao(imagem){
    skin_selecionada.src = `../images/assets/${imagem}.png`

    if(usuario === "desconectado"){
        comprar.innerHTML = "EFETUAR LOGIN"
        comprar.style.background = '#ffad61'
        comprar.addEventListener("click", function() {
            // Redirecionar para a página de login e estiliza o cabeçalho
            window.location.href = "login.html";
            window.parent.postMessage('pagina_login','*')
        });
    } else {
        comprar.innerHTML = "COMPRAR"
        comprar.addEventListener("click", efetuar_compra);
        localStorage.setItem('skin_selecionada_na_loja',JSON.stringify(imagem))
    }

    comprar.style.visibility = "visible"
}

function efetuar_compra(){
    let skin_comprada = parseInt(localStorage.getItem('skin_selecionada_na_loja'))
    if(`${acessos[usuario]["dinheiro"]}` >= 20 && !acessos[usuario]["skins"].includes(skin_comprada)){
        acessos[usuario]["dinheiro"] = acessos[usuario]["dinheiro"] - 20
        acessos[usuario]["skins"].push(skin_comprada);
        comprar.style.visibility = "hidden";
        skin_selecionada.src = `../images/assets/1.png`;

        localStorage.setItem('acessos',JSON.stringify(acessos))
        atualiar_loja();

        window.parent.postMessage('dinheiro','*')
    } else if(acessos[usuario]["skins"].includes(skin_comprada)){
        
    } else {
        notificacao.style.visibility = 'visible'; // Torna a notificação visível
        setTimeout(function() {
            notificacao.style.visibility = 'hidden'; // Esconde a notificação após 3 segundos
        }, 1500); // 3000 milissegundos = 3 segundos
    }

}


atualiar_loja()