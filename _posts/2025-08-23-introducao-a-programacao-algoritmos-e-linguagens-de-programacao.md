---
layout: post
title: "Introdução à Programação: Algoritmos e Linguagens de Programação"
description: "Este artigo vai abordar os algoritmos, que são sequências de instruções para resolver problemas, e as linguagens de programação, que são as ferramentas que usamos para implementar esses algoritmos."
date: 2025-08-23 10:00:00 -0300
author: Louise Suelen
categories: [Programação]
tags: [programação, tecnologia]
permalink: /introducao-a-programacao-algoritmos-e-linguagens-de-programacao/
lang: pt-BR
sumario: |
    <ul class="list-group bg-dark">
        <!-- 1. Apresentação -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#apresentacao">
                <span class="badge bg-secondary">1</span>
                Apresentação
            </a>
        </li>

        <!-- 2. Algoritmos -->
        <li class="list-group-item bg-dark text-white border-0 position-relative">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#algoritmos">
                <span class="badge bg-secondary">2</span>
                Algoritmos
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0 position-relative">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#como-construir-um-algoritmo">
                        <span class="badge bg-secondary">2.1</span>
                        Como construir um algoritmo?
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0 position-relative">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#exemplo-de-algoritmo-como-fazer-cafe">
                        <span class="badge bg-secondary">2.2</span>
                        Exemplo de algoritmo: como fazer café
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0 position-relative">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#exemplo-de-algoritmo-como-dar-banho-em-um-cachorro">
                        <span class="badge bg-secondary">2.3</span>
                        Exemplo de algoritmo: como dar banho em um cachorro
                    </a>
                </li>
            </ul>
        </li>

        <!-- 3. Linguagens de Programação -->
        <li class="list-group-item bg-dark text-white border-0 position-relative">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#linguagens-de-programacao">
                <span class="badge bg-secondary">3</span>
                Linguagens de Programação
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0 position-relative">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#codigo-fonte">
                        <span class="badge bg-secondary">3.1</span>
                        Código-fonte
                    </a>
                </li>
                <li class="list-group-item bg-dark text-white border-0 position-relative">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#linguagens-compiladas-e-linguagens-interpretadas">
                        <span class="badge bg-secondary">3.2</span>
                        Linguagens compiladas e linguagens interpretadas
                    </a>
                    <ul class="list-group bg-dark">
                        <li class="list-group-item bg-dark text-white border-0 position-relative">
                            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                               href="#linguagens-compiladas">
                                <span class="badge bg-secondary">3.2.1</span>
                                Linguagens compiladas
                            </a>
                        </li>
                        <li class="list-group-item bg-dark text-white border-0 position-relative">
                            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                               href="#linguagens-interpretadas">
                                <span class="badge bg-secondary">3.2.2</span>
                                Linguagens interpretadas
                            </a>
                        </li>
                        <li class="list-group-item bg-dark text-white border-0 position-relative">
                            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                               href="#comparando-as-duas-abordagens-compilacao-vs-interpretacao">
                                <span class="badge bg-secondary">3.2.3</span>
                                Comparando as duas abordagens (compilação vs interpretação)
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>

        <!-- 4. Paradigmas de programação -->
        <li class="list-group-item bg-dark text-white border-0 position-relative">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#paradigmas-de-programacao">
                <span class="badge bg-secondary">4</span>
                Paradigmas de programação
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0 position-relative">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#qual-paradigma-escolher">
                        <span class="badge bg-secondary">4.1</span>
                        Qual paradigma escolher?
                    </a>
                </li>
            </ul>
        </li>

        <!-- 5. Resumo -->
        <li class="list-group-item bg-dark text-white border-0 position-relative">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#resumo">
                <span class="badge bg-secondary">5</span>
                Resumo
            </a>
        </li>
    </ul>
---

Este artigo vai abordar os algoritmos, que são sequências de instruções para resolver problemas, e as linguagens de programação, que são as ferramentas que usamos para implementar (construir) esses algoritmos.

<div class="text-center">
<img src="https://media.licdn.com/dms/image/v2/C5612AQGZPEZtPRFSjA/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1638836845913?e=2147483647&v=beta&t=Oamy5cy8cq-wiFoKloKgBrfAGs_HOFr1gbBhIQ8m4Cs" aria-hidden="true" />
</div>

## Apresentação {#apresentacao}
---

Programar, ou desenvolver um software, é basicamente criar um passo a passo para o computador seguir. Para isso, a gente escreve instruções usando uma linguagem específica, chamada linguagem de programação, que o computador consegue entender.

Assim, conseguimos fazer o computador realizar tarefas do jeito que queremos. Claro, essas tarefas estão limitadas as capacidades do computador, seu hardware e software.

Não adianta pedir para o PC da sua casa levantar voo, por exemplo, que (sem os recursos adequados para isso) ele não vai conseguir.

Essas instruções são chamadas de algoritmos. É como se você estivesse mostrando para o computador, passo a passo, o que ele precisa fazer para cumprir uma tarefa. O algoritmo nada mais é do que uma explicação simples do caminho que o computador deve seguir para chegar ao resultado que você quer.

Ao longo deste texto, vamos explorar mais sobre algoritmos e como eles são fundamentais na programação. Vamos também discutir as diferentes linguagens de programação que podemos usar para implementar esses algoritmos.

## Algoritmos {#algoritmos}
---

Esses algoritmos citados antes, que são sequências de instruções para resolver problemas adequados as limitações (restrições ou condições) do computador, são chamados de **algoritmos computacionais**. Esses algoritmos são construídos pensando em como o computador vai entender e executar as instruções, levando em conta sua arquitetura e capacidade de processamento.

Mas não pense que só existem algoritmos na computação! Podemos criar uma lista de passos para quase tudo na vida: atravessar a rua, fazer um bolo ou dar banho no cachorro, por exemplo.

**Algoritmo é só isso, uma sequência de instruções para chegar ao resultado que queremos.**

### Como construir um algoritmo? {#como-construir-um-algoritmo}
---

Para fazer um algoritmo, primeiro é preciso entender bem o problema que queremos resolver. Depois, é só dividir a solução em passos simples, pensando em cada etapa como uma parte do caminho até chegar ao resultado que procuramos.

Esses passos não podem ser genéricos (muito amplos, com poucos detalhes e que dependem de entrelinhas e dedução) ou confusos; eles precisam ser bem explicados, simples e seguir uma ordem. Assim, fica fácil entender e acompanhar cada etapa.

Na hora de criar um algoritmo, pense nessas coisas:

- **O que você quer resolver?**
  - Explique qual é o problema ou objetivo, de um jeito simples.
- **O que precisa para começar?**
  - Liste o que vai ser usado ou o que tem que estar pronto antes de começar.
- **O que deve acontecer no final?**
  - Diga o que espera que aconteça quando terminar.
- **Tem algo especial que precisa?**
  - Fale se tem alguma condição especial antes de começar.
- **Quais são os passos?**
  - Escreva o passo a passo, de forma clara e simples.
- **E se der erro?**
  - Conte o que fazer se algo não sair como esperado.
- **Quando parar?**
  - Mostre em que momento o algoritmo termina.

A seguir vamos exercitar (praticar) a construção de algoritmos, aplicando este passo a passo (conjunto de etapas) a situações do dia a dia.

### Exemplo de algoritmo: como fazer café {#exemplo-de-algoritmo-como-fazer-cafe}
---

- **Objetivo:**
  - Fazer 300 ml de café coado.
- **O que você vai precisar:**
  - água,
  - pó de café,
  - filtro,
  - coador,
  - chaleira,
  - xícara ou jarra
  - e algo para esquentar a água pode ser um fogão ou micro-ondas.
- **O que vai sair:**
  - 300 ml de café pronto.
- **Antes de começar:**
  - Verifique se tudo está limpo e se tem água potável.
- **Passo a passo:**

<div class="mermaid" aria-hidden="true">
flowchart TD
    A([Início]) --> B[Verificar materiais e higiene]
    B --> C[Colocar 18g de pó no filtro]
    C --> D[Esquentar 300ml de água até quase ferver]
    D --> E{Filtro é de papel?}
    
    %% Caminho para filtro de papel
    E -->|Sim é de papel| F[Molhar o filtro com água quente e descartar]
    F --> G[Molhar o pó com 40ml de água e esperar 30-45s]
    G --> H[Despejar o restante da água devagar]
    H --> I[Esperar a água passar]
    I --> J[Servir o café pronto]

    %% Caminho para filtro não de papel
    E -->|Não é de papel| K[Não precisa molhar o filtro]
    K --> L[Molhar o pó com 40ml de água e esperar 30-45s]
    L --> M[Despejar o restante da água devagar]
    M --> N[Esperar a água passar]
    N --> J
    
    %% Tratamento de problemas
    D --> O{Problemas?}
    O -->|Água não esquenta| P[Resolver problema com fogão ou micro-ondas]
    O -->|Água não passa pelo pó| Q[Mexer devagar com colher]
    P --> D
    Q --> I

    J --> R([Fim - 300ml de café pronto])
</div>

  1. Coloque cerca de 18 gramas de pó de café (mais ou menos 3 colheres de sopa rasas) no filtro.
  2. Esquente 300 ml de água até quase ferver (quando começam a aparecer bolhinhas).
  3. Se o filtro for de papel:
  4. Molhe o filtro com um pouco de água quente para tirar o gosto de papel e já aproveite para esquentar a xícara; depois, jogue fora essa água.
  5. Despeje um pouco de água quente (uns 40 ml) por cima do pó, só para molhar tudo. Espere uns 30 a 45 segundos, isso ajuda a soltar bem o sabor do café.
  6. Depois vá despejando o resto da água quente devagar, até terminar.
  7. Espere toda a água passar pelo pó para cair na xícara ou jarra.
  8. Se o filtro NÃO for de papel:
  9. Não precisa molhar o filtro
  10. Siga os mesmos passos sem molhar o filtro.
  11. Pronto, é só servir!
 
- **Se tiver algum problema:**
  - Se não conseguir esquentar a água porque, por exemplo, o fogão não funciona, pare e tente resolver antes de continuar.
  - Se a água não estiver passando pelo pó (talvez porque o pó está muito fino e entupiu), mexa devagar com uma colher para destravar e seguir.
- **Quando termina:**
  - Quando toda a água tiver passado pelo pó e você tiver os 300 ml de café pronto.

Isso mostra como um algoritmo pode ser aplicado a uma tarefa do dia a dia, como fazer café. Ele ajuda a organizar o pensamento e a garantir que todos os passos necessários sejam seguidos para alcançar o resultado desejado.

Vamos fazer mais um exemplo a seguir...

### Exemplo de algoritmo: como dar banho em um cachorro {#exemplo-de-algoritmo-como-dar-banho-em-um-cachorro}
---

- **Objetivo:**
  - Lavar e deixar o cachorro limpinho.
- **O que você vai precisar:**
  - água,
  - shampoo para cachorro,
  - toalha,
  - secador (opcional),
  - coleira ou guia,
  - lugar apropriado para o banho.
- **O que vai sair:**
  - Um cachorro limpo e seco.
- **Antes de começar:**
  - Verifique se tudo está à mão e se o cachorro está calmo.
- **Passo a passo:**

<div class="mermaid" aria-hidden="true">
graph TD
    A(["Início"]) --> B["Colocar coleira ou guia"]
    B --> C["Molhar bem todo o pelo do cachorro"]
    C --> D["Passar o shampoo e esfregar (2-3 minutos)"]
    D --> E["Enxaguar até sair toda a espuma"]
    E --> F{"Ainda há espuma?"}
    F -- "Sim" --> E
    F -- "Não" --> G{"O dia está frio?"}
    G -- "Sim" --> H["Usar secador no morno (de longe)"]
    G -- "Não" --> I["Usar só a toalha para secar"]
    H --> K["Checar se o pelo está seco"]
    I --> K
    K --> Q(["Fim - Pelo sem espuma e cachorro sequinho"])
</div>

1. Coloque a coleira ou guia no cachorro.
2. Molhe bem todo o pelo do cachorro com água morna.
3. Aplique o shampoo e esfregue bem, por cerca de 2 a 3 minutos.
4. Enxágue completamente até sair toda a espuma.
5. Seque o cachorro com uma toalha, removendo o excesso de água.
6. Se o dia estiver frio, use um secador na temperatura morna e à distância para secar o pelo.
7. Se não estiver frio, use só a toalha para secar o pelo do cachorro.
8. Certifique-se de que o pelo está completamente seco antes de soltar o cachorro.
9. Pronto!

- **Se tiver algum problema:**
  - Se o cachorro ficar muito agitado, pare e espere ele se acalmar antes de continuar.
  - Se o shampoo causar irritação, enxágue imediatamente e consulte um veterinário.
  - Se o cachorro não quiser entrar no banho, tente atraí-lo com um brinquedo ou petisco.
- **Quando termina:**
  - Quando o cachorro estiver limpo e seco.

Esses exemplos servem para mostrar como um algoritmo pode ajudar a organizar o pensamento e a garantir que todos os passos necessários sejam seguidos para alcançar o resultado desejado. Claro que, os exemplos que foram usados aqui podem ser ainda mais refinados (detalhados), o ideal é refinar (detalhar) o algoritmo conforme a necessidade e complexidade (nível de dificuldade) da tarefa.

Não é bom tentar resolver um problema muito complexo de uma vez só, é melhor dividir em partes menores e ir resolvendo uma de cada vez. Ou seja, **dividir para conquistar**, "quebrar" (cortar) o problema em pedaços menores e mais fáceis de trabalhar até que, no final, o problema todo esteja solucionado.

<div class="text-center">
<img src="https://universidadedatecnologia.com.br/wp-content/uploads/2017/12/o-que-%C3%A9-ling-prog.jpg" aria-hidden="true" />
</div>

## Linguagens de Programação {#linguagens-de-programacao}
---

Agora que já conhecemos o que são os algoritmos, inclusive com a criação de exemplos, vamos falar sobre as linguagens de programação.

Uma linguagem de programação é um jeito de conversar com o computador. Por meio dela, pessoas escrevem comandos que o computador entende e faz o que foi pedido. Assim, a linguagem de programação serve como uma ponte entre quem usa o computador e o que ele realmente faz.

Como foi explicado com detalhes em: <a href="https://pcdnaescola.com.br/computacao-para-iniciantes/programas-ou-softwares/#linguagens-de-programacao" target="_blank">Computação para Iniciantes: Programas ou Softwares - Linguagens de Programação</a>.

### Código-fonte {#codigo-fonte}
---

Quando alguém escreve comandos numa linguagem de programação, está criando um código-fonte. Esse código é como uma receita, mostrando passo a passo o que o programa deve fazer.

Ele tem dois grandes objetivos:

- facilitar a vida de quem lê o programa (outras pessoas programadoras),
- permitir que o computador execute o que foi pedido.

Para o computador entender esse código, ele pode ser transformado de duas formas principais:

- **Compilação**:
  - Um programa chamado compilador pega todo o código-fonte de uma vez e traduz para uma linguagem de máquina, que o computador entende.
  - Depois que vira esse “arquivo traduzido” (chamado binário), o computador só precisa ler esse arquivo sempre que rodar (executar) o programa, sem precisar traduzir de novo, só se o programa mudar aí precisa compilar de novo.
- **Interpretação**:
  - Nesse caso, um programa chamado interpretador lê e executa o código-fonte linha por linha, cada vez que o programa for usado.
  - Ele traduz e executa ao mesmo tempo, toda vez que você roda (executa) o programa.

### Linguagens compiladas e linguagens interpretadas {#linguagens-compiladas-e-linguagens-interpretadas}
---

Quando a gente fala que uma linguagem é "interpretada" ou "compilada", isso quer dizer só como o código dela é rodado (executado), não o tipo de linguagem. Na verdade, várias linguagens podem ser usadas dos dois jeitos, dependendo de como são feitas.

Dá para usar jeitos (técnicas) diferentes para executar o código, como:

- **JIT** (compilação na hora),
- **AOT** (compilação antes de executar),
- **bytecode** (um código intermediário),
- **máquinas virtuais** (que são ambientes que simulam um computador para executar programas).

Mesmo assim, vale a pena saber a diferença entre cada jeito (técnica ou abordagem) de executar um código.

### Linguagens compiladas {#linguagens-compiladas}
---

Nas linguagens compiladas (AOT), o código que você escreve passa por várias etapas:

1. Primeiro, é analisado e transformado em uma estrutura que o computador entende.
2. Depois, recebe melhorias e vira uma versão intermediária.
3. Por fim, esse código é convertido para uma linguagem que a máquina entende direto, como x86 ou ARM, e vira um programa pronto para ser executado.

**Observação**: **x86** e **ARM** são tipos de arquiteturas de processadores, e cada uma tem seu próprio conjunto de instruções que o computador entende. O que se compila para x86 não funciona em ARM e vice-versa, a menos que seja feito um trabalho extra para adaptar o código.

Desse jeito, o programa já está pronto para executar, sem precisar de passos extras. Ele funciona direto e costuma ser rápido, além de poder ser enviado como um arquivo que é só abrir para usar. Por outro lado, leva mais tempo para “compilar” e você precisa repetir esse processo para cada tipo de computador (arquitetura de processador como x86 ou ARM) ou sistema operacional diferente.

### Linguagens interpretadas {#linguagens-interpretadas}
---

Nas linguagens interpretadas, funciona de outro jeito. Normalmente, o código vira um tipo de "meio termo", chamado <code class="text-white-50">bytecode</code> (como os arquivos <code class="text-white-50">.pyc</code> do Python), e aí uma máquina virtual lê e executa esse bytecode. Em alguns casos, o interpretador pode executar o código direto, sem precisar transformar antes.

Algumas linguagens usam **JIT** (Just-In-Time em português "compilação em tempo real"), que transforma partes do código em instruções nativas enquanto estão sendo usadas. A vantagem é que dá para escrever e executar o código quase na hora, e é fácil usar em diferentes computadores, desde que tenha a máquina virtual.

Por outro lado, o programa geralmente demora mais para começar e pode precisar de um “aquecimento” (warm-up que é um período inicial de execução onde o desempenho melhora gradualmente, ou seja, o programa se torna mais rápido à medida que é executado) para chegar ao desempenho das compiladas.

### Comparando as duas abordagens (compilação vs interpretação) {#comparando-as-duas-abordagens-compilacao-vs-interpretacao}
---

Fazendo uma comparação entre as duas modalidades de execução de código é possível dizer que: linguagens compiladas costumam ser mais rápidas logo de cara, enquanto as interpretadas com JIT podem ficar tão rápidas quanto, ou até mais, depois de um tempo de uso.

A portabilidade também muda: interpretadas são mais fáceis de usar em diferentes máquinas, porque só dependem da máquina virtual, enquanto compiladas precisam ser feitas de novo para cada sistema. Compiladas entregam programas prontos, enquanto interpretadas normalmente distribuem código que dependem de um ambiente virtual para serem executados.

As ferramentas para depurar (que significam encontrar e corrigir erros no código) e observar o código (para entender seu funcionamento) também mudam:

- compiladas usam arquivos de símbolos, que são dados extras, gerados enquanto o código é compilado, para ajudar no futuro em tarefas como depuração (encontrar e corrigir erros) e análise de desempenho.
- interpretadas costumam ter ambientes interativos (REPL - Read-Eval-Print Loop em português significa "Leia-Avalie-Imprima"), esses ambientes são ferramentas que permitem escrever e testar código rapidamente, linha por linha, facilitando a experimentação (verificar o que o código faz).

Na segurança, compiladas usam medidas como proteção de memória, enquanto interpretadas ou JIT fazem verificações durante a execução. Isso quer dizer que as compiladas podem oferecer mais segurança em alguns casos, mas as interpretadas podem ser mais flexíveis e adaptáveis.

Explicando de um outro jeito: as linguagens compiladas geralmente são mais rígidas e exigem que o código esteja completo e correto antes da execução, enquanto as interpretadas permitem ajustes e testes mais dinâmicos (em tempo real) durante a execução.

Exemplos de linguagens compiladas são:

- C
- C++
- Rust
- Go
- Ada
- Fortran
- Pascal
- Objective-C
- Swift

Enquanto as linguagens interpretadas incluem:

- Python
- Ruby
- JavaScript
- PHP
- Perl
- Lua
- R

Existem ainda linguagens que usam uma mistura de bytecode e JIT. Isso quer dizer que elas compilam o código para um formato intermediário (bytecode) e depois usam JIT (Just-In-Time ou compilação em tempo real) para transformar partes desse bytecode em código nativo enquanto o programa está sendo executado. Exemplos dessas linguagens são:

- Java
- Kotlin
- C# e .NET
- Clojure
- Scala
- Elixir
- Erlang

No fim das contas, o que define se uma linguagem é interpretada ou compilada é a implementação. Por exemplo, Python é chamado de interpretado, mas existem ferramentas que permitem transformar o código em executável compilado, como PyPy, Cython e Nuitka (que são compiladores alternativos para Python).

Na prática, as compiladas são melhores para sistemas que precisam de rapidez, pouco gasto de memória e desempenho alto, como programas de linha de comando, serviços críticos e sistemas embarcados.

As interpretadas ou híbridas são ótimas para desenvolvimento rápido, protótipos, ciência de dados e aplicações que precisam funcionar em vários sistemas diferentes. Em situações em que o tempo de início tem que ser muito rápido, como em serviços serverless, muitas linguagens passam a usar compilação antecipada, mesmo que normalmente dependam de máquinas virtuais.

## Paradigmas de programação {#paradigmas-de-programacao}
---

As linguagens de programação podem funcionar de maneiras diferentes, chamadas de paradigmas. Tem linguagem que segue só um jeito, e tem linguagem que permite misturar vários. Cada forma tem suas próprias regras e jeitos de pensar, facilitando ou complicando dependendo do que você quer fazer. 

Você pode imaginar os paradigmas de programação como tipos ou estilos diferentes que organizam as linguagens de programação. Algumas linguagens se encaixam em um único tipo, enquanto outras podem combinar vários estilos ao mesmo tempo.

É como se fosse uma filosofia que ensina a pensar e resolver problemas com a programação, influenciando o passo a passo, desde criar as ideias até colocar o sistema em funcionamento e cuidar dele depois.

Os paradigmas são importantes porque mostram diferentes formas de resolver um mesmo problema usando programação, dependendo do estilo escolhido, você pode encontrar caminhos diferentes para chegar na solução.

Eles também influenciam em como o código vai ficar para quem precisar ler, arrumar ou aumentar o programa depois. Por isso, escolher um paradigma pode facilitar (ou complicar) o trabalho em equipe e a manutenção do sistema.

Os paradigmas de programação mais comuns serão apresentados a seguir:

- **Imperativo / Procedural**:
  - No jeito imperativo ou procedural de programar, você escreve o que o computador tem que fazer, passo a passo, como se fosse uma lista de tarefas. Dá para mudar valores, criar listas, repetir comandos e escolher caminhos usando “se” ou “enquanto”.
  - Esse estilo é bem direto, igual seguir instruções. Linguagens como C, Go, Python e Rust usam bastante esse jeito de programar.
- **Orientado a Objetos (OO)**:
  - A ideia principal é que, nesse jeito de programar, você organiza o código em “objetos”, que são como caixinhas onde ficam guardados os dados e as ações que podem ser feitas com eles.
  - Esses objetos ajudam a deixar tudo mais arrumado: você pode esconder detalhes que não precisa ou não quer mostrar (isso se chama encapsulamento), criar coisas novas aproveitando o que já existe (herança) e mudar o comportamento de acordo com a situação (polimorfismo).
  - Esse estilo é muito usado para criar programas que imitam situações do dia a dia ou aplicativos com telas (interfaces gráficas).
- **Funcional**:
  - No jeito funcional de programar, tudo gira em torno de funções, que são como pequenas máquinas: você coloca um valor e ela te devolve outro, fazendo uma conta ou tarefa.
  - Normalmente, não ficamos mudando o que já existe, ou seja, evitamos mexer em variáveis (que são como caixas que guardam valores), o que ajuda a evitar erros difíceis de achar.
  - As funções são “puras” (o que quer dizer que elas não têm efeitos colaterais como mudar alguma coisa fora do seu controle), então sempre dão o mesmo resultado se você entregar o mesmo valor, sem surpresas.
- **Declarativo (consultas/consultável)**:
  - No paradigma declarativo, a gente diz para o computador o que quer que aconteça, mas não explica o passo a passo de como fazer. 
  - Um exemplo famoso é o SQL, usado para fazer perguntas e buscar informações em bancos de dados. 
  - Nele, só precisamos dizer quais dados queremos encontrar, e o sistema se vira para descobrir como pegar tudo. 
  - Outros exemplos são ferramentas que usam regras ou instruções para montar projetos ou configurar servidores sem precisar explicar cada detalhe do processo. Assim, o foco está em falar o resultado que queremos, não o caminho para chegar lá.
- **Lógico**:
  - No jeito lógico de programar, o programa funciona como uma lista de fatos e regras.
  - Para executar, você faz uma pergunta (consulta) e o computador tenta achar uma resposta, testando combinações e voltando atrás quando necessário.
  - Esse método é muito usado em inteligência artificial, sistemas que checam regras ou protótipos (modelos de teste).

### Qual paradigma escolher? {#qual-paradigma-escolher}
---

Na realidade, você não precisa escolher um desses jeitos de programar agora! Aqui, a gente vai usar o paradigma (modelo) orientado a objetos, mas não se preocupe com isso neste começo. O importante é saber que existem diferentes estilos de programação, entender um pouco como cada um funciona, e conhecer seus nomes. O resto vem com o tempo e com a prática.

Se você quiser uma dica para o futuro, vale a pena aprender mais sobre os estilos orientado a objetos e funcional. Esses dois jeitos de programar são muito procurados no mercado de trabalho e ajudam bastante na hora de conseguir um emprego na área. 

## Resumo {#resumo}
---

Ao longo deste artigo, vimos que programar é basicamente criar instruções que o computador deve seguir, e que essas instruções são chamadas de algoritmos. Descobrimos que algoritmos não estão presentes apenas na tecnologia, mas também em situações do dia a dia, eles ajudam a organizar os passos de forma clara para chegar ao resultado desejado.

Também entendemos que, para transformar esses algoritmos em algo que o computador consiga executar, usamos linguagens de programação, elas funcionam como uma ponte entre a pessoa programadora e a máquina. Vimos que existem diferentes formas de executar o código, compilação e interpretação, cada uma com suas vantagens e desvantagens.

Além disso, exploramos os paradigmas de programação, que são diferentes jeitos de pensar e estruturar um programa, como o imperativo, orientado a objetos, funcional, declarativo e lógico.

No fim das contas, a programação é uma forma de transformar ideias em soluções práticas, quanto mais conhecemos sobre algoritmos, linguagens e paradigmas, mais preparados ficamos para criar sistemas úteis e eficientes. O segredo é praticar, experimentar e, aos poucos, ir se familiarizando com os diferentes estilos e ferramentas.

É assim que se constrói uma boa base para seguir aprendendo e evoluindo na área de programação.