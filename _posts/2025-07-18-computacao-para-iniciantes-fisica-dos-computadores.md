---
layout: post
title: "Computação para Iniciantes: Física dos Computadores"
description: "Entenda os princípios físicos que fundamentam o funcionamento dos computadores, desde a eletricidade até a lógica binária."
date: 2025-07-18 10:00:00 -0300
author: Louise Suelen
categories: [Computação para Iniciantes]
tags: [computação, tecnologia]
permalink: /computacao-para-iniciantes-fisica-dos-computadores/
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
        <!-- 2. Materiais condutores e isolantes -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#materiais-condutores-e-isolantes">
                <span class="badge bg-secondary">2</span>
                Materiais condutores e isolantes
            </a>
        </li>
        <!-- 3. Como os átomos se ligam -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#como-os-atoms-se-ligam-por-que-o-silicio-pode-ser-manipulado">
                <span class="badge bg-secondary">3</span>
                Como os átomos se ligam: por que o silício pode ser manipulado
            </a>
        </li>
        <!-- 4. Junção PN -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#juncao-pn">
                <span class="badge bg-secondary">4</span>
                Junção PN
            </a>
        </li>
        <!-- 5. Transistores -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#transistores-o-coracao-da-computacao-moderna">
                <span class="badge bg-secondary">5</span>
                Transistores: o coração da computação moderna
            </a>
        </li>
        <!-- 6. Resumo -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#resumo">
                <span class="badge bg-secondary">6</span>
                Resumo
            </a>
        </li>
    </ul>
---

<p>Este artigo aborda os fundamentos físicos dos computadores. Vamos explorar desde os materiais condutores e isolantes até a importância dos transistores.</p>

{% include figure.html 
    src="https://media.istockphoto.com/id/646291934/photo/black-power-transistors.jpg?s=612x612&w=0&k=20&c=jmkG5DH3NFNxGGX4JLy_2TXhY1vPJIVrubKlWIXdYXE="
    alt="imagem de transistores de potência em um circuito eletrônico sobre uma superfície escura, destaque para componente com três pinos metálicos."
%}

<h2 id="apresentacao">Apresentação</h2>
<hr>

<p>A primeira pergunta que deve ser feita é: como um sinal elétrico se movendo no silício se transforma em vídeos, jogos e outras informações que são consumidas no computador? Para começo de conversa o silício é sim fortemente associado ao computador, não é à toa que existe o vale do silício, que é o lugar onde as empresas mais importantes do mundo de tecnologia estão.</p>

<p>Para responder essa pergunta, é preciso voltar um pouco em conceitos de, Química, engenharia elétrica e Eletrônica.</p>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQSs4o3H-TOAS4iNItz62a-gAcYgpm0LYrWes_gswoFeJPw"
    alt="Ilustração comparando condutor, semicondutor e isolante com símbolos de eletricidade."
%}

<h2 id="materiais-condutores-e-isolantes">Materiais Condutores e Isolantes</h2>
<hr>

<p>Quando falamos em material condutor, estamos falando de algo que deixa a eletricidade passar com facilidade. Um exemplo disso são os metais, como o cobre. É por isso que os fios usados na rede elétrica geralmente são feitos de cobre ou de algum outro metal parecido — eles conseguem conduzir a energia elétrica muito bem.</p>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQQa-pC7EGrnTZ5qAQTluwjAAesEttrMgoUt09JXRsY9mpE"
    alt="Ilustração de uma estrada onde pequenos raios de energia correm livremente sobre superfícies com placas de cobre, alumínio e ferro, representando a passagem fácil da eletricidade em materiais condutores."
%}

<p>Já os materiais isolantes fazem o contrário: eles dificultam a passagem da eletricidade. Um bom exemplo é a borracha que envolve os fios elétricos. Essa camada de borracha serve para proteger as pessoas de choques elétricos. A borracha não bloqueia completamente a corrente elétrica, mas impede que ela passe com facilidade.</p>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQQ74G1oCrXlRrEKGM0MyR7JAeEEXJBsO7FUJNNxAibZlHU"
    alt="Ilustração de raios de energia sendo impedidos de passar por barreiras feitas de borracha e vidro, representando a função dos isolantes elétricos que protegem contra choques."
%}

<p>Entre esses dois tipos — condutores e isolantes — existe um terceiro grupo chamado de semicondutores. Esses materiais conduzem, ou não, a eletricidade dependendo da situação. Às vezes eles se comportam como condutores, e em outros momentos se comportam como isolantes.</p>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQQIAJsG1Ts-TI5ecOfkrMkhAfJgiOfK7MfW2TKBVc8XY8g"
    alt="Ilustração que compara semicondutores com condutores e isolantes, mostrando como eles podem conduzir ou bloquear a eletricidade dependendo da situação. São três colunas organizadas, a primeira é o condutor, que tem fundo verde, estrada livre e a energia está fluindo. A segunda são os isolantes, que tem fundo vermelho, um muro protetor na estrada e a energia está bloqueada. E a terceira coluna são os semicondutores, que tem fundo amarelo, um portão eletrônico e a energia passa as vezes se o portão estiver aberto."
%}

<p>Um exemplo bem conhecido de semicondutor é o silício. Ele pode ser ajustado ou manipulado para deixar a corrente elétrica passar ou para bloquear a passagem, conforme a necessidade. Isso é o que torna o silício tão importante na fabricação de chips, transistores e outros componentes eletrônicos.</p>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQS5IrqM4ay6R697FXjDJAhqAc8dxALJxeXNS5wNAuaAluw"
    alt="Ilustração de um portão eletrônico controlando a passagem de raios de energia sobre um chão de silício, simbolizando o funcionamento de um semicondutor."
%}

<h2 id="como-os-atoms-se-ligam-por-que-o-silicio-pode-ser-manipulado">Como os átomos se ligam: por que o silício pode ser manipulado?</h2>
<hr>

<p>Para entender isso, precisamos pensar no que são os átomos, que são as partes super pequenas que compõem tudo ao nosso redor.</p>

<p>Em Química, o átomo é o menor pedaço de qualquer coisa. Ele é formado por duas partes principais: o núcleo (que fica no centro) e a eletrosfera (que é como uma nuvem em volta do núcleo).</p>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQTjv5qBj1nWRpktVmlJa4K7AagRVp3C5szhJ896zgImVDk"
    alt="Ilustração que mostra a estrutura de um átomo, com destaque para o núcleo e a eletrosfera."
%}

<ul>
    <li>No núcleo estão os prótons, que têm carga positiva, e os nêutrons, que não têm carga nenhuma.</li>
    <li>Na eletrosfera ficam os elétrons, que têm carga negativa e giram ao redor do núcleo.</li>
    <li>Quase todo o peso do átomo está no núcleo.</li>
</ul>

<p><strong>E como os átomos se unem para formar as coisas?</strong></p>

<p>É aí que entra uma ideia chamada regra do octeto. Essa regra diz que um átomo fica mais estável quando tem 8 elétrons na sua camada mais externa, ou seja, a parte mais distante do núcleo. Como nem todo átomo tem esse número, eles procuram se juntar com outros átomos para completar essa quantidade.</p>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQSA5MASvtP_Rr3uXto1ZAhkAUR5e8VjRBm-zIuEuGpIyrw"
    alt="Ilustração da regra do octeto, mostrando como os átomos se unem para completar 8 elétrons na camada mais externa."
%}

<p>A regra do octeto é tipo uma "vaquinha" (contribuição coletiva) entre os átomos, onde cada um contribui com os elétrons que faltam para que todos fiquem estáveis. Assim, eles formam ligações químicas, que são como "parcerias" entre os átomos.</p>

<ul>
    <li>Alguns átomos têm poucos elétrons nessa camada de fora.</li>
    <li>Outros estão quase completando os 8 elétrons.</li>
</ul>

<p>Quando um átomo com poucos elétrons encontra outro que está quase com 8, eles podem formar uma ligação iônica. Nesse tipo de ligação, um átomo “dá” elétrons para o outro. Assim, os dois ficam mais estáveis. É como se um átomo emprestasse ou doasse um elétron para o outro, e isso cria uma ligação forte entre eles.</p>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQSKZmtKlWP5QY8ZGn-1i4n8AUiv4TmEJgfHmnrBnKx09hk?width=1024&height=1024"
    alt="Ilustração dividida em 4 painéis sobre conceitos científicos. no painel superior esquerdo há um professor mostrando um átomo. No painel superior direito há um diagrama detalhado de um átomo. No painel inferior esquerdo há evolução de 3 pontos para 6 pontos dentro de um círculo. No painel inferior direito há símbolos de mais, menos e divisão."
%}

<figcaption>
    <p><strong>Descrição detalhada:</strong> A imagem está dividida em quatro partes, duas em cima e duas embaixo, todas com fundo bege claro e bordas escuras. O desenho é simples, como um desenho animado.</p>

    <p>No quadro de cima à esquerda, vemos um homem de cabelo curto e escuro, vestindo uma camisa branca de manga comprida, sentado a uma mesa. Ele aparece de lado, olhando para a direita e um pouco para cima, sorrindo e levantando o dedo indicador, como se estivesse explicando algo para alguém. Atrás dele, um pouco à direita, há uma tela branca na parede. Nessa tela, dá para ver o desenho de um átomo: um círculo central laranja e marrom, com três bolinhas pretas girando ao redor.</p>

    <p>No quadro de cima à direita, o desenho do átomo que estava na tela aparece maior. Dá para ver um grupo de bolinhas laranjas e marrons no meio (o núcleo) e quatro bolinhas pretas girando ao redor, em trajetos que cruzam e formam um oito deitado.</p>

    <p>No quadro de baixo à esquerda, vemos dois círculos pretos. O da esquerda tem três bolinhas pretas dentro, espalhadas de forma meio bagunçada. Uma seta preta aponta para o círculo da direita, mostrando que está acontecendo uma mudança. No círculo da direita, agora tem oito bolinhas pretas, arrumadas de modo mais certinho ao redor do círculo.</p>

    <p>No quadro de baixo à direita, aparecem dois círculos grandes, cada um com um sinal dentro. O círculo da esquerda tem um sinal de mais (+) preto grande. O círculo da direita tem um sinal de divisão (um pontinho em cima, um traço no meio e outro pontinho embaixo), também preto e grande. Entre eles, tem um sinal de menos (-) preto grande, no centro.</p>
</figcaption>

<p>As ligações entre os átomos ajudam a criar os materiais que usamos todos os dias, como metais, borracha e também o silício, que serve para fabricar peças de eletrônicos como celular e computador. Entender como isso funciona é importante para saber como são feitos esses componentes eletrônicos.</p>

<p>Um exemplo fácil de ligação iônica é o sal de cozinha, que também é chamado de cloreto de sódio.</p>

<p>Nesse caso, o átomo de sódio (Na) tem um elétron a mais, e o átomo de cloro (Cl) tem 7, precisando só de mais 1 para ficar completo (seguindo a chamada regra do octeto, que diz que o ideal são 8 elétrons).</p>

<p>Então, o sódio "dá" seu elétron para o cloro. Assim:</p>

<ul>
    <li>o cloro fica com 8 elétrons e fica estável;</li>
    <li>o sódio também fica estável, pois sua camada anterior fica completa;</li>
    <li>os dois ficam juntos porque têm cargas opostas e, por causa dessa atração, se organizam em forma de pequenos cristais.</li>
</ul>

{% include figure.html 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/NaCl_ionic_bond.GIF/640px-NaCl_ionic_bond.GIF"
    alt="Diagrama de Lewis mostrando a formação de cloreto de sódio N a C l. Um elétron é transferido do átomo de Sódio, N a, para o átomo de Cloro, Cl, que já possui sete elétrons de valência."
%}

<figcaption>
    <p><strong>Descrição detalhada:</strong> A imagem mostra como o Sódio (Na) e o Cloro (Cl) se juntam para formar uma ligação iônica, tudo em um fundo branco.</p>

    <p>Do lado esquerdo, vemos o símbolo "Na" para Sódio, escrito em letras grandes e pretas. Ao lado do "Na", há um ponto preto, que representa o elétron que o Sódio tem para doar.</p>

    <p>No lado direito, está o "Cl", símbolo do Cloro, também em letras grandes e pretas. Ao redor do "Cl", vemos sete pontos pretos, mostrando os elétrons que ele já tem: dois em cima, dois embaixo, um à esquerda e dois à direita.</p>

    <p>Uma seta azul, em formato de curva, sai do ponto do Sódio e vai em direção ao Cloro, mostrando que o Sódio está passando seu elétron para o Cloro.</p>
</figcaption>

<p>É assim que se forma o sal de cozinha: pequenos cristais de cloreto de sódio (NaCl) que usamos para temperar os alimentos no dia a dia.</p>

<p><strong>Antes de falar do Silício... Outro tipo de ligação: ligação covalente</strong></p>

<p>Existe também a ligação covalente, que é diferente da ligação iônica. Nesse caso, os átomos não trocam elétrons, mas dividem esses elétrons entre si.</p>

<p>Um exemplo é o metano (CH4).</p>

{% include figure.html 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Methane_CH4.png/640px-Methane_CH4.png"
    alt="uma molécula de metano, C H 4. Uma esfera central preta, ligada a quatro esferas brancas menores, dispostas em uma formação tetraédrica."
    caption="A imagem é um modelo 3D de uma molécula de metano (CH4)."
%}

<figcaption>
    <p><strong>Descrição detalhada:</strong> No meio, fica uma bola maior e escura com a letra "C", que representa o carbono.</p>

    <p>Ao redor dessa bola, há quatro bolinhas menores e brancas, cada uma com a letra "H" de hidrogênio. Essas bolinhas estão ligadas à bola central por palitinhos brancos ou cinza claro. As bolinhas de hidrogênio ficam organizadas ao redor do carbono, formando uma espécie de pirâmide, mostrando que a molécula tem uma forma tridimensional.</p>
</figcaption>

<p>No caso do metano:</p>

<ul>
    <li>O carbono precisa de 4 elétrons para ficar estável;</li>
    <li>Por isso, se junta a 4 hidrogênios, cada um dividindo um elétron com o carbono;</li>
    <li>Dessa forma, todos os átomos dessa molécula conseguem ficar estáveis.</li>
</ul>

<p><strong>E o silício, como funciona?</strong></p>

<p>O silício se comporta mais ou menos como o carbono. Ele também tem 4 elétrons na parte mais de fora do átomo e pode dividir esses elétrons com outros átomos de silício.</p>

<p>Por causa disso, o silício faz ligações bem fortes, ficando grudado com outros átomos e formando cristais bem certinhos, parecidos com o sal de cozinha — só que são feitos só de silício.</p>

<p><strong>Por que isso é importante na tecnologia?</strong></p>

<p>Porque esses cristais de silício podem ser trabalhados nas indústrias para ficarem do jeito que a gente precisa — por exemplo, eles podem ou não deixar a eletricidade passar, como acontece nos semicondutores.</p>

<p>Nas fábricas, o silício passa por uma limpeza para ficar bem puro, sem sujeira nenhuma.</p>

<p>Depois disso, as empresas colocam pequenas quantidades de outros elementos no silício, para mudar um pouco como ele se comporta.</p>

<p>Esses outros elementos podem ser:</p>

<ul>
    <li>Um átomo que tem 5 elétrons na última camada, como o fósforo. Assim, sobra um elétron, deixando o cristal mais negativo. Esse tipo é chamado de tipo N. (de negativo)</li>
    <li>Ou um átomo com só 3 elétrons na última camada, como o boro. Nesse caso, falta um elétron, criando uma espécie de “espaço vazio”, que chamamos de lacuna. O cristal fica menos negativo e recebe o nome de tipo P. (de positivo)</li>
</ul>

<p>Esse processo de colocar essas pequenas quantidades de outros elementos se chama dopagem, e ele é fundamental para fazer as peças eletrônicas que a gente usa no dia a dia — como os transistores, chips e sensores.</p>

<h2 id="juncao-pn">Junção PN</h2>
<hr>

<p>Quando juntamos dois tipos diferentes de pedaços de silício — um chamado tipo N (cheio de elétrons) e outro chamado tipo P (cheio de espaços vazios, chamados de “lacunas”) — formamos o que se chama de junção PN.</p>

<p>Mas o que será que acontece quando encostamos esses dois lados?</p>

<ul>
    <li>O lado N tem um monte de elétrons sobrando, ou seja, é mais negativo.</li>
    <li>O lado P tem muitos “buracos” onde faltam elétrons, então é mais positivo.</li>
</ul>

<p>Quando eles ficam juntos:</p>

<ul>
    <li>Os elétrons do lado N começam a passar para o lado P para tentar preencher esses buracos.</li>
    <li>Só que, ao fazer isso, acontece uma coisa interessante:
        <ul>
            <li>A borda do tipo P, que recebeu elétrons, fica mais negativa que o resto do lado P.</li>
            <li>E a borda do tipo N, que perdeu elétrons, fica mais positiva que o resto do lado N.</li>
        </ul>
    </li>
</ul>

<p>Esse movimento cria uma região entre os dois lados onde se junta carga elétrica — é como se aparecesse uma barreira invisível ali no meio.</p>

<p>Essa barreira forma um campo elétrico (como se fosse um “muro” de energia) que impede que mais elétrons continuem passando de um lado para o outro. Assim, tudo fica equilibrado.</p>

<p>Depois que esse equilíbrio acontece:</p>

<ul>
    <li>O lado N ainda continua com mais elétrons, ou seja, continua sendo o lado negativo.</li>
    <li>E o lado P segue com mais buracos (lacunas), sendo o lado positivo.</li>
</ul>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQRNk8gqQV70QLAlbIvmVqD9AV_xSoa214uYkPUTuGGFWII"
    alt="Uma seção P+ vermelha, com cargas positivas (lacunas), está à direita. Uma faixa central cinza clara, rotulada Depleção e com um raio, separa as duas seções. Abaixo, há uma seta indicando o sentido da corrente e o símbolo de um diodo."
    caption="Diagrama esquemático de junção PN, com os cristais tipo N e tipo P separados por uma região de depleção."
%}

<figcaption>
    <p><strong>Descrição detalhada:</strong> Um desenho mostra a junção PN, com uma parte azul chamada “tipo N” cheia de bolinhas com sinal de menos (elétrons a mais) e uma parte vermelha chamada “tipo P” com bolinhas de mais (espaços vazios chamados lacunas). Entre essas partes, há uma faixa cinza chamada “região de depleção”, onde aparece um símbolo de raio, mostrando que ali existe um campo elétrico, que impede que mais elétrons passem de um lado para o outro.</p>

    <p>Embaixo do desenho principal, tem uma seta preta apontando para a direita, que mostra para onde vai a corrente elétrica. Abaixo da seta, aparece o desenho de um diodo: um triângulo preto apontando para a direita com uma barrinha na ponta.</p>
</figcaption>

<p>Esse é o jeito que muitos componentes eletrônicos funcionam, como os diodos. Eles só deixam a corrente passar em um sentido por causa dessa junção PN, que funciona como uma “porta que só abre para um lado”.</p>

<h2 id="transistores-o-coracao-da-computacao-moderna">Transistores: o coração da computação moderna</h2>
<hr>

<p>Depois de entender o que é uma junção PN, já dá para falar de um dos componentes mais importantes para toda a tecnologia de hoje: o transistor.</p>

<p>O transistor funciona como se fosse um botão de ligar e desligar, só que eletrônico. Ele controla se a energia elétrica vai passar ou não por ali.</p>

<p>A diferença é que, ao contrário de um botão de luz que a gente aperta, o transistor faz isso sozinho, só usando a eletricidade.</p>

<p>Ou seja, ele usa sinais elétricos para decidir se deixa a energia passar. É assim que os computadores conseguem fazer bilhões de operações por segundo, tudo só com sinais elétricos.</p>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQTIDes_lB3KSbZ10zrBWoqUAUlyBEBuDtviKxt6RLewkNc"
    alt="Ilustração de um transistor de potência com pinos identificados como Base e Coletor, e uma legenda que o descreve como um botão ligar e desligar que controla o fluxo de eletricidade."
%}

<h3><strong>Como é feito um transistor?</strong></h3>
<hr>

<p>O transistor tem três partes principais, que você pode imaginar como três "perninhas":</p>

<ul>
    <li>Fonte (source): é por onde a energia entra.</li>
    <li>Dreno (drain): é por onde a energia sai.</li>
    <li>Porta (gate): é a parte que manda se a energia pode passar ou não.</li>
</ul>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQQziaGIaZmwSq9x8wcrnQaCAbLMYHxDp3g8nwubvL_XtCc"
    alt="Uma representação simplificada de um transistor com três partes amarelas, a Fonte, a Porta e o Dreno conectadas por uma barra prateada."
    caption="Diagrama de um transistor com as partes Fonte, Porta e Dreno."
%}

<p>Atualmente, o tipo de transistor mais usado nos computadores se chama MOSFET (o nome em inglês quer dizer Transistor de Efeito de Campo com Metal, Óxido e Semicondutor).</p>

<p><strong>Do que é feito um MOSFET?</strong></p>

<p>Um MOSFET é feito de três materiais principais:</p>

<ul>
    <li>Metal: serve para fazer as pontas onde a energia entra e sai.</li>
    <li>Óxido de silício (um tipo de vidro): funciona como isolante, impedindo que algumas partes encostem uma na outra.</li>
    <li>Silício: é o material principal, usado para construir o corpo do transistor. Ele é capaz de deixar a energia passar ou bloquear, dependendo do sinal que chega na "porta".</li>
</ul>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQSq_PO1uly-RIhBu5LMuPT5ATZWi6IXnlZZLp5H-iiJTSI"
    alt="Uma ilustração detalhada de um MOSFET mostrando terminais de saída, uma camada de Óxido de Silício que é Isolante no topo e o corpo feito de Silício, com quatro pinos na parte inferior."
    caption="Estrutura de um MOSFET, com detalhes sobre os materiais usados e como eles se conectam."
%}

<h3><strong>Como tudo isso funciona?</strong></h3>
<hr>

<ul>
    <li>Se não tem sinal elétrico na porta, o caminho entre fonte e dreno fica fechado e a energia não passa.</li>
    <li>Se chega sinal na porta, o transistor "abre" e deixa a energia passar da fonte para o dreno.</li>
</ul>

<p>Pode imaginar como se fosse um portão automático: ele abre ou fecha sozinho, dependendo do comando que recebe.</p>

<p>Por causa disso, os transistores servem para representar os números 0 e 1, que são a base de toda informação nos computadores.</p>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQQhi8P9n4xBQ5-p1LcBoCSUAbxNGewf5eTqjVViX133cdI"
    alt="Diagrama esquemático de um transistor MOSFET."
    caption="Esquema estrutural de um transistor MOSFET de canal N, um componente eletrônico amplamente utilizado em circuitos para controlar a passagem de corrente elétrica."
%}

<figcaption>
    <p><strong>Descrição detalhada:</strong> O MOSFET funciona como um botão de ligar e desligar. Quando colocamos uma energia (tensão elétrica) na parte chamada de porta, ele deixa a eletricidade passar ou não entre as outras duas partes, chamadas fonte e dreno.</p>

    <p>Fonte e Dreno (n<sup>+</sup>): Nas pontas, temos a fonte e o dreno. Essas partes têm bastante material chamado N<sup>+</sup>, que tem muitos elétrons livres, ou seja, permite que a eletricidade passe com facilidade.</p>

    <p>Corpo (p): Entre a fonte e o dreno, existe o corpo do transistor, feito de um material tipo P, que tem mais “espaços vazios” para os elétrons. Normalmente, a eletricidade não consegue passar da fonte para o dreno por causa de uma barreira.</p>

    <p>Óxido e Porta: Em cima do corpo, há uma camada bem fina de óxido (algo parecido com vidro), que separa o corpo da porta, feita de material que conduz eletricidade. Essa camada impede que a porta toque direto no corpo.</p>

    <p>Funcionamento: Quando não tem energia na porta, nada acontece entre a fonte e o dreno, a corrente não passa. Mas se colocarmos uma energia positiva na porta, ela puxa os elétrons da fonte para debaixo da porta, criando um caminho para a eletricidade passar. Assim, a corrente flui da fonte para o dreno.</p>

    <p>No desenho, existe uma seta menor mostrando um ponto ‘x’ (que pode ser qualquer lugar ao longo desse caminho), e uma seta maior mostrando o comprimento ‘L’ do canal, que é importante no funcionamento do transistor.</p>
</figcaption>

<p>Podemos comparar o transistor a uma torneira de água: a porta seria o volante da torneira, e a água que passa pelo cano é a corrente elétrica. Se não giramos a torneira (não tem energia na porta), nada passa. Quando giramos (colocamos energia), a água (corrente) começa a passar.</p>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQTb4AEU-eLwS7yKsD_yY5MaAfHO1C7Keb4byen9eEPT7Sg"
    alt=" Uma ilustração conceitual de um MOSFET usando a analogia de uma torneira: a porta, um bloco amarelo com uma torneira dourada acima, controla o fluxo de água, que é a eletricidade, entre a fonte e o dreno, que são terminais de metal e que estão conectados a regiões n mais dentro de um corpo de material semicondutor."
    caption="Analogia (comparação) entre um MOSFET e uma torneira, onde a porta controla o fluxo de eletricidade entre a fonte e o dreno."
%}

<p>A ideia principal do desenho é mostrar como o MOSFET consegue controlar o fluxo da corrente elétrica nos circuitos. Ele é usado em muitos aparelhos, como celulares e computadores, porque ajuda a economizar energia e tornar os equipamentos mais eficientes.</p>

<h3><strong>Por que esses nomes: fonte, dreno e porta?</strong></h3>
<hr>

<ul>
    <li><strong>Porta:</strong> é como um interruptor de luz, controla se a corrente elétrica pode ou não passar. Se colocamos uma voltagem positiva nela, ela permite que os outros terminais conduzam energia. Se não colocamos nada, ela bloqueia o caminho da corrente.</li>
    <li><strong>Fonte:</strong> é o lugar por onde as cargas elétricas entram no transistor. Se as cargas são negativas, é da fonte que elas saem para ir até o outro lado.</li>
    <li><strong>Dreno:</strong> é o terminal por onde as cargas saem do transistor, como se fosse um ralo por onde a corrente vai embora.</li>
</ul>

<p>Esse é um tipo de MOSFET chamado <strong>NMOS</strong>, feito para trabalhar com cargas negativas. Mas também existe o oposto: pode-se construir com cargas positivas. Nesse caso, precisamos colocar uma voltagem negativa na porta para abrir caminho para as cargas positivas entre fonte e dreno.</p>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQTvTUuiitryRaev5gtx5VLsAbI9XSr_SBl4e1PEru6_ZnY"
    alt="Uma comparação lado a lado de dois MOSFETs um NMOS com Canal N e Substrato Tipo P e um PMOS com Canal P e Substrato Tipo N, mostrando suas estruturas internas e pinos de Porta, Fonte, Dreno e Substrato."
    caption="Comparação entre NMOS e PMOS, dois tipos de transistores MOSFET."
%}

<p>Mas afinal, qual é melhor? Qual é usado em celulares e computadores? Na verdade, as duas versões são usadas juntas. Isso se chama <strong>CMOS</strong>, e o "C" vem de "complementar", porque os dois tipos de MOSFET trabalham juntos dentro do computador.</p>

<p>Porquê? Por causa de uma coisa chamada capacitância, que é a capacidade de um material guardar carga elétrica. Como o computador trabalha muito rápido, é ruim se o transistor ficar "segurando" carga, já que ele precisa ligar e desligar bilhões de vezes por segundo.</p>

{% include figure.html 
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQSPsUk88AexQpnZFbbfHBR_ASWV8FLZaNiE64q4sAjeUyk"
    alt="Uma ilustração de um MOSFET CMOS, mostrando a combinação de um MOSFET NMOS e um MOSFET PMOS em um único MOSFET, com detalhes de suas conexões internas e regiões como Poço N, Poço P  e os substratos Tipo P e Tipo N."
    caption="Circuito integrado com transistores NMOS e PMOS trabalhando juntos."
%}
<p>O transistor N descarrega cargas positivas melhor, e o transistor P descarrega cargas negativas melhor. Por isso, quando juntamos os dois em um circuito, aproveitamos o que cada um tem de melhor. O transistor N serve para conduzir melhor sinais negativos, e o transistor P é usado para sinais positivos. Assim, conseguimos superar os problemas causados pela capacitância.</p>

<h3><strong>Vantagens do CMOS (que é a combinação de NMOS e PMOS)</strong></h3>

<ul>
    <li>Gasta pouca energia.</li>
    <li>É menos afetado por coisas externas, como ímãs.</li>
    <li>Esquenta pouco, o que permite colocar mais transistores juntos e  fazer chips menores.</li>
    <li>Permite criar mais funções (como memória, processadores, etc.) em um espaço menor.</li>
</ul>

<h2 id="resumo">Resumo</h2>
<hr>

<p>Depois de tudo que vimos até aqui, dá para entender melhor como o silício virou a base de quase toda a tecnologia que usamos hoje. A gente começou falando de coisas da Química, como os átomos e as ligações entre eles, e foi chegando até a parte da eletrônica, onde os semicondutores entram em cena (aparecem).</p>

<p>Aprendemos que o silício pode ser tratado de um jeito especial para deixar ou não a eletricidade passar, e é isso que permite criar as peças que fazem os aparelhos eletrônicos funcionarem. Isso é fundamental para o funcionamento de tudo.</p>

<p>Com esse controle da eletricidade, as empresas conseguem criar componentes como os transistores — que são como pequenos botões que ligam e desligam a energia muito rapidamente. Esses botões eletrônicos ficam dentro dos chips e são os responsáveis por tudo que o computador faz, desde abrir um vídeo até rodar um jogo ou salvar um arquivo.</p>

<p>Mesmo sendo tudo tão pequeno que não dá pra ver a olho nu (sem o uso de microscópios), é esse mundo invisível que faz a "mágica" da tecnologia acontecer. Saber como isso funciona ajuda a entender como os computadores e outros dispositivos eletrônicos conseguem fazer tantas coisas que facilitam a nossa vida.</p>
