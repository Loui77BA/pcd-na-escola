---
layout: post
title: "Introdução à Programação: Olá Mundo em Ruby"
description: "Neste artigo, vamos escrever nosso primeiro programa em Ruby."
date: 2025-09-12 10:00:00 -0300
author: Louise Suelen
categories: [Programação]
tags: [programação, tecnologia]
permalink: /introducao-a-programacao-ola-mundo-em-ruby/
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

        <!-- 2. Criando uma pasta para o projeto -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#criando-uma-pasta-para-o-projeto" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">2</span>
                Criando uma pasta para o projeto
            </a>
        </li>

        <!-- 3. Criando o arquivo Ruby -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#criando-o-arquivo-ruby" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">3</span>
                Criando o arquivo Ruby
            </a>
        </li>

        <!-- 4. Escrevendo o código Ruby -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#escrevendo-o-codigo-ruby" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">4</span>
                Escrevendo o código Ruby
            </a>
        </li>

        <!-- 5. Executando o programa Ruby -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#executando-o-programa-ruby" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">5</span>
                Executando o programa Ruby
            </a>
        </li>

        <!-- 6. Resumo -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#resumo" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">6</span>
                Resumo
            </a>
        </li>
    </ul>
---

Neste artigo, iniciando a parte prática da nossa série sobre introdução à programação, vamos escrever nosso primeiro programa em Ruby: o clássico "Olá Mundo" para começar a entender a sintaxe e o funcionamento básico da linguagem.

<div class="text-center">
    <img src="https://augustopontin.com.br/wp-content/uploads/2020/02/hello_world.gif" aria-hidden="true" class="img-fluid">
</div>

## Apresentação {#apresentacao}
---

Dando continuidade à nossa série sobre introdução à programação, neste artigo vamos escrever nosso primeiro programa em Ruby: o clássico "Olá Mundo". Este é um passo fundamental para entender a sintaxe básica da linguagem e como executar um programa simples.

Apesar de ser um programa simples, ele nos ajudará a compreender os conceitos básicos de criação de arquivos, escrita de código e execução de programas em Ruby pelo terminal.

**Dica:** A partir de agora vamos começar a parte prática da nossa série, cada artigo vai introduzir um conceito ou funcionalidade nova, então é importante que você acompanhe cada passo para não se perder. Não julgue o programa pela sua simplicidade, ele é apenas o primeiro passo para entender conceitos mais complexos que virão a seguir.

## Criando uma pasta para o projeto {#criando-uma-pasta-para-o-projeto}
---

O primeiro passo é criar uma pasta, onde iremos salvar nosso arquivo Ruby. É recomendado que na criação dessa pasta não se use na hora de dar nome nenhum espaço ou caractere especial (como acentos, por exemplo), isso porque pode gerar problemas na hora de executar o programa futuramente.

No meu caso, vou criar uma pasta chamada <code class="text-white-50 text-light">projeto-ruby</code>.

Vou fazer isso usando o terminal através do seguinte comando:

```bash
mkdir projeto-ruby
```
{: .bg-dark .text-light .p-3}

Poderia fazer isso pela interface gráfica do sistema operacional? Poderia, mas como estamos aprendendo programação, é interessante que você se familiarize com o terminal e os comandos básicos, pois futuramente você irá usá-los com frequência.

**Dica:** A regra para a criação de nomes de pastas, sem espaços ou caracteres especiais (como acentos), vale também para a criação de arquivos. Isso evita problemas na hora de executar o programa ou enviá-lo para o ambiente de produção, onde será executado de fato. Então sempre que for criar uma pasta ou arquivo e quiser usar mais de uma palavra, utilize o hífen (-) ou o _ (underline) para separar as palavras.

Ok, agora que criamos a pasta, vamos entrar nela com o comando:

```bash
cd projeto-ruby
```
{: .bg-dark .text-light .p-3}

## Criando o arquivo Ruby {#criando-o-arquivo-ruby}
---

Agora dentro da pasta, vamos criar o arquivo Ruby onde escreveremos nosso código. Para isso, usaremos o comando <code class="text-white-50 text-light">touch</code> (que é um comando para criar arquivos ou atualizar a data de acesso e modificação de arquivos caso já exista) seguido do nome do arquivo com a extensão <code class="text-white-50 text-light">.rb</code> (extensão padrão para arquivos Ruby). Vou chamar meu arquivo de <code class="text-white-50 text-light">ola_mundo.rb</code>.

```bash
touch ola_mundo.rb
```
{: .bg-dark .text-light .p-3}

Agora que criamos o arquivo, vamos abri-lo em um editor de texto para escrever nosso código Ruby. Vou abrir o VS Code com o comando:

```bash
code .
```
{: .bg-dark .text-light .p-3}

O comando acima abre o VS Code na pasta atual.

- **code:** Comando para abrir o VS Code.
- **.:** Indica que queremos abrir o VS Code na pasta atual.

Poderíamos abrir o arquivo digitando o nome do arquivo diretamente, como <code class="text-white-50 text-light">code ola_mundo.rb</code>, mas como ainda não escrevemos nada no arquivo, prefiro abrir a pasta inteira para facilitar a navegação.

## Escrevendo o código Ruby {#escrevendo-o-codigo-ruby}
---

Depois de abrir o VS Code na pasta <code class="text-white-50 text-light">projeto-ruby</code>, com o comando <code class="text-white-50 text-light">code .</code>, vamos editar o arquivo <code class="text-white-50 text-light">ola_mundo.rb</code> que criamos anteriormente.

No arquivo vamos escrever o comando abaixo:

```ruby
puts "Olá, Mundo!"
```
{: .bg-dark .text-light .p-3}

O que esse comando faz? ele imprime na tela a mensagem "Olá, Mundo!". O comando <code class="text-white-50 text-light">puts</code> é usado em Ruby para exibir texto no terminal.

A lógica por trás do comando é simples: **comando** + **"** + **parâmetro** (que é o texto a ser exibido na tela aqui nesse caso) + **"**. Ou seja, quando escrevemos:

```ruby
puts "Olá, Mundo!"
```
{: .bg-dark .text-light .p-3}

Estamos dizendo para o programa: "Ei programa, coloca na tela a mensagem **Olá, Mundo!**".

Depois de escrever o código, salve o arquivo (<kbd>Ctrl</kbd> + <kbd>S</kbd> no Windows/Linux ou <kbd>Cmd</kbd> + <kbd>S</kbd> no macOS).

## Executando o programa Ruby {#executando-o-programa-ruby}
---

Agora que escrevemos nosso código Ruby, vamos executá-lo para ver o resultado. Para isso, volte ao terminal (pode ser o terminal integrado do VS Code ou o terminal do seu sistema operacional) e certifique-se de que você está na pasta <code class="text-white-50 text-light">projeto-ruby</code>.

Então, execute o seguinte comando:

```bash
ruby ola_mundo.rb
```
{: .bg-dark .text-light .p-3}

Esse comando diz ao interpretador Ruby para executar o arquivo <code class="text-white-50 text-light">ola_mundo.rb</code>.

Este é o comando mais simples para executar um programa Ruby. Após executar o comando, você verá a saída:

```ruby
Olá, Mundo!
```
{: .bg-dark .text-light .p-3}

Parabéns! Você acabou de escrever e executar seu primeiro programa em Ruby! 

## Resumo {#resumo}
---

Agora você já sabe como criar uma pasta para o projeto, criar um arquivo Ruby, escrever um código simples e executar esse código no terminal. Esses são os primeiros passos fundamentais para começar a programar em Ruby.

Apesar de parecer simples, entender esses conceitos básicos é essencial para avançar no aprendizado de programação. Nos próximos artigos, exploraremos mais conceitos e funcionalidades da linguagem Ruby.