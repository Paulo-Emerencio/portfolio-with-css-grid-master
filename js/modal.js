const portfolioContainer = document.querySelector('.portfolio-items');

portfolioContainer.addEventListener('click', e => {
   //Previne comportamento padrão do link de resetar a página
   e.preventDefault();

   //Retorna o elemento especificado, se não encontrado no clique, retorna null
   const modalToggle = e.target.closest('.portfolio-link');
   
   //Se modalToggle for null, a função se encerra por aqui, retornando nada
   if (! modalToggle) return;

   //Seleciona o pai do .portfolio-link, no caso <figcaption>, e depois o próximo irmão, no caso <div class="portfolio-modal">
   const modal = modalToggle.parentNode.nextElementSibling;
   //Função anônima dentro da variável modalOpen, adiciona a classe 'is-open' no modal e a animação 'modalIn', ambas criadas no arquivo _portfolio.scss
   const modalOpen = _ => {
      modal.classList.add('is-open');
      modal.style.animation = 'modalIn 500ms forwards';
      document.body.style.overflowY = 'hidden';
   }
   modalOpen();

   //querySelector ao invés de olhar no documento inteiro, pode olhar só dentro do elemento especificado
   const closeButton = modal.querySelector('.modal-close');
   //Event listener para fechar o modal clicando no X
   closeButton.addEventListener('click', _ => {
      exitModal();
   });

   //Event listener para fechar o modal com o Esc
   document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
         exitModal();
      }
   });

   function exitModal() {
      modal.style.animation = 'modalOut 500ms forwards';
      //É possível adicionar event listener para quando uma animação css termina, no caso, esse aqui chama a função modalClose depois dos 500ms da animação modalOut
      modal.addEventListener('animationend', modalClose);
      document.body.style.overflowY = 'scroll';
   }

   function modalClose() {
      modal.classList.remove('is-open');
      //Se não remover o eventListener 'animationend', ele vai continuar ativo para qualquer animação css que rodar depois
      modal.removeEventListener('animationend', modalClose);
   }

});