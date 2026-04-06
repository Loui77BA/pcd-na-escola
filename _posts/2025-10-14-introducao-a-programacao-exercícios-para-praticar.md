---
layout: post
title: "Introdução à Programação: Exercícios para Praticar"
description: "Chegou a hora de praticar todo o conhecimento adquirido na série de posts sobre introdução à programação! Neste artigo, você encontrará uma variedade de exercícios para colocar em prática o que aprendeu."
date: 2025-10-14 10:00:00 -0300
author: Louise Suelen
categories: [Programação]
tags: [programação, tecnologia]
lang: pt-BR
series: "introducao-a-programacao"
---

## Apresentação
---

No artigo anterior, aprendemos sobre as estruturas de repetição em Ruby. Vimos o `while` e o `until`, que repetem código enquanto uma condição for verdadeira ou falsa. Depois, o `for` e o `each`, que percorrem coleções como arrays e ranges, e o `times`, que repete uma ação um número exato de vezes. Por fim, o `loop`, que cria um ciclo que só para com o comando `break`, e o `next`, que pula para a próxima iteração sem executar o restante do bloco.

Com esse artigo, encerramos o ciclo de apresentação dos fundamentos da programação nesta série. Ao longo dos últimos artigos, passamos por variáveis, tipos de dados, entrada e saída de dados, expressões condicionais e estruturas de repetição. São os blocos básicos com os quais qualquer programa é construído.

Mas saber o que existe e saber usar são coisas diferentes. É como aprender as regras de um jogo: você pode ler o manual inteiro e ainda não saber jogar. A leitura e os exemplos dos artigos anteriores apresentaram os conceitos isolados, agora chegou o momento de combiná-los para resolver problemas reais.

Neste artigo, esses conceitos serão colocados em prática com exercícios organizados em três níveis de dificuldade. No nível básico, os programas são curtos e diretos, focados em um conceito por vez. No intermediário, diferentes estruturas começam a ser combinadas para resolver problemas mais elaborados. No avançado, o desafio é pensar no programa como um sistema completo, com menus, validações e estruturas de dados.

Para cada exercício há o enunciado, uma explicação passo a passo de como chegar na solução e o código completo ao final.

**Dica importante**: Antes de ler a solução, tente resolver o exercício por conta própria. Mesmo que o resultado não seja perfeito, o esforço de pensar na solução é o que realmente desenvolve o raciocínio lógico. A solução apresentada aqui é apenas uma das formas possíveis de resolver cada problema.

## Nível Básico
---

Os exercícios do nível básico focam nos fundamentos da programação: variáveis, entrada de dados, conversão de tipos e condicionais simples. Você vai praticar o uso de `puts`, `print`, `gets.chomp`, interpolação de strings, o operador de módulo `%` e estruturas `if/else`. São três programas curtos e diretos, ideais para quem está dando os primeiros passos na escrita de código.

### Programa saudação personalizada
---

O programa pede para a pessoa digitar um nome e depois imprime uma saudação personalizada com o nome digitado.

#### Como fazer?

Para desenvolver este e qualquer outro programa, devemos dividir o problema grande em passos lógicos menores. O raciocínio deve seguir o fluxo:

- **Entrada**
- **Processamento**
- **Saída**

O problema é: Preciso pegar um texto da pessoa (o nome) e devolvê-lo dentro de uma frase.

Então precisamos de:

- Uma maneira de mostrar texto na tela.
- Uma maneira de capturar (pegar) o que a pessoa digita.
- Um lugar para guardar essa informação que a pessoa digitou (variável).

Precisamos criar uma variável vazia chamada `nome` para guardar o que a pessoa digitar depois. Então vamos criar e inicializar essa variável como uma `string` vazia.

```ruby
nome = ""
```

*Em Ruby, diferente de outras linguagens de programação, isso não é estritamente obrigatório (você poderia criar a variável direto no momento da leitura), mas ajuda na organização mental e do código.*

O próximo passo é informar à pessoa o que o programa faz e pedir a informação correta. Vamos usar `puts` e `print`.

```ruby
puts "Programa de Saudação Personalizada" # Título que pula linha no final
print "Por favor, digite seu nome: "      # Pergunta que não pula a linha
```

Agora o programa deve parar e esperar a pessoa digitar a informação e apertar `ENTER`.

Temos que lembrar de ler a informação do teclado (com o `gets`), mas também temos que limpar o espaço causado pela tecla `Enter` que vem junto, usando `chomp`.

Então usamos:

```ruby
nome = gets.chomp
```

Agora temos o nome guardado na variável `nome` e precisamos misturá-lo com uma frase fixa.

Vamos escrever a frase fixa e, no meio dela, inserir o nome que está dentro da variável. Também vamos evitar que tenham espaços sobrando no nome guardado, tanto no começo quanto no final. Para limpar esses espaços, caso eles existam, vamos usar o método `strip`.

Podemos fazer isso assim:

```ruby
puts "Olá #{nome.strip}! Receba as boas-vindas ao nosso programa!"
```

O programa completo ficou assim:

```ruby
# Declara variável para receber o nome da pessoa
nome = ""

# Pede para a pessoa digitar seu nome
puts "Programa de Saudação Personalizada"
print "Por favor, digite seu nome: "
nome = gets.chomp

# Exibe a saudação personalizada
puts "Olá #{nome.strip}! Receba as boas-vindas ao nosso programa!"
```

### Programa calculadora de idade atual
---

O programa deve pedir para a pessoa digitar um ano de nascimento (exemplo: 1995) e depois deve mostrar sua idade aproximada.

É importante lembrar de fazer a validação para impedir que a pessoa passe letras ao programa, uma data de nascimento que seja impossível (muito no passado, como 1500) ou uma data futura superior à data atual.

#### Como fazer?

O problema é: Precisamos garantir que a pessoa digite um dado válido. Se ela digitar errado, o programa não pode continuar; precisamos repetir a pergunta até receber uma informação válida.

Sabemos quantas tentativas a pessoa vai gastar até colocar um ano de nascimento válido? Não. Precisamos que o programa comece pedindo um ano de nascimento e só pare de pedir quando receber um valor correto.

Qual laço de repetição pode ser usado nestas condições? O `while`.

Para fazer o programa ser executado na primeira vez, vamos assumir que a pessoa **ainda não tem** uma idade válida (idade = 0). Enquanto a idade continuar inválida (ou zero), o programa fica preso num loop (laço de repetição) perguntando o ano.

```ruby
idade = 0
while idade <= 0
  # Perguntas e validações acontecem aqui dentro
end
```

E se a pessoa digitar "abcd" em vez de números? Se tentarmos fazer algum cálculo matemático ("2025 menos abcd"), o programa vai "quebrar" (dar erro e fechar).

Temos que converter o que a pessoa digitar para números inteiros (porque não existem anos com vírgula, como 1995,2). Mas, se a pessoa digitar letras, ao invés de travar, temos que transformar o que ela digitou em um valor nulo (`nil`) silenciosamente.

Vamos tentar transformar o texto em número inteiro usando `Integer(...)`. Se der erro (porque a pessoa não digitou números), vamos usar o `rescue` para capturar esse erro e transformar o valor em `nil` (nulo) em vez de travar o sistema.

Podemos fazer assim:

```ruby
print "Digite o seu ano de nascimento (exemplo: 1990): "
ano_nascimento = Integer(gets.chomp) rescue nil
```

*Isso é fundamental: sem o `rescue nil`, quando a pessoa digitar letras, isso travaria o programa imediatamente e ele seria encerrado com erro.*

Ok! Mas agora, como fazer a validação do ano digitado?

Por exemplo, se a pessoa digitou um número absurdo, que não tem como ser um ano de nascimento (exemplo: ano 1500 ou ano 3000). A solução é criar um `if` com várias barreiras. A informação digitada é rejeitada se **qualquer uma** das condições ruins for verdade.

O ano será considerado inválido SE:

- For vazio (`nil?`, como no caso em que digitamos letras e o `rescue` converteu para `nil`) **OU** (`||`)
- For muito antigo, de forma que não tenha como a pessoa estar viva (menor que o ano 1900) **OU** (`||`)
- For no futuro (maior que o ano atual).

Então devemos perguntar se o ano de nascimento é nulo, se ele é menor que 1900 ou maior que o ano atual.

Podemos fazer isso assim:

```ruby
if ano_nascimento.nil? || ano_nascimento < 1900 || ano_nascimento > Time.now.year
    puts "Ano de nascimento inválido. Por favor informe um ano válido."
else
```

Neste caso, o `if` está testando três condições ao mesmo tempo:

1. **`ano_nascimento.nil?`**: "O valor dentro da variável `ano_nascimento` é nulo?" (ou seja, a pessoa digitou letras?).
2. **`ano_nascimento < 1900`**: "A pessoa digitou uma data antes de 1900?" (o que provavelmente é um erro).
3. **`ano_nascimento > Time.now.year`**: "O ano de nascimento digitado é maior que o ano atual?" (o que também é um erro). O `Time.now.year` pega o ano atual direto do relógio do computador automaticamente.

Se o valor digitado passou pelas condições do `if` (não é nulo, não é menor que 1900 e não é futuro), entramos no "caso contrário", o `else`. Dentro do `else`, fazemos o cálculo.

- Colocamos a variável `ano_atual` para receber o ano atual do relógio do computador.
- Depois, a `idade` vai receber o ano atual menos o ano digitado.
- Então a variável `idade` vai ser atualizada com esse resultado.
    - Por exemplo: `idade = 2026 - 1995`
    - A variável `idade` vai atualizar de `0` para `31`.

Como a `idade` agora é um número positivo (exemplo: 31), quando o programa chegar no fim do bloco (no `end`) e voltar lá no `while`, a condição `idade <= 0` será **falsa**. O loop quebra e o programa avança sem repetir a pergunta.

O código do `else` ficaria assim:

```ruby
else
  # Calcular a idade atual
  ano_atual = Time.now.year
  idade = ano_atual - ano_nascimento
end
```

Depois de fazer todo esse cálculo, é preciso exibir o resultado para a pessoa:

```ruby
puts "O ano atual é #{Time.now.year}, seu ano de nascimento é #{ano_nascimento}, então a sua idade atual é aproximadamente #{idade} anos."
```

O programa completo fica assim:

```ruby
# Variável que vai guardar a idade da pessoa
idade = 0

# Vamos pedir o ano de nascimento da pessoa
# Lembrar de validar que a pessoa não digitou letras ou um ano impossível

puts "Programa calculadora de idade atual"

while idade <= 0

  print "Digite o seu ano de nascimento (exemplo: 1990): "
  ano_nascimento = Integer(gets.chomp) rescue nil

  if ano_nascimento.nil? || ano_nascimento < 1900 || ano_nascimento > Time.now.year
    puts "Ano de nascimento inválido. Por favor informe um ano válido."
  else
    # Calcular a idade atual
    ano_atual = Time.now.year
    idade = ano_atual - ano_nascimento
  end
end

puts "O ano atual é #{Time.now.year}, seu ano de nascimento é #{ano_nascimento}, então a sua idade atual é aproximadamente #{idade} anos."
```

### Programa que identifica se o número é par ou ímpar
---

O programa deve receber um número digitado pelo usuário e determinar se ele é par ou ímpar.

#### Como fazer?

A pergunta que devemos fazer é: como eu ensino para uma máquina o que é um número par ou ímpar? Na matemática, um número é par se, ao ser dividido por 2, **não sobra nada** (o resto é zero). Se sobrar alguma coisa, então o número é ímpar.

Vamos precisar de uma variável para receber o número:

```ruby
numero = 0.0
```

Depois, precisamos informar o nome do programa e pedir um número para a pessoa. Vamos usar o `puts` para exibir o nome do programa (com quebra de linha) e `print` para pedir o número (sem quebra de linha, mantendo o cursor ao lado).

```ruby
puts "Programa que calcula se um número é par ou ímpar"
print "Digite um número: "
```

Depois vamos usar a variável `numero` para receber o que a pessoa digita. Precisamos converter para `Float` (número decimal com vírgula) e limpar o espaço causado pela tecla `Enter`.

Geralmente, este tipo de programa costuma usar números inteiros. Mas, usando `Float`, o programa não travará se alguém digitar "2.5" ou "7.2". Se a pessoa digitar um número inteiro como 4, o programa converterá para 4.0 e o cálculo funcionará normalmente.

Podemos receber o número dessa forma:

```ruby
numero = Float(gets.chomp)
```

Podemos usar um `if numero % 2 == 0` para fazer a pergunta: se o número digitado for dividido por 2, o resto da divisão (o que sobra) é igual a 0?

- Se o resto da divisão for **0**, a divisão foi exata. O número é **PAR**.
- Se o resto da divisão **não** for 0, o número é **ÍMPAR**.

Vamos usar o `%`, que é o operador no Ruby para calcular o resto de uma divisão.

O código da verificação ficaria assim:

```ruby
if numero % 2 == 0
  puts "#{numero} dividido por 2 é igual a #{numero / 2}, portanto é um número par."
else
  puts "#{numero} dividido por 2 é igual a #{numero / 2}, portanto é um número ímpar."
end
```

Depois finalizamos o bloco condicional (`if` / `else`) com o `end` e imprimimos que o programa finalizou.

O código completo fica assim:

```ruby
# Vamos pedir para a pessoa digitar um número e determinar se ele é par ou ímpar

numero = 0.0

puts "Programa que calcula se um número é par ou ímpar"

print "Digite um número: "
numero = Float(gets.chomp)

if numero % 2 == 0
  puts "#{numero} dividido por 2 é igual a #{numero / 2}, portanto é um número par."
else
  puts "#{numero} dividido por 2 é igual a #{numero / 2}, portanto é um número ímpar."
end

puts "Fim do programa."
```

## Nível Intermediário
---

No nível intermediário, os exercícios combinam laços de repetição (`for`, `while`, `each`, `loop`, `times`) com lógicas mais elaboradas, como acumuladores, contadores, validação de entradas e o uso do `rescue` para tratar erros. Você vai implementar tabuadas, contar vogais, verificar números primos, somar quantidades variáveis de números, gerar a sequência de Fibonacci e criar um jogo de adivinhação. O objetivo é aprender a pensar além de um único bloco de código e combinar estruturas para resolver problemas mais complexos.

### Programa para exibir a tabuada de um número
---

O programa deve receber um número digitado pela pessoa e informar a sua tabuada de multiplicação de 1 a 10.

#### Como fazer?

O problema consiste em repetir uma mesma operação matemática (multiplicação) várias vezes, alterando apenas um dos números.

Precisamos:

1. Receber o número que a pessoa quer calcular.
2. Criar um laço de repetição que vá de 1 até 10.
3. Dentro desse laço, multiplicar o número escolhido pelo contador atual e mostrar o resultado.

Vamos começar pedindo o número:

```ruby
numero = 0

puts "\nPrograma para exibir a tabuada de um número.\n"
print "\nDigite um número inteiro: "
numero = Integer(gets.chomp)
```

Agora, vamos ver como resolver a repetição. Existem três formas principais de fazer isso em Ruby: o jeito clássico (`for`), o jeito manual (`while`) e o jeito "Ruby" (`each`).

#### 1. O Jeito Clássico: O Laço `for`

```ruby
for i in 1..10
  resultado = numero * i
  puts "#{numero} x #{i} = #{resultado}"
end
```

Aqui estamos dizendo: "Para (`for`) cada número (`i`) dentro do intervalo de 1 até 10 (`1..10`), faça o que está abaixo". O computador pega o primeiro número (1), coloca na variável `i`, executa o bloco, volta, pega o próximo (2), e assim por diante até o 10.

#### 2. O Jeito "Manual": O Laço `while`

```ruby
i = 1

while i <= 10
  resultado = numero * i
  puts "#{numero} x #{i} = #{resultado}"
  i += 1
end
```

O while significa "enquanto". Definimos manualmente que `i = 1`. Enquanto i for menor ou igual a 10, ele executa.

Atenção: No while, precisamos aumentar o contador manualmente (`i += 1`). Se esquecermos isso, o `i` será sempre 1 e o programa ficará preso num loop infinito.

#### 3. O Jeito "Ruby": O Laço `each`

```ruby
(1..10).each do |i|
  resultado = numero * i
  puts "#{numero} x #{i} = #{resultado}"
end
```

Este é o jeito preferido em Ruby.

- `(1..10)`: Criamos o intervalo de números.
- `.each do`: Dizemos "para **cada** item dentro deste intervalo, faça...".
- `|i|`: As barras verticais funcionam como uma pinça que pega o número da vez e coloca na variável `i`.

Embora os três produzam o mesmo resultado visual, o `each` é a maneira mais comum em Ruby, focada em percorrer coleções de dados.

No programa completo demonstrando os três métodos e fica assim:

```ruby
numero = 0

puts "\nPrograma para exibir a tabuada de um número.\n"
print "\nDigite um número inteiro: "
numero = Integer(gets.chomp)

puts "Tabuada do número #{numero} usando o laço 'for':\n\n"

for i in 1..10
  resultado = numero * i
  puts "#{numero} x #{i} = #{resultado}"
end

puts "\nA mesma tabuada usando o laço 'while':\n\n"

i = 1

while i <= 10
  resultado = numero * i
  puts "#{numero} x #{i} = #{resultado}"
  i += 1
end

puts "\nA mesma tabuada usando o laço 'each':\n\n"

(1..10).each do |i|
  resultado = numero * i
  puts "#{numero} x #{i} = #{resultado}"
end
```

### Programa contador de vogais
---

O programa deve receber uma frase ou texto digitado pela pessoa e identificar quantas vogais existem nele.

#### Como fazer?

O computador é muito literal: para ele, "a" é totalmente diferente de "á" ou "A". Se não limparmos o texto, teríamos que procurar pela mesma letra várias vezes, testando cada possibilidade de acento ou maiúscula.

Então o fluxo lógico será:

1. Receber a frase.
2. Limpar a frase: remover acentos e transformar tudo em minúsculo.
3. Percorrer letra por letra da frase limpa.
4. Verificar se a letra atual é uma vogal conhecida.
5. Se for, somar 1 ao contador.

Primeiro, definimos o que são vogais e pedimos a frase:

```ruby
vogais = ["a", "e", "i", "o", "u"]

puts "\nPrograma contador de vogais.\n\n"
print "Digite uma frase: "
frase_digitada = gets.chomp
```

Agora precisamos fazer o "tratamento dos dados". Vamos usar o método `tr` (Translate/Traduzir) para trocar letras com acento por letras sem acento.

```ruby
sem_acentos = frase_digitada.tr(
  "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÔÖÚÙÛÜÇ",
  "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC"
)
```

Depois, transformamos tudo em letras minúsculas para padronizar a comparação:

```ruby
frase_minuscula = sem_acentos.downcase
```

Agora que o texto está limpo, vamos contá-lo. Vamos iniciar um contador (`total_vogais`) em zero e verificar caractere por caractere.

```ruby
total_vogais = 0

frase_minuscula.each_char do |char|
  if vogais.include?(char)
    total_vogais += 1
  end
end
```

- `frase_minuscula.each_char do |char|`: Para cada caractere da frase, coloque-o na variável temporária `char`.
- `if vogais.include?(char)`: Pergunta "A letra que está em `char` faz parte da minha lista de `vogais`?".
- Se sim, adicionamos 1 ao `total_vogais`.

O programa completo fica assim:

```ruby
vogais = ["a", "e", "i", "o", "u"]

puts "\nPrograma contador de vogais.\n\n"
print "Digite uma frase: "
frase_digitada = gets.chomp

# Substituindo letras acentuadas por suas equivalentes sem acento
sem_acentos = frase_digitada.tr(
  "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÔÖÚÙÛÜÇ",
  "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC"
)

frase_minuscula = sem_acentos.downcase

total_vogais = 0

frase_minuscula.each_char do |char|
  if vogais.include?(char)
    total_vogais += 1
  end
end

puts "\nA frase '#{frase_digitada}' possui #{total_vogais} vogais.\n\n"
```

### Programa que verifica se um número é primo
---

O programa deve receber um número e identificar se ele é primo ou não, informando o resultado à pessoa.

Um **número primo** é aquele que só aceita ser dividido por 1 e por ele mesmo (exemplos: 2, 3, 5, 7, 11...). Se o número aceitar ser dividido por qualquer outro valor, ele não é primo.

#### Como fazer?

A lógica que vamos usar é a seguinte: usa uma estratégia chamada “bandeira" (flag). Vamos assumir inicialmente que o número é primo (bandeira levantada/true) e tentar provar o contrário. Se encontrarmos qualquer número que consiga dividir o número digitado pela pessoa, baixamos a bandeira (false) e paramos de procurar, pois já conseguiremos provar que o número não é primo.

Primeiro, recebemos o número:

```ruby
numero = 0
puts "\nPrograma que verifica se um número é primo.\n\n"
print "Digite um número inteiro positivo (exemplo: 7): "
numero = Integer(gets.chomp)

primo = true # Começamos acreditando que é primo
```

Agora vamos às regras de validação:

1. **Números menores que 2**: Na matemática, 0, 1 e números negativos não são primos. Se o número for menor que 2, já definimos `primo = false`.
2. **Números a partir de 2**: Precisamos testar. Vamos criar um laço que vai do número 2 até o número imediatamente anterior ao digitado (`numero - 1`).
    - *Por que começar do 2?* Porque todo número divide por 1, então testar o 1 é inútil.
    - *Por que parar no anterior?* Porque todo número divide por ele mesmo. Queremos saber se existe algum "intruso" no meio do caminho que consiga dividir.

O código de verificação será:

```ruby
if numero < 2
  primo = false
else
  # Testamos do 2 até o número anterior
  for i in 2..(numero - 1)
    if numero % i == 0
      primo = false
      break # Para o laço imediatamente, já sabemos que não é primo
    end
  end
end
```

Note o uso do `break`: ele funciona como um botão de emergência. Se descobrimos que 10 divide por 2, não precisamos testar se divide por 3, 4 ou 5. Já sabemos que não é primo, então paramos para economizar processamento.

Por fim, exibimos o resultado baseados no estado da nossa variável `primo`.

O programa completo fica assim:

```ruby
numero = 0

puts "\nPrograma que verifica se um número é primo.\n\n"
print "Digite um número inteiro positivo (exemplo: 7): "
numero = Integer(gets.chomp)

primo = true

# Números menores que 2 não são primos
if numero < 2
  primo = false
else
  # Caso contrário, vamos testar do 2 até o número anterior ao escolhido
  for i in 2..(numero - 1)
    if numero % i == 0
      primo = false
      break # Para o laço porque já sabemos que não é primo
    end
  end
end

# Mostrando o resultado
if primo
  puts "\nO número #{numero} é primo!\n\n"
else
  puts "\nO número #{numero} não é primo!\n\n"
end
```

### Programa que soma N números
---

O programa deve perguntar quantos números a pessoa deseja somar, depois pedir quais são os números e fazer a soma. No final deve exibir o valor total da soma.

#### Como fazer?

Vamos usar um **acumulador** (uma variável que começa em zero e guarda o total de números que a pessoa quer somar). Também vamos usar um **loop** (laço de repetição) que roda a quantidade de vezes que a pessoa definiu quando disse quantos números queria somar.

Exemplo: se a pessoa disser que quer somar 10 números o programa deve executar o laço de repetição 10 vezes.

Vamos começar declarando as variáveis. Isso é obrigatório no Ruby? Não, mas no estudo de lógica de programação isso ajuda a ir organizando o raciocínio.

Precisamos de:

- Uma variável para guardar **quantos** números vamos somar. Vamos iniciar ela com valor 0.
- Uma variável `Float` para registrar a soma dos números.
- Um `array` para guardar os números digitados
- Uma variável temporária para guardar o que a pessoa digitar no teclado.
- Uma variável temporária para guardar o número convertido para `Float`.

A declaração das variáveis fica assim:

```ruby
# Vamos definir as variáveis "gavetas" que o programa vai precisar
# Vamos iniciar as variáveis com valores padrão (0, 0.0 e nil) para evitar erros

quantidade_numeros = 0 # Vai guardar quantos números a pessoa  quer somar
soma = 0.0              # Vai guardar a soma dos números
numeros_digitados = [] # Vai guardar os números digitados pela pessoa
entrada_digitada = nil # Vai guardar o que a pessoa digitou no teclado
numero_convertido = 0.0 # Vai guardar o número convertido para float
```

Depois podemos usar um puts para apresentar o programa.

```ruby
puts "Programa que soma N números definidos por você."
```

Agora precisamos fazer duas coisas:

- Descobrir quantos números a pessoa quer somar
- Validar o que foi digitado pela pessoa

Queremos que a pessoa informe nesse primeiro momento quantos números ela quer somar, então:

- A quantidade de números a serem somados é um valor inteiro, pois não se pode somar 1,5 ou 3,4 números. Podemos somar 2 números, 3, 4, 5 e assim por diante.
- Quando fazemos a pergunta “quantos números você deseja somar?” não podemos aceitar valores como -5, -2 ou 0. Não temos como somar um número negativo de vezes e também não temos como somar 0 vezes, isso é o mesmo que não somar.
- Também não podemos aceitar o número 1. Somar um número vai dar ele mesmo, se perguntamos a pessoa quantos números ela quer somar e ela responder 1 vamos somar esse número com o quê? Com nada, então a resposta será esse próprio número. Não tem motivo para essa operação ser feita, então devemos impedir essa entrada.
- O valor mínimo para a quantidade de números que podem ser somados tem que ser 2, pois para fazer uma soma precisamos de pelo menos dois números.
- Além disso, devemos verificar se a pessoa digitou números mesmo e caso tenha digitado letras ou outros símbolos devemos impedir o avanço do programa até ela digitar um número válido.

Como vamos fazer isso? Vamos usar uma estratégia de forma que o programa não aceita avançar até que a pessoa coloque um número válido.

Vamos criar um ciclo infinito, de forma que o único jeito de sair dele é encontrar o comando `break`.

Dentro desse ciclo infinito vamos usar **`gets.chomp`** para o programa pausar e esperar a pessoa digitar. O `.chomp` é essencial para limpar o caractere `Enter` (nova linha) que vem junto com a digitação.

Para implementar essa estratégia de "não deixar passar até acertar", vamos usar o bloco de tratamento de erros do Ruby. Pense nele como uma rede de segurança: nós *tentamos* (`begin`) converter o que a pessoa digitou para um número inteiro. Se a pessoa tiver digitado letras (como "dez" ou "abc"), o Ruby vai gerar um erro chamado `ArgumentError`. Em vez de o programa travar e fechar na cara da pessoa, nós *resgatamos* (`rescue`) esse erro e mostramos uma mensagem amigável.

O código para essa parte fica assim:

```ruby
loop do
  print "Quantos números você quer somar? "
  begin
    entrada_digitada = gets.chomp
    # Tentamos converter o texto para um Inteiro estrito.
    # Se tiver letras, o comando Integer() grita um erro!
    quantidade_numeros = Integer(entrada_digitada)

    # Se a conversão funcionou, o código chega aqui.
    # Agora verificamos a regra de negócio: precisa ser pelo menos 2.
    if quantidade_numeros < 2
      puts "A quantidade de números deve ser pelo menos 2. Tente novamente."
    else
      # Se passou na conversão E passou na verificação de valor,
      # podemos quebrar o ciclo infinito e avançar.
      break
    end
  rescue ArgumentError
    # Se o Integer() falhou lá em cima, o código pula direto para cá.
    puts "Entrada inválida. Por favor, digite um número inteiro positivo (ex: 3)."
  end
end
```

Neste ponto, já garantimos que a variável `quantidade_numeros` tem um valor válido (por exemplo, 3). Agora precisamos pedir os números propriamente ditos que a pessoa quer somar.

Para isso, não vamos usar um `while` manual. O Ruby tem um jeito muito elegante de dizer "faça isso X vezes": o método `.times`. Como a nossa variável `quantidade_numeros` é um número inteiro, ela "sabe" como repetir algo.

Dentro dessa repetição, precisaremos de **outro ciclo de validação**. Por que? Imagine que a pessoa disse que quer somar 5 números. Ela digita o primeiro, o segundo... e no terceiro ela digita "banana" sem querer. Não queremos que o programa volte lá para o início, queremos apenas que ele insista: "Ei, digite o 3º número corretamente".

Além disso, para os números da soma, vamos aceitar números quebrados (com ponto), então usaremos `Float()` em vez de `Integer()` na conversão. E não esqueça: precisamos guardar cada número válido no nosso array `numeros_digitados` e somá-lo na variável `soma`.

Veja como fica essa lógica traduzida para código:

```ruby
puts "Você quer somar #{quantidade_numeros} números."

# O |i| é o contador automático. Ele começa valendo 0.
quantidade_numeros.times do |i|
  loop do
    # Usamos (i + 1) para mostrar "1º número" em vez de "0º número"
    print "Digite o #{i + 1}º número para somar: "
    begin
      entrada_digitada = gets.chomp
      
      # Convertendo para Float para aceitar decimais (ex: 10.5)
      numero_convertido = Float(entrada_digitada)
      
      # Se chegou aqui, o número é válido! Vamos guardar nas gavetas.
      
      # 1. Guarda na lista para mostrar no final
      numeros_digitados << numero_convertido 
      
      # 2. Acumula no valor total
      soma += numero_convertido 
      
      # Pronto, pegamos esse número. Podemos sair do loop de validação
      # e deixar o.times ir para a próxima repetição.
      break 
    rescue ArgumentError
      puts "Entrada inválida. Digite um número válido (ex: 10, 4.5, -2)."
    end
  end
end
```

Agora que o laço `.times` terminou, significa que todos os números foram pedidos, validados, guardados e somados. As nossas variáveis estão cheias com as informações corretas.

A última etapa é apenas exibir o resultado.
Para mostrar a lista de números que a pessoa digitou, o nosso array `numeros_digitados` precisa virar um texto bonito. O método `.join("\n")` faz exatamente isso: ele pega cada item da lista e cola um no outro usando uma "nova linha" (`\n`) como cola.

E para mostrar a soma, usamos a interpolação `#{soma}` dentro da string, o que evita termos que ficar convertendo tipos manualmente.

```ruby
# Mostrando o resultado final

puts "Você digitou #{quantidade_numeros} números. São eles:\n#{numeros_digitados.join("\n")}."
puts "A soma dos números que você digitou é: #{soma}."
puts "Obrigado por usar o programa de soma!"
```

O código completo do programa fica assim:

```ruby
# Vamos definir as variáveis "gavetas" que o programa vai precisar
# Vamos iniciar as variáveis com valores padrão (0, 0.0 e nil) para evitar erros

quantidade_numeros = 0 # Vai guardar quantos números a pessoa  quer somar
soma = 0.0              # Vai guardar a soma dos números
numeros_digitados = [] # Vai guardar os números digitados pela pessoa
entrada_digitada = nil # Vai guardar o que a pessoa digitou no teclado
numero_convertido = 0.0 # Vai guardar o número convertido para float

puts "Programa que soma N números definidos por você."

# Descobrindo quantos números a pessoa quer somar

loop do
  print "Quantos números você quer somar? "
  begin
    entrada_digitada = gets.chomp
    quantidade_numeros = Integer(entrada_digitada)
    if quantidade_numeros < 2
      puts "A quantidade de números a serem somados deve ser pelo menos 2 e devem ser números inteiros positivos, por exemplo: 3. Tente novamente."
    else
      break
    end
  rescue ArgumentError
    puts "Entrada inválida. Por favor, digite um número inteiro positivo. Exemplo: 3"
  end
end

# Pedindo os números para a pessoa e somando

puts "Você quer somar #{quantidade_numeros} números."

quantidade_numeros.times do |i|
  loop do
    print "Digite o #{i + 1}º número para somar: "
    begin
      entrada_digitada = gets.chomp
      numero_convertido = Float(entrada_digitada)
      numeros_digitados << numero_convertido
      soma += numero_convertido
      break
    rescue ArgumentError
      puts "Entrada inválida. Por favor, digite um número válido. Exemplos: 10, 4.5, -3.2, 200"
    end
  end
end

# Mostrando o resultado final para a pessoa

puts "Você digitou #{quantidade_numeros} números. São eles:\n#{numeros_digitados.join("\n")}."
puts "A soma dos números que você digitou é: #{soma}."
puts "Obrigado por usar o programa de soma!"
```

### Programa que exibe a sequência de Fibonacci
---

O objetivo deste programa é gerar a **Sequência de Fibonacci** e exibir a quantidade de termos da sequência que a pessoa digitar. Ou seja, se a pessoa disser que quer visualizar 10 termos o programa deve mostrar os 10 primeiros números da sequência de Fibonacci.

Na matemática, essa sequência começa geralmente com 0 e 1, e cada número seguinte é a soma dos dois anteriores.

Exemplo da sequência: 0, 1, 1, 2, 3, 5, 8…

Porque:

- 0 + 1 = 1,
- 1 + 1 = 2,
- 1 + 2 = 3,
- 3 + 2 = 5
- 5 + 3 = 8.

E assim por diante.

#### Como fazer?

Vamos dividir o problema em três partes:

- Parte 1: Preparação e Validação da Entrada
- Parte 2: Configuração das Variáveis da Sequência
- Parte 3: Cálculo e Exibição da sequência

Vamos começar a etapa 1 de preparação e validação da entrada criando a variável `quantidade_de_termos` e atribuindo a ela o valor `nil` (nulo/vazio). Isso será feito porque precisamos que ela exista e esteja vazia para que a condição do `while` (que vamos criar depois) seja verdadeira na primeira vez que o programa rodar.

```ruby
quantidade_de_termos = nil
```

Agora vamos mostrar a pessoa o título do programa:

```ruby
puts "Programa para exibir a sequência de Fibonacci"
```

Agora o que vamos fazer é criar um laço de repetição que só para quando a pessoa digitar um número válido. Se ela digitar algo errado, a variável continua `nil` e o loop se repete.

Vamos usar o `while` que significa "enquanto", pois queremos que enquanto a quantidade de termos (números) que a pessoa deseja visualizar for nula, o programa faça alguma coisa.

O `while` vai começar perguntando: a quantidade de termos é nula?

```ruby
while quantidade_de_termos.nil?
```

Dentro do while vamos incluir:

- **`print`:** Para mostrar a pergunta na tela sem pular linha, assim a resposta vai ser digitada ao lado da pergunta.
- `quantidade_de_termos =`: É a variável que vai receber o número que a pessoa digitar.
- **`Integer(...)`:** Para transformar o texto digitado em um Número Inteiro antes de armazenar na variável.
- **`gets.chomp`:** Para pegar o que a pessoa digitou e remover o "Enter" final.
- **`rescue nil`:** Se o `Integer` falhar (porque a pessoa digitou texto ao invés de números como "dez" ou "abc"), o comando normalmente daria erro e fecharia o programa. O `rescue nil` age nesse momento e se der erro, ele captura o erro e no lugar de fechar o programa ele devolve `nil` para ser colocado na variável.

Então a variável `quantidade_de_termos` deve receber o que a pessoa digitar (através do **`gets.chomp`),** esse conteúdo digitado deve ser convertido para um número inteiro antes de ser passado para a variável (pelo **`Integer(...)`**) e se o **`Integer(...)`**  não conseguir converter o conteúdo digitado para inteiro o `rescue` vai passar o valor `nil` para a variável ao invés de só dar erro e encerrar o programa.

O código ficará assim:

```ruby
print "Quantos números da sequência de Fibonacci você deseja ver? "
quantidade_de_termos = Integer(gets.chomp) rescue nil
```

Depois disso, vamos adicionar um `if` para avaliar se a conversão falhou (e virou `nil`), se sim avisamos para a pessoa.

Para encerrar essa parte colocamos um `end` para fechar o `while`. Se a pessoa digitou um número correto, `quantidade_de_termos` passa a ter um valor válido (exemplo: 5), o `while` percebe que não é mais `nil` e libera o programa para seguir em frente.

O código fica assim:

```ruby
  if quantidade_de_termos.nil?
    puts "Erro: Por favor, digite um número inteiro válido."
  end
end
```

Agora vamos configurar as variáveis que serão usadas para calcular a sequência de Fibonacci propriamente dita.

Vamos usar:

- **`termo_anterior = 0`**
- **`termo_atual = 1`**
- **`i = 1`**

Mas, por que esses valores de inicialização para as variáveis?

A Sequência de Fibonacci funciona com uma regra simples: **o próximo número é a soma dos dois anteriores.** Para a matemática começar a funcionar, você precisa de dois números "semente" (o pontapé inicial). A sequência clássica começa assim:
`0, 1, 1, 2, 3...` 

Se olharmos para as variáveis antes do laço de repetição começar:

- `termo_anterior = 0` Representa o **primeiro** número da sequência.
- `termo_atual = 1` Representa o **segundo** número da sequência.

**O que aconteceria se `termo_atual` fosse 0?**
O cálculo seria:
`0 (anterior) + 0 (atual) = 0 (próximo)`
O programa ficaria preso em zeros eternamente (0, 0, 0, 0...), porque 0 + 0 nunca vai dar outro resultado. Precisamos desse `1` para fazer a soma começar a crescer.

Já a variável `i` é o nosso **contador, ela vai** controlar quantas vezes vamos repetir o código. 

Imagine que a pessoa pediu para ver **3 termos** (`quantidade_de_termos = 3`).

A condição do nosso `while` é:
`enquanto i <= quantidade_de_termos`

Então para atender essa condição qual valor precisamos inicializar i? Vamos testar…

- Se a gente iniciar `i = 0` então:

```ruby
Volta 1 do laço de repetição: i vale 0. (0 <= 3? Sim).

Volta 2 do laço de repetição: i vale 1. (1 <= 3? Sim).

Volta 3 do laço de repetição: i vale 2. (2 <= 3? Sim).

Volta 4 do laço de repetição: i vale 3. (3 <= 3? Sim).
```

**Resultado:** Mostrou 4 vezes, isso estaria errado, porque deveria exibir três vezes conforme o solicitado pela pessoa. Aqui teria mostrado um número a mais do que a pessoa pediu.

- Se a gente iniciar `i = 1` então:

```ruby
Volta 1 do laço de repetição: i vale 1. (1 <= 3? Sim. Mostra o 1º termo).

Volta 2 do laço de repetição: i vale 2. (2 <= 3? Sim. Mostra o 2º termo).

Volta 3 do laço de repetição: i vale 3. (3 <= 3? Sim. Mostra o 3º termo).

Volta 4 do laço de repetição: i vale 4. (4 <= 3? Não. Para de mostrar).
```

**Resultado:** Mostrou 3 vezes. **Correto, é o número de termos que a pessoa pediu para ver.**

Por isso, precisamos iniciar o i com 1.

Depois de inicializar as variáveis do cálculo, vamos mostrar um cabeçalho bonito, pulando uma linha (`\n`) antes de mostrar a sequência Fibonacci.

```ruby
termo_anterior = 0
termo_atual = 1
i = 1 # Variável de controle para contar os termos exibidos

puts "\nSequência de Fibonacci (Exibindo #{quantidade_de_termos} termos):"
```

Agora vamos calcular a sequência enquanto o contador `i` for menor ou igual ao número que a pessoa pediu. Exemplo: Se a pessoa pediu 5 termos, o laço vai rodar quando `i` for 1, 2, 3, 4 e 5. Quando `i` for 6, ele para.

Precisamos ter bastante atenção neste cálculo, pois devido ao fato de fazermos a passagem dos valores por mais de uma variável pode ficar um pouco confuso.

Vamos lá…

Além das variáveis:

- `termo_anterior`, que inicializamos com 0, que servirá para guardar o número anterior da sequência.
- `termo_atual`, que inicializamos com 1, que servirá para guardar o número atual da sequência.
- `i`, que inicializamos com 1, que será o contador que garante que o laço de repetição não seja executado infinitamente.

Também vamos precisar da variável:

- `proximo_termo`, que vamos usar para calcular o próximo número (que será a soma dos dois anteriores).

Com essas variáveis o passo a passo do laço de repetição será:

1. Mostrar o número que está em `termo_anterior`.
2. Calcular o próximo termo
3. Atualizar os valores das variáveis
4. Incrementar o contador `i` para o laço de repetição avançar

O laço de repetição usado será um `while` para repetir até mostrar a quantidade de termos que a pessoa pediu, ou seja até que `i <= quantidade_de_termos`.

Com `termo_anterior = 0` e `termo_atual = 1` no início do `while` acontecerá o seguinte:

- mostra o valor de `termo_anterior`.
    - Na primeira vez 0, porque é o valor que iniciamos a variável.
- Depois vamos calcular o próximo termo que será `proximo_termo = termo_anterior + termo_atual`.
    - Na primeira vez `proximo_termo = 0 + 1`, ou seja, 1 porque `termo_anterior` neste momento é 0 e `termo_atual` é 1.
- Depois vamos atualizar os valores das variáveis `termo_anterior` passa a ser o antigo `termo_atual` e o `termo_atual` passa a ser o `proximo_termo`.
    - Então agora temos `termo_anterior = 1` e `termo_atual = 1`.
- Depois precisamos incrementar o contador, para o laço de repetição avançar e não ficar se repetindo para sempre.
    - Então precisamos fazer `i += 1`.
- Na próxima execução do `while` ele vai mostrar no terminal o novo valor de `termo_anterior`.
    - Que agora é 1.
- Vai calcular o próximo termo que será `proximo_termo = termo_anterior + termo_atual`.
    - Agora 1 + 1 = 2 então o próximo termo será 2.
- Depois o laço vai atualizar as variáveis.
    - Agora `termo_anterior = 1`, `termo_atual = 2`.
- Depois ele vai incrementar o i mais uma vez para o laço ser executado novamente.

E assim, ele vai repetir esse processo até que o valor de i seja igual a quantidade de termos que a pessoa pediu para ver.

O código desse trecho ficará assim:

```ruby
while i <= quantidade_de_termos
  print "\n#{termo_anterior}"

  proximo_termo = termo_anterior + termo_atual
  termo_anterior = termo_atual
  termo_atual = proximo_termo

  i += 1
end
```

O programa completo ficará assim:

```ruby
quantidade_de_termos = nil

# Título do programa
puts "Programa para exibir a sequência de Fibonacci"

# Estrutura de repetição para garantir uma entrada válida
while quantidade_de_termos.nil?
  print "Quantos números da sequência de Fibonacci você deseja ver? "

  # Uso do rescue na mesma linha para retornar nil em caso de erro
  quantidade_de_termos = Integer(gets.chomp) rescue nil

  if quantidade_de_termos.nil?
    puts "Erro: Por favor, digite um número inteiro válido."
  end
end

termo_anterior = 0
termo_atual = 1
i = 1 # Variável de controle para contar os termos exibidos

puts "\nSequência de Fibonacci (Exibindo #{quantidade_de_termos} termos):"

while i <= quantidade_de_termos
  print "\n#{termo_anterior}"

  proximo_termo = termo_anterior + termo_atual
  termo_anterior = termo_atual
  termo_atual = proximo_termo

  i += 1
end

puts "\n\nFim do programa."
```

### Programa que gera um número aleatório e pede para a pessoa adivinhar qual é
---

O computador vai “escolher” um número aleatório, de 1 a 10 e a pessoa vai tentar descobrir qual é. O programa não pode parar (fechar) até que a pessoa acerte. Se a pessoa errar, o programa deve pedir para ela tentar outra vez digitando outro número.

Lembre-se de impedir que o programa processe letras, números decimais ou qualquer coisa que não seja um número inteiro.

#### Como fazer?

Vamos começar criando uma variável chamada `numero_secreto` para receber o número gerado aleatoriamente. Mas, como vamos gerar esse número aleatório? Vamos usar `rand(1..10)` que significa: “sorteie um número dentro desse intervalo entre 1 e 10”.

Exemplo: pode sair 3, ou 7, ou 10… cada execução pode sortear um número diferente.

Então:

```ruby
numero_secreto = rand(1..10)
```

Quer dizer “faça o sorteio de um número aleatório dentro do intervalo entre 1 e 10 e depois coloque esse número dentro da variável `numero_secreto`”.

Depois vamos criar a variável `palpite` e iniciar ela com valor 0.

Após a criação das variáveis vamos exibir mensagens para a pessoa com o nome do programa e a orientação do que ela deve fazer. 

```ruby
puts "Programa de Adivinhação de Números"
puts "Tente adivinhar o número secreto entre 1 e 10."
```

Agora enquanto o número informado pela pessoa for diferente do número armazenado na variável `numero_secreto` (o número sorteado), o programa deverá continuar executando o bloco de código responsável por solicitar novas tentativas de adivinhação a pessoa.

Para isso vamos usar o `while`:

```ruby
while palpite != numero_secreto
  ...
end
```

Aqui estamos dizendo isso, enquanto o valor do palpite for diferente do número secreto, repita a execução do bloco.

Ou seja:

- Se a pessoa **errar**, o programa **continua** pedindo outro palpite.
- Só vai parar de pedir quando o `palpite == numero_secreto` (quando a pessoa acertar).

Dentro do `while` primeiro vamos colocar um `print` pedindo o palpite:

```ruby
print "Digite seu palpite: "
```

Depois vamos ler a entrada digitada pela pessoa, remover a quebra de linha ao final e tentar convertê-la em um número inteiro.

Se a pessoa digitar um número válido, ele será convertido, mas se a entrada digitada não for um número, ocorre erro e por isso o `rescue nil`   deve ser usado, pois ao invés de interromper o programa, retorna-se `nil` em caso de erro na conversão. 

Colocaremos o valor que foi pego da entrada na variável `palpite`:

```ruby
palpite = Integer (gets.chomp) rescue nil
```

Vamos comparar valores, mas antes precisamos validar a entrada para evitar cálculos com dados não numéricos. Se a entrada for inválida, o bloco `rescue` transforma o valor em `nil`, e é preciso checar se esse valor é nulo antes de continuar. 

```ruby
if palpite.nil?
  puts "Por favor, insira um número válido."
  next
end
```

Aqui `palpite.nil?` pergunta: “o palpite é `nil`?” Se for `nil`, significa que a pessoa digitou algo que não virou número então mostramos a mensagem informando o erro. 

O `next` dentro do `while` é usado para fazer o inverso do comando `break`, se nós usamos o comando break para parar a execução imediatamente, o `next`  é usado para interromper a atividade atual e iniciar a próxima atividade imediatamente no laço de repetição. 

É como dizer: "Não é o resultado esperado, então interrompa e siga para o próximo comando no loop." 

Neste caso, o próximo comando será pedir o palpite de novo.

Agora temos que verificar se o palpite digitado pela pessoa está no intervalo entre os números 1 e 10. Precisamos garantir que o palpite não seja `≤ 0` (o, -1, -2, -3 e assim por diante nos números negativos), ele também não pode ser `> 10`  (11, 12, 13 e assim por diante).

Para garantir que o palpite vai estar entre 1 e 10 (que é o que queremos) vamos fazer:

```ruby
if palpite <= 0 || palpite > 10
  puts "Seu palpite deve estar entre o número 1 e o número 10."
  next
end
```

Assim, estamos dizendo que se o palpite for menor ou igual a 0 OU maior que 10, ele é inválido e não pode ser aceito. Com o palpite inválido nós mostramos a mensagem:

```ruby
puts "Seu palpite deve estar entre o número 1 e o número 10."
```

E usamos o `next` para pular as próximas etapas e pedir outro palpite de novo. 

Agora que validamos o palpite chegou a hora de comparar ele com o número secreto. Como vamos fazer isso? Vamos verificar se ele é menor ou maior e se ele não for menor nem maior só poderá ser igual. 

- Se o palpite for menor que o número secreto, precisamos dizer a pessoa que o número escolhido por ela é muito baixo e que ela precisa tentar de novo.
- Se o palpite for maior que o número secreto, precisamos dizer a pessoa que o número escolhido por ela é muito alto e que ela precisa tentar de novo.
- Se o palpite não for menor e também não for maior ele só poderá ser igual ao número secreto. Então isso significa que a pessoa vai ter acertado o número secreto, que seu palpite estava correto. Nesse caso precisamos exibir uma mensagem de parabéns.

Vamos fazer isso dessa forma:

```ruby
if palpite < numero_secreto
  puts "Muito baixo! Tente novamente."
elsif palpite > numero_secreto
  puts "Muito alto! Tente novamente."
else
  puts "Parabéns! Você adivinhou o número secreto #{numero_secreto}!"
end
```

Nós começamos escolhendo as dicas:

- Se `palpite < numero_secreto`: isso quer dizer que a pessoa chutou um número menor do que o secreto então o programa diz: “Muito baixo!” para ela saber que o número que ela escolheu é menor que o número secreto.
- `elsif palpite > numero_secreto`: senão, se o número escolhido pela pessoa for maior que o número secreto então o programa diz: “Muito alto!” para ela saber disso.
- `else`: ou seja, se não é menor e não é maior, então só pode ser **igual, logo a pessoa acertou o número. Neste caso, devemos imprimir parabéns e exibir o número.** Por isso usamos `#{numero_secreto}` para inserir o número secreto na mensagem de parabéns.

Quando a pessoa acerta o número, o valor de `palpite` passa a ser exatamente igual ao `numero_secreto`.

O `while` só continua rodando (executando) **enquanto os dois forem diferentes** (`palpite != numero_secreto`). Então, no momento em que eles ficam iguais, essa condição deixa de ser verdadeira.

Em outras palavras: o laço existe para repetir o jogo **até a pessoa acertar**. Assim que acerta, a condição falha e o `while` simplesmente para de executar.

Assim o programa termina.

O programa completo fica assim:

```ruby
numero_secreto = rand(1..10)
palpite = 0

puts "Programa de Adivinhação de Números"
puts "Tente adivinhar o número secreto entre 1 e 10."

# enquanto o palpite for diferente do número secredo

while palpite != numero_secreto
  print "Digite seu palpite: "
  palpite = Integer (gets.chomp) rescue nil

  if palpite.nil?
    puts "Por favor, insira um número válido."
    next
  end

  if palpite <= 0 || palpite > 10
    puts "Seu palpite deve estar entre o número 1 e o número 10."
    next
  end

  if palpite < numero_secreto
    puts "Muito baixo! Tente novamente."
  elsif palpite > numero_secreto
    puts "Muito alto! Tente novamente."
  else
    puts "Parabéns! Você adivinhou o número secreto #{numero_secreto}!"
  end
end
```

## Nível Avançado
---

Os exercícios avançados exigem pensar no programa como um sistema completo, com menus interativos, validação rigorosa de entradas, ciclos de repetição com múltiplas condições de saída e estruturas de dados como arrays e hashes. O foco é integrar todos os recursos anteriores em programas mais robustos e próximos de aplicações reais.

### Programa que converte dias, horas e minutos em segundos
---

Escreva um programa que recebe:

- Uma quantidade de dias (entre 1 e 365)
- Ou uma quantidade de horas (podem ser ilimitadas, mas não zero ou negativas)
- Ou uma quantidade de minutos (que também podem ser ilimitados, mas não zero ou negativos)

O programa deve identificar o que foi inserido, fazer a conversão e informar para a pessoa quantos segundos são equivalentes ao que item informado.

#### Como fazer?

A primeira etapa, como sempre, é apresentar o programa para as pessoas e dizer o que ele faz:

```ruby
puts "Programa que converte dias, horas ou minutos em segundos."
```

Depois vamos usar um:

```ruby
loop do
  ...
  break if resposta == "n"
end
```

Por que usar isso? Imagine que nós queremos converter dias em segundos; depois, minutos em segundos; em seguida, horas em segundos. Para garantir que o programa continue perguntando se a pessoa deseja fazer novas conversões e repita esse processo enquanto ela quiser, precisamos desse recurso. 

Depois vamos criar o menu de opções, para isso precisamos de uma variável:

```ruby
  # Menu de opções
  opcao = nil
```

Fazemos isso para que o `while` da próxima linha funcione na primeira vez.

Depois vamos inserir:

```ruby
  while opcao.nil? || ![1, 2, 3].include?(opcao)
```

Essa linha quer dizer “**enquanto a opção for nula (`nil`) OU não for 1, 2 ou 3, repita o bloco abaixo"**.

Onde:

• `opcao.nil?` pergunta: "a opção está nula?”

- `||` representa o operador **"ou"**
- `![1, 2, 3].include?(opcao)` pergunta: "a opção digitada pela pessoa NÃO está na lista [1, 2, 3]?" O `!` na frente inverte a resposta, pergunta se é diferente.

Esse é um recurso de segurança do menu: não deixa a opção passar enquanto não for válida, ou seja 1, 2 ou 3.

Depois colocamos um:

```ruby
    puts ""
```

Que Imprime uma linha em branco na tela só para dar um espaçamento visual e deixar mais bonito.

Na sequência colocamos:

```ruby
    puts "Escolha qual informação você deseja converter"
    puts "1 - Converter dias em segundos"
    puts "2 - Converter horas em segundos"
    puts "3 - Converter minutos em segundos"
```

Aqui mostramos o menu com as 3 opções. Cada `puts` escreve uma linha na tela para que as opções fiquem uma abaixo da outra.

Depois colocamos:

```ruby
    print "Digite sua opção: "
```

Usamos `print` para mostrar a mensagem, mas **não pular para a próxima linha**. Assim o cursor fica ali do lado, esperando a pessoa digitar na mesma linha e a resposta dela vai ficar ao lado da pergunta.

O próximo passo é incluir:

```ruby
opcao = Integer(gets.chomp) rescue nil
```

Onde:

1. `gets` **pega** o que a pessoa digitou no teclado (incluindo o `Enter`)
2. `.chomp` **tira o `Enter`** do final
3. `Integer(...)` tenta **converter** o texto em número inteiro. Se a pessoa digitou "2", vira o número 2
4. `rescue nil` é usado **se der erro** (exemplo: a pessoa digitou "banana", que não é número), em vez de o programa quebrar e dar erro, ele coloca `nil` (nada) na variável, assim a opção será nula e o `while`, que verifica isso, vai pedir para ela digitar uma opção válida.

Depois criamos um:

```ruby
    if opcao.nil? || ![1, 2, 3].include?(opcao)
      puts "Opção inválida! Escolha 1, 2 ou 3."
      opcao = nil
    end
```

Para verifica se a opção é inválida (mesma verificação do `while`). Se for:

- Avisa a pessoa que sim a opção é inválida
- Coloca `nil` na `opcao` de novo, para garantir que o `while` vai repetir

Já o `end` fecha o `if`.

Na próxima linha usaremos um `end` para fechar o `while` do menu. Se a opção foi válida, o programa segue em frente. Se não foi , volta para pedir a pessoa para digitar uma opção que seja.

Continuando vamos usar um `case` para analisar o valor da variável `opcao` e escolher qual caminho seguir.

```ruby
# Entrada do valor conforme a opção escolhida
  case opcao
```

Quando a opção for 1 o `case` entra no bloco de conversão de **dias**.

Dentro desse bloco será criada uma variável chamada `valor` começando com `nil` (nulo), igual fizemos com a variável `opcao`.

```ruby
  when 1
    valor = nil
```

Isso é feito para a variável ser usada em um `while`  logo abaixo.

O `while` será esse:

```ruby
while valor.nil? || valor < 1 || valor > 365
```

Ou seja, estamos dizendo que "enquanto o valor for nulo (nada), OU menor que 1, OU maior que 365, repita o bloco para pedir a quantidade de dias para a pessoa." Só será aceito um valor de dias entre 1 e 365 (os dias de um ano).

Usaremos:

```ruby
print "Digite quantos dias você deseja converter para segundos: "
```

Para pedir o valor a pessoa, com o cursor na mesma linha que a pergunta.

E, usaremos:

```ruby
valor = Float(gets.chomp) rescue nil
```

Para analisar o que foi digitado, limpar, verificar se é válido para colocar na variável `valor`. A diferença é que `Float` aceita **números decimais** como `1.5` (um dia e meio). Se a pessoa digitar algo inválido será transformado em `nil` (nulo).

Depois faremos um `if` para caso o valor não passar na validação, avisar a pessoa. Assim, o `while` vai repetir e pedir de novo para a pessoa digitar a quantidade de dias que ela quer converter. 

Ele ficará assim:

```ruby
      if valor.nil? || valor < 1 || valor > 365
        puts "Essa quantidade de dias é inválida! Por favor, insira um número entre 1 e 365."
      end
```

Depois usaremos um `end` para fechar o `while` da validação de dias.

O próximo passo é fazer a conta: **dias × 24 horas × 60 minutos × 60 segundos**. 

```ruby
segundos = (valor * 24 * 60 * 60).round
```

O `.round` arredonda o resultado para um número inteiro (exemplo: 129600.0 vira 129600), porque não faz sentido ter "meio segundo" aqui.

O próximo passo é mostrar o resultado. 

```ruby
puts "#{valor} dia(s) equivalem a #{segundos} segundos."
```

Assim encerramos o que acontece quando a opção for 1.

Quando a opção for 2 o `case` entra no bloco de conversão de **horas**.

Aqui seguiremos a mesma lógica dos dias (que criamos no caso 1), mas aqui o valor só precisa ser **maior que zero**. Pode ser qualquer número positivo, sem limite.

Então vamos colocar a variável `valor` como nula e configurar nosso `while` como:

```ruby
    valor = nil

    while valor.nil? || valor <= 0
```

Depois colocaremos:

```ruby
      print "Digite a quantidade de horas: "
      valor = Float(gets.chomp) rescue nil

      if valor.nil? || valor <= 0
        puts "Essa quantidade de horas é inválida! Por favor, insira um número maior que zero."
      end
```

Para pedir, converter e validar o `valor` seguindo a mesma estrutura que criamos no caso dos dias.

Usamos `end` para fechar o `while` das horas.

Na sequência fazemos o cálculo:

```ruby
segundos = (valor * 60 * 60).round
```

Aqui, usamos **Horas × 60 minutos × 60 segundos**. Não precisamos multiplicar por 24 porque já estamos em horas.

No final usamos:

```ruby
puts "#{valor} hora(s) equivalem a #{segundos} segundos."
```

Para mostrar o resultado e encerramos o caso 2.

Quando a opção for 3 o `case` entra no bloco de conversão de **minutos**.

Vamos usar:

```ruby
    valor = nil

    while valor.nil? || valor <= 0
      print "Digite a quantidade de minutos: "
      valor = Float(gets.chomp) rescue nil

      if valor.nil? || valor <= 0
        puts "Essa quantidade de minutos é inválida! Por favor, insira um número maior que zero."
      end
    end
```

Que é uma estrutura semelhante as anteriores para pedir, converter, validar e repetir se for necessário.

Depois vamos fazer o cálculo de m**inutos × 60 segundos**. Só uma multiplicação, porque minuto já está a um passo de segundo.

Será assim:

```ruby
segundos = (valor * 60).round
```

Na sequência exibimos o resultado:

```ruby
puts "#{valor} minuto(s) equivalem a #{segundos} segundos."
```

E, fechamos o `case` com `end`. O programa já fez a conversão e agora segue em frente.

Na sequência vamos colocar um:

```ruby
  puts ""
```

Apenas para dar um espaço visual na resposta.

Depois, vamos criar uma variável chamada `resposta` iniciada com `nil` (nulo) para o próximo `while` que vamos fazer funcionar.

```ruby
resposta = nil
```

Esse próximo `while` será assim:

```ruby
  while resposta != "s" && resposta != "n"
    print "Deseja fazer outra conversão? (s para sim ou n para não): "
    resposta = gets.chomp.downcase

    if resposta != "s" && resposta != "n"
      puts "Resposta inválida! Por favor, digite 's' para sim ou 'n' para não."
    end
  end
```

Ou seja, enquanto a resposta for diferente de sim (`!= "s"`) e de não (`!= "n"`) vai mostrar a mensagem: `"Resposta inválida! Por favor, digite 's' para sim ou 'n' para não."` e depois vai perguntar se a pessoa deseja fazer outra conversão e ler a resposta novamente. 

Daí é só colocar um `break` para o programa encerrar se `resposta == “n”`, encerrar o `loop` com `end` e colocar uma mensagem de fim do programa. 

Vai ficar assim:

```ruby
 break if resposta == "n"
end

puts "Programa encerrado. Até a próxima!"
```

O código completo fica assim:

```ruby
puts "Programa que converte dias, horas ou minutos em segundos."

loop do
  # Menu de opções
  opcao = nil

  while opcao.nil? || ![1, 2, 3].include?(opcao)
    puts ""
    puts "Escolha qual informação você deseja converter"
    puts "1 - Converter dias em segundos"
    puts "2 - Converter horas em segundos"
    puts "3 - Converter minutos em segundos"
    print "Digite sua opção: "

    opcao = Integer(gets.chomp) rescue nil

    if opcao.nil? || ![1, 2, 3].include?(opcao)
      puts "Opção inválida! Escolha 1, 2 ou 3."
      opcao = nil
    end
  end

  # Entrada do valor conforme a opção escolhida
  case opcao
  when 1
    valor = nil

    while valor.nil? || valor < 1 || valor > 365
      print "Digite quantos dias você deseja converter para segundos: "
      valor = Float(gets.chomp) rescue nil

      if valor.nil? || valor < 1 || valor > 365
        puts "Essa quantidade de dias é inválida! Por favor, insira um número entre 1 e 365."
      end
    end

    segundos = (valor * 24 * 60 * 60).round
    puts "#{valor} dia(s) equivalem a #{segundos} segundos."
  when 2
    valor = nil

    while valor.nil? || valor <= 0
      print "Digite a quantidade de horas: "
      valor = Float(gets.chomp) rescue nil

      if valor.nil? || valor <= 0
        puts "Essa quantidade de horas é inválida! Por favor, insira um número maior que zero."
      end
    end

    segundos = (valor * 60 * 60).round
    puts "#{valor} hora(s) equivalem a #{segundos} segundos."
  when 3
    valor = nil

    while valor.nil? || valor <= 0
      print "Digite a quantidade de minutos: "
      valor = Float(gets.chomp) rescue nil

      if valor.nil? || valor <= 0
        puts "Essa quantidade de minutos é inválida! Por favor, insira um número maior que zero."
      end
    end

    segundos = (valor * 60).round
    puts "#{valor} minuto(s) equivalem a #{segundos} segundos."
  end

  # Pergunta se deseja continuar
  puts ""
  resposta = nil

  while resposta != "s" && resposta != "n"
    print "Deseja fazer outra conversão? (s para sim ou n para não): "
    resposta = gets.chomp.downcase

    if resposta != "s" && resposta != "n"
      puts "Resposta inválida! Por favor, digite 's' para sim ou 'n' para não."
    end
  end

  break if resposta == "n"
end

puts "Programa encerrado. Até a próxima!"

```

### Programa para cadastrar pessoas
---

Crie um pequeno sistema para cadastrar pessoas com nome, idade. Guarde as informações em um array de hashes. Após os cadastros, mostre a lista completa.

Exemplo: 

```ruby
[{ nome: "João", idade: 20 }, { nome: "Ana", idade: 25 }]
```

#### Como fazer?

Vamos começar criando um array chamado `pessoas`, lembrando que um array é uma lista que segue uma ordem. Imagine ele como se fosse uma caixa vazia onde vamos guardar fichas de cadastro. Cada ficha terá o nome e a idade de uma pessoa. Por enquanto, a caixa está vazia. 

Vamos também apresentar o programa e deixar uma linha em branco antes de pedir os dados para cadastrar.

```ruby
pessoas = []  # Array que vai guardar os dados

puts "Programa para cadastrar pessoas"
puts ""
```

Agora, como o texto não deu detalhes de como quer que o sistema seja criado, existem várias formas de continuar o programa:

- Podemos perguntar quantas pessoas serão cadastradas e executar um laço de repetição, como o `times` ou `for`, para pedir os dados até chegar no total de pessoas.
- Podemos definir um número máximo de pessoas que poderão ser cadastradas e impedir que o sistema cadastre novas pessoas quando atingir este número.
- Podemos assumir que não sabemos o número de pessoas que devem ser cadastradas e deixar o sistema fazer cadastros até que quem esteja cadastrando digite algo como `‘sair’`, assim podemos usar laços como o `loop` ou `while` para controlar o fluxo.

Nesses casos nós não vamos pela implementação ou código mais simples, vamos pela alternativa que cobre o maior número de possibilidades. Então vamos assumir que não sabemos quantas pessoas serão cadastradas e vamos preparar o sistema para isso. 

Vamos usar um **loop infinito**, que executará até que um `break` o interrompa com alguma condição.

Tudo que estiver entre `loop do` e o `end` correspondente será executado repetidamente. A palavra `do` marca o início do bloco.

Dentro desse loop vamos fazer tudo, pedir o nome, a idade, ler, validar, tratar erros e guardar o que estiver correto para exibir no final do programa. 

```ruby
loop do

end
```

Primeiramente vamos pedir o nome que será cadastrado, informar que a palavra `‘sair’` pode ser usada para encerrar o programa, ler a entrada digitada e definir o `break` com a condição de parada que encerrará o `loop`, neste caso a condição é a palavra `‘sair’` ser digitada.

```ruby
  print "Digite o nome da pessoa (ou 'sair' para encerrar): "
  nome = gets.chomp rescue nil

  break if nome&.downcase == "sair"
```

Com `break if nome&.downcase == "sair"` estamos dizendo: se o nome, após ser convertido para minúsculas, for igual a `"sair"`, interrompa o `loop`.

- Com `nome&.downcase`: O texto é convertido para letras minúsculas. Isso é muito bom porque assim o sistema vai aceitar, `"SAIR"`, `"Sair"` ou `"sAiR"` não importa, todas as formas de escrever serão tratadas como `"sair"`.
- Mas, e esse `&` em `nome&.downcase` o que é e o que ele faz?
    - Esse operador (`&`) é chamado de **safe navigation operator** (operador de navegação segura em Português). Ele funciona assim: "se o `nome` não for `nil`, converta ele para minúsculas; mas se o nome for `nil`, não faça nada e retorne `nil`".
    - Tentar chamar o `.downcase` em alguma coisa que seja `nil` causaria um erro. Este operador vai a verificação antes e já evita que o erro aconteça.

Agora precisamos validar o nome. Não queremos aceitar nomes vazios, nomes que sejam só espaços em branco ou nomes que tenham apenas números. Afinal, ninguém se chama `"123"` ou `"   "`, certo? Então precisamos evitar que nomes assim consigam avançar no nosso código.

Como fazemos isso? Assim:

```ruby
  if nome.nil? || nome.strip.empty? || nome.delete("0-9 ").empty?
    puts "Nome inválido. Tente novamente."
    next
  end
```

O que estamos fazendo aqui?

Aqui testamos três condições com o operador `||`, onde se alguma for verdadeira, o nome é inválido:

- `nome.nil?`: verifica se o nome é `nil`.
- `nome.strip.empty?`: O método `strip` elimina os espaços em branco do começo e do fim do texto. Em seguida, `empty?` verifica se, após essa remoção, o texto ainda está vazio. Dessa forma, se a pessoa digitar apenas espaços em branco, o método irá detectar.
- `nome.delete("0-9 ").empty?`: O método `delete` remove dígitos de 0 a 9 e espaços em branco do texto. Se o resultado for vazio, o que é verificado com o `empty?`, isso significa que o nome continha apenas números ou espaços, o que o tornam inválido.

Se o nome for inválido, exibimos uma mensagem para a pessoa e usamos `next`. O `next` é como dizer: "pule o resto deste ciclo e volte para o começo do `loop`". Ou seja, o programa vai pedir o nome de novo sem continuar para a parte da idade.

Se o nome for válido, o programa continua e agora vamos pedir a idade:

```ruby
  print "Digite a idade de #{nome}: "
  idade = Integer(gets.chomp) rescue nil
```

Usamos `print` novamente para que a pessoa digite na mesma linha da pergunta. Repare que usamos `#{nome}` dentro da string, isso é a **interpolação de strings** do Ruby, ela coloca o valor da variável `nome` diretamente no meio do texto.

Para ler a idade, usamos `Integer(gets.chomp)`. O `gets.chomp` lê o que foi digitado e remove a quebra de linha, como já vimos. Mas dessa vez precisamos transformar esse texto em um número inteiro, porque a idade não é um texto, é um número. O método `Integer()` faz exatamente isso: tenta converter o texto para um número inteiro.

E se a pessoa digitar algo que não é um número, como `"abc"`? O `Integer()` vai dar erro. Mas como temos o `rescue nil` ali, em vez de o programa quebrar, ele simplesmente coloca `nil` na variável `idade`. Mesma lógica que usamos antes com o nome.

Agora vamos fazer as validações da idade:

```ruby
  if idade.nil? || idade <= 0 || idade > 120
    puts "Idade inválida. Tente novamente."
    next
  end
```

Aqui também estamos fazendo três validações:

- `idade.nil?`: se a conversão falhou (a pessoa digitou algo que não é um número), `idade` será `nil`. Aqui estamos verificando isso.
- `idade <= 0`: idade precisa ser um número positivo. Ninguém tem 0 anos ou idade negativa, por isso precisamos fazer essa validação no nosso cadastro.
- `idade > 120`: aqui estamos colocando um limite máximo para a idade inserida, 120 é um limite razoável. Se alguém digitar `999` ou `5000`, o sistema vai recusar.

Se qualquer uma dessas condições for verdadeira, o programa exibe a mensagem de erro e volta ao início do `loop` com o `next`, pedindo para inserir a idade novamente.

Se tudo estiver certo, tanto o nome quanto a idade, finalmente vamos guardar os dados:

```ruby
  pessoas << { nome: nome, idade: idade }
  puts "#{nome} cadastrada com sucesso!"
  puts ""
```

Aqui estamos usando o operador `<<` para adicionar ao final do array `pessoas` o **hash**: `{ nome: nome, idade: idade }`. 

Pensa assim: `pessoas` é uma **caixa de sapatos (**`array`**)** onde você guarda as fichas de cadastro com as informações das pessoas cadastradas. O operador `<<` é o gesto de **enfiar uma ficha nova** dentro da caixa.

E a ficha nova é o hash: `{ nome: nome, idade: idade }`. Um hash é como uma ficha de cadastro de verdade, ele guarda informações em pares de **chave e valor**. Aqui temos duas chaves:

- `nome:` com o valor sendo o nome que a pessoa digitou.
- `idade:` com o valor sendo a idade que a pessoa digitou.

Então, se cadastramos "Ana" com 25 anos, o array `pessoas` ficaria assim:

```ruby
[{ nome: "Ana", idade: 25 }]
```

Se depois cadastramos "João" com 30 anos, o array `pessoas` ficaria assim:

```ruby
[{ nome: "Ana", idade: 25 }, { nome: "João", idade: 30 }]
```

Cada hash é uma ficha, e o array é a caixa que guarda todas elas, em ordem.

Depois de guardar, exibimos uma mensagem de sucesso do cadastro e uma linha em branco para organizar visualmente a saída no terminal.

E o `loop` continua rodando, pedindo novos nomes e idades, até que a pessoa digite `"sair"`.

Quando a palavra `"sair"` é digitada, o `break` interrompe o `loop` e o programa segue para a parte final: exibir todas as pessoas que foram cadastradas.

Usamos:

```ruby
puts "\nPessoas cadastradas:"
pessoas.each_with_index do |pessoa, index|
  puts "#{index + 1}. #{pessoa[:nome]} - #{pessoa[:idade]} anos"
end
```

Onde:

O `\n` no início do `puts` adiciona uma linha em branco antes do título, só para deixar a saída mais organizada.

Depois usamos o método `each_with_index`. Ele percorre cada elemento do array `pessoas` e, para cada um, nos dá duas coisas:

`pessoa`: o hash com os dados da pessoa atual (por exemplo, `{ nome: "Ana", idade: 25 }`).

`index`: a posição dessa pessoa no array, começando do 0 (0, 1, 2, 3, e assim por diante...).

Como listas para humanos costumam começar do 1 e não do 0, usamos `index + 1` para exibir a numeração de forma mais natural.

Para acessar os valores dentro do hash, usamos `pessoa[:nome]` e `pessoa[:idade]`. Os dois pontos antes da palavra (`:nome`, `:idade`) indicam que estamos acessando uma chave do tipo **símbolo** (symbol) no hash.

Se cadastramos Ana (25 anos) e João (30 anos), a saída final será:

```ruby
Pessoas cadastradas:
1. Ana - 25 anos
2. João - 30 anos
```

E assim o programa encerra, mostrando todos os cadastros feitos durante a execução.

O código completo fica assim:

```ruby
pessoas = []  # Array que vai guardar os dados

puts "Programa para cadastrar pessoas"
puts ""

loop do
  print "Digite o nome da pessoa (ou 'sair' para encerrar): "
  nome = gets.chomp rescue nil

  break if nome&.downcase == "sair"

  if nome.nil? || nome.strip.empty? || nome.delete("0-9 ").empty?
    puts "Nome inválido. Tente novamente."
    next
  end

  print "Digite a idade de #{nome}: "
  idade = Integer(gets.chomp) rescue nil

  if idade.nil? || idade <= 0 || idade > 120
    puts "Idade inválida. Tente novamente."
    next
  end

  pessoas << { nome: nome, idade: idade }
  puts "#{nome} cadastrada com sucesso!"
  puts ""
end

puts "\nPessoas cadastradas:"
pessoas.each_with_index do |pessoa, index|
  puts "#{index + 1}. #{pessoa[:nome]} - #{pessoa[:idade]} anos"
end
```

### Programa jogo da forca básico
---

O computador sorteia uma palavra de uma lista e exibe apenas traços no lugar de cada letra. A pessoa tenta adivinhar a palavra digitando uma letra por vez. O programa aceita apenas letras válidas, impede que a mesma letra seja tentada mais de uma vez e avisa quando a letra está ou não está na palavra.

A pessoa tem 6 tentativas. Quando restam 3 ou menos, uma dica é exibida. Ao final de cada rodada, o programa informa se a pessoa ganhou ou perdeu, exibe o placar e pergunta se ela quer jogar novamente.

#### Como fazer?

Vamos dividir o problema em quatro partes:

- **Parte 1:** Configuração inicial dos dados e variáveis do jogo
- **Parte 2:** O laço externo, que controla se a pessoa quer jogar mais uma rodada
- **Parte 3:** O laço interno, que é a rodada em si
- **Parte 4:** Encerramento e placar final

**Parte 1: Configuração inicial**

Começamos definindo a lista de palavras do jogo. Um `array` é ideal para isso:

```ruby
palavras = ["abacaxi", "elefante", "programacao", "computador", "teclado", "borboleta", "chocolate", "universo"]
```

Note que todas as palavras estão em minúsculo e sem acentos. Isso facilita a comparação com as letras digitadas pela pessoa mais adiante, evitando problemas de acentuação.

Definimos o número máximo de tentativas em uma variável:

```ruby
max_tentativas = 6
```

Usar uma variável em vez de escrever o número `6` diretamente no código é uma boa prática: se quisermos mudar o limite de tentativas no futuro, basta alterar em um único lugar.

Agora precisamos das dicas. Cada dica está associada a uma palavra específica, um relacionamento claro de **chave e valor**, ideal para um `hash`. Aqui usamos a notação com `=>` (chamada de *hash rocket*) porque as chaves são strings:

```ruby
dicas = {
  "abacaxi" => "É uma fruta tropical",
  "elefante" => "É o maior animal terrestre",
  "programacao" => "É o que estamos aprendendo agora",
  ...
}
```

A chave é a palavra e o valor é a dica correspondente. Para buscar a dica de uma palavra específica, usaremos `dicas[palavra]` mais adiante.

Por fim, inicializamos os contadores de placar e exibimos a mensagem de boas-vindas:

```ruby
vitorias = 0
derrotas = 0

puts "Receba as boas-vindas do Jogo da Forca!"
puts "Tente adivinhar a palavra secreta antes de esgotar suas tentativas."
```

**Parte 2: O laço externo**

O laço externo controla se a pessoa quer jogar mais uma rodada. Usamos uma variável `jogar` iniciada como `true` para que o jogo comece imediatamente:

```ruby
jogar = true
while jogar
  ...
end
```

Enquanto `jogar` for `true`, o programa continua oferecendo novas rodadas. Ao final de cada uma, atualizamos `jogar` de acordo com a resposta da pessoa.

Dentro do `while jogar`, a primeira coisa é sortear uma palavra aleatória da lista usando o método `.sample`, que escolhe um elemento aleatório de um array:

```ruby
palavra = palavras.sample
```

A cada nova rodada, uma palavra diferente pode ser sorteada de forma imprevisível.

Depois inicializamos todas as variáveis que controlam o estado da rodada atual:

```ruby
letras_palavra = palavra.chars
letras_certas = []
letras_erradas = []
letras_tentadas = []
dica_exibida = false
rodada_ativa = true
```

Vamos entender cada uma:

- `letras_palavra = palavra.chars`: O método `.chars` transforma a string em um array de caracteres. Por exemplo, `"gato".chars` vira `["g", "a", "t", "o"]`. Isso nos permite percorrer a palavra letra por letra.
- `letras_certas = []`: Array vazio que vai guardar as letras que a pessoa acertou.
- `letras_erradas = []`: Array vazio que vai guardar as letras erradas.
- `letras_tentadas = []`: Array vazio que reúne todas as letras já tentadas nesta rodada, certas ou erradas. Serve para impedir que a pessoa repita uma letra.
- `dica_exibida = false`: Uma variável "bandeira" (*flag*) que controla se a dica já foi mostrada. Queremos exibi-la apenas uma vez por rodada.
- `rodada_ativa = true`: Outra variável "bandeira" que controla se a rodada ainda está em andamento. Quando a pessoa ganhar ou perder, ela vai para `false` e o laço interno se encerra.

**Parte 3: O laço interno**

O laço interno roda enquanto a rodada estiver ativa:

```ruby
while rodada_ativa
  ...
end
```

A primeira coisa dentro desse laço é construir e exibir a palavra com as letras descobertas e traços no lugar das restantes. Fazemos isso com o método `.map`:

```ruby
exibicao = letras_palavra.map { |l| letras_certas.include?(l) ? l : "_" }.join(" ")
```

Essa linha tem algumas partes novas. Vamos destrinchá-la:

- `letras_palavra.map { |l| ... }`: O `.map` percorre cada elemento do array `letras_palavra` e transforma cada letra em outra coisa. Para cada letra `l`, o bloco `{ |l| ... }` decide o que colocar no lugar.
- `letras_certas.include?(l) ? l : "_"`: Essa é uma **expressão ternária**, uma forma compacta de escrever um `if/else` em linha única. Ela funciona assim:
  - `letras_certas.include?(l)` — "a letra `l` está na lista de letras certas?"
  - `?` — "se sim..."
  - `l` — "...deixe a letra aparecer"
  - `:` — "se não..."
  - `"_"` — "...coloque um traço"
- `.join(" ")`: Após o `.map` transformar o array, o `.join(" ")` junta todos os elementos em uma única string, separando cada um por um espaço. Assim `["_", "a", "_", "_"]` vira `"_ a _ _"`.

Depois exibimos o estado atual da rodada:

```ruby
tentativas_restantes = max_tentativas - letras_erradas.size
puts ""
puts "Palavra: #{exibicao}"
puts "Letras erradas: #{letras_erradas.join(', ')}" unless letras_erradas.empty?
puts "Tentativas restantes: #{tentativas_restantes}"
```

Note o uso de `unless` em `puts "Letras erradas: ..." unless letras_erradas.empty?`. O `unless` é o oposto do `if`: ele executa a instrução somente quando a condição é **falsa**. Aqui estamos dizendo "exiba as letras erradas, a não ser que o array esteja vazio". Isso evita mostrar uma linha "Letras erradas:" sem nada logo nas primeiras tentativas.

Depois verificamos se a pessoa ganhou. Quando não há mais nenhum `"_"` na exibição, todas as letras foram descobertas:

```ruby
unless exibicao.include?("_")
  vitorias += 1
  puts "Parabéns! Você descobriu a palavra: #{palavra}!"
  rodada_ativa = false
  next
end
```

Se não há `"_"` na `exibicao`, a pessoa ganhou: somamos 1 às vitórias, exibimos a mensagem e definimos `rodada_ativa = false`. O `next` pula para a próxima iteração do `while rodada_ativa`, que vai verificar a condição novamente. Como agora é `false`, o laço interno encerra.

Em seguida verificamos se a pessoa perdeu:

```ruby
if tentativas_restantes <= 0
  derrotas += 1
  puts "Você perdeu! A palavra era: #{palavra}."
  rodada_ativa = false
  next
end
```

Se as tentativas chegaram a zero, a lógica é a mesma: somamos 1 às derrotas, exibimos a mensagem e encerramos a rodada com `rodada_ativa = false` e `next`.

Agora verificamos se é hora de exibir a dica. Queremos mostrá-la apenas uma vez, quando restam 3 ou menos tentativas:

```ruby
if !dica_exibida && tentativas_restantes <= 3
  puts "Dica: #{dicas[palavra]}"
  dica_exibida = true
end
```

As duas condições precisam ser verdadeiras ao mesmo tempo (`&&`):

- `!dica_exibida`: a dica ainda não foi exibida. O `!` inverte o valor: se `dica_exibida` é `false`, então `!dica_exibida` é `true`.
- `tentativas_restantes <= 3`: restam 3 ou menos tentativas.

Quando exibimos a dica, marcamos `dica_exibida = true` para que ela não apareça novamente nas próximas iterações da mesma rodada.

Agora vem o bloco de leitura e validação da letra. Precisamos garantir que a entrada seja uma única letra do alfabeto e que ainda não tenha sido tentada:

```ruby
letra = nil

while letra.nil?
  print "Digite uma letra: "
  entrada = gets.chomp.downcase

  unless ("a".."z").include?(entrada)
    puts "Entrada inválida! Digite apenas uma letra."
    next
  end

  if letras_tentadas.include?(entrada)
    puts "Você já tentou essa letra! Tente outra."
    next
  end

  letra = entrada
end
```

Iniciamos `letra` como `nil` e usamos `while letra.nil?` para repetir enquanto não tivermos uma entrada válida.

Dentro do laço:

- `gets.chomp.downcase`: lê a entrada, remove o `Enter` e converte para minúsculo. Assim `"A"` e `"a"` são tratados da mesma forma.
- `("a".."z").include?(entrada)`: O intervalo `("a".."z")` representa todas as letras do alfabeto de "a" até "z". O `.include?` verifica se o que foi digitado está dentro desse intervalo. Se a pessoa digitou um número, um espaço ou mais de uma letra, a condição falha e o programa informa o erro.
- `letras_tentadas.include?(entrada)`: verifica se essa letra já foi tentada nesta rodada.

Só quando a entrada passa pelas duas verificações ela é atribuída à variável `letra`, encerrando o `while letra.nil?`.

Por fim, verificamos se a letra está na palavra e atualizamos os arrays:

```ruby
letras_tentadas << letra
if palavra.include?(letra)
  letras_certas << letra
  puts "Boa! A letra '#{letra}' está na palavra."
else
  letras_erradas << letra
  puts "A letra '#{letra}' não está na palavra."
end
```

Independentemente de acerto ou erro, sempre adicionamos a letra em `letras_tentadas` para que não possa ser tentada novamente. Se acertou, vai também para `letras_certas`; se errou, vai para `letras_erradas`.

**Parte 4: Encerramento da rodada**

Após o laço interno terminar, exibimos o placar parcial e perguntamos se a pessoa quer jogar de novo:

```ruby
puts ""
puts "Placar: #{vitorias} vitória(s) | #{derrotas} derrota(s)"

resposta = nil

while resposta != "s" && resposta != "n"
  puts ""
  print "Deseja jogar novamente? (s para sim ou n para não): "
  resposta = gets.chomp.downcase
  puts "Resposta inválida! Por favor, digite 's' para sim ou 'n' para não." unless resposta == "s" || resposta == "n"
end

jogar = resposta == "s"
```

A linha `jogar = resposta == "s"` é uma atribuição direta: a expressão `resposta == "s"` retorna `true` se a resposta for "s" e `false` se for "n". Esse valor vai direto para a variável `jogar`. Se `jogar` for `false`, o `while jogar` do laço externo não se repete e o programa avança para o placar final.

Ao sair do laço externo, exibimos o placar final e encerramos:

```ruby
puts ""
puts "Placar final: #{vitorias} vitória(s) | #{derrotas} derrota(s)"
puts "Obrigado por jogar! Até a próxima!"
```

O código do jogo da forca completo fica assim:

```ruby
palavras = ["abacaxi", "elefante", "programacao", "computador", "teclado", "borboleta", "chocolate", "universo"]
max_tentativas = 6

dicas = {
  "abacaxi" => "É uma fruta tropical",
  "elefante" => "É o maior animal terrestre",
  "programacao" => "É o que estamos aprendendo agora",
  "computador" => "Máquina que você está usando",
  "teclado" => "Periférico usado para digitar",
  "borboleta" => "Inseto com asas coloridas",
  "chocolate" => "Doce feito de cacau",
  "universo" => "Tudo que existe no espaço"
}

vitorias = 0
derrotas = 0

puts "Receba as boas-vindas do Jogo da Forca!"
puts "Tente adivinhar a palavra secreta antes de esgotar suas tentativas."

jogar = true
while jogar
  palavra = palavras.sample
  letras_palavra = palavra.chars
  letras_certas = []
  letras_erradas = []
  letras_tentadas = []
  dica_exibida = false
  rodada_ativa = true

  while rodada_ativa
    # Exibe a palavra com as letras descobertas
    exibicao = letras_palavra.map { |l| letras_certas.include?(l) ? l : "_" }.join(" ")
    tentativas_restantes = max_tentativas - letras_erradas.size
    puts ""
    puts "Palavra: #{exibicao}"
    puts "Letras erradas: #{letras_erradas.join(', ')}" unless letras_erradas.empty?
    puts "Tentativas restantes: #{tentativas_restantes}"

    # Verifica se ganhou
    unless exibicao.include?("_")
      vitorias += 1
      puts "Parabéns! Você descobriu a palavra: #{palavra}!"
      rodada_ativa = false
      next
    end

    # Verifica se perdeu
    if tentativas_restantes <= 0
      derrotas += 1
      puts "Você perdeu! A palavra era: #{palavra}."
      rodada_ativa = false
      next
    end

    # Exibe dica quando restam 3 tentativas ou menos
    if !dica_exibida && tentativas_restantes <= 3
      puts "Dica: #{dicas[palavra]}"
      dica_exibida = true
    end

    # Entrada do jogador
    letra = nil

    while letra.nil?
      print "Digite uma letra: "
      entrada = gets.chomp.downcase

      unless ("a".."z").include?(entrada)
        puts "Entrada inválida! Digite apenas uma letra."
        next
      end

      if letras_tentadas.include?(entrada)
        puts "Você já tentou essa letra! Tente outra."
        next
      end

      letra = entrada
    end

    # Verifica se a letra está na palavra
    letras_tentadas << letra
    if palavra.include?(letra)
      letras_certas << letra
      puts "Boa! A letra '#{letra}' está na palavra."
    else
      letras_erradas << letra
      puts "A letra '#{letra}' não está na palavra."
    end
  end

  puts ""
  puts "Placar: #{vitorias} vitória(s) | #{derrotas} derrota(s)"

  # Pergunta se deseja jogar novamente
  resposta = nil

  while resposta != "s" && resposta != "n"
    puts ""
    print "Deseja jogar novamente? (s para sim ou n para não): "
    resposta = gets.chomp.downcase
    puts "Resposta inválida! Por favor, digite 's' para sim ou 'n' para não." unless resposta == "s" || resposta == "n"
  end

  jogar = resposta == "s"
end

puts ""
puts "Placar final: #{vitorias} vitória(s) | #{derrotas} derrota(s)"
puts "Obrigado por jogar! Até a próxima!"
```

## Resumo
---

Neste artigo, praticamos os conceitos fundamentais da programação em Ruby por meio de doze exercícios organizados em três níveis de dificuldade.

No **nível básico**, criamos programas curtos para exercitar os conceitos mais essenciais. Escrevemos uma saudação personalizada usando variáveis, `puts`, `print`, `gets.chomp` e interpolação de strings. Calculamos a idade aproximada de uma pessoa a partir do ano de nascimento, aplicando validação de entrada com `while`, `rescue` e `Time.now.year`. E verificamos se um número é par ou ímpar usando o operador de módulo `%` e uma estrutura `if/else`.

No **nível intermediário**, os exercícios passaram a combinar estruturas de repetição com lógica mais elaborada. Geramos a tabuada de um número com `for`, `while` e `each`. Contamos vogais em uma frase usando `each_char` e corrigindo acentos com o método `tr`. Verificamos se um número é primo com a técnica da variável "bandeira" (*flag*) e o comando `break`. Somamos uma quantidade variável de números usando o método `times`, acumuladores e tratamento de erros com `begin/rescue`. Calculamos a sequência de Fibonacci, entendendo como a ordem de atualização das variáveis define o próximo termo. E criamos um jogo de adivinhação de número secreto com `rand`, `while`, `next` e `break`.

No **nível avançado**, os desafios exigiram pensar no programa como um sistema completo. Construímos um conversor de dias, horas ou minutos em segundos, com menu de opções usando `case/when` e um `loop` externo para permitir múltiplas conversões na mesma execução. Criamos um sistema de cadastro de pessoas que armazena os dados em um array de hashes e exibe a lista ao final com `each_with_index`. E implementamos um jogo da forca, combinando `.sample`, `.chars`, `.map`, expressão ternária, `.join` e variáveis "bandeira" para controlar o estado de cada rodada.

A prática continua sendo a forma mais eficaz de fixar o que foi aprendido. A cada novo programa escrito, mesmo que com erros, o raciocínio lógico vai ficando mais natural e a leitura de código mais fluida. Nenhum desses doze programas é o jeito único e definitivo de resolver o problema: são pontos de partida para explorar, modificar e melhorar.

