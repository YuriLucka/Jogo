let acessos = JSON.parse(localStorage.getItem('acessos'));
let formulario = document.querySelector("#formulario")
let usuario = document.getElementById("usuario");
let senha = document.getElementById("senha");
let notificacao = document.getElementById("notificacao");


formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let loginValido = false;

    for (let i = 0; i < acessos.length; i++) {
        if (acessos[i].nickname === usuario.value.toLowerCase() && acessos[i].senha === senha.value ) {
            loginValido = true;
            localStorage.setItem('usuario',i)
            alert("Login feito com sucesso!")
            window.parent.postMessage('logado','*')
            break;
        }
    }

    if (loginValido) {
        window.location.href = `selecao.html` 
    } else {
        usuario.style.borderColor  = "#c15755";
        senha.style.borderColor  = "#c15755";
        notificacao.style.visibility = "visible";
    }

})


usuario.addEventListener("input", limpar_campos);
usuario.addEventListener("click", limpar_campos);
senha.addEventListener("click", limpar_campos);
senha.addEventListener("input", limpar_campos);

function limpar_campos() {
    usuario.style.borderColor  = "#383838";
    senha.style.borderColor  = "#383838";
    notificacao.style.visibility = "hidden";
};
