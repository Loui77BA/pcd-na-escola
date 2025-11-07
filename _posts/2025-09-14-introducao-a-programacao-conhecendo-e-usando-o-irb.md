---
layout: post
title: "Introdução à Programação: Conhecendo e Usando o IRB"
description: "Neste artigo, vamos explorar o IRB, um ambiente interativo para programação em Ruby. Ele permite testar códigos rapidamente e aprender os conceitos básicos da linguagem."
date: 2025-09-14 10:00:00 -0300
author: Louise Suelen
categories: [Programação]
tags: [programação, tecnologia]
permalink: /introducao-a-programacao-conhecendo-e-usando-o-irb/
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

        <!-- 2. Iniciando o IRB -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#iniciando-o-irb" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">2</span>
                Iniciando o IRB
            </a>
        </li>

        <!-- 3. Testando o IRB -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#testando-o-irb" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">3</span>
                Testando o IRB
            </a>
        </li>

        <!-- 4. Testando números no IRB -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#testando-numeros-no-irb" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">4</span>
                Testando números no IRB
            </a>
        </li>

        <!-- 5. Combinando texto e números no IRB -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#combinando-texto-e-numeros-no-irb" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">5</span>
                Combinando texto e números no IRB
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

Neste artigo, vamos explorar o IRB (Interactive Ruby), um ambiente interativo que permite as pessoas testarem códigos Ruby rapidamente. O IRB é uma ferramenta essencial para quem está começando a aprender programação em Ruby.

<div class="text-center">
    <img src="https://ruby-doc.org/docs/ruby-doc-bundle/Tutorial/part_01/first_steps/03.gif" aria-hidden="true" class="img-fluid">
</div>

## Apresentação {#apresentacao}
---

IRB é uma sigla (abreviação) para "Interactive Ruby" em português, significa "Ruby Interativo". Ele é um ambiente de linha de comando que permite executar comandos Ruby e ver os resultados imediatamente. 

O IRB é instalado automaticamente junto com o Ruby, ele é bastante útil porque permite ver rapidamente como o código funciona, para entender assuntos iniciais de programação, como variáveis, tipos de dados, operadores e estruturas de controle ele é ótimo.

É importante dizer que a ideia não é programar projetos completos no IRB, mas sim usar ele como uma ferramenta para aprender e experimentar com o código Ruby. Ao longo desse artigo vamos ver como ele funciona e como você pode usá-lo.

## Iniciando o IRB {#iniciando-o-irb}
---

Para iniciar o IRB, você precisa ter o Ruby instalado no seu computador. Depois é só abrir o terminal, se estiver no Ubuntu pode usar o atalho <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> para abrir o terminal rapidamente.

Com o terminal aberto, digite o seguinte comando para iniciar o IRB:

```bash
irb
```
{: .bg-dark .text-light .p-3}

No meu terminal eu fiz assim:

```bash
parallels@ubuntu:~$ irb
```
{: .bg-dark .text-light .p-3}

pressionei <kbd>Enter</kbd> e o IRB foi iniciado. Quando o IRB é iniciado, após o <kbd>Enter</kbd>, no terminal aparece algo assim:

```ruby
irb(main):001> 
```
{: .bg-dark .text-light .p-3}

## Testando o IRB {#testando-o-irb}
---

Quando o IRB está ativo comandos de terminal como:

- <code class="text-white-50 text-light">ls</code> - para listar arquivos e pastas
- <code class="text-white-50 text-light">cd</code> - para mudar de pasta
- <code class="text-white-50 text-light">pwd</code> - para mostrar o endereço da pasta atual

Não funcionam mais, pois o IRB está esperando comandos em Ruby.

Para sair do IRB, você pode digitar o comando:

```ruby
exit
```
{: .bg-dark .text-light .p-3}

Aí sim você volta para o terminal normal.

Mas, uma vez que você digita irb e pressiona <kbd>Enter</kbd>, você está dentro do IRB e pode começar a digitar comandos Ruby.

Para testar isso, vamos usar o comando que aprendemos no artigo anterior, o comando <code class="text-white-50 text-light">puts</code>, que serve para mostrar mensagens na tela.

```ruby
irb(main):001> puts "Olá mundo!"
Olá mundo!
=> nil
irb(main):002>
```
{: .bg-dark .text-light .p-3}

No exemplo acima, digitamos <code class="text-white-50 text-light">puts "Olá mundo!"</code> e pressionamos <kbd>Enter</kbd>. O IRB executou o comando e mostrou a mensagem "Olá mundo!" na tela. Depois disso, o IRB mostrou <code class="text-white-50 text-light">=> nil</code>, que indica que o comando não retornou nenhum valor útil (no sentido de resultado de alguma operação, conta ou expressão).

Agora vamos fazer outro teste incrementando (adicionando) o elemento <code class="text-white-50 text-light">\n</code> (barra invertida + letra n) dentro da mensagem, e depois dele outra mensagem, para ver como o IRB lida com isso.

```ruby
irb(main):008> puts "Olá mundo! \nIRB está funcionando."
Olá mundo! 
IRB está funcionando.
=> nil
irb(main):009> 
```
{: .bg-dark .text-light .p-3}

O que aconteceu aqui? O elemento <code class="text-white-50 text-light">\n</code> é um caractere especial, caractere especial é um símbolo que representa algo diferente do que ele parece. Nesse caso, o <code class="text-white-50 text-light">\n</code> não é apenas uma barra invertida seguida da letra n, ele representa uma ação que o computador deve executar, nesse caso a ação que o <code class="text-white-50 text-light">\n</code> representa é "pular para a próxima linha".

Então, quando digitamos <code class="text-white-50 text-light">puts "Olá mundo! \nIRB está funcionando."</code>, o IRB interpretou o <code class="text-white-50 text-light">\n</code> como um comando para pular para a próxima linha, e por isso a mensagem "IRB está funcionando." apareceu na linha de baixo.

Se tivessemos colocado o texto "IRB está funcionando." afastado do <code class="text-white-50 text-light">\n</code>, o resultado seria diferente:

```ruby
irb(main):009> puts "Olá mundo! \n IRB está funcionando."
Olá mundo! 
 IRB está funcionando.
=> nil
irb(main):010> 
```
{: .bg-dark .text-light .p-3}

Nesse caso, a mensagem "IRB está funcionando." apareceu na linha de baixo, mas com um espaço antes dela, porque colocamos um espaço entre o <code class="text-white-50 text-light">\n</code> e o texto então o IRB respeitou esse espaço.

## Testando números no IRB {#testando-numeros-no-irb}
---

O que acontece se digitarmos no IRB o seguinte comando:

```ruby
puts "10 + 10"
```
{: .bg-dark .text-light .p-3}

O resultado será:

```ruby
10 + 10
=> nil
```
{: .bg-dark .text-light .p-3}

Ou seja, o IRB apenas mostrou o texto "10 + 10" na tela, mas não fez a conta de somar 10 + 10. Isso aconteceu porque colocamos os números dentro de aspas, então o IRB interpretou tudo como texto e não como uma operação matemática.

Para fazer o IRB calcular a soma de 10 + 10, precisamos digitar o comando sem aspas, assim:

```ruby
irb(main):015> puts 10 + 10
20
=> nil
irb(main):016> 
```
{: .bg-dark .text-light .p-3}

Assim o IRB fez a conta e mostrou o resultado 20 na tela.

Podemos fazer outras operações matemáticas no IRB, até mesmo sem usar o comando <code class="text-white-50 text-light">puts</code>. Por exemplo:

```ruby
irb(main):016> 10 + 10
=> 20
irb(main):017> 10 - 5
=> 5
irb(main):018> 10 * 10
=> 100
irb(main):019> 10 / 10
=> 1
irb(main):020> 
```
{: .bg-dark .text-light .p-3}

No exemplo acima, fizemos várias operações matemáticas: soma, subtração, multiplicação e divisão. O IRB mostrou o resultado de cada operação após o símbolo <code class="text-white-50 text-light">=></code>.

Observe que usamos:

- <kbd>*</kbd> (asterisco) para multiplicação
- <kbd>/</kbd> (barra) para divisão
- <kbd>-</kbd> (menos ou hífen) para subtração
- <kbd>+</kbd> (mais) para adição

Esses são os símbolos matemáticos padrão não só no Ruby, mas em muitas outras linguagens de programação também.

Na série <a href="https://pcdnaescola.com.br/artigos#categoria-computa%C3%A7%C3%A3o-para-iniciantes" target="_blank" rel="noopener">Computação para Iniciantes</a> foi abordada a ideia de que o computador é uma máquina elétrica que segue instruções. A forma de representar símbolos, não só matemáticos, não é ilimitada.

Por isso precisamos combinar símbolos e comandos para representar ações que queremos que o computador execute.

Por isso frequentemente usamos símbolos matemáticos como <kbd>+</kbd>, <kbd>-</kbd>, <kbd>*</kbd> e <kbd>/</kbd> para representar operações matemáticas em linguagens de programação como o Ruby.

## Combinando texto e números no IRB {#combinando-texto-e-numeros-no-irb}
---

Agora que já sabemos como mostrar mensagens na tela e fazer operações matemáticas no IRB, vamos ver como combinar texto e números em um único comando.

```ruby
irb(main):006> puts "Vamos somar 10 + 10. \nO resultado do cálculo é #{10 + 10}."
Vamos somar 10 + 10. 
O resultado do cálculo é 20.
=> nil
```
{: .bg-dark .text-light .p-3}

O comando acima usa o <code class="text-white-50 text-light">#{}</code>, para inserir o resultado da operação matemática dentro da mensagem de texto. O que está dentro das chaves <code class="text-white-50 text-light">{}</code> é avaliado como código Ruby para ser calculado, não como texto apenas para ser exibido e o resultado é inserido na mensagem junto com o restante do texto que está fora das chaves e este sim é tratado como texto normal.

Outras operações podem ser feitas como:

```ruby
irb(main):007> puts "Vamos multiplicar 10 vezes 10. \nO resultado do cálculo é #{10 * 10}."
Vamos multiplicar 10 vezes 10. 
O resultado do cálculo é 100.
=> nil
```
{: .bg-dark .text-light .p-3}

No exemplo acima, usamos o <code class="text-white-50 text-light">#{}</code> para calcular a multiplicação de 10 vezes 10 e inserir o resultado na mensagem de texto.

Outro exemplo:

```ruby
irb(main):008> puts "Vamos subtrair 10 menos 10. \nO resultado do cálculo é #{10 - 10}."
Vamos subtrair 10 menos 10. 
O resultado do cálculo é 0.
=> nil
```
{: .bg-dark .text-light .p-3}

No exemplo acima, usamos o <code class="text-white-50 text-light">#{}</code> para calcular a subtração de 10 menos 10 e inserir o resultado na mensagem de texto.

Outro exemplo:

```ruby
irb(main):009> puts "Vamos dividir 10 por 10. \nO resultado do cálculo é #{10 / 10}."
Vamos dividir 10 por 10. 
O resultado do cálculo é 1.
=> nil
irb(main):010> 
```
{: .bg-dark .text-light .p-3}

No exemplo acima, usamos o <code class="text-white-50 text-light">#{}</code> para calcular a divisão de 10 por 10 e inserir o resultado na mensagem de texto.

## Resumo {#resumo}
---

Neste artigo, exploramos o IRB, um ambiente interativo para programação em Ruby. Vimos como iniciar o IRB, testar comandos básicos como <code class="text-white-50 text-light">puts</code> para mostrar mensagens na tela, fazer operações matemáticas e combinar texto e números em um único comando. 

O IRB é uma ferramenta poderosa para aprender e experimentar com o código Ruby, permitindo que você veja os resultados imediatamente.

A partir de agora vamos usar o IRB para trabalhar alguns conceitos de programação em Ruby mais a frente. Experimente usar o IRB para praticar os comandos que aprendemos até agora, teste os retornos e veja como o Ruby responde aos seus comandos.

O importante é adquirir familiaridade com o ambiente e com a linguagem, para que você se sinta confortável, pois isso será necessário mais adiante.