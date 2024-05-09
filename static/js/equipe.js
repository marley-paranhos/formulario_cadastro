// Interatividade na barra de navegação //
// Este trecho de código é executado quando o DOM é totalmente carregado
document.addEventListener('DOMContentLoaded', function () {
  // Seleciona o elemento com a classe 'hamburger', que geralmente é o ícone do menu de hambúrguer
  const hamburger = document.querySelector('.hamburger');
  // Seleciona o elemento com a classe 'nav-menu', que é o menu de navegação
  const navMenu = document.querySelector('.nav-menu');

  // Adiciona um ouvinte de evento de clique ao ícone do menu de hambúrguer
  hamburger.addEventListener('click', function () {
      // Quando o ícone do menu de hambúrguer é clicado, a classe 'show' é alternada no menu de navegação,
      // tornando-o visível ou oculto, dependendo do seu estado atual
      navMenu.classList.toggle('show');
  });
});

// Botão voltar ao topo //

// Define uma função chamada scrollFunction que é chamada sempre que ocorre um evento de rolagem
window.onscroll = function() {
  scrollFunction();
};

// Função para mostrar ou ocultar o botão de voltar ao topo, dependendo da posição de rolagem
function scrollFunction() {
  // Verifica se a posição de rolagem vertical do corpo do documento é maior que 20 pixels
  // ou se a posição de rolagem vertical do elemento raiz (html) é maior que 20 pixels
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // Se a posição de rolagem for maior que 20 pixels, o botão de voltar ao topo é exibido
    document.getElementById("btnTopo").style.display = "block";
  } else {
    // Caso contrário, o botão de voltar ao topo é ocultado
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
