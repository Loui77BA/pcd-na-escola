---
layout: post
title: "Introdução à Programação: Expressões Condicionais em Ruby"
description: "Neste artigo, vamos aprender a usar expressões condicionais em Ruby para tomar decisões no código e validar entradas de dados nos programas."
date: 2025-09-20 10:00:00 -0300
author: Louise Suelen
categories: [Programação]
tags: ["programação", "tecnologia"]
permalink: /introducao-a-programacao-expressoes-condicionais-em-ruby/
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

        <!-- 2. O que são expressões condicionais -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#o-que-sao-expressoes-condicionais" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">2</span>
                O que são expressões condicionais
            </a>
        </li>

        <!-- 3. Operadores de comparação e lógicos -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#operadores-de-comparacao-e-logicos" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">3</span>
                Operadores de comparação e lógicos
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#operadores-de-comparacao" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">3.1</span>
                        Operadores de comparação
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#operadores-logicos" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">3.2</span>
                        Operadores lógicos
                    </a>
                </li>
            </ul>
        </li>

        <!-- 4. Conhecendo o if -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#conhecendo-o-if" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">4</span>
                Conhecendo o if
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#o-que-e-esse-include" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.1</span>
                        O que é esse .include?
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#vamos-praticar-mais-um-pouco-com-o-if" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.2</span>
                        Vamos praticar mais um pouco com o if
                    </a>
                </li>
            </ul>
        </li>

        <!-- 5. Else e Elseif -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#else-e-elseif" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">5</span>
                Else e Elseif
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#else" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">5.1</span>
                        else
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#elsif" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">5.2</span>
                        elsif
                    </a>
                </li>
            </ul>
        </li>

        <!-- 6. Refazendo o programa dos Estados com Else e Elsif -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#refazendo-o-programa-dos-estados-com-else-e-elsif" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">6</span>
                Refazendo o programa dos Estados com Else e Elsif
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#quais-as-diferencas-dessa-versao-para-a-anterior" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">6.1</span>
                        Quais as diferenças dessa versão para a anterior?
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#mas-o-que-e-esse-return" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">6.2</span>
                        Mas, o que é esse return?
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#por-que-usar-return-e-bom" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">6.3</span>
                        Por que usar return é bom?
                    </a>
                </li>
            </ul>
        </li>

        <!-- 7. Resumo -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#resumo" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">7</span>
                Resumo
            </a>
        </li>
    </ul>
---

Neste artigo, vamos aprender a usar expressões condicionais em Ruby para tomar decisões no código e validar entradas de dados nos programas, utilizando estruturas como <code class="text-white-50 text-light">if</code>, <code class="text-white-50 text-light">else</code> e <code class="text-white-50 text-light">elsif</code>.

<div class="text-center">
    <img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fn6fzxw5n9y8qmjyny44v.png" aria-hidden="true" class="img-fluid border">
</div>

## Apresentação {#apresentacao}
---

No artigo anterior, explicamos que um programa feito em Ruby pode conversar com o mundo fora dele usando entrada e saída de dados, também chamado de I/O (imput e output no Inglês). Existem três caminhos principais para essa comunicação:

- **STDIN**:
  - O STDIN é como a “porta de entrada”, onde o programa recebe informações da pessoa que está usando ele.
- **STDOUT**:
  - O STDOUT é a “saída normal”, onde o programa mostra mensagens na tela para a pessoa.
- **STDERR**:
  - Já o STDERR serve para mostrar mensagens de erro quando acontece algum problema.

Falamos também sobre os comandos <code class="text-white-50 text-light">puts</code> e <code class="text-white-50 text-light">print</code>, que servem para mostrar mensagens no terminal. O <code class="text-white-50 text-light">puts</code> sempre pula para a linha de baixo depois de mostrar a mensagem, enquanto o <code class="text-white-50 text-light">print</code> continua na mesma linha.

Aprendemos a usar o <code class="text-white-50 text-light">gets</code> para pegar o que o usuário digita, o <code class="text-white-50 text-light">chomp</code> para tirar a quebra de linha desse texto e a guardar tudo em variáveis.

No final, criamos um programinha simples: ele pede para a pessoa digitar o nome, a turma, a disciplina e três notas. Depois, transforma as notas de texto para número usando <code class="text-white-50 text-light">Float()</code>, calcula a média e diz se a pessoa passou ou não.

Também observamos que, se tentarmos transformar em número alguma coisa que não é número, o Ruby vai dar erro.

No programa de cálculo de notas, ao digitar as letras **abdcefg** no campo da terceira nota, o sistema apresentou uma falha e exibiu uma mensagem informando que não foi possível converter o texto em número.

A execução do programa resultou na seguinte saída:

```ruby
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

Isso aconteceu porque o programa tentou aplicar a função <code class="text-white-50 text-light">Float()</code> em informações que não eram números (eram letras), isso tornou impossível continuar com o processamento e com a execução do programa.

Mas, e se quisermos evitar que o programa pare por causa desse erro? Como fazer? Como podemos avisar o usuário que ele digitou algo errado e pedir para tentar de novo?

É aí que entram as expressões condicionais. Elas são fundamentais para tomar decisões dentro do código. Com elas, conseguimos verificar se o valor digitado pela pessoa é mesmo um número antes de tentar convertê-lo. Se for um número, tudo bem, o programa continua. Se não for, podemos mostrar uma mensagem de erro amigável e pedir para a pessoa digitar novamente.

Esse não é o único caso em que podemos usar as expressões condicionais. Elas servem, por exemplo, para fazer o programa tomar decisões diferentes de acordo com o que a pessoa escolher, checar se uma senha está certa, controlar quem pode acessar algo ou até mudar a forma como o programa funciona, dependendo do que acontece.

Portanto, adquirir conhecimento sobre essas estruturas torna o código mais robusto e dinâmico, permitindo o tratamento eficiente de situações inesperadas de maneira objetiva. Vamos explorar como usar essas expressões condicionais em Ruby para melhorar nossos programas.

## O que são expressões condicionais {#o-que-sao-expressoes-condicionais}
---

Uma expressão condicional é uma expressão que será usada para tomar uma decisão. Em outras palavras, é uma forma de dizer ao programa:

- Se alguma condição for verdadeira, faça uma coisa;
- caso contrário, faça outra coisa (ou não faça nada).

No dia a dia, nós fazemos isso o tempo todo:

- Se estiver chovendo, leve o guarda-chuva.
- Se a nota for 7 ou mais, a pessoa passa.
- Se a senha estiver certa, pode entrar; se não, não pode.

No código, essas decisões são implementadas (construídas) usando estruturas como <code class="text-white-50 text-light">if</code>, <code class="text-white-50 text-light">else</code>, <code class="text-white-50 text-light">elsif</code> e, em alguns casos, <code class="text-white-50 text-light">case</code>.

O ponto principal é: expressões condicionais são baseadas em condições que podem ser verdadeiras ou falsas. Essas condições são avaliadas pelo programa, e dependendo do resultado (verdadeiro ou falso), o programa decide o que fazer a seguir.

Normalmente, as expressões condicionais são construídas usando:

- Operadores de comparação:
  - <code class="text-white-50 text-light">==</code> (igual a),
  - <code class="text-white-50 text-light">!=</code> (diferente de),
  - <code class="text-white-50 text-light">&gt;</code> (maior que),
  - <code class="text-white-50 text-light">&lt;</code> (menor que),
  - <code class="text-white-50 text-light">&gt;=</code> (maior ou igual a),
  - <code class="text-white-50 text-light">&lt;=</code> (menor ou igual a).
- Operadores lógicos:
  - <code class="text-white-50 text-light">&&</code> (e),
  - <code class="text-white-50 text-light">||</code> (ou),
  - <code class="text-white-50 text-light">!</code> (não).
- Combinação de variáveis:
  - <code class="text-white-50 text-light">idade &gt;= 18</code> (verifica se a idade é maior ou igual a 18),
  - <code class="text-white-50 text-light">senha == "segredo"</code> (verifica se a senha é igual a "segredo"),
  - E muito mais.

## Operadores de comparação e lógicos {#operadores-de-comparacao-e-logicos}
---

Para montar as condições, usadas nas expressões condicionais, utilizamos operadores de comparação e operadores lógicos.

### Operadores de comparação {#operadores-de-comparacao}
---

São usados para comparar dois valores. O resultado dessas comparações é sempre um valor booleano: <code class="text-white-50 text-light">true</code> (verdadeiro) ou <code class="text-white-50 text-light">false</code> (falso).

São usados para comparar dois valores:

- <code class="text-white-50 text-light">==</code> : Verifica se dois valores são iguais.
- <code class="text-white-50 text-light">!=</code> : Verifica se dois valores são diferentes.
- <code class="text-white-50 text-light">&gt;</code> : Verifica se o valor da esquerda é maior que o da direita.
- <code class="text-white-50 text-light">&lt;</code> : Verifica se o valor da esquerda é menor que o da direita.
- <code class="text-white-50 text-light">&gt;=</code> : Verifica se o valor da esquerda é maior ou igual ao da direita.
- <code class="text-white-50 text-light">&lt;=</code> : Verifica se o valor da esquerda é menor ou igual ao da direita.

**Observação**: quando usamos <code class="text-white-50 text-light">&lt;=</code> ou <code class="text-white-50 text-light">&gt;=</code>, valores iguais também fazem a condição ser verdadeira. Por exemplo: <code class="text-white-50 text-light">5 &lt;= 5</code> retorna <code class="text-white-50 text-light">true</code>, assim como <code class="text-white-50 text-light">5 &gt;= 5</code> também retorna <code class="text-white-50 text-light">true</code>.

Isso acontece porque o símbolo <code class="text-white-50 text-light">=</code> indica "igual a", então, nesses casos, estamos verificando se o valor é menor ou igual (ou maior ou igual) ao outro valor. Se os valores já forem iguais, a condição será verdadeira.

Vamos ver alguns exemplos de como esses operadores funcionam:

```ruby
5 == 5      # true
5 != 3      # true
10 > 7      # true
2 < 1       # false
7 >= 7      # true
3 <= 2      # false
```
{: .bg-dark .text-light .p-3}

Aqui, usamos os operadores de comparação para verificar se os números são iguais, diferentes, maiores ou menores. O resultado de cada comparação é um valor booleano: <code class="text-white-50 text-light">true</code> ou <code class="text-white-50 text-light">false</code>.

Também podemos comparar textos (strings):

```ruby
"Ruby" == "Ruby"    # true
"Ruby" == "ruby"    # false (maiúsculas e minúsculas fazem diferença)
"ana" != "joão"     # true
"ana" != "ana"      # false
```
{: .bg-dark .text-light .p-3}

O que foi feito aqui foi comparar os textos para ver se são iguais ou diferentes, levando em conta as letras maiúsculas e minúsculas, pois na computação, "Ruby" e "ruby" são considerados diferentes por que letras maiúsculas e minúsculas são tratadas como diferentes pelo computador. Para entender mais sobre isso leia a série de artigos sobre <a href="https://pcdnaescola.com.br/artigos#categoria-computa%C3%A7%C3%A3o-para-iniciantes" target="_blank" class="text-break" rel="noopener">Computação para Iniciantes</a>.

### Operadores lógicos {#operadores-logicos}
---

Os operadores lógicos são usados para combinar várias condições em uma única expressão condicional. Eles também retornam valores booleanos: <code class="text-white-50 text-light">true</code> (verdadeiro) ou <code class="text-white-50 text-light">false</code> (falso).

Eles permitem combinar mais de uma condição:

- <code class="text-white-50 text-light">&&</code> (E lógico): Retorna <code class="text-white-50 text-light">true</code> se ambas as condições forem verdadeiras.
- <code class="text-white-50 text-light">||</code> (OU lógico): Retorna <code class="text-white-50 text-light">true</code> se pelo menos uma das condições for verdadeira.
- <code class="text-white-50 text-light">!</code> (NÃO lógico): Inverte o valor da condição (se for <code class="text-white-50 text-light">true</code>, torna-se <code class="text-white-50 text-light">false</code> e vice-versa).

Vamos aos exemplos:

Imagine que precisamos verificar se uma pessoa é maior de idade e se tem carteira de motorista para poder dirigir um carro. Podemos usar os operadores lógicos para combinar essas duas condições.

```ruby
idade = 0
tem_carteira = false
resposta = ""
pode_dirigir = false

# Vamos pedir os dados para a pessoa

print "Digite sua idade: "
idade = Integer(gets.chomp)

print "Você tem carteira de motorista? (sim / não): "
resposta = gets.chomp.downcase

pode_dirigir = (idade >= 18) && (resposta == "sim")

puts "Pode dirigir? #{pode_dirigir ? 'Sim' : 'Não'}"
```
{: .bg-dark .text-light .p-3}

Aqui, usamos o operador <code class="text-white-50 text-light">&&</code> para verificar se a pessoa é maior de idade (<code class="text-white-50 text-light">idade &gt;= 18</code>) **e** se ela tem carteira de motorista (<code class="text-white-50 text-light">resposta == "sim"</code>). A variável <code class="text-white-50 text-light">pode_dirigir</code> só será <code class="text-white-50 text-light">true</code> se ambas as condições forem verdadeiras.

**Observação**: Lembrando que o <code class="text-white-50 text-light">downcase</code> usado em <code class="text-white-50 text-light">resposta = gets.chomp.downcase</code> serve para transformar qualquer resposta em letras minúsculas, assim, tanto "Sim" quanto "sim" ou "SIM" serão tratados da mesma forma.

A saída da execução do programa foi a seguinte:

```ruby
parallels@ubuntu:~/curso-ruby$ ruby 02-pode-dirigir.rb 
Digite sua idade: 20
Você tem carteira de motorista? (sim / não): Não
Pode dirigir? Não
parallels@ubuntu:~/curso-ruby$ ruby 02-pode-dirigir.rb 
Digite sua idade: 30
Você tem carteira de motorista? (sim / não): Sim
Pode dirigir? Sim
parallels@ubuntu:~/curso-ruby$ ruby 02-pode-dirigir.rb 
Digite sua idade: 17
Você tem carteira de motorista? (sim / não): Sim
Pode dirigir? Não
parallels@ubuntu:~/curso-ruby$ 
```
{: .bg-dark .text-light .p-3}

Neste exemplo, a pessoa só pode dirigir se for maior de idade **e** tiver carteira de motorista. Se qualquer uma dessas condições for falsa, a resposta para a pergunta "Pode dirigir?" será "Não".

Agora para demonstrar o uso do operador <code class="text-white-50 text-light">||</code>, vamos criar um exemplo onde uma loja abre de segunda a sexta-feira e fecha nos finais de semana. Queremos verificar se a loja está aberta em um determinado dia.

```ruby
dia_da_semana = ""
loja_aberta = false

print "Digite o dia da semana: "
dia_da_semana = gets.chomp.downcase

loja_aberta = (dia_da_semana == "segunda-feira") || (dia_da_semana == "terça-feira") || (dia_da_semana == "quarta-feira") || (dia_da_semana == "quinta-feira") || (dia_da_semana == "sexta-feira")

puts "A loja está aberta? #{loja_aberta ? 'Sim' : 'Não'}"
```
{: .bg-dark .text-light .p-3}

Aqui, usamos o operador <code class="text-white-50 text-light">||</code> para verificar se o dia da semana é qualquer um dos dias úteis (segunda a sexta-feira). A variável <code class="text-white-50 text-light">loja_aberta</code> será <code class="text-white-50 text-light">true</code> se o dia for qualquer um desses dias, caso contrário, será <code class="text-white-50 text-light">false</code> (final de semana).

A saída da execução do programa foi a seguinte:

```ruby
parallels@ubuntu:~/curso-ruby$ ruby 03-ver-se-loja-esta-aberta.rb 
Digite o dia da semana: Domingo
A loja está aberta? Não
parallels@ubuntu:~/curso-ruby$ ruby 03-ver-se-loja-esta-aberta.rb 
Digite o dia da semana: segunda-feira
A loja está aberta? Sim
parallels@ubuntu:~/curso-ruby$ ruby 03-ver-se-loja-esta-aberta.rb 
Digite o dia da semana: terça-feira	
A loja está aberta? Sim
parallels@ubuntu:~/curso-ruby$ ruby 03-ver-se-loja-esta-aberta.rb 
Digite o dia da semana: sexta-feira
A loja está aberta? Sim
parallels@ubuntu:~/curso-ruby$ ruby 03-ver-se-loja-esta-aberta.rb 
Digite o dia da semana: Sábado
A loja está aberta? Não
parallels@ubuntu:~/curso-ruby$ 
```
{: .bg-dark .text-light .p-3}

Neste exemplo, a loja só estará aberta se o dia da semana for qualquer um dos dias úteis (segunda a sexta-feira). Se for sábado ou domingo, a resposta para a pergunta "A loja está aberta?" será "Não".

Agora vamos ver um exemplo do uso do operador <code class="text-white-50 text-light">!</code>. Suponha que queremos fazer um passeio somente se não estiver chovendo.

```ruby
esta_chovendo = false
pode_fazer_passeio = false
resposta = ""

print "Está chovendo? (sim / não): "
resposta = gets.chomp.downcase

esta_chovendo = (resposta == "sim")
pode_fazer_passeio = !esta_chovendo

puts "Pode fazer o passeio? #{pode_fazer_passeio ? 'Sim' : 'Não'}"
```
{: .bg-dark .text-light .p-3}

Aqui vamos explicar com mais calma o que foi feito, vamos prestar atenção nesse trecho do código:

```ruby
esta_chovendo = (resposta == "sim")
pode_fazer_passeio = !esta_chovendo
```
{: .bg-dark .text-light .p-3}

Na primeira linha, estamos verificando se a resposta da pessoa é "sim". Se for, a variável <code class="text-white-50 text-light">esta_chovendo</code> será <code class="text-white-50 text-light">true</code>, indicando que está chovendo. Se a resposta for "não", a variável será <code class="text-white-50 text-light">false</code>.

Na segunda linha, usamos o operador <code class="text-white-50 text-light">!</code> para inverter o valor de <code class="text-white-50 text-light">esta_chovendo</code>. Isso significa que:

- Se <code class="text-white-50 text-light">esta_chovendo</code> for <code class="text-white-50 text-light">true</code> (ou seja, está chovendo), então <code class="text-white-50 text-light">pode_fazer_passeio</code> será <code class="text-white-50 text-light">false</code> (não pode fazer o passeio).
- Se <code class="text-white-50 text-light">esta_chovendo</code> for <code class="text-white-50 text-light">false</code> (ou seja, não está chovendo), então <code class="text-white-50 text-light">pode_fazer_passeio</code> será <code class="text-white-50 text-light">true</code> (pode fazer o passeio).
- Por isso que a variável <code class="text-white-50 text-light">pode_fazer_passeio</code> recebe a negação de <code class="text-white-50 text-light">esta_chovendo</code>. Porque queremos que o passeio seja possível somente quando não estiver chovendo.
- Então se tem chuva não tem passeio! Se não tem chuva, aí sim pode rolar o passeio!

Em resumo o programa verifica se está chovendo e decide se a pessoa pode fazer o passeio com base nessa informação. Depois mostra a resposta na tela usando o comando <code class="text-white-50 text-light">puts</code>.

Explicando o:

```ruby
puts "Pode fazer o passeio? #{pode_fazer_passeio ? 'Sim' : 'Não'}"
```
{: .bg-dark .text-light .p-3}

Aqui, usamos o operador ternário <code class="text-white-50 text-light">? :</code> para decidir o que mostrar na mensagem. Se <code class="text-white-50 text-light">pode_fazer_passeio</code> for <code class="text-white-50 text-light">true</code>, mostramos "Sim"; se for <code class="text-white-50 text-light">false</code>, mostramos "Não".

Lembrando que o operador ternário serve para escolher entre dois valores usando uma única linha. Você usa quando quer responder a perguntas do tipo:

"Se isso for verdadeiro, devolva tal coisa; senão, devolva outra.”

A estrutura sempre vai ser:

```ruby
condição ? valor_se_verdadeiro : valor_se_falso
```
{: .bg-dark .text-light .p-3}

E ele sempre vai retornar um valor. No nosso caso, ele retorna "Sim" ou "Não" dependendo do valor de <code class="text-white-50 text-light">pode_fazer_passeio</code>.

Com isso, já temos o suficiente para construir condições simples em Ruby. 

Mas, e se quisermos fazer algo mais complexo, com várias condições diferentes? Se eu quiser retornar não apenas "Sim" ou "Não", mas também comandos diferentes dependendo do caso? Para isso, existem as estruturas condicionais completas, que serão apresentadas adiante neste artigo.

## Conhecendo o if {#conhecendo-o-if}
---

O <code class="text-white-50 text-light">if</code> é a forma mais simples de fazer uma escolha em Ruby. Ele serve para executar um pedaço de código só quando uma condição for verdadeira. A estrutura básica do <code class="text-white-50 text-light">if</code> é a seguinte:

```ruby
if condicao
  # comandos que serão executados se a condição for verdadeira
end
```
{: .bg-dark .text-light .p-3}

Aqui, se a <code class="text-white-50 text-light">condicao</code> for verdadeira (ou seja, se ela resultar em <code class="text-white-50 text-light">true</code>), os comandos dentro do bloco <code class="text-white-50 text-light">if</code> serão executados. Se a condição for falsa (resultar em <code class="text-white-50 text-light">false</code>), o programa simplesmente pula esses comandos e continua a execução após o <code class="text-white-50 text-light">end</code>.

Vamos refazer o exemplo do programa que verifica se a loja está aberta, mas agora usando o <code class="text-white-50 text-light">if</code>:

```ruby
dias_uteis = ["segunda-feira", "terca-feira", "quarta-feira", "quinta-feira", "sexta-feira"]
final_de_semana = ["sabado", "domingo"]
abreviacao_dias = {
  "segunda" => "segunda-feira",
  "terça" => "terca-feira",
  "quarta" => "quarta-feira",
  "quinta" => "quinta-feira",
  "sexta" => "sexta-feira",
}

print "Digite o dia da semana: "
dia_da_semana = gets.chomp.downcase

if dias_uteis.include?(dia_da_semana) || abreviacao_dias.key?(dia_da_semana)
  puts "A loja está aberta!"
end

if final_de_semana.include?(dia_da_semana)
  puts "A loja está fechada!"
end

if !dias_uteis.include?(dia_da_semana) && !final_de_semana.include?(dia_da_semana) && !abreviacao_dias.key?(dia_da_semana)
  puts "Você digitou #{dia_da_semana}, que não é um dia válido da semana."
  puts "dias válidos são: #{(dias_uteis + final_de_semana).join(', ')} ou suas abreviações: #{abreviacao_dias.keys.join(', ')}."
  puts "Programa encerrado."
end
```
{: .bg-dark .text-light .p-3}

Muita coisa né? Mas vamos explicar com calma o que foi feito linha por linha!

Primeiramente ao invés de criar uma variável para cada dia da semana, criamos duas listas (arrays) para armazenar os dias úteis e os finais de semana. Também criamos um dicionário (hash) para armazenar as abreviações dos dias da semana.

Perceba pela forma de escrever que:

```ruby
dias_uteis = ["segunda-feira", "terca-feira", "quarta-feira", "quinta-feira", "sexta-feira"]
final_de_semana = ["sabado", "domingo"]
```
{: .bg-dark .text-light .p-3}

São listas (arrays) que armazenam os dias úteis e os finais de semana. Enquanto que:

```ruby
abreviacao_dias = {
  "segunda" => "segunda-feira",
  "terça" => "terca-feira",
  "quarta" => "quarta-feira",
  "quinta" => "quinta-feira",
  "sexta" => "sexta-feira",
}
```
{: .bg-dark .text-light .p-3}

É um hash (dicionário) que mapeia as abreviações dos dias da semana para seus nomes completos as abreviações se tornam símbolos para os nomes.

Estamos usando essas estruturas para facilitar a verificação dos dias da semana.

Depois, pedimos para a pessoa digitar o dia da semana e armazenamos essa informação na variável <code class="text-white-50 text-light">dia_da_semana</code>.

Em seguida, usamos três estruturas <code class="text-white-50 text-light">if</code> para verificar se o dia digitado é um dia útil, um final de semana ou um dia inválido.

- No primeiro <code class="text-white-50 text-light">if</code>, verificamos se o dia digitado está na lista de dias úteis ou se é uma abreviação válida. Se for, mostramos a mensagem "A loja está aberta!".

- No segundo <code class="text-white-50 text-light">if</code>, verificamos se o dia digitado está na lista de finais de semana. Se for, mostramos a mensagem "A loja está fechada!".

- No terceiro <code class="text-white-50 text-light">if</code>, verificamos se o dia digitado não está em nenhuma das listas nem nas abreviações. Se for, mostramos uma mensagem informando que o dia digitado não é válido.

### O que é esse .include? {#o-que-e-esse-include}
---

O método <code class="text-white-50 text-light">include?</code> é usado para verificar se um determinado elemento está presente em uma lista (array) ou em uma string. Ele retorna <code class="text-white-50 text-light">true</code> se o elemento for encontrado e <code class="text-white-50 text-light">false</code> caso contrário.

Então estamos perguntando no código:

```ruby
if dias_uteis.include?(dia_da_semana) || abreviacao_dias.key?(dia_da_semana)
```
{: .bg-dark .text-light .p-3}

Se o valor armazenado em <code class="text-white-50 text-light">dia_da_semana</code> está presente na lista <code class="text-white-50 text-light">dias_uteis</code> ou se é uma chave válida no hash <code class="text-white-50 text-light">abreviacao_dias</code>.

Se a resposta for sim (ou seja, se o dia digitado for um dia útil ou uma abreviação válida), o código dentro do bloco <code class="text-white-50 text-light">if</code> será executado, mostrando a mensagem "A loja está aberta!".

### Vamos praticar mais um pouco com o if {#vamos-praticar-mais-um-pouco-com-o-if}
---

Vamos criar um programa que:

- Pede a pessoa para digitar o Estado do Brasil onde ela mora;
- Verifica se o Estado digitado é válido (está na lista dos 26 Estados brasileiros mais o Distrito Federal);
- Se a pessoa digitar a sigla do Estado (duas letras), o programa deve reconhecer e aceitar também desde que a sigla seja correta. Exemplo: SP para São Paulo, RJ para Rio de Janeiro, MG para Minas Gerais, etc;
- Se o Estado ou a sigla for válido, o programa deve mostrar uma mensagem dizendo "Você mora em [Nome do Estado] na Região [Nome da Região]";
- Se o Estado ou a sigla for inválido, o programa deve mostrar uma mensagem dizendo "Estado inválido. Fim do programa."

Antes de escrever o código vamos organizar o nosso pensamento de como o programa deve ser. Vamos montar o famoso "teste de mesa" para planejar o que deve ser feito.

Teste de mesa é uma técnica usada para simular a execução de um programa ou algoritmo, passo a passo, sem realmente rodar o código. É uma forma de planejar e entender como o programa deve funcionar antes de escrevê-lo.

O que precisamos fazer:

<div class="mermaid text-center" aria-hidden="true">
flowchart TD
    A[Início do Programa] --> B[Pedir para digitar o Estado ou a sigla]
    B --> C[Verificar se o Estado ou a sigla é válido]
    C --> D{Estado ou sigla válido?}
    D -->|Sim| E[Mostrar mensagem com o nome do Estado e Região]
    D -->|Não| F[Mostrar mensagem de Estado inválido]
    E --> G[Fim do Programa]
    F --> G[Fim do Programa]
</div>

<ol class="visually-hidden">
    <li>Início do Programa</li>
    <li>Pedir para digitar o Estado ou a sigla</li>
    <li>Verificar se o Estado ou a sigla é válido</li>
    <li>Estado ou sigla válido?
        <ul>
            <li>Se sim: Mostrar mensagem com o nome do Estado e Região</li>
            <li>Se não: Mostrar mensagem de Estado inválido</li>
        </ul>
    </li>
    <li>Fim do Programa</li>
</ol>

Agora que entendemos o fluxo das ações, vamos simular alguns casos de teste para garantir que estamos cobrindo todas as possibilidades de eventos que podem acontecer durante a execução do programa.

**Caso 1: A pessoa digita a sigla correta do Estado (exemplo: "SP" para São Paulo)**

Passos:

- Programa pede estado.

- A pessoa digita "SP".

- O programa vê que "SP" está no hash siglas.

- Ele converte "SP" para "São Paulo".

- Procura "São Paulo" no hash regioes e acha "Sudeste".

- Mostra: Você mora em São Paulo na Região Sudeste

**Caso 2: A pessoa digita o nome completo do Estado corretamente (exemplo: "Bahia")**

Passos:

- A pessoa digita "Bahia".

- O programa procura "Bahia" direto no hash regioes porque é o nome completo então não precisa converter nada.

- Acha.

- Região = "Nordeste".

- Mostra: Você mora em Bahia na Região Nordeste

**Caso 3: A pessoa digita uma sigla inválida (exemplo: "XX")**

Passos:

- A pessoa digita "XX".
- O programa vê que "XX" não está no hash siglas.
- Não acha o nome do Estado.
- Mostra: Estado inválido. Fim do programa.

**Caso 4: A pessoa digita um nome de Estado inválido (exemplo: "Atlantida")**

Passos:

- A pessoa digita "Atlantida".
- O programa procura "Atlantida" no hash regioes.
- Não acha.
- Mostra: Estado inválido. Fim do programa.

Para que serve essas simulações? Não são perca de tempo? De forma alguma! Elas ajudam a entender o fluxo do programa, identificar possíveis erros e garantir que todas as situações sejam tratadas corretamente antes de começar a escrever o código.

Pode parecer que o mais importante na hora de programar é decorar como escrever o código, mas na verdade o mais importante é entender o problema que você está tentando resolver e planejar como fazer isso de forma eficiente. Ou seja, você deve desenvolver a sua lógica de programação e não apenas decorar comandos.

Dito isso, vamos ao código do programa:

```ruby
# Hash que mapeia siglas para nomes completos dos Estados
siglas_para_estados = {
  "AC" => "Acre", "AL" => "Alagoas", "AP" => "Amapá", "AM" => "Amazonas",
  "BA" => "Bahia", "CE" => "Ceará", "DF" => "Distrito Federal",
  "ES" => "Espírito Santo", "GO" => "Goiás", "MA" => "Maranhão",
  "MT" => "Mato Grosso", "MS" => "Mato Grosso do Sul",
  "MG" => "Minas Gerais", "PA" => "Pará", "PB" => "Paraíba",
  "PR" => "Paraná", "PE" => "Pernambuco", "PI" => "Piauí",
  "RJ" => "Rio de Janeiro", "RN" => "Rio Grande do Norte",
  "RS" => "Rio Grande do Sul", "RO" => "Rondônia", "RR" => "Roraima",
  "SC" => "Santa Catarina", "SP" => "São Paulo", "SE" => "Sergipe",
  "TO" => "Tocantins"
}

# Hash que mapeia nome do Estado para sua respectiva Região
estados_para_regioes = {
  "Acre" => "Norte", "Amapá" => "Norte", "Amazonas" => "Norte",
  "Pará" => "Norte", "Rondônia" => "Norte", "Roraima" => "Norte",
  "Tocantins" => "Norte",

  "Alagoas" => "Nordeste", "Bahia" => "Nordeste", "Ceará" => "Nordeste",
  "Maranhão" => "Nordeste", "Paraíba" => "Nordeste", "Pernambuco" => "Nordeste",
  "Piauí" => "Nordeste", "Rio Grande do Norte" => "Nordeste",
  "Sergipe" => "Nordeste",

  "Espírito Santo" => "Sudeste",
  "Minas Gerais" => "Sudeste",
  "Rio de Janeiro" => "Sudeste",
  "São Paulo" => "Sudeste",

  "Paraná" => "Sul", "Rio Grande do Sul" => "Sul", "Santa Catarina" => "Sul",

  "Goiás" => "Centro-Oeste", "Mato Grosso" => "Centro-Oeste",
  "Mato Grosso do Sul" => "Centro-Oeste",
  "Distrito Federal" => "Centro-Oeste"
}

print "Digite o nome do Estado ou a sigla: "
estado_digitado = gets.chomp

# Tratamento da entrada
estado_digitado_maiusculo = estado_digitado.upcase
estado_digitado_formatado = estado_digitado.split.map(&:capitalize).join(" ")

estado_valido = nil

# 1. Verificar se é sigla (ex.: "SP")
if siglas_para_estados.key?(estado_digitado_maiusculo)
  estado_valido = siglas_para_estados[estado_digitado_maiusculo]
end

# 2. Verificar se é nome completo (ex.: "Bahia")
if estados_para_regioes.key?(estado_digitado_formatado)
  estado_valido = estado_digitado_formatado
end

# 3. Se nenhum deles for encontrado → inválido
if estado_valido.nil?
  puts "Estado inválido. Fim do programa."
end

# 4. Se for válido, mostrar região
if !estado_valido.nil?
  regiao = estados_para_regioes[estado_valido]
  puts "Você mora em #{estado_valido} na Região #{regiao}"
end
```
{: .bg-dark .text-light .p-3}

Agora parece que ficou complexo demais né? Mas calma que vamos explicar tudo linha por linha!

**1. Hash de siglas para nomes de Estados**

```ruby
# Hash que mapeia siglas para nomes completos dos Estados
siglas_para_estados = {
  "AC" => "Acre", "AL" => "Alagoas", "AP" => "Amapá", "AM" => "Amazonas",
  "BA" => "Bahia", "CE" => "Ceará", "DF" => "Distrito Federal",
  "ES" => "Espírito Santo", "GO" => "Goiás", "MA" => "Maranhão",
  "MT" => "Mato Grosso", "MS" => "Mato Grosso do Sul",
  "MG" => "Minas Gerais", "PA" => "Pará", "PB" => "Paraíba",
  "PR" => "Paraná", "PE" => "Pernambuco", "PI" => "Piauí",
  "RJ" => "Rio de Janeiro", "RN" => "Rio Grande do Norte",
  "RS" => "Rio Grande do Sul", "RO" => "Rondônia", "RR" => "Roraima",
  "SC" => "Santa Catarina", "SP" => "São Paulo", "SE" => "Sergipe",
  "TO" => "Tocantins"
}
```
{: .bg-dark .text-light .p-3}

<code class="text-white-50 text-light"># Hash que mapeia siglas para nomes completos dos Estados</code>: 

- Isso é um comentário. Comentários começam com # e não são executados pelo programa. 
- Servem para explicar o que o código faz. Neste caso serve para dizer que este hash associa siglas (como ‘BA’) aos nomes completos (como ‘Bahia’).

<code class="text-white-50 text-light">siglas_para_estados = { ... }</code>:

- Aqui o programa cria uma variável chamada <code class="text-white-50 text-light">siglas_para_estados</code>.
- O valor dessa variável é um hash (dicionário) que associa siglas de Estados aos seus nomes completos.
- Quando essa linha é executada, Ruby cria o hash completo na memória.
- Depois, sempre que o código precisar descobrir o nome do Estado a partir da sigla, vai olhar para esse hash usando algo como:

```ruby
siglas_para_estados["BA"]  # devolve "Bahia"
```
{: .bg-dark .text-light .p-3}

As próximas linhas dentro das chaves <code class="text-white-50 text-light">{ ... }</code> representam os pares chave-valor do hash, onde cada chave é uma sigla de Estado e o valor correspondente é o nome completo do Estado. Exemplo:

```ruby
"AC" => "Acre"
```
{: .bg-dark .text-light .p-3}

**2. Hash de Estado para Região**

```ruby
# Hash que mapeia nome do Estado para sua respectiva Região
estados_para_regioes = {
  "Acre" => "Norte", "Amapá" => "Norte", "Amazonas" => "Norte",
  "Pará" => "Norte", "Rondônia" => "Norte", "Roraima" => "Norte",
  "Tocantins" => "Norte",

  "Alagoas" => "Nordeste", "Bahia" => "Nordeste", "Ceará" => "Nordeste",
  "Maranhão" => "Nordeste", "Paraíba" => "Nordeste", "Pernambuco" => "Nordeste",
  "Piauí" => "Nordeste", "Rio Grande do Norte" => "Nordeste",
  "Sergipe" => "Nordeste",

  "Espírito Santo" => "Sudeste",
  "Minas Gerais" => "Sudeste",
  "Rio de Janeiro" => "Sudeste",
  "São Paulo" => "Sudeste",

  "Paraná" => "Sul", "Rio Grande do Sul" => "Sul", "Santa Catarina" => "Sul",

  "Goiás" => "Centro-Oeste", "Mato Grosso" => "Centro-Oeste",
  "Mato Grosso do Sul" => "Centro-Oeste",
  "Distrito Federal" => "Centro-Oeste"
}
```
{: .bg-dark .text-light .p-3}

<code class="text-white-50 text-light"># Hash que mapeia nome do Estado para sua respectiva Região</code>:

- Outro comentário explicando que este hash associa nomes de Estados às suas regiões.

<code class="text-white-50 text-light">estados_para_regioes = { ... }</code>:

- Cria uma variável chamada <code class="text-white-50 text-light">estados_para_regioes</code>.
- O valor é outro hash, mas agora:
  - As chaves são os nomes completos dos Estados.
  - Os valores são as regiões correspondentes (Norte, Nordeste, Sudeste, Sul, Centro-Oeste).
- Quando essa linha é executada, Ruby monta esse dicionário na memória.
- Mais tarde, quando tivermos o nome de um Estado válido, vamos perguntar:

```ruby
estados_para_regioes["Bahia"]  # devolve "Nordeste"
```
{: .bg-dark .text-light .p-3}

Ou seja, dado o nome do Estado, conseguimos descobrir a região usando esse hash.

**3. Lendo a entrada da pessoa**

```ruby
print "Digite o nome do Estado ou a sigla: "
estado_digitado = gets.chomp
```
{: .bg-dark .text-light .p-3}

<code class="text-white-50 text-light">print "Digite o nome do Estado ou a sigla: "</code>:

- <code class="text-white-50 text-light">print</code> escreve o texto "Digite o nome do Estado ou a sigla: " na tela, sem pular linha depois.
- Ruby exibe o texto e o cursor fica esperando a pessoa digitar algo no teclado.

<code class="text-white-50 text-light">estado_digitado = gets.chomp</code>:

<code class="text-white-50 text-light">gets</code> lê o que a pessoa digita até apertar <kbd>Enter</kbd>.

- Isso inclui a quebra de linha (<code class="text-white-50 text-light">\n</code>) que acontece quando a pessoa aperta <kbd>Enter</kbd>.

<code class="text-white-50 text-light">chomp</code> remove essa quebra de linha do final.

- Ou seja, fica só o texto digitado.
- O valor resultante (o texto digitado sem a quebra de linha) é armazenado na variável <code class="text-white-50 text-light">estado_digitado</code> para usarmos depois.
- Se a pessoa digitar BA → estado_digitado recebe "BA".
- Se digitar Bahia → recebe "Bahia".
- Se digitar rio de janeiro → recebe "rio de janeiro".
- O fluxo é:
  - O programa pausa na função <code class="text-white-50 text-light">gets</code> esperando a digitação.
  - Quando a pessoa aperta <kbd>Enter</kbd>, o texto digitado é capturado e armazenado na variável <code class="text-white-50 text-light">estado_digitado</code>.
  - A função <code class="text-white-50 text-light">chomp</code> remove a quebra de linha do final do texto (o <code class="text-white-50 text-light">\n</code>).
  - O valor final, sem a quebra de linha, fica armazenado em <code class="text-white-50 text-light">estado_digitado</code> para usarmos depois.

**4. Tratamento da entrada**

```ruby
# Tratamento da entrada
estado_digitado_maiusculo = estado_digitado.upcase
estado_digitado_formatado = estado_digitado.split.map(&:capitalize).join(" ")
```
{: .bg-dark .text-light .p-3}

<code class="text-white-50 text-light"># Tratamento da entrada</code>:

- Comentário explicando que agora vamos “preparar” a entrada para facilitar a validação.

<code class="text-white-50 text-light">estado_digitado_maiusculo = estado_digitado.upcase</code>:

- <code class="text-white-50 text-light">estado_digitado</code> é a string original digitada.
- <code class="text-white-50 text-light">.upcase</code> converte toda a string para letras maiúsculas.
  - Exemplos:
    - "ba" vira "BA"
    - "Ba" vira "BA"
    - "BA" continua "BA"
- Ruby pega o conteúdo atual de <code class="text-white-50 text-light">estado_digitado</code>, aplica o método <code class="text-white-50 text-light">upcase</code> e armazena o resultado na nova variável <code class="text-white-50 text-light">estado_digitado_maiusculo</code>.
- Isso vai ser útil para comparar com as siglas, que estão todas em maiúsculas no hash.

<code class="text-white-50 text-light">estado_digitado_formatado = estado_digitado.split.map(&:capitalize).join(" ")</code>:

Essa linha faz várias coisas conectadas então vamos dividir em partes.

<code class="text-white-50 text-light">estado_digitado.split</code>:

<code class="text-white-50 text-light">split</code> divide a string em palavras usando o espaço como separador, ou seja, cria uma lista (array) de palavras.
  - Exemplo: "rio de janeiro" vira ["rio", "de", "janeiro"] e "São Paulo" vira ["São", "Paulo"].

<code class="text-white-50 text-light">.map(&:capitalize)</code>:
  - <code class="text-white-50 text-light">map</code> percorre cada item do array e aplica uma transformação, que transformação? Nesse caso é o <code class="text-white-50 text-light">capitalize</code>.
  - <code class="text-white-50 text-light">&:capitalize é um atalho para dizer:
    - “Aplique o método <code class="text-white-50 text-light">.capitalize</code> em cada palavra” e o <code class="text-white-50 text-light">capitalize</code> transforma a primeira letra da palavra em maiúscula e o resto em minúscula.

Depois disso, o array que antes era ["rio", "de", "janeiro"] vira ["Rio", "De", "Janeiro"].

<code class="text-white-50 text-light">.join(" ")</code>:
  - Finalmente, <code class="text-white-50 text-light">join(" ")</code> pega o array de palavras transformadas e junta tudo de volta em uma única string, colocando um espaço entre cada palavra.
  - Então ["Rio", "De", "Janeiro"] vira "Rio De Janeiro".

Então a linha <code class="text-white-50 text-light">estado_digitado_formatado = estado_digitado.split.map(&:capitalize).join(" "):</code> quer dizer:

"Ei Ruby, pegue o que a pessoa digitou, que foi para dentro da variável <code class="text-white-50 text-light">estado_digitado</code>, divida em palavras usando o espaço como separador, transforme cada palavra para que a primeira letra fique maiúscula e o resto minúsculo, e depois junte tudo de volta em uma única string com espaços entre as palavras. Armazene esse resultado na variável <code class="text-white-50 text-light">estado_digitado_formatado</code>."

**5. Preparando a variável de controle**

```ruby
estado_valido = nil
```
{: .bg-dark .text-light .p-3}

Aqui criamos a variável <code class="text-white-50 text-light">estado_valido</code> e inicializamos com <code class="text-white-50 text-light">nil</code> (que significa "nenhum valor").

A ideia é: enquanto não tivermos certeza se o Estado digitado é válido, essa variável fica como <code class="text-white-50 text-light">nil</code>. Depois, se descobrirmos que é válido, vamos atribuir o nome do Estado a essa variável.

A partir de agora, as estruturas <code class="text-white-50 text-light">if</code> vão modificar essa variável dependendo do que for digitado.

**6. Verificar se é uma sigla**

```ruby
# 1. Verificar se é sigla (ex.: "SP")
if siglas_para_estados.key?(estado_digitado_maiusculo)
  estado_valido = siglas_para_estados[estado_digitado_maiusculo]
end
```
{: .bg-dark .text-light .p-3}

Na linha <code class="text-white-50 text-light">if siglas_para_estados.key?(estado_digitado_maiusculo)</code>:

<code class="text-white-50 text-light">siglas_para_estados.key?(...)</code> verifica se a chave (sigla) existe no hash <code class="text-white-50 text-light">siglas_para_estados</code>.

Por exemplo: se <code class="text-white-50 text-light">estado_digitado_maiusculo</code> for "SP", essa verificação retorna <code class="text-white-50 text-light">true</code> porque "SP" é uma chave válida no hash. Mas, se for "XX", retorna <code class="text-white-50 text-light">false</code> porque "XX" não está no hash.

Ruby pega o valor em <code class="text-white-50 text-light">estado_digitado_maiusculo</code>, pergunta ao hash <code class="text-white-50 text-light">siglas_para_estados</code> se essa chave existe usando o método <code class="text-white-50 text-light">key?</code>. Se existir, o bloco dentro do <code class="text-white-50 text-light">if</code> é executado, se não existir, o programa pula para o <code class="text-white-50 text-light">end</code> e continua a execução sem fazer nada que está dentro desse <code class="text-white-50 text-light">if</code>.

Na linha <code class="text-white-50 text-light">estado_valido = siglas_para_estados[estado_digitado_maiusculo]</code>:

O conteúdo só será executado se a condição do <code class="text-white-50 text-light">if</code> for verdadeira.

<code class="text-white-50 text-light">siglas_para_estados[estado_digitado_maiusculo]</code> acessa o hash <code class="text-white-50 text-light">siglas_para_estados</code> usando a sigla digitada (em maiúsculas) como chave e retorna o nome completo do Estado correspondente.

Por exemplo, se <code class="text-white-50 text-light">estado_digitado_maiusculo</code> for "SP", essa expressão retorna "São Paulo".

Ou seja, <code class="text-white-50 text-light">estado_valido</code> passa a guardar o nome completo do Estado correspondente à sigla digitada.

Se a condição do <code class="text-white-50 text-light">if</code> for falsa (ou seja, se a sigla digitada não existir no hash), o bloco dentro do <code class="text-white-50 text-light">if</code> não será executado, e <code class="text-white-50 text-light">estado_valido</code> permanecerá como <code class="text-white-50 text-light">nil</code>.

**7. Verificar se é nome completo**

```ruby
# 2. Verificar se é nome completo (ex.: "Bahia")
if estados_para_regioes.key?(estado_digitado_formatado)
  estado_valido = estado_digitado_formatado
end
```
{: .bg-dark .text-light .p-3}

A linha <code class="text-white-50 text-light">if estados_para_regioes.key?(estado_digitado_formatado)</code>:

Pergunta ao hash <code class="text-white-50 text-light">estados_para_regioes</code> se esse texto formatado que foi digitado é o nome de um Estado válido.

Por exemplo:

- Se for "Bahia", vai receber <code class="text-white-50 text-light">true</code> porque "Bahia" é uma chave válida no hash.
- Se for "Narnia", vai receber <code class="text-white-50 text-light">false</code> porque "Narnia" não está no hash então não é um Estado válido.

Ruby pega o valor de <code class="text-white-50 text-light">estado_digitado_formatado</code>, pergunta ao hash <code class="text-white-50 text-light">estados_para_regioes</code> se essa chave existe usando o método <code class="text-white-50 text-light">key?</code>. Se existir, o bloco dentro do <code class="text-white-50 text-light">if</code> é executado, se não existir, o programa pula para o <code class="text-white-50 text-light">end</code> e continua a execução sem fazer nada que está dentro desse <code class="text-white-50 text-light">if</code>.

Na linha <code class="text-white-50 text-light">estado_valido = estado_digitado_formatado</code>:

Se a condição do <code class="text-white-50 text-light">if</code> for verdadeira (ou seja, se o nome do Estado digitado for válido), o bloco dentro do <code class="text-white-50 text-light">if</code> será executado.

<code class="text-white-50 text-light">estado_valido = estado_digitado_formatado</code>: aqui se a pessoa digitou um nome completo de Estado válido, copiamos esse nome para <code class="text-white-50 text-light">estado_valido</code>.

Exemplo: se a pessoa digitou "Bahia", então <code class="text-white-50 text-light">estado_valido</code> passa a ser "Bahia".

**8. Tratando o caso inválido**

```ruby
# 3. Se nenhum deles for encontrado → inválido
if estado_valido.nil?
  puts "Estado inválido. Fim do programa."
end
```
{: .bg-dark .text-light .p-3}

Aqui verificamos se <code class="text-white-50 text-light">estado_valido</code> ainda é <code class="text-white-50 text-light">nil</code>.

A linha <code class="text-white-50 text-light">if estado_valido.nil?</code>: 

Usamos o método <code class="text-white-50 text-light">nil?</code> para checar se a variável <code class="text-white-50 text-light">estado_valido</code> não recebeu nenhum valor válido (ou seja, se continua sendo <code class="text-white-50 text-light">nil</code>).

Se for <code class="text-white-50 text-light">nil</code>, significa que a pessoa digitou algo que não é uma sigla válida nem um nome de Estado válido.

Na linha <code class="text-white-50 text-light">puts "Estado inválido. Fim do programa."</code>: exibimos uma mensagem informando que o Estado digitado é inválido e que o programa será encerrado.

**9. Tratando o caso válido**

```ruby
# 4. Se for válido, mostrar região
if !estado_valido.nil?
  regiao = estados_para_regioes[estado_valido]
  puts "Você mora em #{estado_valido} na Região #{regiao}"
end
```
{: .bg-dark .text-light .p-3}

<code class="text-white-50 text-light">if !estado_valido.nil?</code>:

Aqui verificamos se <code class="text-white-50 text-light">estado_valido</code> não é <code class="text-white-50 text-light">nil</code>.

Usamos o operador <code class="text-white-50 text-light">!</code> para negar a condição, ou seja, estamos perguntando: "Será que <code class="text-white-50 text-light">estado_valido</code> tem um valor válido?"

Se <code class="text-white-50 text-light">estado_valido</code> não for <code class="text-white-50 text-light">nil</code>, significa que a pessoa digitou uma sigla ou nome de Estado válido.

Na linha <code class="text-white-50 text-light">regiao = estados_para_regioes[estado_valido]</code>:

Acessamos o hash <code class="text-white-50 text-light">estados_para_regioes</code> usando o nome do Estado armazenado em <code class="text-white-50 text-light">estado_valido</code> como chave para obter a região correspondente.

Por exemplo, se <code class="text-white-50 text-light">estado_valido</code> for "Bahia", essa linha atribui "Nordeste" à variável <code class="text-white-50 text-light">regiao</code>.

Na linha <code class="text-white-50 text-light">puts "Você mora em #{estado_valido} na Região #{regiao}"</code>:

Exibimos uma mensagem informando o nome do Estado e a região correspondente, usando interpolação de strings para inserir os valores das variáveis <code class="text-white-50 text-light">estado_valido</code> e <code class="text-white-50 text-light">regiao</code> na mensagem.

Se a pessoa digitou "Bahia", a mensagem exibida será: "Você mora em Bahia na Região Nordeste".

Depois de analisar o programa inteiro, linha por linha, podemos dizer que ele cria dois hashes para mapear siglas e nomes de Estados às suas regiões, lê a entrada da pessoa, trata essa entrada para facilitar a validação, verifica se a entrada é uma sigla ou nome válido, e exibe a mensagem apropriada dependendo se o Estado é válido ou não.

## Else e Elseif {#else-e-elseif}
---

Muitas vezes queremos fazer verificações mais complexas, com várias condições diferentes. 

Por exemplo:

- Se uma condição for verdadeira, faça isso;
- se uma condição for falsa, faça aquilo.

Para esses casos, além do <code class="text-white-50 text-light">if</code>, podemos usar o <code class="text-white-50 text-light">else</code> e o <code class="text-white-50 text-light">elsif</code>.

### else {#else}
---

O <code class="text-white-50 text-light">else</code> é usado para definir um bloco de código que será executado quando a condição do <code class="text-white-50 text-light">if</code> for falsa.

Estrutura:

```ruby
if condicao
  # comandos se a condição for verdadeira
else
  # comandos se a condição for falsa
end
```
{: .bg-dark .text-light .p-3}

Exemplo:

```ruby
media = 6.5

if media >= 7
  puts "A pessoa está aprovada."
else
  puts "A pessoa está reprovada."
end
```
{: .bg-dark .text-light .p-3}

Aqui temos dois caminhos possíveis e sempre um deles será seguido.

- Se a variável <code class="text-white-50 text-light">media</code> for maior ou igual a 7, o programa imprime "A pessoa está aprovada.".
- Caso contrário, imprime "A pessoa está reprovada.".

### elsif {#elsif}
---

Às vezes não temos só duas opções, mas três ou mais. Por exemplo:

- Média maior ou igual a 7 a pessoa está aprovada;
- Média entre 5 e 6.9 a pessoa está em recuperação;
- Média menor que 5 a pessoa está reprovada.

Para esses casos, usamos o <code class="text-white-50 text-light">elsif</code> incluir condições adicionais.

Por exemplo:

```ruby
media = 5.8

if media >= 7
  puts "A pessoa está aprovada."
elsif media >= 5
  puts "A pessoa está em recuperação."
else
  puts "A pessoa está reprovada."
end
```
{: .bg-dark .text-light .p-3}

**Atenção: A ordem das condições é muito importante!**

Vamos entender melhor por que a ordem faz diferença:

No exemplo acima, o programa testa as condições na seguinte ordem:

1. Primeiro: verifica se a média é maior ou igual a 7 (aprovado)
2. Segundo: verifica se a média é maior ou igual a 5 (recuperação)
3. Terceiro: se nenhuma das anteriores for verdadeira, considera reprovado

Essa ordem funciona corretamente porque o programa para de verificar assim que encontra uma condição verdadeira. Veja o que acontece com uma média de 8:

- O programa testa: 8 &gt;= 7?
  - **Sim!** então escreve na tela "A pessoa está aprovada." e **para**.
- Nem chega a testar se 8 &gt;= 5, porque já encontrou uma condição verdadeira.

Agora vamos ver o que aconteceria se a ordem das condições fosse invertida:

```ruby
media = 8

if media >= 5  # ERRADO! Testando recuperação primeiro
  puts "A pessoa está em recuperação."
elsif media >= 7
  puts "A pessoa está aprovada."
else
  puts "A pessoa está reprovada."
end
```
{: .bg-dark .text-light .p-3}

O que acontece agora com a média 8? 

- O programa testa: 8 &gt;= 5?
  - **Sim!** então escreve na tela "A pessoa está em recuperação." e **para**.
- Ele não vai testar a segunda condição (8 &gt;= 7) porque já encontrou uma condição verdadeira na primeira verificação mesmo que a segunda também seja verdadeira.

Resultado: uma pessoa com média 8 seria considerada em recuperação, quando deveria estar aprovada!

Isso acontece porque o programa sempre verifica as condições **de cima para baixo** e para na primeira que for verdadeira. Assim que encontra uma condição verdadeira, ele executa aquele bloco e pula todas as outras, mesmo que também sejam verdadeiras.

Por isso devemos organizar as condições do mais específico para o mais geral, garantindo que cada condição seja avaliada corretamente.

Neste caso, a ordem correta é:

1. Verificar se a média é maior ou igual a 7 (aprovado)
2. Verificar se a média é maior ou igual a 5 (recuperação)
3. Caso contrário, considerar reprovado

Por isso, sempre que estiver usando múltiplas condições com <code class="text-white-50 text-light">if</code>, <code class="text-white-50 text-light">elsif</code> e <code class="text-white-50 text-light">else</code>, pense cuidadosamente na ordem em que as condições devem ser avaliadas para garantir que o programa funcione corretamente.

## Refazendo o programa dos Estados com Else e Elsif {#refazendo-o-programa-dos-estados-com-else-e-elsif}
---

Vamos reescrever o programa dos Estados usando <code class="text-white-50 text-light">else</code> e <code class="text-white-50 text-light">elsif</code> para simplificar a lógica de verificação.

```ruby
# Hash que mapeia siglas para nomes completos dos Estados
siglas_para_estados = {
  "AC" => "Acre", "AL" => "Alagoas", "AP" => "Amapá", "AM" => "Amazonas",
  "BA" => "Bahia", "CE" => "Ceará", "DF" => "Distrito Federal",
  "ES" => "Espírito Santo", "GO" => "Goiás", "MA" => "Maranhão",
  "MT" => "Mato Grosso", "MS" => "Mato Grosso do Sul",
  "MG" => "Minas Gerais", "PA" => "Pará", "PB" => "Paraíba",
  "PR" => "Paraná", "PE" => "Pernambuco", "PI" => "Piauí",
  "RJ" => "Rio de Janeiro", "RN" => "Rio Grande do Norte",
  "RS" => "Rio Grande do Sul", "RO" => "Rondônia", "RR" => "Roraima",
  "SC" => "Santa Catarina", "SP" => "São Paulo", "SE" => "Sergipe",
  "TO" => "Tocantins"
}

# Hash que mapeia nome do Estado para sua respectiva Região
estados_para_regioes = {
  "Acre" => "Norte", "Amapá" => "Norte", "Amazonas" => "Norte",
  "Pará" => "Norte", "Rondônia" => "Norte", "Roraima" => "Norte",
  "Tocantins" => "Norte",

  "Alagoas" => "Nordeste", "Bahia" => "Nordeste", "Ceará" => "Nordeste",
  "Maranhão" => "Nordeste", "Paraíba" => "Nordeste", "Pernambuco" => "Nordeste",
  "Piauí" => "Nordeste", "Rio Grande do Norte" => "Nordeste",
  "Sergipe" => "Nordeste",

  "Espírito Santo" => "Sudeste",
  "Minas Gerais" => "Sudeste",
  "Rio de Janeiro" => "Sudeste",
  "São Paulo" => "Sudeste",

  "Paraná" => "Sul", "Rio Grande do Sul" => "Sul", "Santa Catarina" => "Sul",

  "Goiás" => "Centro-Oeste", "Mato Grosso" => "Centro-Oeste",
  "Mato Grosso do Sul" => "Centro-Oeste",
  "Distrito Federal" => "Centro-Oeste"
}

print "Digite o nome do Estado ou a sigla: "
estado_digitado = gets.chomp

estado_digitado_maiusculo = estado_digitado.upcase
estado_digitado_formatado = estado_digitado.split.map(&:capitalize).join(" ")

if siglas_para_estados.key?(estado_digitado_maiusculo)
  estado_valido = siglas_para_estados[estado_digitado_maiusculo]
elsif estados_para_regioes.key?(estado_digitado_formatado)
  estado_valido = estado_digitado_formatado
else
  puts "Estado inválido. Fim do programa."
  return
end

regiao = estados_para_regioes[estado_valido]
puts "Você mora em #{estado_valido} na Região #{regiao}"
```
{: .bg-dark .text-light .p-3}

Aqui, usamos <code class="text-white-50 text-light">elsif</code> para verificar se o nome completo do Estado é válido, e <code class="text-white-50 text-light">else</code> para tratar o caso inválido.

Quando a entrada é válida, o programa continua para buscar a região e exibir a mensagem final. Se for inválida, exibe a mensagem de erro e encerra o programa imediatamente com <code class="text-white-50 text-light">return</code>.

### Quais as diferenças dessa versão para a anterior? {#quais-as-diferencas-dessa-versao-para-a-anterior}
---

As duas versões fazem a mesma coisa: elas tentam descobrir se a pessoa digitou o nome de um estado ou a sigla dele, e depois mostram a região desse estado.

Mas as duas versões organizam o raciocínio de um jeito diferente.

A primeira versão do código usa vários <code class="text-white-50 text-light">if</code> separados para verificar cada possibilidade (se é sigla, se é nome completo, se é inválido, se é válido). Cada verificação é independente, e o programa vai passando por todas elas.

Ou seja, são 4 verificações separadas:

1. Verifica se é sigla;
2. Verifica se é nome completo;
3. Verifica se é inválido;
4. Verifica se é válido.

Assim, o código funciona, só que fica maior. E às vezes pode ser um pouco mais difícil de entender, porque você precisa acompanhar várias verificações diferentes. Além disso, mesmo quando a entrada é inválida, o programa ainda passa por todas as verificações antes de chegar na mensagem de erro.

É como fazer várias perguntas soltas, em vez de colocá-las numa ordem clara.

A segunda versão do código usa <code class="text-white-50 text-light">elsif</code> e <code class="text-white-50 text-light">else</code> para organizar as verificações de forma mais estruturada.

Isso significa que o código decide tudo dentro de um único bloco, seguindo uma ordem:

1. Primeiro, verifica se é sigla;
2. Se não for sigla, verifica se é nome completo;
3. Se não for nenhum dos dois, considera inválido.

Esse bloco resolve tudo de uma vez só, e assim que encontra uma condição verdadeira, ele executa aquele bloco e pula o resto.

Assim, o código fica mais compacto e fácil de entender, porque você vê claramente as três possibilidades (sigla, nome completo, inválido) organizadas numa sequência lógica.

Não tem verificações repetidas ou independentes, tudo está dentro de um único fluxo de decisão. Se o que foi digitado for inválido , o programa para imediatamente e não faz mais nada por causa do <code class="text-white-50 text-light">return</code>.

É como uma fila organizada: cada pergunta leva para a próxima ou encerra o processo.

### Mas, o que é esse <code class="text-white-50 text-light">return</code>? {#mas-o-que-e-esse-return}
---

O <code class="text-white-50 text-light">return</code> é um comando que diz: “Pare o que você está fazendo e saia daqui agora.”

Ele encerra imediatamente a execução do método ou do programa onde está sendo usado. Mesmo que haja código depois, nada mais será executado. 

No nosso exemplo, usamos o <code class="text-white-50 text-light">return</code> dentro do bloco <code class="text-white-50 text-light">else</code> que trata o caso de entrada inválida. Ou seja, se a pessoa digitar algo que não é uma sigla nem um nome de Estado válido, o programa exibe a mensagem de erro e depois para imediatamente a execução com o <code class="text-white-50 text-light">return</code>.

### Por que usar <code class="text-white-50 text-light">return</code> é bom? {#por-que-usar-return-e-bom}
---

Usar <code class="text-white-50 text-light">return</code> é bom porque evita que o programa continue executando código desnecessário depois de detectar um erro ou uma condição que não faça sentido seguir testeando.

No nosso caso, se o estado é inválido, não faz sentido continuar rodando o resto do código. Aí o <code class="text-white-50 text-light">return</code> ajuda a parar tudo ali mesmo, economizando tempo e recursos.

Ele também impede que informações incorretas sejam usadas, já que o programa não tenta mais acessar dados ou fazer cálculos baseados numa entrada inválida.

Além disso, o uso do <code class="text-white-50 text-light">return</code> torna o código mais claro. Quem lê o programa entende rapidamente que, se chegar naquele ponto, o programa deve parar ali mesmo, sem continuar. Isso ajuda a evitar confusões sobre o que o programa deve fazer em casos de erro.

Em resumo, o <code class="text-white-50 text-light">return</code> é uma ferramenta útil para controlar o fluxo do programa, especialmente em situações onde continuar a execução não faz sentido ou pode causar problemas.

## Resumo {#resumo}
---

Neste artigo, exploramos as expressões condicionais em Ruby, estruturas fundamentais para tomar decisões no código e validar entradas de dados. Começamos relembrando conceitos de I/O (entrada e saída) apresentados no artigo anterior, onde vimos como o programa se comunica através de STDIN, STDOUT e STDERR.

Aprendemos o que são expressões condicionais e como elas permitem ao programa tomar decisões baseadas em condições verdadeiras ou falsas, utilizando operadores de comparação (<code class="text-white-50 text-light">==</code>, <code class="text-white-50 text-light">!=</code>, <code class="text-white-50 text-light">&gt;</code>, <code class="text-white-50 text-light">&lt;</code>, <code class="text-white-50 text-light">&gt;=</code>, <code class="text-white-50 text-light">&lt;=</code>) e operadores lógicos (<code class="text-white-50 text-light">&&</code>, <code class="text-white-50 text-light">||</code>, <code class="text-white-50 text-light">!</code>) para construir condições.

Exploramos a estrutura <code class="text-white-50 text-light">if</code>, a forma mais básica de criar condições, que executa um bloco de código apenas quando uma condição é verdadeira. Vimos exemplos práticos, como verificar se uma loja está aberta em determinado dia da semana e validar se uma pessoa pode dirigir baseado na idade e posse de carteira.

Avançamos para estruturas mais complexas com <code class="text-white-50 text-light">else</code> e <code class="text-white-50 text-light">elsif</code>, que permitem tratar múltiplas condições de forma organizada. Aprendemos que a ordem das condições é crucial: devemos sempre verificar do mais específico para o mais geral, pois o programa para na primeira condição verdadeira encontrada.

Desenvolvemos um programa completo para validar Estados brasileiros, utilizando hashes (dicionários) para mapear siglas e nomes de Estados às suas regiões. Este exemplo demonstrou conceitos importantes como manipulação de strings com métodos como <code class="text-white-50 text-light">upcase</code>, <code class="text-white-50 text-light">split</code>, <code class="text-white-50 text-light">capitalize</code> e <code class="text-white-50 text-light">join</code>, além do uso de <code class="text-white-50 text-light">include?</code> e <code class="text-white-50 text-light">key?</code> para verificar a presença de elementos em arrays e hashes.

Também conhecemos o comando <code class="text-white-50 text-light">return</code>, que permite encerrar a execução do programa imediatamente quando necessário, evitando processamento desnecessário após detectar erros ou condições inválidas.

Por fim, enfatizamos a importância do planejamento antes da codificação através de testes de mesa e fluxogramas, ressaltando que desenvolver lógica de programação é mais importante do que decorar sintaxe. As expressões condicionais tornam o código mais robusto e dinâmico, permitindo tratamento eficiente de situações inesperadas e criando programas mais inteligentes e responsivos.

Como já havia comentado, acredito que aprender programação é como aprender um novo idioma. A pessoa não vai decorar todas as palavras e regras gramaticais de uma vez só antes de tentar dar um "Bom dia" ou "Como você está?" na língua nova. Ela vai aprendendo aos poucos, praticando, errando, corrigindo e melhorando com o tempo.

Por isso segui colocando novos elementos no meio dos códigos apresentados como o <code class="text-white-50 text-light">return</code> ou os métodos de string, mesmo que não tenha feito uma apresentação "formal" e detalhada deles. A ideia é ir apresentando esses elementos no contexto de uso, para que a pessoa vá se familiarizando com eles aos poucos.

De novo, essa não é a forma mais confortável de aprender, porque quebra a linearidade ("primeiro aprenda isso, depois aquilo"), mas acredito que é a forma mais próxima do aprendizado real de uma língua, que é o objetivo final aqui: aprender a programar de verdade, não só decorar sintaxe.

Com todo respeito, parece uma "bosta" isso, eu sei. Mas, pelo menos quem sobreviver a essa "bosta" vai sair sem esse maldito medo de errar ou tentar qualquer coisa nova como se estivesse pisando em ovos o tempo todo. Eu sou assim, só agora entendi que esse medo todo é resultado de anos de linearidade ("primeiro aprenda isso, depois aquilo") na escola e cursos que fiz. É melhor, na minha visão, quebrar esse medo agora e "criar casca" (resiliência) do que ficar preso nesse ciclo de medo para sempre. 