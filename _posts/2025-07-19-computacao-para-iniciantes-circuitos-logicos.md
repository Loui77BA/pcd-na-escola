---
layout: post
title: "Computação para Iniciantes: Circuitos Lógicos"
description: "Este artigo aborda os circuitos lógicos, as portas lógicas e suas aplicações."
date: 2025-07-19 12:00:00 +0000
author: Louise Suelen
categories: [Computação para Iniciantes]
tags: [computação, tecnologia]
permalink: /computacao-para-iniciantes-circuitos-logicos/
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
        <!-- 2. Lógica Booleana -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#logica-booleana">
                <span class="badge bg-secondary">2</span>
                Lógica Booleana
            </a>
        </li>
        <!-- 3. Operação E (AND) -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#operacao-e-and">
                <span class="badge bg-secondary">3</span>
                Operação E (AND)
            </a>
        </li>
        <!-- 4. Operação OU (OR) -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#operacao-ou-or">
                <span class="badge bg-secondary">4</span>
                Operação OU (OR)
            </a>
        </li>
        <!-- 5. Operação OU Exclusivo (XOR) -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#operacao-ou-exclusivo-xor">
                <span class="badge bg-secondary">5</span>
                Operação OU Exclusivo (XOR)
            </a>
        </li>
        <!-- 6. Operação NÃO (NOT) -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#operacao-nao-not">
                <span class="badge bg-secondary">6</span>
                Operação NÃO (NOT)
            </a>
        </li>
        <!-- 7. Tabela Verdade -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#tabela-verdade">
                <span class="badge bg-secondary">7</span>
                Tabela Verdade
            </a>
        </li>
        <!-- 8. Exemplo de tabela-verdade combinando E (AND) e OU (OR) -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#exemplo-tabela-verdade-combinando-e-and-e-ou-or">
                <span class="badge bg-secondary">8</span>
                Exemplo de tabela-verdade combinando E (AND) e OU (OR)
            </a>
        </li>
        <!-- 9. Exemplo de tabela-verdade combinando OU (OR) e XOR -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#exemplo-tabela-verdade-combinando-ou-or-e-xor">
                <span class="badge bg-secondary">9</span>
                Exemplo de tabela-verdade combinando OU (OR) e OU Exclusivo (XOR)
            </a>
        </li>
        <!-- 10. Resumo -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#resumo">
                <span class="badge bg-secondary">10</span>
                Resumo
            </a>
        </li>
    </ul>
---

<p>Este artigo aborda os circuitos lógicos, as portas lógicas e suas aplicações. Eles são fundamentais na computação, pois são usados para processar informações e tomar decisões.</p>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQSkSjtjDN8ES4cJ8NDgWIJdAdyvXWSo8ouQZl8HyWyDq1w"
    alt="Uma rede de circuitos lógicos digitais interconectados com portas AND, OR, XOR e NOR, ilustrando o fluxo de dados."
    caption="Circuitos lógicos digitais com portas AND, OR, XOR e NOR interconectadas."
%}

<h2 id="apresentacao">Apresentação</h2>
<hr>

<p>Depois de entender como funcionam os transistores, podemos dar mais um passo e falar sobre os circuitos lógicos. Eles são os blocos fundamentais do processamento de dados em computadores e outros aparelhos eletrônicos.</p>

<p>Os circuitos lógicos nada mais são do que grupos de transistores trabalhando juntos para realizar operações como somar, comparar valores e tomar decisões — por meio da combinação de portas lógicas simples em circuitos mais complexos, como somadores e comparadores. Em outras palavras, eles (circuitos lógicos) são responsáveis por processar informações e executar tarefas dentro de um dispositivo eletrônico.</p>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQR_zGjqSRdIQqofjsf1RXEhAeKaGO11-fF5UtflZa7gKvY"
    alt="Um conjunto de circuítos coloridos conectados por fios, cada um rotulado com funções como somar, subtrair, comparar valores, tomar decisões e filtrar, simbolizando operações lógicas e de processamento."
    caption="Circuito lógico com operações como somar, subtrair, comparar valores, tomar decisões e filtrar."
%}

<p>Esses circuitos estão por trás do funcionamento de celulares, computadores, videogames e muitos outros dispositivos.</p>

<p>Esses circuitos são feitos de portas lógicas, que são como pequenos blocos de construção. Uma analogia (comparação) simples é pensar nessas portas lógicas como se fossem peças de LEGO, que podem ser montadas de diferentes maneiras para criar circuitos mais complexos.</p>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQTAQmtUJI1XRZ_-NwLJvP5aAYH1XFCWY3QCw7ZOkWHQpx0"
    alt="Uma ilustração que compara circuitos lógicos a peças de LEGO, mostrando blocos coloridos interconectados que representam Portas Lógicas, Transistores, Processamento e Saída de Informação, com texto explicando que circuitos lógicos processam informações e executam tarefas dentro de um dispositivo eletrônico."
    caption="Circuitos lógicos como peças de LEGO, com blocos representando portas lógicas, transistores, processamento e saída de informação."
%}

<p>Esses circuitos lógicos obedecem uma lógica específica, chamada <strong>álgebra booleana</strong>. A lógica em geral é o estudo das regras do pensamento: como sabemos se uma ideia faz sentido ou não. Esse tipo de raciocínio já era estudado desde a Grécia Antiga, por filósofos como Aristóteles. Mas a lógica que os computadores usam foi desenvolvida por um matemático chamado <strong>George Boole</strong>, no século 19 — por isso, ela é chamada de lógica booleana.</p>

<h2 id="logica-booleana">Lógica Booleana</h2>
<hr>

<p>A lógica booleana trabalha com apenas dois valores possíveis:</p>

<ul>
    <li><strong>Verdadeiro (1)</strong>: representa uma afirmação que é verdadeira.</li>
    <li><strong>Falso (0)</strong>: representa uma afirmação que é falsa.</li>
</ul>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQT94i1lRBkwSbIxKuwRilAWAd7zWRkpaIdgaeH4BH5uHxM"
    alt="Dois blocos retangulares, um verde escrito a palavra VERDADEIRO com um símbolo de verificado e o número 1, o outro bloco é vermelho e está escrito a palavra FALSO com um símbolo de X e o número 0, representando os estados binários de lógica."
    caption="Símbolos de verdadeiro (1) e falso (0) representados por um bloco verde e um bloco vermelho, respectivamente."
%}

<p>Com base nisso, é possível fazer operações lógicas. As principais são:</p>

<ul>
    <li><strong>E (em inglês, AND)</strong>: Só dá verdadeiro se todas as condições (afirmações ou entradas) forem verdadeiras.</li>
    <li><strong>OU (em inglês, OR)</strong>: Dá verdadeiro se pelo menos uma condição (afirmação ou entrada) for verdadeira.</li>
    <li><strong>OU Exclusivo (em inglês, XOR)</strong>: Dá verdadeiro se apenas uma das condições for verdadeira. Se as duas forem iguais (verdadeiras ou falsas), o resultado dá falso.</li>
    <li><strong>NÃO (em inglês, NOT) – Inverte o valor</strong>: se era verdadeiro, vira falso; se era falso, vira verdadeiro.</li>
</ul>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQQzHl4UE9nhTY136vMgPXySAfP9xUJduvDCrRV48zJ8Gys"
    alt="Ilustração exibindo os símbolos de portas lógicas digitais comuns AND, OR, NOT, XOR em uma superfície que lembra um quadro-negro. A primeira porta se chama AND, e ela parece a letra D maiúscula, daquelas que a gente desenha no papel, com a parte reta para o lado esquerdo e a curva para o lado direito. Ela tem dois lugares por onde a energia pode entrar, e só um lugar por onde ela pode sair. A próxima porta é a OR, que parece um escudo de cavaleiro ou uma fatia de melancia cortada no meio, com a parte curva para trás e a pontinha para a frente. Assim como a AND, ela também tem dois lugares para a energia entrar e um para sair. Depois, temos a porta NOT, que é um triângulo apontando para a direita, como uma seta. Ela tem uma bolinha pequena bem na ponta, no lugar de onde a energia sai, e um lugar para a energia entrar na parte de trás. Por último, tem a porta XOR, que é parecida com a OR aquela do escudo ou melancia. A diferença é que a XOR tem uma linha extra, uma barreira curva, bem na frente dos lugares por onde a energia entra. Ela também tem dois lugares para entrar e um para sair."
    caption="Símbolos de portas lógicas digitais comuns: AND, OR, NOT, XOR."
%}

<p>Essas operações são usadas para construir circuitos lógicos que podem realizar tarefas complexas, como somar números, comparar valores e tomar decisões com base em condições.</p>

<p>Vamos ver como cada uma dessas operações funciona com exemplos.</p>

<h2 id="operacao-e-and"><strong>Operação E (AND)</strong></h2>
<hr>

<p>Imagine que você quer ir ao cinema com uma pessoa. Duas coisas precisam acontecer:</p>

<ul>
    <li>O cinema precisa estar aberto.</li>
    <li>A pessoa precisa estar disponível para ir com você.</li>
</ul>

<p>Se as duas coisas forem verdadeiras, o plano dá certo e vocês vão ao cinema. Se qualquer uma delas for falsa, o plano não dá certo e vocês não vão.</p>

<div class="table-responsive">
    <table class="table table-bordered table-dark" role="table" aria-label="Tabela de exemplo da operação lógica E (AND) com condições do cinema">
        <caption class="text-white">Tabela para a operação lógica E (AND) com condições do cinema</caption>
        <thead>
            <tr>
                <th scope="col">Cinema aberto</th>
                <th scope="col">Pessoa disponível</th>
                <th scope="col">Resultado da operação E (AND) para ir ao cinema</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
            </tr>
            <tr>
                <td>Verdadeiro (1)</td>
                <td>Falso (0)</td>
                <td>Falso (0)</td>
            </tr>
            <tr>
                <td>Falso (0)</td>
                <td>Verdadeiro (1)</td>
                <td>Falso (0)</td>
            </tr>
            <tr>
                <td>Falso (0)</td>
                <td>Falso (0)</td>
                <td>Falso (0)</td>
            </tr>
        </tbody>
    </table>
</div>

<p>Ou seja, as possibilidades de saída (resultado) para a operação E (AND) são:

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQTY_snR_zPQRbEKWb8NibE5AVAjLAZwZig4TJRfcriHJcc"
    alt="Uma imagem mostrando o símbolo da porta lógica E, AND, e sua tabela de possibilidades de saída. A tabela tem colunas para as entradas A e B, e para a Saída, exibindo que a saída é 1 apenas quando ambas as entradas A e B são 1 em todas as outras combinações, a saída é 0."
    caption="Símbolo da porta lógica E (AND) e sua tabela de possibilidades de saída."
%}

<p>Como você pode observar, a saída só é verdadeira (1) quando ambas as entradas são verdadeiras (1). Se qualquer uma das entradas for falsa (0), a saída também será falsa (0). Assim como no exemplo do cinema, onde as duas condições precisam ser atendidas (cinema aberto e pessoa disponível para ir com você) para que o plano (ir ao cinema) dê certo.</p>

<h2 id="operacao-ou-or"><strong>Operação OU (OR)</strong></h2>
<hr>

<p>Aqui é mais tranquilo: basta que uma condição seja verdadeira para o resultado ser verdadeiro.</p>

<p>Exemplo: você vai ao parque (ou praça) e pode:</p>

<ul>
    <li>Andar de bicicleta.</li>
    <li>Fazer um piquenique.</li>
</ul>

<p>Se fizer pelo menos uma dessas atividades, o dia foi divertido.</p>

<div class="table-responsive">
    <table class="table table-bordered table-dark" role="table" aria-label="Tabela de exemplo da operação lógica OU (OR) com atividades no parque">
        <caption class="text-white">Tabela para a operação lógica OU (OR) com atividades no parque</caption>
        <thead>
            <tr>
                <th scope="col">Andar de bicicleta</th>
                <th scope="col">Fazer piquenique</th>
                <th scope="col">Resultado da operação OU (OR) para o dia divertido</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
            </tr>
            <tr>
                <td>Verdadeiro (1)</td>
                <td>Falso (0)</td>
                <td>Verdadeiro (1)</td>
            </tr>
            <tr>
                <td>Falso (0)</td>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
            </tr>
            <tr>
                <td>Falso (0)</td>
                <td>Falso (0)</td>
                <td>Falso (0)</td>
            </tr>
        </tbody>
    </table>
</div>

<p>Ou seja, as possibilidades de saída (resultado) para a operação OU (OR) são:</p>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQR9nPuLrJoCSo5ZoDOPo6dBAZk2MWGTDSeNPJ1suDbHH0I?width=1024&height=1024"
    alt="Uma imagem mostrando o símbolo da porta lógica OU, OR, e sua tabela de possibilidades de saída. A tabela tem colunas para as entradas A e B, e para a Saída, exibindo que a saída é 1 quando pelo menos uma das entradas A ou B é 1 se as duas entradas forem 0, a saída é 0."
    caption="Símbolo da porta lógica OU (OR) e sua tabela de possibilidades de saída."
%}

<p>Como você pode observar, a saída é verdadeira (1) quando pelo menos uma das entradas é verdadeira (1). Se ambas as entradas forem falsas (0), a saída será falsa (0). Assim como no exemplo do parque, onde você se divertiu se fez pelo menos uma das atividades.</p>

<h2 id="operacao-ou-exclusivo-xor"><strong>Operação OU Exclusivo (XOR)</strong></h2>
<hr>

<p>Aqui (na operação OU Exclusivo - XOR) o resultado só é verdadeiro se apenas uma das condições for verdadeira. Se as duas (condições) forem verdadeiras (ou as duas falsas), o resultado é falso.</p>

<p>Exemplo: Você tem duas opções de roupas sobre a cama, uma roupa quente e uma roupa leve. Você só pode vestir uma delas. Se qualquer uma delas for escolhida, a situação está correta (XOR = verdadeiro). Mas você não pode escolher as duas ao mesmo tempo, ou não escolher nenhuma delas. Se isso acontecer, a situação está incorreta (XOR = falso).</p>

<div class="table-responsive">
    <table class="table table-bordered table-dark" role="table" aria-label="Tabela de exemplo da operação lógica OU Exclusivo (XOR) com roupas">
        <caption class="text-white">Tabela para a operação lógica OU Exclusivo (XOR) com roupas</caption>
        <thead>
            <tr>
                <th scope="col">Roupas quentes</th>
                <th scope="col">Roupas leves</th>
                <th scope="col">Resultado da operação OU Exclusivo (XOR) para vestir roupas</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
                <td>Falso (0)</td>
            </tr>
            <tr>
                <td>Verdadeiro (1)</td>
                <td>Falso (0)</td>
                <td>Verdadeiro (1)</td>
            </tr>
            <tr>
                <td>Falso (0)</td>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
            </tr>
            <tr>
                <td>Falso (0)</td>
                <td>Falso (0)</td>
                <td>Falso (0)</td>
            </tr>
        </tbody>
    </table>
</div>

<p>Ou seja, as possibilidades de saída (resultado) para a operação OU Exclusivo (XOR) são:</p>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQS2JPqcaZTPQ6I2Rmi1LiGvAW-D7_Te7_CEyeFMRQ_ekYs?width=1024&height=1024"
    alt="Uma imagem mostrando o símbolo da porta lógica OU Exclusivo, XOR, e sua tabela de possibilidades de saída. A tabela tem colunas para as entradas A e B, e para a Saída, exibindo que a saída é 1 quando apenas uma das entradas A ou B é 1. Se as duas entradas forem 0 ou se as duas forem 1, a saída é 0."
    caption="Símbolo da porta lógica OU Exclusivo (XOR) e sua tabela de possibilidades de saída."
%}

<p>Como você pode observar, a saída é verdadeira (1) quando apenas uma das condições é verdadeira (1). Se as duas condições forem verdadeiras (1) ou as duas forem falsas (0), a saída será falsa (0). Assim como no exemplo das roupas, onde você só veste roupas quentes ou leves, mas não as duas ao mesmo tempo.</p>

<h2 id="operacao-nao-not"><strong>Operação NÃO (NOT)</strong></h2>
<hr>

<p>Essa operação inverte o valor de uma condição. Se era verdadeiro, vira falso; se era falso, vira verdadeiro.</p>

<p>Exemplo: Se a luz está acesa, a operação NÃO (NOT) fará com que consideremos que a luz está apagada.</p>

<div class="table-responsive">
    <table class="table table-bordered table-dark" role="table" aria-label="Tabela de exemplo da operação lógica NÃO (NOT) a luz">
        <caption class="text-white">Tabela para a operação lógica NÃO (NOT) com luz</caption>
        <thead>
            <tr>
                <th scope="col">Luz acesa</th>
                <th scope="col">Resultado da operação NÃO (NOT) para luz apagada</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Verdadeiro (1)</td>
                <td>Falso (0)</td>
            </tr>
            <tr>
                <td>Falso (0)</td>
                <td>Verdadeiro (1)</td>
            </tr>
        </tbody>
    </table>
</div>

<p>Ou seja, as possibilidades de saída (resultado) para a operação NÃO (NOT) são:</p>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQTF3iG7D7H_SLoQE2Rqfm0RAYNHsDZPoHl9Fqx--sHS0n0"
    alt="Uma imagem mostrando o símbolo da porta lógica NÃO, NOT, e sua tabela de possibilidades de saída. A tabela tem uma coluna para a entrada A e outra para a Saída, exibindo que a saída é 0 quando a entrada é 1 e a saída é 1 quando a entrada é 0. Ou seja, a saída é sempre o oposto da entrada."
    caption="Símbolo da porta lógica NÃO (NOT) e sua tabela de possibilidades de saída."
%}

<p>Como você pode observar, a saída é o inverso (o contrário) da entrada. Se a entrada é verdadeira (1), a saída será falsa (0). Se a entrada é falsa (0), a saída será verdadeira (1). Assim como no exemplo da luz, onde a operação NÃO (NOT) inverte o estado da luz (se a luz está acesa, a operação a considera apagada e vice-versa).</p>

<h2 id="tabela-verdade">Tabela Verdade</h2>
<hr>

<p>Essas tabelas que acabamos de fazer, com as possibilidades de resultado para cada operação lógica, são chamadas de <strong>tabelas-verdade</strong>. Elas nos ajudam a entender como as operações funcionam em diferentes situações.</p>

<p>As tabelas-verdade são uma ferramenta importante na lógica booleana, pois mostram todas as combinações possíveis de entradas e os resultados correspondentes. Elas são usadas para projetar circuitos lógicos e entender como eles se comportam.</p>

<p>Podemos criar tabelas-verdade para construir circuitos lógicos mais complexos, combinando várias operações. Por exemplo, se quisermos criar um circuito que combine as operações E (AND) e OU (OR), podemos fazer uma tabela-verdade que mostre como essas duas operações interagem.</p>

<p>Essas tabelas são fundamentais para entender como os circuitos lógicos funcionam e como podemos usá-los para resolver problemas e processar informações.</p>

<h2 id="exemplo-tabela-verdade-combinando-e-and-e-ou-or">Exemplo de tabela-verdade combinando E (AND) e OU (OR)</h2>
<hr>

<p>Imagine que você tem três interruptores chamados A, B e C. Cada um pode estar em dois estados:</p>
<ul>
    <li><strong>Ligado</strong> – representado por <strong>1</strong>, que significa <em>verdadeiro</em>;</li>
    <li><strong>Desligado</strong> – representado por <strong>0</strong>, que significa <em>falso</em>.</li>
</ul>

<p>Agora vamos entender uma situação onde esses três interruptores se combinam de uma forma especial. A expressão que usaremos é:</p>

{% include expressao-logica.html 
   expr_simbolo="A E (B OU C)" 
   descricao="A e, abre parênteses, B ou C, fecha parênteses." %}

<p>Ela pode parecer complicada no começo, mas vamos por partes:</p>

<h3>Como interpretar a expressão?</h3>
<p>Pense nessa expressão como duas etapas:</p>
<ol>
    <li>Primeiro observamos o que está dentro dos parênteses: <strong>B OU C</strong>.</li>
    <li>Depois usamos esse resultado junto com A na operação <strong>E</strong>.</li>
</ol>

<h3>O que significa OU?</h3>
<p>A operação <strong>OU</strong> (também chamada de <em>OR</em> em inglês) significa que se <strong>pelo menos um</strong> dos interruptores estiver ligado (verdadeiro), o resultado será <strong>verdadeiro</strong>.</p>
<ul>
    <li>Se B estiver ligado e C também → resultado é verdadeiro.</li>
    <li>Se apenas B estiver ligado → também é verdadeiro.</li>
    <li>Se apenas C estiver ligado → também é verdadeiro.</li>
    <li>Se os dois estiverem desligados → aí sim, o resultado é falso.</li>
</ul>

<h3>E o que significa E?</h3>
<p>A operação <strong>E</strong> (ou <em>AND</em>) funciona assim: ela só dá <strong>verdadeiro</strong> se <strong>os dois lados forem verdadeiros</strong>.</p>
<p>Então, se A estiver ligado <strong>e</strong> o resultado de (B OU C) também for verdadeiro, o resultado final será verdadeiro.</p>
<p>Se <strong>qualquer um dos dois</strong> for falso, o resultado final será falso.</p>

<h3>Vamos ver isso na prática</h3>

<p>Vamos analisar combinações possíveis de A, B e C para entender melhor:</p>

<ul>
    <li>
        <strong>Possibilidade 1:</strong><br>
        A = ligado, B = ligado, C = desligado<br>
        então <br>
        B OU C = verdadeiro (porque B está ligado)<br>
        então <br>
        {% include expressao-logica.html 
           expr_simbolo="A E (B OU C)" 
           descricao="A e, abre parênteses, B ou C, fecha parênteses." %} = verdadeiro (porque A também está ligado)
    </li>
    <li>
        <strong>Possibilidade 2:</strong><br>
        A = ligado, B = desligado, C = desligado<br>
        então <br>
        B OU C = falso (os dois estão desligados)<br>
        então <br>
        {% include expressao-logica.html 
           expr_simbolo="A E (B OU C)" 
           descricao="A e, abre parênteses, B ou C, fecha parênteses." %} = falso (porque A está ligado, mas B OU C é falso está desligado)
    </li>
    <li>
        <strong>Possibilidade 3:</strong><br>
        A = desligado, B = ligado, C = ligado<br>
        então <br>
        B OU C = verdadeiro (porque tanto B quanto C estão ligados)<br>
        então <br>
        {% include expressao-logica.html 
           expr_simbolo="A E (B OU C)" 
           descricao="A e, abre parênteses, B ou C, fecha parênteses." %} = falso (porque A está desligado)
    </li>
    <li><strong>Possibilidade 4:</strong><br>
        A = desligado, B = desligado, C = desligado<br>
        então <br>
        B OU C = falso (os dois estão desligados)<br>
        então <br>
        {% include expressao-logica.html 
           expr_simbolo="A E (B OU C)" 
           descricao="A e, abre parênteses, B ou C, fecha parênteses." %} = falso (porque A está desligado também)
    </li>
</ul>

<p>Com esses exemplos, já dá para perceber um padrão: para que o resultado final seja verdadeiro, <strong>A precisa estar ligado</strong> e <strong>pelo menos B ou C também precisam estar ligados</strong>.</p>

<h3>Tabela verdade completa de {% include expressao-logica.html expr_simbolo="A E (B OU C)" descricao="A e, abre parênteses, B ou C, fecha parênteses." %}</h3>
<hr>

<p>Agora que compreendemos a lógica passo a passo, vamos montar a tabela com todas as combinações possíveis de A, B e C:</p>

<div class="table-responsive">
    <table class="table table-bordered table-dark" role="table" aria-label="Tabela verdade de A E (B OU C)">
        <caption class="text-white">Tabela verdade de A E (B OU C)</caption>
        <thead>
            <tr>
                <th scope="col">A está ligado?</th>
                <th scope="col">B está ligado?</th>
                <th scope="col">C está ligado?</th>
                <th scope="col">Resultado de B OU C</th>
                <th scope="col">Resultado final de {% include expressao-logica.html expr_simbolo="A E (B OU C)" descricao="A e, abre parênteses, B ou C, fecha parênteses." %}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
            </tr>
            <tr>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
                <td>Falso (0)</td>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
            </tr>
            <tr>
                <td>Verdadeiro (1)</td>
                <td>Falso (0)</td>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
            </tr>
            <tr>
                <td>Verdadeiro (1)</td>
                <td>Falso (0)</td>
                <td>Falso (0)</td>
                <td>Falso (0)</td>
                <td>Falso (0)</td>
            </tr>
            <tr>
                <td>Falso (0)</td>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
                <td>Falso (0)</td>
            </tr>
            <tr>
                <td>Falso (0)</td>
                <td>Verdadeiro (1)</td>
                <td>Falso (0)</td>
                <td>Verdadeiro (1)</td>
                <td>Falso (0)</td>
            </tr>
            <tr>
                <td>Falso (0)</td>
                <td>Falso (0)</td>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
                <td>Falso (0)</td>
            </tr>
            <tr>
                <td>Falso (0)</td>
                <td>Falso (0)</td>
                <td>Falso (0)</td>
                <td>Falso (0)</td>
                <td>Falso (0)</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>Recapitulando (revisão)</h3>

<p>Para que o resultado de {% include expressao-logica.html expr_simbolo="A E (B OU C)" descricao="A e, abre parênteses, B ou C, fecha parênteses." %} seja verdadeiro:</p>

<ul>
    <li><strong>A</strong> precisa estar ligado (1);</li>
    <li><strong>B ou C</strong> (ou os dois) também precisam estar ligados.</li>
</ul>

<p>Se A estiver desligado, o resultado será sempre falso, não importa o estado de B ou C. Neste caso, isso acontece porque precisamos fazer uma operação E (AND) entre A e o resultado de (B OU C), como se trata de uma operação E (AND) já sabemos que o resultado final será falso sempre que uma das entradas for falsa.</p>

<h3>Atenção a precedência (ordem de execução) para resolver as operações lógicas)</h3>
<hr>

<p><strong>Observação:</strong> Assim como acontece nas operações matemáticas, as operações lógicas também seguem uma ordem de execução chamada de <strong>precedência</strong> (ordem de execução das etapas para resolver as operações lógicas). Isso significa que, ao interpretar uma expressão lógica, é preciso resolver primeiro as operações que têm maior prioridade, a menos que existam parênteses indicando outra ordem (se tiver parênteses as operações dentro deles devem ser resolvidas primeiro assim como acontece na matemática).</p>

<p>Por exemplo, na expressão {% include expressao-logica.html expr_simbolo="A E (B OU C)" descricao="A e, abre parênteses, B ou C, fecha parênteses." %}, a operação dentro dos parênteses (B OU C) deve ser resolvida primeiro, e em seguida, o resultado é combinado com a entrada A usando a operação E (AND).</p>

<p>A ordem de precedência (da mais alta para a mais baixa) das principais operações lógicas é:</p>

<ul>
    <li><strong>NOT</strong> (NÃO) – inverte o valor lógico. É a operação com maior prioridade.</li>
    <li><strong>AND</strong> (E) – retorna verdadeiro se ambas as condições forem verdadeiras.</li>
    <li><strong>OR</strong> (OU) – retorna verdadeiro se pelo menos uma das condições for verdadeira.</li>
    <li><strong>XOR</strong> (OU Exclusivo) – retorna verdadeiro se exatamente uma das condições for verdadeira (valores diferentes).</li>
</ul>

<p><strong>Dica:</strong> Para evitar erros de interpretação, use parênteses sempre que possível para deixar claro qual parte da expressão deve ser resolvida primeiro.</p>

<h2 id="exemplo-tabela-verdade-combinando-ou-or-e-xor">Exemplo de tabela-verdade combinando OU (OR) com OU Exclusivo (XOR)</h2>
<hr>

<p>Vamos imaginar novamente que temos três interruptores: A, B e C. Cada um pode estar em dois estados:</p>

<ul>
    <li><strong>Ligado</strong> – representado por <strong>1</strong> (verdadeiro);</li>
    <li><strong>Desligado</strong> – representado por <strong>0</strong> (falso).</li>
</ul>

<p>Desta vez, vamos analisar uma nova expressão lógica envolvendo duas operações:</p>

<p>
   {% include expressao-logica.html 
   expr_simbolo="(A OU B) XOR C" 
   descricao="Abre parênteses, A ou B, fecha parênteses, XOR C." %}
</p>

<p>Ou seja: primeiro usamos uma porta OU (OR) entre A e B, e depois usamos o resultado disso com C, em uma porta OU EXCLUSIVO (XOR).</p>

<h3>Como interpretar a expressão?</h3>

<p>Assim como antes, vamos dividir o raciocínio em dois passos:</p>

<ol>
    <li><strong>Primeiro</strong>, resolvemos A OU B.</li>
    <li><strong>Depois</strong>, usamos esse resultado com C na operação XOR.</li>
</ol>

<h3>O que significa OU (OR)?</h3>

<p>O <strong>OU</strong> retorna verdadeiro se <strong>pelo menos um</strong> dos valores for verdadeiro:</p>

<ul>
    <li>A = 0, B = 0 então A OU B = 0</li>
    <li>A = 1, B = 0 então A OU B = 1</li>
    <li>A = 0, B = 1 então A OU B = 1</li>
    <li>A = 1, B = 1 então A OU B = 1</li>
</ul>

<h3>O que significa OU EXCLUSIVO (XOR)?</h3>

<p>O <strong>XOR</strong> retorna verdadeiro se <strong>exatamente um</strong> dos valores for verdadeiro:</p>

<ul>
    <li>A = 0, B = 0 então A XOR B = 0</li>
    <li>A = 1, B = 0 então A XOR B = 1</li>
    <li>A = 0, B = 1 então A XOR B = 1</li>
    <li>A = 1, B = 1 então A XOR B = 0</li>
</ul>

<p>Ou seja: se os dois valores forem iguais, o resultado é <strong>falso</strong>. Se forem diferentes, é <strong>verdadeiro</strong>.</p>

<h3>Vamos ver isso na prática</h3>

<p>Agora vamos analisar combinações possíveis de A, B e C para entender melhor:</p>

<ul>
    <li>
        <strong>Possibilidade 1:</strong><br>
        A = ligado, B = ligado, C = desligado<br>
        então <br>
        A OU B = verdadeiro (porque A e B estão ligados)<br>
        então <br>
        {% include expressao-logica.html 
   expr_simbolo="(A OU B) XOR C" 
   descricao="Abre parênteses, A ou B, fecha parênteses, XOR C." %} = verdadeiro (porque C está desligado)
    </li>
    <li><strong>Possibilidade 2:</strong><br>
        A = desligado, B = desligado, C = desligado<br>
        então <br>
        A OU B = falso (os dois estão desligados)<br>
        então <br>
        {% include expressao-logica.html 
   expr_simbolo="(A OU B) XOR C" 
   descricao="Abre parênteses, A ou B, fecha parênteses, XOR C." %} = falso (porque C também está desligado)
    </li>
    <li>
        <strong>Possibilidade 3:</strong><br>
        A = ligado, B = ligado, C = ligado<br>
        então <br>
        A OU B = verdadeiro (porque A e B estão ligados)<br>
        então <br>
        {% include expressao-logica.html 
   expr_simbolo="(A OU B) XOR C" 
   descricao="Abre parênteses, A ou B, fecha parênteses, XOR C." %} = falso (porque C também está ligado)
    </li>
    <li>
        <strong>Possibilidade 4:</strong><br>
        A = ligado, B = desligado, C = ligado<br>
        então <br>
        A OU B = verdadeiro (porque A está ligado)<br>
        então <br>
        {% include expressao-logica.html 
   expr_simbolo="(A OU B) XOR C" 
   descricao="Abre parênteses, A ou B, fecha parênteses, XOR C." %} = falso (porque os dois são verdadeiros)
    </li>
    <li>
        <strong>Possibilidade 5:</strong><br>
        A = desligado, B = ligado, C = ligado<br>
        então <br>
        A OU B = verdadeiro (porque B está ligado)<br>
        então <br>
        {% include expressao-logica.html 
   expr_simbolo="(A OU B) XOR C" 
   descricao="Abre parênteses, A ou B, fecha parênteses, XOR C." %} = falso (porque os dois são verdadeiros)
    </li>
</ul>

<p>Com esses exemplos, podemos perceber o padrão correto:</p>

<ul>
    <li>O resultado será <strong>verdadeiro</strong> quando o resultado de A OU B for <strong>verdadeiro</strong> e C estiver <strong>desligado</strong>.</li>
    <li>O resultado será <strong>verdadeiro</strong> quando o resultado de A OU B for <strong>falso</strong> e C estiver <strong>ligado</strong>.</li>
    <li>Nos demais casos — ou seja, quando os dois forem iguais — o resultado será <strong>falso</strong>.</li>
</ul>

<h3>Tabela verdade completa de {% include expressao-logica.html expr_simbolo="(A OU B) XOR C" descricao="Abre parênteses, A ou B, fecha parênteses, XOR C." %}</h3>
<hr>

<p>Agora que compreendemos a lógica passo a passo, vamos montar a tabela com todas as combinações possíveis de A, B e C:</p>

<div class="table-responsive">
    <table class="table table-bordered table-dark" role="table" aria-label="Tabela verdade de (A OU B) XOR C">
        <caption class="text-white">Tabela verdade de {% include expressao-logica.html expr_simbolo="(A OU B) XOR C" descricao="Abre parênteses, A ou B, fecha parênteses, XOR C." %}</caption>
        <thead>
            <tr>
                <th scope="col">A está ligado?</th>
                <th scope="col">B está ligado?</th>
                <th scope="col">C está ligado?</th>
                <th scope="col">Resultado de A OU B</th>
                <th scope="col">Resultado final de {% include expressao-logica.html expr_simbolo="(A OU B) XOR C" descricao="Abre parênteses, A ou B, fecha parênteses, XOR C." %}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
                <td>Falso (0)</td>
            </tr>
            <tr>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
                <td>Falso (0)</td>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
            </tr>
            <tr>
                <td>Verdadeiro (1)</td>
                <td>Falso (0)</td>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
                <td>Falso (0)</td>
            </tr>
            <tr>
                <td>Verdadeiro (1)</td>
                <td>Falso (0)</td>
                <td>Falso (0)</td>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
            </tr>
            <tr>
                <td>Falso (0)</td>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
                <td>Falso (0)</td>
            </tr>
            <tr>
                <td>Falso (0)</td>
                <td>Verdadeiro (1)</td>
                <td>Falso (0)</td>
                <td>Verdadeiro (1)</td>
                <td>Verdadeiro (1)</td>
            </tr>
            <tr>
                <td>Falso (0)</td>
                <td>Falso (0)</td>
                <td>Verdadeiro (1)</td>
                <td>Falso (0)</td>
                <td>Verdadeiro (1)</td>
            </tr>
            <tr>
                <td>Falso (0)</td>
                <td>Falso (0)</td>
                <td>Falso (0)</td>
                <td>Falso (0)</td>
                <td>Falso (0)</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>Recapitulando (revisão)</h3>
<p>Vamos revisar os principais pontos que aprendemos sobre a operação {% include expressao-logica.html expr_simbolo="(A OU B) XOR C" descricao="Abre parênteses, A ou B, fecha parênteses, XOR C." %}:</p>
<ul>
    <li>O operador XOR (ou exclusivo) retorna verdadeiro se apenas uma das entradas for verdadeira.</li>
    <li>A operação A OU B é avaliada primeiro, e seu resultado é combinado com C usando o operador XOR.</li>
    <li>O resultado final será verdadeiro se:</li>
    <ul>
        <li>O resultado de A OU B for verdadeiro e C for desligado.</li>
        <li>O resultado de A OU B for falso e C for ligado.</li>
    </ul>
</ul>
<p>Esses conceitos são fundamentais para entender como as operações lógicas funcionam e como podemos usá-las para construir circuitos lógicos mais complexos.</p>

<h2 id="resumo">Resumo</h2>
<hr>

<p>Aprendemos sobre circuitos lógicos e como eles são fundamentais para a computação. Vimos que:</p>

<ul>
    <li>Circuitos lógicos são como peças de LEGO que se encaixam para formar sistemas complexos.</li>
    <li>A lógica booleana é a base desses circuitos, trabalhando com valores verdadeiro (1) e falso (0).</li>
    <li>As principais operações lógicas são E (AND), OU (OR), OU Exclusivo (XOR) e NÃO (NOT).</li>
    <li>Tabelas-verdade ajudam a entender como essas operações funcionam em diferentes combinações.</li>
    <li>Podemos combinar operações lógicas para criar circuitos mais complexos, como vimos nos exemplos.</li>
</ul>

<p>Esses conceitos são essenciais para entender como os computadores processam informações e tomam decisões. Compreender a lógica booleana e as operações lógicas é um passo importante para quem quer aprender mais sobre programação e eletrônica.</p>

<p>Continue praticando e explorando esses conceitos, e logo você se sentirá mais confortável trabalhando com circuitos lógicos e programação! Se não entender de primeira, tudo bem... Leia e releia este artigo até se sentir confiante.</p>

<p>Para as pessoas com deficiência visual, que usam leitores de tela, eu gostaria de dizer que temos muitos materiais acessíveis para pesquisar e praticar nessa internet de meu Deus. Mas, não temos não!</p>

<p>Por isso, está nos nossos planos criar mais conteúdos acessíveis e inclusivos específicos para essa parte de circuitos lógicos e lógica no geral.</p>

<p>Por enquanto, se você tiver alguma dúvida, ou sugestão, relacionada a este artigo pode entrar em contato comigo através da <a href="https://pcdnaescola.com.br/contato/" target="_blank">página de contato do PCD na Escola</a>. Não garanto velocidade na resposta, mas farei o possível para ajudar!</p>
