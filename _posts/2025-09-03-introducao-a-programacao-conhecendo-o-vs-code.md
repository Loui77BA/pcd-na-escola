---
layout: post
title: "Introdução à Programação: Conhecendo o VS Code"
description: "Esse artigo apresenta o Visual Studio Code (VS Code) em detalhes, incluindo instalação, uso com leitores de tela e navegação completa pelo editor, com foco específico na acessibilidade para pessoas com deficiência visual."
date: 2025-09-03 10:00:00 -0300
author: Louise Suelen
categories: ["Programação", "Dicas de tecnologia"]
tags: [programação, tecnologia]
permalink: /introducao-a-programacao-conhecendo-o-vs-code/
lang: pt-BR
sumario: |
    <ul class="list-group bg-dark">
        <!-- 1. Apresentação -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#apresentacao" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">1</span>
                Apresentação
            </a>
        </li>

        <!-- 2. O que faz o VS Code ser tão legal? -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#o-que-faz-o-vs-code-ser-tao-legal" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">2</span>
                O que faz o VS Code ser tão legal?
            </a>
        </li>

        <!-- 3. Por que o VS Code é excelente para começar a programar -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#por-que-o-vs-code-e-excelente-para-comecar" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">3</span>
                Por que o VS Code é excelente para começar a programar
            </a>
        </li>

        <!-- 4. Instalação do VS Code -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#instalacao-do-vs-code" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">4</span>
                Instalação do VS Code
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#windows" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.1</span>
                        Windows
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#linux" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.2</span>
                        Linux
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#macos" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.3</span>
                        macOS
                    </a>
                </li>
            </ul>
        </li>

        <!-- 5. VS Code com leitores de telas -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#vs-code-com-leitores-de-tela" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">5</span>
                VS Code com leitores de telas
            </a>
        </li>

        <!-- 6. Primeira vez abrindo o VS Code com NVDA -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#primeira-vez-abrindo-o-vs-code-com-nvda" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">6</span>
                Primeira vez abrindo o VS Code com NVDA
            </a>
        </li>

        <!-- 7. Navegação básica no VS Code com NVDA -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#navegacao-basica-no-vs-code-com-nvda" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">7</span>
                Navegação básica no VS Code com NVDA
            </a>
        </li>

        <!-- 8. Acessando menus no VS Code com NVDA -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#acessando-menus-no-vs-code-com-nvda" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">8</span>
                Acessando menus no VS Code com NVDA
            </a>
        </li>

        <!-- 9. Barra de Atividades -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#barra-atividades" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">9</span>
                Barra de Atividades
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#explorador-arquivos" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">9.1</span>
                        Explorador de arquivos
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#buscar" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">9.2</span>
                        Buscar
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#controle-versao-git" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">9.3</span>
                        Controle de Versão (Git)
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#debugging" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">9.4</span>
                        Depuração
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#extensoes" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">9.5</span>
                        Extensões
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#github-copilot" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">9.6</span>
                        GitHub Copilot (se disponível)
                    </a>
                </li>
            </ul>
        </li>

        <!-- 10. Principal marco -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#principal-marco" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">10</span>
                Principal marco
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#componentes-do-marco-principal" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">10.1</span>
                        Componentes do Marco Principal
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#navegacao-e-interacao-com-o-marco-principal" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">10.2</span>
                        Navegação e Interação com o Marco Principal
                    </a>
                </li>
            </ul>
        </li>

        <!-- 11. Barra de Status -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#barra-de-status" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">11</span>
                Barra de Status
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#componentes-da-barra-de-status" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">11.1</span>
                        Componentes da Barra de Status
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#navegacao-e-interacao-com-a-barra-de-status" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">11.2</span>
                        Navegação e Interação com a Barra de Status
                    </a>
                </li>
            </ul>
        </li>

        <!-- 12. Criando um novo arquivo no VS Code -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#criando-um-novo-arquivo-no-vs-code" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">12</span>
                Criando um novo arquivo no VS Code
            </a>
        </li>

        <!-- 13. Navegando pelo código-fonte com o NVDA -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#navegando-pelo-codigo-fonte-com-o-nvda" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">13</span>
                Navegando pelo código-fonte com o NVDA
            </a>
        </li>

        <!-- 14. Terminais integrados -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#terminais-integrados" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">14</span>
                Terminais integrados
            </a>
        </li>

        <!-- 15. Extensões -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#extensoes" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">15</span>
                Extensões
            </a>
        </li>

        <!-- 16. Resumo -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#resumo" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">16</span>
                Resumo
            </a>
        </li>
    </ul>
---

Este artigo apresenta o Visual Studio Code (VS Code) em detalhes, incluindo instalação, uso com leitores de tela e navegação completa pelo editor, com foco específico na acessibilidade para pessoas com deficiência.

<div class="text-center">
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/1d2728c4-57cd-41b1-b6d6-b235849cab00/public" aria-hidden="true" class="img-fluid">
</div>

## Apresentação {#apresentacao}
---

Neste artigo, vamos conhecer em detalhes o Visual Studio Code, um editor de código que se tornou uma ferramenta essencial para pessoas programadoras de todos os níveis. Se você está começando a programar agora ou já tem alguma experiência, este texto vai te ajudar a entender como o VS Code funciona e como ele pode ser usado por pessoas com deficiência visual, sobretudo as que utilizam leitores de tela como o NVDA.

Serão explorados tópicos como a instalação do VS Code em diferentes sistemas operacionais (Windows, Linux e macOS), a navegação básica pelo editor utilizando o NVDA, e uma visão geral dos principais componentes do VS Code, incluindo a Barra de Atividades, o Marco Principal e a Barra de Status.

A ideia é que ao final do artigo a pessoa seja capaz de trabalhar com o VS Code para iniciar seus projetos de programação, aproveitando todos os recursos que o editor oferece. Além disso, pretende-se mostrar como o VS Code pode ser uma ferramenta acessível e eficiente para pessoas com deficiência visual também começarem a programar.

## O que faz o VS Code ser tão legal? {#o-que-faz-o-vs-code-ser-tao-legal}
---

O Visual Studio Code, ou VS Code para abreviar, é um programa criado pela Microsoft em 2015 para escrever códigos. Ele ficou muito famoso e virou o favorito de desenvolvedores do mundo inteiro, principalmente porque é fácil de usar e tem muitos benefícios.

Alguns desses benefícios são:

- **Grátis e aberto:** Você pode usar o VS Code sem pagar nada, seja para estudar ou trabalhar. O código do programa também está disponível para qualquer um ver e ajudar a melhorar. 
- **Funciona em qualquer computador:** Dá para instalar no Windows, Mac ou Linux e ele vai funcionar igual em todos.
- **Tem muitas extensões:** Você pode adicionar várias ferramentas e funções ao VS Code, como novos temas, suporte para outras linguagens e recursos extras, tudo pegando direto de uma loja de extensões. 
- **Trabalha junto com o Git:** Fica fácil mexer com versões do seu código, ver o que mudou e usar comandos do Git sem sair do editor. 
- **Terminal dentro do editor:** Você pode abrir uma janela de terminal no próprio VS Code, facilitando ainda mais o trabalho sem precisar ficar trocando de programa.
- **Depuração fácil:** É fácil encontrar e corrigir erros no código, muitas vezes só instalando uma extensão.
- **Acessível:** O VS Code possui uma boa acessibilidade, funcionando bem com leitores de tela como NVDA, VoiceOver e Orca, o que é ótimo para pessoas com deficiência visual.

## Por que o VS Code é excelente para começar a programar {#por-que-o-vs-code-e-excelente-para-comecar}
---

- **Fácil de usar:** A tela do programa é simples e fácil de entender, então quem está começando não fica perdido. Tem muita gente usando e vários tutoriais em português que ajudam quando você tem dúvidas.
- **Acompanha seu progresso:** Dá para começar usando só o básico. Quando aprender mais, pode instalar coisas novas e deixar o programa ainda melhor, sem precisar trocar de editor depois que ficar mais experiente.
- **Usado em empresas:** O VS Code não serve só para aprender. Muitas empresas grandes também usam ele no trabalho. 
- **Funciona com várias linguagens:** Seja qual for a linguagem que você escolher, como Python, JavaScript, Java, C++, Go e outras, o VS Code tem opções para te ajudar. Não precisa mudar de programa cada vez que aprender algo novo.
- **Roda em quase todo computador:** Você não precisa de um computador super moderno ou potente para usar o VS Code. Ele é leve e não pesa no seu PC, claro que se você instalar muitas extensões ele pode ficar mais pesado, mas ainda assim funciona bem na maioria dos computadores em projetos simples e médios.

## Instalação do VS Code {#instalacao-do-vs-code}
---

A instalação do VS Code é simples e rápida. Você pode baixar o programa diretamente do site oficial: [https://code.visualstudio.com/](https://code.visualstudio.com/).

### Windows {#windows}
---

Depois de baixar o programa, abra a pasta onde ficam seus downloads usando o Explorador de Arquivos do computador. Lá, procure pelo arquivo de instalação, que normalmente tem um nome parecido com "VSCodeSetup-x64-1.61.2.exe" (o número pode ser diferente).

**Para instalar, siga estes passos:**

<ul>
    <li>
        Abrir o instalador: Clique com o botão direito do mouse no arquivo ou pressione <kbd>Shift</kbd> + <kbd>F10</kbd>. No menu que aparecer, escolha a opção "Executar como administrador" e pressione <kbd>Enter</kbd>.
    </li>
    <li>
        Use as teclas <kbd>Alt</kbd> + <kbd>N</kbd> para ir para a próxima etapa e siga as instruções que aparecem na tela.
    </li>
    <li>
        Quando aparecer os termos de uso, pressione <kbd>Alt</kbd> + <kbd>A</kbd> para aceitar.
    </li>
    <li>
        Pressione <kbd>Alt</kbd> + <kbd>N</kbd> novamente para continuar.
    </li>
    <li>
        Para começar a instalar, pressione <kbd>Alt</kbd> + <kbd>I</kbd>.
    </li>
</ul>

Quando acabar a instalação, o Visual Studio Code vai aparecer no menu Iniciar do computador, e também vai ter um ícone na área de trabalho. Para abrir, aperte a tecla <kbd>Windows</kbd>, digite "Visual Studio Code" e pressione <kbd>Enter</kbd>.

### Linux {#linux}
---

No Ubuntu e outras distribuições baseadas em Debian, você pode instalar o VS Code de duas formas: usando o gerenciador de pacotes Snap ou baixando o pacote <code class="text-white-50">.deb</code> diretamente do site.

#### Opção 1: Instalação via Snap (mais simples)

Abra o terminal pressionando <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> e digite o seguinte comando:

```bash
sudo snap install code --classic
```
{: .bg-dark .text-light .p-3}

Digite sua senha quando solicitado e pressione <kbd>Enter</kbd>. Aguarde a instalação terminar.

#### Opção 2: Instalação via pacote .deb

**Para instalar, siga estes passos:**

<ol class="list-group-numbered">
    <li class="mb-3">
        Baixe o arquivo <code class="text-white-50">.deb</code> do site oficial: 
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">https://code.visualstudio.com/</a>
    </li>
    
    <li class="mb-3">
        Abra o terminal na pasta de Downloads:
        <ul>
            <li>Pressione <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> para abrir o terminal</li>
            <li>Digite o comando abaixo para ir até a pasta de Downloads e pressione <kbd>Enter</kbd>:</li>
        </ul>

        <div class="bg-dark text-light p-3 my-2">
            <code class="text-white">cd ~/Downloads</code>
        </div>
    </li>
    
    <li class="mb-3">
        Instale o pacote com o comando:
        <div class="bg-dark text-light p-3 my-2">
            <code class="text-white">sudo dpkg -i code_*.deb</code>
        </div>
        <small class="text-white">Esse comando vai funcionar para qualquer versão do VS Code, pois usa o caractere curinga * no nome do arquivo.</small>
    </li>
    
    <li class="mb-3">
        Se aparecer algum erro de dependências, execute:
        <div class="bg-dark text-light p-3 my-2">
            <code class="text-white">sudo apt install -f</code>
        </div>
        <small class="text-white">Esse comando instala as dependências que faltam para o VS Code funcionar corretamente.</small>
    </li>
</ol>

<div class="mt-4">
    <strong>Para abrir o VS Code:</strong>
    <ul>
        <li class="mb-2">
            Pressione a tecla <kbd>Super</kbd> (tecla do Windows), digite "Visual Studio Code" ou "Code" e pressione <kbd>Enter</kbd>
        </li>
        <li class="mb-2">
            Ou abra o terminal e digite <code class="text-white-50">code .</code> e pressione <kbd>Enter</kbd>
        </li>
        <li class="mb-2">
            <strong>Dica:</strong> Se  você navegar até a pasta do seu projeto no terminal com o comando <code class="text-white-50">cd nome-da-pasta</code>, ao digitar <code class="text-white-50">code .</code> o VS Code vai abrir diretamente nessa pasta do projeto.
        </li>
    </ul>
</div>

### macOS {#macos}
---

**Para instalar com o VoiceOver, siga estes passos:**

1. Baixe o arquivo <code class="text-white-50">.zip</code> do site oficial: <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">https://code.visualstudio.com/</a> usando o Safari com VoiceOver ativado (<kbd>Command</kbd> + <kbd>F5</kbd>).
2. Após o download ser concluído, o VoiceOver anunciará o término do download. Pressione <kbd>Command</kbd> + <kbd>Option</kbd> + <kbd>L</kbd> para ir até a lista de marcadores do VoiceOver e encontre o item "Downloads".
3. Vamos abrir a pasta Downloads. Primeiro, aperte <kbd>Command</kbd> + <kbd>Option</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd> para abrir o menu do aplicativo. Você vai ouvir "Menu Barra". Agora, aperte a tecla de seta para baixo várias vezes até o VoiceOver dizer "Ir Para". Quando ouvir "Ir Para", aperte a tecla de seta para direita uma vez para abrir o submenu. Depois, continue apertando a tecla de seta para baixo até ouvir "Downloads". Quando ouvir "Downloads", aperte a tecla <kbd>Enter</kbd> e a pasta de Downloads vai abrir.
4. Com o VoiceOver ativado, use <kbd>Command</kbd> + <kbd>Option</kbd> + setas direcionais para navegar pela lista de arquivos até localizar o arquivo <code class="text-white-50">VSCode-darwin-universal.zip</code>.
5. Para descompactar o arquivo, pressione <kbd>Command</kbd> + <kbd>Option</kbd> + <kbd>Espaço</kbd> para ativar a ação padrão (equivalente ao clique duplo), e o arquivo será descompactado automaticamente no mesmo diretório.
6. Após a descompactação, o VoiceOver anunciará o novo item "Visual Studio Code". Para movê-lo para a pasta Aplicativos:
   - Com o item selecionado, pressione <kbd>Command</kbd> + <kbd>C</kbd> para copiá-lo
   - Pressione <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd> para abrir a pasta Aplicativos
   - Pressione <kbd>Command</kbd> + <kbd>V</kbd> para colar
   - Alternativamente, você pode usar a opção de cópia/movimentação no menu de contexto pressionando <kbd>Command</kbd> + <kbd>Option</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd> e depois selecionar "Copiar item" com as setas e <kbd>Enter</kbd>

**Para abrir o VS Code com VoiceOver:**
- Pressione <kbd>Command</kbd> + <kbd>Espaço</kbd> para abrir o Spotlight
- Digite "Visual Studio Code" e pressione <kbd>Enter</kbd> quando ouvir o VoiceOver anunciar o aplicativo
- Ou abra a pasta Aplicativos pressionando <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd> e navegue com <kbd>Command</kbd> + <kbd>Option</kbd> + setas até ouvir "Visual Studio Code", então pressione <kbd>Command</kbd> + <kbd>Option</kbd> + <kbd>Espaço</kbd> para abri-lo

**Dica:** Na primeira vez que abrir, o macOS pode mostrar um aviso de segurança. Quando o VoiceOver anunciar este aviso:
1. Navegue até o botão "Abrir Mesmo Assim" usando <kbd>Command</kbd> + <kbd>Option</kbd> + setas
2. Pressione <kbd>Command</kbd> + <kbd>Option</kbd> + <kbd>Espaço</kbd> para ativá-lo
3. Na janela de confirmação, navegue até o botão "Abrir" e pressione <kbd>Command</kbd> + <kbd>Option</kbd> + <kbd>Espaço</kbd> novamente

#### Instalação via Homebrew (opcional)

Se você já usa o Homebrew (um programa de linha de comando que auxilia na instalação de outros programas no Mac via terminal), pode instalar o VS Code de um jeito mais simples:

1. Primeiro, abra o Terminal no seu Mac. Você pode fazer isso pelo Spotlight: aperte <kbd>Command</kbd> + <kbd>Espaço</kbd> e digite "Terminal".

2. Quando o Terminal abrir, digite ou cole este comando:

```bash
brew install visual-studio-code
```
{: .bg-dark .text-light .p-3}

3. Aperte <kbd>Enter</kbd> e aguarde a instalação terminar. O Homebrew vai fazer todo o trabalho de baixar e instalar o VS Code para você automaticamente.

## VS Code com leitores de telas {#vs-code-com-leitores-de-tela}
---

O VS Code funciona bem com softwares leitores de tela, que são tecnologias assistivas para tornar possível o acesso ao computador por pessoas cegas ou com baixa visão.

Existem diferentes leitores de tela para cada tipo de sistema operacional:
- **NVDA**: funciona no Windows e é gratuito
- **VoiceOver**: já vem instalado nos computadores da Apple com macOS
- **Orca**: funciona em computadores com Linux na interface gráfica GNOME

Cada leitor de telas além de estar sujeito as características do sistema operacional no qual funciona, também tem suas particularidades. Cada um vai ter comandos diferentes para navegar e interagir com o VS Code, mas a interação deles com o editor existe, não é um software inacessível.

Neste artigo, vamos mostrar como usar o VS Code com o NVDA no Windows, pois essa é uma combinação muito comum e gratuita, além disso, essa é uma decisão tomada para que o texto não fique grande demais. Se você usa Mac ou Linux, muitas das dicas são parecidas, mas alguns comandos podem ser diferentes.

Futuramente pretendemos criar artigos específicos para o uso do VS Code com VoiceOver no macOS e Orca no Linux, mas enquanto isso, a dica é observar as instruções deste artigo para o NVDA e buscar os comandos equivalentes no seu leitor de telas e sistema operacional.

## Primeira vez abrindo o VS Code com NVDA {#primeira-vez-abrindo-o-vs-code-com-nvda}
---

Assim como acontece no Windows, aqui você também navega usando principalmente o teclado, em vez do mouse. No começo, isso pode parecer um pouco difícil, mas, com o tempo e a prática, fica mais fácil e rápido de usar. 

É bom ter uma noção básica de como o NVDA funciona e já ter usado esse leitor de tela no Windows, de preferência na versão 11, para conseguir aproveitar melhor o programa. 

- Ao abrir o programa pela primeira vez, pode ser exibida uma tela de boas-vindas ou de notas sobre atualizações.
- Para fechar a tela de boas-vindas:
  - Pressione <kbd>Ctrl</kbd> + <kbd>W</kbd> para fechar a guia atual.
  - Para saber se a guia foi fechada, pressione <kbd>Insert</kbd> + <kbd>Tab</kbd>. Se o NVDA falar <em>"grupo 1 do editor vazio seção com foco"</em>, isso quer dizer que não tem mais nenhuma aba aberta.
- Se quiser explorar (conhecer) a tela de boas-vindas, use as setas do teclado para navegar pelas opções, <kbd>Enter</kbd> para selecionar algum link ou botão, e <kbd>Tab</kbd> para ir para o próximo elemento interativo (como botões, links, campos de texto).

## Navegação básica no VS Code com NVDA {#navegacao-basica-no-vs-code-com-nvda}
---

Diferente de quem enxerga e já vê o programa todo de uma vez, a pessoa cega que usa leitor de tela acessa o programa por partes. Ela só consegue ouvir uma parte de cada vez, porque ouvir é sempre em sequência, diferente da visão, que mostra tudo ao mesmo tempo em lugares diferentes da tela. 

O VS Code tem partes diferentes que ajudam a organizar a tela: 

- **Barra de Atividades:** Fica do lado esquerdo da tela e tem ícones para acessar coisas como arquivos, busca (onde você pode procurar texto dentro dos arquivos), controle de versão (git), extensões (que você pode instalar para adicionar funcionalidades ao VS Code) e mais.
- **Marco Principal:** É a área maior do editor e fica no meio da tela onde você escreve e faz a leitura do código. Pode ter várias abas abertas aqui (essas abas também podem ser chamadas de guias), cada uma com um arquivo diferente.
- **Barra de Status:** Fica na parte de baixo da tela e mostra informações importantes, como a linguagem do código que você está escrevendo, se tem algum erro, o número da linha onde você está, entre outras coisas.

Para navegar entre essas partes com o NVDA, você pode usar as seguintes teclas:

- Pressione <kbd>F6</kbd> para ir para a próxima área (Barra de Atividades, Marco Principal, Barra de Status). A cada vez que você aperta <kbd>F6</kbd>, o foco (a parte que você está ouvindo) muda para a próxima área.
  - **Barra de Status:** O NVDA dirá <em>"Barra de Status nenhum problema botão"</em> se não houver problemas no código e se não tiver nenhuma notificação para ser lida.
  - **Barra de Atividades:** O NVDA dirá <em>"seletor de exibição ativo guia"</em> quando o foco estiver na Barra de Atividades.
  - **Marco Principal:** O NVDA dirá <em>"principal marco 1 de grupo do editor vazio seção"</em> isso indica que você está na área onde escreve o código e que não tem nenhuma aba aberta no momento. Se tiver uma aba aberta, o NVDA dirá o nome do arquivo que está aberto.

Mais informações sobre essas partes e dicas de como passar por elas vão ser explicadas nas próximas seções deste texto.

## Acessando menus no VS Code com NVDA {#acessando-menus-no-vs-code-com-nvda}
---

No topo do VS Code está a barra de menus, acessível por teclado através da tecla <kbd>Alt</kbd>.

Observação: As opções do menu estão escritas do jeito que o NVDA fala. Ele informa o nome da opção, a tecla de atalho (se houver) para acessá-la e a sua posição no menu (por exemplo, "1 de 8" significa que é a primeira de oito opções disponíveis).

Dito isso, as opções do menu são:

-  **Arquivo** submenu (<kbd>Alt</kbd> + <kbd>A</kbd>) 1 de 8
-  **Editar** submenu (<kbd>Alt</kbd> + <kbd>D</kbd>) 2 de 8
-  **Seleção** submenu (<kbd>Alt</kbd> + <kbd>S</kbd>) 3 de 8
-  **Ver** submenu (<kbd>Alt</kbd> + <kbd>V</kbd>) 4 de 8
-  **Acessar** submenu (<kbd>Alt</kbd> + <kbd>C</kbd>) 5 de 8
-  **Executar** submenu (<kbd>Alt</kbd> + <kbd>E</kbd>) 6 de 8
-  **Terminal** submenu (<kbd>Alt</kbd> + <kbd>T</kbd>) 7 de 8
-  **Ajuda** submenu (<kbd>Alt</kbd> + <kbd>J</kbd>) 8 de 8

<div class="text-center">
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/d943e48c-cf94-4ce4-4d14-0953dc999d00/public" aria-hidden="true" class="img-fluid">
</div>

A navegação entre opções pode ser feita pelas setas direcionais esquerda e direita, ou através das teclas de atalho, como <kbd>Alt</kbd> + <kbd>A</kbd> para o submenu Arquivo.

<div class="accordion accordion-flush" id="accordionMenuVSCode">
  <div class="accordion-item bg-transparent border-0">
    <h2 class="accordion-header" id="flush-headingArquivo">
      <button class="accordion-button collapsed bg-dark text-white border border-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseArquivo" aria-expanded="false" aria-controls="flush-collapseArquivo">
        Arquivo
      </button>
    </h2>
    <div id="flush-collapseArquivo" class="accordion-collapse collapse" aria-labelledby="flush-headingArquivo" data-bs-parent="#accordionMenuVSCode">
      <div class="accordion-body text-white">
        <div class="text-center">
            <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/c925aa94-b3fc-49f0-f3eb-ff76d8b13700/public" aria-hidden="true" class="img-fluid">
        </div>

        <ol>
            <li class="mb-4">
                <strong>
                    Novo Arquivo de Texto (<kbd>Ctrl</kbd> + <kbd>N</kbd>) 1 de 22:
                </strong>
                <br>
                Abre um novo arquivo de texto no editor de código.
            </li>
            <li class="mb-4">
                <strong>
                    Novo Arquivo (<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Windows</kbd> + <kbd>N</kbd>) 2 de 22:
                </strong>
                <br>
                Abre um novo arquivo no editor de código, não necessariamente de texto.
            </li>
            <li class="mb-4">
                <strong>
                    Nova Janela (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd>) 3 de 22:
                </strong>
                <br>
                Abre uma nova janela do Visual Studio Code.
            </li>
            <li class="mb-4">
                <strong>
                    Nova Janela com Perfil submenu 4 de 22:
                </strong>
                <br>
                Abre uma nova janela do Visual Studio Code com um perfil específico. O
                perfil é uma configuração personalizada do VS Code que permite ter
                várias janelas do VS Code com diferentes configurações. Você pode ter um
                perfil para desenvolvimento web, outro para desenvolvimento mobile,
                outro para desenvolvimento de jogos, etc. Essa opção abre um submenu com
                as opções de perfis disponíveis. Se não existir nenhum perfil criado, ao
                pressionar seta para a direita nessa opção o NVDA dirá "novo perfil 1 de
                1" e você poderá criar um novo perfil caso deseje. Se não quiser criar
                um novo perfil, pressione a seta para a esquerda e o NVDA dirá "nova
                janela com perfil submenu 4 de 22". Então você poderá continuar
                navegando pelas opções do submenu de Arquivo com a seta para baixo.
            </li>
            <li class="mb-4">
                <strong>
                    Abrir o Arquivo... (<kbd>Ctrl</kbd> + <kbd>O</kbd>) 5 de 22:
                </strong>
                <br>
                Abre um arquivo existente no editor de código.
            </li>
            <li class="mb-4">
                <strong>
                    Abrir Pasta... (<kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>Ctrl</kbd> + <kbd>O</kbd>) 6 de 22:
                </strong>
                <br>
                Abre uma pasta no explorador de arquivos. Observação: a forma de
                pressionar atalhos como <kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>Ctrl</kbd> + <kbd>O</kbd> é pressionar a primeira tecla
                no caso o <kbd>Ctrl</kbd> e em seguida pressionar a segunda tecla no caso o <kbd>K</kbd> e em
                seguida a terceira tecla no caso <kbd>O</kbd>.
            </li>
            <li class="mb-4">
                <strong>
                    Abrir Workspace a partir do Arquivo... 7 de 22:
                </strong>
                <br>
                Abre um workspace (espaço de trabalho) a partir de um arquivo, isso quer
                dizer que você pode abrir um arquivo e transformá-lo em um workspace. Um
                workspace é um conjunto de arquivos e pastas que você pode abrir e
                editar no VS Code. Por exemplo, você pode ter um workspace para um
                projeto de site, outro para um projeto de aplicativo, outro para um
                projeto de jogo, etc.
            </li>
            <li class="mb-4">
                <strong>
                    Abrir Recente submenu 8 de 22:
                </strong>
                <br>
                Abre um submenu com os arquivos e pastas abertos recentemente no VS
                Code. Para acessar o submenu Abrir Recente, pressione a seta para a
                direita e o NVDA dirá "Reabrir o editor fechado (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd>) 1 de
                7". Isso significa que a primeira opção do submenu Abrir Recente é
                Reabrir o editor fechado, ou seja, reabrir o último arquivo fechado no
                VS Code. As outras opções do submenu Abrir Recente são outros arquivos e
                pastas abertos recentemente no editor de código e a última opção é
                "Limpar recentemente aberto" que limpa a lista de arquivos e pastas
                abertos recentemente. Se você pressionar a seta para baixo, o NVDA irá
                se mover para a próxima opção do submenu Abrir Recente até chegar na
                última opção. Se você pressionar a seta para a esquerda, o NVDA irá se
                mover de volta para as opções do menu Arquivo com o foco em "Abrir
                Recente submenu 8 de 22".
            </li>
            <li class="mb-4">
                <strong>
                    Adicionar Pasta ao Workspace... 9 de 22:
                </strong>
                <br>
                Adiciona uma pasta ao workspace. Isso quer dizer que você pode adicionar
                uma pasta ao workspace para que ela seja exibida no explorador de
                arquivos e você possa acessar os arquivos e pastas dessa pasta no VS
                Code.
            </li>
            <li class="mb-4">
                <strong>
                    Salvar Workspace como... 10 de 22:
                </strong>
                <br>
                Salva o workspace atual como um novo workspace. Isso quer dizer que você
                pode salvar o workspace atual com um novo nome e em um novo local.
            </li>
            <li class="mb-4">
                <strong>
                    Duplique Espaço de Trabalho 11 de 22:
                </strong>
                <br>
                Duplica o workspace atual. Isso quer dizer que você pode duplicar o
                workspace atual e trabalhar em uma cópia do workspace. Isso seria útil
                se você quisesse fazer alterações no workspace sem afetar o original.
            </li>
            <li class="mb-4">
                <strong>
                    Salvar (<kbd>Ctrl</kbd> + <kbd>S</kbd>) 12 de 22:
                </strong>
                <br>
                Salva o arquivo atual. Isso quer dizer que você pode salvar as
                alterações feitas no arquivo atual.
            </li>
            <li class="mb-4">
                <strong>
                    Salvar Como... (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>) 13 de 22:
                </strong>
                <br>
                Salva o arquivo atual com um novo nome e em um novo local. Isso quer
                dizer que você pode salvar o arquivo atual com um nome diferente e em
                uma pasta diferente ou até mesmo em um novo formato.
            </li>
            <li class="mb-4">
                <strong>
                    Salvar Tudo (<kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>S</kbd>) 14 de 22:
                </strong>
                <br>
                Salva todos os arquivos abertos no editor de código. Isso quer dizer que
                você pode salvar todas as alterações feitas nos arquivos abertos de uma
                só vez. Isso é útil quando você tem vários arquivos abertos e deseja
                salvar as alterações em todos eles.
            </li>
            <li class="mb-4">
                <strong>
                    Compartilhar submenu 15 de 22:
                </strong>
                <br>
                Abre um submenu com opções para compartilhar, nesse submenu você pode
                exportar o perfil atual de configurações do VS Code e na segunda opção
                pode importar um perfil de configurações do VS Code.
            </li>
            <li class="mb-4">
                <strong>
                    Salvamento Automático não marcado 16 de 22:
                </strong>
                <br>
                Marca o salvamento automático do arquivo atual. Isso quer dizer que você
                pode ativar o salvamento automático para que o arquivo seja salvo
                automaticamente a cada alteração feita. Isso é útil para evitar a perda
                de dados em caso de falha de energia ou travamento do computador.
            </li>
            <li class="mb-4">
                <strong>
                    Preferências submenu 17 de 22:
                </strong>
                <br>
                Abre um submenu com opções de preferências do VS Code. Esse submenu pode
                ser acessado pressionando a seta para a direita na opção Preferências.
                As opções do submenu Preferências são:
                <ul>
                    <li class="mb-4">
                        <strong>
                            Perfil (Padrão) submenu 1 de 9:
                        </strong>
                        <br>
                        Abre um submenu com opções de perfis de configurações do VS
                        Code. O VS Code possui um perfil padrão que é o perfil de
                        configurações padrão do editor de código. Nesse submenu você
                        pode criar um novo perfil, editar um perfil existente, excluir
                        um perfil, definir um perfil como padrão, importar um perfil,
                        exportar um perfil, redefinir um perfil, redefinir todas as
                        configurações e abrir o arquivo de configurações do perfil.
                    </li>
                    <li class="mb-4">
                        <strong>
                            Configurações (<kbd>Ctrl</kbd> + <kbd>,</kbd>) 2 de 9:
                        </strong>
                        <br>
                        Abre o arquivo de configurações do VS Code. Nesse arquivo você
                        pode definir as configurações do editor de código, como a cor do
                        tema, o tamanho da fonte, a indentação, a codificação,
                        preferências de acessibilidade etc.
                    </li>
                    <li class="mb-4">
                        <strong>
                            Extensões (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd>) 3 de 9:
                        </strong>
                        <br>
                        Abre a guia de extensões do VS Code. Nessa guia você pode buscar
                        e instalar extensões para o editor de código, como temas,
                        snippets, linters, debuggers, entre outras.
                    </li>
                    <li class="mb-4">
                        <strong>
                            Atalhos de Teclado (<kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>Ctrl</kbd> + <kbd>S</kbd>) 4 de 9:
                        </strong>
                        <br>
                        Abre a lista de atalhos de teclado do VS Code. Nessa lista você
                        pode ver todos os atalhos de teclado disponíveis no editor de
                        código e também pode pesquisar por atalhos específicos. Isso é
                        útil para memorizar os atalhos de teclado mais utilizados e para
                        se tornar mais produtivo no VS Code.
                    </li>
                    <li class="mb-4">
                        <strong>
                            Configurar snippets 5 de 9:
                        </strong>
                        <br>
                        Serve para configurar snippets no VS Code. Snippets são pedaços
                        de código que podem ser inseridos no editor de código com um
                        atalho de teclado. Por exemplo, você pode criar um snippet para
                        inserir um bloco de código HTML, um bloco de código CSS, um
                        bloco de código JavaScript, etc. Isso é útil para economizar
                        tempo e digitar menos código manualmente.
                    </li>
                    <li class="mb-4">
                        <strong>
                            Tarefas 6 de 9:
                        </strong>
                        <br>
                        Abre a lista de tarefas do VS Code. Nessa lista você pode criar
                        e gerenciar tarefas, como a execução de scripts, a compilação de
                        código, a execução de testes, entre outras. Isso é útil para
                        automatizar tarefas repetitivas e para aumentar a produtividade
                        no VS Code.
                    </li>
                    <li class="mb-4">
                        <strong>
                            Temas submenu 7 de 9:
                        </strong>
                        <br>
                        Abre um submenu com opções de temas do VS Code. Nesse submenu
                        você pode escolher tema de cores (<kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>Ctrl</kbd> + <kbd>T</kbd>), tema de
                        ícone de arquivo e tema do ícone do produto. O tema de cores é a
                        cor do editor de código (é aqui que você pode escolher um tema
                        de alto contraste, Dark, Light, etc), o tema de ícone de arquivo
                        é o ícone
                        que é exibido ao lado do nome do arquivo no explorador de
                        arquivos e o tema do ícone do produto é o ícone do VS Code que é
                        exibido na barra de tarefas do Windows.
                    </li>
                    <li class="mb-4">
                        <strong>
                            Configurações de Backup e Sincronização 8 de 9:
                        </strong>
                        <br>
                        Abre as configurações de backup e sincronização do VS Code.
                        Nesse menu você pode configurar o backup e a sincronização das
                        configurações do VS Code. Isso é útil para manter as
                        configurações do editor de código sincronizadas entre diferentes
                        computadores e para fazer backup das configurações em caso de
                        perda de dados.
                    </li>
                    <li class="mb-4">
                        <strong>
                            Configurações de Serviços Online 9 de 9:
                        </strong>
                        <br>
                        Abre as configurações de serviços online do VS Code. Nesse menu
                        você pode configurar os serviços online do VS Code, como a
                        integração com o GitHub, o Azure, o Docker, entre outros. Isso é
                        útil para integrar o VS Code com serviços online e para
                        facilitar o desenvolvimento de aplicativos e sites.
                    </li>
                </ul>
            </li>
            <li class="mb-4">
                <strong>
                    Reverter Arquivo 18 de 22:
                </strong>
                <br>
                Reverte o arquivo atual para a última versão salva. Isso quer dizer que
                se você fez alterações no arquivo e não quer salvá-las, você pode
                reverter o arquivo para a última versão salva.
            </li>
            <li class="mb-4">
                <strong>
                    Fechar o Editor (<kbd>Ctrl</kbd> + <kbd>F4</kbd>) 19 de 22:
                </strong>
                <br>
                Fecha o editor de código. Isso quer dizer que você pode fechar o arquivo
                e o editor de código.
            </li>
            <li class="mb-4">
                <strong>
                    Fechar Pasta (<kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>F</kbd>) 20 de 22:
                </strong>
                <br>
                Fecha a pasta aberta no explorador de arquivos. Isso quer dizer que você
                pode fechar a pasta e o explorador de arquivos.
            </li>
            <li class="mb-4">
                <strong>
                    Fechar Janela (<kbd>Alt</kbd> + <kbd>F4</kbd>) 21 de 22:
                </strong>
                <br>
                Fecha a janela do Visual Studio Code. Isso quer dizer que você pode
                fechar a janela do VS Code.
            </li>
            <li class="mb-4">
                <strong>
                    Sair 22 de 22:
                </strong>
                <br>
                Fecha o Visual Studio Code.
            </li>
        </ol>
        <p class="mb-4">
            Para sair do submenu Arquivo, pressione a tecla <kbd>Esc</kbd> e o
            NVDA
            dirá "Arquivo submenu (<kbd>Alt</kbd> + <kbd>A</kbd>) 1 de 8" isso significa que o foco voltou
            para
            o menu Arquivo e você pode continuar navegando pelas opções do menu com a
            seta para a direita.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item bg-transparent border-0">
    <h2 class="accordion-header" id="flush-headingEditar">
      <button class="accordion-button collapsed bg-dark text-white border border-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEditar" aria-expanded="false" aria-controls="flush-collapseEditar">
        Editar
      </button>
    </h2>
    <div id="flush-collapseEditar" class="accordion-collapse collapse" aria-labelledby="flush-headingEditar" data-bs-parent="#accordionMenuVSCode">
      <div class="accordion-body text-white">
        <div class="text-center">
            <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/1b63192e-efa6-497c-02dc-bc9f18e58c00/public" aria-hidden="true" class="img-fluid">
        </div>

        <ol>
            <li class="mb-4">
                <strong>
                    Desfazer (<kbd>Ctrl</kbd> + <kbd>Z</kbd>) 1 de 12:
                </strong>
                <br>
                Reverte a última ação realizada no editor de código. Por exemplo se você
                deletou um bloco de código e quer recuperá-lo, você pode pressionar <kbd>Ctrl</kbd>
                + <kbd>Z</kbd> para desfazer a ação.
            </li>
            <li class="mb-4">
                <strong>
                    Refazer (<kbd>Ctrl</kbd> + <kbd>Y</kbd>) 2 de 12:
                </strong>
                <br>
                Refaz a última ação desfeita no editor de código. Por exemplo se você se
                arrependeu de desfazer uma ação, você pode pressionar <kbd>Ctrl</kbd> + <kbd>Y</kbd> para
                refazer a ação.
            </li>
            <li class="mb-4">
                <strong>
                    Recortar (<kbd>Ctrl</kbd> + <kbd>X</kbd>) 3 de 12:
                </strong>
                <br>
                Recorta o texto selecionado no editor de código e o coloca na área de
                transferência.
            </li>
            <li class="mb-4">
                <strong>
                    Copiar (<kbd>Ctrl</kbd> + <kbd>C</kbd>) 4 de 12:
                </strong>
                <br>
                Copia o texto selecionado no editor de código e o coloca na área de
                transferência.
            </li>
            <li class="mb-4">
                <strong>
                    Colar (<kbd>Ctrl</kbd> + <kbd>V</kbd>) 5 de 12:
                </strong>
                <br>
                Cola o conteúdo da área de transferência na posição do cursor dentro do
                editor de código.
            </li>
            <li class="mb-4">
                <strong>
                    Localizar (<kbd>Ctrl</kbd> + <kbd>F</kbd>) 6 de 12:
                </strong>
                <br>
                Abre a caixa de diálogo de localizar no editor de código. Nessa caixa de
                diálogo você pode buscar por um texto específico no arquivo.
            </li>
            <li class="mb-4">
                <strong>
                    Substituir (<kbd>Ctrl</kbd> + <kbd>H</kbd>) 7 de 12:
                </strong>
                <br>
                Abre a caixa de diálogo de substituir no editor de código. Nessa caixa
                de
                diálogo você pode substituir um texto específico por outro no arquivo
                atual.
            </li>
            <li class="mb-4">
                <strong>
                    Localizar nos Arquivos... (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>) 8 de 12:
                </strong>
                <br>
                Abre a busca global no VS Code, permitindo localizar texto em todos os
                arquivos do projeto.
            </li>
            <li class="mb-4">
                <strong>
                    Substituir nos Arquivos... (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd>) 9 de 12:
                </strong>
                <br>
                Abre a barra de busca e substituição global, permitindo localizar e
                substituir texto em todos os arquivos do projeto. Isso é útil para fazer
                a mesma alteração em vários arquivos ao mesmo tempo.
            </li>
            <li class="mb-4">
                <strong>
                    Ativar/Desativar o Comentário de Linha (<kbd>Ctrl</kbd> + <kbd>;</kbd>) 10 de 12:
                </strong>
                <br>
                Comenta ou descomenta a linha atual no editor de código. Isso é útil
                para adicionar comentários ao código e para desativar temporariamente
                uma linha de código.
            </li>
            <li class="mb-4">
                <strong>
                    Ativar/Desativar o Comentário de Bloco (<kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>A</kbd>) 11 de 12:
                </strong>
                <br>
                Comenta ou descomenta o bloco de código selecionado no editor de código.
                Isso é útil para adicionar comentários a um bloco de código e para
                desativar temporariamente um bloco de código.
            </li>
            <li class="mb-4">
                <strong>
                    Emmet: Expandir Abreviação (<kbd>Tab</kbd>) 12 de 12:
                </strong>
                <br>
                Expande a abreviação do Emmet no editor de código. O Emmet é um conjunto
                de abreviações que permitem escrever código HTML e CSS de forma mais
                rápida e eficiente. Por exemplo, você pode digitar "html:5" e pressionar
                <kbd>Tab</kbd> para expandir a abreviação em um esqueleto de documento HTML5. Isso
                é útil para escrever código HTML e CSS mais rapidamente.
            </li>
        </ol>

        <p class="mb-4">
            Para sair do submenu "Editar", pressione a tecla <kbd>Esc</kbd>, e o NVDA dirá "Editar
            submenu (<kbd>Alt</kbd> + <kbd>D</kbd>) 2 de 8", indicando que o foco voltou para o menu "Editar".
            A partir daí, você pode continuar navegando pelas outras opções do menu
            usando a seta para a direita ou para a esquerda.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item bg-transparent border-0">
    <h2 class="accordion-header" id="flush-headingSelecao">
      <button class="accordion-button collapsed bg-dark text-white border border-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSelecao" aria-expanded="false" aria-controls="flush-collapseSelecao">
        Seleção
      </button>
    </h2>
    <div id="flush-collapseSelecao" class="accordion-collapse collapse" aria-labelledby="flush-headingSelecao" data-bs-parent="#accordionMenuVSCode">
      <div class="accordion-body text-white">
        <div class="text-center">
            <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/75dccc83-fe85-4e3a-9e52-e9e0586b8000/public" aria-hidden="true" class="img-fluid">
        </div>

        <ol>
            <li class="mb-4">
                <strong>
                    Selecionar Tudo (<kbd>Ctrl</kbd> + <kbd>A</kbd>) 1 de 16:
                </strong>
                <br>
                Seleciona todo o texto no editor de código. Se você tiver um arquivo
                aberto no VS Code e quiser selecionar todo o texto, você pode pressionar
                <kbd>Ctrl</kbd> + <kbd>A</kbd> para selecionar todo o texto.
            </li>
            <li class="mb-4">
                <strong>
                    Expandir a Seleção (<kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Seta para a direita</kbd>) 2 de 16:
                </strong>
                <br>
                Expande a seleção para a direita no editor de código. Isso quer dizer
                que se você tiver um texto selecionado e quiser expandir a seleção para
                a direita, você pode pressionar <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Seta para a direita</kbd> que
                ele vai selecionando palavra por palavra no texto no sentido da seta
                para a direita.
            </li>
            <li class="mb-4">
                <strong>
                    Reduzir a Seleção (<kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Seta para a esquerda</kbd>) 3 de 16:
                </strong>
                <br>
                Reduz a seleção para a esquerda no editor de código. Isso quer dizer que
                se você tiver um texto selecionado e quiser reduzir a seleção para a
                esquerda, você pode pressionar <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Seta para a esquerda</kbd> que
                ele
                vai desselecionando palavra por palavra no texto no sentido da seta para
                a esquerda.
            </li>
            <li class="mb-4">
                <strong>
                    Copiar Linha para Cima (<kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Seta para cima</kbd>) 4 de 16:
                </strong>
                <br>
                Copia a linha atual para cima no editor de código. Isso quer dizer que
                se você tiver o cursor em uma linha e quiser copiar essa linha para
                cima, você pode pressionar <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Seta para cima</kbd>.
            </li>
            <li class="mb-4">
                <strong>
                    Copiar Linha para Baixo (<kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Seta para baixo</kbd>) 5 de 16:
                </strong>
                <br>
                Copia a linha atual para baixo no editor de código. Isso quer dizer que
                se você tiver o cursor em uma linha e quiser copiar essa linha para
                baixo, você pode pressionar <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Seta para baixo</kbd>.
            </li>
            <li class="mb-4">
                <strong>
                    Mover Linha para Cima (<kbd>Alt</kbd> + <kbd>Seta para cima</kbd>) 6 de 16:
                </strong>
                <br>
                Move a linha atual para cima no editor de código. Isso significa que se
                você estiver com o cursor em uma linha e quiser mover essa linha para
                cima, você pode pressionar <kbd>Alt</kbd> + <kbd>Seta para cima</kbd>.
            </li>
            <li class="mb-4">
                <strong>
                    Mover Linha para Baixo (<kbd>Alt</kbd> + <kbd>Seta para baixo</kbd>) 7 de 16:
                </strong>
                <br>
                Move a linha atual para baixo no editor de código. Isso significa que se
                você estiver com o cursor em uma linha e quiser mover essa linha para
                baixo, você pode pressionar <kbd>Alt</kbd> + <kbd>Seta para baixo</kbd>.
            </li>
            <li class="mb-4">
                <strong>
                    Duplicar a Seleção 8 de 16:
                </strong>
                <br>
                Duplica a seleção atual, criando uma cópia exatamente abaixo da seleção
                original. Isso é útil para duplicar um bloco de código ou uma linha de
                código no editor.
            </li>
            <li class="mb-4">
                <strong>
                    Adicionar Cursor Acima (<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Seta para cima</kbd>) 9 de 16:
                </strong>
                <br>
                Adiciona um novo cursor na linha acima da posição atual do cursor, útil
                para edição em múltiplas linhas ao mesmo tempo.
            </li>
            <li class="mb-4">
                <strong>
                    Adicionar Cursor Abaixo (<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Seta para baixo</kbd>) 10 de 16:
                </strong>
                <br>
                Adiciona um novo cursor na linha abaixo da posição atual do cursor.
                Lembrando que <kbd>Seta para baixo</kbd> é a tecla de seta direcional para baixo.
            </li>
            <li class="mb-4">
                <strong>
                    Adicionar Cursores nas Extremidades da Linha (<kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>I</kbd>) 11 de
                    16:
                </strong>
                <br>
                Adiciona cursores em todas as extremidades de linhas dentro da seleção
                atual, permitindo edição simultânea.
            </li>
            <li class="mb-4">
                <strong>
                    Adicionar Próxima Ocorrência (<kbd>Ctrl</kbd> + <kbd>D</kbd>) 12 de 16:
                </strong>
                <br>
                Seleciona a próxima ocorrência do texto ou código selecionado
                atualmente, permitindo edição em múltiplas ocorrências.
            </li>
            <li class="mb-4">
                <strong>
                    Adicionar Ocorrência Anterior 13 de 16:
                </strong>
                <br>
                Seleciona a ocorrência anterior do texto ou código selecionado, similar
                à opção anterior, mas navegando para cima.
            </li>
            <li class="mb-4">
                <strong>
                    Selecionar Todas as Ocorrências (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd>) 14 de 16:
                </strong>
                <br>
                Seleciona todas as ocorrências do texto ou código selecionado no
                documento atual. Isso é útil para edição em múltiplas ocorrências ao
                mesmo tempo. Por exemplo, se você quiser alterar todas as ocorrências de
                uma palavra em um arquivo, você pode selecionar a palavra e pressionar
                <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> para selecionar todas as ocorrências da palavra no
                arquivo.
            </li>
            <li class="mb-4">
                <strong>
                    Alternar para <kbd>Ctrl</kbd> + Clique para Múltiplos Cursores 15 de 16:
                </strong>
                <br>
                Ativa ou desativa o modo de múltiplos cursores usando o comando <kbd>Ctrl</kbd> +
                Clique. Com isso ativado, você pode clicar em diferentes locais no
                documento e criar múltiplos cursores para edição simultânea.
            </li>
            <li class="mb-4">
                <strong>
                    Modo de Seleção de Coluna 16 de 16:
                </strong>
                <br>
                Habilita o modo de seleção de coluna, que permite selecionar conteúdo em
                uma área retangular de texto, em vez de selecionar linha por linha.
            </li>
        </ol>
      </div>
    </div>
  </div>
  <div class="accordion-item bg-transparent border-0">
    <h2 class="accordion-header" id="flush-headingVer">
      <button class="accordion-button collapsed bg-dark text-white border border-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseVer" aria-expanded="false" aria-controls="flush-collapseVer">
        Ver
      </button>
    </h2>
    <div id="flush-collapseVer" class="accordion-collapse collapse" aria-labelledby="flush-headingVer" data-bs-parent="#accordionMenuVSCode">
      <div class="accordion-body text-white">
        <div class="text-center">
            <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/3ebba3e2-904c-4e48-f979-224893e42600/public" aria-hidden="true" class="img-fluid">
        </div>
        <ol>
            <li class="mb-4">
                <strong>
                    Paleta de Comandos... (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>) 1 de 14:
                </strong>
                <br>
                Abre a paleta de comandos, onde você pode digitar para acessar
                rapidamente qualquer comando ou configuração do VS Code.
            </li>
            <li class="mb-4">
                <strong>
                    Abrir o Modo de Exibição... 2 de 14:
                </strong>
                <br>
                Abre um submenu onde você pode selecionar diferentes modos de exibição
                no VS Code, como o terminal integrado ou o depurador.
            </li>
            <li class="mb-4">
                <strong>
                    Aparência 3 de 14:
                </strong>
                <br>
                Abre um submenu onde você pode ajustar a aparência do VS Code, incluindo
                opções para alternar o tema de cores, o layout de ícones e outros
                elementos visuais.
            </li>
            <li class="mb-4">
                <strong>
                    Layout do Editor 4 de 14:
                </strong>
                <br>
                Abre um submenu que permite ajustar a disposição das janelas do editor,
                como dividir a tela em várias partes ou alterar o layout dos painéis.
            </li>
            <li class="mb-4">
                <strong>
                    Explorador (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd>) 5 de 14:
                </strong>
                <br>
                Abre ou foca no explorador de arquivos, onde você pode navegar pelas
                pastas e arquivos do seu projeto.
            </li>
            <li class="mb-4">
                <strong>
                    Pesquisar (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>) 6 de 14:
                </strong>
                <br>
                Abre a barra de pesquisa global, permitindo que você busque texto em
                todos os arquivos do projeto.
            </li>
            <li class="mb-4">
                <strong>
                    Controle do Código-Fonte (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd>) 7 de 14:
                </strong>
                <br>
                Abre ou foca na visão de controle de código-fonte, onde você pode
                gerenciar versões, commits e outras ações de controle de versão (por
                exemplo, Git).
            </li>
            <li class="mb-4">
                <strong>
                    Executar (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd>) 8 de 14:
                </strong>
                <br>
                Abre ou foca no painel de execução, onde você pode iniciar depurações ou
                execuções de código.
            </li>
            <li class="mb-4">
                <strong>
                    Extensões (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd>) 9 de 14:
                </strong>
                <br>
                Abre o painel de extensões, onde você pode procurar, instalar,
                desinstalar ou gerenciar as extensões do VS Code.
            </li>
            <li class="mb-4">
                <strong>
                    Problemas (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd>) 10 de 14:
                </strong>
                <br>
                Abre o painel de problemas, que mostra erros, avisos e outras mensagens
                do código.
            </li>
            <li class="mb-4">
                <strong>
                    Saída (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd>) 11 de 14:
                </strong>
                <br>
                Abre o painel de saída, onde você pode ver as saídas de várias
                operações, como compilação ou logs de execução.
            </li>
            <li class="mb-4">
                <strong>
                    Console de Depuração (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Y</kbd>) 12 de 14:
                </strong>
                <br>
                Abre o console de depuração, onde você pode ver a saída do depurador e
                interagir com ele durante as sessões de depuração.
            </li>
            <li class="mb-4">
                <strong>
                    Terminal (<kbd>Ctrl</kbd> + <kbd>`</kbd>) 13 de 14:
                </strong>
                <br>
                Abre o terminal integrado, onde você pode executar comandos de shell
                diretamente no VS Code.
            </li>
            <li class="mb-4">
                <strong>
                    Quebra de Texto (<kbd>Alt</kbd> + <kbd>Z</kbd>) 14 de 14:
                </strong>
                <br>
                Alterna a quebra de linha no editor de código, permitindo que o texto
                ultrapasse o limite da tela ou seja quebrado em várias linhas.
            </li>
        </ol>
      </div>
    </div>
  </div>
  <div class="accordion-item bg-transparent border-0">
    <h2 class="accordion-header" id="flush-headingAcessar">
      <button class="accordion-button collapsed bg-dark text-white border border-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseAcessar" aria-expanded="false" aria-controls="flush-collapseAcessar">
        Acessar
      </button>
    </h2>
    <div id="flush-collapseAcessar" class="accordion-collapse collapse" aria-labelledby="flush-headingAcessar" data-bs-parent="#accordionMenuVSCode">
      <div class="accordion-body text-white">
        <div class="text-center">
            <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/2ee96c5b-dac8-45a3-b227-4c50eefe3800/public" aria-hidden="true" class="img-fluid">
        </div>

        <ol>
            <li class="mb-4">
                <strong>
                    Voltar (<kbd>Alt</kbd> + <kbd>Seta para a esquerda</kbd>) 1 de 19:
                </strong>
                <br>
                Navega para a última posição do cursor antes da mudança de contexto,
                permitindo que você retorne rapidamente à posição anterior no código.
            </li>
            <li class="mb-4">
                <strong>
                    Avançar (<kbd>Alt</kbd> + <kbd>Seta para a direita</kbd>) 2 de 19:
                </strong>
                <br>
                Refaz o movimento do cursor que foi desfeito com a opção "Voltar",
                navegando para a próxima posição.
            </li>
            <li class="mb-4">
                <strong>
                    Localização da Última Edição (<kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>Ctrl</kbd> + <kbd>Q</kbd>) 3 de 19:
                </strong>
                <br>
                Move o cursor para a última posição de edição no arquivo atual,
                permitindo que você retome rapidamente o trabalho onde parou.
            </li>
            <li class="mb-4">
                <strong>
                    Alternar Editor 4 de 19:
                </strong>
                <br>
                Abre um submenu onde você pode alternar entre diferentes editores
                abertos no VS Code.
            </li>
            <li class="mb-4">
                <strong>
                    Alternar Grupo 5 de 19:
                </strong>
                <br>
                Abre um submenu onde você pode alternar entre diferentes grupos de
                editores no VS Code.
            </li>
            <li class="mb-4">
                <strong>
                    Ir para Arquivo... (<kbd>Ctrl</kbd> + <kbd>P</kbd>) 6 de 19:
                </strong>
                <br>
                Abre um painel de busca onde você pode digitar para abrir rapidamente um
                arquivo no projeto atual.
            </li>
            <li class="mb-4">
                <strong>
                    Ir para o Símbolo no Workspace... (<kbd>Ctrl</kbd> + <kbd>T</kbd>) 7 de 19:
                </strong>
                <br>
                Abre um painel de busca onde você pode digitar para navegar até um
                símbolo (como uma função ou variável) em todo o workspace.
            </li>
            <li class="mb-4">
                <strong>
                    Ir para Símbolo no Editor... (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd>) 8 de 19:
                </strong>
                <br>
                Abre um painel de busca onde você pode digitar para navegar até um
                símbolo (como uma função ou variável) no arquivo atual.
            </li>
            <li class="mb-4">
                <strong>
                    Ir para Definição (<kbd>F12</kbd>) 9 de 19:
                </strong>
                <br>
                Move o cursor para a definição do símbolo (como uma função ou variável)
                atualmente selecionado.
            </li>
            <li class="mb-4">
                <strong>
                    Ir para Declaração 10 de 19:
                </strong>
                <br>
                Move o cursor para a declaração do símbolo atualmente selecionado.
            </li>
            <li class="mb-4">
                <strong>
                    Ir para Definição de Tipo 11 de 19:
                </strong>
                <br>
                Move o cursor para a definição do tipo do símbolo atualmente
                selecionado, útil em linguagens fortemente tipadas.
            </li>
            <li class="mb-4">
                <strong>
                    Ir para Implementações (<kbd>Ctrl</kbd> + <kbd>F12</kbd>) 12 de 19:
                </strong>
                <br>
                Navega para as implementações de uma interface ou classe abstrata.
            </li>
            <li class="mb-4">
                <strong>
                    Ir para Referências (<kbd>Shift</kbd> + <kbd>F12</kbd>) 13 de 19:
                </strong>
                <br>
                Exibe todas as referências do símbolo atualmente selecionado no projeto.
            </li>
            <li class="mb-4">
                <strong>
                    Ir para Linha/Coluna... (<kbd>Ctrl</kbd> + <kbd>G</kbd>) 14 de 19:
                </strong>
                <br>
                Abre uma caixa de diálogo onde você pode digitar o número da linha ou
                coluna para mover o cursor diretamente para essa posição.
            </li>
            <li class="mb-4">
                <strong>
                    Ir para Colchetes (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>]</kbd>) 15 de 19:
                </strong>
                <br>
                Move o cursor para o colchete correspondente mais próximo, como o de uma
                função ou bloco de código.
            </li>
            <li class="mb-4">
                <strong>
                    Próximo Problema (<kbd>F8</kbd>) 16 de 19:
                </strong>
                <br>
                Move o cursor para o próximo problema (erro ou aviso) no arquivo ou
                projeto.
            </li>
            <li class="mb-4">
                <strong>
                    Problema Anterior (<kbd>Shift</kbd> + <kbd>F8</kbd>) 17 de 19:
                </strong>
                <br>
                Move o cursor para o problema anterior no arquivo ou projeto.
            </li>
            <li class="mb-4">
                <strong>
                    Próxima Alteração (<kbd>Alt</kbd> + <kbd>F3</kbd>) 18 de 19:
                </strong>
                <br>
                Navega para a próxima alteração no arquivo, útil para revisão de
                mudanças em controle de versão.
            </li>
            <li class="mb-4">
                <strong>
                    Alteração Anterior (<kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F3</kbd>) 19 de 19:
                </strong>
                <br>
                Navega para a alteração anterior no arquivo. Ou seja, se você estiver em
                uma alteração e quiser voltar para a anterior, você pode pressionar
                <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F3</kbd>.
            </li>
        </ol>
      </div>
    </div>
  </div>
  <div class="accordion-item bg-transparent border-0">
    <h2 class="accordion-header" id="flush-headingExecutar">
      <button class="accordion-button collapsed bg-dark text-white border border-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseExecutar" aria-expanded="false" aria-controls="flush-collapseExecutar">
        Executar
      </button>
    </h2>
    <div id="flush-collapseExecutar" class="accordion-collapse collapse" aria-labelledby="flush-headingExecutar" data-bs-parent="#accordionMenuVSCode">
      <div class="accordion-body text-white">
        <div class="text-center">
            <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/f6e62807-338f-431f-8fd7-56f2499e1e00/public" aria-hidden="true" class="img-fluid">
        </div>

        <ol>
            <li class="mb-4">
                <strong>
                    Iniciar a Depuração (<kbd>F5</kbd>) 1 de 17:
                </strong>
                <br>
                Inicia o processo de depuração do código atualmente aberto no VS Code.
                Isso significa que o código será executado passo a passo, permitindo a
                inspeção de variáveis e o fluxo de execução.
            </li>
            <li class="mb-4">
                <strong>
                    Executar sem Depuração (<kbd>Ctrl</kbd> + <kbd>F5</kbd>) 2 de 17:
                </strong>
                <br>
                Executa o código sem iniciar a depuração. Isso permite rodar o código
                rapidamente sem parar em pontos de interrupção.
            </li>
            <li class="mb-4">
                <strong>
                    Interromper a Depuração (<kbd>Shift</kbd> + <kbd>F5</kbd>) 3 de 17:
                </strong>
                <br>
                Para o processo de depuração atual. Isso significa que a execução do
                código será interrompida e a depuração será finalizada.
            </li>
            <li class="mb-4">
                <strong>
                    Reiniciar a Depuração (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F5</kbd>) 4 de 17:
                </strong>
                <br>
                Reinicia o processo de depuração desde o início, mantendo as mesmas
                configurações e pontos de interrupção.
            </li>
            <li class="mb-4">
                <strong>
                    Abrir as Configurações 5 de 17:
                </strong>
                <br>
                Abre as configurações de depuração do projeto atual. Aqui, você pode
                ajustar as configurações específicas para a depuração do seu código.
            </li>
            <li class="mb-4">
                <strong>
                    Adicionar Configuração... 6 de 17:
                </strong>
                <br>
                Adiciona uma nova configuração de depuração ao projeto. Isso é útil para
                definir como o código será depurado em diferentes ambientes ou
                situações.
            </li>
            <li class="mb-4">
                <strong>
                    Contornar (<kbd>F10</kbd>) 7 de 17:
                </strong>
                <br>
                Avança para a próxima instrução de código sem entrar em funções. Isso é
                útil para passar por cima de chamadas de função sem entrar em seu código
                interno.
            </li>
            <li class="mb-4">
                <strong>
                    Intervir (<kbd>F11</kbd>) 8 de 17:
                </strong>
                <br>
                Entra na próxima instrução de código, incluindo funções. Isso permite
                ver o fluxo de execução dentro de funções chamadas.
            </li>
            <li class="mb-4">
                <strong>
                    Sair (<kbd>Shift</kbd> + <kbd>F11</kbd>) 9 de 17:
                </strong>
                <br>
                Sai da função atual e retorna ao código chamador. Isso é útil para
                concluir a depuração dentro de uma função e continuar a depuração no
                nível superior.
            </li>
            <li class="mb-4">
                <strong>
                    Continuar (<kbd>F5</kbd>) 10 de 17:
                </strong>
                <br>
                Continua a execução do código até que o próximo ponto de interrupção
                seja encontrado. Isso permite avançar rapidamente durante a depuração.
            </li>
            <li class="mb-4">
                <strong>
                    Ativar/Desativar o Ponto de Interrupção (<kbd>F9</kbd>) 11 de 17:
                </strong>
                <br>
                Alterna o ponto de interrupção na linha atual. Se um ponto de
                interrupção já estiver definido, ele será removido, e se não estiver,
                será adicionado.
            </li>
            <li class="mb-4">
                <strong>
                    Novo Ponto de Interrupção 12 de 17:
                </strong>
                <br>
                Abre um submenu onde você pode definir novos tipos de pontos de
                interrupção, como pontos de interrupção condicionais, de função, ou de
                exceção.
            </li>
            <li class="mb-4">
                <strong>
                    Habilitar Todos os Pontos de Interrupção 13 de 17:
                </strong>
                <br>
                Habilita todos os pontos de interrupção definidos no código atual.
            </li>
            <li class="mb-4">
                <strong>
                    Desabilitar Todos os Pontos de Interrupção 14 de 17:
                </strong>
                <br>
                Desabilita todos os pontos de interrupção definidos, permitindo a
                execução do código sem interrupções.
            </li>
            <li class="mb-4">
                <strong>
                    Remover Todos os Pontos de Interrupção 15 de 17:
                </strong>
                <br>
                Remove todos os pontos de interrupção definidos no código, limpando
                todas as interrupções.
            </li>
            <li class="mb-4">
                <strong>
                    Instalar Depuradores Adicionais... 16 de 17:
                </strong>
                <br>
                Abre uma opção para instalar depuradores adicionais, permitindo
                depuração em outras linguagens ou ambientes.
            </li>
            <li class="mb-4">
                <strong>
                    Mostrar Configurações (<kbd>Ctrl</kbd> + <kbd>,</kbd>) 17 de 17:
                </strong>
                <br>
                Abre as configurações gerais do Visual Studio Code, permitindo ajustes
                nas preferências do editor.
            </li>
        </ol>
      </div>
    </div>
  </div>
  <div class="accordion-item bg-transparent border-0">
    <h2 class="accordion-header" id="flush-headingTerminal">
      <button class="accordion-button collapsed bg-dark text-white border border-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTerminal" aria-expanded="false" aria-controls="flush-collapseTerminal">
        Terminal
      </button>
    </h2>
    <div id="flush-collapseTerminal" class="accordion-collapse collapse" aria-labelledby="flush-headingTerminal" data-bs-parent="#accordionMenuVSCode">
      <div class="accordion-body text-white">
        <div class="text-center">
            <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/58644fa9-0fb8-4976-4a8d-302f12fe0b00/public" aria-hidden="true" class="img-fluid">
        </div>

        <ol>
            <li class="mb-4">
                <strong>
                    Novo Terminal (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>`</kbd>) 1 de 14:
                </strong>
                <br>
                Abre um novo terminal integrado no VS Code. Isso permite executar
                comandos de shell diretamente dentro do editor, sem precisar alternar
                para outro aplicativo.
            </li>
            <li class="mb-4">
                <strong>
                    Dividir o Terminal (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>5</kbd>) 2 de 14:
                </strong>
                <br>
                Divide o terminal atual em duas partes, permitindo que você trabalhe com
                dois terminais simultaneamente na mesma janela.
            </li>
            <li class="mb-4">
                <strong>
                    Executar a Tarefa... 3 de 14:
                </strong>
                <br>
                Abre uma lista de tarefas configuradas no VS Code para que você possa
                escolher e executar uma delas. Tarefas são scripts ou comandos que você
                pode configurar para automatizar processos.
            </li>
            <li class="mb-4">
                <strong>
                    Executar Tarefa de Build... (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd>) 4 de 14:
                </strong>
                <br>
                Executa a tarefa de build configurada para o projeto. Isso geralmente
                envolve a compilação do código ou a execução de scripts de build.
            </li>
            <li class="mb-4">
                <strong>
                    Executar Arquivo Ativo 5 de 14:
                </strong>
                <br>
                Executa o arquivo atualmente ativo no editor. Isso é útil para
                rapidamente rodar o código que você está editando sem precisar sair do
                editor.
            </li>
            <li class="mb-4">
                <strong>
                    Executar Texto Selecionado 6 de 14:
                </strong>
                <br>
                Executa o texto que está selecionado no editor como um comando no
                terminal. Isso é útil para testar rapidamente pequenas partes do código.
            </li>
            <li class="mb-4">
                <strong>
                    Mostrar Tarefas em Execução... 7 de 14:
                </strong>
                <br>
                Mostra todas as tarefas que estão atualmente em execução no VS Code.
                Você pode monitorar o progresso ou gerenciar as tarefas diretamente.
            </li>
            <li class="mb-4">
                <strong>
                    Reiniciar Tarefa em Execução... 8 de 14:
                </strong>
                <br>
                Reinicia uma tarefa que está atualmente em execução. Isso é útil se você
                precisar reexecutar uma tarefa sem precisar pará-la manualmente
                primeiro.
            </li>
            <li class="mb-4">
                <strong>
                    Terminar a Tarefa... 9 de 14:
                </strong>
                <br>
                Termina uma tarefa que está atualmente em execução. Isso é útil para
                interromper uma tarefa que não é mais necessária ou que está demorando
                muito para concluir.
            </li>
            <li class="mb-4">
                <strong>
                    Configurar Tarefas... 10 de 14:
                </strong>
                <br>
                Abre as configurações de tarefas, onde você pode definir, editar ou
                remover tarefas personalizadas que podem ser executadas no VS Code.
            </li>
            <li class="mb-4">
                <strong>
                    Configurar Tarefa de Build Padrão... 11 de 14:
                </strong>
                <br>
                Define a tarefa de build padrão para o projeto. Isso permite que você
                configure qual tarefa será executada quando você acionar um build
                rápido.
            </li>
        </ol>
      </div>
    </div>
  </div>
  <div class="accordion-item bg-transparent border-0">
    <h2 class="accordion-header" id="flush-headingAjuda">
      <button class="accordion-button collapsed bg-dark text-white border border-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseAjuda" aria-expanded="false" aria-controls="flush-collapseAjuda">
        Ajuda
      </button>
    </h2>
    <div id="flush-collapseAjuda" class="accordion-collapse collapse" aria-labelledby="flush-headingAjuda" data-bs-parent="#accordionMenuVSCode">
      <div class="accordion-body text-white">
        <div class="text-center">
            <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/367731bf-690e-4283-f8c7-72ed4f9ea600/public" aria-hidden="true" class="img-fluid">
        </div>

        <ol>
            <li class="mb-4">
                <strong>
                    Bem-vindo 1 de 17:
                </strong>
                <br>
                Abre a página de boas-vindas do VS Code, que fornece informações
                introdutórias e atalhos úteis para novos usuários.
            </li>
            <li class="mb-4">
                <strong>
                    Mostrar Todos os Comandos (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>) 2 de 17:
                </strong>
                <br>
                Abre a paleta de comandos, onde você pode digitar para acessar
                rapidamente qualquer comando ou configuração do VS Code.
            </li>
            <li class="mb-4">
                <strong>
                    Documentação 3 de 17:
                </strong>
                <br>
                Abre a documentação oficial do Visual Studio Code, onde você pode
                encontrar guias detalhados sobre o uso do editor.
            </li>
            <li class="mb-4">
                <strong>
                    Editor Playground 4 de 17:
                </strong>
                <br>
                Abre uma área de teste dentro do VS Code, onde você pode experimentar
                diferentes funcionalidades do editor sem afetar seu código real.
            </li>
            <li class="mb-4">
                <strong>
                    Mostrar Notas de Versão 5 de 17:
                </strong>
                <br>
                Abre as notas de versão mais recentes do VS Code, mostrando as mudanças,
                correções e novos recursos introduzidos nas atualizações.
            </li>
            <li class="mb-4">
                <strong>
                    Referência de Atalhos do Teclado (<kbd>Ctrl</kbd> + <kbd>K</kbd> <kbd>Ctrl</kbd> + <kbd>R</kbd>) 6 de 17:
                </strong>
                <br>
                Abre uma referência completa de todos os atalhos de teclado disponíveis
                no VS Code, permitindo que você os consulte e os memorize.
            </li>
            <li class="mb-4">
                <strong>
                    Tutoriais em Vídeo 7 de 17:
                </strong>
                <br>
                Abre uma lista de tutoriais em vídeo que ensinam como usar diferentes
                recursos e funcionalidades do VS Code.
            </li>
            <li class="mb-4">
                <strong>
                    Dicas e Truques 8 de 17:
                </strong>
                <br>
                Abre uma página com dicas e truques para melhorar sua eficiência e
                produtividade ao usar o VS Code.
            </li>
            <li class="mb-4">
                <strong>
                    Junte-se a nós no YouTube 9 de 17:
                </strong>
                <br>
                Abre o canal oficial do Visual Studio Code no YouTube, onde você pode
                encontrar vídeos tutoriais e outras informações.
            </li>
            <li class="mb-4">
                <strong>
                    Pesquisar Solicitações de Recursos 10 de 17:
                </strong>
                <br>
                Permite que você pesquise por solicitações de recursos feitas pela
                comunidade para ver quais funcionalidades podem ser adicionadas ao VS
                Code no futuro.
            </li>
            <li class="mb-4">
                <strong>
                    Relatar Problema 11 de 17:
                </strong>
                <br>
                Abre um formulário para que você possa relatar problemas ou bugs que
                encontrou ao usar o VS Code.
            </li>
            <li class="mb-4">
                <strong>
                    Exibir Licença 12 de 17:
                </strong>
                <br>
                Mostra a licença sob a qual o Visual Studio Code é distribuído,
                permitindo que você leia os termos legais.
            </li>
            <li class="mb-4">
                <strong>
                    Política de Privacidade 13 de 17:
                </strong>
                <br>
                Abre a política de privacidade do VS Code, onde você pode ver como seus
                dados são tratados e protegidos.
            </li>
            <li class="mb-4">
                <strong>
                    Ativar/Desativar Ferramentas para Desenvolvedores 14 de 17:
                </strong>
                <br>
                Alterna as ferramentas de desenvolvimento do VS Code, permitindo que
                você acesse funcionalidades avançadas de depuração e inspeção.
            </li>
            <li class="mb-4">
                <strong>
                    Abrir o Explorador de processos 15 de 17:
                </strong>
                <br>
                Abre o explorador de processos, onde você pode monitorar e gerenciar os
                processos em execução dentro do VS Code.
            </li>
            <li class="mb-4">
                <strong>
                    Verificar se há Atualizações... 16 de 17:
                </strong>
                <br>
                Verifica se há atualizações disponíveis para o VS Code e permite que
                você as instale.
            </li>
            <li class="mb-4">
                <strong>
                    Sobre 17 de 17:
                </strong>
                <br>
                Exibe informações sobre a versão atual do VS Code, incluindo número da
                versão e detalhes do sistema.
            </li>
        </ol>
      </div>
    </div>
  </div>
</div>

<p>
Recomenda-se fortemente que você explore o menu principal do VS Code por conta
própria e experimente as diferentes opções para se familiarizar com o editor e
descobrir como ele pode ser personalizado para atender às suas necessidades.
Consulte a documentação oficial do Visual Studio Code para obter mais informações
sobre alguma opção específica ou funcionalidade do editor.
</p>

## Barra de Atividades {#barra-atividades}
---

Como já foi dito anteriormente nesse texto, o Visual Studio Code possui uma barra de atividades ou seletor de exibição que fica na parte esquerda da tela e permite que você navegue entre as diferentes visualizações e painéis do editor. Para chegar na barra de atividades pressione <kbd>F6</kbd> repetidamente até que o NVDA anuncie "Seletor de exibição ativo guia".

Use as teclas de <kbd>Seta para Cima</kbd> e <kbd>Seta para Baixo</kbd> para mover o foco entre os diferentes ícones na Barra de Atividades.

Os componentes (partes) da barra de atividades do VS Code são:

### Explorador de arquivos {#explorador-arquivos}
---

Exibe a estrutura de pastas e arquivos do projeto atual, permitindo que você navegue e gerencie os arquivos.

<div class="table-responsive">
  <table class="table table-bordered table-striped table-hover table-dark">
    <caption class="visually-hidden">
      Guia de uso do Explorador de arquivos no Visual Studio Code com NVDA
    </caption>
    <thead class="table-dark">
      <tr>
        <th scope="col">Ação</th>
        <th scope="col">Instruções</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Acessar o Explorador de arquivos</th>
        <td>
          Pressione <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> e o NVDA anunciará "Explorador de Arquivos árvore".
        </td>
      </tr>
      <tr>
        <th scope="row">Navegar pelos arquivos e pastas</th>
        <td>
          <ul class="mb-0">
            <li>Você pode navegar pelos diretórios (pastas) e arquivos usando as setas (para cima e para baixo) e selecionar arquivos com <kbd>Enter</kbd>.</li>
            <li>Por exemplo, imagine que você tenha um arquivo chamado "index.html" e deseja abri-lo. Para isso, navegue até o arquivo usando a tecla <kbd>Seta para Baixo</kbd> até encontrar "index.html" e pressione <kbd>Enter</kbd>.</li>
            <li>O arquivo será aberto no editor de código.</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th scope="row">Criar um novo arquivo</th>
        <td>
          <ol class="mb-2">
            <li>Primeiro foque no Explorador de arquivos com <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd>.</li>
            <li>Em seguida, pressione <kbd>Shift</kbd> + <kbd>Tab</kbd> até encontrar o botão "New File" (Novo arquivo).</li>
            <li>Quando encontrar o botão "New File" (Novo arquivo), pressione <kbd>Enter</kbd>.</li>
            <li>Digite o nome do arquivo, por exemplo, "script.js", e pressione <kbd>Enter</kbd>.</li>
            <li>O novo arquivo "script.js" será criado e aberto no editor de código.</li>
          </ol>
          <p class="mb-0"><strong>Alternativa pelo terminal:</strong> Também é possível criar os arquivos pelo terminal integrado, usando comandos como <code class="language-bash text-white-50">touch script.js</code> no Linux ou macOS, ou <code class="language-bash text-white-50">type nul &gt; script.js</code> no Windows.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Criar uma nova pasta</th>
        <td>
          <ol class="mb-2">
            <li>Primeiro foque no Explorador de arquivos com <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd>.</li>
            <li>Em seguida, pressione <kbd>Shift</kbd> + <kbd>Tab</kbd> até encontrar o botão "New Folder" (Nova pasta).</li>
            <li>Quando encontrar o botão "New Folder" (Nova pasta), pressione <kbd>Enter</kbd>.</li>
            <li>Digite o nome da pasta, por exemplo, "assets", e pressione <kbd>Enter</kbd>.</li>
            <li>A nova pasta "assets" será criada no diretório atual.</li>
          </ol>
          <p class="mb-0"><strong>Alternativa pelo terminal:</strong> Também é possível criar pastas pelo terminal integrado, usando comandos como <code class="language-bash text-white-50">mkdir assets</code> no Linux, macOS ou Windows.</p>
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Buscar {#buscar}
---

Ferramenta para pesquisar texto em arquivos do projeto atual, permitindo a localização de palavras ou trechos específicos de código.

<div class="table-responsive">
  <table class="table table-bordered table-striped table-hover table-dark">
    <caption class="visually-hidden">
      Guia de uso da ferramenta Buscar no Visual Studio Code com NVDA
    </caption>
    <thead class="table-dark">
      <tr>
        <th scope="col">Ação</th>
        <th scope="col">Instruções</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Acessar a Pesquisa</th>
        <td>
          <p class="mb-2">Pressione <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> e o NVDA mudará o foco para a área de Pesquisa.</p>
          <p class="mb-0"><strong>O que isso faz:</strong> Permite procurar por uma palavra ou trecho específico em todos os arquivos do seu projeto de uma só vez.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Acessar a Pesquisa e Substituição</th>
        <td>
          <p class="mb-2">Pressione <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd> e o NVDA mudará o foco para a área de Pesquisa e Substituição.</p>
          <p class="mb-0"><strong>O que isso faz:</strong> Além de procurar, você pode substituir automaticamente uma palavra ou trecho por outro em todos os arquivos do projeto. Por exemplo, trocar "cor" por "color" em todo o código.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Fazer uma pesquisa simples</th>
        <td>
          <ol class="mb-0">
            <li>Abra a Pesquisa pressionando <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>.</li>
            <li>Digite a palavra ou trecho que você quer procurar (por exemplo: "função").</li>
            <li>Pressione <kbd>Enter</kbd> para o VS Code começar a buscar.</li>
            <li>Use <kbd>Seta para Baixo</kbd> e <kbd>Seta para Cima</kbd> para navegar pelos resultados encontrados.</li>
            <li>Quando encontrar o resultado que deseja, pressione <kbd>Enter</kbd> para abrir aquele arquivo no editor.</li>
          </ol>
        </td>
      </tr>
      <tr>
        <th scope="row">Fazer pesquisa e substituição</th>
        <td>
          <ol class="mb-0">
            <li>Abra a Pesquisa e Substituição pressionando <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd>.</li>
            <li>No primeiro campo, digite o que você quer procurar (por exemplo: "erro").</li>
            <li>Pressione <kbd>Tab</kbd> uma vez para ir para o segundo campo.</li>
            <li>Digite o que vai substituir (por exemplo: "falha").</li>
            <li>Pressione <kbd>Enter</kbd> para fazer a substituição.</li>
            <li>Se precisar voltar para o primeiro campo, pressione <kbd>Shift</kbd> + <kbd>Tab</kbd>.</li>
          </ol>
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Controle de Versão (Git) {#controle-versao-git}
---

Essa ferramenta permite que você gerencie o controle de versão do projeto com o Git diretamente do VS Code. Git é um sistema que ajuda desenvolvedores a rastrear e gerenciar as mudanças no código-fonte sem perder o histórico do que foi feito. É como ter um "diário" completo de todas as alterações no seu projeto.

<div class="table-responsive">
  <table class="table table-bordered table-striped table-hover table-dark">
    <caption class="visually-hidden">
      Guia de uso do Controle de Versão (Git) no Visual Studio Code com NVDA
    </caption>
    <thead class="table-dark">
      <tr>
        <th scope="col">Ação</th>
        <th scope="col">Instruções</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Acessar o Controle de Versão</th>
        <td>
          <p class="mb-2">Pressione <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd> e o NVDA mudará o foco para a área de Controle de Versão.</p>
          <p class="mb-0"><strong>O que isso faz:</strong> Permite ver todas as alterações feitas nos arquivos do projeto e realizar operações do Git, como salvar alterações (commit), baixar atualizações (pull) e enviar suas mudanças (push).</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Ver as alterações nos arquivos</th>
        <td>
          <ol class="mb-0">
            <li>Abra o Controle de Versão pressionando <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd>.</li>
            <li>Use <kbd>Seta para Baixo</kbd> e <kbd>Seta para Cima</kbd> para navegar pela lista de arquivos que foram modificados.</li>
            <li>Quando encontrar o arquivo que deseja ver, pressione <kbd>Enter</kbd>.</li>
            <li>O arquivo será aberto mostrando as diferenças entre a versão antiga e a nova (o que foi adicionado ou removido).</li>
          </ol>
        </td>
      </tr>
      <tr>
        <th scope="row">Fazer um commit (salvar alterações)</th>
        <td>
          <ol class="mb-0">
            <li>Abra o Controle de Versão pressionando <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd>.</li>
            <li>Pressione <kbd>Tab</kbd> até chegar na área de mensagem de commit.</li>
            <li>Digite uma mensagem explicando o que você mudou (por exemplo: "Corrigido erro na função de login").</li>
            <li>Pressione <kbd>Ctrl</kbd> + <kbd>Enter</kbd> para confirmar e salvar as alterações no histórico do Git.</li>
          </ol>
        </td>
      </tr>
      <tr>
        <th scope="row">Enviar alterações para o repositório remoto (push)</th>
        <td>
          <ol class="mb-2">
            <li>Depois de fazer o commit, pressione <kbd>Tab</kbd> para navegar pelos botões disponíveis.</li>
            <li>Procure pelo botão "Push" (ou "Enviar") e pressione <kbd>Enter</kbd>.</li>
            <li>Suas alterações serão enviadas para o GitHub, GitLab ou outro serviço onde seu projeto está hospedado.</li>
          </ol>
          <p class="mb-0"><strong>O que é push:</strong> É como "publicar" suas mudanças para que outras pessoas possam ver e usar. As alterações saem do seu computador e vão para a nuvem.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Baixar atualizações do repositório remoto (pull)</th>
        <td>
          <ol class="mb-2">
            <li>Abra o Controle de Versão pressionando <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd>.</li>
            <li>Pressione <kbd>Tab</kbd> para navegar pelos botões disponíveis.</li>
            <li>Procure pelo botão "Pull" (ou "Puxar") e pressione <kbd>Enter</kbd>.</li>
            <li>As atualizações feitas por outras pessoas serão baixadas para o seu computador.</li>
          </ol>
          <p class="mb-0"><strong>O que é pull:</strong> É como "atualizar" seu projeto com as mudanças que outras pessoas fizeram. Você baixa as alterações da nuvem para o seu computador.</p>
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Depuração {#debugging}
---

Essa ferramenta permite que você depure o código do projeto atual, inspecionando variáveis, acompanhando o fluxo de execução e encontrando erros. Depurar é o mesmo que "debugar" o código, ou seja, executar o programa de forma controlada para encontrar e corrigir problemas.

<div class="table-responsive">
  <table class="table table-bordered table-striped table-hover table-dark">
    <caption class="visually-hidden">
      Guia de uso da ferramenta de Depuração no Visual Studio Code com NVDA
    </caption>
    <thead class="table-dark">
      <tr>
        <th scope="col">Ação</th>
        <th scope="col">Instruções</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Acessar a Depuração</th>
        <td>
          <p class="mb-2">Pressione <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd> e o NVDA mudará o foco para a área de Depuração.</p>
          <p class="mb-0"><strong>O que isso faz:</strong> Permite iniciar a depuração do código e inspecionar as variáveis durante a execução do programa.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Iniciar a depuração</th>
        <td>
          <ol class="mb-0">
            <li>Abra a Depuração pressionando <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd>.</li>
            <li>Use as setas para cima e para baixo para navegar pelas opções de depuração.</li>
            <li>Encontre a opção "Iniciar a Depuração (F5)" e pressione <kbd>Enter</kbd>.</li>
            <li>Alternativamente, pressione diretamente <kbd>F5</kbd> para iniciar a depuração.</li>
            <li>O programa começará a ser executado em modo de depuração.</li>
          </ol>
        </td>
      </tr>
      <tr>
        <th scope="row">Adicionar pontos de interrupção (breakpoints)</th>
        <td>
          <ol class="mb-0">
            <li>Abra o arquivo onde deseja adicionar um ponto de interrupção.</li>
            <li>Navegue até a linha de código onde deseja que o programa pare durante a depuração.</li>
            <li>Pressione <kbd>F9</kbd> para adicionar ou remover um ponto de interrupção naquela linha.</li>
            <li>O NVDA anunciará "Breakpoint inserido" ou "Breakpoint removido".</li>
          </ol>
          <p class="mt-2 mb-0"><strong>O que é um ponto de interrupção:</strong> É como um "sinal de pare" no seu código. Quando o programa está sendo depurado e chega nessa linha, ele para a execução para que você possa examinar o que está acontecendo.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Inspecionar variáveis durante a depuração</th>
        <td>
          <ol class="mb-0">
            <li>Depois que o programa parar em um ponto de interrupção, pressione <kbd>Shift</kbd> + <kbd>Tab</kbd> várias vezes até chegar na seção "Variáveis".</li>
            <li>Use as setas para cima e para baixo para navegar entre as variáveis disponíveis.</li>
            <li>Pressione <kbd>Seta para direita</kbd> para expandir uma variável e ver seus valores internos.</li>
            <li>Pressione <kbd>Seta para esquerda</kbd> para recolher uma variável expandida.</li>
          </ol>
          <p class="mt-2 mb-0"><strong>Para que serve:</strong> Permite ver os valores das variáveis naquele exato momento da execução, ajudando a encontrar valores incorretos ou inesperados.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Controlar a execução do programa</th>
        <td>
          <ul class="mb-0">
            <li><kbd>F5</kbd>: Continuar a execução até o próximo ponto de interrupção ou até o fim do programa.</li>
            <li><kbd>F10</kbd>: Executar a próxima linha de código sem entrar em funções (Step Over).</li>
            <li><kbd>F11</kbd>: Executar a próxima linha de código entrando em funções se houver (Step Into).</li>
            <li><kbd>Shift</kbd> + <kbd>F11</kbd>: Sair da função atual e voltar para quem a chamou (Step Out).</li>
            <li><kbd>Shift</kbd> + <kbd>F5</kbd>: Parar a depuração completamente.</li>
          </ul>
          <p class="mt-2 mb-0"><strong>Para que serve:</strong> Estas teclas permitem controlar como o programa é executado durante a depuração, ajudando a entender o fluxo do código e encontrar problemas específicos.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Configurar a depuração para diferentes linguagens</th>
        <td>
          <ol class="mb-2">
            <li>Abra a Depuração pressionando <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd>.</li>
            <li>Procure pela opção "Criar um arquivo launch.json" e pressione <kbd>Enter</kbd>.</li>
            <li>O VS Code perguntará qual ambiente você quer configurar. Selecione a linguagem ou ambiente apropriado (como Node.js, Python, etc.).</li>
            <li>Um arquivo launch.json será criado com a configuração básica para a linguagem escolhida.</li>
          </ol>
          <p class="mb-0"><strong>O que é o launch.json:</strong> É um arquivo que contém as configurações para a depuração do seu programa. Ele define como o VS Code deve iniciar e depurar seu código.</p>
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Extensões {#extensoes}
---

<div class="table-responsive">
  <table class="table table-bordered table-hover table-dark text-white">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Recurso</th>
        <th scope="col">Descrição</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>O que são</td>
        <td>Extensões são complementos que adicionam funcionalidades ao VS Code. Elas podem adicionar suporte a linguagens, temas, depuradores, formatadores de código, e muito mais.</td>
      </tr>
      <tr>
        <td>Acesso à loja de extensões</td>
        <td>
          <p><strong>Com mouse:</strong> Clique no ícone de extensões na barra lateral (ícone de quatro quadrados).</p>
          <p><strong>Com teclado:</strong> Pressione <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd> (Windows/Linux) ou <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd> (macOS).</p>
          <p class="mb-0"><strong>Com leitor de tela:</strong> Use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd> ou navegue com <kbd>Tab</kbd> até encontrar a seção "Extensões".</p>
        </td>
      </tr>
      <tr>
        <td>Instalação de extensões</td>
        <td>
          <ol>
            <li>Acesse a visualização de Extensões.</li>
            <li>Digite o nome da extensão desejada na caixa de pesquisa.</li>
            <li>Selecione a extensão na lista de resultados.</li>
            <li>Clique em "Instalar" ou pressione <kbd>Enter</kbd> e depois <kbd>Tab</kbd> até o botão "Instalar".</li>
          </ol>
          <p class="mb-0"><strong>Extensões populares:</strong> Alguns exemplos incluem "Python", "Live Server", "ESLint", "Prettier", "GitLens" e "Material Icon Theme".</p>
        </td>
      </tr>
      <tr>
        <td>Gerenciamento de extensões</td>
        <td>
          <p><strong>Desativar:</strong> Na visualização de extensões instaladas, clique no botão de engrenagem ao lado da extensão e selecione "Desativar".</p>
          <p><strong>Desinstalar:</strong> Na visualização de extensões instaladas, clique no botão de engrenagem ao lado da extensão e selecione "Desinstalar".</p>
          <p class="mb-0"><strong>Atualizar:</strong> Na visualização de extensões, você pode ver quais extensões têm atualizações disponíveis e atualizar todas ou individualmente.</p>
        </td>
      </tr>
      <tr>
        <td>Configuração de extensões</td>
        <td>
          <ol>
            <li>Após instalar uma extensão, acesse as configurações do VS Code com <kbd>Ctrl</kbd>+<kbd>,</kbd> (Windows/Linux) ou <kbd>Cmd</kbd>+<kbd>,</kbd> (macOS).</li>
            <li>Digite o nome da extensão na barra de pesquisa para encontrar suas configurações específicas.</li>
            <li>Ajuste as configurações conforme necessário.</li>
          </ol>
          <p class="mb-0"><strong>Dica:</strong> Muitas extensões adicionam comandos que podem ser acessados pelo painel de comando (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> ou <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>).</p>
        </td>
      </tr>
    </tbody>
  </table>
</div>

### GitHub Copilot (se disponível) {#github-copilot}
---

<div class="table-responsive">
  <table class="table table-bordered table-hover table-dark text-white">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Recurso</th>
        <th scope="col">Descrição</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>O que é</td>
        <td>O Copilot é uma extensão de IA (Inteligência Artificial) desenvolvida pela GitHub e OpenAI que ajuda a escrever código fornecendo sugestões de código, snippets e documentação diretamente no editor. O Copilot é alimentado por um modelo de linguagem de IA treinado em milhões de linhas de código-fonte de código aberto.</td>
      </tr>
      <tr>
        <td>Como acessar</td>
        <td>
          <p>Se o Copilot estiver disponível, ele aparecerá como um ícone na Barra de Atividades.</p>
          <p><strong>Com teclado:</strong> Pressione <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> para abrir a Paleta de Comandos, digite "Copilot: Chat" e pressione a seta para baixo para procurar a opção "Chat: Focar no Modo de Exibição GitHub Copilot" e pressione <kbd>Enter</kbd> para abrir o Copilot chat no VS Code.</p>
        </td>
      </tr>
      <tr>
        <td>Interação com o Copilot Chat</td>
        <td>
          <p>Use o Copilot chat para interagir com o assistente de IA e obter ajuda na escrita de código. Você pode digitar perguntas, solicitar sugestões de código, snippets ou documentação, e o Copilot responderá com as informações solicitadas.</p>
          <p>Quando o chat for aberto, o foco estará no campo de digitação de mensagens. Digite sua pergunta ou solicitação e pressione <kbd>Enter</kbd> para enviar a mensagem.</p>
          <p class="mb-0">O Copilot Chat é especialmente útil para:
            <ul>
              <li>Explicar conceitos de programação</li>
              <li>Gerar exemplos de código</li>
              <li>Depurar problemas no seu código</li>
              <li>Aprender sobre bibliotecas e frameworks</li>
            </ul>
          </p>
        </td>
      </tr>
      <tr>
        <td>Chat por voz</td>
        <td>
          <p>Ao lado do campo de digitação de mensagens, você encontrará um botão de "iniciar chat por voz" que permite que você use a voz para interagir com o Copilot.</p>
          <p><strong>Para ativar:</strong> Pressione <kbd>Tab</kbd> até chegar ao botão de "iniciar chat por voz" e pressione <kbd>Enter</kbd>. Em seguida, fale sua pergunta ou solicitação.</p>
          <p><strong>Para desativar:</strong> Pressione <kbd>Enter</kbd> novamente no botão de "iniciar chat por voz".</p>
        </td>
      </tr>
      <tr>
        <td>Anexar contexto</td>
        <td>
          <ol>
            <li>Depois do botão de "iniciar chat por voz", você encontrará um botão de "anexar contexto" que permite fornecer informações adicionais ao Copilot.</li>
            <li>Pressione <kbd>Enter</kbd> para ativar o botão de "anexar contexto". Uma caixa de pesquisa será exibida.</li>
            <li>Digite o nome do arquivo do seu projeto que você quer que o Copilot leve em consideração e pressione <kbd>Enter</kbd> para anexar o contexto.</li>
            <li>O Copilot responderá considerando os arquivos que você anexou como contexto.</li>
          </ol>
          <p class="mb-0"><strong>Dica:</strong> Anexar arquivos relevantes ao contexto melhora significativamente a qualidade e precisão das respostas do Copilot, especialmente para questões específicas do seu projeto.</p>
        </td>
      </tr>
    </tbody>
  </table>
</div>

Esses são os principais componentes da barra de atividades ou seletor de exibição do Visual Studio Code. No entanto, a barra de atividades pode conter outros ícones ou opções dependendo das extensões que você tiver instalado no editor. 

No fim da barra de atividades, pode ser que não seja lido pelo NVDA, mas é possível de se encontrar duas opções usando a seta para baixo, passando por todos os ícones da barra de atividades. As opções são: "Contas" e "Configurações" ou "Gerenciar".

A opção "Contas" permite que você faça login ou logout da sua conta da Microsoft, GitHub ou outra conta que você tenha vinculado ao VS Code. A opção "Configurações" ou "Gerenciar" permite que você acesse as configurações do editor, onde você pode personalizar o VS Code de acordo com suas preferências.

##  Principal marco {#principal-marco}
---

Anteriormente nesse texto, foi mencionado que o Visual Studio Code possui um marco principal, mas o que é um marco? Ou melhor, o que é um marco principal? Um marco é um elemento HTML que define uma região importante em uma página web.

Existem vários tipos de marcos, como o marco de navegação, o marco de cabeçalho, o marco de rodapé, entre outros. Cada tipo de marco tem uma função específica e ajuda a estruturar o conteúdo da página de forma acessível.

O marco principal é um marco especial que define o conteúdo principal de uma página ou aplicativo da web. Ele é usado para identificar o conteúdo principal de uma página e é frequentemente usado por leitores de tela para navegar rapidamente até o conteúdo mais importante.

Mas, como assim "web"? O Visual Studio Code é um editor de código-fonte, não é uma página web. Sim, é verdade que o VS Code é um editor de código-fonte, mas ele é construído com Electron, que é uma ferramenta que permite criar aplicativos de desktop (área de trabalho) usando tecnologias web, como HTML, CSS e JavaScript.

Esses aplicativos funcionam como aplicativos nativos, mas são baseados em tecnologias web, a vantagem é que eles podem ser executados em diferentes sistemas operacionais, como Windows, macOS e Linux, sem a necessidade de reescrever o código para cada plataforma.

No caso do Visual Studio Code, isso quer dizer que ele é um programa desktop que utiliza tecnologias web para criar sua interface e funcionalidades. Por isso ele possui elementos HTML, como os marcos, incluindo o marco principal.

No Visual Studio Code, o marco principal é usado para identificar a área de edição de código, onde você pode escrever, editar e visualizar o código-fonte do projeto. O marco principal é uma parte essencial do editor, pois é onde a maior parte do trabalho de desenvolvimento é feito.

Ao navegar pelo VS Code com um leitor de telas, você pode usar o marco principal para pular rapidamente para a área de edição de código e começar a trabalhar no código do projeto. 

### Componentes do Marco Principal {#componentes-do-marco-principal}
---

- **Editor de Código:** Esta é a área onde você escreve, edita e visualiza o código. O editor ocupa a maior parte do Marco Principal e é o foco central na edição de código.
- **Guias abertas:** As guias representam arquivos ou documentos abertos. Você pode ter várias guias abertas ao mesmo tempo, permitindo alternar rapidamente entre diferentes arquivos.
- **Divisão de Editores (Grupos):** O VS Code permite dividir o editor em diferentes grupos, permitindo que você visualize e edite múltiplos arquivos lado a lado.

### Navegação e Interação com o Marco Principal {#navegacao-e-interacao-com-o-marco-principal}
---

**Navegar entre guias:**

- <kbd>Ctrl</kbd> + <kbd>Tab</kbd>: Use esta combinação de teclas para alternar (trocar) entre as guias de arquivos abertas no editor. O NVDA anunciará o nome do arquivo da guia selecionada.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd>: Voltar para a guia anterior.
- <kbd>Ctrl</kbd> + <kbd>PgUp</kbd> e <kbd>Ctrl</kbd> + <kbd>PgDown</kbd>: Navega entre as guias de forma linear (uma por vez). Por exemplo, imagine que você tenha três guias abertas no editor: "index.html", "style.css" e "script.js".
  - Se você estiver na guia "index.html" e pressionar <kbd>Ctrl</kbd> + <kbd>PgDown</kbd>, você irá para a guia "style.css".
  - Pressionando novamente <kbd>Ctrl</kbd> + <kbd>PgDown</kbd>, você irá para a guia "script.js".
  - Para voltar, pressione <kbd>Ctrl</kbd> + <kbd>PgUp</kbd>.
  - Isso é útil quando você tem muitas guias abertas e quer navegar entre elas de forma sequencial.
- <kbd>Ctrl</kbd> + <kbd>W</kbd>: Fecha a guia atualmente ativa (se você tiver mais de uma guia aberta). O NVDA anunciará o nome do próximo arquivo em foco após o fechamento da guia.

**Navegar entre divisões de editores (grupos):**

- <kbd>Ctrl</kbd> + <kbd>1</kbd>, <kbd>Ctrl</kbd> + <kbd>2</kbd>, <kbd>Ctrl</kbd> + <kbd>3</kbd>, etc.: Use esta combinação de teclas para alternar entre os diferentes grupos de editores. Por exemplo, se você tiver dividido o editor em dois grupos (divisões), pressione <kbd>Ctrl</kbd> + <kbd>1</kbd> para focar no primeiro grupo e <kbd>Ctrl</kbd> + <kbd>2</kbd> para focar no segundo grupo.
- <kbd>Ctrl</kbd> + <kbd>\</kbd>: Use esta combinação de teclas para dividir o editor em dois grupos (divisões) verticalmente. O NVDA anunciará "Dividir editor para o lado direito".
-  <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>\</kbd>: Use esta combinação de teclas para dividir o editor em dois grupos (divisões) horizontalmente. O NVDA anunciará "Dividir editor para baixo".
-   <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Seta para a Direita</kbd> ou <kbd>Seta para a Esquerda</kbd>: Move o editor ativo para o próximo ou anterior grupo. Exemplo: se você tem dois grupos abertos e o foco está no grupo da esquerda, pressione <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Seta para a Direita</kbd> para mover o editor para o grupo da direita.

**Navegar e interagir com o editor de código:**

- <kbd>Setas Esquerda/Direita</kbd>: Move o cursor ao longo da linha, caractere por caractere.

**Navegação e interação com o texto no editor de código:**

- <kbd>Shift</kbd> + <kbd>Seta para Esquerda</kbd> ou <kbd>Seta para Direita</kbd>: Seleciona o texto caractere por caractere. Ou seja, você pode usar essas teclas para selecionar o texto um caractere de cada vez.
- <kbd>Shift</kbd> + <kbd>Seta para Cima</kbd> ou <kbd>Seta para Baixo</kbd>: Seleciona o texto linha por linha.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Seta para Esquerda</kbd> ou <kbd>Seta para Direita</kbd>: Seleciona o texto palavra por palavra.
- <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Seta para Cima</kbd> ou <kbd>Seta para Baixo</kbd>: Seleciona o texto parágrafo por parágrafo.
- <kbd>Ctrl</kbd> + <kbd>A</kbd>: Seleciona todo o texto no arquivo.
- <kbd>Ctrl</kbd> + <kbd>X</kbd>: Recorta o texto selecionado.
- <kbd>Ctrl</kbd> + <kbd>C</kbd>: Copia o texto selecionado.
- <kbd>Ctrl</kbd> + <kbd>V</kbd>: Cola o texto da área de transferência no local do cursor.
- <kbd>Ctrl</kbd> + <kbd>Z</kbd>: Desfaz a última ação.
- <kbd>Ctrl</kbd> + <kbd>Y</kbd>: Refaz a última ação desfeita.
- <kbd>Insert</kbd> + <kbd>Barra de Espaço</kbd>: Use este comando para alternar entre o Modo de Foco e o Modo de Navegação do NVDA. No editor de código, o Modo de Foco deve estar ativado para que você possa interagir diretamente com o texto e utilizar os atalhos de teclado mencionados.
  - Isso quer dizer que, ao pressionar <kbd>Insert</kbd> + <kbd>Barra de Espaço</kbd>, você estará habilitando o Modo de Foco, permitindo que você digite, edite e navegue pelo código usando o teclado normalmente.
  - Caso queira desabilitar o Modo de Foco e voltar ao Modo de Navegação, basta pressionar novamente <kbd>Insert</kbd> + <kbd>Barra de Espaço</kbd>.

Essas são algumas das principais teclas de atalho que você pode usar para navegar e interagir com o marco principal do Visual Studio Code. Existem muitas outras teclas de atalho disponíveis no editor, que podem ser usadas para realizar diferentes tarefas, como abrir arquivos, salvar alterações, executar comandos, entre outras operações.

Você pode consultar a documentação oficial do VS Code para obter uma lista completa de atalhos de teclado disponíveis que te interessam. A documentação pode ser encontrada em: <a href="https://code.visualstudio.com/docs/getstarted/keybindings" target="_blank" rel="noopener">https://code.visualstudio.com/docs/getstarted/keybindings</a>.

## Barra de Status {#barra-de-status}
---

A Barra de Status fica na parte de baixo da janela do VS Code. Ela mostra informações importantes sobre o que você está fazendo no momento, como o nome do arquivo que você está editando, onde está o cursor, qual linguagem está sendo usada e outros detalhes úteis.

A Barra de Status ajuda muito durante a programação, pois permite que você veja rapidamente informações importantes sem precisar procurar em vários lugares diferentes.

### Componentes da Barra de Status {#componentes-da-barra-de-status}
---

- **Nome do arquivo:** Mostra qual arquivo você está editando no momento. Por exemplo, se você abriu um arquivo chamado "index.html", esse nome vai aparecer na Barra de Status.

- **Linguagem de programação:** Mostra qual tipo de linguagem está sendo usada no arquivo. Por exemplo, se você está escrevendo em Python, vai aparecer "Python" na Barra de Status.

- **Posição do cursor:** Mostra em qual linha e coluna o cursor está no momento. Por exemplo, se o cursor estiver na linha 10 e na coluna 5, você verá "Ln 10, Col 5". Isso ajuda você a saber exatamente onde está no arquivo.

- **Tipo de texto:** Mostra como o texto está sendo salvo (UTF-8, por exemplo). Isso é importante porque diferentes programas podem usar diferentes formas de salvar texto.

- **Tipo de fim de linha:** Mostra como o VS Code está marcando o final de cada linha no arquivo. Cada sistema operacional (Windows, Mac, Linux) pode usar um jeito diferente de marcar o fim da linha:
  - Windows usa CRLF
  - Mac e Linux geralmente usam LF
  
  Saber isso é útil quando você trabalha com arquivos que vêm de computadores diferentes.

- **Espaços e tabulações:** Mostra quantos espaços são usados quando você aperta a tecla Tab. Isso ajuda a manter a indentação consistente (os espaços no início das linhas que organizam o código).

- **Notificações:** Mostra avisos importantes sobre o que está acontecendo. Por exemplo, se tem algum erro no código, se uma extensão foi atualizada ou se alguma tarefa terminou de rodar. Essas notificações ajudam você a ficar por dentro do que está acontecendo e resolver problemas quando necessário.

### Navegação e Interação com a Barra de Status {#navegacao-e-interacao-com-a-barra-de-status}
---

**Como acessar a Barra de Status:**
- Aperte <kbd>F6</kbd> várias vezes até ouvir o NVDA dizer "Barra de Status". Quando isso acontecer, você estará na Barra de Status.

**Como se movimentar entre os componentes:**
- Use as teclas <kbd>Seta para a Direita</kbd> e <kbd>Seta para a Esquerda</kbd> para passar de um componente para outro. O NVDA vai ler em voz alta cada componente quando você passar por ele.

**Como interagir com os componentes:**
- <kbd>Enter</kbd>: Aperte Enter em qualquer componente que possa ser clicado para ver mais opções ou fazer alterações.
- <kbd>Tab</kbd>: Dentro dos menus que abrirem, use Tab para se movimentar entre as opções.
- <kbd>Seta para Cima</kbd> e <kbd>Seta para Baixo</kbd>: Use essas teclas para escolher opções nos menus, como quando você quer mudar a codificação do arquivo.
- <kbd>Esc</kbd>: Aperte Esc para fechar um menu sem fazer nenhuma alteração.

## Criando um novo arquivo no VS Code {#criando-um-novo-arquivo-no-vs-code}
---

Pressione <kbd>Ctrl</kbd> + <kbd>N</kbd> para criar um novo arquivo. O NVDA irá anunciar "novo arquivo sem título", indicando que o novo arquivo foi criado e está pronto para edição.

Agora, precisamos salvar o arquivo como um arquivo HTML. Para isso, pressione <kbd>Ctrl</kbd> + <kbd>S</kbd> para abrir a caixa de diálogo "Salvar como". O NVDA irá anunciar "Salvar como" e você poderá digitar o nome do arquivo, como "index.html". Pressione <kbd>Enter</kbd> para salvar o arquivo.

Agora que o arquivo foi salvo, você pode começar a escrever o código HTML. Digite o seguinte código no arquivo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Arquivo HTML</title>
</head>
<body>
    <h1>Olá, Mundo!</h1>
    <p>Este é o meu primeiro arquivo HTML criado no Visual Studio Code.</p>
</body>
</html>
```
{: .bg-dark .text-light .p-3}

**Observação:** Não é preciso entender o código HTML neste momento. Entenda apenas que este é um código HTML básico que cria uma página web simples com um título e um parágrafo.

No momento o importante é digitar o código no arquivo e salvar as alterações. Para isso, pressione <kbd>Ctrl</kbd> + <kbd>S</kbd> para salvar o código que você acabou de digitar no arquivo "index.html".

## Navegando pelo código-fonte com o NVDA {#navegando-pelo-codigo-fonte-com-o-nvda}
---

Agora que o código HTML está pronto, vamos aprender a navegar por ele utilizando o NVDA. Isso é importante para que você possa entender a estrutura do código e fazer edições quando necessário.

<div class="table-responsive">
  <table class="table table-bordered table-striped table-hover table-dark text-white border-secondary">
    <caption class="visually-hidden">
      Guia de navegação pelo código-fonte usando NVDA
    </caption>
    <thead class="thead-dark">
      <tr>
        <th scope="col">Tipo de navegação</th>
        <th scope="col">Descrição</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Movendo-se entre linhas</th>
        <td>
          <p>Use as <kbd>Seta para Cima</kbd> e <kbd>Seta para Baixo</kbd> para mover o cursor entre as linhas do código. O NVDA irá anunciar o conteúdo de cada linha conforme você navega.</p>
          <p>Um ponto de atenção é que o NVDA vai ler tudo que tem na linha, no começo pode parecer um pouco cansativo, mas com o tempo você vai se acostumar.</p>
          <p>Uma dica é criar um perfil no NVDA para programação, onde você pode configurar para que ele leia apenas o que você desejar, recomenda-se que nesse perfil a opção "grau de pontuação" esteja em "tudo" para ir aprendendo como o código é escrito. Depois, com mais prática, você pode mudar para "alguns" ou "nenhum".</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Movendo-se dentro de uma linha</th>
        <td>
          Use as <kbd>Setas para a Esquerda</kbd> e <kbd>Setas para a Direita</kbd> para mover o cursor entre os caracteres da linha. O NVDA irá anunciar cada caractere conforme você navega.
        </td>
      </tr>
      <tr>
        <th scope="row">Ir para o início ou fim de uma linha</th>
        <td>
          Pressione <kbd>Home</kbd> para mover o cursor para o início da linha atual, ou <kbd>End</kbd> para ir ao final da linha. O NVDA anunciará a nova posição do cursor.
        </td>
      </tr>
      <tr>
        <th scope="row">Navegando por palavras</th>
        <td>
          Use <kbd>Ctrl</kbd> + <kbd>Seta para a Direita</kbd> para mover o cursor para a próxima palavra, ou <kbd>Ctrl</kbd> + <kbd>Seta para a Esquerda</kbd> para a palavra anterior. O NVDA anunciará cada palavra que você está navegando.
        </td>
      </tr>
      <tr>
        <th scope="row">Selecionando texto</th>
        <td>
          <p>Para selecionar texto, pressione <kbd>Shift</kbd> enquanto pressiona a seta correspondente à direção que deseja selecionar.</p>
          <p>Por exemplo, para selecionar um caractere à direita, pressione <kbd>Shift</kbd> + <kbd>Seta para a Direita</kbd>.</p>
          <p>Para selecionar uma palavra à esquerda, pressione <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Seta para a Esquerda</kbd>.</p>
          <p>Para selecionar uma linha inteira, pressione <kbd>Shift</kbd> + <kbd>Seta para Cima</kbd> ou <kbd>Seta para Baixo</kbd>.</p>
          <p>O NVDA irá anunciar o texto selecionado conforme você navega.</p>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Terminais integrados {#terminais-integrados}
---

O Visual Studio Code possui um terminal integrado que permite executar comandos de terminal diretamente no editor.

Isso é útil para realizar tarefas de desenvolvimento como compilar código, executar scripts, gerenciar repositórios Git, entre outras operações, sem precisar sair do ambiente de desenvolvimento.

<div class="table-responsive">
  <table class="table table-bordered table-striped table-hover table-dark text-white border-secondary">
    <caption class="visually-hidden">
      Guia de utilização do terminal integrado do VS Code com NVDA
    </caption>
    <thead class="thead-dark">
      <tr>
        <th scope="col">Operação</th>
        <th scope="col">Descrição</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Acessando o terminal integrado</th>
        <td>
          <p>Pressione <kbd>Ctrl</kbd> + <kbd>`</kbd> (tecla acento grave, localizada ao lado do número 1 no teclado) para abrir o terminal integrado. O NVDA anunciará "Terminal", seguido do nome do shell padrão que está sendo usado (por exemplo, "PowerShell", "Bash", ou "Command Prompt").</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Confirmando que o terminal está ativo</th>
        <td>
          <p>Após abrir o terminal, o foco estará automaticamente na linha de comando do terminal. O NVDA irá anunciar algo como "Terminal 1: Shell", confirmando que o terminal está ativo e pronto para receber comandos.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Executando comandos no terminal</th>
        <td>
          <p>Para executar um comando, simplesmente digite o comando desejado e pressione <kbd>Enter</kbd>.</p>
          <p>Por exemplo, você pode digitar <code class="text-white-50">ls</code> (no Linux ou macOS) ou <code class="text-white-50">dir</code> (no Windows) para listar o conteúdo do diretório (pasta) atual.</p>
          <p>O NVDA irá anunciar o comando enquanto você o digita e, após pressionar <kbd>Enter</kbd>, ele lerá a saída do comando.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Lendo a saída do terminal</th>
        <td>
          <p>Use <kbd>Shift</kbd> + <kbd>Seta para Cima</kbd> ou <kbd>Shift</kbd> + <kbd>Seta para Baixo</kbd> para navegar linha por linha através da saída do terminal. O NVDA lerá cada linha conforme você navega.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Navegando entre múltiplos terminais</th>
        <td>
          <p>Para alternar entre terminais abertos, use <kbd>Ctrl</kbd> + <kbd>`</kbd> para abrir a lista de terminais disponíveis e <kbd>Ctrl</kbd> + <kbd>Seta para Cima</kbd> ou <kbd>Ctrl</kbd> + <kbd>Seta para Baixo</kbd> para mover o foco entre eles. O NVDA anunciará o nome do terminal ativo e o número de terminais abertos.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Navegando pelo texto no terminal</th>
        <td>
          <p>Para mover o cursor dentro da linha de comando, use as <kbd>Setas para Esquerda</kbd> e <kbd>Direita</kbd>. O NVDA anunciará o caractere ou palavra conforme você se move.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Copiando e colando no terminal</th>
        <td>
          <p>Use <kbd>Ctrl</kbd> + <kbd>C</kbd> para copiar texto e <kbd>Ctrl</kbd> + <kbd>V</kbd> para colar. O NVDA confirmará com "Copiado para a área de transferência" ou "Colado".</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Fechando um terminal</th>
        <td>
          <p>Para fechar o terminal ativo, pressione <kbd>Ctrl</kbd> + <kbd>W</kbd>. O NVDA confirmará o fechamento.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Alternando entre o terminal e o editor de código</th>
        <td>
          <p>Pressione <kbd>Ctrl</kbd> + <kbd>`</kbd> para alternar entre o terminal e o editor de código. O NVDA anunciará onde o foco está.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Copiando comandos do editor de código para o terminal</th>
        <td>
          <p>Selecione o texto no editor, copie-o com <kbd>Ctrl</kbd> + <kbd>C</kbd> e cole-o no terminal com <kbd>Ctrl</kbd> + <kbd>V</kbd>. O NVDA confirmará as ações.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Autocompletar comandos</th>
        <td>
          <p>Pressione <kbd>Tab</kbd> para autocompletar comandos no terminal. O NVDA anunciará as sugestões disponíveis.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Histórico de comandos</th>
        <td>
          <p>Use <kbd>Seta para Cima</kbd> e <kbd>Seta para Baixo</kbd> para percorrer o histórico de comandos. O NVDA anunciará os comandos conforme você navega.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Procurando na saída do terminal</th>
        <td>
          <p>Use <kbd>Ctrl</kbd> + <kbd>F</kbd> para abrir a caixa de pesquisa no terminal e digitar o termo desejado. O NVDA destacará a palavra ou frase.</p>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Extensões {#extensoes}
---

O Visual Studio Code possui uma vasta biblioteca de extensões que podem ser instaladas para adicionar funcionalidades extras ao editor. Essas extensões podem ajudar a melhorar a produtividade, adicionar suporte a novas linguagens de programação, integrar ferramentas de desenvolvimento e muito mais.

<div class="table-responsive">
  <table class="table table-bordered table-striped table-hover table-dark text-white border-secondary">
    <caption class="visually-hidden">
      Guia de gerenciamento de extensões no VS Code com NVDA
    </caption>
    <thead class="thead-dark">
      <tr>
        <th scope="col">Operação</th>
        <th scope="col">Descrição</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Abrindo o painel de extensões</th>
        <td>
          <p>Pressione <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd>. O NVDA anunciará "Extensões", seguido pelo número de extensões instaladas e uma breve descrição da interface.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Confirmando que o painel de extensões está ativo</th>
        <td>
          <p>Após pressionar o atalho, o foco estará na barra de pesquisa de extensões, onde você pode buscar novas extensões para instalar. O NVDA confirmará isso ao anunciar "Campo de pesquisa de extensões".</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Pesquisando uma extensão</th>
        <td>
          <p>No campo de pesquisa que está ativo, digite o nome ou palavra-chave da extensão que deseja instalar. Por exemplo, para instalar uma extensão de suporte à linguagem Python, digite "Python" e pressione <kbd>Enter</kbd>. O NVDA lerá os resultados da pesquisa conforme eles aparecem.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Navegando pelos resultados da pesquisa</th>
        <td>
          <p>Use as <kbd>Setas para Cima</kbd> e <kbd>Setas para Baixo</kbd> para navegar pelos resultados. O NVDA anunciará o nome da extensão, sua classificação por estrelas, o número de downloads e uma breve descrição.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Selecionando e instalando uma extensão</th>
        <td>
          <p>Quando encontrar a extensão desejada, pressione <kbd>Enter</kbd> para abrir a página de detalhes da extensão. O NVDA lerá o nome da extensão, seguido de uma descrição mais detalhada e as ações disponíveis (como instalar ou avaliar a extensão). Para instalar, pressione <kbd>Tab</kbd> até encontrar o botão "Instalar" e, em seguida, pressione <kbd>Enter</kbd>. O NVDA anunciará "Instalando", e após a conclusão, confirmará com "Instalação concluída".</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Verificando a instalação</th>
        <td>
          <p>Após a instalação, a extensão estará disponível para uso. O NVDA anunciará "Instalada" no botão de instalação, que agora pode ter mudado para "Desinstalar" ou "Desativar", confirmando que a extensão foi instalada corretamente.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Visualizando extensões instaladas</th>
        <td>
          <p>Pressione <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd> para abrir o painel de extensões. Em seguida, pressione <kbd>Tab</kbd> até o NVDA anunciar "Extensões instaladas". Este é o local onde todas as extensões atualmente instaladas estão listadas.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Navegando pelas extensões instaladas</th>
        <td>
          <p>Use as <kbd>Setas para Cima</kbd> e <kbd>Setas para Baixo</kbd> para navegar pela lista de extensões instaladas. O NVDA anunciará o nome de cada extensão, seguido por sua descrição e ações disponíveis.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Desinstalando ou desativando uma extensão</th>
        <td>
          <p>Para desinstalar uma extensão, selecione a extensão desejada na lista e pressione <kbd>Enter</kbd> para abrir a página de detalhes. Em seguida, pressione <kbd>Tab</kbd> até encontrar o botão "Desinstalar" e pressione <kbd>Enter</kbd>. O NVDA confirmará a remoção da extensão. Se você preferir desativar a extensão temporariamente, localize o botão "Desativar" usando a tecla <kbd>Tab</kbd> e pressione <kbd>Enter</kbd>. O NVDA anunciará que a extensão foi desativada.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Atualizando extensões</th>
        <td>
          <p>Quando há atualizações disponíveis para uma extensão, o NVDA anunciará isso ao navegar pelas extensões instaladas. Para atualizar uma extensão, selecione a extensão na lista e pressione <kbd>Enter</kbd> para abrir a página de detalhes. Pressione <kbd>Tab</kbd> até encontrar o botão "Atualizar" e pressione <kbd>Enter</kbd>. O NVDA confirmará a atualização.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Acessando as configurações da extensão</th>
        <td>
          <p>Após instalar uma extensão, muitas delas oferecem opções de configuração. Para acessar essas opções, vá até a extensão instalada no painel de extensões e pressione <kbd>Enter</kbd> para abrir a página de detalhes. Pressione <kbd>Tab</kbd> até encontrar o botão "Gerenciar" e, em seguida, pressione <kbd>Enter</kbd>. Isso abrirá um submenu com opções como "Configurações", "Documentação" e "Atalhos de teclado".</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Ajustando as configurações</th>
        <td>
          <p>Se a extensão oferece opções de configuração, selecionar "Configurações" levará você às configurações específicas da extensão. O NVDA lerá cada configuração conforme você navega com as <kbd>Setas para Cima</kbd> e <kbd>Baixo</kbd>.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Consultando a documentação da extensão</th>
        <td>
          <p>Para acessar a documentação, vá até a extensão instalada no painel de extensões e pressione <kbd>Enter</kbd>. Em seguida, pressione <kbd>Tab</kbd> até encontrar o botão "Documentação" e pressione <kbd>Enter</kbd>. O NVDA abrirá uma nova aba com as informações detalhadas sobre a extensão.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Visualizando extensões recomendadas</th>
        <td>
          <p>No painel de extensões, pressione <kbd>Tab</kbd> até o NVDA anunciar "Extensões recomendadas". Esta seção contém uma lista de extensões sugeridas com base nas suas atividades ou no tipo de projeto em que você está trabalhando.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Instalando extensões recomendadas</th>
        <td>
          <p>Navegue pelas extensões recomendadas com as <kbd>Setas para Cima</kbd> e <kbd>Baixo</kbd>. Se encontrar algo interessante, siga os mesmos passos de instalação descritos anteriormente.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Explorando extensões populares</th>
        <td>
          <p>Se desejar ver as extensões mais populares, pressione <kbd>Tab</kbd> até o NVDA anunciar "Extensões populares". Aqui você encontrará extensões amplamente utilizadas e bem avaliadas pela comunidade de desenvolvedores.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Verificando a compatibilidade</th>
        <td>
          <p>Algumas extensões podem não ser compatíveis com a versão específica do VS Code que você está usando. O NVDA normalmente anunciará uma mensagem de aviso se uma extensão não for compatível.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Utilizando comandos de extensões</th>
        <td>
          <p>Muitas extensões adicionam comandos específicos que podem ser acessados pela Paleta de Comandos (pressionando <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>). O NVDA anunciará os comandos disponíveis conforme você digita.</p>
        </td>
      </tr>
      <tr>
        <th scope="row">Sincronizando suas extensões</th>
        <td>
          <p>Se você trabalha em múltiplos dispositivos, pode ser útil sincronizar suas extensões e configurações entre eles. Pressione <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>, digite "Sync: Turn On" e pressione <kbd>Enter</kbd>. O NVDA guiará você pelos passos para configurar a sincronização.</p>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Resumo {#resumo}
---

E assim concluímos nossa introdução ao Visual Studio Code! Vimos como navegar pela interface do editor, explorar o menu de atividades, entender o marco principal, utilizar a barra de status, criar um novo arquivo, navegar pelo código-fonte com o NVDA, usar o terminal integrado e gerenciar extensões.

O Visual Studio Code é uma ferramenta poderosa e versátil que pode ser adaptada às suas necessidades de desenvolvimento. Com o tempo e a prática, você se sentirá cada vez mais confortável utilizando esse editor incrível.

Lembre-se, sempre que tiver dúvidas, ou quiser consultar todos os atalhos de teclado disponíveis, você pode acessar a Paleta de Comandos pressionando <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> e digitar "Keyboard Shortcuts" para ver a lista completa. É sempre bom ter essa referência à mão.

Além disso, saber outros comandos como <kbd>Ctrl</kbd> + <kbd>P</kbd> para abrir arquivos rapidamente, ou <kbd>Ctrl</kbd> + <kbd>K</kbd> seguido de <kbd>Ctrl</kbd> + <kbd>S</kbd> para abrir as configurações de atalhos de teclado pode fazer uma grande diferença na sua produtividade.

Por fim, explore, experimente e divirta-se programando com o Visual Studio Code. Boa sorte na sua jornada de desenvolvimento!