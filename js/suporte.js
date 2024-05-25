let formulario = document.querySelector("#formulario")
let notificacao = document.getElementById("notificacao");
let email = document.getElementById("email");
let usuario = document.getElementById("usuario");
let mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    notificacao.style.visibility = "visible"

    email.value = ""
    usuario.value = ""
    mensagem.value = ""
    
})


email.addEventListener("input", limpar_campos);
email.addEventListener("click", limpar_campos);
usuario.addEventListener("input", limpar_campos);
usuario.addEventListener("click", limpar_campos);
senha.addEventListener("click", limpar_campos);
senha.addEventListener("input", limpar_campos);

function limpar_campos() {
    notificacao.style.visibility = "hidden";
};
