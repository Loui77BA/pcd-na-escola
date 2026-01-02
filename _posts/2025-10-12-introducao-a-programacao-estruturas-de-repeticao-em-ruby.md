---
layout: post
title: "Introdução à Programação: Estruturas de Repetição em Ruby"
description: "Neste artigo, serão exploradas as estruturas de repetição em Ruby, incluindo 'while', 'for' e 'each', com exemplos práticos para facilitar o entendimento."
date: 2025-10-12 10:00:00 -0300
author: Louise Suelen
categories: [Programação]
tags: ["programação", "tecnologia"]
permalink: /introducao-a-programacao-estruturas-de-repeticao-em-ruby/
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

    <!-- 2. Tipos de laços -->
    <li class="list-group-item bg-dark text-white border-0">
      <a href="#tipos-de-lacos-de-repeticao-em-ruby" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
        <span class="badge bg-secondary">2</span>
        Tipos de laços de repetição em Ruby
      </a>
    </li>

    <!-- 3. Laço while -->
    <li class="list-group-item bg-dark text-white border-0">
      <a href="#laco-while" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
        <span class="badge bg-secondary">3</span>
        Laço while
      </a>
      <ul class="list-group bg-dark">
        <li class="list-group-item bg-dark text-white border-0">
          <a href="#sintaxe-do-laco-while" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
            <span class="badge bg-secondary">3.1</span>
            Sintaxe do laço while
          </a>
        </li>
        <li class="list-group-item bg-dark text-white border-0">
          <a href="#cuidado-ao-usar-menor-e-menor-ou-igual" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
            <span class="badge bg-secondary">3.2</span>
            Cuidado ao usar &lt; e &lt;=
          </a>
        </li>
        <li class="list-group-item bg-dark text-white border-0">
          <a href="#executar-pelo-menos-uma-vez-com-begin-end-while" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
            <span class="badge bg-secondary">3.3</span>
            Executar pelo menos uma vez com begin...end while
          </a>
        </li>
      </ul>
    </li>

    <!-- 4. Laço until -->
    <li class="list-group-item bg-dark text-white border-0">
      <a href="#laco-until" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
        <span class="badge bg-secondary">4</span>
        Laço until
      </a>
      <ul class="list-group bg-dark">
        <li class="list-group-item bg-dark text-white border-0">
          <a href="#sintaxe-do-laco-until" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
            <span class="badge bg-secondary">4.1</span>
            Sintaxe do laço until
          </a>
        </li>
        <li class="list-group-item bg-dark text-white border-0">
          <a href="#exemplos-com-until" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
            <span class="badge bg-secondary">4.2</span>
            Exemplos com until
          </a>
        </li>
      </ul>
    </li>

    <!-- 5. Dica sobre while e until -->
    <li class="list-group-item bg-dark text-white border-0">
      <a href="#dica-sobre-while-e-until" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
        <span class="badge bg-secondary">5</span>
        Dica sobre while e until
      </a>
    </li>

    <!-- 6. Laço for -->
    <li class="list-group-item bg-dark text-white border-0">
      <a href="#laco-for" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
        <span class="badge bg-secondary">6</span>
        Laço for
      </a>
      <ul class="list-group bg-dark">
        <li class="list-group-item bg-dark text-white border-0">
          <a href="#sintaxe-do-laco-for" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
            <span class="badge bg-secondary">6.1</span>
            Sintaxe do laço for
          </a>
        </li>
        <li class="list-group-item bg-dark text-white border-0">
          <a href="#usando-for-com-arrays-diretamente" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
            <span class="badge bg-secondary">6.2</span>
            Usando for com arrays diretamente
          </a>
        </li>
        <li class="list-group-item bg-dark text-white border-0">
          <a href="#usando-for-com-ranges" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
            <span class="badge bg-secondary">6.3</span>
            Usando for com ranges
          </a>
        </li>
        <li class="list-group-item bg-dark text-white border-0">
          <a href="#diferenca-entre-dois-pontos-e-tres-pontos" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
            <span class="badge bg-secondary">6.4</span>
            Diferença entre dois pontos (..) e três pontos (...)
          </a>
        </li>
      </ul>
    </li>

    <!-- 7. Laço each -->
    <li class="list-group-item bg-dark text-white border-0">
      <a href="#laco-each" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
        <span class="badge bg-secondary">7</span>
        Laço each
      </a>
      <ul class="list-group bg-dark">
        <li class="list-group-item bg-dark text-white border-0">
          <a href="#sintaxe-do-laco-each" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
            <span class="badge bg-secondary">7.1</span>
            Sintaxe do laço each
          </a>
        </li>
        <li class="list-group-item bg-dark text-white border-0">
          <a href="#sintaxe-de-uma-linha" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
            <span class="badge bg-secondary">7.2</span>
            Sintaxe de uma linha (Blocos Inline)
          </a>
        </li>
        <li class="list-group-item bg-dark text-white border-0">
          <a href="#usando-each-com-hashes" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
            <span class="badge bg-secondary">7.3</span>
            Usando each com Hashes
          </a>
        </li>
        <li class="list-group-item bg-dark text-white border-0">
          <a href="#e-se-eu-precisar-do-indice" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
            <span class="badge bg-secondary">7.4</span>
            E se eu precisar do índice? (each_with_index)
          </a>
        </li>
      </ul>
    </li>

    <!-- 8. Laço times -->
    <li class="list-group-item bg-dark text-white border-0">
      <a href="#laco-times" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
        <span class="badge bg-secondary">8</span>
        Laço times
      </a>
      <ul class="list-group bg-dark">
        <li class="list-group-item bg-dark text-white border-0">
          <a href="#sintaxe-do-laco-times" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
            <span class="badge bg-secondary">8.1</span>
            Sintaxe do laço times
          </a>
        </li>
      </ul>
    </li>

    <!-- 9. Laços em uma frase -->
    <li class="list-group-item bg-dark text-white border-0">
      <a href="#lacos-de-repeticao-em-uma-frase" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
        <span class="badge bg-secondary">9</span>
        Laços de repetição em uma frase
      </a>
    </li>

    <!-- 10. Refazendo exercícios -->
    <li class="list-group-item bg-dark text-white border-0">
      <a href="#refazendo-exercicios-de-artigos-anteriores" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
        <span class="badge bg-secondary">10</span>
        Refazendo exercícios de artigos anteriores
      </a>
      <ul class="list-group bg-dark">
        <li class="list-group-item bg-dark text-white border-0">
          <a href="#otimizando-o-menu-de-pagamento" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
            <span class="badge bg-secondary">10.1</span>
            Otimizando o menu de pagamento
          </a>
        </li>
        <li class="list-group-item bg-dark text-white border-0">
          <a href="#validando-dados-do-emprestimo" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
            <span class="badge bg-secondary">10.2</span>
            Validando dados do empréstimo
          </a>
        </li>
        <li class="list-group-item bg-dark text-white border-0">
          <a href="#ordenando-numeros-dinamicamente" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
            <span class="badge bg-secondary">10.3</span>
            Ordenando números dinamicamente
          </a>
        </li>
        <li class="list-group-item bg-dark text-white border-0">
          <a href="#media-escolar" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
            <span class="badge bg-secondary">10.4</span>
            Média Escolar
          </a>
        </li>
      </ul>
    </li>

    <!-- 11. Resumo -->
    <li class="list-group-item bg-dark text-white border-0">
      <a href="#resumo" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
        <span class="badge bg-secondary">11</span>
        Resumo
      </a>
    </li>
  </ul>

---


Neste artigo, serão exploradas as estruturas de repetição em Ruby, incluindo <code class="text-white-50 text-light">while</code>, <code class="text-white-50 text-light">for</code> e <code class="text-white-50 text-light">each</code>, com exemplos práticos para facilitar o entendimento.

<div class="text-center">
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/72672341-de1e-43f7-f4d9-f92e5f53c200/public" aria-hidden="true" class="img-fluid border" />
</div>

## Apresentação {#apresentacao}
---

A partir de agora os programas que estão sendo desenvolvidos ganharão novas capacidades. Vamos pensar na pergunta: Como fazer um programa executar uma tarefa várias vezes sem precisar escrever o mesmo código várias vezes?

A resposta para essa pergunta está nas estruturas de repetição, elas servem para executar um mesmo trecho de código várias vezes, até que uma condição seja atendida (ou enquanto essa condição for verdadeira ou falsa, dependendo do tipo de estrutura usada).

Em outras palavras, você pode repetir o mesmo trecho de código quantas vezes forem necessárias, sem precisar escrever o código repetidamente. Para isso você cria uma estrutura de repetição que vai controlar quantas vezes o código será executado. Esse controle vai depender se a condição definida na estrutura de repetição for atendida ou não.

Enquanto a condição não for atendida, seja ela verdadeira ou falsa, o código dentro da estrutura de repetição continuará sendo executado por várias vezes automaticamente. 

Imagine que você precisa lavar 50 pratos. Você não escreveria um manual de instruções dizendo:

- Lave o prato 1
- lave o prato 2
- lave o prato 3...

Assim vai até o prato 50. Isso seria muito cansativo e improdutivo (improdutivo é o mesmo que não produzir nada, ou seja, perder tempo).

Se você tivesse uma estrutura de repetição, você poderia dizer algo como:

- Enquanto houver pratos sujos, lave o próximo prato.
- Para cada prato sujo, lave o prato.

Estruturas de repetição são apenas formas de dizer ao computador: "Não pare ainda, continue trabalhando até que tal coisa aconteça".

**Observação**: As estruturas de repetição também são chamadas de laços de repetição ou loops, com frequência até maior do que o termo estruturas de repetição. Então, se encontrar esses termos, saiba que eles significam a mesma coisa.

## Tipos de laços de repetição em Ruby {#tipos-de-lacos-de-repeticao-em-ruby}
---

No Ruby, existem dois tipos principais de laços: 

- Os que se repetem enquanto uma condição for verdadeira ou falsa.
- Os que se repetem para cada item de uma coleção (como um array ou um hash).

<figure class="text-center">
    <figcaption>Tipos de laços de repetição em Ruby</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/d609c24d-19d0-4b93-c7bf-b5a5c8ac2e00/public" aria-hidden="true" class="img-fluid border" />
    <figcaption class="visually-hidden">
    A imagem é uma ilustração em estilo de lousa, dividida em duas partes, que compara dois tipos de estruturas de repetição na programação. Na parte esquerda, com o título "REPETE ENQUANTO CONDIÇÃO (VERDADEIRA/FALSA)", uma esteira rolante transporta caixas de papelão com a palavra "AÇÃO" escrita nelas. Ao lado da esteira, uma mão robótica mantém um interruptor na posição "ON", o que mantém uma lâmpada acesa. Isso ilustra um laço de repetição, que executa uma ação repetidamente enquanto uma condição é verdadeira.
    </figcaption>
    <figcaption class="visually-hidden">
    Na parte direita, com o título "REPETE PARA CADA ITEM DA COLEÇÃO", outro braço robótico pega frutas de uma caixa de madeira rotulada como "COLEÇÃO" e as coloca em uma esteira que as leva para uma máquina para serem processadas. Isso ilustra um laço de repetição, que executa uma ação para cada item em uma coleção seja essa coleção um array ou um hash.
    </figcaption>
</figure>

Explicando melhor cada um desses tipos de laços:

1. **Laços que se repetem enquanto uma condição for verdadeira ou falsa**: Esses laços fazem o mesmo comando várias vezes, desde que uma regra seja seguida. Por exemplo, dá para pedir ao usuário um número e só parar quando ele colocar um número correto.
    - **Exemplos desses laços são**: <code class="text-white-50 text-light">while</code> e <code class="text-white-50 text-light">until</code>.

2. **Laços que se repetem para cada item de uma coleção**: Esses laços passam por todos os elementos de um grupo, como uma lista ou tabela, e fazem uma tarefa para cada um. Por exemplo, você pode usar um laço para mostrar cada nome de uma lista de nomes.
    - **Exemplos desses laços são**: <code class="text-white-50 text-light">for</code> e <code class="text-white-50 text-light">each</code>.

## Laço while {#laco-while}
---

O laço <code class="text-white-50 text-light">while</code> é o laço mais intuitivo. Ele funciona com base em uma condição verdadeira. Enquanto a condição for verdadeira, o código dentro do laço será executado repetidamente.

### Sintaxe do laço while {#sintaxe-do-laco-while}
---

A sintaxe básica do laço <code class="text-white-50 text-light">while</code> é a seguinte:

```ruby
i = 0

while i < 5
  puts i+1
  i += 1
end
```
{: .bg-dark .text-light .p-3}

O que estamos fazendo aqui é:

<code class="text-white-50 text-light">i = 0</code>

Cria uma variável chamada <code class="text-white-50 text-light">i</code> e atribui o valor 0 a ela. Em programação, é muito comum usar a variável <code class="text-white-50 text-light">i</code> para contar quantas vezes um laço foi executado.

O nome da variável <code class="text-white-50 text-light">i</code> vem de "index" (índice, em inglês) ou "iterador" (que é algo que itera, ou seja, que repete uma ação várias vezes). A variável <code class="text-white-50 text-light">i</code> será usada para controlar quantas vezes o laço será executado.

<code class="text-white-50 text-light">while i &lt; 5</code>

Inicia a estrutura de repetição. O computador vai fazer a pergunta: "O valor de i é menor que 5?" por várias vezes. Enquanto a resposta for "sim" (ou seja, enquanto a condição for verdadeira), o código dentro do laço será executado.

Como <code class="text-white-50 text-light">i</code> foi inicializado com 0, a condição <code class="text-white-50 text-light">i &lt; 5</code> é verdadeira, então o código dentro do laço será executado pela primeira vez.

<code class="text-white-50 text-light">puts i+1</code>

Exibe o valor de <code class="text-white-50 text-light">i + 1</code> na tela. Na primeira vez que o laço é executado, <code class="text-white-50 text-light">i</code> é 0, então o que será exibido é 1.

Em computação, a contagem começa do 0. Por isso, se colocar apenas <code class="text-white-50 text-light">puts i</code>, a saída será:

0

1

2

3

4

Que são cinco números, mas começam do 0.

Mas, na contagem humana, a maioria das pessoas começa a contar do 1. Por isso, somamos 1 ao valor de <code class="text-white-50 text-light">i</code> para exibir os números de 1 a 5.

Ao fazer <code class="text-white-50 text-light">puts i+1</code>, você não altera o valor da variável <code class="text-white-50 text-light">i</code> na memória, você apenas exibe o valor dela somado a 1.

Quando <code class="text-white-50 text-light">i</code> é 0, imprime 1.

Quando <code class="text-white-50 text-light">i</code> é 4, imprime 5.

<code class="text-white-50 text-light">i += 1</code>

Essa linha é responsável por aumentar o valor da variável <code class="text-white-50 text-light">i</code> em 1 a cada vez que o laço é executado. É uma forma abreviada de escrever <code class="text-white-50 text-light">i = i + 1</code>.

A linha atualiza a variável de controle para avançar o laço. É uma linha muito importante, a mais importante, para evitar que o programa trave e que o laço entre no que é conhecido como "loop infinito". O loop infinito acontece quando a condição do laço nunca se torna falsa, fazendo com que o laço continue executando para sempre.

Se o valor de <code class="text-white-50 text-light">i</code> não for aumentado, ele continuará valendo 0 para sempre. Quando o código voltar para a linha <code class="text-white-50 text-light">while i &lt; 5</code>, a pergunta "O valor de i é menor que 5?" continuará sendo respondida com "sim", e o laço nunca terminará. O programa ficaria preso nesse laço para sempre, travando o computador.

Ao fazer <code class="text-white-50 text-light">i += 1</code> (ou <code class="text-white-50 text-light">i = i + 1</code>), o valor de <code class="text-white-50 text-light">i</code> aumenta a cada vez que o laço é executado. Quando for executado a primeira vez, <code class="text-white-50 text-light">i</code> será 1. Na segunda vez, <code class="text-white-50 text-light">i</code> será 2, na terceira vez, <code class="text-white-50 text-light">i</code> será 3, na quarta vez, <code class="text-white-50 text-light">i</code> será 4, e na quinta vez, <code class="text-white-50 text-light">i</code> será 5.

Então quando o código voltar para a linha <code class="text-white-50 text-light">while i &lt; 5</code> pela sexta vez, a pergunta "O valor de i é menor que 5?" será respondida com "não", e o laço terminará.

<code class="text-white-50 text-light">end</code>

Finaliza o laço <code class="text-white-50 text-light">while</code>. Tudo que estiver entre <code class="text-white-50 text-light">while</code> e <code class="text-white-50 text-light">end</code> faz parte do laço e será executado repetidamente enquanto a condição for verdadeira.

### Cuidado ao usar &lt; e &lt;= {#cuidado-ao-usar-menor-e-menor-ou-igual}
---

Em programação, é importante entender a diferença entre os operadores <code class="text-white-50 text-light">&lt;</code> (menor que) e <code class="text-white-50 text-light">&lt;=</code> (menor ou igual a).

Isso é ainda mais importante na hora de escrever as condições dos laços de repetição, para evitar erros que podem fazer o programa não funcionar como esperado.

Por exemplo, considere o seguinte código:

```ruby
i = 0

while i <= 5
  puts i
  i += 1
end
```
{: .bg-dark .text-light .p-3}

Nesse caso, o laço <code class="text-white-50 text-light">while</code> continuará executando enquanto <code class="text-white-50 text-light">i</code> for menor ou igual a 5. Isso significa que o laço será executado quando <code class="text-white-50 text-light">i</code> for 0, 1, 2, 3, 4 e também quando for 5 dando um total de 6 execuções.

Se você quiser que o laço execute apenas 5 vezes, deve usar o operador <code class="text-white-50 text-light">&lt;</code> (menor que) em vez de <code class="text-white-50 text-light">&lt;=</code> (menor ou igual a).

Essa diferença pode parecer pequena, mas é muito, muito importante para garantir que o programa funcione corretamente.

### Executar pelo menos uma vez com begin...end while {#executar-pelo-menos-uma-vez-com-begin-end-while}
---

Existem situações em que você quer que o código dentro do laço seja executado pelo menos uma vez, mesmo que a condição inicial seja falsa. Para isso, você pode usar a estrutura <code class="text-white-50 text-light">begin...end while</code>.

Por exemplo, vamos criar um menu simples que será exibido pelo menos uma vez, e continuará sendo exibido enquanto o usuário não escolher a opção de sair:

```ruby
opcao = ""

begin
  puts "Menu:"
  puts "1. Opção 1"
  puts "2. Opção 2"
  puts "3. Sair"
  opcao = gets.chomp
end while opcao != "3"
```
{: .bg-dark .text-light .p-3}

Aqui, o menu será exibido pelo menos uma vez, e continuará sendo exibido enquanto a pessoa não digitar "3" para sair.

## Laço until {#laco-until}
---

O laço <code class="text-white-50 text-light">until</code> é o oposto do laço <code class="text-white-50 text-light">while</code>. Ele executa o código dentro do laço enquanto a condição for falsa. Quando a condição se torna verdadeira, o laço termina.

### Sintaxe do laço until {#sintaxe-do-laco-until}
---

A sintaxe básica do laço <code class="text-white-50 text-light">until</code> é a seguinte:

```ruby
bateria = 0

# Tradução: ATÉ QUE a bateria seja 100...
until bateria == 100 do
  puts "Carregando... #{bateria}%"
  bateria += 10
end

puts "Carga completa! Bateria em #{bateria}%"
```
{: .bg-dark .text-light .p-3}

O que estamos fazendo aqui é:

<code class="text-white-50 text-light">bateria = 0</code>

Cria uma variável chamada <code class="text-white-50 text-light">bateria</code> e atribui o valor 0 a ela. Essa variável será usada para simular o nível de carga da bateria.

<code class="text-white-50 text-light">until bateria == 100 do</code>

Inicia a estrutura de repetição. O computador vai fazer a pergunta: "O valor de bateria é igual a 100?" por várias vezes. Enquanto a resposta for "não" (ou seja, enquanto a condição for falsa), o código dentro do laço será executado.

Como <code class="text-white-50 text-light">bateria</code> foi inicializado com 0, a condição <code class="text-white-50 text-light">bateria == 100</code> é falsa, então o código dentro do laço será executado pela primeira vez.

<code class="text-white-50 text-light">puts "Carregando... #{bateria}%"</code>

Exibe o nível atual de carga da bateria na tela. Na primeira vez que o laço é executado, <code class="text-white-50 text-light">bateria</code> é 0, então o que será exibido é "Carregando... 0%".

<code class="text-white-50 text-light">bateria += 10</code>

Essa linha é responsável por aumentar o valor da variável <code class="text-white-50 text-light">bateria</code> em 10 a cada vez que o laço é executado. É uma forma abreviada de escrever <code class="text-white-50 text-light">bateria = bateria + 10</code>.

Ao fazer <code class="text-white-50 text-light">bateria += 10</code> (ou <code class="text-white-50 text-light">bateria = bateria + 10</code>), o valor de <code class="text-white-50 text-light">bateria</code> aumenta a cada vez que o laço é executado. Quando for executado a primeira vez, <code class="text-white-50 text-light">bateria</code> será 10. Na segunda vez, <code class="text-white-50 text-light">bateria</code> será 20, na terceira vez, <code class="text-white-50 text-light">bateria</code> será 30, na quarta vez, <code class="text-white-50 text-light">bateria</code> será 40, e assim por diante, até chegar a 100.

<code class="text-white-50 text-light">end</code>

Finaliza o laço <code class="text-white-50 text-light">until</code>. Tudo que estiver entre <code class="text-white-50 text-light">until</code> e <code class="text-white-50 text-light">end</code> faz parte do laço e será executado repetidamente enquanto a condição for falsa.

<code class="text-white-50 text-light">puts "Carga completa! Bateria em #{bateria}%"</code>

Exibe uma mensagem indicando que a carga da bateria está completa, mostrando o valor final da variável <code class="text-white-50 text-light">bateria</code>, que será 100 quando o laço terminar.

### Exemplos com until {#exemplos-com-until}
---

Observe os seguintes códigos que utilizam o laço <code class="text-white-50 text-light">until</code>:

```ruby
i = 0

until i == 3
  puts i+1
  i += 1
end
```
{: .bg-dark .text-light .p-3}

<br/>

```ruby
i = 0

until i <= 3
  puts i+1
  i += 1
end
```
{: .bg-dark .text-light .p-3}

<br/>

```ruby
i = 0

until i < 3
  puts i+1
  i += 1
end
```
{: .bg-dark .text-light .p-3}

O que vai acontecer em cada um desses códigos? Vamos analisar cada um deles:

1. Em <code class="text-white-50 text-light">until i == 3</code>, o laço continuará executando enquanto <code class="text-white-50 text-light">i</code> não for igual a 3 (ou seja, enquanto a condição for falsa). Portanto, ele imprimirá os números 1, 2 e 3 na tela por causa do <code class="text-white-50 text-light">puts i+1</code>.

2. Em <code class="text-white-50 text-light">until i <= 3</code>, nada será mostrado na tela. Isso porque a condição <code class="text-white-50 text-light">i <= 3</code> já é verdadeira desde o início (pois <code class="text-white-50 text-light">i</code> começa em 0 e 0 é menor que 3). Como a condição já começou verdadeira e o laço <code class="text-white-50 text-light">until</code> só executa enquanto a condição for falsa, o código dentro do laço nunca será executado.

3. O mesmo vai acontecer em <code class="text-white-50 text-light">until i < 3</code>. A condição <code class="text-white-50 text-light">i &lt; 3</code> já é verdadeira desde o início (pois <code class="text-white-50 text-light">i</code> começa em 0 e 0 é menor que 3). Portanto, o código dentro do laço nunca será executado, e nada será mostrado na tela.

## Dica sobre while e until {#dica-sobre-while-e-until}
---

Use o laço <code class="text-white-50 text-light">while</code> quando quiser que o código seja executado enquanto uma condição for verdadeira até que ela se torne falsa.

Já o laço <code class="text-white-50 text-light">until</code> deve ser usado quando quiser que o código seja executado enquanto uma condição for falsa até que ela se torne verdadeira.

Para qualquer laço, não apenas <code class="text-white-50 text-light">while</code> e <code class="text-white-50 text-light">until</code>, o mais importante é ter certeza que a condição que você criou para o laço vai mudar em algum momento, para evitar que o laço entre em um loop infinito. Sempre atualize a variável de controle dentro do laço para garantir que a condição será eventualmente atendida e o laço terminará.

Sempre respeite a lógica do seu programa na hora de definir as condições dos laços. Por exemplo, na hora de definir seus operadores lógicos (<code class="text-white-50 text-light">&lt;</code>, <code class="text-white-50 text-light">&lt;=</code>, <code class="text-white-50 text-light">==</code>, etc.), escolha o operador que faz sentido para o que você quer alcançar com o laço.

## Laço for {#laco-for}
---

O laço <code class="text-white-50 text-light">for</code> serve para passar por todos os itens de uma coleção (lista) de elementos, como um array ou range (intervalo de números). Para cada item dessa coleção (lista), o código que está dentro do laço é executado.

### Sintaxe do laço for {#sintaxe-do-laco-for}
---

A sintaxe básica do laço <code class="text-white-50 text-light">for</code> é a seguinte:

```ruby
idades = [10, 22, 35, 46, 57]
nomes = ["Ana", "Bruno", "Carla", "Daniel", "Eva"]
i = 0

for i in 0..4
  puts "#{i+1}ª execução do laço for."
  puts "#{nomes[i]} tem #{idades[i]} anos."
end
```
{: .bg-dark .text-light .p-3}

O que estamos fazendo aqui é um exemplo clássico de iteração (repetição) sobre dois arrays (listas) ao mesmo tempo, usando o laço <code class="text-white-50 text-light">for</code>.

Primeiro <code class="text-white-50 text-light">idades = [10, 22, 35, 46, 57]</code> cria um array chamado <code class="text-white-50 text-light">idades</code> que contém cinco números representando idades.

Depois <code class="text-white-50 text-light">nomes = ["Ana", "Bruno", "Carla", "Daniel", "Eva"]</code> cria outro array chamado <code class="text-white-50 text-light">nomes</code> que contém cinco strings representando nomes.

Imagine esses dois arrays como duas listas paralelas, duas colunas em uma tabela do Excel, onde o primeiro nome corresponde à primeira idade, o segundo nome à segunda idade, e assim por diante.

As colunas estão alinhadas, ou seja, a informação que está na primeira posição de um array corresponde à informação que está na primeira posição do outro array. Como em uma tabela:

<div class="table-responsive">
<table class="table table-bordered table-striped table-hover table-dark text-white border-secondary" role="table" aria-label="Tabela de nomes e idades">
<caption class="visually-hidden">Tabela que associa os nomes às idades dos arrays.</caption>
  <thead class="table-dark">
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">Idade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">Ana</td>
      <td scope="row">10</td>
    </tr>
    <tr>
      <td scope="row">Bruno</td>
      <td scope="row">22</td>
    </tr>
    <tr>
      <td scope="row">Carla</td>
      <td scope="row">35</td>
    </tr>
    <tr>
      <td scope="row">Daniel</td>
      <td scope="row">46</td>
    </tr>
    <tr>
      <td scope="row">Eva</td>
      <td scope="row">57</td>
    </tr>
  </tbody>
</table>
</div>

Então o laço <code class="text-white-50 text-light">for i in 0..4</code> inicia a estrutura de repetição. 

<code class="text-white-50 text-light">for i in 0..4</code>

É como dizer ao computador:

"Para a nossa variável contadora <code class="text-white-50 text-light">i</code> (que é como nosso dedo nossa maneira de apontar) repita os comandos do código abaixo começando com <code class="text-white-50 text-light">i = 0</code> e terminando com <code class="text-white-50 text-light">i = 4</code>. A cada vez que o laço for executado o <code class="text-white-50 text-light">i</code> deve mudar de valor e o código do laço deve ser executado de novo."

O que o computador entende é:

"Vou executar o código a seguir 5 vezes. Na primeira vez, o <code class="text-white-50 text-light">i</code> vale 0. Na segunda vez o <code class="text-white-50 text-light">i</code>, vale 1. Na terceira vez o <code class="text-white-50 text-light">i</code> vale 2. Na quarta vez o <code class="text-white-50 text-light">i</code> vale 3. Na quinta e última vez o <code class="text-white-50 text-light">i</code> vale 4."

Então dentro do laço de repetição, temos dois comandos puts. O primeiro comando:

<code class="text-white-50 text-light">puts "#{i+1}ª execução do laço for."</code>

Exibe na tela a mensagem indicando qual é a execução atual do laço, somando 1 ao valor de <code class="text-white-50 text-light">i</code> para começar a contagem do 1.

Quando o <code class="text-white-50 text-light">i</code> for 0, exibirá "1ª execução do laço for."

Quando o <code class="text-white-50 text-light">i</code> for 1, exibirá "2ª execução do laço for."

E assim por diante, até a 5ª execução. Isso é apenas para ficar bonito na tela, não altera os dados das listas.

Já o segundo comando:

<code class="text-white-50 text-light">puts "#{nomes[i]} tem #{idades[i]} anos."</code>

Exibe na tela o nome e a idade correspondentes, usando o valor de <code class="text-white-50 text-light">i</code> para acessar os elementos corretos em cada array.

Por exemplo, quando <code class="text-white-50 text-light">i</code> for 0, ele acessa <code class="text-white-50 text-light">nomes[0]</code> (que é "Ana") e <code class="text-white-50 text-light">idades[0]</code> (que é 10), exibindo "Ana tem 10 anos."

A simulação completa desse laço <code class="text-white-50 text-light">for</code> resultará no seguinte:

<div class="table-responsive">
<table class="table table-bordered table-striped table-hover table-dark text-white border-secondary" role="table" aria-label="Tabela de saídas do laço for">
<caption class="visually-hidden">Tabela que mostra as saídas do laço for para cada valor de i.</caption>
  <thead class="table-dark">
    <tr>
      <th scope="col">Número de execução do laço</th>
      <th scope="col">Cálculo</th>
      <th scope="col">Saída exibida</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">1ª execução (i = 0)</td>
      <td scope="row">Cálculo: i+1 vira 1. Acesso: nomes[0] é Ana, idades[0] é 10.</td>
      <td scope="row">1ª execução do laço for. Ana tem 10 anos.</td>
    </tr>
    <tr>
      <td scope="row">2ª execução (i = 1)</td>
      <td scope="row">Cálculo: i+1 vira 2. Acesso: nomes[1] é Bruno, idades[1] é 22.</td>
      <td scope="row">2ª execução do laço for. Bruno tem 22 anos.</td>
    </tr>
    <tr>
      <td scope="row">3ª execução (i = 2)</td>
      <td scope="row">Cálculo: i+1 vira 3. Acesso: nomes[2] é Carla, idades[2] é 35.</td>
      <td scope="row">3ª execução do laço for. Carla tem 35 anos.</td>
    </tr>
    <tr>
      <td scope="row">4ª execução (i = 3)</td>
      <td scope="row">Cálculo: i+1 vira 4. Acesso: nomes[3] é Daniel, idades[3] é 46.</td>
      <td scope="row">4ª execução do laço for. Daniel tem 46 anos.</td>
    </tr>
    <tr>
      <td scope="row">5ª execução (i = 4)</td>
      <td scope="row">Cálculo: i+1 vira 5. Acesso: nomes[4] é Eva, idades[4] é 57.</td>
      <td scope="row">5ª execução do laço for. Eva tem 57 anos.</td>
    </tr>
  </tbody>
</table>
</div>

### Usando for com arrays diretamente {#usando-for-com-arrays-diretamente}
---

Se você não precisar conectar dois arrays (listas) diferentes, pode usar o laço <code class="text-white-50 text-light">for</code> diretamente com um array.

Veja o exemplo abaixo:

```ruby
idades = [10, 22, 35, 46, 57]

# para cada idade na lista de idades faça:
for idade in idades
  puts "Idade: #{idade} anos."
end
```
{: .bg-dark .text-light .p-3}

Aqui, você não se preocupa em saber "onde" o item está (posição 0, 1, 2...), você só quer saber "o que" é o item.

Neste caso, a leitura do código é muito natural: "Para cada valor que estiver dentro da lista <code class="text-white-50 text-light">idades</code>, chame esse valor temporariamente de <code class="text-white-50 text-light">idade</code> e execute o código".

A variável <code class="text-white-50 text-light">idade</code> (no singular) é criada automaticamente pelo laço. Ela serve como uma "gaveta temporária" que guarda um valor diferente a cada volta do laço.

**Comparando com uma playlist de música:**

*   **Usando índice (i) como foi feito antes:** É como dizer "Toque a música da faixa 1", depois "Toque a música da faixa 2". Você precisa saber o número da faixa para escolher a música.
*   **Usando o array diretamente (este exemplo):** É como apertar o botão "Próxima". Você não precisa saber qual é o número da faixa, apenas ouve a música que está tocando agora e passa para a seguinte automaticamente.

### Usando for com ranges {#usando-for-com-ranges}
---

O <code class="text-white-50 text-light">Range</code> (intervalo) é um tipo de dado no Ruby que representa uma sequência de valores, geralmente números. É muito útil quando você quer repetir alguma coisa um número específico de vezes, mas não tem uma lista pronta.

A sintaxe é muito simples: você coloca o valor inicial, dois pontos (<code class="text-white-50 text-light">..</code>) e o valor final.

Observe o exemplo:

```ruby
# Vai contar de 1 até 5
for numero in 1..5
  puts "Contando: #{numero}"
end
```
{: .bg-dark .text-light .p-3}

A saída será:

Contando: 1

Contando: 2

Contando: 3

Contando: 4

Contando: 5

### Diferença entre dois pontos (..) e três pontos (...) {#diferenca-entre-dois-pontos-e-tres-pontos}
---

Existe um detalhe importante nos intervalos do Ruby:

*   <code class="text-white-50 text-light">1..5</code> **(dois pontos):** Inclui o último número. Vai de 1 até 5 (1, 2, 3, 4, 5).
*   <code class="text-white-50 text-light">1...5</code> **(três pontos):** Exclui o último número. Vai de 1 até quase 5 (1, 2, 3, 4).

Exemplo com três pontos:

```ruby
# Vai contar de 1 até 4 (o 5 fica de fora)
for numero in 1...5
  puts "Contando: #{numero}"
end
```
{: .bg-dark .text-light .p-3}

A saída será:

Contando: 1

Contando: 2

Contando: 3

Contando: 4

Isso é útil quando você quer evitar ultrapassar um limite específico.

## Laço each {#laco-each}
---

O laço <code class="text-white-50 text-light">each</code> é a forma mais utilizada e "rubista" de fazer repetições em coleções. Enquanto o <code class="text-white-50 text-light">for</code> é comum em muitas linguagens de programação (como C, Java, Python), o <code class="text-white-50 text-light">each</code> é mais específico do Ruby e é preferido pela comunidade Ruby por ser mais elegante (para a comunidade Ruby, "elegante" significa "bonito e eficiente").

A palavra "each" significa "cada". A leitura é: "Para cada item da coleção, faça isso".


A estrutura <code class="text-white-50 text-light">each</code> é diferente do <code class="text-white-50 text-light">for</code>. Aqui, o laço é um método que pertence as coleções (“array”, “range”, “hash”). 

Devemos lembrar do que já foi dito em outros artigos: **método = ação de um objeto.**

Ou seja, o <code class="text-white-50 text-light">each</code> é uma ação dos arrays (listas), ranges (intervalos) e hashes (tabelas) que faz o seguinte: "Para cada item da coleção, execute o código que está dentro do bloco."

No caso do <code class="text-white-50 text-light">for</code>, o laço é uma estrutura de controle da linguagem Ruby. As coleções estão lá paradas e o laço <code class="text-white-50 text-light">for</code> passa por elas executando o código dentro do laço para cada item da coleção.

No caso do <code class="text-white-50 text-light">each</code>, as coleções (arrays, ranges, hashes) têm o método <code class="text-white-50 text-light">each</code> que faz o trabalho de passar por cada item da coleção e executar o código dentro do bloco. Ou seja, é a própria coleção (que é um objeto) que executa a ação de iterar (repetir) o código para cada um dos seus itens.

- **for**: Estrutura de controle da linguagem Ruby que itera sobre coleções.

- **each**: Método dos objetos coleção (arrays, ranges, hashes) que itera sobre seus próprios itens.

### Sintaxe do laço each {#sintaxe-do-laco-each}
---

```ruby
nomes = ["Ana", "Bruno", "Carla"]

nomes.each do |nome|
  puts "Olá, #{nome}!"
end
```
{: .bg-dark .text-light .p-3}

Vamos entender as partes dessa estrutura:

1. <code class="text-white-50 text-light">nomes.each</code>: Você pega a lista (<code class="text-white-50 text-light">nomes</code>) e chama o método <code class="text-white-50 text-light">.each</code> (ponto each). É como dar uma ordem para a lista: "Lista, para cada item seu, faça..."

2. <code class="text-white-50 text-light">do ... end</code>: Isso define um **bloco** de código. Tudo que estiver entre o <code class="text-white-50 text-light">do</code> e o <code class="text-white-50 text-light">end</code> será executado para cada item.

3. <code class="text-white-50 text-light">|nome|</code>: As barras verticais (pipes) funcionam como a "gaveta temporária". O Ruby pega o item atual da lista e o coloca dentro da variável que você escreveu entre as barras. Você pode dar qualquer nome para essa variável (como <code class="text-white-50 text-light">|pessoa|</code>, <code class="text-white-50 text-light">|item|</code>, <code class="text-white-50 text-light">|x|</code>).

4. <code class="text-white-50 text-light">puts "Olá, #{nome}!"</code>: Esse é o código que será executado para cada item. Aqui, ele exibe uma saudação personalizada usando o nome atual da lista.

A saída desse código será:

Olá, Ana!

Olá, Bruno!

Olá, Carla!

### Sintaxe de uma linha (Blocos Inline) {#sintaxe-de-uma-linha}
---

Uma das características mais amadas do Ruby é a capacidade de escrever códigos concisos (conciso é o mesmo que breve ou resumido). Se o código dentro do bloco for curto (apenas uma linha), você pode substituir o <code class="text-white-50 text-light">do...end</code> por chaves <code class="text-white-50 text-light">{ ... }</code>.

Veja como fica o exemplo anterior em uma única linha:

```ruby
nomes = ["Ana", "Bruno", "Carla"]

nomes.each { |nome| puts "Olá, #{nome}!" }
```
{: .bg-dark .text-light .p-3}

O resultado é exatamente o mesmo, mas economiza espaço vertical na tela. Mas, cuidado para não exagerar! Se o código dentro do bloco for muito longo, é melhor usar o formato com <code class="text-white-50 text-light">do...end</code> para manter a legibilidade.

### Usando each com Hashes {#usando-each-com-hashes}
---

O <code class="text-white-50 text-light">each</code> é poderoso porque funciona em qualquer coleção. Nos Hashes (que são como dicionários com chave e valor), o bloco recebe duas variáveis: uma para a chave e outra para o valor.

```ruby
# Criando um Hash com produtos e preços
produtos = { "Camiseta" => 29.90, "Calça" => 89.90, "Meia" => 9.90 }

produtos.each do |produto, preco|
  puts "O item #{produto} custa R$ #{preco}"
end
```
{: .bg-dark .text-light .p-3}

Observe que usamos <code class="text-white-50 text-light">|produto, preco|</code> entre as barras verticais. O Ruby entende automaticamente que o primeiro item é a chave (nome do produto) e o segundo item é o valor (preço do produto).


### E se eu precisar do índice? (each_with_index) {#e-se-eu-precisar-do-indice}
---

Às vezes, quando você está passando por cada item de uma lista (iterando) usando o <code class="text-white-50 text-light">each</code> no Ruby, pode querer saber em que lugar aquele item está, ou seja, seu número na lista (índice). Para isso, existe o método <code class="text-white-50 text-light">each_with_index</code>, que mostra o índice de cada item enquanto você percorre a coleção seja ela um array ou um hash.

O exemplo a seguir mostra como usar o <code class="text-white-50 text-light">each_with_index</code> com um array:

```ruby
frutas = ["Maçã", "Banana", "Cereja"]

frutas.each_with_index do |fruta, indice|
  puts "#{indice + 1}: #{fruta}"
end
```
{: .bg-dark .text-light .p-3}

Aqui, o bloco recebe dois parâmetros (<code class="text-white-50 text-light">|fruta, indice|</code>): o nome da fruta e seu índice na lista. Note que somamos 1 ao índice para começar a contagem do 1, já que os índices em programação começam do 0.

A saída será:

1: Maçã

2: Banana

3: Cereja

Você também pode usar o <code class="text-white-50 text-light">each_with_index</code> com hashes. Veja o exemplo:

```ruby
pessoas = { "Ana" => 25, "Bruno" => 30, "Carla" => 28 }

pessoas.each_with_index do |(nome, idade), indice|
  puts "#{indice + 1}: #{nome} tem #{idade} anos."
end
```
{: .bg-dark .text-light .p-3}

Neste caso, o bloco recebe uma tupla, tupla é um grupo de valores, nesse caso o grupo de valores é o nome, a idade e o índice. A saída será:

1: Ana tem 25 anos.

2: Bruno tem 30 anos.

3: Carla tem 28 anos.

Então, o <code class="text-white-50 text-light">each_with_index</code> é uma ferramenta muito útil quando você precisa tanto do valor quanto da posição do item na coleção enquanto itera sobre ela.

## Laço times {#laco-times}
---

Esse é um método exclusivo dos números inteiros (<code class="text-white-50 text-light">Integer</code>) no Ruby. É a maneira mais fácil de dizer “Repita isso X vezes”. Não precisa criar uma variável para contar, como <code class="text-white-50 text-light">i = 0</code>.

Como funciona? Você pega um número inteiro e chama o método <code class="text-white-50 text-light">times</code> nele, passando um bloco de código que será executado esse número de vezes.

### Sintaxe do laço times {#sintaxe-do-laco-times}
---

Exemplo:

```ruby

5.times do |i|
  puts "Esta é a execução número #{i + 1}"
end
```
{: .bg-dark .text-light .p-3}

Aqui, o número <code class="text-white-50 text-light">5</code> indica que o bloco de código dentro do <code class="text-white-50 text-light">do...end</code> será executado 5 vezes. A variável <code class="text-white-50 text-light">i</code> dentro das barras verticais (<code class="text-white-50 text-light">|i|</code>) representa o índice da execução atual, começando do 0, é apenas para mostrar qual é a execução atual.

A saída será:

Esta é a execução número 1

Esta é a execução número 2

Esta é a execução número 3

Esta é a execução número 4

Esta é a execução número 5

Outro exemplo com <code class="text-white-50 text-light">times</code>:

```ruby
3.times { puts "Repetindo esta mensagem!" }
```
{: .bg-dark .text-light .p-3}

Aqui, o bloco de código é simples e cabe em uma única linha, então usamos as chaves <code class="text-white-50 text-light">{ ... }</code> para definir o bloco. A mensagem "Repetindo esta mensagem!" será exibida 3 vezes.

Use o <code class="text-white-50 text-light">times</code> quando você souber exatamente o número de repetições necessárias e não estiver percorrendo uma lista complexa.

## Laços de repetição em uma frase {#lacos-de-repeticao-em-uma-frase}
---

<div class="table-responsive">

<table class="table table-bordered table-striped table-hover table-dark text-white border-secondary" role="table" aria-label="Tabela resumo dos laços de repetição em Ruby">
<caption class="visually-hidden">Tabela resumo dos laços de repetição em Ruby.</caption>
  <thead class="table-dark">
    <tr>
      <th scope="col">Laço</th>
      <th scope="col">Frase para lembrar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row"><code class="text-white-50 text-light">while</code></td>
      <td scope="row">"Enquanto for verdade... faça isso."</td>
    </tr>
    <tr>
      <td scope="row"><code class="text-white-50 text-light">until</code></td>
      <td scope="row">"Até que seja verdade... faça isso."</td>
    </tr>
    <tr>
      <td scope="row"><code class="text-white-50 text-light">for</code></td>
      <td scope="row">"Para cada item na lista... faça isso."</td>
    </tr>
    <tr>
      <td scope="row"><code class="text-white-50 text-light">each</code></td>
      <td scope="row">"Para cada item nessa lista... faça isso."</td>
    </tr>
    <tr>
      <td scope="row"><code class="text-white-50 text-light">times</code></td>
      <td scope="row">"Repita isso X vezes."</td>
    </tr>
  </tbody>
</table>
</div>

## Refazendo exercícios de artigos anteriores {#refazendo-exercicios-de-artigos-anteriores}
---

Agora que os laços de repetição foram apresentados, serão refeitos alguns exercícios dos artigos anteriores, mas dessa vez utilizando laços de repetição para resolver os problemas.

Assim será possível ver como os laços de repetição podem facilitar a resolução de problemas que envolvem tarefas repetitivas.

### Otimizando o menu de pagamento {#otimizando-o-menu-de-pagamento}
---

No exercício original, se a pessoa digitasse uma opção inválida, o programa apenas dizia "Opção inválida" e encerrava. Com o <code class="text-white-50 text-light">while</code>, podemos obrigar a pessoa a ficar no menu até escolher uma opção correta.

Código atualizado:

```ruby
preco = 0.0
opcao = 0

print "Digite o preço normal do produto: "
preco = Float(gets.chomp)

# Otimização: O programa fica preso aqui ENQUANTO a opção for inválida
# (menor que 1 OU maior que 4)
while opcao < 1 || opcao > 4
  puts "\n--- Escolha a condição de pagamento ---"
  puts "1 - À vista em dinheiro (10% de desconto)"
  puts "2 - À vista no cartão (15% de desconto)"
  puts "3 - Em duas vezes (sem juros)"
  puts "4 - Em duas vezes (10% de juros)"
  print "Escolha uma opção: "
  
  opcao = Integer(gets.chomp) rescue 0 # 'rescue 0' evita erro se digitar letras
  
  if opcao < 1 || opcao > 4
    puts "Opção inválida! Tente novamente."
  end
end

# Daqui para baixo, sabemos que a opção é válida (1, 2, 3 ou 4)
case opcao
when 1
  puts "Valor final: R$ #{(preco * 0.90).round(2)}"
when 2
  puts "Valor final: R$ #{(preco * 0.85).round(2)}"
when 3
  puts "Valor final: R$ #{preco.round(2)} (2x de R$ #{(preco/2).round(2)})"
when 4
  total = preco * 1.10
  puts "Valor final: R$ #{total.round(2)} (2x de R$ #{(total/2).round(2)})"
end
```
{: .bg-dark .text-light .p-3}

Aqui, o laço <code class="text-white-50 text-light">while</code> mantém o programa no menu de pagamento até que a pessoa escolha uma opção válida (1, 2, 3 ou 4). Se a opção for inválida, ele exibe uma mensagem e pede para tentar novamente.


**Entendendo o** <code class="text-white-50 text-light">rescue 0</code>**:**

No código acima, usamos <code class="text-white-50 text-light">Integer(gets.chomp) rescue 0</code>. Isso serve para tratar erros de digitação.

*   Se a pessoa digitar um número (exemplo: "3"), o <code class="text-white-50 text-light">Integer</code> converte para o número 3.
*   Se a pessoa digitar uma letra (exemplo: "a"), o <code class="text-white-50 text-light">Integer</code> normalmente daria um erro e fecharia o programa.
*   O <code class="text-white-50 text-light">rescue 0</code> diz ao Ruby: "Se der erro ao tentar converter, não feche o programa. Em vez disso, use o valor 0".
*   Como 0 é uma opção inválida no nosso menu (que vai de 1 a 4), o laço <code class="text-white-50 text-light">while</code> continua rodando e pede a pessoa para escolher a opção novamente.

### Validando dados do empréstimo {#validando-dados-do-emprestimo}
---

No exercício de empréstimo original, verificamos idade e renda uma única vez. Aqui, vamos usar o <code class="text-white-50 text-light">until</code> para garantir que a renda informada seja válida (maior que zero). O <code class="text-white-50 text-light">until</code> é ótimo para ler como "Faça isso ATÉ QUE a condição seja satisfeita".

Código atualizado:

```ruby
renda = 0.0

print "Digite sua idade: "
idade = Integer(gets.chomp)

# Otimização: Repete a pergunta ATÉ QUE a renda seja maior que 0
until renda > 0 do
  print "Digite sua renda mensal (deve ser maior que zero): "
  renda = Float(gets.chomp) rescue 0.0
  
  if renda <= 0
    puts "Valor inválido. Por favor, informe uma renda real."
  end
end

# Restante da lógica simplificada para o exemplo
print "Digite o valor do empréstimo: "
valor_emprestimo = Float(gets.chomp)

if valor_emprestimo > (renda * 15) || idade < 18
  puts "Empréstimo Negado."
else
  puts "Empréstimo Pré-Aprovado! (Sujeito a análise de crédito)."
end
```
{: .bg-dark .text-light .p-3}

Aqui, o laço <code class="text-white-50 text-light">until</code> mantém o programa pedindo a renda até que a pessoa informe um valor maior que zero. Se a renda for inválida (menor ou igual a zero), ele exibe uma mensagem e pede para tentar novamente.

Também usamos <code class="text-white-50 text-light">rescue 0.0</code> para evitar erros se a pessoa digitar algo que não seja um número.

### Ordenando números dinamicamente {#ordenando-numeros-dinamicamente}
---

O exercício original pedia 3 números usando variáveis soltas (n1, n2, n3). E se fossem 10 números? Com .times coletamos os dados e com .each mostramos o resultado.

```ruby
numeros = []

puts "Vamos ordenar 3 números!"

# Otimização 1: .times para repetir a coleta de dados 3 vezes
3.times do |indice|
  print "Digite o #{indice + 1}º número: "
  valor = Integer(gets.chomp)
  numeros << valor # Adiciona na lista
end

# Ordena e inverte
numeros.sort!.reverse!

puts "\nNúmeros em ordem decrescente:"

# Otimização 2: .each para imprimir, não importa se são 3 ou 100 números
numeros.each do |numero|
  puts "-> #{numero}"
end
```
{: .bg-dark .text-light .p-3}

Aqui, usamos <code class="text-white-50 text-light">.times</code> para coletar os números dinamicamente, sem precisar criar várias variáveis. Depois, usamos <code class="text-white-50 text-light">.each</code> para exibir os números ordenados, o que funciona para qualquer quantidade de números na lista.

### Média Escolar {#media-escolar}
---

Apesar do <code class="text-white-50 text-light">.each</code> ser preferido em Ruby, o <code class="text-white-50 text-light">for</code> pode ser usado para iterar (que é passar por cada item) sobre uma lista de notas. Vamos adaptar o exercício de média para calcular a média de uma lista de notas. Essa lista de notas agora será passada pela pessoa e guardada em, um array.

```ruby
notas = []

puts "Digite as notas dos alunos (digite 'sair' para terminar):"

while true
  print "Nota: "
  entrada = gets.chomp
  break if entrada.downcase == 'sair' # Sai do loop se a pessoa digitar 'sair'
  
  nota = Float(entrada) rescue nil
  if nota && nota >= 0 && nota <= 10
    notas << nota # Adiciona a nota ao array
  else
    puts "Nota inválida! Digite um número entre 0 e 10."
  end
end

if notas.empty?
  puts "Nenhuma nota foi informada."
else
  soma = 0.0
  # Usando for para iterar sobre as notas
  for nota in notas
    soma += nota
    puts "Adicionando #{nota}, soma atual: #{soma}"
  end
  
  media = soma / notas.length
  puts "A média das notas é: #{media.round(2)}"

  # Verificando aprovação
  if media >= 7
    puts "Aluno aprovado!"
  else
    puts "Aluno reprovado! Pois ficou com média abaixo de 7."
  end
end
```
{: .bg-dark .text-light .p-3}

Aqui, usamos um laço <code class="text-white-50 text-light">while true</code> para permitir que a pessoa digite várias notas até que ela decida sair digitando "sair". As notas válidas (entre 0 e 10) são armazenadas em um array chamado <code class="text-white-50 text-light">notas</code>.

Depois, usamos um laço <code class="text-white-50 text-light">for</code> para iterar sobre cada nota no array, somando-as para calcular a média. Finalmente, verificamos se o aluno foi aprovado ou reprovado com base na média calculada.

## Resumo {#resumo}
---

Neste artigo, aprendemos sobre as estruturas de repetição (ou laços) em Ruby. Elas servem para fazer o computador repetir uma tarefa sem você precisar copiar e colar o mesmo código várias vezes.

Primeiro, vimos os laços que dependem de uma condição:
- O <code class="text-white-50 text-light">while</code>: repete o código **enquanto** a condição for verdadeira.
- O <code class="text-white-50 text-light">until</code>: repete o código **até que** a condição fique verdadeira (ou seja, ele roda enquanto a condição ainda é falsa).

Depois, vimos os laços que passam por uma coleção (uma lista de itens como ranges, arrays ou hashes):

- O <code class="text-white-50 text-light">for</code>: percorre uma sequência, como um intervalo de números (<code class="text-white-50 text-light">range</code>) ou uma lista (<code class="text-white-50 text-light">array</code>).
- O <code class="text-white-50 text-light">each</code>: é o jeito mais comum no Ruby para percorrer itens de uma coleção (<code class="text-white-50 text-light">array</code>, <code class="text-white-50 text-light">hash</code>, etc.). Também vimos o <code class="text-white-50 text-light">each_with_index</code>, que mostra a posição (índice) junto com o item.
- O <code class="text-white-50 text-light">times</code>: repete uma ação um número **exato** de vezes.

Para fechar, os exercícios mostraram por que laços são tão úteis no dia a dia:
1. **Programas mais "pacientes":** dá para pedir a mesma informação até a pessoa digitar certo, em vez de o programa encerrar no primeiro erro.
2. **Trabalhar com vários dados:** em vez de usar muitas variáveis soltas, você pode guardar tudo em um <code class="text-white-50 text-light">array</code> e repetir a lógica quantas vezes precisar.
3. **Automatizar tarefas:** laços ajudam a repetir passos que seguem um padrão, economizando tempo e deixando o código mais organizado.

Em resumo, as estruturas de repetição servem para resolver problemas sem se repetir código, essas estruturas são muito poderosas e essenciais para qualquer programa. Claro que, nenhuma dessas estruturas é uma bala de prata que resolve todos os problemas, é preciso saber quando e como usar cada uma delas para tirar o máximo proveito.

Além disso, fortalecer nossa lógica de programação é fundamental para escrever condições de parada corretas e eficientes, evitando loops infinitos que podem travar o programa. Por isso de agora em diante, haverá muitos exercícios práticos para fixar esses conceitos.