// capturando elementos no DOM
// usuario
let usuarioInput = document.getElementById("usuario");
let usuarioLabel = document.querySelector('label[for="usuario"]');
let usuarioHelper = document.getElementById("usuario-helper");

// funções gerais
function togglePopup(input, label) {
    // mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
        label.classList.add("required-popup")
    })

    // ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup")
    });
};

togglePopup(usuarioInput, usuarioLabel);

function estilizarInputCorreto(input, helper) {
    // função que insere a cor verde caso o input esteja correto
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
};

function estilizarInputIncorreto(input, helper) {
    // função que insere a cor vermelha caso o input esteja incorreto
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
};

// validar valor do input usuário
usuarioInput.addEventListener("blur", (e) => {
    let valorUsuario = e.target.value;

    if (valorUsuario.length < 6 || valorUsuario == "") {
        // adicionar estilos dinâmicos se o valor tiver menos de 6 caracteres
        usuarioHelper.innerText = "Digite o nome de usuário com no mínimo 6 caracteres"
        estilizarInputIncorreto(usuarioInput, usuarioHelper);
        inputsCorretos.usuario = false;
    } else {
        // adicionar estilo dinâmico se o valor estiver correto
        estilizarInputCorreto(usuarioInput, usuarioHelper);
        inputsCorretos.usuario = true;
    }
});

// capturando elementos no DOM
// senha
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

togglePopup(senhaInput, senhaLabel);

// validar valor do input senha
senhaInput.addEventListener("blur", (e) => {
    let valorSenha = e.target.value;

    if (valorSenha.length < 6 || valorSenha == "") {
        senhaHelper.innerText = "Digite uma senha válida, ela deve ter no mínimo seis caracteres"
        estilizarInputIncorreto(senhaInput, senhaHelper);
        inputsCorretos.senha = false;
    } else {
        estilizarInputCorreto(senhaInput, senhaHelper);
        inputsCorretos.senha = true;
    };
});

// evitar envio do formulário
let btnSubmit = document.querySelector('input[type="submit"]');
let inputsCorretos = {
    usuario: false,
    senha: false
};

// botão login
btnSubmit.addEventListener("click", (e) => {
    if (inputsCorretos.usuario == false ||
        inputsCorretos.senha == false) {
        e.preventDefault();
        alert("Favor preencher todos os campos!");
    } else {
        alert("Login realizado com sucesso!");
    }
})