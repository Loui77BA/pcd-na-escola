---
layout: post
title: "Introdução à Programação: Conhecendo o Terminal"
description: "Esse artigo vai apresentar o terminal, uma ferramenta poderosa para pessoas programadoras, que torna possível executar tarefas mais rapidamente e com maior controle sobre o sistema operacional."
date: 2025-08-25 10:00:00 -0300
author: Louise Suelen
categories: [Programação]
tags: [programação, tecnologia]
permalink: /introducao-a-programacao-terminal/
lang: pt-BR
sumario: |
    <ul class="list-group bg-dark">
        <!-- 1. Apresentação -->
        <li class="list-group-item bg-dark text-white border-0 position-relative">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#apresentacao">
                <span class="badge bg-secondary">1</span>
                Apresentação
            </a>
        </li>

        <!-- 2. Qual a importância do terminal na programação? -->
        <li class="list-group-item bg-dark text-white border-0 position-relative">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#importancia-terminal">
                <span class="badge bg-secondary">2</span>
                Qual a importância do terminal na programação?
            </a>
        </li>

        <!-- 3. O que dá para fazer no terminal... -->
        <li class="list-group-item bg-dark text-white border-0 position-relative">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#o-que-da-para-fazer-no-terminal">
                <span class="badge bg-secondary">3</span>
                O que dá para fazer no terminal que a interface gráfica não faz (ou faz com muito mais dificuldade)
            </a>
        </li>

        <!-- 4. O que mais dá para fazer no terminal -->
        <li class="list-group-item bg-dark text-white border-0 position-relative">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#o-que-mais-da-para-fazer-no-terminal">
                <span class="badge bg-secondary">4</span>
                O que mais dá para fazer no terminal
            </a>
        </li>

        <!-- 5. Gerenciadores de Pacotes: entendendo o conceito... -->
        <li class="list-group-item bg-dark text-white border-0 position-relative">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#gerenciadores-de-pacotes">
                <span class="badge bg-secondary">5</span>
                Gerenciadores de Pacotes: entendendo o conceito de forma simples
            </a>
        </li>

        <!-- 6. Principais gerenciadores de pacotes -->
        <li class="list-group-item bg-dark text-white border-0 position-relative">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#principais-gerenciadores-de-pacotes">
                <span class="badge bg-secondary">6</span>
                Principais gerenciadores de pacotes
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0 position-relative">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#linux">
                        <span class="badge bg-secondary">6.1</span>
                        Linux
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0 position-relative">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#macos">
                        <span class="badge bg-secondary">6.2</span>
                        macOS
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0 position-relative">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#windows">
                        <span class="badge bg-secondary">6.3</span>
                        Windows
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0 position-relative">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#linguagens-de-programacao">
                        <span class="badge bg-secondary">6.4</span>
                        Nas linguagens de programação
                    </a>
                </li>
            </ul>
        </li>

        <!-- 7. Como o gerenciador de pacotes funciona -->
        <li class="list-group-item bg-dark text-white border-0 position-relative">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#como-o-gerenciador-de-pacotes-funciona">
                <span class="badge bg-secondary">7</span>
                Como o gerenciador de pacotes funciona
            </a>
        </li>

        <!-- 8. Começando a usar o terminal e se adaptando a ele -->
        <li class="list-group-item bg-dark text-white border-0 position-relative">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#começando-a-usar-o-terminal-e-se-adaptando-a-ele">
                <span class="badge bg-secondary">8</span>
                Começando a usar o terminal e se adaptando a ele
            </a>
        </li>

        <!-- 9. Quando você abre o terminal pela primeira vez -->
        <li class="list-group-item bg-dark text-white border-0 position-relative">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#quando-voce-abre-o-terminal-pela-primeira-vez">
                <span class="badge bg-secondary">9</span>
                Quando você abre o terminal pela primeira vez
            </a>
        </li>

        <!-- 10. Controlando Arquivos e Pastas -->
        <li class="list-group-item bg-dark text-white border-0 position-relative">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#controlando-arquivos-e-pastas">
                <span class="badge bg-secondary">10</span>
                Controlando Arquivos e Pastas
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0 position-relative">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#comando-ls-listar-arquivos">
                        <span class="badge bg-secondary">10.1</span>
                        Comando ls (listar arquivos)
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0 position-relative">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#comando-cd-mudar-diretorio">
                        <span class="badge bg-secondary">10.2</span>
                        Comando cd (mudar diretório)
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0 position-relative">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#comando-mkdir-criar-diretorio">
                        <span class="badge bg-secondary">10.3</span>
                        Comando mkdir (criar diretório)
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0 position-relative">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#comando-touch-criar-aquivos-ou-atualizar">
                        <span class="badge bg-secondary">10.4</span>
                        Comando touch (criar aquivos ou atualizar)
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0 position-relative">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#comando-cp-copiar-arquivos-ou-pastas">
                        <span class="badge bg-secondary">10.5</span>
                        Comando cp (copiar arquivos ou pastas)
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0 position-relative">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#comando-mv-mover-arquivos-ou-pastas">
                        <span class="badge bg-secondary">10.6</span>
                        Comando mv (mover arquivos ou pastas)
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0 position-relative">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#comando-rm-remover-arquivos-ou-pastas">
                        <span class="badge bg-secondary">10.7</span>
                        Comando rm (remover arquivos ou pastas)
                    </a>
                </li>
            </ul>
        </li>

        <!-- 11. Exercício 1: Praticando controle de arquivos e pastas -->
        <li class="list-group-item bg-dark text-white border-0 position-relative">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#exercicio-1-praticando-controle-de-arquivos-e-pastas">
                <span class="badge bg-secondary">11</span>
                Exercício 1: Praticando controle de arquivos e pastas
            </a>
        </li>

        <!-- 12. Trabalhando com textos e dados -->
        <li class="list-group-item bg-dark text-white border-0 position-relative">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#trabalhando-com-textos-e-dados">
                <span class="badge bg-secondary">12</span>
                Trabalhando com textos e dados
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0 position-relative">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#comando-cat-visualizar-conteudo">
                        <span class="badge bg-secondary">12.1</span>
                        Comando cat (visualizar conteúdo)
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0 position-relative">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#comando-grep-buscar-texto">
                        <span class="badge bg-secondary">12.2</span>
                        Comando grep (buscar texto)
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0 position-relative">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#comando-sed-editor-de-fluxo">
                        <span class="badge bg-secondary">12.3</span>
                        Comando sed (editor de texto sem abrir o arquivo)
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0 position-relative">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#comando-awk-processamento-de-texto">
                        <span class="badge bg-secondary">12.4</span>
                        Comando awk (trabalhar com dados em colunas)
                    </a>
                </li>
            </ul>
        </li>

        <!-- 13. Exercício 2: Praticando manipulação de texto -->
        <li class="list-group-item bg-dark text-white border-0 position-relative">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#exercicio-2-praticando-manipulacao-de-texto">
                <span class="badge bg-secondary">13</span>
                Exercício 2: Praticando manipulação de texto
            </a>
        </li>

        <!-- 14. Resumo -->
        <li class="list-group-item bg-dark text-white border-0 position-relative">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#resumo">
                <span class="badge bg-secondary">14</span>
                Resumo
            </a>
        </li>
    </ul>
---

Esse artigo vai apresentar o terminal, uma ferramenta poderosa para pessoas programadoras, que torna possível executar tarefas mais rapidamente e com maior controle sobre o sistema operacional.

<div class="text-center">
    <img src="https://blog.formacao.dev/content/images/2023/11/7.jpg" aria-hidden="true" class="img-fluid">
</div>

## Apresentação {#apresentacao}
---

Para começar vamos responder à pergunta: **o que é um terminal?**

O terminal é um programa que existe na maioria dos sistemas operacionais e serve para acessar e controlar várias funções, desde simples até as mais avançadas, do sistema. Usar o terminal dá mais controle sobre o computador e permite fazer coisas que normalmente não aparecem em menus ou janelas comuns.

O terminal utiliza uma CLI (Command Line Interface ou, em português, interface de linha de comando), o que significa que normalmente não apresenta botões, possui poucos ícones e tem elementos gráficos limitados.

O processo de uso do terminal basicamente é inserir comandos, pressionar <kbd>Enter</kbd> e receber o resultado em texto:

<div class="mermaid text-center" aria-hidden="true">
flowchart TD
    A([Inserir comando e pressionar Enter]) --> B[Aguardar resultado]
    B --> C{Resultado é sucesso?}
    C -->|Sim| D[Exibir resultado]
    C -->|Não| E[Exibir mensagem de erro]
</div>

- Se bem-sucedido, exibe o resultado;
- Se houver erros, mostra o texto do erro.

Ou seja, o terminal é uma ferramenta muito importante para quem trabalha com programação, pois permite um controle mais preciso sobre o ambiente de desenvolvimento e facilita a automação, tornando a execução de tarefas repetitivas mais automática.

## Qual a importância do terminal na programação? {#importancia-terminal}
---

- **Agilidade e praticidade**:
  - Com um comando, você faz em segundos o que levaria vários cliques. E o resultado é sempre igual, sem depender da aparência do programa.
- **Automação e repetição**:
  - Se você precisa fazer a mesma coisa hoje e depois de novo amanhã (ou até em 100 computadores diferentes), é só colocar os comandos em um arquivo e executar sempre que quiser.
  - Isso facilita muito tarefas como testar, criar versões ou publicar programas. 
- **Reprodutibilidade**:
  - Reprodutibilidade é a capacidade de reproduzir resultados. Ou seja, “como esse resultado foi gerado?”
  - Usando o terminal, tudo fica documentado: os comandos ficam salvos no histórico ou em arquivos de script (que são arquivos de texto com uma lista de comandos).
  - Isso ajuda outras pessoas a entenderem o que foi feito e a encontrar ou repetir erros (para resolvê-los) facilmente. 
- **Acesso remoto e servidores sem interface gráfica**:
  - Vários servidores na internet não têm tela gráfica.
  - Por isso, o terminal (usando ssh) é o jeito principal de controlar essas máquinas.
- **Composição de comandos (pipes)**:
  - Dá para combinar comandos simples e criar soluções poderosas, como filtrar, organizar e resumir informações de arquivos, tudo rápido.
- **Acessibilidade e uso pelo teclado**:
  - O terminal funciona todo em texto, o que facilita o uso com leitores de tela e para quem prefere usar só o teclado.
  - Os atalhos, como as setas, <kbd>Tab</kbd> para completar e o histórico de comandos, deixam o uso mais acessível.

**Uma dica**: para pessoas cegas que usam leitores de tela, aprender a usar o terminal pode facilitar muito a vida e ajudar a contornar vários problemas de acessibilidade que ainda existem em muitos programas e sites na interface gráfica.

## O que dá para fazer no terminal que a interface gráfica não faz (ou faz com muito mais dificuldade) {#o-que-da-para-fazer-no-terminal}
---

- Trabalhar em servidores sem “tela”, fazendo tudo pelo texto: instalar programas, reiniciar serviços, ver logs (que são arquivos de texto que registram atividades do sistema), colocar sistemas para serem executados.
- Mexer (trabalhar) em arquivos grandes usando comandos como grep (para buscar texto), awk (para processar texto, processar no sentido de filtrar e transformar em outros formatos) e sed (para editar texto), sem travar o computador.
- Juntar várias tarefas em sequência, como baixar arquivos, descompactar (extrair como se faz com arquivos .zip), mover para pastas específicas e renomear, tudo com um único comando.
- Mudar o nome ou organizar vários arquivos de uma vez, usando regras que você define. Pode ser por data, por extensão (como .txt, .jpg, etc.), por tamanho, entre outros.
- Tornar a realização de algumas tarefas automáticas, como fazer backup (cópia de segurança) de arquivos importantes, atualizar programas ou limpar arquivos temporários.
- Controlar permissões de arquivos e pastas de forma mais granular (mais detalhada), você pode, por exemplo, definir quem pode ler, escrever ou executar um arquivo no seu sistema.

## O que mais dá para fazer no terminal {#o-que-mais-da-para-fazer-no-terminal}
---

- **Arquivos e pastas**:
  - ver
  - mover
  - copiar
  - apagar
  - mudar o nome de vários arquivos de uma vez só
- **Texto e dados**:
  - procurar palavras em arquivos de texto
  - filtrar linhas em arquivos de texto ou tabelas
  - trocar trechos em arquivos de texto, como substituir palavras
  - Fazer um resumo de arquivos de texto, como contar palavras ou encontrar as mais frequentes (que aparecem com mais)
- **Processos**:
  - descobrir o que está sendo executado no computador, quais programas estão sendo executados e quais estão travados
  - fechar programas travados
  - ver quanto de CPU ou memória estão usando de capacidade em cada processo
- **Rede**:
  - testar se a internet está funcionando
  - baixar arquivos da internet
  - enviar e receber usando ssh ou scp (que são protocolos de comunicação seguros de rede)
- **Ambiente de desenvolvimento**:
  - configurar variáveis de ambiente, que nada mais são do que “configurações” que dizem para os programas como eles devem funcionar
  - arrumar o PATH, que é uma lista de pastas onde o sistema procura por programas para executar
  - ativar ambientes virtuais, que são espaços isolados para instalar projetos específicos
- **Dependências**:
  - instalar e atualizar programas e bibliotecas do próprio sistema operacional e de programas instalados
- **Serviços do sistema**:
  - ligar ou desligar serviços, como programas sendo executados em segundo plano, ou seja, sem interface gráfica e muitas vezes sem a pessoa perceber
  - ver se os serviços estão funcionando, se estão ativos e respondendo
  - ler os logs (os arquivos de texto que registram atividades do sistema) em tempo real
  - Ligar, desligar ou reiniciar o próprio computador.

## Gerenciadores de Pacotes: entendendo o conceito de forma simples {#gerenciadores-de-pacotes}
---

Quem usou Windows já está acostumado com aquele jeito fácil de instalar programas: só baixar, clicar em “próximo” várias vezes e terminar. É rápido, mas a gente nem percebe o que rola nos bastidores: onde os arquivos vão parar, quais coisas o programa precisa para funcionar, como vai ser atualizado depois. 

Normalmente, ninguém pensa em dependências ou versões. Só clica e pronto.

Por isso, muita gente nem sabe o que é um gerenciador de pacotes, especialmente quem só usa o computador para coisas básicas. Gerenciador de pacotes é um programa que facilita instalar, atualizar e remover outros programas, tudo feito automaticamente, só que, em vez de clicar em vários botões, você dá uns comandos no terminal.

### O que é um pacote? {#o-que-e-um-pacote}
---

Um “pacote” é basicamente um monte de arquivos juntos, ele contém:

- o programa
- tudo que ele precisa para funcionar (que são as chamadas dependências)
- as instruções de como instalar no computador.


<div class="mermaid text-center" aria-hidden="true">
flowchart TD
    A(Pacote)
    B(Programa) --> A
    C(Dependências) --> A
    D(Instruções de instalação) --> A
</div>

O gerenciador de pacotes funciona como uma prateleira digital: você pede o programa que quer, ele já traz tudo que é preciso para ele funcionar junto, coloca no lugar certo e ainda deixa tudo pronto para atualizar depois, se precisar.

## Principais gerenciadores de pacotes {#principais-gerenciadores-de-pacotes}
---

A lista a seguir mostra quais gerenciadores de pacotes são os mais usados em cada sistema e nas principais linguagens de programação, facilitando para quem está começando entender como funciona.

### Linux {#linux}
---

**apt (usado no Debian, Ubuntu e Linux Mint)**

<div class="text-center">
<img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Apt-get_install_mediawiki.png" aria-hidden="true" />
</div>

Instalação (instalação de pacotes que são os programas)

```bash
sudo apt update          # atualiza a lista de pacotes disponíveis 
sudo apt install git     # instala o Git 
```
{: .bg-dark .text-light .p-3}

Onde:

- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">sudo</code> é um comando que permite executar outros comandos com privilégios de administrador, é equivalente (a mesma coisa) ao "executar como administrador" que existe no Windows.
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">apt</code> é o gerenciador de pacotes que estamos usando.
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">update</code> serve para atualizar a lista de pacotes disponíveis. Ou seja, ele verifica se há versões mais recentes dos pacotes instalados e as lista.
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">install</code> é o comando para instalar um novo pacote.
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">git</code> é o nome do pacote que queremos instalar. No caso, é um programa de controle de versão muito utilizado em projetos de programação.

Atualização (atualização de pacotes que são os programas)

```bash
sudo apt update          # atualiza a lista de pacotes disponíveis para instalação
sudo apt upgrade         # atualiza todos os pacotes que estão instalados
```
{: .bg-dark .text-light .p-3}

Onde:

- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">upgrade</code> é o comando para atualizar todos os pacotes que já estão instalados no sistema para suas versões mais recentes.

**DNF (usado no Fedora)**

<div class="text-center">
<img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Dnf_updates_fedora22.png" aria-hidden="true" />
</div>

Instalação

```bash
sudo dnf install git     # instala o Git
```
{: .bg-dark .text-light .p-3}

Atualização

```bash
sudo dnf upgrade --refresh     # atualiza todos os pacotes instalados
```
{: .bg-dark .text-light .p-3}

**Pacman (usado no Arch Linux e Manjaro)**

<div class="text-center">
<img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Pacman-4.1.0rc1-39-gf89f4.png" aria-hidden="true" />
</div>

```bash
sudo pacman -S git     # instala o Git
```
{: .bg-dark .text-light .p-3}

Onde:

- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">-S</code> é o comando para instalar um novo pacote.

```bash
sudo pacman -Syu       # atualiza todos os pacotes instalados
```
{: .bg-dark .text-light .p-3}

- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">-Syu</code> é o comando para atualizar todos os pacotes que já estão instalados no sistema para suas versões mais recentes.


### macOS {#macos}
---

O gerenciador de pacotes mais comum no macOS é o **Homebrew**. 

<div class="text-center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Screenshot_of_Homebrew_Man_Page_on_MacOS_Sonoma.png/1049px-Screenshot_of_Homebrew_Man_Page_on_MacOS_Sonoma.png" aria-hidden="true" />
</div>

Para fazer a instalação de pacotes, você pode usar o seguinte comando no terminal:

```bash
brew install nome-do-pacote
```
{: .bg-dark .text-light .p-3}

Como por exemplo:

```bash
brew install git
```
{: .bg-dark .text-light .p-3}

E para atualizar os pacotes instalados, você pode usar:

```bash
brew update          # atualiza a lista de pacotes disponíveis para instalação
brew upgrade         # atualiza todos os pacotes já instalados no sistema
```
{: .bg-dark .text-light .p-3}

### Windows {#windows}
---

Mais recentemente, a Microsoft está tentando tornar o Windows mais amigável para pessoas programadoras, iniciativas como o **Windows Subsystem for Linux (WSL)** e o **winget** (gerenciador de pacotes do Windows) fazem parte desse esforço.

**winget (oficial da Microsoft)**

<div class="text-center">
<img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Windows_Package_Manager_v0.1.41331_Preview_1115x624.png" aria-hidden="true" />
</div>

O winget é o gerenciador de pacotes oficial da Microsoft que já vem instalado nas versões mais recentes do Windows.

Instalação

```powershell
winget install Git.Git     # instala o Git
```
{: .bg-dark .text-light .p-3}

Onde:

- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">install</code> é o comando para instalar um novo pacote.
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">Git.Git</code> é o ID (identificador único que representa o pacote) do programa que queremos instalar.

Atualização

```powershell
winget upgrade Git.Git     # atualiza o Git
winget upgrade --all       # atualiza todos os pacotes instalados
```
{: .bg-dark .text-light .p-3}

Onde:

- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">upgrade</code> é o comando para atualizar um pacote específico ou todos os pacotes.
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">--all</code> é um parâmetro (parâmetro é uma informação adicional que pode ser passada para um comando para modificar seu comportamento ou incluir informações no resultado) que indica que todos os pacotes instalados devem ser atualizados.

### Nas linguagens de programação {#linguagens-de-programacao}
---

As linguagens de programação também possuem seus próprios gerenciadores de pacotes, cada gerenciador funciona do jeito que é mais apropriado (adaptado) para a linguagem, mas o conceito é o mesmo: facilitar a instalação, atualização e remoção de pacotes e ferramentas.

Alguns exemplos são:

**Python**

<div class="text-center">
<img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Pip_help.png" aria-hidden="true" />
</div>

```bash
pip install nome-do-pacote     # instala um pacote
```
{: .bg-dark .text-light .p-3}

E para atualizar um pacote, você pode usar:

```bash
pip install --upgrade nome-do-pacote     # atualiza um pacote
```
{: .bg-dark .text-light .p-3}

**npm (JavaScript)**

<div class="text-center">
<img src="https://cs1.htmlacademy.ru/blog/js/useful-commands-for-working-with-nodejs/bca980d71baddc537b7e1da300c0e975.png" aria-hidden="true" />
</div>

```bash
npm install nome-do-pacote     # instala um pacote
```
{: .bg-dark .text-light .p-3}

E para atualizar um pacote, você pode usar:

```bash
npm install --upgrade nome-do-pacote     # atualiza um pacote
```
{: .bg-dark .text-light .p-3}

**Ruby**

<div class="text-center">
<img src="https://media.geeksforgeeks.org/wp-content/uploads/20211211004417/ruby4.png" aria-hidden="true" />
</div>

```bash
gem install nome-do-pacote     # instala um pacote
```
{: .bg-dark .text-light .p-3}

E para atualizar um pacote, você pode usar:

```bash
gem update nome-do-pacote     # atualiza um pacote
```
{: .bg-dark .text-light .p-3}

## Como o gerenciador de pacotes funciona {#como-o-gerenciador-de-pacotes-funciona}
---

O gerenciador de pacotes funciona com três partes principais:

- **Repositórios:** são como sites ou lugares na internet onde ficam guardados os programas que você pode instalar.
- **Pacotes:** são os próprios programas, junto com o que eles precisam para funcionar no seu computador.
- **Comandos:** são frases simples que você digita no terminal para instalar, atualizar ou remover programas.

<div class="mermaid text-center" aria-hidden="true">
flowchart TD
    A[Gerenciador de Pacotes]
    B[Repositórios]
    C[Pacotes]
    D[Comandos]
    
    B -->|Armazena| C
    D -->|Controla| A
    A -->|Consulta| B
    A -->|Gerencia| C
    
    B1["Sites na internet onde ficam
    armazenados os programas disponíveis"] -->|São| B
    C1["Programas completos com suas dependências
    e instruções de instalação"] -->|São| C
    D1["Frases simples digitadas no terminal
    para instalar, atualizar ou remover"] -->|São| D
</div>

Por exemplo, para instalar o Python, ao invés de procurar na internet, baixar e clicar várias vezes, você só precisa digitar:

```bash
sudo apt install python3
```
{: .bg-dark .text-light .p-3}

Os gerenciadores de pacotes parecem só mais uma forma de instalar programas, mas na verdade mudam bastante a maneira como usamos o computador. Antes, a gente baixava cada programa, clicava em vários botões e nem sabia direito como tudo funcionava.

Com os gerenciadores, aprendemos que cada programa precisa de outras partes para funcionar, e que é importante manter tudo atualizado.

Eles são como mercados online: você escolhe o que quer, e já vem tudo pronto, sem precisar se preocupar com erros ou instalar coisas uma por uma. Isso deixa tudo mais rápido, seguro e organizado. Além disso, facilita trabalhar em grupo, porque todo mundo usa os mesmos programas e versões.

Saber usar um gerenciador de pacotes ajuda muito quem está começando a programar, tornando tudo mais prático e fácil no dia a dia. 

## Começando a usar o terminal e se adaptando a ele {#começando-a-usar-o-terminal-e-se-adaptando-a-ele}
---

Agora vamos começar a usar o terminal na prática, só para você se acostumar com ele e ver como funciona. Não precisa entender tudo de primeira, pois ao longo do caminho você vai usar o terminal bastante e aprender com o tempo.

No Linux (como no Ubuntu que será usado aqui e outros parecidos) e no macOS, basta usar o terminal que já vem no sistema. No Windows, uma boa dica é instalar o WSL e escolher uma versão do Linux, como o Ubuntu, para facilitar o uso do terminal. 

O terminal desses sistemas é bastante usado por quem trabalha com tecnologia porque funciona bem, é confiável e ajuda em várias tarefas do dia a dia, como mexer em arquivos, instalar programas ou automatizar coisas. 

No Windows, até existem o **Prompt de Comando** e o **PowerShell**, mas eles não funcionam igual ao terminal do Linux. Vários comandos comuns simplesmente não funcionam ou são diferentes.

Por isso, a Microsoft criou o WSL (Windows Subsystem for Linux), que deixa você usar o Linux dentro do Windows, como se fosse um programa. Usando o Windows Terminal junto com o WSL, dá para ter uma experiência muito parecida com a de usar um terminal Linux de verdade, com todos os comandos e ferramentas.

Assim, instalar o WSL é o jeito mais fácil para quem quer programar ou usar ferramentas de Linux no Windows, é o recomendado.

Para fazer a instalação, siga o [guia de instalação do WSL](https://learn.microsoft.com/pt-br/windows/wsl/install) da **Microsoft**.

## Quando você abre o terminal pela primeira vez {#quando-voce-abre-o-terminal-pela-primeira-vez}
---

Ao abrir o terminal pela primeira vez, você vai encontrar uma tela, que vai trazer informações sobre o usuário que está logado (usando o terminal no momento), o nome da máquina e o diretório (pasta) atual onde você está.

É algo parecido com:

```bash
usuario@nome-da-maquina:~$
```
{: .bg-dark .text-light .p-3}

As informações querem dizer:

- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">usuario</code>: o nome do usuário que está logado
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">@</code>: serve para separar o nome do usuário e o nome da máquina
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">nome-da-maquina</code>: o nome do computador
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">~</code>: indica que o terminal está no diretório home (padrão) do usuário
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">$</code>: indica que o terminal está esperando um comando do usuário comum (não root - que tem permissões administrativas mais elevadas, seria mais ou menos como o "executar como administrador" que existe no Windows).

O usuário padrão (não root) tem permissões limitadas para evitar mudanças acidentais ou maliciosas no sistema. Já o usuário root tem controle total sobre o sistema, podendo fazer qualquer alteração, o que pode ser perigoso se não for usado com cuidado.

Não é sempre que o usuário padrão é representado pelo símbolo <code class="bg-dark text-white fw-light font-monospace p-2 rounded">$</code>, isso acontece em algumas distribuições Linux, mas no macOS, por exemplo, o símbolo <code class="bg-dark text-white fw-light font-monospace p-2 rounded">%</code> é usado para indicar que o terminal está esperando um comando do usuário comum.

## Controlando Arquivos e Pastas {#controlando-arquivos-e-pastas}
---

Vamos começar com coisas básicas que nós já fazemos usando a interface gráfica, como mexer em pastas e arquivos, só que agora pelo terminal. 

### Comando ls (listar arquivos) {#comando-ls-listar-arquivos}
---

**Função**: Mostra o conteúdo do diretório (pasta) atual.

**Exemplo**:

```bash
ls
```
{: .bg-dark .text-light .p-3}

É possível também usar o comando <code class="bg-dark text-white fw-light font-monospace p-2 rounded">ls</code> com algumas opções (essas opções geralmente são chamadas de **parâmetros**). Por exemplo:

```bash
ls -l
```
{: .bg-dark .text-light .p-3}

Esse comando mostra uma lista detalhada dos arquivos e pastas, incluindo informações como permissões, proprietário e tamanho. Quando você digita ele e aperta <kbd>Enter</kbd>, o terminal mostra uma saída (resultado) com todas essas informações.

Exemplo:

```bash
ls -l
```
{: .bg-dark .text-light .p-3}

Saída esperada:

```bash
total 8
drwx------@   4 louisereis  staff   128 13 Jul 15:26 Applications
drwxr-xr-x@   3 louisereis  staff    96 23 Mai 15:38 Applications (Parallels)
drwx------@   9 louisereis  staff   288 30 Ago 21:37 Desktop
drwx------@   7 louisereis  staff   224 30 Ago 21:10 Documents
drwx------@  21 louisereis  staff   672 31 Ago 01:30 Downloads
drwxr-xr-x   10 louisereis  staff   320  5 Jun 23:13 gems
drwxr-xr-x@   5 louisereis  staff   160 14 Ago 10:52 go
drwx------@ 102 louisereis  staff  3264 30 Jul 16:04 Library
drwxr-xr-x   10 louisereis  staff   320 12 Mai 11:02 Lunarvim-acessivel-para-leitor-de-telas
```
{: .bg-dark .text-light .p-3}

O que significa cada parte da saída?

- **total 8**: Mostra o total de blocos usados pelos arquivos e pastas no diretório. Ou seja, 8 blocos de 512 bytes cada, totalizando 4 KB. Isso quer dizer que o diretório (pasta) está usando 4 KB de espaço em disco.
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">drwx------@</code>: Indica as permissões da pasta (neste caso, é uma pasta com permissões de leitura, escrita e execução para o proprietário da pasta, e nenhuma permissão para outros usuários do sistema que não sejam o proprietário). Como saber isso? As letras representam:
  - <code class="bg-dark text-white fw-light font-monospace p-2 rounded">d</code>: Indica que é um diretório (uma pasta).
  - <code class="bg-dark text-white fw-light font-monospace p-2 rounded">rwx</code>: Permissões do proprietário (leitura, escrita e execução porque <code class="bg-dark text-white fw-light font-monospace p-2 rounded">rwx</code> vem das palavras em inglês "read", "write" e "execute" que em português significam "ler", "escrever" e "executar").
  - <code class="bg-dark text-white fw-light font-monospace p-2 rounded">---</code>: Quer dizer que o grupo (neste caso, o grupo "staff" que é o grupo padrão para usuários no macOS) não tem nenhuma permissão sobre a pasta, só o proprietário tem (o proprietário da pasta neste caso é o usuário "louisereis").
  - <code class="bg-dark text-white fw-light font-monospace p-2 rounded">---</code>: Aqui significa que outros usuários do sistema também não têm permissão sobre a pasta.
- **4**: Número de links para a pasta. Isso significa que há 4 referências (links) para esta pasta no sistema de arquivos. Ou seja, 4 caminhos diferentes que levam a esta pasta que podem ser usados para acessá-la pelo sistema operacional.
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">louisereis</code>: é a pessoa (usuário) que é dona (proprietária) da pasta.
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">staff</code>: Grupo ao qual o proprietário pertence. Ou seja, o usuário "louisereis" pertence ao grupo "staff", que é o grupo padrão para usuários no macOS.
- **128**: Tamanho da pasta em bytes. Ou seja, a pasta "Applications" está usando 128 bytes de espaço em disco.
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">13 Jul 15:26</code>: Data e hora da última modificação.
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">Applications</code>: Nome da pasta.
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">@</code>: Indica que a pasta tem atributos estendidos (como metadados adicionais). Isso significa que há informações extras associadas a essa pasta, que podem ser usadas por aplicativos ou pelo sistema operacional.
  - Explicando melhor: Os atributos estendidos são como informações extras que ficam guardadas junto com a pasta, como se fossem etiquetas ou anotações.
  - Essas informações podem ser usadas por programas ou pelo sistema para adicionar detalhes, como tags, comentários ou outras características que não aparecem nas permissões normais.
  - Eles ajudam a organizar e gerenciar os arquivos de forma mais prática.
  - O <code class="bg-dark text-white fw-light font-monospace p-2 rounded">@</code> no final da linha indica que a pasta tem isso (atributos estendidos).

Essas informações ajudam a entender melhor a estrutura de arquivos e pastas no sistema. Você pode reler a saída do comando <code class="bg-dark text-white fw-light font-monospace p-2 rounded">ls -l</code> novamente e verificar linha por linha o que cada parte significa agora que você já tem essas explicações.

Outra opção (parâmetro) útil do comando <code class="bg-dark text-white fw-light font-monospace p-2 rounded">ls</code> é o <code class="bg-dark text-white fw-light font-monospace p-2 rounded">-a</code>, que mostra todos os arquivos, incluindo os ocultos (aqueles que começam com um ponto <code class="bg-dark text-white fw-light font-monospace p-2 rounded">.</code>).

Exemplo:

```bash
ls -a
```
{: .bg-dark .text-light .p-3}

Saída esperada:

```bash
usuario@nome-da-maquina teste-terminal % ls -a
.			imagens			textos
..			músicas
.arquivos-ocultos	outros
usuario@nome-da-maquina teste-terminal %
```
{: .bg-dark .text-light .p-3}

Lembrando que arquivos ocultos são aqueles que na interface gráfica do sistema operacional estão escondidos, ou seja, não são exibidos por padrão. No macOS e em muitos sistemas Unix, arquivos e pastas que começam com um ponto (.) são considerados ocultos.

### Comando cd (mudar diretório) {#comando-cd-mudar-diretorio}
---

**Função**: Muda da pasta atual para a pasta especificada.

**Exemplo**:

```bash
cd documentos
```
{: .bg-dark .text-light .p-3}

Esse comando entra na pasta chamada "documentos" que está dentro da pasta atual. Depois de executar esse comando, o terminal vai mudar para essa pasta (documentos).

Existem algumas variações do comando <code class="bg-dark text-white fw-light font-monospace p-2 rounded">cd</code> que podem ser úteis:

```bash
cd ..
```
{: .bg-dark .text-light .p-3}

Esse comando, faz você voltar para a pasta anterior. Por exemplo: se você está na pasta "documentos" e digita <code class="bg-dark text-white fw-light font-monospace p-2 rounded">cd ..</code>, você volta para a pasta onde estava antes de entrar em "documentos".

Outra variação (possibilidade) de uso desse comando é:

```bash
cd ~
```
{: .bg-dark .text-light .p-3}

Essa variação leva você diretamente para a sua pasta home (pasta padrão do usuário). No macOS e Linux, a pasta home geralmente é onde ficam suas pastas pessoais, como "Documentos", "Downloads", "Imagens", etc.

**Dica**: Você também consegue voltar para a pasta home (padrão do usuário) digitando só <code class="bg-dark text-white fw-light font-monospace p-2 rounded">cd</code> sem nada depois, isso também funciona para te levar de volta para a sua pasta home.


### Comando mkdir (criar diretório) {#comando-mkdir-criar-diretorio}
---

**Função**: Cria uma nova pasta (diretório) com o nome que você escolher e no lugar (caminho) que você escolher.

**Exemplo**:

```bash
mkdir nova-pasta
```
{: .bg-dark .text-light .p-3}

Esse comando cria uma nova pasta chamada "nova-pasta" na pasta atual.

Você também pode criar uma nova pasta em um caminho (lugar) específico. Por exemplo:

```bash
mkdir /documentos/nova-pasta
```
{: .bg-dark .text-light .p-3}

Esse comando cria uma pasta chamada "nova-pasta" dentro de outra pasta, nesse caso, dentro da pasta "documentos".

**Como criar várias pastas de uma vez**:

```bash
mkdir documentos/pasta1 documentos/pasta2 documentos/pasta3
```
{: .bg-dark .text-light .p-3}

Esse comando cria três novas pastas chamadas "pasta1", "pasta2" e "pasta3" dentro da pasta "documentos".


A estrutura das pastas será criada da seguinte forma:

<div class="mermaid text-center" aria-hidden="true">
flowchart TD
    A[documentos] --> B[pasta1]
    A --> C[pasta2]
    A --> D[pasta3]
</div>

- Pasta **"documentos"**:
  - 1.1 dentro da pasta documentos está a **"pasta1"**
  - 1.2 dentro da pasta documentos está a **"pasta2"**
  - 1.3 dentro da pasta documentos está a **"pasta3"**

**Como criar uma estrutura de pastas (várias pastas dentro de outras pastas) de uma vez**:

```bash
mkdir -p /documentos/pasta1/pasta2/pasta3
```
{: .bg-dark .text-light .p-3}

Esse comando com o <code class="bg-dark text-white fw-light font-monospace p-2 rounded">-p</code> cria a estrutura de pastas "pasta1/pasta2/pasta3" dentro da pasta "documentos", criando também as pastas pai (que são pastas que contêm outras pastas), se elas não existirem.

A estrutura das pastas será criada da seguinte forma:

<div class="mermaid text-center" aria-hidden="true">
flowchart TD
    A[documentos] --> B[pasta1]
    B --> C[pasta2]
    C --> D[pasta3]
</div>

Ou seja, a estrutura de pastas será:

- **Pasta "documentos"**:
  - 1.1 dentro da pasta documentos está a **"pasta1"**
  - 1.2 dentro da **"pasta1"** está a **"pasta2"**
  - 1.3 dentro da **"pasta2"** está a **"pasta3"**

**Como criar pastas com nomes que têm espaços**:

Se você precisar criar pastas com nomes que têm espaços, como "minha nova pasta" e você executar o seguinte comando:

```bash
mkdir minha nova pasta
```
{: .bg-dark .text-light .p-3}

o que vai acontecer é que o terminal vai entender que você quer criar, dentro da pasta atual várias pastas separadas, ou seja, ele vai criar três pastas diferentes: "minha", "nova" e "pasta".


<div class="mermaid text-center" aria-hidden="true">
flowchart TD
    A[pasta atual] --> B[minha]
    A --> C[nova]
    A --> D[pasta]
</div>

Para criar uma pasta com nome que tem espaços, você pode usar algumas alternativas. 

**1. Usar aspas (simples ou duplas)**:

```bash
mkdir "minha nova pasta"
```
{: .bg-dark .text-light .p-3}

ou

```bash
mkdir 'minha nova pasta'
```
{: .bg-dark .text-light .p-3}

Isso diz ao terminal que todo o conteúdo entre as aspas é um único nome de pasta, mesmo que tenha espaços. A recomendação é usar aspas duplas.

**2. Usar a barra invertida \ antes do espaço**:

```bash
mkdir minha\ nova\ pasta
```
{: .bg-dark .text-light .p-3}

Aqui o \ informa ao terminal que o espaço faz parte do nome da pasta e que ele não está sendo usado para separar nomes de pastas diferentes.

Então:

```bash
mkdir "minha nova pasta" "outra pasta"
```
{: .bg-dark .text-light .p-3}

cria duas pastas chamadas "minha nova pasta" e "outra pasta".

Do mesmo jeito, o comando:

```bash
mkdir minha\ nova\ pasta outra\ pasta
```
{: .bg-dark .text-light .p-3}

também cria duas pastas chamadas "minha nova pasta" e "outra pasta".

Já o comando:

```bash
mkdir -p "Projetos/2025/minha nova pasta"
```
{: .bg-dark .text-light .p-3}

vai criar a estrutura de pastas "Projetos/2025/minha nova pasta", criando também as pastas pai (que são pastas que contêm outras pastas), se elas não existirem.

<div class="mermaid text-center" aria-hidden="true">
flowchart TD
    A[Projetos] --> B[2025]
    B --> C[minha nova pasta]
</div>

Ou seja, a estrutura de pastas será:

- **Pasta "Projetos"**:
  - 1.1 dentro da pasta projetos está a pasta **"2025"**
  - 1.2 dentro da pasta "2025" está a pasta **"minha nova pasta"**

**Por que usar <code class="bg-dark text-white fw-light font-monospace p-2 rounded">mkdir</code> pode ter benefícios?**

Bom, se você for trabalhar com programação, provavelmente vai precisar organizar seus projetos, criar pastas para cada um deles, e o comando <code class="bg-dark text-white fw-light font-monospace p-2 rounded">mkdir</code> pode ajudar bastante nisso. Ele ajuda principalmente a ganhar tempo e a manter a organização dos arquivos.

Imagine que você vai criar um projeto de seu primeiro site com HTML, CSS e JavaScript. Além disso, esse projeto vai ter imagens, fontes (tipos de letra) e outros arquivos. Ao invés de você ir na interface gráfica, criar cada pasta uma por uma, você pode fazer tudo de uma vez só com o comando <code class="bg-dark text-white fw-light font-monospace p-2 rounded">mkdir</code>.

Isso seria feito assim:

```bash
mkdir -p "primeiro-site/{css,js,images,fonts}"
```
{: .bg-dark .text-light .p-3}

Isso vai criar a estrutura de pastas:

<div class="mermaid text-center" aria-hidden="true">
flowchart TD
    A[primeiro-site] --> B[css]
    A --> C[js]
    A --> D[images]
    A --> E[fonts]
</div>

- **Pasta "primeiro-site"**:
  - 1.1 dentro da pasta "primeiro-site" está a pasta **"css"**
  - 1.2 dentro da pasta "primeiro-site" está a pasta **"js"**
  - 1.3 dentro da pasta "primeiro-site" está a pasta **"images"**
  - 1.4 dentro da pasta "primeiro-site" está a pasta **"fonts"**

Você também pode criar subpastas dentro dessas pastas, se quiser. Por exemplo, dentro da pasta "css", você pode querer uma pasta chamada "componentes" para guardar partes específicas do CSS.

```bash
mkdir -p "primeiro-site/css/componentes"
```
{: .bg-dark .text-light .p-3}

Isso vai criar a estrutura de pastas:

<div class="mermaid text-center" aria-hidden="true">
flowchart TD
    A[primeiro-site] --> B[css]
    B --> C[componentes]
</div>

- **Pasta "primeiro-site"**:
  - 1.1 dentro da pasta "primeiro-site" está a pasta **"css"**
    - 1.1.1 dentro da pasta "css" está a pasta **"componentes"**

Então a estrutura toda ficaria assim:

<div class="mermaid text-center" aria-hidden="true">
flowchart TD
    A[primeiro-site] --> B[css]
    B --> C[componentes]
    A --> D[js]
    A --> E[images]
    A --> F[fonts]
</div>

- **Pasta "primeiro-site"**:
  - 1.1 dentro da pasta "primeiro-site" está a pasta **"css"**
    - 1.1.1 dentro da pasta "css" está a pasta **"componentes"**
  - 1.2 dentro da pasta "primeiro-site" está a pasta **"js"**
  - 1.3 dentro da pasta "primeiro-site" está a pasta **"images"**
  - 1.4 dentro da pasta "primeiro-site" está a pasta **"fonts"**

### Comando touch (criar aquivos ou atualizar) {#comando-touch-criar-aquivos-ou-atualizar}
---

**Função**: Cria arquivos, ou se o arquivo já existir, atualiza a data de modificação para a data atual.

**Exemplo**:

```bash
touch novo-arquivo.txt
```
{: .bg-dark .text-light .p-3}

Esse comando cria um arquivo chamado novo-arquivo.txt na pasta atual, se ele ainda não existir. Se o arquivo já existir, ele apenas atualiza a data de modificação para a data atual.

**Criando vários arquivos de uma vez**:

```bash
touch arquivo1.txt arquivo2.txt arquivo3.txt  
```
{: .bg-dark .text-light .p-3}

Este comando cria três arquivos de texto vazios chamados arquivo1.txt, arquivo2.txt e arquivo3.txt na pasta atual. 

**Criando arquivos em um caminho (lugar) específico**:

```bash
touch /documentos/arquivo1.txt /documentos/arquivo2.txt /documentos/arquivo3.txt
```
{: .bg-dark .text-light .p-3}

Aqui estamos dizendo exatamente onde queremos que os arquivos sejam criados. Neste caso, dentro da pasta "documentos".

### Comando cp (copiar arquivos ou pastas) {#comando-cp-copiar-arquivos-ou-pastas}
---

**Função**: Copiar arquivos ou pastas de um lugar para outro.

**Exemplo**:

```bash
cp arquivo.txt /documentos/
```
{: .bg-dark .text-light .p-3}

Este comando copia o arquivo.txt para a pasta "documentos".

**Copiando vários arquivos de uma vez**:

```bash
cp arquivo1.txt arquivo2.txt /documentos/
```
{: .bg-dark .text-light .p-3}

Este comando copia arquivo1.txt e arquivo2.txt para a pasta "documentos".

**Copiando pastas**:

```bash
cp -r minha_pasta/ /documentos/
```
{: .bg-dark .text-light .p-3}

Aqui estamos copiando a pasta "minha_pasta" e todo o seu conteúdo (tudo que está dentro dela) para a pasta "documentos".

### Comando mv (mover arquivos ou pastas) {#comando-mv-mover-arquivos-ou-pastas}
---

**Função**: Mover arquivos ou pastas de um lugar para outro.

**Exemplo**:

```bash
mv arquivo.txt /documentos/
```
{: .bg-dark .text-light .p-3}

Este comando move o arquivo.txt para a pasta "documentos".

**Movendo vários arquivos de uma vez**:

```bash
mv arquivo1.txt arquivo2.txt /documentos/
```
{: .bg-dark .text-light .p-3}

Este comando move arquivo1.txt e arquivo2.txt para a pasta "documentos".

**Movendo pastas**:

```bash
mv minha_pasta/ /documentos/
```
{: .bg-dark .text-light .p-3}

Aqui estamos movendo a pasta "minha_pasta" e todo o seu conteúdo (tudo que está dentro dela) para a pasta "documentos".

### Comando rm (remover arquivos ou pastas) {#comando-rm-remover-arquivos-ou-pastas}
---
**Função**: Remover (apagar) arquivos ou pastas.

**Exemplo**:

```bash
rm arquivo.txt
```
{: .bg-dark .text-light .p-3}

Este comando remove o arquivo.txt da pasta atual.

**Removendo vários arquivos de uma vez**:

```bash
rm arquivo1.txt arquivo2.txt
```
{: .bg-dark .text-light .p-3}

Este comando remove arquivo1.txt e arquivo2.txt da pasta atual.

**Removendo pastas**:

```bash
rm -rf minha_pasta/
```
{: .bg-dark .text-light .p-3}

Aqui estamos removendo a pasta "minha_pasta" e todo o seu conteúdo (tudo que está dentro dela). <code class="bg-dark text-white fw-light font-monospace p-2 rounded">-rf</code> significa "recursivo" (recursivo é a mesma coisa que "tudo dentro") e "forçado", ou seja, remove a pasta e todos os arquivos dentro dela sem pedir confirmação.

Sem <code class="bg-dark text-white fw-light font-monospace p-2 rounded">-rf</code>, o comando não funcionará se a pasta tiver arquivos e outras pastas dentro dela porque o sistema não permite a remoção de pastas que não estão vazias sem uma confirmação adicional.

**Removendo arquivos por extensão ou algum outro critério**:

```bash
rm *.txt
```
{: .bg-dark .text-light .p-3}

Este comando remove todos os arquivos com a extensão .txt da pasta atual.

```bash
rm *.mp3
```
{: .bg-dark .text-light .p-3}

Já esse comando remove todos os arquivos com a extensão .mp3 da pasta atual.

## Exercício 1: Praticando controle de arquivos e pastas {#exercicio-1-praticando-controle-de-arquivos-e-pastas}
---

1. Crie uma pasta chamada **estudando-terminal**.
2. Entre na pasta **estudando-terminal**.
3. Crie três pastas dentro dela chamadas **notas**, **poesias** e **textos**.
4. Crie um arquivo de texto dentro da pasta **notas** chamado **minhas_notas.txt**.
5. Crie um arquivo de texto dentro da pasta **poesias** chamado **minhas_poesias.txt**.
6. Crie um arquivo de texto dentro da pasta **textos** chamado **meus_textos.txt**.

<div class="mermaid text-center" aria-hidden="true">
flowchart TD
    A[estudando-terminal] --> B[notas]
    A --> C[poesias]
    A --> D[textos]
    B --> E[minhas_notas.txt]
    C --> F[minhas_poesias.txt]
    D --> G[meus_textos.txt]
</div>

Depois:

1. Copie o arquivo **minhas_notas.txt** para a pasta **textos**.
2. Mova o arquivo **minhas_poesias.txt** para a pasta **textos**.
3. Remova o arquivo **meus_textos.txt** da pasta **textos**.
4. Apague as pastas vazias **notas** e **poesias**.

Após as mudanças a estrutura de pastas ficará assim:

<div class="mermaid text-center" aria-hidden="true">
flowchart TD
    A[estudando-terminal] --> D[textos]
    D --> E[minhas_notas.txt]
    D --> F[minhas_poesias.txt]
    D --> G[meus_textos.txt]
</div>

- **Pasta "estudando-terminal"**:
  - 1.1 dentro da pasta "estudando-terminal" está a pasta **"textos"**
    - 1.1.1 dentro da pasta "textos" está o arquivo **"minhas_notas.txt"**
    - 1.1.2 dentro da pasta "textos" está o arquivo **"minhas_poesias.txt"**
    - 1.1.3 dentro da pasta "textos" está o arquivo **"meus_textos.txt"**


## Trabalhando com textos e dados {#trabalhando-com-textos-e-dados}
---

Agora vamos aprender a trabalhar com textos e dados dentro desses arquivos. No terminal, existem vários comandos poderosos que permitem visualizar, buscar, filtrar e modificar o conteúdo de arquivos de texto sem precisar abri-los em editores.

### Comando cat (visualizar conteúdo) {#comando-cat-visualizar-conteudo}
---

**Função**: Mostra o conteúdo completo de um arquivo de texto diretamente no terminal.

**Exemplo**:

```bash
cat arquivo.txt
```
{: .bg-dark .text-light .p-3}

Este comando exibe todo o conteúdo do arquivo.txt no terminal.

**Visualizando múltiplos arquivos**:

```bash
cat arquivo1.txt arquivo2.txt
```
{: .bg-dark .text-light .p-3}

Mostra o conteúdo de ambos os arquivos, um após o outro.

**Criando um novo arquivo com conteúdo**:

```bash
cat > novo-arquivo.txt
```
{: .bg-dark .text-light .p-3}

Após executar este comando, você pode digitar o texto que quiser e pressionar <kbd>Enter</kbd>, depois <kbd>Ctrl</kbd>+<kbd>D</kbd> para finalizar e salvar. Tudo que você digitar será salvo no arquivo novo-arquivo.txt.

Por exemplo, se escrever no terminal:

1. <code class="bg-dark text-white fw-light font-monospace p-2 rounded">cat > novo-arquivo.txt</code>
2. Pressionar <kbd>Enter</kbd>
3. Começar a digitar o texto

Como neste terminal

```bash
usuario@computador ~ % cat > novo-arquivo.txt
Olá, este é um exemplo de arquivo digitado diretamente pelo terminal. Estou digitando, escrevendo palavra por palavra, apenas para que este arquivo tenha conteúdo.
```
{: .bg-dark .text-light .p-3}

E depois pressionar <kbd>Enter</kbd> seguido de <kbd>Ctrl</kbd>+<kbd>D</kbd> para finalizar e salvar.

Tudo que você digitar será salvo no arquivo novo-arquivo.txt.

Se você quiser acessar as mudanças que fez, para ver se funcionaram digite o comando <code class="bg-dark text-white fw-light font-monospace p-2 rounded">cat novo-arquivo.txt</code> no terminal:

```bash
usuario@computador ~ % cat novo-arquivo.txt
Olá, este é um exemplo de arquivo digitado diretamente pelo terminal. Estou digitando, escrevendo palavra por palavra, apenas para que este arquivo tenha conteúdo.
```
{: .bg-dark .text-light .p-3}

**Combinando arquivos em um novo arquivo**:

Você também pode usar o comando <code class="bg-dark text-white fw-light font-monospace p-2 rounded">cat</code> para combinar o conteúdo de vários arquivos em um novo arquivo.

Por exemplo, se escrever:

```bash
cat arquivo1.txt arquivo2.txt > arquivo-combinado.txt
```
{: .bg-dark .text-light .p-3}

Este comando pega o conteúdo de arquivo1.txt e arquivo2.txt e cria um novo arquivo que aqui estamos chamando de arquivo-combinado.txt que vai ter o conteúdo dos dois arquivos.

**Adicionando conteúdo a um arquivo existente**:

```bash
cat arquivo1.txt >> arquivo2.txt
```
{: .bg-dark .text-light .p-3}

Este comando adiciona o conteúdo de arquivo1.txt ao final de arquivo2.txt.

### Comando grep (buscar texto) {#comando-grep-buscar-texto}
---

**Função**: Busca por padrões de texto em arquivos e mostra as linhas que contêm o texto buscado.

**Exemplo**:

```bash
grep "palavra" arquivo.txt
```
{: .bg-dark .text-light .p-3}

Este comando busca a palavra "palavra" no arquivo.txt e exibe todas as linhas que contêm essa palavra.

**Buscando em vários arquivos**:

```bash
grep "palavra" *.txt
```
{: .bg-dark .text-light .p-3}

Busca a palavra "palavra" em todos os arquivos com extensão .txt na pasta atual.

**Ignorando maiúsculas ou minúsculas**:

```bash
grep -i "palavra" arquivo.txt
```
{: .bg-dark .text-light .p-3}

Busca "palavra" em todos os arquivos com extensão .txt na pasta atual, independente da escrita, se está em maiúsculas ou minúsculas. Se nos arquivos tiver "Palavra", "PALAVRA" ou "palavra", todos serão encontrados.

**Mostrar o número da linha**:

```bash
grep -n "palavra" arquivo.txt
```
{: .bg-dark .text-light .p-3}

Mostra as linhas onde a palavra "palavra" aparece, junto com o número da linha.

**Mostrar apenas quantas vezes o que está sendo buscado aparece**:

```bash
grep -c "palavra" arquivo.txt
```
{: .bg-dark .text-light .p-3}

Mostra apenas quantas vezes a palavra "palavra" aparece no arquivo. Ou seja, mostra quantas linhas contêm essa palavra.

**Por que o <code class="bg-dark text-white fw-light font-monospace p-2 rounded">grep</code> é útil?**

O comando <code class="bg-dark text-white fw-light font-monospace p-2 rounded">grep</code> é extremamente útil para encontrar informações específicas em arquivos grandes, como arquivos com erro, configurações ou códigos-fonte. Em vez de ter que abrir e percorrer manualmente (um por um) cada arquivo, você pode rapidamente encontrar o que precisa usando padrões de busca.

É como um **"Google"** para seus arquivos. Você coloca as palavras que está buscando e ele te mostra onde elas aparecem.

### Comando sed (editor de texto sem abrir o arquivo) {#comando-sed-editor-de-fluxo}
---

**Função**: O comando <code class="bg-dark text-white fw-light font-monospace p-2 rounded">sed</code> é como um "editor de texto" que permite fazer mudanças em arquivos sem precisar abri-los. É como se você pudesse trocar todas as ocorrências (vezes que uma palavra aparece) de uma palavra por outra em um livro sem precisar folheá-lo página por página.

**O que significa sed?** O nome vem de "Stream Editor" (Editor de Fluxo), porque ele processa o texto linha por linha.

**Exemplo de substituição básica**:

```bash
sed 's/palavra_antiga/palavra_nova/' arquivo.txt
```
{: .bg-dark .text-light .p-3}

Vamos entender cada parte desse comando:

- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">s</code> significa "substituir"
- A primeira parte <code class="bg-dark text-white fw-light font-monospace p-2 rounded">palavra_antiga</code> é o que você quer encontrar
- A segunda parte <code class="bg-dark text-white fw-light font-monospace p-2 rounded">palavra_nova</code> é pelo que você quer substituir
- As barras <code class="bg-dark text-white fw-light font-monospace p-2 rounded">/</code> são separadores entre essas partes
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">arquivo.txt</code> é o arquivo onde a substituição será feita

Por exemplo, se seu arquivo tiver a frase "O gato dormiu na cama", e você usar:

```bash
sed 's/gato/cachorro/' arquivo.txt
```
{: .bg-dark .text-light .p-3}

O resultado mostrado será: "O cachorro dormiu na cama"

**Importante**: Esse comando apenas mostra o resultado no terminal, mas não altera o arquivo original!

**E se a palavra aparecer várias vezes na mesma linha?**

```bash
sed 's/palavra_antiga/palavra_nova/g' arquivo.txt
```
{: .bg-dark .text-light .p-3}

A letra <code class="bg-dark text-white fw-light font-monospace p-2 rounded">g</code> no final (vem de "global") e faz com que todas as vezes que a palavra aparecer na mesma linha sejam substituídas.

Sem o <code class="bg-dark text-white fw-light font-monospace p-2 rounded">g</code>, apenas a primeira ocorrência (primeira vez que aparece) em cada linha é substituída.

Por exemplo, se seu arquivo tiver:

```
O gato brincou com o gato de pelúcia.
```

Com o comando:

```bash
sed 's/gato/cachorro/' arquivo.txt  # sem o g
```
{: .bg-dark .text-light .p-3}

Resultado:

```
O cachorro brincou com o gato de pelúcia.
```

Mas com o comando:

```bash
sed 's/gato/cachorro/g' arquivo.txt  # com o g
```
{: .bg-dark .text-light .p-3}

Resultado:

```
O cachorro brincou com o cachorro de pelúcia.
```

**Como salvar as mudanças em um novo arquivo**:

```bash
sed 's/palavra_antiga/palavra_nova/g' arquivo.txt > arquivo_novo.txt
```
{: .bg-dark .text-light .p-3}

O símbolo <code class="bg-dark text-white fw-light font-monospace p-2 rounded">&gt;</code> pega toda a saída do comando e "redireciona" para um novo arquivo. É como se você estivesse pegando o resultado que apareceria na tela e salvando em um novo arquivo.

**Como modificar o arquivo original diretamente**:

```bash
sed -i 's/palavra_antiga/palavra_nova/g' arquivo.txt
```
{: .bg-dark .text-light .p-3}

A opção <code class="bg-dark text-white fw-light font-monospace p-2 rounded">-i</code> (de "in-place", ou seja, "no local") faz a edição diretamente no arquivo original. Cuidado! Isso altera seu arquivo sem criar uma cópia de backup (cópia de segurança).

**Nota para usuários de macOS**: No macOS o comando é um pouco diferente:

```bash
sed -i '' 's/palavra_antiga/palavra_nova/g' arquivo.txt
```
{: .bg-dark .text-light .p-3}

As aspas vazias <code class="bg-dark text-white fw-light font-monospace p-2 rounded">''</code> são necessárias no macOS e significam "não crie arquivo de backup".

**Como remover uma linha específica**:

```bash
sed '5d' arquivo.txt
```
{: .bg-dark .text-light .p-3}

O **5d** significa "delete a linha 5". Isso mostrará o arquivo sem a quinta linha (mas, novamente, não altera o arquivo original). A letra **d** vem da palavra "delete" (apagar em inglês).

O comando <code class="bg-dark text-white fw-light font-monospace p-2 rounded">sed</code> pode parecer complicado no início, mas com a prática você verá como ele é poderoso para manipular textos sem precisar abrir cada arquivo em um editor.

### Comando awk (trabalhar com dados em colunas) {#comando-awk-processamento-de-texto}
---

**Função**: O comando <code class="bg-dark text-white fw-light font-monospace p-2 rounded">awk</code> é como uma "tesoura" para textos que te permite recortar, filtrar e organizar dados que estão organizados em linhas e colunas. É perfeito para trabalhar com tabelas, planilhas salvas como CSV, como as que se usa no Excel.

**O nome AWK**: Curiosidade! O nome "AWK" vem das iniciais dos seus criadores: Aho, Weinberger e Kernighan. 

**Como o awk enxerga os arquivos?**

O awk vê cada arquivo como uma série de linhas, e cada linha como uma série de campos (colunas) separados por espaços ou tabulações (que se inserem com <kbd>Tab</kbd>). 

Por exemplo, para o awk, este texto:

```
nome idade cidade
João 25 Salvador
Maria 30 Recife
Pedro 22 São Paulo
```

É visto como três linhas, cada uma com três colunas.

Assim:

<div class="table-responsive">
  <table id="tabela-pessoas" class="table table-bordered table-dark" aria-label="Tabela com informações de pessoas">
    <caption class="visually-hidden">Lista de pessoas com seus dados básicos</caption>
    <thead>
      <tr>
        <th scope="col">Nome</th>
        <th scope="col">Idade</th>
        <th scope="col">Cidade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">João</th>
        <td>25</td>
        <td>Salvador</td>
      </tr>
      <tr>
        <th scope="row">Maria</th>
        <td>30</td>
        <td>Recife</td>
      </tr>
      <tr>
        <th scope="row">Pedro</th>
        <td>22</td>
        <td>São Paulo</td>
      </tr>
    </tbody>
  </table>
</div>

**Exemplo básico - pegando só a primeira coluna**:

```bash
awk '{print $1}' arquivo.txt
```
{: .bg-dark .text-light .p-3}

Este comando mostra apenas a primeira coluna (ou campo) de cada linha do arquivo. É como se você tivesse uma tabela e quisesse ver apenas a primeira coluna.

Se aplicarmos ao nosso exemplo acima, o resultado seria:

```
nome
João
Maria
Pedro
```

No awk:

- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">$1</code> representa a primeira coluna
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">$2</code> a segunda coluna
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">$3</code> a terceira coluna
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">$0</code> representa a linha inteira

**Pegando várias colunas ao mesmo tempo**:

```bash
awk '{print $1, $3}' arquivo.txt
```
{: .bg-dark .text-light .p-3}

Isso mostra a primeira e a terceira coluna de cada linha, com um espaço entre elas. É como pegar o nome e a cidade da nossa tabela exemplo:

```
nome cidade
João Salvador
Maria Recife
Pedro São Paulo
```

**E se meus dados forem separados por vírgulas (como em arquivos CSV)?**

```bash
awk -F"," '{print $1, $3}' dados.csv
```
{: .bg-dark .text-light .p-3}

O <code class="bg-dark text-white fw-light font-monospace p-2 rounded">-F","</code> diz ao awk: "use a vírgula como separador de colunas, não o espaço". Isso é muito útil para arquivos CSV (como planilhas Excel salvas como CSV).

Por exemplo, com um arquivo CSV assim:

```
nome,idade,cidade
João,25,Salvador
Maria,30,Recife
Pedro,22,São Paulo
```

O comando acima mostraria:

```
nome cidade
João Salvador
Maria Recife
Pedro São Paulo
```

**Filtrando dados com alguma condição específica**:

```bash
awk '$2 > 25 {print $1, $2}' arquivo.txt
```
{: .bg-dark .text-light .p-3}

Este comando é como um filtro: ele mostra apenas as linhas onde o valor da segunda coluna é maior que 25. Aplicado ao nosso exemplo, seria como pedir "mostre apenas pessoas com mais de 25 anos":

```
Maria 30
```

Porque apenas Maria tem idade (segunda coluna) maior que 25.

O comando <code class="bg-dark text-white fw-light font-monospace p-2 rounded">awk</code> a princípio pode parecer complicado, mas é uma ferramenta poderosa para manipulação de texto e análise de dados.

## Exercício 2: Praticando manipulação de texto {#exercicio-2-praticando-manipulacao-de-texto}
---

Neste exercício, você irá criar arquivos com conteúdo e usar os comandos para manipular esses textos.

1. Entre na pasta **estudando-terminal/textos** que criamos no exercício anterior.
2. Crie um novo arquivo chamado **frutas.txt** com o seguinte conteúdo:
   ```
   maçã
   banana
   laranja
   abacaxi
   morango
   uva
   melancia
   ```

3. Crie outro arquivo chamado **dados_alunos.csv** com o seguinte conteúdo:
   ```
   nome,idade,nota
   Ana,22,8.5
   Bruno,19,7.0
   Carla,21,9.5
   Diego,20,6.5
   Elisa,23,10.0
   ```

Agora, pratique os comandos de manipulação de texto:

1. Use o comando **cat** para mostrar o conteúdo do arquivo **frutas.txt**.
2. Use o comando **grep** para encontrar todas as frutas que contêm a letra "a".
3. Use o comando **sed** para substituir "abacaxi" por "cajú" no arquivo **frutas.txt**.
4. Use o comando **awk** para mostrar apenas os nomes dos alunos do arquivo **dados_alunos.csv**.

## Resumo {#resumo}
---

Conhecemos o terminal uma ferramenta que, apesar de parecer assustadora no começo, é super útil para quem quer aprender programação e trabalhar com mais controle sobre o sistema operacional.

Entendemos que o terminal é basicamente uma forma de conversar com o computador usando texto, em vez de clicar em botões e ícones. Ele se destaca por várias razões:

- **Faz mais com menos**: Com pouquinhas teclas, você faz coisas que exigiriam vários cliques
- **Repete tarefas sozinho**: É como ensinar o computador a fazer algo chato no automático
- **Guarda tudo que você faz**: Anota todos os comandos, então você não esquece o que fez
- **Trabalha de longe**: Permite mexer em computadores que estão do outro lado do mundo
- **É acessível**: É muito bom para quem usa leitor de tela, já que tudo é texto

Conhecemos também os gerenciadores de pacotes, que são como lojas de aplicativos do terminal:

- **APT**: para Ubuntu e outras distribuições Linux como Debian, Linux Mint e Pop!_OS
- **Pacman**: para Arch Linux
- **DNF/YUM**: para Fedora
- **Homebrew**: para MacOS

Com esses gerenciadores, fazer a instalação, suas dependências e atualizações fica simples.

Além disso, aprendemos também os comandos básicos para:

**Mexer com arquivos e pastas**:
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">ls</code>: "O que tem nesta pasta?"
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">cd</code>: "Quero ir para aquela pasta"
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">mkdir</code>: "Crie uma pasta nova"
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">touch</code>: "Crie um arquivo em branco"
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">cp</code>: "Faça uma cópia deste arquivo"
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">mv</code>: "Mude este arquivo de lugar ou de nome"
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">rm</code>: "Apague este arquivo ou pasta"

**Trabalhar com textos**:
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">cat</code>: "Mostre o que tem dentro deste arquivo"
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">grep</code>: "Encontre esta palavra no arquivo"
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">sed</code>: "Troque esta palavra por aquela em todo o arquivo"
- <code class="bg-dark text-white fw-light font-monospace p-2 rounded">awk</code>: "Organize estes dados de uma forma mais fácil de entender"

Depois de tudo isso é possível entender que o terminal é uma ferramenta poderosa que, quando dominada, pode aumentar significativamente a produtividade e a eficiência no trabalho com tecnologia. Por isso é tão importante aprender a usá-lo bem.