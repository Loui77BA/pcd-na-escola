---
layout: post
title: "Introdução à Programação: Expressões Condicionais em Ruby - Parte II"
description: "Neste artigo, continuamos nossa exploração das expressões condicionais em Ruby, focando em estruturas como 'case', 'unless' e fazendo vários exercícios práticos com todas as estruturas condicionais aprendidas."
date: 2025-09-22 10:00:00 -0300
author: Louise Suelen
categories: [Programação]
tags: ["programação", "tecnologia"]
permalink: /introducao-a-programacao-expressoes-condicionais-em-ruby-parte-ii/
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

        <!-- 2. Unless -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#unless" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">2</span>
                Unless
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#exemplo-unless" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">2.1</span>
                        Exemplo com Unless
                    </a>
                </li>
            </ul>
        </li>

        <!-- 3. Case -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#case" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">3</span>
                Case
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#exemplo-case" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">3.1</span>
                        Exemplo com Case
                    </a>
                </li>
            </ul>
        </li>

        <!-- 4. Exercícios Práticos -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#exercicios-praticos" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">4</span>
                Exercícios Práticos
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#exercicio-1" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.1</span>
                        Exercício 1
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#exercicio-2" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.2</span>
                        Exercício 2
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#exercicio-3" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.3</span>
                        Exercício 3
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#exercicio-4" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.4</span>
                        Exercício 4
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#exercicio-5" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.5</span>
                        Exercício 5
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#exercicio-6" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.6</span>
                        Exercício 6
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#exercicio-7" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.7</span>
                        Exercício 7
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#exercicio-8" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.8</span>
                        Exercício 8
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#exercicio-9" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">4.9</span>
                        Exercício 9
                    </a>
                </li>
            </ul>
        </li>

        <!-- 5. Comentários sobre os Exercícios -->
        <li class="list-group-item bg-dark text-white border-0">
            <a href="#comentarios-sobre-os-exercicios" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                <span class="badge bg-secondary">5</span>
                Comentários sobre os Exercícios
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#comentario-exercicio-1" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">5.1</span>
                        Comentário sobre o Exercício 1
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#comentario-exercicio-2" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">5.2</span>
                        Comentário sobre o Exercício 2
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#comentario-exercicio-3" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">5.3</span>
                        Comentário sobre o Exercício 3
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#comentario-exercicio-4" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">5.4</span>
                        Comentário sobre o Exercício 4
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#comentario-exercicio-5" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">5.5</span>
                        Comentário sobre o Exercício 5
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#comentario-exercicio-6" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">5.6</span>
                        Comentário sobre o Exercício 6
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#comentario-exercicio-7" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">5.7</span>
                        Comentário sobre o Exercício 7
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#comentario-exercicio-8" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">5.8</span>
                        Comentário sobre o Exercício 8
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a href="#comentario-exercicio-9" class="text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light">
                        <span class="badge bg-secondary">5.9</span>
                        Comentário sobre o Exercício 9
                    </a>
                </li>
            </ul>
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

Neste artigo, continuamos nossa exploração das expressões condicionais em Ruby, focando em estruturas como <code class="text-white-50 text-light">case</code>, <code class="text-white-50 text-light">unless</code> e fazendo vários exercícios práticos com todas as estruturas condicionais aprendidas.

<div class="text-center">
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/b0b695bd-ae05-4be1-5692-5131de200100/public" aria-hidden="true" class="img-fluid border" />
</div>

## Apresentação {#apresentacao}
---

No artigo anterior, foram apresentadas formas de tomar decisões no código. Aprendemos a usar os comandos <code class="text-white-50 text-light">if</code>, <code class="text-white-50 text-light">else</code> e <code class="text-white-50 text-light">elsif</code> para escolher caminhos diferentes no programa, com base em comparações e operadores lógicos.

Também vimos como usar operadores de comparação, como <code class="text-white-50 text-light">==</code>, <code class="text-white-50 text-light">!=</code>, <code class="text-white-50 text-light">&gt;</code>, <code class="text-white-50 text-light">&lt;</code>, <code class="text-white-50 text-light">&gt;=</code> e <code class="text-white-50 text-light">&lt;=</code>. Fizemos um exemplo que valida estados brasileiros, usando Hashes, mexendo em textos e mostrando como o comando return é importante para parar o código quando encontramos algum dado errado.

Agora continuaremos estudando as expressões condicionais focando em duas estruturas muito úteis: o <code class="text-white-50 text-light">unless</code> e o <code class="text-white-50 text-light">case</code> para expandir nossas possibilidades de controle de fluxo no código. Vamos conhecer essas estruturas e fazer exercícios com todas as estruturas condicionais que aprendemos até agora para fixar o conteúdo.

## Unless {#unless}
---

Até agora, sempre que queríamos verificar algo, pensávamos de forma positiva: "Se isso for verdade, faça aquilo". Mas, na linguagem humana, muitas vezes pensamos no negativo ou em exceções.

Por exemplo: "Não saia de casa a menos que pare de chover" ou "Vou trabalhar, a não ser que seja feriado".

Ruby é uma linguagem desenhada para ser próxima da linguagem humana. Por isso, ela nos oferece o <code class="text-white-50 text-light">unless</code> (que seria o nosso "a menos que" ou "a não ser que").

O <code class="text-white-50 text-light">unless</code> é o oposto exato do <code class="text-white-50 text-light">if</code>. Enquanto o <code class="text-white-50 text-light">if</code> executa o código se a condição for verdadeira, o <code class="text-white-50 text-light">unless</code> executa o código se a condição for falsa.

Pense nele como um "Se não...".

Muitas vezes, quando estamos aprendendo, fazemos algo assim:

```ruby
bloqueado = false

if !bloqueado
  puts "Acesso permitido!"
end
```
{: .bg-dark .text-light .p-3}

No código acima, estamos dizendo: "Se NÃO estiver bloqueado". O símbolo <code class="text-white-50 text-light">!</code> inverte a lógica. Funciona? Sim. Mas ler "Se não bloqueado" exige uma pequena ginástica mental.

Com <code class="text-white-50 text-light">unless</code>, o código fica mais natural:

```ruby
bloqueado = false

unless bloqueado
  puts "Acesso permitido!"
end
```
{: .bg-dark .text-light .p-3}

A leitura flui melhor: "A menos que esteja bloqueado, imprima acesso permitido".

A regra de ouro é: Use <code class="text-white-50 text-light">unless</code> quando você quer executar uma ação apenas se a condição for falsa. Se você precisar usar um <code class="text-white-50 text-light">else</code> junto com o <code class="text-white-50 text-light">unless</code>, geralmente é melhor voltar para o <code class="text-white-50 text-light">if</code>, pois "a menos que isso, senão aquilo" começa a ficar confuso.

Imagine que você está processando um cadastro e quer avisar se o campo nome estiver vazio.

```ruby
nome = ""
puts "Atenção: O nome não pode ser vazio" if nome.empty?
```
{: .bg-dark .text-light .p-3}

Na linha <code class="text-white-50 text-light">if nome.empty?</code>, estamos dizendo: "Se o nome estiver vazio, imprima a mensagem de atenção".

O <code class="text-white-50 text-light">empty?</code> é um método que verifica se a string está vazia. Se estiver, ele retorna <code class="text-white-50 text-light">true</code>, e a mensagem será exibida. Então explicando cada parte da linha:

- <code class="text-white-50 text-light">puts</code>: Comando para imprimir algo na tela.
- <code class="text-white-50 text-light">"Atenção: O nome não pode ser vazio"</code>: A mensagem que queremos mostrar.
- <code class="text-white-50 text-light">if</code>: Inicia a condição de verificação ("se").
- <code class="text-white-50 text-light">nome.empty?</code>: Verifica se a variável <code class="text-white-50 text-light">nome</code> está vazia. Se estiver vazia, a condição é verdadeira, e a mensagem será impressa. <code class="text-white-50 text-light">empty?</code> é um método que retorna <code class="text-white-50 text-light">true</code> se a string estiver vazia e <code class="text-white-50 text-light">false</code> caso contrário.
- O ponto de interrogação no final de <code class="text-white-50 text-light">empty?</code> indica que é um método que retorna um valor booleano (verdadeiro ou falso).

Ok, podemos fazer desse jeito como foi feito acima, mas podemos usar o <code class="text-white-50 text-light">unless</code> da mesma forma.

```rubyruby
nome = ""
puts "Atenção: O nome não pode ser vazio" unless !nome.empty?
```
{: .bg-dark .text-light .p-3}

Aqui, usamos <code class="text-white-50 text-light">unless</code> para dizer: "A menos que o nome NÃO esteja vazio, imprima a mensagem". A dupla negação pode ser confusa, então é importante usar <code class="text-white-50 text-light">unless</code> apenas quando fizer sentido.

### Exemplo com Unless {#exemplo-unless}
---

Vamos criar um exemplo simples usando <code class="text-white-50 text-light">unless</code> para verificar se um usuário tem permissão para acessar uma área restrita.

```ruby
# 1. Definição da senha correta (simulando um banco de dados)
senha_correta = "ruby123"

# 2. Entrada do usuário
puts "--- Sistema de Login v1.0 ---"
print "Digite sua senha: "
senha_digitada = gets.chomp # .chomp remove a quebra de linha

# 3. Estrutura Unless (A Lógica)
# "A menos que a senha digitada seja igual à correta..."
unless senha_digitada == senha_correta
  puts "ERRO: Acesso negado! Senha incorreta."
else
  # Se o unless for falso (ou seja, as senhas SÃO iguais), cai aqui
  puts "SUCESSO: Bem-vindo ao sistema!"
end
```
{: .bg-dark .text-light .p-3}

Neste exemplo, usamos <code class="text-white-50 text-light">unless</code> para verificar se a senha digitada pelo usuário é diferente da senha correta. Se for diferente, exibimos uma mensagem de erro. Caso contrário, damos as boas-vindas ao usuário.

## Case {#case}
---

Outra estrutura condicional muito útil em Ruby é o <code class="text-white-50 text-light">case</code>. Ele é ideal quando precisamos comparar uma variável com vários valores possíveis. Ele funciona como uma série de <code class="text-white-50 text-light">if</code> e <code class="text-white-50 text-light">elsif</code>, mas de uma forma mais organizada, fácil de ler, entender e manter.

A sintaxe (forma de escrever) básica do <code class="text-white-50 text-light">case</code> é a seguinte:

```ruby
case expressão
when valor1
  # Código a ser executado se expressão == valor1
when valor2
  # Código a ser executado se expressão == valor2
else
  # Código a ser executado se nenhum dos valores corresponder
end
```
{: .bg-dark .text-light .p-3}

Aqui, a <code class="text-white-50 text-light">expressão</code> é avaliada uma vez, e seu valor é comparado com cada <code class="text-white-50 text-light">valor</code> listado após os <code class="text-white-50 text-light">when</code>. Se houver uma correspondência, o código associado a esse <code class="text-white-50 text-light">when</code> é executado. Se nenhum valor corresponder, o código dentro do <code class="text-white-50 text-light">else</code> será executado (se houver um).

Esse <code class="text-white-50 text-light">when</code> funciona como um "se for igual a" ele significa "se a expressão for igual a esse valor".

### Exemplo com Case {#exemplo-case}
---

Vamos criar um exemplo usando <code class="text-white-50 text-light">case</code> para determinar a categoria de um produto com base no seu código.

```ruby
# 1. Definição do Hash com os códigos e categorias
categorias = {
  "A1" => "Eletrônicos",
  "B2" => "Roupas",
  "C3" => "Alimentos",
  "D4" => "Livros"
}

# 2. Entrada do usuário
print "Digite o código do produto: "
codigo_produto = gets.chomp.upcase # .upcase para garantir maiúsculas

# 3. Estrutura Case (A Lógica)

case codigo_produto
when "A1"
  puts "O código #{codigo_produto} pertence à categoria: #{categorias[codigo_produto]}"
when "B2"
  puts "O código #{codigo_produto} pertence à categoria: #{categorias[codigo_produto]}"
when "C3"
  puts "O código #{codigo_produto} pertence à categoria: #{categorias[codigo_produto]}"
when "D4"
  puts "O código #{codigo_produto} pertence à categoria: #{categorias[codigo_produto]}"
else
  puts "Código inválido! Nenhuma categoria de produto encontrada."
end
```
{: .bg-dark .text-light .p-3}

Neste exemplo, usamos o <code class="text-white-50 text-light">case</code> para comparar o código do produto digitado pelo usuário com vários códigos possíveis. Dependendo do código, exibimos a categoria correspondente. Se o código não corresponder a nenhum dos valores listados, exibimos uma mensagem de código inválido.

Quando usar o <code class="text-white-50 text-light">case</code> é bom? Use o <code class="text-white-50 text-light">case</code> quando você tiver uma variável ou expressão que precisa ser comparada com vários valores diferentes. 

Ele bom para:

- Menus de opções
- Categorias
- Estados ou status
- Qualquer situação onde múltiplas comparações são necessárias

Mas, desde que a quantidade de possibilidades para essas comparações não seja muito grande e complexa. Ela precisa ser limitada para manter a legibilidade do código. No futuro aprenderemos a lidar com os casos maiores de complexidade.

## Exercícios Práticos {#exercicios-praticos}
---

Agora que aprendemos sobre <code class="text-white-50 text-light">unless</code> e <code class="text-white-50 text-light">case</code>, é hora de praticar. Vamos fazer uma lista de exercícios que envolvem todas as estruturas condicionais que aprendemos até agora.

### Exercício 1 {#exercicio-1}
---

Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C.

Resposta:

```ruby
A = 0.0
B = 0.0
C = 0.0

print "Digite o valor de A: "
A = Float(gets.chomp)

print "Digite o valor de B: "
B = Float(gets.chomp)

print "Digite o valor de C: "
C = Float(gets.chomp)

if A + B < C
  puts "A soma de A + B = #{A + B} é menor que C = #{C}."
else
  puts "A soma de A + B = #{A + B} é maior ou igual a C = #{C}."
end
```
{: .bg-dark .text-light .p-3}

### Exercício 2 {#exercicio-2}
---

Peça dois números inteiros (vamos chamá-los de A e B).

- Se eles forem iguais, some os dois.
- Se forem diferentes, multiplique o A pelo B. No final, guarde o resultado numa variável chamada "C" e mostre esse valor na tela.

Resposta:

```ruby
print "Digite o valor de A: "
A = Integer(gets.chomp)

print "Digite o valor de B: "
B = Integer(gets.chomp)

if A == B
  C = A + B
else
  C = A * B
end

puts "O resultado é: #{C}"
```
{: .bg-dark .text-light .p-3}

### Exercício 3 {#exercicio-3}
---

Pegue um número qualquer:

- Se ele for positivo, calcule o dobro dele (vezes 2).
- Se ele for negativo, calcule o triplo dele (vezes 3). Mostre o resultado da conta.

Resposta:

```ruby
print "Digite um número: "
numero = Float(gets.chomp)

if numero > 0
  resultado = numero * 2
elsif numero < 0
  resultado = numero * 3
else
  resultado = numero
end

puts "O resultado é: #{resultado}"
```
{: .bg-dark .text-light .p-3}

### Exercício 4 {#exercicio-4}
---

Peça três números inteiros que sejam diferentes uns dos outros. Depois, mostre esses três números organizados em ordem decrescente (do maior para o menor).

Resposta:

```ruby
n1 = 0
n2 = 0
n3 = 0

numeros = []

print "Digite o primeiro número: "
n1 = Integer(gets.chomp)

numeros << n1

print "Digite o segundo número: "
n2 = Integer(gets.chomp)

numeros << n2

print "Digite o terceiro número: "
n3 = Integer(gets.chomp)

numeros << n3

numeros.sort!.reverse!

puts "Números em ordem decrescente: #{numeros.join(', ')}"
```
{: .bg-dark .text-light .p-3}

### Exercício 5 {#exercicio-5}
---

Peça a altura e o sexo de uma pessoa para calcular o peso ideal dela usando estas regras:

- Para pessoas biologicamente do sexo masculino: (72.7 &times; altura) &minus; 58
- Para pessoas biologicamente do sexo feminino: (62.1 &times; altura) &minus; 44.7

Depois mostre o peso ideal calculado na tela.

Resposta:

```ruby
print "Digite sua altura em metros (ex: 1.75): "
altura = Float(gets.chomp)

print "Digite seu sexo biológico (M/F): "
sexo = gets.chomp.upcase

case sexo
when "M"
  peso_ideal = (72.7 * altura) - 58
when "F"
  peso_ideal = (62.1 * altura) - 44.7
else
  puts "Dados inseridos inválidos. Fim do programa."
  exit
end

puts "Você é biologicamente do sexo #{sexo == 'M' ? 'masculino' : 'feminino'} e seu peso ideal é: #{peso_ideal.round(2)} kg."
```
{: .bg-dark .text-light .p-3}

### Exercício 6 {#exercicio-6}
---

Calcule o Índice de Massa Corporal usando a fórmula: IMC = peso &divide; (altura &times; altura). Depois, verifique onde o resultado se encaixa e mostre a condição da pessoa:

- Menor que 18,5: Abaixo do peso
- Entre 18,5 e 24,9: Peso normal
- Entre 25,0 e 29,9: Sobrepeso
- Entre 30,0 e 34,9: Obesidade grau I
- Entre 35,0 e 39,9: Obesidade grau II
- Maior que 40,0: Obesidade grau III

Resposta:

```ruby
print "Digite seu peso em kg: "
peso = Float(gets.chomp)

print "Digite sua altura em metros (ex: 1.75): "
altura = Float(gets.chomp)

imc = peso / (altura * altura)

case imc
when 0...18.5
  condicao = "Abaixo do peso"
when 18.5..24.9
  condicao = "Peso normal"
when 25.0..29.9
  condicao = "Sobrepeso"
when 30.0..34.9
  condicao = "Obesidade grau I"
when 35.0..39.9
  condicao = "Obesidade grau II"
when 40.0..Float::INFINITY
  condicao = "Obesidade grau III"
else
  condicao = "Dados inválidos"
end

puts "Seu IMC é #{imc.round(2)} e você está classificado como: #{condicao}."
```
{: .bg-dark .text-light .p-3}

### Exercício 7 {#exercicio-7}
---

Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado:

- **Código 1**: À vista em dinheiro ou cheque, recebe 10% de desconto.
- **Código 2**: À vista no cartão de crédito, recebe 15% de desconto.
- **Código 3**: Em duas vezes, preço normal de etiqueta sem juros.
- **Código 4**: Em duas vezes, preço normal de etiqueta mais juros de 10%.

Resposta:

```ruby
print "Digite o preço normal do produto: "
preco = Float(gets.chomp)

puts "Escolha a condição de pagamento:"
puts "1 - À vista em dinheiro ou cheque (10% de desconto)"
puts "2 - À vista no cartão de crédito (15% de desconto)"
puts "3 - Em duas vezes (preço normal sem juros)"
puts "4 - Em duas vezes (preço normal mais 10% de juros)"
print "Opção: "
opcao = Integer(gets.chomp)

case opcao
when 1
  valor_final = preco * 0.90
  puts "Valor a pagar: R$ #{valor_final.round(2)} (10% de desconto)"
when 2
  valor_final = preco * 0.85
  puts "Valor a pagar: R$ #{valor_final.round(2)} (15% de desconto)"
when 3
  valor_final = preco
  parcela = valor_final / 2
  puts "Valor a pagar: R$ #{valor_final.round(2)} (Sem juros)"
  puts "2 parcelas de R$ #{parcela.round(2)}"
when 4
  valor_final = preco * 1.10
  parcela = valor_final / 2
  puts "Valor a pagar: R$ #{valor_final.round(2)} (10% de juros)"
  puts "2 parcelas de R$ #{parcela.round(2)}"
else
  puts "Opção inválida."
end
```
{: .bg-dark .text-light .p-3}

### Exercício 8 {#exercicio-8}
---

Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de aproveitamento, usando a fórmula:

MA = (Nota1 + Nota2 &times; 2 + Nota3 &times; 3 + ME) &divide; 7

A atribuição dos conceitos obedece as regras abaixo. O algoritmo deve escrever o número do aluno, suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E.

- **Média de aproveitamento maior ou igual a 90**: Conceito A.
- **Média de aproveitamento maior ou igual a 75 e menor que 90**: Conceito B.
- **Média de aproveitamento maior ou igual a 60 e menor que 75**: Conceito C.
- **Média de aproveitamento maior ou igual a 40 e menor que 60**: Conceito D.
- **Média de aproveitamento menor que 40**: Conceito E.

Resposta:

```ruby
print "Digite o número de identificação do aluno: "
id_aluno = gets.chomp

print "Digite a nota 1: "
nota1 = Float(gets.chomp)

print "Digite a nota 2: "
nota2 = Float(gets.chomp)

print "Digite a nota 3: "
nota3 = Float(gets.chomp)

print "Digite a média dos exercícios (ME): "
me = Float(gets.chomp)

ma = (nota1 + (nota2 * 2) + (nota3 * 3) + me) / 7

if ma >= 90
  conceito = "A"
elsif ma >= 75
  conceito = "B"
elsif ma >= 60
  conceito = "C"
elsif ma >= 40
  conceito = "D"
else
  conceito = "E"
end

case conceito
when "A", "B", "C"
  situacao = "Aprovado"
else
  situacao = "Reprovado"
end

puts "--- Boletim ---"
puts "Aluno ID: #{id_aluno}"
puts "Notas: #{nota1}, #{nota2}, #{nota3}"
puts "Média dos Exercícios: #{me}"
puts "Média de Aproveitamento: #{ma.round(2)}"
puts "Conceito: #{conceito}"
puts "Situação: #{situacao}"
```
{: .bg-dark .text-light .p-3}

### Exercício 9 {#exercicio-9}
---

Elabore um algoritmo para aprovar um empréstimo bancário. O programa deve ler a idade do cliente, a renda mensal, o valor do empréstimo solicitado, se o cliente possui restrições no CPF (Sim/Não) e o nível de relacionamento com o banco (1 - Bronze, 2 - Prata, 3 - Ouro).

As regras para aprovação são:

1.  **Restrição**: O empréstimo só pode ser analisado **a menos que** o cliente tenha restrições no CPF. Se tiver restrição, o pedido deve ser negado imediatamente.
2.  **Validação Básica**:
    - Se a idade for menor que 18 anos, o pedido é negado.
    - Se o valor do empréstimo for maior que 15 vezes a renda mensal, o pedido é negado.
3.  **Taxa de Juros**: Se aprovado, a taxa de juros depende do nível de relacionamento:
    - **Bronze**: 10% de juros.
    - **Prata**: 5% de juros.
    - **Ouro**: Isento de juros (0%).

Resposta:

```ruby
print "Digite sua idade: "
idade = Integer(gets.chomp)

print "Digite sua renda mensal: "
renda = Float(gets.chomp)

print "Digite o valor do empréstimo solicitado: "
valor_emprestimo = Float(gets.chomp)

print "Possui restrição no CPF? (S/N): "
texto_restricao = gets.chomp.upcase

if texto_restricao == "S"
  restricao = true
elsif texto_restricao == "N"
  restricao = false
else
  puts "Dado inválido. O programa será encerrado."
  exit
end

puts "Nível de relacionamento:"
puts "1 - Bronze"
puts "2 - Prata"
puts "3 - Ouro"
print "Escolha o nível: "
entrada_nivel = gets.chomp

if entrada_nivel == "1"
  nivel = 1
elsif entrada_nivel == "2"
  nivel = 2
elsif entrada_nivel == "3"
  nivel = 3
else
  puts "Nível inválido. O programa será encerrado."
  exit
end

aprovado = false
motivo = ""

# "A menos que tenha restrição..." (Se NÃO tiver restrição, entra no bloco)
unless restricao
  if idade < 18
    motivo = "Cliente menor de idade"
  elsif valor_emprestimo > (renda * 15)
    motivo = "Valor solicitado excede o limite de 15x a renda"
  else
    aprovado = true
  end
else
  motivo = "Cliente possui restrição no CPF"
end

if aprovado
  case nivel
  when 1 # Bronze
    taxa = 0.10
  when 2 # Prata
    taxa = 0.05
  when 3 # Ouro
    taxa = 0.0
  else
    taxa = 0.10 # Padrão para opção inválida
  end
  
  valor_final = valor_emprestimo * (1 + taxa)
  puts "--- Resultado ---"
  puts "Empréstimo Aprovado!"
  puts "Taxa de juros aplicada: #{(taxa * 100).to_i}%"
  puts "Valor total a pagar: R$ #{valor_final.round(2)}"
else
  puts "--- Resultado ---"
  puts "Empréstimo Negado."
  puts "Motivo: #{motivo}"
end
```
{: .bg-dark .text-light .p-3}

## Comentários sobre os Exercícios {#comentarios-sobre-os-exercicios}
---

Vamos analisar cada exercício com calma para entender o que o código está fazendo.

### Comentário sobre o Exercício 1 {#comentario-exercicio-1}
---

Neste exercício, a ideia era pedir para o computador ler três números (que chamamos de A, B e C) e depois verificar se a soma dos dois primeiros (A e B) é menor do que o terceiro (C).

- <code class="text-white-50 text-light">A = 0.0</code>, <code class="text-white-50 text-light">B = 0.0</code>, <code class="text-white-50 text-light">C = 0.0</code>: Criamos as variáveis A, B e C já com um valor inicial de 0.0. Isso serve para dizer ao computador que elas vão guardar números decimais (com vírgula).
- <code class="text-white-50 text-light">A = Float(gets.chomp)</code>: O comando <code class="text-white-50 text-light">gets</code> pega o que foi digitado no teclado. O <code class="text-white-50 text-light">chomp</code> serve para limpar a tecla "Enter" que fica no final quando confirmamos a digitação. O <code class="text-white-50 text-light">Float()</code> transforma esse texto em um número decimal, para podermos fazer contas com ele.
- <code class="text-white-50 text-light">if A + B < C</code>: Aqui o computador verifica: "A soma de A mais B é menor que C?".
- <code class="text-white-50 text-light">puts</code>: Mostra o resultado na tela. O símbolo <code class="text-white-50 text-light">#{}</code> serve para colocar o valor da variável dentro do texto.

Usamos <code class="text-white-50 text-light">Float</code> (número decimal) em vez de <code class="text-white-50 text-light">Integer</code> (número inteiro) para que o programa funcione mesmo se alguém digitar valores quebrados, como 2.5.

### Comentário sobre o Exercício 2 {#comentario-exercicio-2}
---

A proposta aqui era comparar dois números. Se eles fossem iguais, deveríamos somar um ao outro. Se fossem diferentes, deveríamos multiplicar um pelo outro.

**Análise Linha a Linha:**

- <code class="text-white-50 text-light">Integer(gets.chomp)</code>: Transforma o que foi digitado em um número inteiro (sem vírgula), pois o exercício pedia números inteiros.
- <code class="text-white-50 text-light">if A == B</code>: O sinal <code class="text-white-50 text-light">==</code> serve para comparar. O computador pergunta: "O valor de A é igual ao valor de B?". Se for sim, ele executa a linha de baixo.
- <code class="text-white-50 text-light">C = A + B</code>: Soma os valores e guarda o resultado na variável C.
- <code class="text-white-50 text-light">else</code>: Significa "senão". Ou seja, se A não for igual a B, o computador executa o que está aqui dentro.
- <code class="text-white-50 text-light">C = A * B</code>: Multiplica os valores.

**Variável Auxiliar C**: Note que guardamos o resultado em C e só usamos o comando <code class="text-white-50 text-light">puts</code> uma vez no final. Isso evita repetir código desnecessariamente.

### Comentário sobre o Exercício 3 {#comentario-exercicio-3}
---

Precisávamos pegar um número e fazer uma verificação. Se ele fosse maior que zero (positivo), o resultado seria o dobro dele. Se fosse menor que zero (negativo), o resultado seria o triplo.

**Análise Linha a Linha:**

- <code class="text-white-50 text-light">if numero > 0</code>: Verifica se o número é maior que zero.
- <code class="text-white-50 text-light">elsif numero < 0</code>: Verifica se o número é menor que zero.
- <code class="text-white-50 text-light">else</code>: Se não é maior nem menor que zero, só pode ser o próprio zero. Nesse caso, o resultado continua sendo zero.

**O caso do Zero**: O código lida bem com o zero. Se tivéssemos feito de qualquer jeito, poderíamos acabar multiplicando o zero sem querer, mas aqui ele cai no <code class="text-white-50 text-light">else</code> e fica inalterado.

### Comentário sobre o Exercício 4 {#comentario-exercicio-4}
---

A missão era colocar três números em ordem, do maior para o menor (ordem decrescente).

**Análise Linha a Linha:**

- <code class="text-white-50 text-light">numeros = []</code>: Criamos uma lista vazia. Imagine uma lista (Array) como uma caixa onde podemos guardar vários valores juntos, um depois do outro.
- <code class="text-white-50 text-light">numeros << n1</code>: O símbolo <code class="text-white-50 text-light"><<</code> coloca o valor dentro da nossa lista. Fazemos isso com os três números.
- <code class="text-white-50 text-light">numeros.sort!.reverse!</code>: Aqui usamos dois comandos poderosos do Ruby.
    - <code class="text-white-50 text-light">.sort!</code>: Organiza a lista do menor para o maior.
    - <code class="text-white-50 text-light">.reverse!</code>: Inverte a lista, ficando do maior para o menor.
- <code class="text-white-50 text-light">.join(', ')</code>: Junta todos os números da lista em um texto só, separando por vírgula, para mostrar na tela.

**Facilidade das Listas**: Usar uma lista (Array) é muito mais fácil do que tentar comparar cada número com o outro usando vários <code class="text-white-50 text-light">if</code>. O Ruby já tem ferramentas prontas para ordenar listas.

### Comentário sobre o Exercício 5 {#comentario-exercicio-5}
---

O exercício pedia para calcular o peso ideal usando duas informações: a altura e o sexo biológico da pessoa.

**Análise Linha a Linha:**

- <code class="text-white-50 text-light">gets.chomp.upcase</code>: O <code class="text-white-50 text-light">upcase</code> transforma o texto digitado em letras maiúsculas. Assim, se a pessoa digitar "m" minúsculo, o programa entende como "M" maiúsculo e funciona corretamente.
- <code class="text-white-50 text-light">case sexo</code>: Inicia uma verificação de casos. É como dizer "No caso da variável sexo ser...".
- <code class="text-white-50 text-light">when "M"</code> e <code class="text-white-50 text-light">when "F"</code>: Verifica se é "M" ou "F". Dependendo da letra, usa a fórmula matemática correta para cada caso.
- <code class="text-white-50 text-light">exit</code>: Se a pessoa digitar uma letra que não seja M ou F, o programa avisa e encerra (sai) imediatamente, para não fazer contas erradas.

**case vs if**: Quando queremos verificar se uma variável é igual a várias coisas diferentes (é igual a M? é igual a F?), usar o <code class="text-white-50 text-light">case</code> deixa o texto mais limpo e fácil de ler do que usar vários <code class="text-white-50 text-light">if</code>.

### Comentário sobre o Exercício 6 {#comentario-exercicio-6}
---

Aqui calculamos o Índice de Massa Corporal (IMC) e depois verificamos em qual categoria de peso esse valor se encaixa.

**Análise Linha a Linha:**

- <code class="text-white-50 text-light">imc = peso / (altura * altura)</code>: Faz a conta matemática do IMC.
- <code class="text-white-50 text-light">case imc</code>: Vamos analisar o valor do IMC.
- <code class="text-white-50 text-light">when 18.5..24.9</code>: O Ruby permite verificar se um número está dentro de um intervalo. Os dois pontos <code class="text-white-50 text-light">..</code> significam "de 18.5 até 24.9". Isso facilita muito a leitura.
- <code class="text-white-50 text-light">when 40.0..Float::INFINITY</code>: Verifica se o valor vai de 40 até o infinito (qualquer valor acima de 40).

**Intervalos (Ranges)**: Escrever <code class="text-white-50 text-light">18.5..24.9</code> é muito mais simples do que escrever "se for maior ou igual a 18.5 E menor ou igual a 24.9".

### Comentário sobre o Exercício 7 {#comentario-exercicio-7}
---

A ideia era calcular o valor final de uma compra dependendo de como a pessoa escolheu pagar (à vista, parcelado, etc).

**Análise Linha a Linha:**

- **Menu de Opções**: Primeiro mostramos as opções (1, 2, 3, 4) na tela.
- <code class="text-white-50 text-light">when 1</code>: Se escolher 1, multiplicamos por 0.90 (que é o mesmo que dar 10% de desconto).
- <code class="text-white-50 text-light">when 3</code>: Se escolher 3, apenas dividimos o preço por 2, sem juros nem desconto.
- <code class="text-white-50 text-light">when 4</code>: Se escolher 4, multiplicamos por 1.10 (aumenta 10%, ou seja, juros) e depois dividimos pelas parcelas.

**Organização**: Cada opção de pagamento tem seu próprio bloco de código. Se amanhã a loja mudar a regra dos juros, basta mexer apenas no bloco da opção 4, sem bagunçar o resto.

### Comentário sobre o Exercício 8 {#comentario-exercicio-8}
---

Precisávamos calcular uma média de notas, mas algumas notas valiam mais que as outras (média ponderada). Depois, transformamos essa nota numérica em um conceito de letra (A, B, C, D ou E).

**Análise Linha a Linha:**

- **Cálculo da Média**: Usamos parênteses para garantir que as multiplicações aconteçam antes da soma, seguindo as regras da matemática.
- **if/elsif para Conceito**: O código verifica as notas da maior para a menor. Primeiro vê se é maior que 90. Se não for, vê se é maior que 75, e assim por diante.
- <code class="text-white-50 text-light">case conceito</code>:
    - <code class="text-white-50 text-light">when "A", "B", "C"</code>: A vírgula funciona como um "OU". Se o conceito for A, OU B, OU C, a pessoa está aprovada.

**Passo a passo**: Primeiro calculamos o número, depois transformamos em letra, e por fim decidimos se aprovou ou não. Fazer uma coisa de cada vez deixa o programa mais organizado.

### Comentário sobre o Exercício 9 {#comentario-exercicio-9}
---

Este foi o exercício mais complexo. Precisávamos decidir se um empréstimo seria aprovado ou não, seguindo várias regras sobre idade, renda e restrições no nome.

**Análise Linha a Linha:**

- **Sim ou Não**: Primeiro transformamos a resposta "S" ou "N" em verdadeiro (<code class="text-white-50 text-light">true</code>) ou falso (<code class="text-white-50 text-light">false</code>). Isso ajuda o computador a tomar decisões lógicas depois.
- <code class="text-white-50 text-light">unless restricao</code>: O <code class="text-white-50 text-light">unless</code> funciona como um "a não ser que". Podemos ler como: "Faça isso, a não ser que a pessoa tenha restrição".
    - Se tiver restrição, ele pula toda a análise e vai direto para a parte de negar o empréstimo.
    - Se não tiver restrição, ele entra no bloco para verificar idade e renda.
- **Decisão e Cálculo**: Usamos uma variável chamada <code class="text-white-50 text-light">aprovado</code> para marcar se deu tudo certo. Só no final, se estiver aprovado, é que calculamos os juros baseados no nível do cliente (Bronze, Prata ou Ouro).

**Portão de Entrada**: O <code class="text-white-50 text-light">unless</code> serviu como um segurança na porta. Se tiver problema no CPF, nem adianta olhar o resto (idade, renda), o pedido já é barrado logo no início.

## Resumo {#resumo}
---

Neste artigo, expandimos nosso conhecimento sobre como fazer o computador tomar decisões. Além das estruturas básicas que já conhecíamos (<code class="text-white-50 text-light">if</code>, <code class="text-white-50 text-light">else</code> e <code class="text-white-50 text-light">elsif</code>), aprendemos duas novas ferramentas muito poderosas:

**Unless (A menos que)**: É como um "se não". Em vez de pensar "se isso for verdade, faça aquilo", pensamos "a menos que isso seja verdade, faça aquilo". É útil quando queremos focar nas exceções ou quando a lógica negativa faz mais sentido na linguagem humana.

**Case (Caso)**: Uma forma muito organizada de verificar várias possibilidades para uma mesma variável. Em vez de escrever vários <code class="text-white-50 text-light">if</code> e <code class="text-white-50 text-light">elsif</code>, usamos <code class="text-white-50 text-light">when</code> para cada opção. É perfeito para menus, categorias ou qualquer situação onde temos muitas comparações de igualdade. No <code class="text-white-50 text-light">when</code>, vimos que os <code class="text-white-50 text-light">..</code> (dois pontos) ajudam a definir intervalos de valores, ou seja, "de valor X até valor Y".

Através de nove exercícios práticos, vimos como essas estruturas funcionam em situações do dia a dia: desde comparações simples entre números até sistemas complexos como análise de empréstimos bancários. Cada exercício nos ensinou algo diferente sobre como organizar a lógica do programa.

Também vimos que existem várias formas de resolver o mesmo problema. Podemos usar <code class="text-white-50 text-light">if</code> com negação (<code class="text-white-50 text-light">!</code>) ou usar <code class="text-white-50 text-light">unless</code>. Podemos fazer vários <code class="text-white-50 text-light">elsif</code> ou organizar tudo num <code class="text-white-50 text-light">case</code>. A escolha depende de qual forma deixa o código mais organizado, legível e fácil de manter.

Quando programamos além de calcular o quanto nosso código custa ao computador, precisamos pensar também em como ele será entendido por outras pessoas programadoras (ou para o nosso "eu" do futuro). Código limpo e bem estruturado é tão importante quanto código que funciona corretamente, pois se a gente precisar voltar nele depois, vai agradecer por ter construído um bom código desde o início.