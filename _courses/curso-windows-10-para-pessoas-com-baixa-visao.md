---
layout: post
title: "Configurações do Windows 10 para Pessoas com Baixa Visão"
permalink: /cursos/curso-windows-10-para-pessoas-com-baixa-visao/
category: "Acessibilidade Digital"
date: 2025-07-02
author: "Louise Suelen"
excerpt: "Curso que ensina como configurar o Windows 10 para pessoas com baixa visão, abordando recursos como lupa, alto contraste e personalização do mouse."
tags: ["Acessibilidade", "Windows 10", "Baixa Visão"]
---

<style>
/* Classe para leitores de tela */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Skip link para navegação rápida */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #8257e5;
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  z-index: 9999;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 6px;
  outline: 3px solid #ffd700;
  outline-offset: 2px;
}

/* Container principal da página de vídeos */
.video-page-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 24px 5% 24px 5%;
  min-height: 100vh;
  box-sizing: border-box;
}

/* Coluna principal do vídeo */
.video-main-column {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Container do player de vídeo */
.video-player-wrapper {
  position: relative;
  width: 100%;
  max-width: 800px;
  padding-bottom: 56.25%; /* Aspect ratio 16:9 padrão */
  background-color: #000;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.7);
  border: 3px solid #8257e5;
}

.video-player-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* Informações do vídeo principal */
.video-info {
  padding: 20px 0;
  width: 100%;
  max-width: 800px;
  text-align: center;
}

.video-info h1 {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 16px 0;
  line-height: 1.2;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.video-accessibility-note {
  color: #ffffff;
  font-size: 1.05rem;
  font-style: italic;
  margin: 0 0 20px 0;
  text-align: center;
  background-color: #1a1a1d;
  padding: 14px 20px;
  border-radius: 8px;
  border-left: 4px solid #8257e5;
  font-weight: 500;
}

.video-description {
  margin-top: 20px;
  text-align: left;
}

/* Botão colapsável dark mode */
.video-description-toggle {
  width: 100%;
  background: linear-gradient(135deg, #1a202c, #2d3748);
  color: #ffffff;
  border: 2px solid #8257e5;
  padding: 18px 24px;
  border-radius: 12px;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
}

.video-description-toggle::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.video-description-toggle:hover::before {
  opacity: 1;
}

.video-description-toggle:hover {
  background: linear-gradient(135deg, #2d3748, #4a5568);
  border-color: #6c4ed9;
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.6);
}

.video-description-toggle:focus {
  outline: 4px solid #6c4ed9;
  outline-offset: 4px;
}

.video-description-toggle:active {
  transform: translateY(0);
}

/* Ícone de seta */
.toggle-icon {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  z-index: 1;
  position: relative;
}

.toggle-icon.expanded {
  transform: rotate(180deg);
}

/* Texto do botão */
.toggle-text {
  z-index: 1;
  position: relative;
}

/* Conteúdo colapsável */
.video-description-content {
  background-color: #1a202c;
  color: #ffffff;
  padding: 0;
  border-radius: 0 0 12px 12px;
  overflow: hidden;
  max-height: 0;
  transition: all 0.4s ease;
  border: 2px solid #8257e5;
  border-top: none;
  position: relative;
}

.video-description-content.expanded {
  max-height: 600px;
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden;
}

/* Estilizar barra de rolagem */
.video-description-content::-webkit-scrollbar {
  width: 12px;
}

.video-description-content::-webkit-scrollbar-track {
  background: #2d3748;
  border-radius: 0 0 12px 0;
}

.video-description-content::-webkit-scrollbar-thumb {
  background: #8257e5;
  border-radius: 6px;
  border: 2px solid #2d3748;
}

.video-description-content::-webkit-scrollbar-thumb:hover {
  background: #6c4ed9;
}

.video-description-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #3498db, transparent);
}

.video-description-content p {
  margin: 0 0 12px 0;
  line-height: 1.8;
  color: #f7fafc;
  font-size: 1.1rem;
  text-align: justify;
}

.video-description-content h3 {
  color: #8257e5;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 24px 0 12px 0;
  padding-bottom: 8px;
  border-bottom: 2px solid #8257e5;
}

.video-description-content h3:first-child {
  margin-top: 0;
}

.video-description-content ol,
.video-description-content ul {
  margin: 12px 0;
  padding-left: 24px;
  color: #f7fafc;
}

.video-description-content li {
  margin-bottom: 8px;
  line-height: 1.7;
}

.video-description-content ul ul,
.video-description-content ol ul {
  margin-top: 8px;
  margin-bottom: 8px;
}

.video-description-content kbd {
  background-color: #343a40;
  border: 3px solid #495057;
  border-radius: 6px;
  padding: 4px 10px;
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  font-weight: 700;
  color: #ffc107;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  display: inline-block;
}

.video-description-content strong {
  color: #ffffff;
  font-weight: 700;
}

.video-description-content em {
  color: #4fd1c7;
  font-style: italic;
  font-weight: 500;
}

.video-description-content code {
  background-color: #343a40;
  border: 2px solid #495057;
  border-radius: 4px;
  padding: 3px 8px;
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  color: #ffc107;
  display: inline-block;
  font-weight: 600;
}

/* Container do componente colapsável */
.collapsible-description {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  overflow: hidden;
  background-color: #1a202c;
}

/* Seção com lista de vídeos */
.video-sidebar {
  width: 100%;
}

.video-sidebar h2 {
  font-size: 1.9rem;
  font-weight: 700;
  margin: 0 0 28px 0;
  color: #ffffff;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  padding: 18px;
  border-radius: 12px;
  border: 2px solid #8257e5;
}

/* Lista de vídeos */
.video-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}

.video-list-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  padding: 0;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid #4a5568;
  overflow: hidden;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.5);
  position: relative;
}

.video-list-item:focus-within {
  outline: 4px solid #ffd700;
  outline-offset: 4px;
}

.video-list-item:hover,
.video-list-item:focus-within {
  background: linear-gradient(135deg, #34495e, #2c3e50);
  border-color: #8257e5;
  transform: translateY(-4px);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.6);
}

.video-list-item.active {
  background: linear-gradient(155deg, #2d1b69, #4a2c85);
  border-color: #6c4ed9;
  border-width: 3px;
  box-shadow: 0 10px 35px rgba(130, 87, 229, 0.4);
}

.video-list-item a {
  display: flex;
  flex-direction: column;
  gap: 0;
  text-decoration: none;
  color: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

.video-list-item a:focus {
  outline: 4px solid #8257e5;
  outline-offset: 4px;
  border-radius: 8px;
}

/* Thumbnail dos vídeos da lista */
.video-thumbnail {
  position: relative;
  width: 100%;
  height: 180px;
  background-color: #2c3e50;
  border-radius: 0;
  overflow: hidden;
}

.video-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.video-list-item:hover .video-thumbnail img {
  transform: scale(1.05);
}

.video-duration {
  position: absolute;
  bottom: 6px;
  right: 6px;
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  padding: 4px 6px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

/* Informações dos vídeos da lista */
.video-list-info {
  flex: 1;
  min-width: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.video-list-info h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

.video-list-info .channel-name {
  font-size: 1rem;
  color: #e2e8f0;
  margin-bottom: 4px;
  font-weight: 600;
}

.video-list-info .video-stats {
  font-size: 0.9rem;
  color: #cbd5e0;
  font-weight: 500;
}

/* Responsividade */
@media (max-width: 1200px) {
  .video-page-container {
    gap: 32px;
    padding: 20px 3% 20px 3%;
  }
}

@media (max-width: 768px) {
  .video-page-container {
    padding: 16px;
    gap: 24px;
  }

  .video-player-wrapper {
    max-width: 100%;
  }

  .video-info h1 {
    font-size: 1.4rem;
  }

  .video-list {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
  }

  .video-thumbnail {
    height: 150px;
  }

  .video-list-info h3 {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .video-list {
    grid-template-columns: 1fr;
  }

  .video-info {
    text-align: left;
  }

  .video-meta {
    justify-content: flex-start;
  }
}

/* Acessibilidade para leitores de tela */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Estilos para modo de alto contraste */
@media (prefers-contrast: high) {
  .video-list-item:hover,
  .video-list-item:focus-within {
    background: #000;
    color: #fff;
    border-color: #fff;
  }

  .video-list-item.active {
    border-left-width: 8px;
    border-color: #fff;
    background: #1a1a1a;
  }
  
  .video-list-info h3 {
    color: #fff;
  }
  
  .video-list-info .channel-name,
  .video-list-info .video-stats {
    color: #ccc;
  }
}

/* Estilos para redução de movimento */
@media (prefers-reduced-motion: reduce) {
  .video-list-item {
    transition: none;
  }
  
  .video-thumbnail img {
    transition: none;
  }
  
  .video-list-item:hover .video-thumbnail img {
    transform: none;
  }
  
  .video-list-item:hover {
    transform: none;
  }
}
</style>

<!-- Skip links para navegação rápida -->
<a href="#main-video" class="skip-link">Ir para o vídeo principal</a>
<a href="#video-list" class="skip-link">Ir para a lista de vídeos</a>

<div class="video-page-container">
  <!-- Coluna Principal do Vídeo -->
  <main class="video-main-column" role="main" aria-labelledby="current-video-title">
    <section aria-labelledby="current-video-title" aria-describedby="video-accessibility-note">
      <div class="video-player-wrapper">
        <iframe 
          id="main-video"
          src="https://customer-n8imyf4ea5hvxexl.cloudflarestream.com/c568f0c330538121b3a3551416662a14/iframe?poster=https%3A%2F%2Fcustomer-n8imyf4ea5hvxexl.cloudflarestream.com%2Fc568f0c330538121b3a3551416662a14%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D2m37s%26height%3D600"
          title="Vídeo principal: Aula 01 - Tema Escuro e Temas de Contraste"
          loading="lazy"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          allowfullscreen
          aria-describedby="video-accessibility-note">
        </iframe>
      </div>

      <div class="video-info">
        <h2 id="current-video-title">Aula 01 - Tema Escuro e Temas de Contraste</h2>
        
        <p class="video-accessibility-note" id="video-accessibility-note">Você pode acessar a descrição em texto dessa aula.</p>

        <div class="video-description">
          <div class="collapsible-description">
            <button 
              class="video-description-toggle" 
              id="description-toggle"
              aria-expanded="false"
              aria-controls="video-description-content"
              aria-describedby="description-help"
              onclick="toggleDescription()"
              type="button">
              <span class="toggle-text">Transcrição do Vídeo</span>
              <span class="toggle-icon" id="toggle-icon" aria-hidden="true">▼</span>
            </button>
            <div class="sr-only" id="description-help">Pressione Enter ou Espaço para expandir ou recolher a transcrição</div>
            <div 
              class="video-description-content bg-dark" 
              id="video-description-content"
              role="region"
              aria-labelledby="description-toggle">
              <div id="current-video-description">
              <h3>Tema Escuro</h3>
              <p><strong>Acessar configurações do tema escuro:</strong></p>
              <p>Pressione a tecla <kbd>Windows</kbd> e na caixa de pesquisa digite "temas", em seguida, pressione <kbd>Enter</kbd> para abrir as configurações de temas do Windows 10.</p>
              
              <p><strong>Abrir configurações de temas:</strong></p>
              <p>Quando a lista de resultados aparecer, pressione <kbd>Enter</kbd> em "Temas e configurações relacionadas". Em seguida, selecione "Cor".</p>
              
              <p><strong>Selecionar tema escuro:</strong></p>
              <p>Na seção "cores", escolha "Escuro" no seletor de temas.</p>
              <p>Feche a página de configurações. Para verificar, pressione <kbd>Windows</kbd> + <kbd>E</kbd> e depois disso, o explorador de arquivos será aberto com o tema escuro aplicado.</p>
              
              <p><strong>Observação:</strong> O tema não é aplicado em todas as janelas do Windows 10, mas é aplicado em muitas delas, como o explorador de arquivos, o menu iniciar e algumas janelas de configuração. Ele pode não funcionar em páginas da web ou em aplicativos de terceiros que não suportam o tema escuro, além do painel de controle do Windows 10 e outras janelas.</p>
              
              <h3>Alto Contraste</h3>
              <p><strong>Acessar configurações de alto contraste:</strong></p>
              <p>Pressione a tecla <kbd>Windows</kbd> e na caixa de pesquisa digite "alto contraste", em seguida, pressione <kbd>Enter</kbd> em "Configurações de alto contraste".</p>
              
              <p><strong>Ativar alto contraste:</strong></p>
              <p>Na janela de configurações de alto contraste, ative a opção "Ativar alto contraste". Você pode escolher entre diferentes temas de alto contraste disponíveis, como "Alto contraste preto", "Alto contraste branco" ou "Alto contraste azul".</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Sidebar com Lista de Vídeos -->
  <aside class="video-sidebar" role="complementary" aria-labelledby="video-list-heading">
    <h3 id="video-list-heading">Vídeos do Curso</h3>
    
    <nav aria-labelledby="video-list-heading" role="navigation">
      <ul class="video-list" id="video-list" role="list">
      <!-- Vídeo 1 -->
      <li class="video-list-item active" role="listitem">
        <a href="#" 
           data-video-id="c568f0c330538121b3a3551416662a14" 
           data-video-title="Aula 01 - Tema Escuro e Temas de Contraste"
           data-video-description='<h3>Tema Escuro</h3><p><strong>Acessar configurações do tema escuro:</strong></p><p>Pressione a tecla <kbd>Windows</kbd> e na caixa de pesquisa digite "temas", em seguida, pressione <kbd>Enter</kbd> para abrir as configurações de temas do Windows 10.</p><p><strong>Abrir configurações de temas:</strong></p><p>Quando a lista de resultados aparecer, pressione <kbd>Enter</kbd> em "Temas e configurações relacionadas". Em seguida, selecione "Cor".</p><p><strong>Selecionar tema escuro:</strong></p><p>Na seção "cores", escolha "Escuro" no seletor de temas.</p><p>Feche a página de configurações. Para verificar, pressione <kbd>Windows</kbd> + <kbd>E</kbd> e depois disso, o explorador de arquivos será aberto com o tema escuro aplicado.</p><p><strong>Observação:</strong> O tema não é aplicado em todas as janelas do Windows 10, mas é aplicado em muitas delas, como o explorador de arquivos, o menu iniciar e algumas janelas de configuração. Ele pode não funcionar em páginas da web ou em aplicativos de terceiros que não suportam o tema escuro, além do painel de controle do Windows 10 e outras janelas.</p><h3>Alto Contraste</h3><p><strong>Acessar configurações de alto contraste:</strong></p><p>Pressione a tecla <kbd>Windows</kbd> e na caixa de pesquisa digite "alto contraste", em seguida, pressione <kbd>Enter</kbd> em "Configurações de alto contraste".</p><p><strong>Ativar alto contraste:</strong></p><p>Na janela de configurações de alto contraste, ative a opção "Ativar alto contraste". Você pode escolher entre diferentes temas de alto contraste disponíveis, como "Alto contraste preto", "Alto contraste branco" ou "Alto contraste azul".</p>'
           aria-current="true"
           onclick="changeVideo(event, this)">
          <div class="video-thumbnail">
            <img src="https://customer-n8imyf4ea5hvxexl.cloudflarestream.com/c568f0c330538121b3a3551416662a14/thumbnails/thumbnail.jpg?time=2m37s&height=600" 
                 alt="" 
                 loading="lazy"
                 aria-hidden="true">
          </div>
          <div class="video-list-info">
            <h3>Aula 01 - Tema Escuro e Temas de Contraste</h3>
            <p class="video-stats">Configure o tema escuro e alto contraste do Windows 10 para melhorar a visualização da tela.</p>
          </div>
        </a>
      </li>

      <!-- Vídeo 2 -->
      <li class="video-list-item" role="listitem">
        <a href="#" 
           data-video-id="88a9940ea026b45059a743e585401a55" 
           data-video-title="Aula 02 - Lupa do Windows 10"
           data-video-description='<h3>Ativar a Lupa</h3><p>Existem duas maneiras principais de ativar a lupa:</p><ol><li>Ativação pela pesquisa<ul><li>Pressione a tecla <kbd>Windows</kbd> no teclado.</li><li>Na caixa de pesquisa, digite "lupa" e pressione <kbd>Enter</kbd>.</li></ul></li><li>Ativação por atalho de teclado<ul><li>Pressione e segure a tecla <kbd>Windows</kbd> e, em seguida, pressione a tecla <kbd>+</kbd> (tecla de mais) para aumentar o zoom. A maneira de pressionar é: pressione e segure a tecla <kbd>Windows</kbd> e, em seguida, pressione a tecla <kbd>+</kbd> repetidamente até atingir o nível de zoom desejado.</li><li>Ou seja, você aperta a tecla <kbd>Windows</kbd> e, enquanto a mantém pressionada, pressiona a tecla <kbd>+</kbd> várias vezes para aumentar o zoom. Quantas vezes? Até atingir a quantidade de zoom (ampliação) que você deseja.</li></ul></li></ol><h3>Controles principais da lupa</h3><p>A lupa do Windows possui controles principais que podem ser usados para ajustar o zoom e a visualização da tela.</p><ul><li><kbd>Windows</kbd> + <kbd>+</kbd>: Amplia a tela. Pressione e segure a tecla <kbd>Windows</kbd> e, em seguida, pressione a tecla <kbd>+</kbd> várias vezes para aumentar o zoom.</li><li><kbd>Windows</kbd> + <kbd>-</kbd>: Reduz o zoom da tela. Pressione e segure a tecla <kbd>Windows</kbd> e, em seguida, pressione a tecla <kbd>-</kbd> várias vezes para diminuir o zoom.</li><li><kbd>Windows</kbd> + <kbd>Ctrl</kbd> + <kbd>Enter</kbd>: Ativa a função de leitura de texto em voz alta. Isso fará com que o Windows leia o texto em voz alta usando a lupa sem a necessidade de um leitor de telas adicional. Muito útil para pessoas com baixa visão que conseguem ver a tela, mas têm dificuldade para ler o texto.</li><li><kbd>Ctrl</kbd>: Interrompe a leitura de texto em voz alta.</li></ul><h3>Configurações da lupa</h3><p>Para acessar e modificar as configurações da lupa, siga estas etapas:</p><ol><li><strong>Abrir Configurações de Lupa</strong><ul><li>No menu da lupa, vá até o último botão, que é o botão de configurações.</li><li>Depois vá até a opção "ir para configurações" e pressione a tecla <kbd>Enter</kbd> ou clique no botão com o mouse.</li></ul></li><li><strong>Ajustar Configurações de Lupa</strong><ul><li>O foco do leitor de telas será direcionado automaticamente para o botão "ativar a lupa" se a lupa estiver desativada, pressione a tecla <kbd>Enter</kbd> para ativá-la.</li></ul></li><li><strong>Pressione a tecla <kbd>Tab</kbd> para navegar pelas opções</strong><ul><li>Tornar tudo maior na tela: Essa opção será abordada com todos os detalhes em um tópico mais à frente neste artigo.</li><li>"Reduzir" e "Aumentar" o zoom: Controla o nível de zoom da tela.</li><li>Alterar incrementos de zoom: Permite ajustar quanto a tela aumenta ou diminui com cada pressionamento de atalho. O incremento padrão é 100%, mas pode ser ajustado entre 5% e 400%. Por exemplo, se o incremento for de 5%, a tela aumentará ou diminuirá 5% a cada pressionamento de atalho.</li></ul></li></ol><h3>Modos de exibição de lupa</h3><p>A lupa do Windows possui três modos de exibição diferentes que podem ser usados para ampliar a tela:</p><ol><li>Tela inteira<ul><li>Atalho: <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd></li><li>Ação: Amplia toda a tela.</li></ul></li><li>Modo encaixado<ul><li>Atalho: <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>D</kbd></li><li>Ação: Mostra uma régua ampliada na parte superior da tela. Isso quer dizer que esse modo de exibição deixa a tela dividida em duas partes: uma parte com a tela normal e outra parte com a tela ampliada na parte de cima sendo que a parte de baixo (não ampliada) é maior que a parte de cima (ampliada)por isso se diz que a parte de cima é uma régua.</li></ul></li><li>Modo Lente<ul><li>Atalho: <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>L</kbd></li><li>Ação: Cria uma área de lente ampliada ao redor do ponteiro do mouse que pode ter o tamanho ajustado. Isso quer dizer que esse modo de exibição deixa a tela normal e a lente ampliada fica ao redor do ponteiro do mouse. Então onde o mouse estiver a lente estará ampliando e o restante da tela estará normal. O tanto que a lente amplia em volta (ao redor) do ponteiro do mouse pode ser ajustado para o tamanho que você desejar.</li></ul></li></ol><p><strong>Observação:</strong> Para trocar entre os modos de exibição da lupa, use a combinação de teclas <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>M</kbd>. Isso permitirá que você alterne entre os modos de tela inteira, encaixado e lente. Para visualizar temporariamente como cada modo de exibição funciona, pressione a combinação de teclas <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Barra de Espaço</kbd>.</p><h3>Ajustes adicionais da lupa</h3><p>Marque "Iniciar lupa após entrar" para ativar a lupa automaticamente após o login no Windows. E, marque "Iniciar a lupa antes de entrar para todos" para ativar a lupa na tela de login do Windows para todos os usuários.</p><p>Para marcar ou desmarcar essas opções, use a tecla <kbd>Tab</kbd> para navegar até as opções desejadas e pressione a tecla <kbd>Espaço</kbd> para alternar entre marcado e desmarcado.</p>'
           onclick="changeVideo(event, this)">
          <div class="video-thumbnail">
            <img src="https://customer-n8imyf4ea5hvxexl.cloudflarestream.com/88a9940ea026b45059a743e585401a55/thumbnails/thumbnail.jpg?time=8m19s&height=600" 
                 alt="" 
                 loading="lazy"
                 aria-hidden="true">
          </div>
          <div class="video-list-info">
            <h3>Aula 02 - Configurações da Lupa do Windows 10</h3>
            <p class="video-stats">Aprenda a ativar e controlar a lupa com atalhos de teclado e ajustar os modos de ampliação da tela.</p>
          </div>
        </a>
      </li>

      <!-- Vídeo 3 -->
      <li class="video-list-item" role="listitem">
        <a href="#" 
           data-video-id="3335650781857efb0725f60478c94d31" 
           data-video-title="Aula 03 - Tornar Tudo Maior na Tela"
           data-video-description='<h3>O que é?</h3><p>A opção "Tornar tudo maior na tela" é uma ferramenta de acessibilidade do Windows que permite aumentar o tamanho de todos os elementos da interface, como ícones, textos, janelas e menus.</p><h3>Acessar Configurações de Facilidade de Acesso</h3><ul><li><strong>Abrir Configurações de Acessibilidade</strong><ul><li>Pressione a tecla <kbd>Windows</kbd> no teclado.</li><li>Na caixa de pesquisa que aparecerá, digite "acessibilidade".</li><li>Encontre a opção "Configurações de Facilidade de Acesso" e pressione a tecla <kbd>Enter</kbd>.</li></ul></li></ul><h3>Ajustar o Tamanho do Texto</h3><ul><li><strong>Localizar a barra de rolagem de texto</strong><ul><li>Na janela de Configurações de Facilidade de Acesso, o foco do leitor de telas será direcionado automaticamente para a barra que define o "Tamanho do texto".</li></ul></li><li><strong>Ajustar o texto</strong><ul><li>Essa opção permite aumentar ou diminuir o tamanho do texto em todos os aplicativos e janelas do Windows.</li><li>Para aumentar o texto, pressione a tecla de seta para a direita ou use o botão esquerdo do mouse.</li><li>Para diminuir, pressione a tecla de seta para a esquerda ou use novamente o botão do mouse.</li></ul></li><li><strong>Aplicar alterações</strong><ul><li>Após ajustar o tamanho, pressione a tecla <kbd>Tab</kbd> até chegar ao botão "Aplicar".</li><li>Pressione a tecla <kbd>Enter</kbd> para confirmar.</li></ul></li></ul><h3>Tornar tudo maior</h3><ol><li><strong>Abrir a opção de escala</strong><ul><li>Logo abaixo da configuração de "Tamanho do texto", existe a opção "Tornar tudo maior".</li><li>Essa configuração ajusta o tamanho de todos os elementos da tela, não apenas o texto.</li></ul></li><li><strong>Configurar a ampliação</strong><ul><li>Pressione <kbd>Enter</kbd> na caixa de combinação da opção "Tornar tudo maior".</li><li>Use as teclas de seta para cima ou para baixo para escolher entre 100% (padrão), 125%, 150% ou 175%.</li><li>Pressione <kbd>Enter</kbd> novamente na opção desejada para aplicar a mudança.</li></ul></li></ol><p><strong>Dica:</strong> Para pessoas com baixa visão que precisam de ampliação adicional, é possível combinar o aumento do tamanho do texto, a opção "Tornar tudo maior" e ainda usar a lupa. Essa combinação reduz o cansaço visual e melhora a experiência de leitura e navegação no Windows.</p>'
           onclick="changeVideo(event, this)">
          <div class="video-thumbnail">
            <img src="https://customer-n8imyf4ea5hvxexl.cloudflarestream.com/3335650781857efb0725f60478c94d31/thumbnails/thumbnail.jpg?time=4m30s&height=600" 
                 alt="" 
                 loading="lazy"
                 aria-hidden="true">
          </div>
          <div class="video-list-info">
            <h3>Aula 03 - Tornar Tudo Maior na Tela</h3>
            <p class="channel-name">PcD na Escola</p>
            <p class="video-stats">Aumente o tamanho de textos, ícones e elementos da interface para facilitar a leitura e navegação.</p>
          </div>
        </a>
      </li>

      <!-- Vídeo 4 -->
      <li class="video-list-item" role="listitem">
        <a href="#" 
           data-video-id="4376fd2456f16312df532bf5dc98591b" 
           data-video-title="Aula 04 - Remover Papel de Parede"
           data-video-description='<h3>O que é?</h3><p>O Windows permite desativar a exibição da imagem de fundo da área de trabalho. Essa opção é útil para pessoas com baixa visão, pois reduz o cansaço visual e melhora a navegação ao deixar o fundo em uma cor neutra.</p><h3>Acessar Configurações de Facilidade de Acesso</h3><ul><li><strong>Abrir Configurações de Acessibilidade</strong><ul><li>Pressione a tecla <kbd>Windows</kbd> no teclado.</li><li>Na caixa de pesquisa que aparecerá, digite "acessibilidade".</li><li>Encontre a opção "Configurações de Facilidade de Acesso" e pressione a tecla <kbd>Enter</kbd>.</li></ul></li></ul><h3>Localizar a opção de papel de parede</h3><ul><li><strong>Ir até a opção correta</strong><ul><li>Na janela de Configurações de Facilidade de Acesso, navegue até a configuração chamada <em>"Mostrar a imagem de tela de fundo da área de trabalho"</em>.</li></ul></li></ul><h3>Desativar a opção</h3><ol><li><strong>Usando o mouse ou touchpad</strong><ul><li>Clique no botão de alternância que está marcado como "Ativado" para desativá-lo.</li></ul></li><li><strong>Usando o teclado</strong><ul><li>Quando o leitor de telas anunciar o nome da opção, pressione a tecla <kbd>Barra de espaço</kbd> para desativar.</li><li>O leitor de telas informará "não pressionado" ao confirmar que a opção foi desativada.</li></ul></li></ol><p><strong>Observação:</strong> Ao desativar a opção "Mostrar a imagem de tela de fundo da área de trabalho", a área de trabalho ficará com um fundo neutro.</p><p>Caso também esteja ativado o tema de alto contraste, o fundo será exibido em preto ou na cor predominante do tema de alto contraste escolhido.</p>'
           onclick="changeVideo(event, this)">
          <div class="video-thumbnail">
            <img src="https://customer-n8imyf4ea5hvxexl.cloudflarestream.com/4376fd2456f16312df532bf5dc98591b/thumbnails/thumbnail.jpg?time=1m7s&height=600" 
                 alt="" 
                 loading="lazy"
                 aria-hidden="true">
          </div>
          <div class="video-list-info">
            <h3>Aula 04 - Remover Papel de Parede</h3>
            <p class="channel-name">PcD na Escola</p>
            <p class="video-stats">Desative a imagem de fundo da área de trabalho para reduzir o cansaço visual e melhorar o foco.</p>
          </div>
        </a>
      </li>

      <!-- Vídeo 5 -->
      <li class="video-list-item" role="listitem">
        <a href="#" 
           data-video-id="0da5ae7e3beb5e89acb3e9d251ee8caa" 
           data-video-title="Aula 05 - Tamanho e Cor do Ponteiro do Mouse"
           data-video-description='<h3>O que é?</h3><p>O Windows permite alterar o tamanho e a cor do ponteiro do mouse para facilitar a navegação na tela. Essas opções são especialmente úteis para pessoas com baixa visão, pois aumentam a visibilidade e reduzem o cansaço visual.</p><h3>Acessar Configurações de Facilidade de Acesso</h3><ul><li><strong>Abrir Configurações de Acessibilidade</strong><ul><li>Pressione a tecla <kbd>Windows</kbd> no teclado.</li><li>Na barra de pesquisa, digite "acessibilidade".</li><li>Pressione <kbd>Enter</kbd> na opção "Configurações de Facilidade de Acesso".</li></ul></li></ul><h3>Navegar até Configurações do Ponteiro do Mouse</h3><ul><li><strong>Acessar a opção correta</strong><ul><li>Na janela de Configurações, a primeira opção é "Configurações da tela".</li><li>Para ir até "Ponteiro do mouse", pressione <kbd>Shift</kbd> + <kbd>Tab</kbd> e depois use a tecla <kbd>Seta para baixo</kbd> até ouvir o leitor de telas anunciar: <em>"ponteiro do mouse, não selecionado"</em>.</li><li>Pressione <kbd>Enter</kbd> para abrir a configuração.</li></ul></li></ul><h3>Alterar o tamanho e a cor do ponteiro</h3><ol><li><strong>Alterar o tamanho do ponteiro</strong><ul><li>Pressione <kbd>Tab</kbd> até chegar na opção "Alterar o tamanho do ponteiro".</li><li>Use a barra deslizante para ajustar o tamanho do ponteiro movendo-a para a esquerda (menor) ou para a direita (maior).</li></ul></li><li><strong>Alterar a cor do ponteiro</strong><ul><li>Pressione <kbd>Tab</kbd> até chegar em "Alterar a cor do ponteiro".</li><li>As opções disponíveis são: branco, preto, invertida e personalizado.</li><li>Use a tecla <kbd>Seta para a direita</kbd> para navegar e pressione <kbd>Enter</kbd> para selecionar uma cor.</li></ul></li></ol><h3>Personalizar a cor do ponteiro</h3><ol><li><strong>Selecionar personalizado</strong><ul><li>Escolha a opção "Personalizado" e pressione <kbd>Enter</kbd>.</li><li>Pressione <kbd>Tab</kbd> até chegar em "Cores de ponteiro sugeridas".</li><li>Use as setas para navegar pelas cores sugeridas e selecione uma com <kbd>Enter</kbd>.</li><li>Após a última cor sugerida, pressione <kbd>Tab</kbd> até encontrar o botão "Escolher uma cor de ponteiro personalizada" e pressione <kbd>Enter</kbd>.</li></ul></li><li><strong>Definir uma cor personalizada</strong><ul><li>Uma janela pop-up chamada <em>"Escolher uma cor de ponteiro personalizada"</em> será exibida.</li><li>Para quem não usa mouse, navegue com <kbd>Tab</kbd> até "Modelo de cores" e depois pelas opções de valores RGB.</li><li>Ao chegar em "RGB edição hexa número", digite um código hexadecimal da cor desejada (por exemplo, <code>#121218</code> para um azul escuro profundo).</li></ul></li><li><strong>Aplicar a cor escolhida</strong><ul><li>Apague o valor existente com <kbd>Backspace</kbd>.</li><li>Digite o código hexadecimal desejado.</li><li>Pressione <kbd>Tab</kbd> até o botão "Concluído" e pressione <kbd>Enter</kbd> para aplicar.</li></ul></li></ol><p><strong>Dica:</strong> Alterar o tamanho e a cor do ponteiro pode tornar sua navegação mais confortável. Combine essa personalização com outras opções de acessibilidade, como a lupa e o contraste elevado, para maximizar a visibilidade e reduzir o esforço visual.</p>'
           onclick="changeVideo(event, this)">
          <div class="video-thumbnail">
            <img src="https://customer-n8imyf4ea5hvxexl.cloudflarestream.com/0da5ae7e3beb5e89acb3e9d251ee8caa/thumbnails/thumbnail.jpg?time=2m8s&height=600" 
                 alt="" 
                 loading="lazy"
                 aria-hidden="true">
          </div>
          <div class="video-list-info">
            <h3>Aula 05 - Tamanho e Cor do Ponteiro do Mouse</h3>
            <p class="channel-name">PcD na Escola</p>
            <p class="video-stats">Personalize o tamanho e a cor do ponteiro do mouse para aumentar a visibilidade na navegação.</p>
          </div>
        </a>
      </li>

      <!-- Vídeo 6 -->
      <li class="video-list-item" role="listitem">
        <a href="#" 
           data-video-id="33e271645e012e47013bf565b3b5d74d" 
           data-video-title="Aula 06 - Leitura Avançada Microsoft Edge"
           data-video-description='<h3>Ferramentas de acessibilidade no Microsoft Edge</h3><p>O navegador Microsoft Edge oferece recursos de acessibilidade que ajudam pessoas com baixa visão a ler e interagir com páginas da web. Entre os principais estão a leitura em voz alta e a leitura avançada.</p><h3>Ler texto em voz alta</h3><p>Esse recurso permite ouvir o conteúdo exibido na tela diretamente no navegador.</p><ol><li><strong>Ativar leitura em voz alta</strong><ul><li>Para quem enxerga, basta clicar na opção localizada próximo ao lado direito da barra de endereços.</li><li>Pelo teclado, pressione <kbd>Alt</kbd> + <kbd>D</kbd> para focar na barra de endereços.</li><li>Pressione <kbd>Tab</kbd> até ouvir "ler em voz alta esta página (Ctrl + Shift + U) botão de alternância não pressionado".</li><li>Pressione <kbd>Enter</kbd> para iniciar a leitura em voz alta.</li></ul></li><li><strong>Controlar a leitura</strong><ul><li>Uma barra de controle aparecerá na parte superior do navegador, com botões para pausar, reproduzir ou avançar a leitura.</li><li>Para acessar as opções de voz, pressione <kbd>Tab</kbd> até "opções de voz botão" e pressione <kbd>Enter</kbd>.</li></ul></li><li><strong>Ajustar velocidade e voz</strong><ul><li>Velocidade: use a barra deslizante. <kbd>Seta para a esquerda</kbd> diminui e <kbd>Seta para a direita</kbd> aumenta.</li><li>Escolher uma voz: vá até "escolher uma voz caixa de combinação" e pressione <kbd>Enter</kbd>. Use as setas para escolher e confirme com <kbd>Enter</kbd>.</li></ul></li></ol><h3>Leitura avançada</h3><p>O modo de leitura avançada simplifica a página, destacando apenas o conteúdo principal e ocultando elementos desnecessários.</p><ol><li><strong>Ativar leitura avançada</strong><ul><li>Pressione <kbd>Alt</kbd> + <kbd>D</kbd> para ir até a barra de endereços.</li><li>Pressione <kbd>Tab</kbd> quatro vezes até ouvir "entrar na leitura avançada (F9) botão recolhido".</li><li>Pressione <kbd>Enter</kbd> para ativar.</li></ul></li><li><strong>Funcionalidades</strong><ul><li><em>Modo de leitor:</em> simplifica a página, escondendo pop-ups e botões, e exibindo apenas texto e imagens relevantes.</li><li><em>Preferências de texto:</em> pressione <kbd>Tab</kbd> até "preferências de texto botão" e pressione <kbd>Enter</kbd> para ajustar tamanho de texto, espaçamento e temas de página.</li><li><em>Foco de linha:</em> permite destacar uma, três ou cinco linhas durante a leitura.</li></ul></li><li><strong>Ajustar preferências de leitura</strong><ul><li>Pressione <kbd>Tab</kbd> até "preferências de leitura botão" e pressione <kbd>Enter</kbd>.</li><li>Use <kbd>Tab</kbd> para navegar pelas opções disponíveis.</li><li>Para fechar qualquer caixa de opções, pressione <kbd>Esc</kbd>.</li></ul></li></ol><h3>Vantagens dos recursos de acessibilidade</h3><ul><li><strong>Curva de aprendizado menor:</strong> ferramentas prontas para uso, sem necessidade de aprender a operar um leitor de telas completo.</li><li><strong>Destaque visual:</strong> as palavras sendo lidas são destacadas, facilitando acompanhar a leitura.</li><li><strong>Redução de fadiga visual:</strong> ouvir a leitura pode ajudar em sessões longas, diminuindo o esforço de leitura visual.</li></ul><h3>Observações</h3><ul><li><strong>Limitações conhecidas:</strong> o recurso pode não ler corretamente ícones embutidos em tags <code>&lt;span&gt;</code> e pode ignorar imagens mesmo com texto alternativo no atributo <code>alt</code>.</li><li><strong>Recomendação para baixa visão:</strong> se a acuidade visual for extremamente baixa, recomenda-se o uso de um leitor de telas completo. Ele melhora a produtividade e reduz riscos de fadiga e dores de cabeça pelo esforço visual.</li></ul>'
           onclick="changeVideo(event, this)">
          <div class="video-thumbnail">
            <img src="https://customer-n8imyf4ea5hvxexl.cloudflarestream.com/33e271645e012e47013bf565b3b5d74d/thumbnails/thumbnail.jpg?time=2m37s&height=600" 
                 alt="" 
                 loading="lazy"
                 aria-hidden="true">
          </div>
          <div class="video-list-info">
            <h3>Aula 06 - Leitura Avançada Microsoft Edge</h3>
            <p class="channel-name">PcD na Escola</p>
            <p class="video-stats">Utilize os recursos de leitura em voz alta e modo de leitura avançada do navegador Microsoft Edge.</p>
          </div>
        </a>
      </li>
      </ul>
    </nav>
  </aside>
</div>

<script>
/**
 * Função para trocar o vídeo principal
 * Acessível via teclado e leitores de tela
 */
function changeVideo(event, element) {
  event.preventDefault();
  
  // Obter dados do vídeo
  const videoId = element.getAttribute('data-video-id');
  const videoTitle = element.getAttribute('data-video-title');
  const videoDescription = element.getAttribute('data-video-description');
  
  // Atualizar iframe do player para Cloudflare Stream
  const player = document.getElementById('main-video');
  player.src = `https://customer-n8imyf4ea5hvxexl.cloudflarestream.com/${videoId}/iframe?poster=https%3A%2F%2Fcustomer-n8imyf4ea5hvxexl.cloudflarestream.com%2F${videoId}%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D2m37s%26height%3D600`;
  player.title = `Vídeo principal: ${videoTitle}`;
  
  // Atualizar informações do vídeo
  document.getElementById('current-video-title').textContent = videoTitle;
  
  // Atualizar descrição (suporta HTML)
  const descriptionElement = document.getElementById('current-video-description');
  if (videoDescription.includes('<')) {
    descriptionElement.innerHTML = videoDescription;
  } else {
    descriptionElement.innerHTML = `<p>${videoDescription}</p>`;
  }
  
  // Atualizar classe active
  document.querySelectorAll('.video-list-item').forEach(item => {
    item.classList.remove('active');
    const link = item.querySelector('a');
    if (link) {
      link.removeAttribute('aria-current');
    }
  });
  
  const parentLi = element.closest('.video-list-item');
  parentLi.classList.add('active');
  element.setAttribute('aria-current', 'true');
  
  // Anunciar mudança para leitores de tela
  announceToScreenReader(`Vídeo alterado: ${videoTitle}`);
  
  // Focar no player (opcional, melhora navegação por teclado)
  player.focus();
}

/**
 * Função para alternar a descrição do vídeo (colapsável)
 */
function toggleDescription() {
  const content = document.getElementById('video-description-content');
  const toggle = document.getElementById('description-toggle');
  const icon = document.getElementById('toggle-icon');
  
  const isExpanded = content.classList.contains('expanded');
  
  if (isExpanded) {
    // Colapsar
    content.classList.remove('expanded');
    icon.classList.remove('expanded');
    toggle.setAttribute('aria-expanded', 'false');
    announceToScreenReader('Descrição do vídeo recolhida');
  } else {
    // Expandir
    content.classList.add('expanded');
    icon.classList.add('expanded');
    toggle.setAttribute('aria-expanded', 'true');
    announceToScreenReader('Descrição do vídeo expandida');
  }
}

/**
 * Função auxiliar para anunciar mudanças aos leitores de tela
 */
function announceToScreenReader(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.classList.add('sr-only');
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remover após 1 segundo
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// Adicionar suporte para navegação por teclado
document.addEventListener('DOMContentLoaded', function() {
  const videoLinks = document.querySelectorAll('.video-list-item a');
  
  videoLinks.forEach(link => {
    // Permitir ativação com Enter e Espaço
    link.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
  
  // Suporte para teclado no botão de descrição
  const descriptionToggle = document.getElementById('description-toggle');
  if (descriptionToggle) {
    descriptionToggle.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleDescription();
      }
    });
  }
});
</script>

