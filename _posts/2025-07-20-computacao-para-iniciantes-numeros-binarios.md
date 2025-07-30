---
layout: post
title: "Computação para Iniciantes: Números Binários"
description: "Entenda o sistema binário, sua importância na computação e como converter números decimais para binários e vice-versa."
date: 2025-07-20 12:00:00 -0300
author: "Louise Suelen"
categories: [Computação para Iniciantes]
tags: [computação, tecnologia]
permalink: /computacao-para-iniciantes-numeros-binarios/
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
        <!-- 2. Começando pelo sistema decimal (o que usamos todos os dias) -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#sistema-decimal">
                <span class="badge bg-secondary">2</span>
                Começando pelo sistema decimal (o que usamos todos os dias)
            </a>
        </li>
        <!-- 3. E o que é o sistema binário? -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#sistema-binario">
                <span class="badge bg-secondary">3</span>
                E o que é o sistema binário?
            </a>
        </li>
        <!-- 4. Comparando os sistemas decimal e binário -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#comparacao-sistemas">
                <span class="badge bg-secondary">4</span>
                Comparando os sistemas decimal e binário
            </a>
        </li>
        <!-- 5. Como transformar um número decimal em binário? -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#transformar-decimal-binario">
                <span class="badge bg-secondary">5</span>
                Como transformar um número decimal em binário?
            </a>
        </li>
        <!-- 6. Outro exemplo de conversão de decimal para binário -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#outro-exemplo-conversao-decimal-binario">
                <span class="badge bg-secondary">6</span>
                Outro exemplo de conversão de decimal para binário
            </a>
        </li>
        <!-- 7. E como fazer o caminho contrário, de binário para decimal? -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#binario-para-decimal">
                <span class="badge bg-secondary">7</span>
                E como fazer o caminho contrário, de binário para decimal?
            </a>
        </li>
        <!-- 8. Por que isso é importante? -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#por-que-importante">
                <span class="badge bg-secondary">8</span>
                Por que isso é importante?
            </a>
        </li>
        <!-- 9. Resumo -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#resumo">
                <span class="badge bg-secondary">9</span>
                Resumo
            </a>
        </li>
    </ul>
---

<p>Este artigo aborda o sistema de numeração binário, explicando o seu funcionamento, a conversão entre os sistemas decimal e binário, e a importância na computação.</p>

{% include figure.html 
    src="https://i.ytimg.com/vi/k0KeVEMXmWo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCK-HvNj_WQ1X2Oj0nbgTJNl26WSg"
    alt="Uma imagem de um quadro branco mostrando o cálculo da conversão do número decimal 9 para seu equivalente binário 1001, utilizando divisões sucessivas por 2 e destacando os restos e o último quociente para formar o número binário."
%}

<h2 id="apresentacao">Apresentação</h2>
<hr>

<p>Como os circuitos lógicos já foram apresentados, podemos falar sobre o sistema de numeração binário, que é a base da computação moderna. O sistema binário é um jeito de contar e representar números usando apenas dois símbolos: <strong>0</strong> (falso - é quando não tem passagem de corrente elétrica) e <strong>1</strong> (verdadeiro - é quando tem passagem de corrente elétrica).</p>

<p>Para entender melhor o que são números binários e como eles funcionam, vamos simplificar e comparar com o sistema decimal que usamos no dia a dia. Além disso, vamos explicar como os números binários são usados pelos computadores para realizar suas operações.</p>

<h2 id="sistema-decimal">Começando pelo sistema decimal (o que usamos todos os dias)</h2>
<hr>

<p>O sistema que a maioria das pessoas usa para contar é o sistema decimal, também chamado de base 10. Ele usa 10 dígitos (números):</p>

<p><strong>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</strong></p>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQT-pHJgBGEKS6uXZzFhCEDzAWrfyClaGuTLrU4AvpuAaqI"
    alt="Uma ilustração colorida que apresenta o SISTEMA DECIMA, mostrando os dígitos de 0 a 9 em diferentes cores dentro de um grande círculo amarelo."
    caption="Dígitos do sistema decimal (base 10) de 0 a 9."
%}

<p>Quando escrevemos um número, como 345, cada algarismo (cada número) tem um valor diferente dependendo da posição onde está. Isso acontece porque cada posição representa uma <strong>potência de 10</strong> (10 elevado a algum outro número), ou seja:</p>

<ul>
    <li>O 5 está na posição das <strong>unidades</strong>:
        <ul>
            <li>vale <span aria-label="5 vezes 1">5 &times; 1</span> = 5</li>
        </ul>
    </li>
    <li>O 4 está na posição das <strong>dezenas</strong>:
        <ul>
            <li>vale <span aria-label="4 vezes 10">4 &times; 10</span> = 40</li>
        </ul>
    </li>
    <li>O 3 está na posição das <strong>centenas</strong>:
        <ul>
            <li>vale <span aria-label="3 vezes 100">3 &times; 100</span> = 300</li>
        </ul>
    </li>
</ul>

<p>Então, para ter o número 345, somamos tudo:</p>

<p><span aria-label="300 mais 40 mais 5">300 + 40 + 5</span> = 345</p>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQRUJYnd2XTNR45fSlT-wAI8Adm3p-5ndIe9ZiNNpQGCUBc"
    alt="Uma ilustração colorida explicando o valor posicional do número 345 que é decomposto mostrando que o 3 na cor laranja representa 3 vezes 100 igual a 300, o 4 na cor verde representa 4 vezes 10 igual a 40, e o 5 na cor vermelho representa 5 vezes 1 igual a 5, somando para formar 345."
    caption="Valor posicional do número 345, mostrando como cada dígito contribui para o total."
%}

<p>É assim que a gente forma os números no sistema decimal (que usamos todos os dias).</p>

<p>Pode testar com outros números, como:</p>
<ul>
    <li>50 que é
        <ul>
            <li><span aria-label="5 vezes 10">5 &times; 10</span> + <span aria-label="0 vezes 1">0 &times; 1</span> = 50</li>
        </ul>
    </li>
    <li>
        {% include figure.html 
            src="https://1drv.ms/i/c/bf6f4302973a9faf/IQT4xfXW1k6_SqoBn3ePYtTcAZ66D0p3euPmkuHXx1rcbBw"
            alt="Uma ilustração colorida que demonstra o valor posicional do número 50, o dígito 5 na cor laranja é mostrado como 5 vezes 10 igual a 50, e o dígito 0 na cor verde é mostrado como 0 vezes 1 igual a 0, somando para formar 50 mais 0 igual a 50."
            caption="Valor posicional do número 50, mostrando como cada dígito contribui para o total."
        %}
    </li>
    <li>1234 que é
        <ul>
            <li><span aria-label="1 vezes 1000">1 &times; 1000</span> + <span aria-label="2 vezes 100">2 &times; 100</span> + <span aria-label="3 vezes 10">3 &times; 10</span> + <span aria-label="4 vezes 1">4 &times; 1</span> = 1234</li>
        </ul>
    </li>
    <li>
        {% include figure.html 
            src="https://1drv.ms/i/c/bf6f4302973a9faf/IQRgq_g9mLV4TrC7F01NsYeLAcIyzHPYBy8-RCXagK6gjS0?width=1024&height=1536"
            alt="Uma ilustração colorida que demonstra a decomposição do número 1234, mostrando que cada dígito, 1, 2, 3 e 4 representam milhares, centenas, dezenas e unidades, respectivamente, com suas multiplicações correspondentes, 1 vezes 1000, 2 vezes 100, 3 vezes 10, 4 vezes 1 e a soma final resultando em 1234."
            caption="Valor posicional do número 1234, mostrando como cada dígito contribui para o total."
        %}
    </li>
</ul>

<p>E, por aí vai...</p>

<h2 id="sistema-binario">E o que é o sistema binário?</h2>
<hr>

<p>Agora, imagine um interruptor de luz que pode estar ligado ou desligado. O sistema binário funciona com essa mesma ideia, mas usando apenas dois números: 0 e 1.</p>

<p> Por isso, ele é chamado de base 2.</p>

<ul>
    <li><strong>0</strong>: representa o estado desligado.</li>
    <li><strong>1</strong>: representa o estado ligado.</li>
</ul>

<p>E por que isso é importante? Porque os computadores funcionam com eletricidade, e os componentes dentro deles (como os transistores) se comportam como interruptores que só têm dois estados: passa corrente ou não passa corrente, ou seja, ligado ou desligado.</p>

<p>Pense que cada transistor no computador é como uma lâmpada que pode estar acesa (1) ou apagada (0).</p>

<p> Com vários desses “interruptores” juntos, o computador consegue representar qualquer informação: números, letras, imagens, músicas e muito mais.</p>

<h2 id="comparacao-sistemas">Comparando os sistemas decimal e binário</h2>
<hr>

<p>Para entender melhor, vamos comparar os dois sistemas:</p>

<div class="table-responsive">
    <table class="table table-bordered table-dark" role="table" aria-label="Tabela comparativa entre os sistemas decimal e binário">
        <caption class="text-white">Tabela comparativa entre os sistemas decimal e binário</caption>
        <thead>
            <tr>
                <th scope="col">Sistema Decimal (Base 10)</th>
                <th scope="col">Sistema Binário (Base 2)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    No sistema decimal, as posições do número valem:
                    <ul>
                        <li>1 (unidade)</li>
                        <li>10 (dezena)</li>
                        <li>100 (centena)</li>
                        <li>1000 (milhar)</li>
                        <li>10.000 (dez mil)</li>
                        <li>100.000 (cem mil)</li>
                        <li>1.000.000 (um milhão)</li>
                    </ul>
                    Cada vez que "mudamos de casa" (posição no número), o valor multiplica por 10.
                </td>
                <td>
                No sistema binário, as posições valem:
                    <ul>
                        <li>1 (unidade)</li>
                        <li>2 (dois)</li>
                        <li>4 (quatro)</li>
                        <li>8 (oito)</li>
                        <li>16 (dezesseis)</li>
                        <li>32 (trinta e dois)</li>
                        <li>64 (sessenta e quatro)</li>
                    </ul>
                    Cada vez que a gente "muda de casa" (posição no número), o valor dobra.
                </td>
            </tr>
        </tbody>
    </table>
</div>

<p>Isso mostra a diferença fundamental entre os sistemas: enquanto no decimal cada posição é uma potência de <span role="math" aria-label="10 elevado a n"><em>10<sup>n</sup></em></span>, no sistema binário é potência de <span role="text" aria-label="2 elevado a n"><em>2<sup>n</sup></em></span>.</p>

<h2 id="transformar-decimal-binario">Como transformar um número decimal em binário?</h2>
<hr>

<p>É importante saber como converter números do sistema decimal para o binário, porque os computadores usam o sistema binário para processar informações.</p>

<p>Para fazer essa conversão, usamos um método chamado <strong>divisão sucessiva por 2</strong>. Para entender melhor, vamos aos exemplos.</p>

<p>Vamos transformar o número 13 em um número binário.</p>

<p>Para fazer isso, vamos dividir o número por 2 repetidamente e anotar os restos (sobras da divisão que podem ser 0 ou 1). Esses restos vão nos dar o número binário.</p>

<p>Vamos ver como fazer isso passo a passo:</p>

<ol>
    <li>
        Primeiro, pense em potências de 2 — são os valores que cada "casinha" do binário pode ter.
         Elas sempre dobram. Anote essa sequência:
        <ul>
            <li>
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <msup><mn>2</mn><mn>0</mn></msup>
                </math> = 1
            </li>
            <li>
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <msup><mn>2</mn><mn>1</mn></msup>
                </math> = 2
            </li>
            <li>
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <msup><mn>2</mn><mn>2</mn></msup>
                </math> = 4
            </li>
            <li>
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <msup><mn>2</mn><mn>3</mn></msup>
                </math> = 8
            </li>
            <li>
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <msup><mn>2</mn><mn>4</mn></msup>
                </math> = 16
            </li>
        </ul>
        <p>
            E assim por diante...
        </p>
    </li>
    <li>
        <p>
            Agora veja: qual é o maior número dessa lista que ainda é menor ou igual a 13?  Neste caso, é o 8 (porque o 16 já é maior que 13).
        </p>
    </li>
    <li>
        <p>
            Faça a conta de menos desse valor: <br /> <span aria-label="13 menos 8">13 &minus; 8</span> = 5.
        </p>
    </li>
    <li>
        <p>
            Isso quer dizer que vamos usar a casinha do 8, então escrevemos 1 do lado do 8 (1 significa que usamos esse valor).
        </p>
        <ul>
            <li>
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <msup><mn>2</mn><mn>3</mn></msup>
                </math> = 8 &rarr; <strong>1</strong>
            </li>
        </ul>
    </li>
    <li>
        <p>
            Agora vamos repetir o processo com o número 5: qual é o maior número da lista que ainda é menor ou igual a 5? É o número 4.
        </p>
    </li>
    <li>
        <p>
            Faça a conta de menos: <br /> <span aria-label="5 menos 4">5 &minus; 4</span> = 1.
        </p>
    </li>
    <li>
        <p>
            Isso quer dizer que vamos usar a casinha do 4, então escrevemos 1 do lado do 4. (1 significa que usamos esse valor)
        </p>
        <ul>
            <li>
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <msup><mn>2</mn><mn>2</mn></msup>
                </math> = 4 &rarr; <strong>1</strong>
            </li>
        </ul>
    </li>
    <li>
        <p>
            O próximo valor é 2. O número 2 é menor ou igual a 1? Não, então escrevemos 0 do lado do 2. (0 significa que não usamos esse valor)
        </p>
        <ul>
            <li>
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <msup><mn>2</mn><mn>1</mn></msup>
                </math> = 2 &rarr; <strong>0</strong>
            </li>
        </ul>
    </li>
    <li>
        <p>
            O próximo valor é 1. O número 1 é menor ou igual a 1? Sim, então fazemos a conta de menos: <br /> <span aria-label="1 menos 1">1 &minus; 1</span> = 0.
        </p>
    </li>
    <li>
       <p>
         Isso quer dizer que vamos usar a casinha do 1, então devemos escrever 1 do lado do 1. (1 significa que usamos esse valor)
       </p>
        <ul>
            <li>
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <msup><mn>2</mn><mn>0</mn></msup>
                </math> = 1 &rarr; <strong>1</strong>
            </li>
        </ul>
    </li>
    <li>
        <p>
            Agora que chegamos a 0, podemos parar. Vamos juntar tudo que escrevemos:
        </p>
        <ul>
            <li>
                <strong>1</strong> &rarr; que está do lado do 8
            </li>
            <li>
                <strong>1</strong> &rarr; que está do lado do 4
            </li>
            <li>
                <strong>0</strong> &rarr; que está do lado do 2
            </li>
            <li>
                <strong>1</strong> &rarr; que está do lado do 1
            </li>
        </ul>
        <p>
            Então, o número 13 em binário é <span class="badge bg-secondary fs-5" role="text">1</span> <span class="badge bg-secondary fs-5" role="text">1</span> <span class="badge bg-secondary fs-5" role="text">0</span> <span class="badge bg-secondary fs-5" role="text">1</span>.
        </p>
    </li>
</ol>

<h2 id="outro-exemplo-conversao-decimal-binario">Outro exemplo de conversão de decimal para binário</h2>
<hr>

<p>Vamos a outro exemplo, para entender melhor. Agora vamos transformar o número 25 em binário.</p>

<p>Vamos, de novo, por etapas:</p>

<ol>
    <li>
        Primeiro, pense nas potências de 2 — são os valores que cada "casinha" que o número binário pode ter.
        Elas sempre dobram. Anote essa sequência:
        <ul>
            <li><span aria-label="2 elevado a 0">2<sup>0</sup></span> = 1</li>
            <li><span aria-label="2 elevado a 1">2<sup>1</sup></span> = 2</li>
            <li><span aria-label="2 elevado a 2">2<sup>2</sup></span> = 4</li>
            <li><span aria-label="2 elevado a 3">2<sup>3</sup></span> = 8</li>
            <li><span aria-label="2 elevado a 4">2<sup>4</sup></span> = 16</li>
            <li><span aria-label="2 elevado a 5">2<sup>5</sup></span> = 32</li>
        </ul>
    </li>
    <li>
        Qual é o maior número da lista que ainda é menor ou igual a 25? É o 16.
    </li>
    <li>
        Faça a conta de menos: <br /> <span aria-label="25 menos 16">25 - 16</span> = 9.
    </li>
    <li>
        Vamos usar a casinha do 16, então escrevemos 1 do lado do 16.
        <ul>
            <li><span aria-label="2 elevado a 4">2<sup>4</sup></span> = 16 &rarr; <strong>1</strong></li>
        </ul>
    </li>
    <li>
        Agora vamos repetir o processo com o número 9: qual é o maior número da lista que ainda é menor ou igual a 9? É o número 8.
    </li>
    <li>
        Faça a conta de menos: <br /> <span aria-label="9 menos 8">9 - 8</span> = 1.
    </li>
    <li>
        Vamos usar a casinha do 8, então escrevemos 1 do lado do 8.
        <ul>
            <li><span aria-label="2 elevado a 3">2<sup>3</sup></span> = 8 &rarr; <strong>1</strong></li>
        </ul>
    </li>
    <li>
        O próximo valor é 4. O número 4 é menor ou igual a 1? Não, então escrevemos 0 do lado do 4 (0 significa que não usamos esse valor).
        <ul>
            <li><span aria-label="2 elevado a 2">2<sup>2</sup></span> = 4 &rarr; <strong>0</strong></li>
        </ul>
    </li>
    <li>
        O próximo valor é 2. O número 2 é menor ou igual a 1? Não, então escrevemos 0 do lado do 2 (0 significa que não usamos esse valor).
        <ul>
            <li><span aria-label="2 elevado a 1">2<sup>1</sup></span> = 2 &rarr; <strong>0</strong></li>
        </ul>
    </li>
    <li>
        O próximo valor é 1. O número 1 é menor ou igual a 1? Sim, então fazemos a conta de menos: <br /> <span aria-label="1 menos 1">1 - 1</span> = 0.
    </li>
    <li>
        Vamos usar a casinha do 1, então escrevemos 1 do lado do 1.
        <ul>
            <li><span aria-label="2 elevado a 0">2<sup>0</sup></span> = 1 &rarr; <strong>1</strong></li>
        </ul>
    </li>
    <li>
        Agora que chegamos a 0, podemos parar. Vamos juntar tudo que escrevemos:
        <ul>
            <li><strong>1</strong> &rarr; que está do lado do 16</li>
            <li><strong>1</strong> &rarr; que está do lado do 8</li>
            <li><strong>0</strong> &rarr; que está do lado do 4</li>
            <li><strong>0</strong> &rarr; que está do lado do 2</li>
            <li><strong>1</strong> &rarr; que está do lado do 1</li>
        </ul>
        <p>
            Então, o número 25 em binário é <span class="badge bg-secondary fs-5" role="text">1</span> <span class="badge bg-secondary fs-5" role="text">1</span> <span class="badge bg-secondary fs-5" role="text">0</span> <span class="badge bg-secondary fs-5" role="text">0</span> <span class="badge bg-secondary fs-5" role="text">1</span>.
        </p>
    </li>
</ol>

<h2 id="binario-para-decimal">E como fazer o caminho contrário, de binário para decimal?</h2>
<hr>

<p>Agora que sabemos como converter de decimal para binário, vamos aprender a fazer o caminho contrário: de binário para decimal.</p>

<p>Isso é importante também, porque muitas vezes precisaremos converter números binários de volta para decimal, especialmente ao lidar com computadores e programação.</p>

<p>Para converter um número binário de volta para decimal, é só fazer o processo inverso. Vamos pegar o número binário <span class="badge bg-secondary fs-5" role="text">1</span> <span class="badge bg-secondary fs-5" role="text">1</span> <span class="badge bg-secondary fs-5" role="text">0</span> <span class="badge bg-secondary fs-5" role="text">1</span> (que é 13 em decimal) e ver como isso funciona.</p>

<p>Vamos analisar cada casinha, de trás para frente:</p>

<ol>
    <li>
        A última casinha (a mais à direita) é 1, que vale <span aria-label="1 vezes 1">1 &times; 1</span> = 1.
    </li>
    <li>
        A próxima casinha é 0, que vale <span aria-label="0 vezes 2">0 &times; 2</span> = 0.
    </li>
    <li>
        A próxima casinha é 1, que vale <span aria-label="1 vezes 4">1 &times; 4</span> = 4.
    </li>
    <li>
        A última casinha (a mais à esquerda) é 1, que vale <span aria-label="1 vezes 8">1 &times; 8</span> = 8.
    </li>
</ol>
<p>Agora, somamos tudo:</p>
<p><span aria-label="1 mais 0 mais 4 mais 8">1 + 0 + 4 + 8</span> = 13</p>

<h3>Vamos fazer outro exemplo</h3>
<hr>

<p>Agora vamos fazer o mesmo para o número binário <span aria-label=" 1 0 1">101</span>:</p>
<ol>
    <li>
        A última casinha (a mais à direita) é 1, que vale <span aria-label="1 vezes 1">1 &times; 1</span> = 1.
    </li>
    <li>
        A próxima casinha é 0, que vale <span aria-label="0 vezes 2">0 &times; 2</span> = 0.
    </li>
    <li>
        A última casinha (a mais à esquerda) é 1, que vale <span aria-label="1 vezes 4">1 &times; 4</span> = 4.
    </li>
</ol>
<p>Agora, somamos tudo:</p>
<p><span aria-label="1 mais 0 mais 4">1 + 0 + 4</span> = 5</p>

<h2 id="por-que-importante">Por que isso é importante?</h2>
<hr>

<p>Entender o sistema binário é fundamental porque é a base de como os computadores funcionam. Tudo — absolutamente tudo — o que acontece dentro de um computador, de uma TV, de um celular, de um videogame — é feito usando bilhões de combinações de <span aria-label="zeros e uns">0s e 1s</span>, como se fossem pequenas lâmpadas piscando (ligando ou desligando) bilhões de vezes por segundo para processar informações.</p>

<p>Cada um desses <span aria-label="zeros e uns">0s e 1s</span> é chamado de bit. E é a menor unidade de informação em um computador. O bit está para o computador assim como os dígitos estão para o sistema decimal.</p>

<p>Assim como no sistema decimal, onde juntamos os dígitos para formar números maiores, por exemplo, 1 e 0 para formar o número 10, ou 1 + 0 + 0 para formar o número 100, no sistema binário juntamos os bits para formar números maiores.</p>

<p>Em binário, quando juntamos 8 <span aria-label="zeros e uns">0s e 1s</span> (que são 8 bits), formamos o que chamamos de byte, ou seja, 8 bits = 1 byte. Com os bytes medimos os tamanhos de arquivos, como imagens, músicas e vídeos.</p>

<p>Por exemplo, uma letra pode ser representada por um byte, e uma imagem pode precisar de milhares ou milhões de bytes para ser armazenada.</p>

<p>Então, quando você vê um número binário, pense que ele representa informações que estão sendo processadas pelo computador, como texto, imagens ou sons.</p>

<p>Pense que:</p>
<ul>
    <li>Um bit é como uma lâmpada que pode estar acesa (1) ou apagada (0).</li>
    <li>Um byte é como um grupo de 8 lâmpadas, onde cada lâmpada pode estar acesa ou apagada.</li>
    <li>Combinando muitos bits, podemos representar qualquer informação que o computador precisa processar.</li>
</ul>

<h3>Tabela de tamanhos de arquivos em bytes</h3>
<hr>

<p>Para entender melhor como os bits e bytes são usados, aqui está uma tabela com os tamanhos mais comuns de arquivos em bytes:</p>

<div class="table-responsive">
    <table class="table table-bordered table-dark" role="table" aria-label="Tabela de tamanhos de arquivos em bytes">
        <caption class="text-white">Tabela de tamanhos de arquivos em bytes</caption>
        <thead>
            <tr>
                <th scope="col">Tamanho</th>
                <th scope="col">Valor em Bytes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Bit</td>
                <td>1 bit</td>
            </tr>
            <tr>
                <td>Byte</td>
                <td>8 bits</td>
            </tr>
            <tr>
                <td>Kilobyte (KB)</td>
                <td>1.024 bytes</td>
            </tr>
            <tr>
                <td>Megabyte (MB)</td>
                <td>1.024 KB</td>
            </tr>
            <tr>
                <td>Gigabyte (GB)</td>
                <td>1.024 MB</td>
            </tr>
            <tr>
                <td>Terabyte (TB)</td>
                <td>1.024 GB</td>
            </tr>
        </tbody>
    </table>
</div>

<p>Esses tamanhos são importantes porque ajudam a entender quanto espaço um arquivo ocupa no computador. Por exemplo, uma foto pode ter alguns megabytes, enquanto um vídeo pode ter gigabytes.</p>

<p>Então é por isso que os números binários são tão importantes: eles são a linguagem que os computadores usam para entender e processar tudo o que fazemos com eles.</p>

<h2 id="resumo">Resumo</h2>
<hr>

<p>Para resumir, o sistema binário é a base da computação moderna, usando apenas dois símbolos: 0 e 1. Ele é fundamental porque os computadores usam esses símbolos para processar informações.</p>

<p>Aprendemos que:</p>
<ul>
    <li>O sistema decimal é o que usamos no dia a dia para contar, com números de 0 a 9. Já o sistema binário, usado pelos computadores, só tem dois números: 0 e 1.</li>
    <li>Para transformar um número decimal em binário, dividimos o número por 2 várias vezes e anotamos os restos.</li>
    <li>Para transformar um número binário em decimal, somamos os valores das posições onde tem 1, usando potências de 2.</li>
    <li>Um bit é como uma luz que pode estar acesa (1) ou apagada (0). Juntando 8 bits, temos um byte, que é usado para guardar informações.</li>
    <li>Os computadores juntam muitos bits e bytes para guardar coisas como textos, fotos e vídeos, e também para fazer cálculos e funcionar.</li>
</ul>
<p>Compreender o sistema binário é essencial para quem quer aprender mais sobre computação, programação e tecnologia em geral. É a base de tudo o que fazemos com os computadores hoje.</p>

<p>Claro que, no dia a dia, não precisamos fazer essas conversões manualmente, mas entender como elas funcionam nos ajuda a compreender melhor como os computadores processam e armazenam informações.</p>

<p>Isso sim, nos dá uma base sólida para avançarmos em tópicos mais complexos, como programação, algoritmos e estruturas de dados.</p>