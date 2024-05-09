/ Interatividade na barra de navegação //
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
  
  


//  para armazenar a quantidade total e o valor total da compra
let quantidadeTotal = 0;
let valorTotal = 0;

document.addEventListener('DOMContentLoaded', function() {
    // todos os botões de compra e adiciona um ouvinte de evento a cada um
    document.querySelectorAll('.comprar-btn').forEach(function(botao) {
        botao.addEventListener('click', function() {
            let preco = parseFloat(this.getAttribute('data-preco'));
            let nomeLivro = this.getAttribute('data-nome');
            let inputId = this.getAttribute('data-input');
            comprarLivro(preco, nomeLivro, inputId);
        });
    });

    // Adiciona um ouvinte de evento para o botão de limpar histórico
    document.getElementById('limparHistorico').addEventListener('click', function() {
        limparHistorico();
    });
});

function comprarLivro(preco, nomeLivro, inputId) {
    let quantidade = parseInt(document.getElementById(inputId).value);
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira uma quantidade válida.");
    } else {
        quantidadeTotal += quantidade; 
        valorTotal += preco * quantidade; 

        alert("Compra realizada com sucesso!\n" + 
              "Livro: " + nomeLivro + "\n" +
              "Quantidade: " + quantidade + "\n" +
              "Total: R$" + (preco * quantidade).toFixed(2) + "\n" +
              "Quantidade total: " + quantidadeTotal + "\n" +
              "Valor total: R$" + valorTotal.toFixed(2));

        // Atualiza o resumo da compra
        atualizarResumo();

        // Limpa o campo de entrada após a compra
        document.getElementById(inputId).value = "";
    }
}

function atualizarResumo() {
    // Atualiza a quantidade total e o valor total no resumo da compra
    document.getElementById("quantidadeTotal").innerText = quantidadeTotal;
    document.getElementById("valorTotal").innerText = valorTotal.toFixed(2);
}

function limparHistorico() {
    // Reseta  quantidadeTotal e valorTotal para zero
    quantidadeTotal = 0;
    valorTotal = 0;

    // Atualiza o resumo da compra para refletir as alterações
    atualizarResumo();
}



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