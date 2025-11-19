---
layout: post
title: "Introdução à Programação: Tipos de Dados - Parte II"
description: "Neste artigo, vamos explorar ainda mais sobre os tipos de dados em programação, o objetivo agora é entender a fundo cada tipo, suas características, capacidades e limitações."
date: 2025-09-17 10:00:00 -0300
author: Louise Suelen
categories: [Programação]
tags: [programação, tecnologia]
permalink: /introducao-a-programacao-tipos-de-dados-parte-ii/
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

        <!-- 2. Definições Importantes -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#definicoes-importantes" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">2</span>
                Definições Importantes
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#o-que-e-um-objeto" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">2.1</span>
                        O que é um objeto?
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#o-que-e-uma-classe" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">2.2</span>
                        O que é uma classe?
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#o-que-e-uma-instancia" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">2.3</span>
                        O que é uma instância?
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#o-que-e-um-metodo" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">2.4</span>
                        O que é um método?
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#o-que-e-uma-variavel" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">2.5</span>
                        O que é uma variável?
                    </a>
                </li>
            </ul>
        </li>

        <!-- 3. Números inteiros – Integer -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#numeros-inteiros-integer" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">3</span>
                Números inteiros – Integer
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#como-criar-inteiros-em-ruby" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">3.1</span>
                        Como criar inteiros em Ruby
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#fazendo-operacoes-com-inteiros" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">3.2</span>
                        Fazendo operações com inteiros
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#metodos-comuns-para-inteiros" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">3.3</span>
                        Métodos comuns para inteiros
                    </a>
                </li>
            </ul>
        </li>

        <!-- 4. Números com vírgula – Float -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#numeros-com-virgula-float" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">4</span>
                Números com vírgula – Float
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#como-criar-numeros-com-virgula-em-ruby" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.1</span>
                        Como criar números com vírgula em Ruby
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#fazendo-operacoes-com-numeros-com-virgula" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.2</span>
                        Fazendo operações com números com vírgula
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#metodos-comuns-para-numeros-com-virgula" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.3</span>
                        Métodos comuns para números com vírgula
                    </a>
                </li>
            </ul>
        </li>

        <!-- 5. Textos – String -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#textos-string" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">5</span>
                Textos – String
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#como-criar-strings-em-ruby" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">5.1</span>
                        Como criar strings em Ruby
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#metodos-comuns-para-strings" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">5.2</span>
                        Métodos comuns para strings
                    </a>
                </li>
            </ul>
        </li>

        <!-- 6. Variáveis booleanas – Boolean -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#variaveis-booleanas-boolean" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">6</span>
                Variáveis booleanas – Boolean
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#como-criar-variaveis-booleanas-em-ruby" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">6.1</span>
                        Como criar variáveis booleanas em Ruby
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#operadores-logicos" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">6.2</span>
                        Operadores lógicos
                    </a>
                </li>
            </ul>
        </li>

        <!-- 7. Listas – Array -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#listas-array" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">7</span>
                Listas – Array
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#como-criar-listas-em-ruby" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">7.1</span>
                        Como criar listas em Ruby
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#conhecendo-os-indices-das-listas" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">7.2</span>
                        Conhecendo os índices das listas
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#metodos-comuns-para-listas" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">7.3</span>
                        Métodos comuns para listas
                    </a>
                </li>
            </ul>
        </li>

        <!-- 8. Tabelas de pares – Hash -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#tabelas-de-pares-hash" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">8</span>
                Tabelas de pares – Hash
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#como-criar-hashes-em-ruby" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">8.1</span>
                        Como criar hashes em Ruby
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#acessando-valores-em-hashes" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">8.2</span>
                        Acessando valores em hashes
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#metodos-comuns-para-hashes" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">8.3</span>
                        Métodos comuns para hashes
                    </a>
                </li>
            </ul>
        </li>

        <!-- 9. Nada - nil / NilClass -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#nada-nil-nilclass" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">9</span>
                Nada - nil / NilClass
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#como-usar-nil-em-ruby" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">9.1</span>
                        Como usar nil em Ruby
                    </a>
                </li>
            </ul>
        </li>

        <!-- 10. Símbolos – Symbol -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#simbolos-symbol" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">10</span>
                Símbolos – Symbol
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#como-criar-simbolos-em-ruby" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">10.1</span>
                        Como criar símbolos em Ruby
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#usando-simbolos-em-hashes" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">10.2</span>
                        Usando símbolos em hashes
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#diferenca-entre-simbolos-e-strings" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">10.3</span>
                        Diferença entre símbolos e strings
                    </a>
                </li>
            </ul>
        </li>

        <!-- 11. Converção entre tipos de dados -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#conversao-entre-tipos-de-dados" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">11</span>
                Converção entre tipos de dados
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#convertendo-strings-em-numeros" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">11.1</span>
                        Convertendo strings em números
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#convertendo-numeros-em-strings" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">11.2</span>
                        Convertendo números em strings
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#convertendo-strings-em-simbolos" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">11.3</span>
                        Convertendo strings em símbolos
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#convertendo-simbolos-em-strings" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">11.4</span>
                        Convertendo símbolos em strings
                    </a>
                </li>
            </ul>
        </li>

        <!-- 12. Resumo -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#resumo" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">12</span>
                Resumo
            </a>
        </li>
    </ul>
---

No artigo anterior, discutimos os conceitos básicos dos tipos de dados em programação. Agora, vamos aprofundar nosso entendimento sobre cada tipo, explorando suas características, capacidades e limitações.

<div class="text-center">
    <img src="https://ifrnead.github.io/rubynapratica/assets/images/tipos-dados.png" aria-hidden="true" class="img-fluid">
</div>

## Apresentação {#apresentacao}
---

Até aqui já sabemos que:

- **Um programa**: é um grupo de comandos que o computador segue um por um.

- **Linguagem de programação**: é o jeito que nós usamos para escrever esses comandos. Ruby é um exemplo de linguagem de programação.

- **Código Ruby**: quando escrevemos um código Ruby, estamos mostrando para o computador o que ele deve fazer com informações ou dados.

Um dado é qualquer coisa que o programa usa: pode ser um número, uma palavra, uma lista de itens, ou até uma resposta de “sim ou não”.

No Ruby, cada dado tem um tipo específico para armazenar e manipular essas informações corretamente mostrando ao computador o que é cada dado.

Exemplo:

```ruby
idade = 30 
nome  = "Ana"
```
{: .bg-dark .text-light .p-3}

Aqui:

- **idade** é um número inteiro (Integer) que guarda o dado numérico 30.
- **nome** é um texto (String) que guarda a palavra "Ana".

Agora que recapitulamos os conceitos básicos, é importante também entender algumas palavras que vamos usar em todos os exemplos como: objeto, classe, instância e método, além do conceito de variável que já foi apresentado no artigo anterior. Essas definições vão ajudar a entender melhor o conteúdo.

Você não precisa aprender tudo sobre essas definições agora, mas é importante entender o básico para conseguir acompanhar quando falarmos dos tipos de dados de um jeito mais detalhado.

Dito isso, vamos às definições.

## Definições Importantes {#definicoes-importantes}
---

Vamos falar sobre:

- Objetos
- Classes
- Instâncias
- Métodos
- Variáveis

### O que é um objeto? {#o-que-e-um-objeto}
---

Em Ruby, tudo é objeto. Isso significa que cada pedaço de informação que você usa no seu programa é tratado como um objeto.

Um objeto é algo que o programa consegue usar, como um número, uma palavra, uma lista ou uma data, por exemplo. Cada objeto guarda dados e permite que a pessoa programadora faça tarefas com ele. Por exemplo, você pode ter um objeto que representa um número, e esse objeto pode fazer coisas como somar, subtrair ou comparar (se é maior, menor ou igual) a outros números.

### O que é uma classe? {#o-que-e-uma-classe}
---

A classe funciona como um modelo para criar objetos. Ela diz que tipo de coisa o objeto é, quais dados ele pode guardar e o que ele pode fazer. 

Alguns exemplos de classes em Ruby são:

- **Integer**: classe dos números inteiros.
- **Float**: classe dos números com ponto decimal (3.14).
- **String**: classe dos textos.
- **Array**: classe das listas.
- **Hash**: classe das tabelas de chave/valor (como {nome: "Ana", idade: 30}).

Então na prática quando dizemos "tipo de dado", estamos falando da classe, ou da forma, que faz esse objeto ser o que ele é. Por exemplo: Quando dizemos “tipo Integer”, estamos falando de um objeto criado pela classe Integer. Só de saber isso, já conseguimos imaginar que esse objeto vai guardar um número inteiro e que ele pode fazer operações matemáticas.

Ou seja, a classe define o que o objeto pode fazer e como ele se comporta, como um molde que cria objetos com características e comportamentos específicos. Assim como usamos moldes de "coelhinhos" para fazer vários coelhinhos de chocolate, usamos classes para criar vários objetos com as mesmas características.

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">Os tipos de dados nesse contexto são classes que definem como os objetos se comportam e o que eles podem fazer no programa em Ruby.</p>
  <footer class="text-light"><a href="https://ruby-doc.org/3.4.1/Class.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">Documentação Ruby - Classe</a></footer>
</blockquote>

Por exemplo:

- Quando criamos um número inteiro, estamos criando um objeto da classe Integer.
  - Esse objeto pode fazer coisas como somar, subtrair, multiplicar e dividir.
- Quando criamos um texto, estamos criando um objeto da classe String.
  - Esse objeto pode fazer coisas como juntar textos, contar letras e transformar tudo em maiúsculas ou minúsculas.
- Quando criamos uma lista, estamos criando um objeto da classe Array.
  - Esse objeto pode fazer coisas como adicionar itens, remover itens e ordenar os itens.

E assim por diante.

### O que é uma instância? {#o-que-e-uma-instancia}
---

Uma instância é um objeto real que foi criado a partir de uma classe. Por exemplo, quando você cria um número inteiro como 5, você está criando uma instância da classe Integer.

Exemplos:

- 42 é uma instância (um objeto específico) da classe Integer.
- "Olá, mundo!" é uma instância da classe String.

Isso pode ser testado no IRB usando um recurso chamado <code class="text-white-50 text-light">.class</code> que mostra a classe (tipo de dado), do objeto.

```ruby
puts 42.class
puts "Olá, mundo!".class
puts [1, 2, 3].class
```
{: .bg-dark .text-light .p-3}

A saída será:

```ruby
Integer
String
Array
```
{: .bg-dark .text-light .p-3}

**Dica:** Tente você mesmo no IRB! Experimente criar diferentes tipos de dados e use o <code class="text-white-50 text-light">.class</code> para ver a classe de cada um.

### O que é um método? {#o-que-e-um-metodo}
---

Um método é uma ação (uma tarefa) que podemos pedir para o objeto executar. Cada classe tem seus próprios métodos que dizem o que os objetos daquela classe podem fazer.

A estrutura básica é assim: 

```ruby
objeto.nome_do_metodo(argumentos_opcionais)
```
{: .bg-dark .text-light .p-3}

Aqui, <code class="text-white-50 text-light">objeto</code> é o objeto que você quer que faça algo, <code class="text-white-50 text-light">nome_do_metodo</code> é o nome da ação que você quer que ele faça, e <code class="text-white-50 text-light">argumentos_opcionais</code> são informações extras que você pode passar para o método, se for preciso.

Vamos lembrar disso o tempo todo: método = ação de um objeto.

Exemplo de método:

Para um objeto da classe String (texto), temos o método <code class="text-white-50 text-light">upcase</code> que transforma todas as letras em maiúsculas:

```ruby
texto = "olá"
puts texto.upcase
```
{: .bg-dark .text-light .p-3}

A saída será:

```ruby
OLÁ
```
{: .bg-dark .text-light .p-3}

De novo: **método = ação de um objeto.**

Se nós fossemos um objeto, ações como se comunicar, comer e dormir seriam nossos métodos!

### O que é uma variável? {#o-que-e-uma-variavel}
---

Já foi dito no artigo anterior que variáveis são como “caixinhas” onde colocamos os dados que queremos usar. Elas têm nomes que usamos para lembrar o que está dentro delas.

Exemplo:

```ruby
nome = "João"
idade = 25
```
{: .bg-dark .text-light .p-3}

Aqui, <code class="text-white-50 text-light">nome</code> é uma variável que guarda o texto "João", e <code class="text-white-50 text-light">idade</code> é uma variável que guarda o número 25. Ou seja, uma variável é um nome que você escolhe para guardar um valor ou uma informação, assim você pode usar esse valor depois no seu programa.

Essas são as definições básicas que precisamos entender para falar sobre os tipos de dados em Ruby de maneira mais profunda. Vamos explorar cada tipo de dado, suas características, capacidades e limitações, sempre lembrando dessas definições para facilitar o entendimento.

## Números inteiros – Integer {#numeros-inteiros-integer}
---

O que é um número inteiro? Esse conceito vem da matemática: são números sem partes decimais, o que quer dizer que eles não têm vírgulas ou pontos. 

Os números inteiros podem ser:

- **Positivos**: 0, 1, 2, 3 e assim por diante.
- **Negativos**: &minus;1, &minus;2, &minus;3 e assim por diante.
- **Zero**: 0 é considerado um número inteiro também.

Esses números são usados todos os dias para:

- Contar pessoas. Exemplo: "São 10 pessoas na sala."
- Número de itens. Exemplo: "Tenho 5 maçãs."
- Quantidade de vezes que algo acontece. Exemplo: "Ele correu 3 vezes hoje."

Em Ruby os números inteiros são representados pela classe <code class="text-white-50 text-light">Integer</code>. Todos esses números são objetos dessa classe.

Observe no IRB:

```ruby
42.class   # A saída será Integer
-7.class   # A saída será Integer
0.class    # A saída será Integer
```
{: .bg-dark .text-light .p-3}

### Como criar inteiros em Ruby {#como-criar-inteiros-em-ruby}
---

Para criar números inteiros em Ruby podemos criar variáveis e dar (atribuir) valores inteiros a elas.

Exemplo:

```ruby
idade = 25
quantidade_de_livros = 10
saldo_bancario = -150
```
{: .bg-dark .text-light .p-3}

Quando queremos usar um número grande, como 1.000.000, em Ruby podemos usar underline (_) para separar os milhares, facilitando a leitura.

Exemplo:

```ruby
populacao = 1_000_000   # igual a 1000000, só que mais legível
```
{: .bg-dark .text-light .p-3}

### Fazendo operações com inteiros {#fazendo-operacoes-com-inteiros}
---

No mundo da programação e da matemática, quando falamos em operações, estamos nos referindo a coisas como: 

- Adição
- Subtração
- Multiplicação
- Divisão
- Comparações (maior, menor, igual)
- E muito mais!

Em Ruby todas essas operações matemáticas são métodos que podemos usar com objetos da classe <code class="text-white-50 text-light">Integer</code>. Isso quer dizer que as operações são ações que podemos pedir para os números realizarem.

Lembre-se: método = ação de um objeto.

Então nesse caso, os números inteiros (objetos da classe Integer) têm métodos que fazem essas operações matemáticas.

Os símbolos usados para essas operações são:

<div class="table-responsive">
<table class="table table-bordered table-striped table-hover table-dark text-white border-secondary" role="table" aria-label="Comparação entre símbolos matemáticos e símbolos em Ruby para operações matemáticas">
  <caption class="visually-hidden">Tabela comparativa de símbolos matemáticos e seus equivalentes em Ruby</caption>
  <thead class="table-dark">
    <tr>
      <th scope="col" class="border-white">Operação matemática</th>
      <th scope="col" class="border-white">Símbolo na matemática</th>
      <th scope="col" class="border-white">Símbolo em Ruby</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" class="border-white">Adição</th>
      <td class="border-white">+</td>
      <td class="border-white">+</td>
    </tr>
    <tr>
      <th scope="row" class="border-white">Subtração</th>
      <td class="border-white">&minus;</td>
      <td class="border-white">&minus;</td>
    </tr>
    <tr>
      <th scope="row" class="border-white">Multiplicação</th>
      <td class="border-white">&times;</td>
      <td class="border-white">*</td>
    </tr>
    <tr>
      <th scope="row" class="border-white">Divisão</th>
      <td class="border-white">&divide;</td>
      <td class="border-white">/</td>
    </tr>
    <tr>
      <th scope="row" class="border-white">Módulo (resto da divisão)</th>
      <td class="border-white">%</td>
      <td class="border-white">%</td>
    </tr>
    <tr>
      <th scope="row" class="border-white">Potenciação</th>
      <td class="border-white">^</td>
      <td class="border-white">**</td>
    </tr>
    <tr>
      <th scope="row" class="border-white">Comparação (maior que)</th>
      <td class="border-white">&gt;</td>
      <td class="border-white">&gt;</td>
    </tr>
    <tr>
      <th scope="row" class="border-white">Comparação (menor que)</th>
      <td class="border-white">&lt;</td>
      <td class="border-white">&lt;</td>
    </tr>
    <tr>
      <th scope="row" class="border-white">Comparação (maior ou igual a)</th>
      <td class="border-white">&ge;</td>
      <td class="border-white">>=</td>
    </tr>
    <tr>
      <th scope="row" class="border-white">Comparação (menor ou igual a)</th>
      <td class="border-white">&le;</td>
      <td class="border-white">&lt;=</td>
    </tr>
    <tr>
      <th scope="row" class="border-white">Comparação (igual a)</th>
      <td class="border-white">=</td>
      <td class="border-white">==</td>
    </tr>
  </tbody>
</table>
</div>

**Observação:** Em Ruby, a comparação se algo é igual a outra coisa é feita com dois sinais de igual (==) e não com um só (=), isso acontece porque o sinal de igual sozinho (=) é usado para atribuir valores a variáveis, por exemplo: <code class="text-white-50 text-light">idade = 30</code> atribui o valor 30 à variável idade. Então se precisarmos comparar se a idade é igual a 30, usamos <code class="text-white-50 text-light">idade == 30</code>.

Com os exemplos práticos fica mais fácil de entender.

Vamos declarar duas variáveis com números inteiros e fazer algumas operações com elas:

```ruby
a = 10
b = 5

puts a + b        # Adição: resultado será 15
puts a - b        # Subtração: resultado será 5
puts a * b        # Multiplicação: resultado será 50
puts a / b        # Divisão: resultado será 2
puts a % b        # Módulo (resto da divisão): resultado será 0
puts a ** 2      # Potenciação: resultado será 100
puts a > b       # Comparação (maior que): resultado será true
puts a < b       # Comparação (menor que): resultado será false
puts a >= 10     # Comparação (maior ou igual a): resultado será true
puts b <= 3      # Comparação (menor ou igual a): resultado será false
puts a == 10     # Comparação (igual a): resultado será true
```
{: .bg-dark .text-light .p-3}

### Métodos comuns para inteiros {#metodos-comuns-para-inteiros}
---

De novo lembrando: método = ação de um objeto.

Agora vamos conhecer alguns métodos que o Ruby já deixa prontos para usarmos com números inteiros (objetos da classe Integer).

**1 - método <code class="text-white-50 text-light">even?</code>: verifica se o número é par.**

```ruby
numero = 4
puts numero.even?   # A saída será true
```
{: .bg-dark .text-light .p-3}

**2 -  método <code class="text-white-50 text-light">odd?</code>: verifica se o número é ímpar.**

```ruby
numero = 7
puts numero.odd?    # A saída será true
```
{: .bg-dark .text-light .p-3}

**3 -  método <code class="text-white-50 text-light">next</code>: retorna o próximo número inteiro.**

```ruby
numero = 10
puts numero.next    # A saída será 11
```
{: .bg-dark .text-light .p-3}

**4 - método <code class="text-white-50 text-light">pred</code>: retorna o número inteiro anterior.**

```ruby
numero = 10
puts numero.pred    # A saída será 9
```
{: .bg-dark .text-light .p-3}

**5 - método <code class="text-white-50 text-light">abs</code>: retorna o valor absoluto do número (sem o sinal de negativo).**

```ruby
numero = -15
puts numero.abs     # A saída será 15
```
{: .bg-dark .text-light .p-3}

Esses são apenas alguns exemplos de métodos que podemos usar com números inteiros em Ruby. Existem muitos outros métodos disponíveis que podem ajudar a realizar diversas tarefas com esses dados.

## Números com vírgula – Float {#numeros-com-virgula-float}
---

O que é um número com vírgula? Também conhecido como número decimal, é um número que tem uma parte fracionária, ou seja, uma parte depois da vírgula (ou ponto, dependendo do país).

Exemplos de números com vírgula:

- 3,14
- 0,75
- &minus;2,5
- 100,0

Esses números são usados para representar valores que não são inteiros, como:

- Medidas. Exemplo: "A altura da pessoa é 1,75 metros."
- Dinheiro. Exemplo: "O preço do produto é R$ 19,99."
- Temperaturas. Exemplo: "A temperatura está em 23,5 graus Celsius."
- E muito mais!

Em Ruby, os números com vírgula são representados pela classe <code class="text-white-50 text-light">Float</code>. Todos esses números são objetos dessa classe.

Observe no IRB:

```ruby
3.14.class   # A saída será Float
-0.75.class  # A saída será Float
0.0.class    # A saída será Float
```
{: .bg-dark .text-light .p-3}

### Como criar números com vírgula em Ruby {#como-criar-numeros-com-virgula-em-ruby}
---

Para criar números com vírgula em Ruby, usamos o ponto (.) como separador decimal, diferente do que usamos na escrita comum em português, onde usamos a vírgula (,).

Exemplo:

```ruby
altura = 1.75
preco = 19.99
temperatura = -2.5
```
{: .bg-dark .text-light .p-3}

### Fazendo operações com números com vírgula {#fazendo-operacoes-com-numeros-com-virgula}
---

Assim como os números inteiros, os números com vírgula (objetos da classe Float) também têm métodos para fazer operações matemáticas.

Os símbolos usados para essas operações são os mesmos apresentados na tabela comparativa anterior.

Vamos declarar duas variáveis com números com vírgula e fazer algumas operações com elas:

```ruby
x = 5.5
y = 2.0

puts x + y        # Adição: resultado será 7.5
puts x - y        # Subtração: resultado será 3.5
puts x * y        # Multiplicação: resultado será 11.0
puts x / y        # Divisão: resultado será 2.75
puts x % y        # Módulo (resto da divisão): resultado será 1.5
puts x ** 2      # Potenciação: resultado será 30.25
puts x > y       # Comparação (maior que): resultado será true
puts x < y       # Comparação (menor que): resultado será false
puts x >= 5.5    # Comparação (maior ou igual a): resultado será true
puts y <= 3.0    # Comparação (menor ou igual a): resultado será true
puts x == 5.5    # Comparação (igual a): resultado será true
```
{: .bg-dark .text-light .p-3}

### Métodos comuns para números com vírgula {#metodos-comuns-para-numeros-com-virgula}
---

De novo lembrando: método = ação de um objeto.

Alguns métodos disponíveis para números <code class="text-white-50 text-light">Float</code> em Ruby são:

**1 - método <code class="text-white-50 text-light">round</code>: arredonda o número para o inteiro mais próximo.**

```ruby
numero = 3.6

puts numero.round    # A saída será 4
```
{: .bg-dark .text-light .p-3}

Nesse método também é possível arredondar a parte decimal para um número específico de casas decimais, passando um argumento para o método.

```ruby
numero = 3.14159

puts numero.round(1)    # A saída será 3.1

puts numero.round(2)    # A saída será 3.14

puts numero.round(3)    # A saída será 3.142
```
{: .bg-dark .text-light .p-3}

**2 - método <code class="text-white-50 text-light">ceil</code>: arredonda o número para cima (para o próximo inteiro).**

```ruby
numero = 4.2
puts numero.ceil     # A saída será 5
```
{: .bg-dark .text-light .p-3}

Qual a diferença entre <code class="text-white-50 text-light">ceil</code> e <code class="text-white-50 text-light">round</code>?

- O método <code class="text-white-50 text-light">round</code> arredonda para o inteiro mais próximo, seja para cima ou para baixo, dependendo do valor decimal.
- O método <code class="text-white-50 text-light">ceil</code> sempre arredonda para cima, independentemente do valor decimal.

Por exemplo:

```ruby
numero1 = 4.2
numero2 = 4.7

puts numero1.round    # A saída será 4
puts numero2.round    # A saída será 5

puts numero1.ceil     # A saída será 5
puts numero2.ceil     # A saída será 5
```
{: .bg-dark .text-light .p-3}

**3 - método <code class="text-white-50 text-light">floor</code>: arredonda o número para baixo (para o inteiro anterior).**

```ruby
numero = 4.8
puts numero.floor    # A saída será 4
```
{: .bg-dark .text-light .p-3}

Números de ponto flutuante (Float) podem ter pequenas imprecisões. Isso acontece porque alguns números decimais não podem ser representados exatamente em binário, que é a forma como os computadores armazenam números. Por exemplo, a soma de 0.1 e 0.2 pode resultar em 0.30000000000000004 em vez de 0.3.

Para lidar com dinheiro em programas mais avançados por exemplo, é melhor usar outros tipos de número, como o BigDecimal. Mas, para quem está começando, basta saber que o tipo Float não é sempre exato e pode dar pequenos erros em algumas situações.

## Textos – String {#textos-string}
---

Uma string é um texto. É uma sequência de caracteres que pode incluir letras, números, espaços e símbolos.

Exemplos de strings:

```ruby

"Olá, mundo!"
"12345"
"Ruby"
"Programação"
"@#%&*()!"
```
{: .bg-dark .text-light .p-3}

Todas essas sequências de caracteres são objetos da classe <code class="text-white-50 text-light">String</code> em Ruby.

### Como criar strings em Ruby {#como-criar-strings-em-ruby}
---

Para criar strings em Ruby, usamos aspas duplas (" ") ou aspas simples (' '), geralmente, as aspas duplas são mais comuns. Precisamos colocar o texto entre aspas para que o Ruby entenda que aquilo é uma string e não um comando, uma variável ou outra coisa que estamos tentando inserir no programa.

Exemplo:

```ruby
mensagem = "Olá, mundo!"
nome = 'Ana'
vazio = ""
```
{: .bg-dark .text-light .p-3}

Algo muito legal que podemos fazer com strings se chama interpolação. Interpolação é quando colocamos o valor de uma variável dentro de uma string, para que o valor daquela variável apareça no texto.

Para fazer isso usamos <code class="text-white-50 text-light">#{}</code> dentro de uma string com aspas duplas.

Exemplo de interpolação:

```ruby
nome = "Louise"
mensagem = "Olá, #{nome}! Seja bem-vinda."

puts mensagem   # A saída será "Olá, Louise! Seja bem-vinda."
```
{: .bg-dark .text-light .p-3}

Aqui o valor da variável <code class="text-white-50 text-light">nome</code> foi colocado dentro da string na variável <code class="text-white-50 text-light">mensagem</code> usando a interpolação.

### Métodos comuns para strings {#metodos-comuns-para-strings}
---

Alguns métodos comuns que podemos usar com strings em Ruby são:

**1 - método <code class="text-white-50 text-light">upcase</code>: transforma todas as letras da string em maiúsculas.**

```ruby
texto = "olá, mundo!"
puts texto.upcase    # A saída será "OLÁ, MUNDO!"
```
{: .bg-dark .text-light .p-3}

**2 - método <code class="text-white-50 text-light">downcase</code>: transforma todas as letras da string em minúsculas.**

```ruby
texto = "OLÁ, MUNDO!"
puts texto.downcase    # A saída será "olá, mundo!"
```
{: .bg-dark .text-light .p-3}

**3 - método <code class="text-white-50 text-light">length</code>: retorna o número de caracteres (incluindo espaços) na string.**

```ruby
texto = "Olá"
texto2 = "Oi, eu sou o Goku!"

puts texto.length      # A saída será 3
puts texto2.length   # A saída será 18
```
{: .bg-dark .text-light .p-3}

**4 - método <code class="text-white-50 text-light">strip</code>: remove espaços em branco do início e do fim da string.**

```ruby
texto = "   Olá, mundo!   "
puts texto.strip    # A saída será "Olá, mundo!"
```
{: .bg-dark .text-light .p-3}

**5 - método <code class="text-white-50 text-light">gsub</code>: substitui todas as ocorrências de um texto por outro na string.**

```ruby
texto = "O gato está no telhado."
puts texto.gsub("gato", "cachorro")   # A saída será "O cachorro está no telhado."
```
{: .bg-dark .text-light .p-3}

## Variáveis booleanas – Boolean {#variaveis-booleanas-boolean}
---

Um booleano é um tipo de dado que só pode ter dois valores:

- <code class="text-white-50 text-light">true</code> (verdadeiro)
- <code class="text-white-50 text-light">false</code> (falso)

Esses valores são usados para representar condições ou respostas de "sim" ou "não" em programas e muitas vezes são usados para tomar decisões no código.

Ruby não tem uma classe específica chamada <code class="text-white-50 text-light">Boolean</code>, mas os valores <code class="text-white-50 text-light">true</code> e <code class="text-white-50 text-light">false</code> são objetos únicos.

- <code class="text-white-50 text-light">true</code> é um objeto único da classe <code class="text-white-50 text-light">TrueClass</code>.
- <code class="text-white-50 text-light">false</code> é um objeto único da classe <code class="text-white-50 text-light">FalseClass</code>.

### Como criar variáveis booleanas em Ruby {#como-criar-variaveis-booleanas-em-ruby}
---

Para criar variáveis booleanas em Ruby, simplesmente atribuímos os valores <code class="text-white-50 text-light">true</code> ou <code class="text-white-50 text-light">false</code> a uma variável.

Exemplo:

```ruby
esta_chovendo = true
tem_luz = false
```
{: .bg-dark .text-light .p-3}

É possível também combinar valores booleanos usando ferramentas chamadas de operadores lógicos.

### Operadores lógicos {#operadores-logicos}
---

Os operadores lógicos são usados para combinar ou modificar valores booleanos. Por exemplo, podemos usar operadores lógicos para verificar se duas condições são verdadeiras ao mesmo tempo, ou se pelo menos uma delas é verdadeira.

Os principais operadores lógicos em Ruby são:

- **AND lógico (<code class="text-white-50 text-light">&&</code>)**: retorna <code class="text-white-50 text-light">true</code> se ambas as condições forem verdadeiras.
- **OR lógico (<code class="text-white-50 text-light">||</code>)**: retorna <code class="text-white-50 text-light">true</code> se pelo menos uma das condições for verdadeira.
- **NOT lógico (<code class="text-white-50 text-light">!</code>)**: inverte o valor booleano (de <code class="text-white-50 text-light">true</code> para <code class="text-white-50 text-light">false</code> e vice-versa).

Exemplos:

```ruby
a = true
b = false

puts a && b    # AND lógico: a saída será false
puts a || b    # OR lógico: a saída será true
puts !a        # NOT lógico: a saída será false
puts !b        # NOT lógico: a saída será true
```
{: .bg-dark .text-light .p-3}

Mas, para que serve isso na prática? Vamos ver um exemplo.

```ruby
# Dados simulados do sistema
usuario_correto = true          # O nome do usuário está correto?
senha_correta = true            # A senha está correta?
usuario_eh_admin = false        # Essa pessoa tem permissão de administrador?

# Simulação de login básico
login_valido = usuario_correto && senha_correta

# Verificações usando operadores lógicos
pode_acessar = login_valido || usuario_eh_admin

# Resultado da simulação
puts "Login válido? #{login_valido}"             # Esperado: true
puts "É administrador? #{usuario_eh_admin}"      # Esperado: false
puts "Pode acessar o sistema? #{pode_acessar}"   # true se login for válido ou se for admin
puts "Acesso negado? #{!pode_acessar}"           # true se não puder acessar
```
{: .bg-dark .text-light .p-3}

O que foi feito aqui? O código simula um sistema de login simples. Ele verifica se o nome do usuário e a senha estão corretos usando o operador AND lógico (<code class="text-white-50 text-light">&&</code>). Se ambos estiverem corretos, o login é válido.

Para fazer este teste crie um programa Ruby com o código acima e execute-o no terminal. Observe os resultados e tente alterar os valores das variáveis <code class="text-white-50 text-light">usuario_correto</code>, <code class="text-white-50 text-light">senha_correta</code> e <code class="text-white-50 text-light">usuario_eh_admin</code> para ver como isso afeta o resultado final.

## Listas – Array {#listas-array}
---

Uma lista, ou array, é uma coleção ordenada de itens. Esses itens podem ser de qualquer tipo de dado, como números, textos, booleanos, ou até mesmo outros arrays.

Nós já usamos listas no nosso dia a dia, mesmo sem perceber. Por exemplo, uma lista de compras, uma lista de tarefas ou uma lista de contatos no celular.

Em Ruby as listas são representadas pela classe <code class="text-white-50 text-light">Array</code>. Todos os arrays são objetos dessa classe.

Observe no IRB:

```ruby
frutas = ["maçã", "banana", "laranja"]
notas  = [7.5, 8.0, 9.0]
idades = [25, 30, 22]
puts frutas.class   # A saída será Array
puts notas.class    # A saída será Array
puts idades.class   # A saída será Array
```
{: .bg-dark .text-light .p-3}

### Como criar listas em Ruby {#como-criar-listas-em-ruby}
---

Para criar listas em Ruby, usamos colchetes <code class="text-white-50 text-light">[ ]</code> e separamos os itens com vírgulas.

Exemplo:

```ruby
numeros = [1, 2, 3]                      # array de inteiros
frutas  = ["maçã", "banana", "uva"]      # array de strings
mistura = [1, "dois", :tres, 4.0]        # array misto
vazio   = []                             # array vazio
```
{: .bg-dark .text-light .p-3}

### Conhecendo os índices das listas {#conhecendo-os-indices-das-listas}
---

Índices são as posições dos itens dentro de uma lista. Em Ruby, os índices começam do zero (0). Isso significa que o primeiro item da lista está na posição 0, o segundo item está na posição 1, o terceiro item está na posição 2, e assim por diante.

A função do índice é a mesma que um índice tem em um livro: ele ajuda a encontrar rapidamente onde algo está localizado.

Exemplo:

```ruby
frutas = ["maçã", "banana", "laranja"]

puts frutas[0]   # A saída será "maçã" (primeiro item)
puts frutas[1]   # A saída será "banana" (segundo item)
puts frutas[2]   # A saída será "laranja" (terceiro item)
```
{: .bg-dark .text-light .p-3}

Podemos usar índice positivo (do começo) ou negativo (do fim):

```ruby
frutas = ["maçã", "banana", "laranja"]

puts frutas[-1]   # A saída será "laranja" (último item)
puts frutas[-2]   # A saída será "banana" (penúltimo item)
puts frutas[-3]   # A saída será "maçã" (antepenúltimo item)
```
{: .bg-dark .text-light .p-3}

### Métodos comuns para listas {#metodos-comuns-para-listas}
---

Alguns métodos comuns que podemos usar com listas (arrays) em Ruby são:

**1 - método <code class="text-white-50 text-light">push</code>: adiciona um item ao final da lista.**

```ruby
frutas = ["maçã", "banana"]

frutas.push("laranja")

puts frutas.inspect    # A saída será ["maçã", "banana", "laranja"]
```
{: .bg-dark .text-light .p-3}

O método <code class="text-white-50 text-light">inspect</code> é usado aqui para mostrar o conteúdo completo do array.

**2 - método <code class="text-white-50 text-light">pop</code>: remove o último item da lista e o retorna.**

```ruby
frutas = ["maçã", "banana", "laranja"]
ultima_fruta = frutas.pop
puts ultima_fruta          # A saída será "laranja"
puts frutas.inspect        # A saída será ["maçã", "banana"]
```
{: .bg-dark .text-light .p-3}

O que foi feito aqui? O método <code class="text-white-50 text-light">pop</code> removeu o último item da lista (laranja) e o guardou na variável <code class="text-white-50 text-light">ultima_fruta</code>. Depois mostramos o valor dessa variável e o conteúdo atualizado da lista.

**3 - método <code class="text-white-50 text-light">length</code>: retorna o número de itens na lista.**

```ruby
frutas = ["maçã", "banana", "laranja"]
puts frutas.length    # A saída será 3
```
{: .bg-dark .text-light .p-3}

**4 - método <code class="text-white-50 text-light">include?</code>: verifica se um item está presente na lista.**

```ruby
frutas = ["maçã", "banana", "laranja"]
puts frutas.include?("banana")   # A saída será true
puts frutas.include?("uva")      # A saída será false
```
{: .bg-dark .text-light .p-3}

## Tabelas de pares – Hash {#tabelas-de-pares-hash}
---

Um hash é uma coleção de pares de chave-valor. Cada valor na coleção é associado a uma chave única, que é usada para acessar esse valor. 

Por exemplo, em um dicionário, a palavra é a chave e a definição é o valor. Em um hash, podemos pensar em algo semelhante: a chave é como o "nome" do valor, e usamos essa chave para encontrar o valor correspondente.

Em Ruby, os hashes são representados pela classe <code class="text-white-50 text-light">Hash</code>. Todos os hashes são objetos dessa classe.

Observe no IRB:

```ruby
pessoa = { "nome" => "João", "idade" => 30 }
puts pessoa.class   # A saída será Hash
```
{: .bg-dark .text-light .p-3}

### Como criar hashes em Ruby {#como-criar-hashes-em-ruby}
---

Para criar hashes em Ruby, usamos chaves <code class="text-white-50 text-light">{ }</code> e associamos cada chave a um valor usando o símbolo <code class="text-white-50 text-light">=> </code>.

Exemplo:

```ruby
pessoa = { "nome" => "Ana", "idade" => 25, " cidade" => "São Paulo" }
```
{: .bg-dark .text-light .p-3}

### Acessando valores em hashes {#acessando-valores-em-hashes}
---

Para acessar um valor em um hash, usamos a chave correspondente entre colchetes <code class="text-white-50 text-light">[ ]</code>.

Exemplo:

```ruby
pessoa = { "nome" => "Ana", "idade" => 25, " cidade" => "São Paulo" }
puts pessoa["nome"]      # A saída será "Ana"
puts pessoa["idade"]     # A saída será 25
puts pessoa["cidade"]    # A saída será "São Paulo"
```
{: .bg-dark .text-light .p-3}

Como podemos alterar o valor associado a uma chave em um hash? Simplesmente atribuímos um novo valor àquela chave.

Exemplo:

```ruby
pessoa = { "nome" => "Ana", "idade" => 25, "cidade" => "São Paulo" }
pessoa["idade"] = 26
puts pessoa["idade"]     # A saída será 26
```
{: .bg-dark .text-light .p-3}

### Métodos comuns para hashes {#metodos-comuns-para-hashes}
---

Alguns métodos comuns que podemos usar com hashes em Ruby são:

**1 - método <code class="text-white-50 text-light">keys</code>: retorna uma lista com todas as chaves do hash.**

```ruby
pessoa = { "nome" => "Ana", "idade" => 25, "cidade" => "São Paulo" }
puts pessoa.keys.inspect    # A saída será ["nome", "idade", "cidade"]
```
{: .bg-dark .text-light .p-3}

**2 - método <code class="text-white-50 text-light">values</code>: retorna uma lista com todos os valores do hash.**

```ruby
pessoa = { "nome" => "Ana", "idade" => 25, "cidade" => "São Paulo" }
puts pessoa.values.inspect    # A saída será ["Ana", 25, "São Paulo"]
```
{: .bg-dark .text-light .p-3}

**3 - método <code class="text-white-50 text-light">delete</code>: remove um par chave-valor do hash com base na chave fornecida.**

```ruby
pessoa = { "nome" => "Ana", "idade" => 25, "cidade" => "São Paulo" }
pessoa.delete("idade")
puts pessoa.inspect    # A saída será {"nome"=>"Ana", "cidade"=>"São Paulo"}
```
{: .bg-dark .text-light .p-3}

## Nada - nil / NilClass {#nada-nil-nilclass}
---

Em Ruby, <code class="text-white-50 text-light">nil</code> é um valor especial que representa a ausência de um valor ou a falta de um objeto. É usado para indicar que algo não existe ou não foi definido.

Muitas vezes precisamos dizer “não tem valor aqui”.

Em Ruby, <code class="text-white-50 text-light">nil</code> é um objeto único da classe <code class="text-white-50 text-light">NilClass</code> que serve justamente para representar essa ausência de valor.

- <code class="text-white-50 text-light">nil</code> significa ausência de valor.
- Não é zero.
- Não é uma string vazia.
- Não é falso.
- É simplesmente nada.

### Como usar nil em Ruby {#como-usar-nil-em-ruby}
---

Podemos usar <code class="text-white-50 text-light">nil</code> para inicializar variáveis que ainda não têm um valor definido.

Exemplo:

```ruby
resultado = nil
puts resultado    # A saída será nil
```
{: .bg-dark .text-light .p-3}

Ou podemos verificar se uma variável é <code class="text-white-50 text-light">nil</code> usando o método <code class="text-white-50 text-light">nil?</code>.

Exemplo:

```ruby
nome = nil
nome.nil?   # => true

"oi".nil?   # => false
0.nil?      # => false
"".nil?     # => false

puts nome.nil?    # A saída será true
```
{: .bg-dark .text-light .p-3}

## Símbolos – Symbol {#simbolos-symbol}
---

Um símbolo é um tipo de dado em Ruby que representa um nome ou identificador. Símbolos são frequentemente usados como chaves em hashes ou para representar estados ou opções em programas.

Em Ruby, os símbolos são representados pela classe <code class="text-white-50 text-light">Symbol</code>. Todos os símbolos são objetos dessa classe.

### Como criar símbolos em Ruby {#como-criar-simbolos-em-ruby}
---

Para criar um símbolo em Ruby, usamos dois pontos (:) seguidos do nome do símbolo.

Exemplo:

```ruby
:nome
:idade
:cidade
```
{: .bg-dark .text-light .p-3}

### Usando símbolos em hashes {#usando-simbolos-em-hashes}
---

Os símbolos são frequentemente usados como chaves em hashes, pois são mais eficientes em termos de memória e desempenho do que strings.

Para criar um hash com símbolos como chaves, usamos a seguinte sintaxe (sintaxe é a forma de escrever algo):

```ruby
estado_sp = :SP
estado_rj = :RJ

endereco = {
  rua:    "Av. Paulista",
  numero: 1000,
  cidade: "São Paulo",
  uf:     :SP
}
```
{: .bg-dark .text-light .p-3}

No exemplo anterior , as chaves do hash <code class="text-white-50 text-light">endereco</code> são símbolos (:rua, :numero, :cidade, :uf). Para acessar os valores do hash, usamos os símbolos como chaves:

```ruby
puts endereco[:rua]      # A saída será "Av. Paulista"
puts endereco[:numero]   # A saída será 1000
puts endereco[:cidade]   # A saída será "São Paulo"
puts endereco[:uf]       # A saída será :SP
```
{: .bg-dark .text-light .p-3}

Em outras palavras, símbolos são como etiquetas que usamos para identificar coisas em nosso código. Eles são leves e rápidos, o que os torna ideais para uso em situações onde precisamos de muitos identificadores únicos, como em hashes.

### Diferença entre símbolos e strings {#diferenca-entre-simbolos-e-strings}
---

- Use String quando quiser trabalhar com palavras, frases ou qualquer texto que será mostrado para uma pessoa ou usado como mensagem, campo de formulário etc.
- Use Symbol quando precisar de um nome fixo para identificar algo no seu código, como: 
  - chaves em tabelas (hashes),
  - nomes de opções,
  - estados.

Símbolos são mais eficientes em termos de memória e desempenho do que strings, especialmente quando usados repetidamente como identificadores.

## Converção entre tipos de dados {#conversao-entre-tipos-de-dados}
---

Às vezes, precisamos converter um tipo de dado em outro. Por exemplo, podemos querer transformar uma string que representa um número em um número inteiro para fazer cálculos com ele.

Em Ruby, podemos fazer conversões entre tipos de dados usando métodos específicos.

### Convertendo strings em números {#convertendo-strings-em-numeros}
---

Para converter uma string em um número inteiro, usamos o método <code class="text-white-50 text-light">to_i</code>.

```ruby
numero_string = "42"
numero_inteiro = numero_string.to_i
puts numero_inteiro    # A saída será 42
puts numero_inteiro.class   # A saída será Integer
```
{: .bg-dark .text-light .p-3}

Para converter uma string em um número com vírgula (float), usamos o método <code class="text-white-50 text-light">to_f</code>.

```ruby
numero_string = "3.14"
numero_float = numero_string.to_f
puts numero_float    # A saída será 3.14
puts numero_float.class   # A saída será Float
```
{: .bg-dark .text-light .p-3}

### Convertendo números em strings {#convertendo-numeros-em-strings}
---

Para converter um número inteiro em uma string, usamos o método <code class="text-white-50 text-light">to_s</code>.

```ruby
numero_inteiro = 42
numero_string = numero_inteiro.to_s
puts numero_string    # A saída será "42"
puts numero_string.class   # A saída será String
```
{: .bg-dark .text-light .p-3}

Para converter um número com vírgula (float) em uma string, também usamos o método <code class="text-white-50 text-light">to_s</code>.

```ruby
numero_float = 3.14
numero_string = numero_float.to_s
puts numero_string    # A saída será "3.14"
puts numero_string.class   # A saída será String
```
{: .bg-dark .text-light .p-3}

### Convertendo strings em símbolos {#convertendo-strings-em-simbolos}
---

Para converter uma string em um símbolo, usamos o método <code class="text-white-50 text-light">to_sym</code>.

```ruby
texto = "nome"
simbolo = texto.to_sym
puts simbolo    # A saída será :nome
puts simbolo.class   # A saída será Symbol
```
{: .bg-dark .text-light .p-3}

### Convertendo símbolos em strings {#convertendo-simbolos-em-strings}
---

Para converter um símbolo em uma string, usamos o método <code class="text-white-50 text-light">to_s</code>.

```ruby
simbolo = :idade
texto = simbolo.to_s
puts texto    # A saída será "idade"
puts texto.class   # A saída será String
```
{: .bg-dark .text-light .p-3}

## Resumo {#resumo}
---

Neste artigo, aprofundamos nosso conhecimento sobre tipos de dados em Ruby, explorando conceitos fundamentais e características específicas de cada tipo.

Começamos entendendo **conceitos importantes** como objetos, classes, instâncias, métodos e variáveis, que são a base para compreender como Ruby trabalha com dados. Aprendemos que em Ruby tudo é objeto e que cada tipo de dado é representado por uma classe específica.

Exploramos os **tipos numéricos**:
- **Integer**: números inteiros (positivos, negativos e zero) com operações matemáticas e métodos como <code class="text-white-50 text-light">even?</code>, <code class="text-white-50 text-light">odd?</code>, <code class="text-white-50 text-light">abs</code>
- **Float**: números com vírgula (decimais) com métodos para arredondamento como <code class="text-white-50 text-light">round</code>, <code class="text-white-50 text-light">ceil</code> e <code class="text-white-50 text-light">floor</code>

Conhecemos os **tipos textuais e simbólicos**:
- **String**: textos que podem ser manipulados com métodos como <code class="text-white-50 text-light">upcase</code>, <code class="text-white-50 text-light">downcase</code>, <code class="text-white-50 text-light">length</code>, <code class="text-white-50 text-light">strip</code> e <code class="text-white-50 text-light">gsub</code>, além da interpolação de variáveis
- **Symbol**: identificadores eficientes usados principalmente como chaves em hashes

Vimos os **tipos de coleção**:
- **Array**: listas ordenadas de itens acessados por índices, com métodos como <code class="text-white-50 text-light">push</code>, <code class="text-white-50 text-light">pop</code>, <code class="text-white-50 text-light">length</code> e <code class="text-white-50 text-light">include?</code>
- **Hash**: tabelas de pares chave-valor para organizar dados relacionados, com métodos como <code class="text-white-50 text-light">keys</code>, <code class="text-white-50 text-light">values</code> e <code class="text-white-50 text-light">delete</code>

Entendemos os **tipos lógicos**:
- **Boolean**: valores <code class="text-white-50 text-light">true</code> e <code class="text-white-50 text-light">false</code> usados em condições e decisões
- **Operadores lógicos**: AND (<code class="text-white-50 text-light">&&</code>), OR (<code class="text-white-50 text-light">||</code>) e NOT (<code class="text-white-50 text-light">!</code>) para combinar condições
- **NilClass**: o valor especial <code class="text-white-50 text-light">nil</code> que representa ausência de valor

Por fim, aprendemos sobre **conversão entre tipos**, usando métodos como <code class="text-white-50 text-light">to_i</code>, <code class="text-white-50 text-light">to_f</code>, <code class="text-white-50 text-light">to_s</code> e <code class="text-white-50 text-light">to_sym</code> para transformar dados de um tipo em outro conforme necessário.

Cada tipo de dado tem suas características, capacidades e limitações específicas. Apesar de parecer muita informação no começo, com a prática você se familiarizará com esses conceitos e saberá quando e como usar cada tipo de dado em seus programas Ruby.
