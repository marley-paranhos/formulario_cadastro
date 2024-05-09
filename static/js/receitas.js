// Evento DOMContentLoaded - ocorre quando o DOM está totalmente carregado
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o ícone do menu hamburguer e o menu de navegação
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const toggleButtons = document.querySelectorAll(".toggle-button");
  
    // Manipulador de evento para o menu hamburguer
    hamburger.addEventListener('click', function () {
        // Quando o ícone do menu hamburguer é clicado, alterna a classe 'show' no menu de navegação
        // Isso mostra ou esconde o menu de navegação
        navMenu.classList.toggle('show');
    });
  
    // Manipulador de evento para os botões de alternância de receitas
    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Quando um botão de alternância de receita é clicado, obtém o conteúdo associado (próximo elemento)
            const conteudo = this.nextElementSibling;
            // Chama a função para alternar a exibição do conteúdo
            toggleDisplay(conteudo);
        });
  
        // Manipulador de evento para dispositivos de toque
        button.addEventListener("touchstart", function(event) {
            // Prevenir o comportamento padrão de toque, como zoom
            event.preventDefault(); 
            // Quando um botão de alternância de receita é tocado, obtém o conteúdo associado (próximo elemento)
            const conteudo = this.nextElementSibling;
            // Chama a função para alternar a exibição do conteúdo
            toggleDisplay(conteudo);
        });
    });
  
    // Função para alternar a exibição de conteúdo
    function toggleDisplay(element) {
        // Verifica se o elemento está atualmente oculto
        if (element.style.display === "none" || element.style.display === "") {
            // Se estiver oculto, exibe o elemento
            element.style.display = "block";
        } else {
            // Se estiver visível, oculta o elemento
            element.style.display = "none";
        }
    }
});

// Botão de voltar ao topo
// Adiciona um ouvinte de evento para o evento de rolagem da janela
window.onscroll = function() {scrollFunction()};
  
function scrollFunction() {
    // Exibe ou oculta o botão de voltar ao topo dependendo da posição de rolagem da página
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // Se a posição de rolagem for maior que 20 pixels, exibe o botão de voltar ao topo
        document.getElementById("btnTopo").style.display = "block";
    } else {
        // Caso contrário, oculta o botão de voltar ao topo
        document.getElementById("btnTopo").style.display = "none";
    }
}

// Função para rolar a página de volta ao topo quando o botão de voltar ao topo é clicado
function scrollToTop() {
    // Define a posição de rolagem vertical do corpo do documento como 0, levando a página de volta ao topo
    document.body.scrollTop = 0;
    // Define a posição de rolagem vertical do elemento raiz (html) como 0, levando a página de volta ao topo
    document.documentElement.scrollTop = 0;
}
