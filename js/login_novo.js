let acessos = JSON.parse(localStorage.getItem('acessos'))
let formulario = document.querySelector("#formulario")
let email = document.getElementById("email");
let usuario = document.getElementById("usuario");
let senha = document.getElementById("senha");
let notificacao = document.getElementById("notificacao");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let loginValido = true;

    for (let i = 0; i < acessos.length; i++) {
        if (acessos[i].email === email.value.toLowerCase() || acessos[i].nickname === usuario.value.toLowerCase() || senha.value == "") {
            loginValido = false;
            
            break;
        }
    }

    if (loginValido) {
        notificacao.style.color = "#6de67d";
        notificacao.innerHTML = "Usuario Cadastrado!"
        notificacao.style.visibility = "visible";

        acessos.push({
            nickname: usuario.value.toLowerCase(),
            senha: senha.value,
            email: email.value.toLowerCase(),
            skins: [2,3,4],
            dinheiro: 100,
        });

        localStorage.setItem('acessos',JSON.stringify(acessos))

        email.value = "";
        usuario.value = "";
        senha.value = "";

    } else {
        email.style.borderColor  = "#c15755";
        usuario.style.borderColor  = "#c15755";
        senha.style.borderColor  = "#c15755";
        notificacao.style.color = "#e66f6d";
        notificacao.innerHTML = "Credenciais inválidas"
        notificacao.style.visibility = "visible";
    }

})



email.addEventListener("input", limpar_campos);
email.addEventListener("click", limpar_campos);
usuario.addEventListener("input", limpar_campos);
usuario.addEventListener("click", limpar_campos);
senha.addEventListener("click", limpar_campos);
senha.addEventListener("input", limpar_campos);

function limpar_campos() {
    email.style.borderColor = "#383838";
    usuario.style.borderColor = "#383838";
    senha.style.borderColor = "#383838";
    notificacao.style.visibility = "hidden";
};
