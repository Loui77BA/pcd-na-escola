---
layout: post
title: "Computação para Iniciantes: Introdução às Redes de Computadores"
description: "Agora que já entendemos o que são sistemas operacionais, vamos explorar o que são redes de computadores e como elas funcionam."
date: 2025-08-10 10:00:00 -0300
author: Louise Suelen
categories: [Computação para Iniciantes]
tags: [computação, tecnologia]
permalink: /computacao-para-iniciantes-introducao-as-redes-de-computadores/
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
        <!-- 2. Partes de uma Rede de Computadores -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#partes-de-uma-rede-de-computadores">
                <span class="badge bg-secondary">2</span>
                Partes de uma Rede de Computadores
            </a>
        </li>
        <!-- 3. Modelo OSI -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#modelo-osi">
                <span class="badge bg-secondary">3</span>
                Modelo OSI
            </a>
        </li>
        <!-- 4. Modelo TCP/IP -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#modelo-tcp-ip">
                <span class="badge bg-secondary">4</span>
                Modelo TCP/IP
            </a>
        </li>
        <!-- 5. Protocolos de comunicação na internet -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#protocolos-comunicacao-internet">
                <span class="badge bg-secondary">5</span>
                Protocolos de comunicação na internet
            </a>
        </li>
        <!-- 6. A World Wide Web (WWW) -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#a-world-wide-web-www">
                <span class="badge bg-secondary">6</span>
                A World Wide Web (WWW)
            </a>
        </li>
        <!-- 7. Resumo -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#resumo">
                <span class="badge bg-secondary">7</span>
                Resumo
            </a>
            <ul class="list-group bg-dark">
                <!-- 7.1. A Internet -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#a-internet">
                        <span class="badge bg-secondary">7.1</span>
                        A Internet
                    </a>
                </li>
            </ul>
        </li>
    </ul>
---

<p>Agora que já entendemos o que são sistemas operacionais, vamos explorar o que são redes de computadores e como elas funcionam.</p>

{% include figure.html
    src="https://images.prismic.io/voitto-blog/cf699ddd-8f3a-4d72-a53a-fb80973050f4_redes-de-computadores.jpg?auto=compress,format?w=3840&q=75"
    alt="Homem desenhado com linhas brancas e luzes em um fundo azul escuro. Ele está cercado por laptops e linhas pontilhadas que se conectam, representando uma rede de computadores."
%}

## <a id="apresentacao"></a> Apresentação
---

As redes de computadores foram feitas, principalmente, para permitir que dois ou mais computadores se comuniquem e compartilhem coisas como músicas, vídeos, documentos e até mesmo controlem outros equipamentos à distância. Hoje, essas redes melhoraram muito e possibilitam não só que pessoas e empresas troquem informações, mas também que aparelhos conversem entre si sem que ninguém precise ajudar. 

Com o passar dos anos, a tecnologia fez com que as redes de computadores ficassem cada vez mais modernas. Elas começaram a ligar não só computadores, mas também vários outros aparelhos que usamos no dia a dia, como celulares, televisões e até geladeiras. Atualmente, as redes estão presentes em quase tudo e são essenciais para coisas como bancos pela internet, chamadas de vídeo, compras online ou até sistemas de transporte. 

Objetos comuns, como lâmpadas e relógios, também podem se conectar à internet e "conversar" entre si – isso é chamado de Internet das Coisas (IoT). Para tudo funcionar bem e de forma segura, é preciso que as redes sejam fortes, rápidas e protegidas, garantindo que as informações trocadas fiquem seguras mesmo quando muita gente está conectada ao mesmo tempo.

## <a id="partes-de-uma-rede-de-computadores"></a> Partes de uma Rede de Computadores
---

As redes de computadores são feitas de diferentes partes importantes:

- **Pessoas**: quem usa os computadores, celulares e outros aparelhos conectados à rede.
- **Programas**: aplicativos e softwares que ajudam no envio e recebimento de mensagens e informações.
- **Roteadores**: aparelhos que conectam redes diferentes e ajudam a enviar dados de um lugar para outro.
- **Switches**: equipamentos que juntam vários aparelhos em uma mesma rede e distribuem as informações entre eles.
- **Servidores**: computadores que guardam arquivos, sites e dados, e permitem que outros aparelhos acessem essas informações.
- **Cabos**: fios usados para ligar os aparelhos e transmitir sinais de um para outro.
- **Ondas de rádio**: sinais sem fio, como o Wi-Fi, que fazem a conexão entre aparelhos sem precisar de cabos.
- **Regras de comunicação (protocolos)**: combinados que fazem os aparelhos entenderem uns aos outros e trocarem dados de forma segura e eficiente.

{% include figure.html
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQQ_lMbPWDKYTJmk-wc_j5OCAb5wd_moO04LD4kCWfC8RIk"
    alt="O diagrama ilustra uma rede de computadores, mostrando seus componentes principais: pessoas, programas, servidores, roteadores, switches, e dispositivos como laptops e desktops. Ele também representa os tipos de conexão (cabos e ondas de rádio) e as regras que governam a comunicação, tudo em um estilo de linhas azuis em fundo escuro."
    caption="Diagrama de uma rede de computadores"
%}

Para usar a internet ou se conectar a uma rede, aparelhos como celular, tablet ou computador precisam de uma placa de rede. Essa placa faz a ligação com o local onde está o sinal, seja por cabo ou por ondas de rádio. É ela que permite que seu aparelho envie e receba informações, mostrando tudo certinho nos aplicativos e programas que você usa.

Pense em como funciona uma transmissão de rádio ou TV: para receber bem o sinal, tanto quem envia quanto quem recebe precisa entender a mensagem.

Nas redes de computadores, os aparelhos de comunicação conseguem pegar os dados que vêm de outro lugar, tratar essas informações e enviar para quem precisa receber, mesmo que estejam em redes diferentes.

**Observação**: Nas redes, os dados transmitidos entre aparelhos e usados pelas pessoas geralmente são chamados de pacotes. Um pacote é um pedacinho de uma mensagem maior. Os dados enviados pela internet, por exemplo, são divididos em pacotes pequenos, que depois se juntam de novo no computador ou celular que recebe.

Como já foi falado, uma rede de computadores tem vários componentes, e cada um segue regras próprias para permitir que os aparelhos conversem entre si. Para facilitar o entendimento e organização das redes, existem modelos que explicam como tudo funciona, dividindo as redes em partes menores chamadas camadas.

Isso torna mais fácil entender e montar uma rede de computadores. Com uma estrutura por camadas, com regras e protocolos específicos em cada uma. Os modelos de camadas mais famosos no mundo das redes de computadores são o modelo OSI e o modelo TCP/IP.

## <a id="modelo-osi"></a> Modelo OSI
---

O modelo OSI (Open Systems Interconnection em português Interconexão de Sistemas Abertos), foi criado pela ISO (Organização Internacional de Padronização), para organizar e facilitar a comunicação entre computadores. Ele é dividido em sete partes, chamadas de camadas, e cada uma delas tem uma função específica. Apesar de não ser muito usado no dia a dia, o modelo OSI ajuda bastante a entender como funcionam as redes de computadores.

As sete camadas do modelo OSI são:

- **Física**: é a camada que cuida de enviar os dados pelos fios, cabos ou pelo ar, como se fosse o “corredor” que leva a informação de um lugar ao outro. Ela determina como as informações realmente viajam pelo caminho físico. 

- **Enlace de Dados**: garante que os dados cheguem direitinho entre dois aparelhos conectados na mesma rede, corrigindo erros que possam acontecer no caminho. É como se fosse um conferente, checando se tudo saiu e chegou certo.

- **Rede**: escolhe a rota que os dados precisam seguir para chegar ao destino, mesmo que passem por vários lugares diferentes. Imagine um GPS que acha o melhor caminho para cada mensagem.

- **Transporte**: cuida para que os dados cheguem completos e na ordem certa, dividindo em partes menores e mandando de novo se algo se perder. É como um entregador que confere se tudo chegou direitinho.

- **Sessão**: organiza o começo, o meio e o fim da conversa entre dois aparelhos, garantindo que ninguém fale por cima do outro e que tudo fique em ordem. Pensa numa ligação telefônica que só termina quando todos já falaram o que precisavam.

- **Apresentação**: traduz os dados para que os programas e pessoas possam entender, além de cuidar da segurança e do jeito que as informações vão aparecer. É como um tradutor que deixa tudo compreensível e protegido.

- **Aplicação**: é a camada que permite que a gente use a internet e outros programas de rede, fazendo a ponte entre o que usamos no computador e o que é enviado e recebido. É como o aplicativo que facilita nossa vida conectada.

O modelo OSI mostra como funciona uma rede de computadores: ele divide tudo em sete partes, cada uma com uma função. Isso ajuda a organizar o caminho que as informações fazem de um lugar para outro e garante que tudo chegue certo. Com esse padrão, diferentes computadores e programas conseguem se comunicar bem, mesmo se forem de marcas diferentes.

{% include figure.html
    src="https://1drv.ms/i/c/bf6f4302973a9faf/IQQ3_4AX1LSfTYPGx-CgPYZQARm8TYzNkEp0iBYwdPGdvc8?width=852&height=837"
    alt="Diagrama do modelo OSI, ilustrando as 7 camadas da comunicação em rede (Aplicação a Física) e o fluxo de dados entre dois computadores."
    caption="Modelo OSI"
%}

Quando alguém usa um programa, como um navegador ou um aplicativo de mensagens, tudo começa na chamada camada de aplicação, que é onde o computador se conecta à rede. Depois, existe a camada de apresentação, que ajeita as informações para que todos os computadores entendam, cuidando de coisas como transformar letras e números, proteger os dados ou diminuir o tamanho das mensagens.

Logo após, vem a camada de sessão, que abre, mantém e fecha a troca de dados entre os computadores, como se fosse uma chamada de vídeo ou um bate-papo, para garantir que tudo aconteça na ordem certa e sem confusão.

Depois que a comunicação começa, a próxima etapa é dividir as informações em partes menores para facilitar o envio. Essa parte também cuida de corrigir erros e garante que tudo chegue ao destino na ordem certa, reenviando o que for preciso. Em seguida, fica decidido o melhor caminho para os dados viajarem até chegar onde precisam, passando por outras redes se necessário.

Depois, vem a parte que garante que esses pedaços de informação vão de um aparelho para o outro, por exemplo, entre dois computadores ligados pelo mesmo cabo ou roteador. Nessa hora, cada aparelho recebe um endereço próprio (tipo uma “placa de identificação”) e ainda há mecanismos para corrigir possíveis erros que possam acontecer no caminho. Por último, tudo vira sinais que passam pelos fios, luzes ou ondas de rádio até chegar ao destino, seja pela internet, por cabos ou pelo wi-fi.

No destino, esse processo acontece ao contrário: os sinais chegam pelo cabo, rádio ou luz, e vão sendo traduzidos, checados, organizados e montados de novo até virarem informação que o programa consegue mostrar. Ou seja, o modelo OSI ajuda a entender, passo a passo, como as mensagens conseguem viajar por diferentes equipamentos e lugares, sem perder nada pelo caminho, até chegar certinho do outro lado.

Embora o modelo OSI não seja usado exatamente desse jeito na prática, ele ajuda muito quem quer aprender sobre redes de computadores. Na verdade, no nosso dia a dia, a maioria das redes funciona com o modelo TCP/IP, que é mais fácil de entender e de usar.

## <a id="modelo-tcp-ip"></a> Modelo TCP/IP
---

O modelo TCP/IP (do inglês Transmission Control Protocol/Internet Protocol e em português Protocolo de Controle de Transmissão/Protocolo da Internet) é o jeito mais comum de organizar como os computadores se comunicam em redes. Ele foi criado (pelo Departamento de Defesa dos Estados Unidos) para facilitar a troca de informações entre diferentes computadores, mesmo que sejam de marcas ou lugares diferentes.

Esse modelo tem quatro partes (camadas), e cada uma cuida de uma parte do processo de comunicação. Por ser mais simples e prático que outros modelos, ele é o preferido quando se fala em internet e redes de computadores.

As partes ou camadas do modelo TCP/IP são:

- **Acesso a rede (também chamada de enlace)**
- **Internet (também chamada de rede)**
- **Transporte**
- **Aplicação**

Entenda como funciona cada parte do modelo TCP/IP:

- **Acesso à Rede**: É a parte que conecta o computador aos cabos ou ao Wi-Fi, permitindo que ele se ligue à rede. Também garante que cada computador tenha um "número" próprio para se identificar e que todos consigam usar a rede sem baterem de frente (sem que tenha colisões).

- **Internet**: É responsável por levar as mensagens de um computador até outro, escolhendo o melhor caminho. Nessa parte, cada computador recebe um endereço (como se fosse um CEP).

- **Transporte**: Cuida para que a conversa entre os programas, mesmo que estejam em computadores diferentes, aconteça direitinho, sem perder partes pelo caminho.

- **Aplicação**: É a parte que faz a ponte entre a rede e os programas que usamos (como navegador, e-mail, etc.). Ela monta, organiza e transforma as mensagens para que todos entendam do jeito certo. É como se fosse o tradutor que deixa tudo compreensível (fácil de entender) e protegido.

Ou seja, esse modelo funciona da seguinte forma: quando você envia uma mensagem, ela passa por todas essas camadas, cada uma fazendo sua parte, até chegar ao destino. E quando a mensagem chega, o processo acontece ao contrário, com cada camada recebendo e processando a informação até que ela chegue ao programa que vai exibi-la.

{% include figure.html
   src="https://1drv.ms/i/c/bf6f4302973a9faf/IQS_R_1OeV7YRozC9ZhmCQdwASrqYKazd-nc8nlL-2vh750?width=1023&height=830"
   alt="Diagrama do modelo TCP/IP, mostrando as 4 camadas da comunicação em rede (Aplicação, Transporte, Internet, Acesso à Rede) entre dois computadores."
   caption="Modelo TCP/IP"
%}

O modelo TCP/IP é uma forma de organizar como os computadores conversam entre si. Ele é mais fácil de usar do que outros modelos, por isso está presente na maioria das redes.

É ele que faz a internet funcionar, dizendo como os dados devem ser enviados, como identificar os computadores e como montar as mensagens. Os protocolos do TCP/IP são realmente importantes para que tudo na internet funcione direito.

## <a id="protocolos-comunicacao-internet"> Protocolos de comunicação na internet
---

Protocolos são acordos que permitem a existência da comunicação, eles são como as regras de um jogo, sem eles a comunicação não acontece.

Imagine a seguinte situação:

André pergunta:

— Que horas são?

Carla responde:

— Agora são dez da manhã!

Existe um protocolo de comunicação padronizado entre André e Carla mesmo que não percebam, os dois sabem o que são horas, os dois sabem reconhecer a forma de montar uma pergunta em português do Brasil, os dois sabem como montar a resposta para a pergunta e os dois sabem seus lugares na conversa, André como quem pergunta e Carla como quem responde.

Da mesma forma, na internet, os computadores precisam de protocolos para se comunicar. Os protocolos de comunicação da internet são acordos que permitem a troca de informações entre computadores. Eles definem como os dados são transmitidos, como os computadores se identificam e como as mensagens são estruturadas.

A internet é uma rede de redes, como se fossem várias estradas conectadas entre si, permitindo que os dados viajem de um lugar para outro. Ela funciona com base em protocolos que garantem que as informações cheguem corretamente ao destino.

Esses protocolos são do modelo TCP/IP, que tem quatro camadas (partes) principais, e cada uma usa seus próprios protocolos, que são diferentes e definidos de acordo com suas funções (ou seja, o que cada camada faz). Esses protocolos levam em conta coisas como: 

- O tipo de serviço que vai ser entregue.
- O ambiente onde tudo vai funcionar, incluindo os serviços que o protocolo precisa usar.
- O conjunto de mensagens que podem ser trocadas pelo protocolo. Ou seja, são os tipos de recados que ele pode enviar e receber.
- O jeito como cada mensagem é formada, ou seja, como ela é escrita e organizada para que os computadores consigam entender.
- Os algoritmos usados (os métodos construídos em forma de software), para garantir que as mensagens sejam enviadas e recebidas corretamente e que o serviço funcione como esperado.

Pensando nisso, vamos agora falar sobre os principais protocolos usados na internet. Existem alguns que são muito importantes. São eles:

- **HTTP**: Hypertext Transfer Protocol, em português Protocolo de Transferência de Hipertexto.
- **FTP**: File Transfer Protocol, em português Protocolo de Transferência de Arquivos.
- **SMTP**: Simple Mail Transfer Protocol, em português Protocolo Simples de Transferência de Correio.
- **DNS**: Domain Name System, em português Sistema de Nomes de Domínio.
- **IP**: Internet Protocol, em português Protocolo da Internet.
- **TCP**: Transmission Control Protocol, em português Protocolo de Controle de Transmissão.
- **UDP**: User Datagram Protocol, em português Protocolo de Datagrama do Usuário.

Onde:

- **HTTP**: está na camada de aplicação.
- **FTP**: está na camada de aplicação.
- **SMTP**: está na camada de aplicação.
- **DNS**: está na camada de aplicação.
- **IP**: está na camada de rede.
- **TCP**: está na camada de transporte.
- **UDP**: está na camada de transporte.

As responsabilidades, para que serve cada protocolo, são as seguintes:

- **HTTP**: é usado para acessar sites e páginas na internet pelo navegador. Ajuda a carregar textos, imagens e vídeos que as pessoas consomem online.
- **FTP**: serve para enviar e receber arquivos entre o computador e servidores. Ele permite que os usuários transfiram arquivos de forma eficiente pela internet.
- **SMTP**: utilizado para enviar e-mails para outras pessoas. Ele cuida de garantir que as mensagens cheguem ao destino certo.
- **DNS**: transforma nomes de sites em números que o computador entende, como um tradutor de endereços. Funciona como um catálogo que ajuda a localizar os sites na internet, tipo o CEP, onde o nome de uma rua é traduzido em um número específico para que os serviços de entrega encontrem o endereço correto.
- **IP**: responsável por mostrar o endereço de cada computador e garantir que os dados cheguem ao lugar certo. É a identificação única de cada dispositivo na rede, como o número do CPF para uma pessoa.
- **TCP**: garante que tudo que está sendo enviado pela internet chegue sem erro e na ordem certa. Ele divide as mensagens em partes menores (chamadas de pacotes) e monta de novo quando chegam, como um quebra-cabeça que pode ser desmontado e montado novamente.
- **UDP**: também envia dados, mas de forma mais rápida, sem garantir a ordem ou se tudo chegou direitinho. Ele é usado em situações onde a velocidade é mais importante do que a precisão (estar correto), como em chamadas do Google Meet e livestreams (transmissões ao vivo).

<img src="https://academiaderedes.com/wp-content/uploads/2020/12/modelo.png" aria-hidden="true" />

Resumindo: cada protocolo tem uma função específica e atua em uma camada diferente do modelo TCP/IP, garantindo que a comunicação na internet seja eficiente e organizada. Eles se complementam, trabalhando juntos para permitir que diferentes tipos de dados sejam transmitidos de forma eficaz pela rede.

## <a id="a-world-wide-web-www"> A World Wide Web (WWW)
---

A história da World Wide Web (WWW), ou simplesmente Web, começa nos anos 1980, no CERN, que é um importante centro de pesquisas na Suíça. Um cientista chamado Tim Berners-Lee queria facilitar o jeito como os pesquisadores trocavam informações e documentos científicos. Por isso, em 1989, ele teve a ideia de criar uma forma melhor de organizar e compartilhar esses dados.

Com a ajuda de Robert Cailliau e aproveitando ideias de um projeto antigo chamado ENQUIRE, Berners-Lee começou a criar a Web. Em 1990, ele usou um computador chamado NeXTCube, da empresa de Steve Jobs, a NeXT, para fazer o primeiro programa que funcionava como um navegador, chamado WorldWideWeb. Esse programa permitia que as pessoas vissem e interagissem com documentos. Esse programa foi chamado de WorldWideWeb.

Ele também criou o primeiro servidor web, que era o computador que guardava e enviava esses documentos para outros computadores, permitindo que a informação fosse acessada por qualquer pessoa conectada à rede. Isso marcou o início da era da informação, onde o acesso a dados se tornaria cada vez mais fácil e rápido.

<div class="text-center">
<img src="https://img.freepik.com/vetores-premium/conceito-de-conexao-on-line-vetor-plano_199064-277.jpg" aria-hidden="true" />
</div>

A Web foi lançada oficialmente em 1991. Para ela funcionar, Berners-Lee criou o protocolo HTTP, que é uma linguagem que os computadores usam para conversar e trocar informações. O conceito de hipertexto, que já existia desde os anos 1960, ganhou uma nova função na internet. Mas, afinal, o que é hipertexto?

Hipertexto é um tipo de texto que não segue uma ordem certa — você pode clicar em palavras ou frases e ir direto para outras páginas ou assuntos relacionados. Ou seja, diferente do texto tradicional, que é linear (segue uma sequência fixa), o hipertexto permite uma navegação mais livre e dinâmica. Você decide o caminho da leitura, em vez de seguir só uma sequência. Isso permite que cada pessoa explore os conteúdos como quiser.

Pense no hipertexto como uma rede de informações conectadas. Em vez de ler tudo numa ordem só, você pode ir pulando entre os temas, clicando em links que levam para outras partes. Assim, quem está navegando pode aprender e descobrir coisas novas de acordo com o interesse do momento. 

<div class="text-center">
<img src="https://static.todamateria.com.br/upload/hi/pe/hipertextoetextonormalimagem.jpg" aria-hidden="true" />

<img src="https://i0.wp.com/www.ernaniterra.com.br/wp-content/uploads/2022/11/Hipertexto.png?fit=377%2C235&ssl=1" aria-hidden="true" />
</div>

Hoje, esse jeito de navegar é o que mais usamos na internet. Um exemplo claro é a Wikipédia: quando você lê um artigo e encontra uma palavra desconhecida, pode clicar nela e ser levado para outra explicação. Embora hoje isso seja comum, a ideia do hipertexto veio antes mesmo da internet existir.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Hyperlinks_scheme.svg/914px-Hyperlinks_scheme.svg.png" aria-hidden="true" />

O hipertexto é a base da internet como conhecemos. Ele foi pensado, lá nos anos 1960, como uma maneira de ligar informações e facilitar a compreensão, principalmente nas áreas científicas. Tim Berners-Lee trouxe esse conceito para a Web, criando também o padrão URI, que depois virou o famoso URL — o endereço que digitamos para acessar sites atualmente.

## Resumo
---

Redes de computadores são como conexões que ligam vários aparelhos para que possam trocar informações e usar serviços juntos. Hoje, essas redes conectam não só computadores, mas também celulares, televisões e até eletrodomésticos. Elas são parte importante de coisas que usamos no dia a dia, como bancos, chamadas de vídeo, compras online e até semáforos nas cidades. 

Uma rede tem várias partes: pessoas usando, programas, e equipamentos como roteadores, switches, servidores e cabos ou antenas de Wi-Fi. Cada aparelho que está na rede precisa de uma placa de rede para enviar e receber dados. Quando uma mensagem é enviada, ela é dividida em pedaços chamados pacotes, que são juntados novamente quando chegam ao destino.

Para tudo funcionar direito, as redes seguem regras conhecidas como protocolos, que garantem que todos os aparelhos consigam conversar sem problemas. 

Para ajudar a organizar tudo isso, existe a ideia de camadas, que são partes com funções diferentes dentro da rede. Usar camadas facilita entender e construir redes, e existem dois modelos que explicam como essas camadas funcionam: o modelo OSI e o modelo TCP/IP.

O modelo OSI tem sete camadas: Física, Enlace, Rede, Transporte, Sessão, Apresentação e Aplicação. Cada uma faz uma parte do trabalho, desde enviar sinais pelos fios ou pelo ar, até mostrar os dados de forma que os programas possam usar. Esse modelo mostra como as informações são quebradas em partes, enviadas, recebidas, montadas novamente e entregues para os programas, tudo de maneira organizada, sem depender da marca dos equipamentos. 

Na prática, a maioria das redes usa o modelo TCP/IP, que é mais simples e tem quatro camadas: Acesso à Rede, Internet, Transporte e Aplicação. Ele é o modelo que faz a internet funcionar hoje. Cada camada tem sua função, como enviar dados para outros lugares, garantir que as mensagens cheguem inteiras e ajudar a web e e-mail a funcionarem. O TCP/IP define como os dados são separados, enviados e recebidos de volta, tornando tudo possível na internet.

### <a id="a-internet"> A Internet
---

A internet por sua vez nada mais é do que várias redes conectadas entre si, fazendo com que tudo funcione junto. Ela só existe porque temos regras, chamadas de protocolos, que ajudam os computadores, celulares e outros aparelhos a se entenderem e trocarem informações. É graças a essas regras que a internet funciona em qualquer lugar do mundo, mesmo usando aparelhos diferentes.

<div class="text-center">
<img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/XO_classroom_network.jpg" aria-hidden="true" />

</div>

Um dos serviços mais famosos da internet é a Web (ou World Wide Web), criada para facilitar o acesso a documentos e informações. Para isso, usa o protocolo chamado HTTP, que permite que navegadores (como Chrome ou Firefox) busquem e exibam páginas que estão guardadas em servidores. Ou seja, a Web depende da internet para funcionar, mas não são a mesma coisa: a Web é só um dos muitos jeitos de usar a internet.

Quando navegamos na Web, usamos links para pular de uma página para outra. Cada página ou recurso tem um endereço, chamado URL, que diz ao navegador onde encontrar o que queremos. Clicar em um link significa pedir ao navegador para buscar esse endereço e mostrar o conteúdo.

Além da Web, a internet tem outros serviços feitos por diferentes protocolos: o FTP serve para baixar e enviar arquivos, o SMTP envia e-mails, e o DNS traduz nomes (como www.exemplo.com) para números que os aparelhos conseguem entender.

Tudo isso funciona junto para facilitar o nosso dia a dia: você procura um site (DNS/URL), pede para o navegador buscar a página (HTTP), recebe o conteúdo (TCP/IP) e vê tudo organizado na tela.

É para isso que existem as redes de computadores: para conectar tudo isso e permitir que a informação circule. Esse conhecimento é essencial para quem quer entender como a tecnologia funciona, trabalhar com programação e desenvolver novas soluções.
