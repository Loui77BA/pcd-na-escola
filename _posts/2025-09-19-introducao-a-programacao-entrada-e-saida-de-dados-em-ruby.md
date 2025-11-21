---
layout: post
title: "Introdução à Programação: Entrada e Saída de Dados em Ruby"
description: "Neste artigo vamos conhecer as maneiras que existem para inserir e capturar dados em Ruby usando comandos como puts, gets e outros conceitos que já conhecemos."
date: 2025-09-19 10:00:00 -0300
author: Louise Suelen
categories: [Programação]
tags: [programação, tecnologia]
permalink: /introducao-a-programacao-entrada-e-saida-de-dados-em-ruby/
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

        <!-- 2. Streams padrão: STDIN, STDOUT e STDERR -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#streams-padrao" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">2</span>
                Streams padrão: STDIN, STDOUT e STDERR
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#o-que-sao-streams" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">2.1</span>
                        O que são streams?
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#stdin-standard-input" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">2.2</span>
                        STDIN: Standard Input
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#stdout-standard-output" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">2.3</span>
                        STDOUT: Standard Output
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#stderr-standard-error" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">2.4</span>
                        STDERR: Standard Error
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#em-outras-palavras" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">2.5</span>
                        Em outras palavras
                    </a>
                </li>
            </ul>
        </li>

        <!-- 3. Como o Ruby mostra mensagens: o comando puts -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#como-o-ruby-mostra-mensagens-o-comando-puts" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">3</span>
                Como o Ruby mostra mensagens: o comando puts
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#por-que-ele-pula-linha-sozinho" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">3.1</span>
                        Por que ele pula linha sozinho?
                    </a>
                </li>
            </ul>
        </li>

        <!-- 4. Comando print -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#comando-print" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">4</span>
                Comando print
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#quando-usar-puts-ou-print" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.1</span>
                        Quando usar puts ou print?
                    </a>
                </li>
            </ul>
        </li>

        <!-- 5. Como o Ruby recebe informações: o comando gets -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#como-o-ruby-recebe-informacoes-o-comando-gets" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">5</span>
                Como o Ruby recebe informações: o comando gets
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#como-resolver-isso" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">5.1</span>
                        Como resolver isso?
                    </a>
                </li>
            </ul>
        </li>

        <!-- 6. Dica: a partir de agora crie seus programas -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#dica-a-partir-de-agora-crie-seus-programas" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">6</span>
                Dica: a partir de agora crie seus programas
            </a>
        </li>

        <!-- 7. Criando um programa com o conhecimento aprendido até aqui -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#criando-um-programa-com-o-conhecimento-aprendido-ate-aqui" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">7</span>
                Criando um programa com o conhecimento aprendido até aqui
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#explicando-o-codigo" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">7.1</span>
                        Explicando o código
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#conversao-segura-de-tipo" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">7.2</span>
                        Conversão segura de tipo
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#continuando-a-explicacao-do-codigo" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">7.3</span>
                        Continuando a explicação do código
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#programa-em-execucao" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">7.4</span>
                        Programa em execução
                    </a>
                </li>
            </ul>
        </li>

        <!-- 8. Resumo -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#resumo" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">8</span>
                Resumo
            </a>
        </li>
    </ul>
---

Uma das partes mais fundamentais de um programa é a capacidade de interagir com o usuário. Justamente por isso, neste artigo vamos conhecer as maneiras que existem para inserir e capturar dados em Ruby.

<div class="text-center">
    <img src="https://miro.medium.com/v2/resize:fit:1400/1*PMcPZ8mOKFRiGHWiIjjDvg.png" aria-hidden="true" class="img-fluid">
</div>

## Apresentação {#apresentacao}
---

Até esse momento estamos inserindo dados nas variáveis, nas estruturas dos programas e etc., mas tudo isso está sendo feito diretamente no código. Ou seja, nós estamos alterando o código para mudar os dados, pré-definindo valores e não permitindo que esses dados sejam inseridos durante a execução do programa.

Mas como fazer para que a pessoa possa inserir dados durante a execução do programa? É aí que entram os comandos de entrada e saída de dados.

Entrada e saída (I/O, de Input/Output) são a forma como um programa conversa com o “mundo externo”.

- **Entrada (Input)**: é o processo de receber dados da pessoa por algum dispositivo de entrada, como o teclado, mouse, touchscreen, etc. Também pode acontecer ao receber dados de arquivos, bancos de dados, sensores e por aí vai. Todas as formas que as pessoas ou sistemas tem para fornecer dados ao programa são consideradas entradas.

- **Saída (Output)**: é o processo de enviar dados do programa para algum dispositivo de saída, como a tela do computador, impressora, alto-falantes, etc. Também pode acontecer ao salvar dados em arquivos, bancos de dados, ou enviar informações para outros sistemas. Todas as formas que o programa tem para comunicar informações para as pessoas ou outros sistemas são consideradas saídas.

Por exemplo, quando você digita algo no teclado, está fornecendo uma entrada para o programa. Quando o programa exibe uma mensagem na tela, está realizando uma saída.

Por isso é tão importante entender como funcionam os comandos de entrada e saída de dados em Ruby, para que possamos criar programas interativos e dinâmicos.

## Streams padrão: STDIN, STDOUT e STDERR {#streams-padrao}
---

Antes de aprender os comandos de Ruby que recebem e exibem informações, é importante entender como o programa se comunica com o ambiente fora dele, ou seja, como ele recebe dados e como ele envia respostas.

Para isso, Ruby (assim como quase todas as linguagens) utiliza um sistema chamado streams.

### O que são streams? {#o-que-sao-streams}
---

Em português, podemos entender stream como um fluxo de dados, algo que está “correndo” de um lugar para outro, como um rio. Esses fluxos são caminhos pelos quais a informação passa:

- A informação pode entrar no programa (como quando a pessoa digita algo no teclado).
- A informação pode sair do programa (como quando o programa mostra alguma coisa na tela).
- A informação pode ser uma mensagem de erro, que também sai do programa, mas de um jeito separado.

Esses caminhos já existem automaticamente quando você executa um programa Ruby no terminal. Por isso, chamamos eles de streams padrão.

Ruby possui três streams padrão.

### STDIN: Standard Input (Em português: Entrada Padrão) {#stdin-standard-input}
---

O STDIN é o fluxo de entrada, ou seja, por onde o programa recebe informações de fora. Na prática, quando você digita algo no teclado e aperta Enter, esse texto não vai “direto” para o Ruby. Ele passa pelo STDIN, que entrega esse texto ao programa.

Quando um comando para capturar informações é usado quem está trabalhando por trás dos panos é o STDIN. 

### STDOUT: Standard Output (Em português: Saída Padrão) {#stdout-standard-output}
---

O STDOUT é o fluxo de saída normal. É por onde o programa envia para fora aquilo que ele quer mostrar à pessoa usuária. Por exemplo, quando você usa o comando <code class="text-white-50 text-light">puts</code> para exibir uma mensagem na tela, essa mensagem é enviada pelo STDOUT.

Quando escrevemos:

```ruby
puts "Olá, mundo!"
```
{: .bg-dark .text-light .p-3}

O Ruby envia a mensagem para o STDOUT, que por sua vez exibe no terminal.

É como se o programa dissesse: "Terminal, aqui está a mensagem que quero mostrar.”

### STDERR: Standard Error (Em português: Erro Padrão) {#stderr-standard-error}
---

O STDERR é o fluxo de saída de erros. Ele é usado para enviar mensagens de erro ou avisos quando algo dá errado no programa. Por exemplo, se você tentar dividir um número por zero, o Ruby vai gerar um erro e enviar essa mensagem pelo STDERR.

O STDERR é muito parecido com o STDOUT: também envia mensagens para o terminal. A diferença é que o STDERR é usado especificamente para erros, enquanto o STDOUT é usado para mensagens normais do programa.

**Mas por que separar?**

Porque isso permite que o terminal trate erros e saídas comuns de formas diferentes. Por exemplo, você pode redirecionar as mensagens de erro para um arquivo separado, enquanto mantém as mensagens normais na tela.

### Em outras palavras {#em-outras-palavras}
---

Imagine que um programa é como uma conversa:

- **Saída (output)** é quando o programa fala com a pessoa.
- **Entrada (input)** é quando a pessoa responde ao programa.

O Ruby precisa de comandos específicos para isso, e é aí que entram os comandos de entrada e saída de dados.

## Como o Ruby mostra mensagens: o comando puts {#como-o-ruby-mostra-mensagens-o-comando-puts}
---

Já conhecemos o comando <code class="text-white-50 text-light">puts</code>, ele mostra um texto na tela e pula para a linha de baixo depois de escrever.

Por exemplo: 

```ruby
puts "Olá, mundo!"
puts "Bem-vindo ao Ruby!"
```
{: .bg-dark .text-light .p-3}

No terminal teremos algo como:

```ruby
Olá, mundo!
Bem-vindo ao Ruby!
```
{: .bg-dark .text-light .p-3}

Observe que cada <code class="text-white-50 text-light">puts</code> escreve uma linha e pula para a próxima ficando um texto embaixo do outro.

### Por que ele pula linha sozinho? {#por-que-ele-pula-linha-sozinho}
---

Porque é assim que ele foi projetado. O nome <code class="text-white-50 text-light">puts</code> vem de "put string" (colocar string), e ele sempre adiciona uma nova linha após a string que você quer mostrar.

## Comando print {#comando-print}
---

Outro comando que podemos usar para mostrar mensagens na tela é o <code class="text-white-50 text-light">print</code>. Ele funciona de forma semelhante ao <code class="text-white-50 text-light">puts</code>, mas com uma diferença importante: ele não pula para a linha de baixo depois de escrever.

Por exemplo: 

```ruby
print "Olá, mundo! "
print "Bem-vindo ao Ruby!"
```
{: .bg-dark .text-light .p-3}

No terminal teremos algo como:

```ruby
Olá, mundo! Bem-vindo ao Ruby!
```
{: .bg-dark .text-light .p-3}

Observe que o <code class="text-white-50 text-light">print</code> escreve tudo na mesma linha, sem pular para a próxima.

Isso é muito usado para perguntas, porque deixa o cursor na mesma linha do texto da pergunta, facilitando a leitura.

### Quando usar puts ou print? {#quando-usar-puts-ou-print}
---

- Use <code class="text-white-50 text-light">puts</code> quando quiser que a mensagem seja exibida e pule para a próxima linha automaticamente.
- Use <code class="text-white-50 text-light">print</code> quando quiser que a mensagem seja exibida sem pular para a próxima linha, permitindo que o cursor fique na mesma linha.

## Como o Ruby recebe informações: o comando gets {#como-o-ruby-recebe-informacoes-o-comando-gets}
---

Agora que já sabemos como mostrar mensagens, vamos aprender a ler algo digitado pela pessoa usuária. Para isso, usamos o comando <code class="text-white-50 text-light">gets</code>.

O <code class="text-white-50 text-light">gets</code> lê uma linha de texto que a pessoa digita no teclado e retorna esse texto para o programa. Geralmente, usamos o <code class="text-white-50 text-light">gets</code> junto com uma variável para armazenar o que foi digitado.

Ele:

1. espera a pessoa digitar alguma coisa
2. lê o texto
3. devolve esse texto para o programa
4. sempre inclui a tecla <kbd>Enter</kbd> no final, isso vira um <code class="text-white-50 text-light">\n</code> (quebra de linha) no texto retornado.

O que isso quer dizer? Que se a pessoa digitar <code class="text-white-50 text-light">"Louise"</code> e apertar <kbd>Enter</kbd>, o <code class="text-white-50 text-light">gets</code> vai guardar o conteúdo <code class="text-white-50 text-light">"Louise\n"</code> (com a quebra de linha no final).

Por que isso acontece? Porque o <kbd>Enter</kbd> é necessário para indicar que a pessoa terminou de digitar e quer enviar o texto para o programa e o <code class="text-white-50 text-light">gets</code> captura tudo que foi digitado, incluindo essa quebra de linha criada pelo <kbd>Enter</kbd>.

### Como resolver isso? {#como-resolver-isso}
---

Para remover a quebra de linha que o <code class="text-white-50 text-light">gets</code> adiciona no final do texto, usamos o método <code class="text-white-50 text-light">chomp</code>.

<code class="text-white-50 text-light">chomp</code> é um método que "corta" a última parte do texto, que no caso é a quebra de linha.

Lembrando que métodos são ações que os objetos podem fazer, já vimos isso no artigo anterior sobre tipos de dados. Então nesse caso, o objeto é a string retornada pelo <code class="text-white-50 text-light">gets</code> e o método é o <code class="text-white-50 text-light">chomp</code> que vai ter a ação de "cortar" (remover) a quebra de linha do final.

Com o uso do <code class="text-white-50 text-light">chomp</code>, a informação guardada na variável pelo <code class="text-white-50 text-light">gets</code> não terá mais a quebra de linha no final, ou seja, será exatamente o que a pessoa digitou, sem o <code class="text-white-50 text-light">\n</code> no final.

Como usar o <code class="text-white-50 text-light">gets</code> com o <code class="text-white-50 text-light">chomp</code>? 

Para responder a essa pergunta, vamos criar um pequeno programa que pergunta o nome da pessoa e depois exibe uma mensagem personalizada.

```ruby
print "Qual é o seu nome? "
nome = gets.chomp
puts "Olá, #{nome}! Receba as boas-vindas ao Ruby!"
```
{: .bg-dark .text-light .p-3}

O que foi feito aqui?

Fizemos o seguinte:

1. Usamos o <code class="text-white-50 text-light">print</code> para perguntar o nome da pessoa, deixando o cursor na mesma linha.
2. Usamos o <code class="text-white-50 text-light">gets.chomp</code> para ler o que a pessoa digitou e remover a quebra de linha.
3. Armazenamos o nome digitado na variável <code class="text-white-50 text-light">nome</code>.
4. Usamos o <code class="text-white-50 text-light">puts</code> para exibir uma mensagem personalizada usando o nome que foi digitado.

Se você se lembrar da definição de método que foi apresentada no artigo <a href="https://pcdnaescola.com.br/introducao-a-programacao-tipos-de-dados-parte-ii/#o-que-e-um-metodo" target="_blank">Introdução à Programação: Tipos de Dados - Parte II</a>, vai se lembrar que a forma de usar um método é:

```ruby
objeto.nome_do_metodo(argumentos_opcionais)
```
{: .bg-dark .text-light .p-3}

Aqui, <code class="text-white-50 text-light">objeto</code> é o objeto que você quer que faça algo, <code class="text-white-50 text-light">nome_do_metodo</code> é o nome da ação que você quer que ele faça, e <code class="text-white-50 text-light">argumentos_opcionais</code> são informações extras que você pode passar para o método, se for preciso.

No caso do <code class="text-white-50 text-light">chomp</code>, o objeto é a string retornada pelo <code class="text-white-50 text-light">gets</code> (o texto que a pessoa digitou), o nome do método é <code class="text-white-50 text-light">chomp</code> e não precisamos passar nenhum argumento extra.

Por isso escrevemos:

```ruby
gets.chomp
``` 
{: .bg-dark .text-light .p-3}

Isso significa: "Pegue o texto que a pessoa digitou (o objeto retornado pelo <code class="text-white-50 text-light">gets</code>) e aplique o método <code class="text-white-50 text-light">chomp</code> para remover a quebra de linha no final."

E é assim que usamos o <code class="text-white-50 text-light">gets</code> junto com o <code class="text-white-50 text-light">chomp</code> para ler informações do usuário de forma limpa e sem quebras de linha indesejadas.

## Dica: a partir de agora crie seus programas {#dica-a-partir-de-agora-crie-seus-programas}
---

Até aqui muito do que estava sendo apresentado poderia ser testado diretamente no console interativo do Ruby (IRB).

Não é que isso não seja mais possível, mas a partir de agora, para que você possa praticar melhor e criar programas mais completos, é interessante que você comece a criar arquivos <code class="text-white-50 text-light">.rb</code> com seus códigos.

No artigo <a href="https://pcdnaescola.com.br/introducao-a-programacao-ola-mundo-em-ruby/#criando-uma-pasta-para-o-projeto" target="_blank">Introdução à Programação: Olá Mundo em Ruby</a> você encontra um passo a passo de como criar uma pasta para o seu projeto e criar arquivos <code class="text-white-50 text-light">.rb</code> para colocar seus códigos.

Dessa forma você poderá revisitar seus códigos sempre que quiser, além de criar uma linha do tempo dos seus aprendizados e da sua evolução na programação.

O IRB é ótimo para testes rápidos, mas criar arquivos <code class="text-white-50 text-light">.rb</code> vai te ajudar a desenvolver suas habilidades de programação de forma mais estruturada.

## Criando um programa com o conhecimento aprendido até aqui {#criando-um-programa-com-o-conhecimento-aprendido-ate-aqui}
---

Antes de avançar ainda mais, vamos criar um programa para trabalhar todos os conceitos que aprendemos até aqui.

Conceitos esses que estão sendo apresentados desde os artigos anteriores como:

- <a href="https://pcdnaescola.com.br/introducao-a-programacao-ola-mundo-em-ruby/" target="_blank">Introdução à Programação: Olá Mundo em Ruby</a>
- <a href="https://pcdnaescola.com.br/introducao-a-programacao-conhecendo-e-usando-o-irb/" target="_blank">Introdução à Programação: Conhecendo e Usando o IRB</a>
- <a href="https://pcdnaescola.com.br/introducao-a-programacao-tipos-de-dados/" target="_blank">Introdução à Programação: Tipos de Dados</a>
- <a href="https://pcdnaescola.com.br/introducao-a-programacao-tipos-de-dados-parte-ii/" target="_blank">Introdução à Programação: Tipos de Dados - Parte II</a>

O programa que vamos criar deve:

1. Perguntar o nome do estudante
2. Perguntar a turma do estudante
3. Perguntar a disciplina que está sendo avaliada
4. Perguntar a primeira nota
5. Perguntar a segunda nota
6. Perguntar a terceira nota
7. Calcular a média das notas
8. Exibir uma mensagem personalizada com o nome, turma, disciplina, média do estudante e se ele foi aprovado ou reprovado (considerando a média mínima para aprovação como 7.0)

Uma coisa boa é: Antes de começar a sair digitando o código, faça um rascunho do que você quer fazer, isso ajuda a organizar suas ideias e evita que você se perca no meio do caminho.

Vamos criar o arquivo <code class="text-white-50 text-light">01-calcula-media.rb</code> e colocar o seguinte código:

```ruby
nome = ""
turma = ""
disciplina = ""
nota1 = 0.0
nota2 = 0.0
nota3 = 0.0
media = 0.0
aprovado = false

print "Qual é seu nome? "
nome = gets.chomp

print "Qual é a sua turma? "
turma = gets.chomp

print "Qual disciplina está sendo avaliada? "
disciplina = gets.chomp

print "Digite a primeira nota: "
nota1 = Float(gets.chomp)

print "Digite a segunda nota: "
nota2 = Float(gets.chomp)

print "Digite a terceira nota: "
nota3 = Float(gets.chomp)

media = (nota1 + nota2 + nota3) / 3

aprovado =  media >= 7.0

puts "Olá, #{nome} da turma #{turma}!"
puts "A média final da disciplina #{disciplina} é #{media.round(2)}."

puts "Sua situação é: #{aprovado ? 'Aprovado' : 'Reprovado'}."
```
{: .bg-dark .text-light .p-3}

Depois salve e execute o programa no terminal com o comando:

```bash
ruby 01-calcula-media.rb
```
{: .bg-dark .text-light .p-3}

### Explicando o código {#explicando-o-codigo}
---

Primeiramente declaramos todas as variáveis que vamos usar no programa e inicializamos elas com valores padrão.

```ruby
nome = ""
turma = ""
disciplina = ""
nota1 = 0.0
nota2 = 0.0
nota3 = 0.0
media = 0.0
aprovado = false
```
{: .bg-dark .text-light .p-3}

**O que acontece aqui?**

- <code class="text-white-50 text-light">nome = ""</code>: Inicializa a variável nome como uma string vazia.
- <code class="text-white-50 text-light">turma = ""</code>: Inicializa a variável turma como uma string vazia.
- <code class="text-white-50 text-light">disciplina = ""</code>: Inicializa a variável disciplina como uma string vazia.
- <code class="text-white-50 text-light">nota1, nota2, nota3 = 0.0</code>: Inicializa as variáveis de notas como números de ponto flutuante (decimais) com valor 0.
- <code class="text-white-50 text-light">media = 0.0</code>: Inicializa a variável media como um número de ponto flutuante com valor 0.
- <code class="text-white-50 text-light">aprovado = false</code>: Inicializa a variável aprovado como um valor booleano falso.

Depois vem as entradas de dados (input) onde perguntamos as informações para a pessoa usuária e armazenamos nas variáveis correspondentes.

Perguntando o nome da pessoa:

```ruby
print "Qual é seu nome? "
nome = gets.chomp
```
{: .bg-dark .text-light .p-3}

**O que acontece aqui?**

- <code class="text-white-50 text-light">print "Qual é seu nome? "</code>: Exibe a pergunta na tela sem pular para a próxima linha. PS. ainda deixamos um espaço depois da interrogação para a resposta da pessoa não ficar grudada na pergunta.
- <code class="text-white-50 text-light">nome = gets.chomp</code>: Lê a resposta digitada pela pessoa, remove a quebra de linha com <code class="text-white-50 text-light">chomp</code> e armazena o valor na variável <code class="text-white-50 text-light">nome</code>.

Perguntando a turma da pessoa:

```ruby
print "Qual é a sua turma? "
turma = gets.chomp
```
{: .bg-dark .text-light .p-3}

Aqui acontece a mesma coisa que acontece na pergunta do nome, só que agora a resposta é armazenada na variável <code class="text-white-50 text-light">turma</code>.

Perguntando a disciplina que está sendo avaliada:

```ruby
print "Qual disciplina está sendo avaliada? "
disciplina = gets.chomp
```
{: .bg-dark .text-light .p-3}

Aqui acontece o mesmo que acontece nas perguntas anteriores, só que agora a resposta é armazenada na variável <code class="text-white-50 text-light">disciplina</code>.

### Conversão segura de tipo {#conversao-segura-de-tipo}
---

Depois passamos a perguntar as notas e a executar um processo chamado conversão segura de tipo. Isso porque o <code class="text-white-50 text-light">gets.chomp</code> sempre retorna uma string (texto), e como as notas são números decimais, precisamos converter essa string para o tipo numérico.

Mesmo que a pessoa digite:

```ruby
7.5
```
{: .bg-dark .text-light .p-3}

O Ruby vai entender isso como:

```ruby
"7.5" (texto)
```
{: .bg-dark .text-light .p-3}

E texto não pode ser somado nem dividido, então precisamos converter esse texto para um número de verdade.

Poderiamos usar o <code class="text-white-50 text-light">to_f</code> para fazer essa conversão, como foi mostrado no tópico de conversão entre tipos de dados no artigo <a href="https://pcdnaescola.com.br/introducao-a-programacao-tipos-de-dados-parte-ii/#conversao-entre-tipos-de-dados" target="_blank">Introdução à Programação: Tipos de Dados - Parte II</a>? Sim, poderiamos.

<code class="text-white-50 text-light">.to_f</code> é uma forma rápida de converter um texto para float (número decimal), assim como existem o <code class="text-white-50 text-light">.to_i</code> para converter para inteiro. Mas, <code class="text-white-50 text-light">to_f</code> não é a melhor opção para esse caso. Ele tem um comportamento perigoso quando a pessoa digita algo errado.

Imagine que a pessoa digita texto ao invés de número, como por exemplo:

```ruby
"abc".to_f   # vira 0.0
"banana".to_f # vira 0.0
"dez".to_f    # vira 0.0
```
{: .bg-dark .text-light .p-3}

Ou seja, <code class="text-white-50 text-light">to_f</code> não gera um erro quando a conversão falha porque a pessoa digitou algo inválido, ele simplesmente converte tudo que é inválido para <code class="text-white-50 text-light">0.0</code>.

Se a pessoa digitar errado um texto, o programa não vai avisar, o programa não vai ser interrompido, ele vai continuar funcionando normalmente, mas a média calculada pode ficar errada porque uma ou mais notas podem ter sido convertidas para <code class="text-white-50 text-light">0.0</code>.

### Continuando a explicação do código {#continuando-a-explicacao-do-codigo}
---

Para evitar esse problema, usamos a função <code class="text-white-50 text-light">Float()</code> para fazer a conversão segura de tipo. Ela tenta converter o texto para número decimal, mas se a conversão falhar (porque a pessoa digitou algo inválido), ela gera um erro e interrompe o programa, avisando que algo está errado.

Por isso perguntamos as notas assim:

```ruby
print "Digite a primeira nota: "
nota1 = Float(gets.chomp)

print "Digite a segunda nota: "
nota2 = Float(gets.chomp)

print "Digite a terceira nota: "
nota3 = Float(gets.chomp)
```
{: .bg-dark .text-light .p-3}

Mostramos a pergunta com o <code class="text-white-50 text-light">print</code>, lemos a resposta com o <code class="text-white-50 text-light">gets.chomp</code> e convertemos para número decimal com o <code class="text-white-50 text-light">Float()</code>, armazenando o resultado nas variáveis <code class="text-white-50 text-light">nota1</code>, <code class="text-white-50 text-light">nota2</code> e <code class="text-white-50 text-light">nota3</code>.

Depois calculamos a média das notas:

```ruby
media = (nota1 + nota2 + nota3) / 3
```
{: .bg-dark .text-light .p-3}

Aqui somamos as três notas e dividimos por 3 para obter a média, armazenando o resultado na variável <code class="text-white-50 text-light">media</code>.

Como na Matemática, a média é a soma dos valores dividida pela quantidade de valores e usamos parênteses para garantir que a soma seja feita antes da divisão.

Tudo em ponto flutuante (números decimais).

Depois verificamos se a pessoa foi aprovada ou reprovada:

```ruby
aprovado = media >= 7.0
```
{: .bg-dark .text-light .p-3}

Fazemos uma comparação para verificar se a média é maior ou igual a 7.0. O resultado dessa comparação (verdadeiro ou falso) é armazenado na variável <code class="text-white-50 text-light">aprovado</code>.

Por fim exibimos a mensagem personalizada com todas as informações:

```ruby
puts "Olá, #{nome} da turma #{turma}!"
```
{: .bg-dark .text-light .p-3}

Aqui <code class="text-white-50 text-light">#{nome}</code> e <code class="text-white-50 text-light">#{turma}</code> são interpolação de strings (ou seja, inserir o valor da variável dentro do texto) e nesse caso exibimos o nome e a turma da pessoa.

<code class="text-white-50 text-light">puts</code> exibe a mensagem na tela e pula para a próxima linha.

Depois exibimos a média final da disciplina com arredondamento para 2 casas decimais:

```ruby
puts "A média final da disciplina #{disciplina} é #{media.round(2)}."
```
{: .bg-dark .text-light .p-3}

<code class="text-white-50 text-light">media.round(2)</code> arredonda o valor da média para 2 casas decimais antes de exibir. Lembrando que <code class="text-white-50 text-light">round()</code> é um método que pode ser usado em números para arredondar o valor. O número dentro dos parênteses indica quantas casas decimais queremos manter.

Finalmente exibimos a situação de aprovação ou reprovação:

```ruby
puts "Sua situação é: #{aprovado ? 'Aprovado' : 'Reprovado'}."
```
{: .bg-dark .text-light .p-3}

O que isso significa? 

Aqui estamos usando um operador ternário para decidir o que exibir com base no valor da variável <code class="text-white-50 text-light">aprovado</code>.

Ou seja, se <code class="text-white-50 text-light">aprovado</code> for verdadeiro (<code class="text-white-50 text-light">true</code>), a mensagem exibida será "Aprovado". Se for falso (<code class="text-white-50 text-light">false</code>), a mensagem exibida será "Reprovado".

<code class="text-white-50 text-light">#{aprovado ? 'Aprovado' : 'Reprovado'}</code> quer dizer: "Se a variável <code class="text-white-50 text-light">aprovado</code> for verdadeira, exiba 'Aprovado', caso contrário, exiba 'Reprovado'."

O ? é um operador ternário. Ternário significa que ele trabalha com três partes: uma condição, o que fazer se a condição for verdadeira, e o que fazer se a condição for falsa.

Observe bem:

```ruby
#{aprovado ? 'Aprovado' : 'Reprovado'}
```
{: .bg-dark .text-light .p-3}

Vamos parte por parte:

- <code class="text-white-50 text-light">aprovado</code>: é a condição que estamos verificando (se a pessoa foi aprovada ou não).
- <code class="text-white-50 text-light">?</code>: indica o começo do operador ternário que é usado para fazer uma escolha baseada na condição (se aprovado for verdadeiro).
- <code class="text-white-50 text-light">'Aprovado'</code>: é o valor que será retornado se a condição for verdadeira.
- <code class="text-white-50 text-light">:</code>: separa o valor verdadeiro do valor falso.
- <code class="text-white-50 text-light">'Reprovado'</code>: é o valor que será retornado se a condição for falsa.
- O resultado final é inserido na string que será exibida pelo <code class="text-white-50 text-light">puts</code>.

Então se a pessoa tiver uma média maior ou igual a 7.0, a variável <code class="text-white-50 text-light">aprovado</code> será verdadeira, e a mensagem exibida será "Aprovado". Caso contrário, a mensagem exibida será "Reprovado".

É este o fluxo completo do programa, desde a entrada de dados até a saída de informações, passando pelo processamento dos dados (cálculo da média e verificação de aprovação).

### Programa em execução {#programa-em-execucao}
---

Aqui está um exemplo de como o programa se comporta quando executado:

```bash
parallels@ubuntu:~/curso-ruby$ ruby 01-calcula-media.rb
Qual é seu nome? Louise
Qual é a sua turma? 7º B
Qual disciplina está sendo avaliada? Matemática
Digite a primeira nota: 5.3
Digite a segunda nota: 2.6
Digite a terceira nota: 8.1
Olá, Louise da turma 7º B!
A média final da disciplina Matemática é 5.33.
Sua situação é: Reprovado.
parallels@ubuntu:~/curso-ruby$ 
```
{: .bg-dark .text-light .p-3}

Agora vamos inserir uma nota errada só para ver a conversão segura de tipo em ação:

```bash
parallels@ubuntu:~/curso-ruby$ ruby 01-calcula-media.rb
Qual é seu nome? Louise
Qual é a sua turma? 7º B
Qual disciplina está sendo avaliada? Matemática
Digite a primeira nota: 9.7
Digite a segunda nota: 2.1
Digite a terceira nota: abdcefg
<internal:kernel>:214:in `Float': invalid value for Float(): "abdcefg" (ArgumentError)
	from 01-calcula-media.rb:26:in `<main>'
parallels@ubuntu:~/curso-ruby$ 
```
{: .bg-dark .text-light .p-3}

Aqui a pessoa digitou <code class="text-white-50 text-light">abdcefg</code> como terceira nota, que não é um número válido. O programa gerou um erro e foi interrompido, avisando que o valor é inválido para conversão para Float. Haverá um momento em nossa série de artigos onde aprenderemos a lidar melhor com erros, mas por enquanto é importante entender que esse comportamento é desejado para evitar cálculos errados.

Agora vamos testar a condição de aprovação:

```bash
parallels@ubuntu:~/curso-ruby$ ruby 01-calcula-media.rb
Qual é seu nome? Louise
Qual é a sua turma? 7º B
Qual disciplina está sendo avaliada? Matemática
Digite a primeira nota: 7.5
Digite a segunda nota: 8.1
Digite a terceira nota: 9.4
Olá, Louise da turma 7º B!
A média final da disciplina Matemática é 8.33.
Sua situação é: Aprovado.
parallels@ubuntu:~/curso-ruby$ 
```
{: .bg-dark .text-light .p-3}

Aqui a pessoa teve uma média maior que 7.0, então a mensagem exibida indica que ela foi aprovada.

## Resumo {#resumo}
---

Neste artigo aprendemos sobre os conceitos de entrada e saída de dados em Ruby, entendendo como o programa interage com o usuário através dos comandos <code class="text-white-50 text-light">puts</code>, <code class="text-white-50 text-light">print</code> e <code class="text-white-50 text-light">gets</code>.

Também exploramos os streams padrão do Ruby: STDIN, STDOUT e STDERR, que são os canais pelos quais o programa recebe e envia informações. 

Além disso, criamos um programa completo que pergunta informações ao usuário, calcula a média de notas e exibe uma mensagem personalizada com o resultado, aplicando conceitos como interpolação de strings, conversão segura de tipos e operadores ternários.

Claro que muitos desses conceitos serão revisitados e aprofundados em artigos futuros, mas o importante é conhecer o básico para começar a criar programas.

Você deve ter observado que foram apresentados conceitos que não foram falados nos artigos anteriores, como o operador ternário (<code class="text-white-50 text-light">?</code> e <code class="text-white-50 text-light">:</code>) e a conversão segura de tipos com a função <code class="text-white-50 text-light">Float()</code>. Eles foram apresentados somente no código na hora da construção do programa.

Por que isso foi feito assim? Não teria sido melhor seguir pelo caminho conhecido e usar recursos como o <code class="text-white-50 text-light">to_f</code> por exemplo? Não seria melhor, mas seria confortável e são coisas diferentes.

Em programação é muito comum as pessoas seguirem caminhos lineares (linear é quando tudo é apresentado de forma sequencial, um passo após o outro, sem grandes saltos ou desvios). Isso gera uma sensação de segurança, conforto e controle, a pessoa sente que está dominando o assunto.

No geral isso é muito bom, principalmente se o curso ou tutorial for pago, porque não gera frustrações e a pessoa sente que está evoluindo. Só que no longo prazo isso tem um efeito negativo do qual eu fui e sou vítima: o medo de errar.

Seguimos tantos caminhos lineares que quando nos deparamos com algo novo, diferente ou que foge do padrão, sentimos medo de errar, medo de não entender, medo de não conseguir seguir a trilha. Isso é uma verdadeira porcaria, porque programação é sobre resolver problemas, e para resolver problemas precisamos explorar o desconhecido, precisamos errar, precisamos experimentar.

Eu acredito que ninguém aprende a programar conhecendo tudo primeiro para depois tentar fazer algo. Aprendemos a programar fazendo, errando, tentando de novo, explorando o desconhecido.

É por isso que eu escolhi apresentar alguns conceitos novos no meio do caminho, para que você comece a se acostumar com a ideia de que programação é sobre explorar o desconhecido, é sobre errar e tentar de novo.

A quebra da previsibilidade (linearidade) é dolorosa, desconfortável e dá vontade de desistir, eu sei disso porque já passei por isso muitas vezes. Mas é um passo necessário para quem quer aprender a programar.

Quando aprendemos um idioma novo, não começamos decorando todas as regras gramaticais, conjugando todos os verbos e aprendendo todas as palavras. Começamos com o básico, erramos muito, falamos errado, escrevemos errado, mas aos poucos vamos pegando o jeito.

Como? PRATICANDO. Vamos praticando e conhecendo novas palavras e regras aos poucos, conforme precisamos delas.

É nisso que eu acredito, na prática, na experimentação, no erro como parte do processo de aprendizado. Então eu vou sim inserir coisas novas no meio do caminho, para que você comece a se acostumar com isso.

Nos próximos artigos vamos praticar ainda mais, adicionando novos conceitos, fazendo perguntas e criando programas cada vez mais interessantes.