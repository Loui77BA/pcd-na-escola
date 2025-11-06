---
layout: post
title: "Introdução à Programação: Configurando o Ambiente Ruby"
description: "Aprenda a configurar um ambiente completo para desenvolver em Ruby no Ubuntu, macOS e Windows com WSL, usando o terminal, gerenciadores de pacotes e o Visual Studio Code."
date: 2025-09-10 10:00:00 -0300
author: Louise Suelen
categories: [Programação]
tags: ["programação", "tecnologia", "ruby"]
permalink: /introducao-a-programacao-configurando-o-ambiente-de-desenvolvimento-ruby/
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

        <!-- 2. O que é o asdf -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#o-que-e-o-asdf" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">2</span>
                O que é o asdf
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#por-que-usar-o-asdf" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">2.1</span>
                        Por que usar o asdf?
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#como-funciona" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">2.2</span>
                        Como funciona
                    </a>
                </li>
            </ul>
        </li>

        <!-- 3. Configurando o WSL no Windows -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#configurando-o-wsl-no-windows" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">3</span>
                Configurando o WSL no Windows
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#por-que-usar-o-wsl" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">3.1</span>
                        Por que usar o WSL?
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#passo-a-passo-para-instalar-o-wsl" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">3.2</span>
                        Passo a passo para instalar o WSL
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#abrindo-o-wsl-no-futuro" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">3.3</span>
                        Abrindo o WSL no futuro
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#dicas-de-acessibilidade-para-nvda-no-wsl" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">3.4</span>
                        Dicas de acessibilidade para NVDA no WSL
                    </a>
                </li>
            </ul>
        </li>

        <!-- 4. Instalando asdf no Ubuntu/WSL -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#instalando-asdf-no-ubuntu-wsl" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">4</span>
                Instalando asdf no Ubuntu/WSL
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#passo-1-instalar-dependencias" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.1</span>
                        1) Instalar dependências
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#passo-2-baixar-e-instalar-o-asdf" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.2</span>
                        2) Baixar e instalar o asdf
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#passo-3-configurar-o-bash-ubuntu" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.3</span>
                        3) Configurar o Bash
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#passo-4-recarregar-o-bash-ubuntu" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.4</span>
                        4) Recarregar o Bash
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#passo-5-verificar-a-instalacao-ubuntu" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.5</span>
                        5) Verificar a instalação
                    </a>
                </li>
            </ul>
        </li>

        <!-- 5. Instalando asdf no macOS -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#instalando-asdf-no-macos" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">5</span>
                Instalando asdf no macOS
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#passo-1-instalar-o-asdf-via-homebrew" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">5.1</span>
                        1) Instalar o asdf via Homebrew
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#passo-2-configurar-o-shell-zsh-macos" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">5.2</span>
                        2) Configurar o shell (Zsh)
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#passo-3-recarregar-o-shell-macos" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">5.3</span>
                        3) Recarregar o shell
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#passo-4-verificar-a-instalacao-macos" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">5.4</span>
                        4) Verificar a instalação
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#dicas-de-acessibilidade-para-voiceover-no-macos" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">5.5</span>
                        Dicas de acessibilidade para VoiceOver no macOS
                    </a>
                </li>
            </ul>
        </li>

        <!-- 6. Instalando Ruby com asdf -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#instalando-ruby-com-asdf" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">6</span>
                Instalando Ruby com asdf
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#passo-1-adicionar-o-plugin-do-ruby" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">6.1</span>
                        1) Adicionar o plugin do Ruby
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#passo-2-ver-versoes-disponiveis-opcional" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">6.2</span>
                        2) Ver versões disponíveis (opcional)
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#passo-3-instalar-a-versao-mais-recente" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">6.3</span>
                        3) Instalar a versão mais recente
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#passo-4-definir-a-versao-global-padrao" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">6.4</span>
                        4) Definir a versão global (padrão)
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#passo-5-verificar-a-instalacao" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">6.5</span>
                        5) Verificar a instalação
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#passo-6-instalar-o-bundler" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">6.6</span>
                        6) Instalar o Bundler
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#gerenciando-versoes-por-projeto" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">6.7</span>
                        Gerenciando versões por projeto
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#comandos-uteis-do-asdf" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">6.8</span>
                        Comandos úteis do asdf
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#migrando-de-rbenv-rvm-para-o-asdf" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">6.9</span>
                        Migrando do rbenv/RVM para o asdf
                    </a>
                </li>
            </ul>
        </li>

        <!-- 7. Configurando o VS Code -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#configurando-o-vs-code" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">7</span>
                Configurando o VS Code
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#extensoes-recomendadas" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">7.1</span>
                        Extensões recomendadas
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#como-instalar-extensoes-no-vs-code" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">7.2</span>
                        Como instalar extensões no VS Code
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#configurando-o-vs-code-para-wsl-windows" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">7.3</span>
                        Configurando o VS Code para WSL (Windows)
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#ajustes-uteis-no-vs-code" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">7.4</span>
                        Ajustes úteis no VS Code
                    </a>
                </li>
                
            </ul>
        </li>

        <!-- 8. Testando o ambiente -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#testando-o-ambiente" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">8</span>
                Testando o ambiente
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#passo-1-verificar-versoes-instaladas" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">8.1</span>
                        1) Verificar versões instaladas
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#passo-2-executar-um-comando-ruby-de-uma-linha" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">8.2</span>
                        2) Executar um comando Ruby (uma linha)
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#passo-3-testar-a-troca-de-versoes-opcional" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">8.3</span>
                        3) Testar a troca de versões (opcional)
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#problemas-comuns-e-solucoes" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">8.4</span>
                        Problemas comuns e soluções
                    </a>
                </li>
            </ul>
        </li>

        <!-- 9. Resumo -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#resumo" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">9</span>
                Resumo
            </a>
        </li>
    </ul>
---

Este artigo vai apresentar como fazer as configurações iniciais para montar um ambiente de desenvolvimento em **Ruby** usando o **asdf**, um gerenciador de versões universal. Isso inclui a instalação do asdf, configuração do WSL no Windows, instalação do Ruby e preparação do VS Code.

<div class="text-center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" aria-hidden="true" class="img-fluid" style="max-height:200px">
</div>

## Apresentação {#apresentacao}
---

Neste artigo, vamos configurar o ambiente necessário para começar a programar em **Ruby**, uma das linguagens mais elegantes e legíveis da atualidade.

A diferença deste guia é que vamos usar o **asdf**, um gerenciador de versões universal que permite controlar não apenas o Ruby, mas também Node.js, Python, Go e dezenas de outras ferramentas, tudo em um único lugar.

Serão explicados os passos para:
- Entender o que é o asdf e por que usá-lo
- Configurar o WSL (Windows Subsystem for Linux) no Windows
- Instalar o asdf no Ubuntu/WSL e macOS
- Instalar e gerenciar versões do Ruby
- Configurar o VS Code como editor de código
- Fazer o primeiro teste prático

Assim como nos artigos anteriores, tudo será apresentado com explicações passo a passo, comandos em destaque e orientações específicas para quem usa **leitores de tela**.

### Glossário rápido (sem mistério) {#glossario-rapido}
---

- **Terminal**: programa onde digitamos comandos. No Windows (com WSL) usaremos o terminal do Ubuntu; no macOS, o app Terminal.
- **Shell**: o “intérprete” que entende os comandos. Os mais comuns são o **Bash** (no Ubuntu/WSL) e o **Zsh** (no macOS). Neste guia, no Ubuntu/WSL vamos usar apenas Bash.
- **WSL**: sigla de Windows Subsystem for Linux. Ele coloca um Linux (Ubuntu) dentro do Windows, sem máquina virtual.
- **asdf**: ferramenta que instala e alterna versões de linguagens (Ruby, Node, Python...).
- **Homebrew**: gerenciador de pacotes do macOS (instala programas pelo terminal).
- **VS Code**: editor de código onde vamos escrever e ler arquivos mais pra frente (neste artigo, só instalamos as extensões).

## O que é o asdf {#o-que-e-o-asdf}
---

O **asdf** é um gerenciador de versões universal (em inglês, "version manager"). Ele permite instalar e alternar entre diferentes versões de linguagens de programação e ferramentas de desenvolvimento.

### Por que usar o asdf? {#por-que-usar-o-asdf}
---

- **Gerencia múltiplas linguagens**: Em vez de usar um gerenciador diferente para cada linguagem (<code class="text-white-50 text-light">rbenv</code> para Ruby, <code class="text-white-50 text-light">nvm</code> para Node.js, <code class="text-white-50 text-light">pyenv</code> para Python), o <code class="text-white-50 text-light">asdf</code> gerencia tudo.
- **Fácil de usar**: Comandos simples e consistentes para todas as linguagens.
- **Controle por projeto**: Você pode definir versões diferentes de Ruby para cada projeto, através de um arquivo chamado <code class="text-white-50 text-light">.tool-versions</code>.
- **Comunidade ativa**: Centenas de plugins disponíveis para diferentes ferramentas.

### Como funciona {#como-funciona}
---

O asdf usa plugins para cada linguagem ou ferramenta. Para Ruby, você instala o plugin do Ruby, e depois pode instalar quantas versões quiser:

```bash
# Instalar o plugin do Ruby
asdf plugin add ruby

# Instalar uma versão específica
asdf install ruby 3.3.0

# Definir como versão global (padrão)
asdf global ruby 3.3.0
```
{: .bg-dark .text-light .p-3}

## Configurando o WSL no Windows {#configurando-o-wsl-no-windows}
---

O WSL (Windows Subsystem for Linux) permite rodar um ambiente Linux completo dentro do Windows. Isso é essencial para programar em Ruby, pois a maioria das ferramentas e bibliotecas foram criadas pensando em sistemas Unix/Linux.

### Por que usar o WSL? {#por-que-usar-o-wsl}
---

- **Compatibilidade**: Muitas gems (bibliotecas Ruby) funcionam melhor no Linux.
- **Ferramentas**: Você terá acesso a todas as ferramentas de linha de comando do Linux.
- **Aprendizado**: É o mesmo ambiente usado em servidores de produção (que são os lugares onde as aplicações ficam online para serem acessadas).

### Passo a passo para instalar o WSL {#passo-a-passo-para-instalar-o-wsl}
---

**1) Verificar requisitos:**

- Windows 10 versão 2004 ou superior (Build 19041 ou superior), ou Windows 11.
- Para verificar, pressione <kbd>Windows</kbd> + <kbd>R</kbd>, digite <code class="text-white-50 text-light">winver</code> e pressione <kbd>Enter</kbd>.

**2) Habilitar o WSL:**

Abra o PowerShell como Administrador. Para fazer isso:

- Pressione <kbd>Windows</kbd>, digite "PowerShell"
- Quando o NVDA anunciar "Windows PowerShell, aplicativo", pressione <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Enter</kbd> para abrir como administrador
- Confirme o UAC (Controle de Conta de Usuário) pressionando <kbd>Alt</kbd> + <kbd>S</kbd> (Sim)

No PowerShell, execute:

```powershell
wsl --install
```
{: .bg-dark .text-light .p-3}

Este comando faz várias coisas:
- Habilita os recursos necessários do Windows
- Baixa o kernel do Linux
- Instala o Ubuntu como distribuição padrão

**3) Reiniciar o computador:**

Após a instalação, reinicie o Windows. Pressione <kbd>Windows</kbd> + <kbd>X</kbd>, depois <kbd>U</kbd> duas vezes para reiniciar.

**4) Configurar o Ubuntu:**

Após reiniciar, o Ubuntu será aberto automaticamente pedindo para você criar um usuário:

- Digite um nome de usuário (só letras minúsculas e números, sem espaços)
- Pressione <kbd>Enter</kbd>
- Digite uma senha (o cursor não vai se mover, é normal por segurança)
- Pressione <kbd>Enter</kbd>
- Digite a senha novamente
- Pressione <kbd>Enter</kbd>

**5) Atualizar o sistema:**

Com o Ubuntu configurado, execute:

```bash
sudo apt update && sudo apt upgrade -y
```
{: .bg-dark .text-light .p-3}

Digite sua senha quando solicitado e aguarde a atualização terminar.

### Abrindo o WSL no futuro {#abrindo-o-wsl-no-futuro}
---

Para abrir o Ubuntu novamente:
- Pressione <kbd>Windows</kbd>
- Digite "Ubuntu"
- Pressione <kbd>Enter</kbd>

Ou use o Windows Terminal (recomendado):
- Pressione <kbd>Windows</kbd>
- Digite "Terminal"
- Pressione <kbd>Enter</kbd>
- No Terminal, pressione <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>2</kbd> para abrir uma aba do Ubuntu

### Dicas de acessibilidade para NVDA no WSL {#dicas-de-acessibilidade-para-nvda-no-wsl}
---

- O NVDA lê bem o terminal do Ubuntu no WSL
- Use <kbd>NVDA</kbd> + <kbd>Seta para Baixo</kbd> para ativar o modo de foco e ouvir as saídas dos comandos
- Use <kbd>Insert</kbd> + <kbd>Seta para Cima</kbd> para revisar a linha anterior
- O histórico de comandos é acessado com <kbd>Seta para Cima</kbd> e <kbd>Seta para Baixo</kbd>

## Instalando asdf no Ubuntu/WSL {#instalando-asdf-no-ubuntu-wsl}
---

Agora vamos instalar o asdf no Ubuntu (ou no WSL com Ubuntu).

### 1) Instalar dependências {#passo-1-instalar-dependencias}
---

```bash
sudo apt update
sudo apt install -y curl git build-essential autoconf bison libssl-dev zlib1g-dev libreadline-dev libyaml-dev libffi-dev libgdbm-dev
```
{: .bg-dark .text-light .p-3}

Estas dependências são necessárias para:
- <code class="text-white-50 text-light">curl</code> e <code class="text-white-50 text-light">git</code>: são ferramentas para baixar o asdf e os plugins. O curl é usado para fazer requisições web, ou seja, baixar arquivos da internet ou conteúdos de APIs. Já o git é usado para clonar repositórios de código e gerenciar versões em projetos de software. Usando essas ferramentas, o asdf pode facilmente baixar e instalar os plugins e versões das linguagens que você deseja usar.

- <code class="text-white-50 text-light">build-essential</code>: é como o um kit de ferramentas necessário para compilar (montar) programas a partir do código-fonte. Muitas linguagens, incluindo o Ruby, precisam ser compiladas para funcionar corretamente no seu sistema. O build-essential inclui o compilador GCC, make e outras ferramentas essenciais para esse processo.

- <code class="text-white-50 text-light">libssl-dev</code> e <code class="text-white-50 text-light">zlib1g-dev</code>: essas são bibliotecas necessárias para o Ruby funcionar corretamente, especialmente para lidar com conexões seguras (SSL) e compressão de dados (zlib). Isso garante que o Ruby possa usar recursos importantes para segurança e manipulação de dados.

- <code class="text-white-50 text-light">autoconf</code> e <code class="text-white-50 text-light">bison</code>: ferramentas usadas no processo de construção (build) de softwares a partir do código‑fonte. O <em>autoconf</em> ajuda a gerar o script <code class="text-white-50 text-light">configure</code> que detecta recursos do seu sistema, e o <em>bison</em> é um gerador de analisadores sintáticos (parser). Ao compilar o Ruby, essas ferramentas garantem que a configuração e a geração de partes do código aconteçam corretamente.

- <code class="text-white-50 text-light">libreadline-dev</code>: fornece recursos de edição de linha no terminal (histórico, setas e atalhos), usados por ferramentas como o <code class="text-white-50 text-light">irb</code> (console interativo do Ruby). Sem o Readline, a experiência no console fica limitada.

- <code class="text-white-50 text-light">libyaml-dev</code>: biblioteca necessária para o suporte a YAML no Ruby (gem/stdlib <code class="text-white-50 text-light">psych</code>). Muitos projetos Ruby usam YAML para configuração; esta biblioteca habilita a extensão nativa correspondente.

- <code class="text-white-50 text-light">libffi-dev</code>: implementa a <em>Foreign Function Interface</em>, permitindo que extensões Ruby e gems chamem código nativo (C/C++). É usada por bibliotecas da própria stdlib (como <code class="text-white-50 text-light">fiddle</code>) e por várias gems.

- <code class="text-white-50 text-light">libgdbm-dev</code>: biblioteca de banco de dados simples (GDBM) utilizada pelo módulo <code class="text-white-50 text-light">dbm</code> da biblioteca padrão do Ruby. Alguns projetos e scripts se apoiam nesse backend; instalar a versão de desenvolvimento permite compilar a extensão correspondente.

### 2) Baixar e instalar o asdf {#passo-2-baixar-e-instalar-o-asdf}
---

```bash
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.14.0
```
{: .bg-dark .text-light .p-3}

Este comando baixa o asdf para a pasta <code class="text-white-50 text-light">~/.asdf</code> (o til significa "sua pasta pessoal").

### 3) Configurar o Bash {#passo-3-configurar-o-bash-ubuntu}
---

Vamos usar apenas o Bash (shell padrão do Ubuntu/WSL na maioria dos casos). O arquivo de configuração do Bash fica na sua pasta pessoal e se chama <code class="text-white-50 text-light">~/.bashrc</code>.

Vamos editar esse arquivo com o editor de texto <strong>nano</strong> (ele abre no próprio terminal).

1) Abrir o arquivo no nano

```bash
nano ~/.bashrc
```
{: .bg-dark .text-light .p-3}

2) Ir até o final do arquivo
- Use as setas do teclado para descer até a última linha.

3) Adicionar estas linhas exatamente como estão

```bash
source "$HOME/.asdf/asdf.sh"
source "$HOME/.asdf/completions/asdf.bash"
```
{: .bg-dark .text-light .p-3}

4) Salvar e sair do nano
- Pressione <kbd>Ctrl</kbd> + <kbd>O</kbd> (de “Output”) para salvar.
- O nano vai perguntar o nome do arquivo. Pressione <kbd>Enter</kbd> para confirmar.
- Depois pressione <kbd>Ctrl</kbd> + <kbd>X</kbd> para sair do editor.

5) (Opcional) Compatibilidade com arquivos <code class="text-white-50 text-light">.ruby-version</code>
Alguns projetos trazem um arquivo chamado <code class="text-white-50 text-light">.ruby-version</code>. Podemos pedir ao asdf para entender esse arquivo criando (ou editando) <code class="text-white-50 text-light">~/.asdfrc</code>:

```bash
nano ~/.asdfrc
```
{: .bg-dark .text-light .p-3}

No arquivo que abriu, digite esta linha, salve (<kbd>Ctrl</kbd>+<kbd>O</kbd>, <kbd>Enter</kbd>) e saia (<kbd>Ctrl</kbd>+<kbd>X</kbd>):

```text
legacy_version_file = yes
```
{: .bg-dark .text-light .p-3}

### 4) Recarregar o Bash {#passo-4-recarregar-o-bash-ubuntu}
---

Para aplicar as mudanças, feche e abra o terminal novamente.

Se preferir, recarregue o arquivo de configuração com:

```bash
source ~/.bashrc
```
{: .bg-dark .text-light .p-3}

Alternativa (faz o Bash reiniciar):

```bash
exec bash
```
{: .bg-dark .text-light .p-3}


### 5) Verificar a instalação {#passo-5-verificar-a-instalacao-ubuntu}
---

```bash
asdf --version
```
{: .bg-dark .text-light .p-3}

Você deve ver algo como: <code class="text-white-50 text-light">v0.14.0</code>

## Instalando asdf no macOS {#instalando-asdf-no-macos}
---

No macOS, vamos instalar o asdf usando o Homebrew.

### 1) Instalar o asdf via Homebrew {#passo-1-instalar-o-asdf-via-homebrew}
---

```bash
brew install asdf
```
{: .bg-dark .text-light .p-3}

### 2) Configurar o shell (Zsh) {#passo-2-configurar-o-shell-zsh-macos}
---

No macOS o shell padrão é o **Zsh**. Vamos adicionar o asdf à configuração do Zsh.

Opção A — usando editor (recomendado):

```bash
nano ~/.zshrc
```
{: .bg-dark .text-light .p-3}

No final do arquivo, cole esta linha, salve e saia do nano:

```bash
. $(brew --prefix asdf)/libexec/asdf.sh
```
{: .bg-dark .text-light .p-3}

Para permitir compatibilidade com arquivos como <code class="text-white-50 text-light">.ruby-version</code>, adicione também (opcional):

```bash
echo 'legacy_version_file = yes' >> ~/.asdfrc
```
{: .bg-dark .text-light .p-3}

Opção B — usando comandos (atalho):

```bash
echo -e "\n. $(brew --prefix asdf)/libexec/asdf.sh" >> ~/.zshrc
echo 'legacy_version_file = yes' >> ~/.asdfrc
```
{: .bg-dark .text-light .p-3}

### 3) Recarregar o shell {#passo-3-recarregar-o-shell-macos}
---

```bash
source ~/.zshrc
```
{: .bg-dark .text-light .p-3}

Alternativa (faz o Zsh reiniciar):

```bash
exec zsh
```
{: .bg-dark .text-light .p-3}

### 4) Verificar a instalação {#passo-4-verificar-a-instalacao-macos}
---

```bash
asdf --version
```
{: .bg-dark .text-light .p-3}

### Dicas de acessibilidade para VoiceOver no macOS {#dicas-de-acessibilidade-para-voiceover-no-macos}
---

- O VoiceOver funciona bem com o Terminal do macOS
- Use <kbd>VO</kbd> + <kbd>Seta para Cima/Baixo</kbd> para navegar entre as linhas do terminal
- Para revisar a saída do último comando, use <kbd>VO</kbd> + <kbd>A</kbd> para começar a ler
- O histórico de comandos é acessado com <kbd>Seta para Cima</kbd> e <kbd>Seta para Baixo</kbd>

## Instalando Ruby com asdf {#instalando-ruby-com-asdf}
---

Agora que o asdf está instalado, vamos adicionar o plugin do Ruby e instalar a linguagem.

### 1) Adicionar o plugin do Ruby {#passo-1-adicionar-o-plugin-do-ruby}
---

```bash
asdf plugin add ruby https://github.com/asdf-vm/asdf-ruby.git
```
{: .bg-dark .text-light .p-3}

Este comando adiciona o plugin oficial do Ruby ao asdf.

### 2) Ver versões disponíveis (opcional) {#passo-2-ver-versoes-disponiveis-opcional}
---

Para ver todas as versões disponíveis:

```bash
asdf list all ruby
```
{: .bg-dark .text-light .p-3}

**Atenção**: Este comando pode mostrar centenas de versões. Para ver apenas as 10 mais recentes:

```bash
asdf list all ruby | tail -20
```
{: .bg-dark .text-light .p-3}

### 3) Instalar a versão mais recente {#passo-3-instalar-a-versao-mais-recente}
---

```bash
# No macOS, garanta o uso do OpenSSL do Homebrew
if [[ "$(uname)" == "Darwin" ]]; then 
    export RUBY_CONFIGURE_OPTS="--with-openssl-dir=$(brew --prefix openssl@3)"
fi

asdf install ruby latest
```
{: .bg-dark .text-light .p-3}

Este processo pode demorar alguns minutos, pois o Ruby será compilado (montado) do zero no seu computador. O asdf vai baixar o código-fonte e compilar especificamente para o seu sistema.

**Para instalar uma versão específica**, por exemplo a 3.3.0:

```bash
asdf install ruby 3.3.0
```
{: .bg-dark .text-light .p-3}

### 4) Definir a versão global (padrão) {#passo-4-definir-a-versao-global-padrao}
---

```bash
asdf global ruby latest
```
{: .bg-dark .text-light .p-3}

Ou, se instalou uma versão específica:

```bash
asdf global ruby 3.3.0
```
{: .bg-dark .text-light .p-3}

### 5) Verificar a instalação {#passo-5-verificar-a-instalacao}
---

```bash
ruby -v
gem -v
```
{: .bg-dark .text-light .p-3}

Você deve ver a versão do Ruby e do gem (gerenciador de pacotes do Ruby).

### 6) Instalar o Bundler {#passo-6-instalar-o-bundler}
---

O Bundler é o gerenciador de dependências do Ruby:

```bash
gem install bundler
gem update --system
asdf reshim ruby
bundle -v
```
{: .bg-dark .text-light .p-3}

### Gerenciando versões por projeto {#gerenciando-versoes-por-projeto}
---

Uma das grandes vantagens do asdf é poder ter versões diferentes de Ruby para cada projeto.

**Exemplo**: Se você tem um projeto que precisa do Ruby 3.2.0, entre na pasta do projeto e execute:

```bash
cd ~/meu-projeto
asdf local ruby 3.2.0
```
{: .bg-dark .text-light .p-3}

Isso cria um arquivo <code class="text-white-50 text-light">.tool-versions</code> na pasta do projeto, e sempre que você entrar nesta pasta, o asdf vai usar automaticamente o Ruby 3.2.0.

### Comandos úteis do asdf {#comandos-uteis-do-asdf}
---

```bash
# Listar versões instaladas
asdf list ruby

# Listar todos os plugins instalados
asdf plugin list

# Atualizar o asdf
asdf update

# Atualizar todos os plugins
asdf plugin update --all

# Regenerar shims após instalar gems com executáveis
asdf reshim ruby

# Remover uma versão
asdf uninstall ruby 3.2.0

# Ver a versão atual em uso
asdf current ruby
```
{: .bg-dark .text-light .p-3}

### Migrando do rbenv/RVM para o asdf {#migrando-de-rbenv-rvm-para-o-asdf}
---

Se você já usava rbenv ou RVM, siga estes passos para migrar com segurança:

1) Desative a inicialização do gerenciador antigo no seu shell:

```bash
# Comente linhas do rbenv ou RVM no ~/.zshrc ou ~/.bashrc
sed -n '/rbenv\|rvm/p' ~/.zshrc 2>/dev/null
```
{: .bg-dark .text-light .p-3}

2) Ative o modo de compatibilidade de versões do asdf (lê .ruby-version):

```bash
echo 'legacy_version_file = yes' >> ~/.asdfrc
```
{: .bg-dark .text-light .p-3}

3) Dentro de cada projeto, converta para .tool-versions:

```bash
cd /caminho/do/seu/projeto
if [ -f .ruby-version ]; then asdf local ruby "$(cat .ruby-version)"; fi
```
{: .bg-dark .text-light .p-3}

4) Reinstale a versão de Ruby necessária via asdf e confira:

```bash
asdf install ruby
asdf current ruby
```
{: .bg-dark .text-light .p-3}

5) Reinstale gems quando necessário e regenere shims:

```bash
gem install bundler
bundle install  # quando houver Gemfile
asdf reshim ruby
```
{: .bg-dark .text-light .p-3}

## Configurando o VS Code {#configurando-o-vs-code}
---

Com o Ruby instalado, vamos preparar o VS Code para trabalhar com Ruby.

### Extensões recomendadas {#extensoes-recomendadas}
---

**Extensões essenciais:**
- **Ruby LSP** (Shopify) — fornece recursos de linguagem (diagnósticos, autocompletar, navegação)
- **WSL** (Microsoft) — se estiver no Windows usando WSL

**Extensões opcionais mas úteis:**
- **Ruby Test Explorer** — para rodar testes
- **endwise** — completa automaticamente blocos de código Ruby
- **GitHub Pull Requests and Issues** — integração com GitHub

### Como instalar extensões no VS Code {#como-instalar-extensoes-no-vs-code}
---

**Usando a interface:**
1. Pressione <kbd>Ctrl/Cmd</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd> para abrir a aba de extensões
2. Digite "Ruby LSP" no campo de busca
3. Pressione <kbd>Enter</kbd> e depois <kbd>Tab</kbd> até ouvir o botão "Instalar"
4. Pressione <kbd>Enter</kbd> para instalar

**Usando a paleta de comandos (mais acessível):**
1. Pressione <kbd>Ctrl/Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>
2. Digite "Extensions: Install Extensions"
3. Pressione <kbd>Enter</kbd>
4. Digite "Ruby LSP"
5. Pressione <kbd>Enter</kbd> e procure o botão Instalar com <kbd>Tab</kbd>

### Configurando o VS Code para WSL (Windows) {#configurando-o-vs-code-para-wsl-windows}
---

Se você está no Windows usando WSL:

1. Instale a extensão "WSL" no VS Code
2. Pressione <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>
3. Digite "WSL: Connect to WSL"
4. Pressione <kbd>Enter</kbd>

Agora o VS Code está rodando dentro do ambiente Linux do WSL, e você pode abrir pastas e arquivos do Ubuntu.

### Ajustes úteis no VS Code {#ajustes-uteis-no-vs-code}
---

**Terminal integrado:**
- Abra com <kbd>Ctrl/Cmd</kbd> + <kbd>`</kbd> (crase)
- O terminal vai usar automaticamente o Zsh ou Bash configurado

**Acessibilidade:**
- Nas configurações, procure por "terminal accessible" e habilite a visualização acessível do terminal
- Use <kbd>Ctrl/Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> e digite "Terminal: Focus Accessible Buffer" para revisar a saída do terminal com o leitor de tela

**Formatação:**
- O Ruby LSP já fornece formatação básica
- Para projetos que usam RuboCop (ferramenta de qualidade de código), instale a gem:

```bash
gem install rubocop
```
{: .bg-dark .text-light .p-3}

<!-- Seções de criação de projeto e Gemfile foram removidas para manter este artigo focado apenas na configuração e nos testes do ambiente. -->

## Testando o ambiente {#testando-o-ambiente}
---

Vamos garantir que tudo está funcionando corretamente.

### 1) Verificar versões instaladas {#passo-1-verificar-versoes-instaladas}
---

```bash
asdf current
ruby -v
gem -v
bundle -v
```
{: .bg-dark .text-light .p-3}

Você deve ver:
- A versão do Ruby que instalou
- A versão do gem
- A versão do Bundler

### 2) Executar um comando Ruby (uma linha) {#passo-2-executar-um-comando-ruby-de-uma-linha}
---

Sem criar arquivos, peça para o Ruby imprimir uma mensagem usando a opção <code class="text-white-50 text-light">-e</code> (de "execute"):

```bash
ruby -e 'puts "Olá, Ruby!"'
```
{: .bg-dark .text-light .p-3}

Se der certo, o terminal mostrará:

```text
Olá, Ruby!
```
{: .bg-dark .text-light .p-3}

### 3) Testar a troca de versões (opcional) {#passo-3-testar-a-troca-de-versoes-opcional}
---

Para testar a capacidade do asdf de gerenciar múltiplas versões:

```bash
# Ver versão atual
asdf current ruby

# Instalar outra versão (opcional)
asdf install ruby 3.2.2

# Listar versões instaladas
asdf list ruby

# Trocar para a versão 3.2.2 apenas nesta sessão
asdf shell ruby 3.2.2

# Verificar
ruby -v

# Voltar para a versão global
asdf shell ruby latest
ruby -v
```
{: .bg-dark .text-light .p-3}

### Problemas comuns e soluções {#problemas-comuns-e-solucoes}
---

**"command not found: asdf"**
- O asdf não foi adicionado ao shell. Revise o passo de configuração do shell e execute <code class="text-white-50 text-light">exec zsh</code> ou <code class="text-white-50 text-light">exec bash</code>.

**"ruby: command not found"**
- Você instalou o Ruby mas não definiu uma versão global. Execute: <code class="text-white-50 text-light">asdf global ruby latest</code>

**"Permission denied" ao instalar gems**
- Nunca use <code class="text-white-50 text-light">sudo</code> com asdf. Todas as instalações devem ser no seu usuário.

**VS Code não reconhece o Ruby**
- No Windows/WSL: verifique se conectou ao WSL (extensão WSL instalada e conectada)
- Reinstale a extensão Ruby LSP
- Recarregue o VS Code: <kbd>Ctrl/Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>, digite "Reload Window"

**Compilação do Ruby falha no Ubuntu/WSL**
- Instale mais dependências:

```bash
sudo apt install -y libyaml-dev libreadline-dev libffi-dev libgdbm-dev autoconf bison
```
{: .bg-dark .text-light .p-3}

## Resumo {#resumo}
---

Neste artigo, você configurou um ambiente Ruby moderno e profissional usando o asdf:

**O que foi feito:**
- ✅ Entendeu o que é o asdf e suas vantagens
- ✅ Configurou o WSL no Windows (se aplicável)
- ✅ Instalou o asdf no Ubuntu/WSL ou macOS
- ✅ Instalou o Ruby usando o asdf
- ✅ Configurou o VS Code com extensões para Ruby
- ✅ Testou o ambiente

Isso prepara você para começar a desenvolver aplicações Ruby com um ambiente robusto e flexível! A partir de agora será iniciada a parte de criação de projetos e desenvolvimento prático em Ruby.

É importante deixar explícito que este artigo focou exclusivamente na configuração do ambiente de desenvolvimento em Ruby usando o asdf, sem abordar a criação de projetos ou o uso de Gemfiles. O objetivo foi garantir que você tenha uma base sólida para trabalhar com Ruby antes de avançar para etapas mais complexas de desenvolvimento.

Se ficaram dúvidas, ou se algum passo não funcionou como esperado, sinta-se à vontade para revisar as seções, buscar conteúdos adicionais nas documentações oficiais, como:

- [Documentação do asdf](https://asdf-vm.com/){:target="_blank" rel="noopener noreferrer"}
- [Documentação do WSL](https://docs.microsoft.com/pt-br/windows/wsl/){:target="_blank" rel="noopener noreferrer"}
- [Documentação do Ruby](https://www.ruby-lang.org/pt/documentation/){:target="_blank" rel="noopener noreferrer"}
- [Documentação do VS Code](https://code.visualstudio.com/docs){:target="_blank" rel="noopener noreferrer"}
- [Documentação do Homebrew](https://docs.brew.sh/){:target="_blank" rel="noopener noreferrer"}

O importante é garantir que o ambiente esteja funcionando perfeitamente antes de avançar para a criação de projetos Ruby. Boa sorte e bons códigos!