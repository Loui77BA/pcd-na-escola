---
layout: post
title: "Leitores de Tela: Como Funcionam e Como Interpretam Interfaces Gráficas"
description: "Este artigo explica o leitor de telas, tecnologia que possibilita o acesso digital para pessoas com deficiência visual. Apresenta seu histórico, funções e reforça a importância da inclusão."
date: 2026-01-27 10:00:00 -0300
author: ["Louise Suelen"]
categories: ["Educação", "Acessibilidade Digital", "Leitores de Tela"]
tags: ["Leitores de Tela", "Acessibilidade Digital"]
permalink: /leitores-de-tela-como-funcionam-e-como-interpretam-interfaces-graficas/
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

        <!-- 2. Um pouco de história -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#um-pouco-de-historia-do-texto-a-interface-com-janelas">
                <span class="badge bg-secondary">2</span>
                Um pouco de história
            </a>
        </li>

        <!-- 3. Como o leitor de telas funciona por dentro -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#como-o-leitor-de-telas-funciona-por-dentro">
                <span class="badge bg-secondary">3</span>
                Como o leitor de telas funciona por dentro
            </a>
            <ul class="list-group list-group-flush ms-3">
                <!-- 3.1 O caminho da informação -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#o-caminho-da-informacao-do-codigo-a-acessibilidade">
                        <span class="badge bg-secondary">3.1</span>
                        O caminho da informação
                    </a>
                </li>

                <!-- 3.2 APIs de acessibilidade -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#apis-de-acessibilidade-a-ponte-entre-o-sistema-e-o-leitor-de-telas">
                        <span class="badge bg-secondary">3.2</span>
                        APIs de acessibilidade
                    </a>
                </li>

                <!-- 3.3 Saída por voz e por Braille -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#saida-por-voz-e-por-braille">
                        <span class="badge bg-secondary">3.3</span>
                        Saída por voz e por Braille
                    </a>
                </li>
            </ul>
        </li>

        <!-- 4. Leitores de tela por sistema operacional -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#quais-leitores-de-tela-existem-para-cada-sistema-operacional">
                <span class="badge bg-secondary">4</span>
                Leitores de tela por sistema operacional
            </a>
        </li>

        <!-- 5. Diferenças entre usar com visão e com leitor de telas -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#diferencas-entre-usar-a-tecnologia-com-visao-e-usar-com-leitor-de-telas">
                <span class="badge bg-secondary">5</span>
                Diferenças entre usar com visão e com leitor de telas
            </a>
        </li>

        <!-- 6. Uma camada adicional de complexidade -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#uma-camada-adicional-de-complexidade">
                <span class="badge bg-secondary">6</span>
                Uma camada adicional de complexidade
            </a>
            <ul class="list-group list-group-flush ms-3">
                <!-- 6.1 Qual o motivo de tanta complexidade? -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#qual-o-motivo-de-tanta-complexidade">
                        <span class="badge bg-secondary">6.1</span>
                        Qual o motivo de tanta complexidade?
                    </a>
                </li>
            </ul>
        </li>

        <!-- 7. Dicas para melhorar a experiência -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#algumas-dicas-para-melhorar-a-experiencia-de-uso-das-pessoas-com-deficiencia-visual">
                <span class="badge bg-secondary">7</span>
                Dicas para melhorar a experiência
            </a>
            <ul class="list-group list-group-flush ms-3">
                <!-- 7.1 Estrutura e semântica -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#pense-em-estrutura-e-semantica-ao-inves-de-aparencia">
                        <span class="badge bg-secondary">7.1</span>
                        Estrutura e semântica
                    </a>
                </li>

                <!-- 7.2 Descrições alternativas -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#use-descricoes-alternativas-para-imagens-e-graficos">
                        <span class="badge bg-secondary">7.2</span>
                        Descrições alternativas
                    </a>
                </li>

                <!-- 7.3 Não use cores como único significado -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#nao-use-cores-como-unica-forma-de-transmitir-informacao">
                        <span class="badge bg-secondary">7.3</span>
                        Não use cores como único significado
                    </a>
                </li>

                <!-- 7.4 Tabelas -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#tabelas-use-as-para-dados-tabulares-nao-para-layout">
                        <span class="badge bg-secondary">7.4</span>
                        Tabelas
                    </a>
                </li>

                <!-- 7.5 Links descritivos -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#use-links-descritivos-nao-cole-a-url-inteira">
                        <span class="badge bg-secondary">7.5</span>
                        Links descritivos
                    </a>
                </li>

                <!-- 7.6 Caixas de texto no PowerPoint -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#evite-inserir-caixas-de-texto-soltas-no-powerpoint">
                        <span class="badge bg-secondary">7.6</span>
                        Caixas de texto no PowerPoint
                    </a>
                </li>

                <!-- 7.7 Ordem de leitura -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#verifique-e-ajuste-a-ordem-de-tabulacao-ordem-de-leitura">
                        <span class="badge bg-secondary">7.7</span>
                        Ordem de leitura
                    </a>
                </li>

                <!-- 7.8 Excel -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#excel-planilhas">
                        <span class="badge bg-secondary">7.8</span>
                        Excel (planilhas)
                    </a>
                </li>

                <!-- 7.9 PDF -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#pdf">
                        <span class="badge bg-secondary">7.9</span>
                        PDF
                    </a>
                </li>

                <!-- 7.10 Documento digitalizado -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#documento-digitalizado-scanner">
                        <span class="badge bg-secondary">7.10</span>
                        Documento digitalizado (scanner)
                    </a>
                </li>

                <!-- 7.11 Checklist -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#checklist">
                        <span class="badge bg-secondary">7.11</span>
                        Checklist
                    </a>
                </li>
            </ul>
        </li>

        <!-- 8. Conclusão -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#conclusao">
                <span class="badge bg-secondary">8</span>
                Conclusão
            </a>
        </li>
    </ul>
---

Este artigo explica o leitor de telas, tecnologia que possibilita o acesso digital para pessoas com deficiência visual. Apresenta seu histórico, funções e reforça a importância da inclusão.

<div class="text-center">
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/8683514b-4aaa-4f9d-ea6f-81a32c2d7100/public" aria-hidden="true" class="img-fluid" />
</div>

## Apresentação {#apresentacao}
---

A evolução das interfaces do computador, que passaram dos terminais de texto para ambientes gráficos avançados, recursos 3D e dispositivos de computação ubíqua, trouxe desafios importantes para a inclusão de pessoas com deficiência visual. Nesse cenário, o leitor de telas se destaca como uma tecnologia assistiva essencial. Ele funciona como um intermediário entre o sistema operacional e a forma como a pessoa acessa o conteúdo, e por isso é uma ferramenta indispensável para a autonomia digital.

Este artigo apresenta a evolução histórica dos leitores de tela, explica conceitos fundamentais do seu funcionamento e descreve como essas ferramentas aparecem em diferentes plataformas. Também discute a diferença entre a usabilidade baseada na visão e a usabilidade baseada em recursos não visuais. Além disso, destaca que a acessibilidade digital não depende apenas do leitor de telas. Ela é resultado da combinação entre aplicações (programas), frameworks (conjuntos de bibliotecas que ajudam a construir software), sistemas operacionais e mecanismos de acessibilidade que permitem que essas partes se comuniquem.

Mais do que um programa que “fala o que está na tela”, o leitor de telas é uma forma de interação com o ambiente digital para pessoas que não usam a visão como principal meio de acesso à informação. Em vez de depender de ícones, cores e posições na tela, a navegação acontece principalmente por voz e, em muitos casos, também por linhas Braille, que permitem a leitura tátil do conteúdo digital.

Com isso, torna-se possível ler textos, identificar botões, preencher formulários, acompanhar mensagens e usar diferentes tipos de aplicações. Na prática, essa tecnologia abre caminho para que pessoas com deficiência visual possam acessar serviços e funcionalidades comuns do dia a dia com mais independência. Além dos leitores de tela tradicionais, ferramentas baseadas em inteligência artificial também têm ampliado possibilidades, principalmente em tarefas como descrição de imagens, leitura de conteúdos complexos e apoio à compreensão de contextos.

Ao contrário do que muitas pessoas imaginam, leitores de tela não leem tudo automaticamente do começo ao fim. O uso costuma ser guiado. A pessoa escolhe o que quer ouvir e para onde quer ir. É possível navegar por itens, campos de formulários, títulos, listas e menus, além de revisar um texto palavra por palavra. Com o tempo, forma-se um “mapa mental” do conteúdo, construído pela sequência de informações ou pelo Braille.

Tudo isso deixa claro que acessibilidade digital não é um detalhe nem um gesto de boa vontade. Quando sites, aplicativos e sistemas são desenvolvidos com cuidado, a experiência com leitor de telas tende a ser fluida. Botões têm nomes claros, campos explicam o que pedem, mensagens de erro dizem o que aconteceu e como resolver, e as etapas para concluir uma tarefa ficam mais fáceis de entender.

Por outro lado, quando a acessibilidade não é considerada, a autonomia diminui. Aparecem botões sem identificação, informações que dependem apenas de cor ou de imagem, conteúdos que mudam sem aviso e formulários difíceis de preencher usando apenas o teclado. Esses problemas são comuns e ajudam a explicar por que tantas pessoas com deficiência visual ainda enfrentam obstáculos em tarefas como comprar pela internet, acessar serviços públicos, estudar ou trabalhar.

Diante disso, o objetivo deste artigo é apresentar o que é um leitor de telas, explicar seu papel no cotidiano e destacar as diferenças mais importantes entre a navegação visual e a navegação não visual, especialmente na internet e em aplicativos modernos. Ao longo do texto, também serão apresentados exemplos de práticas que ajudam ou atrapalham a usabilidade, além de uma visão geral das ferramentas mais utilizadas e das suas principais funcionalidades.

## Um pouco de história: do texto à interface com janelas {#um-pouco-de-historia-do-texto-a-interface-com-janelas}
---

A história dos leitores de tela está ligada, desde o início, à busca por autonomia no estudo e no trabalho de pessoas cegas, especialmente em áreas como matemática e ciência de dados no final do século XX. Em 1984, na IBM, Jim Thatcher e Jesse Wright discutiram como a tecnologia estava ficando cada vez mais visual e como isso poderia aumentar a exclusão de pessoas cegas.

Um exemplo claro dessa mudança foi a transição dos cartões perfurados para terminais de vídeo, que alterou profundamente a forma de interação com os computadores.

O surgimento dessa tecnologia ganhou um marco importante em 1986, com o lançamento do IBM Screen Reader para MS-DOS. Era um software simples, mas muito relevante para a época. Ele captava o conteúdo textual exibido pelo computador e transformava esse texto em fala sintetizada, com controle feito pelo teclado. Como os computadores eram usados principalmente em modo texto, essa conversão era mais direta.

O que aparecia na tela era, em grande parte, uma representação textual estruturada, o que facilitava que o leitor de telas “acompanhasse” a informação apresentada.

Nos anos 1990, esse cenário começou a mudar rapidamente. Pesquisas e relatos da época passaram a descrever uma espécie de “crise de acessibilidade”, causada pela popularização das interfaces gráficas, como as do Windows e do Macintosh. Antes, no DOS e em outros sistemas baseados em texto, a informação era apresentada de forma linear e fácil de transformar em fala.

Com as interfaces gráficas, a interação passou a depender muito mais de janelas, botões, ícones e imagens, que nem sempre tinham uma descrição textual clara para ser interpretada por tecnologias assistivas.

Para lidar com esse novo contexto, leitores de tela precisaram evoluir. Programas como o JAWS, criado em 1989 pela Henter-Joyce, avançaram para reconhecer componentes da interface, como menus, janelas e elementos mais complexos. Aos poucos, esses leitores passaram a organizar e interpretar a interface de um jeito que pudesse ser entendido por áudio, ajudando pessoas cegas e pessoas com baixa visão a compreender a lógica do sistema e a navegar com mais segurança.

No fim dos anos 1990, a consolidação da web trouxe uma nova onda de desafios. A internet ampliou o acesso à informação, mas também aumentou a dependência de conteúdos visuais e de páginas com estruturas variadas. Em 1997, o W3C lançou a Iniciativa de Acessibilidade na Web (WAI), reforçando a ideia de que a força da web está em ser acessível para todas as pessoas.

Já nos anos 2000, leitores de tela de código aberto começaram a ganhar mais espaço. Um exemplo marcante é o NVDA, lançado em 2006, que ajudou a reduzir a barreira de custo que existia quando as principais opções eram ferramentas comerciais, muitas vezes com preços altos.

A seguir, serão apresentados eventos e marcos que influenciaram essa trajetória, mostrando como a acessibilidade para pessoas com deficiência visual evoluiu junto com as mudanças tecnológicas e com a forma como a sociedade passou a usar computadores e internet.

<div class="table-responsive">
<table class="table table-bordered table-striped table-hover table-dark text-white border-secondary" role="table" aria-label="Linha do tempo dos leitores de tela">
<thead>
    <tr>
        <th scope="col">Período ou Ano</th>
        <th scope="col">Marco Histórico</th>
        <th scope="col">Inovação Tecnológica</th>
        <th scope="col">Impacto na Acessibilidade</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>de 1984 a 1986</td>
        <td>Lançamento do IBM Screen Reader</td>
        <td>Interceptação de buffer de texto no ambiente MS-DOS e conversão para fala</td>
        <td>O início efetivo da participação de pessoas cegas na computação pessoal</td>
    </tr>
    <tr>
        <td>de 1989 a 1995</td>
        <td>Consolidação do leitor de telas JAWS</td>
        <td>Utilização de janelas e menus em ambientes gráficos (GUI)</td>
        <td>Fim do isolamento imposto pelo Windows 3.1/95, permitindo que pessoas cegas tivessem acesso a uma interface mais complexa</td>
    </tr>
    <tr>
        <td>1997</td>
        <td>Lançamento da Iniciativa de Acessibilidade na Web (WAI) pelo W3C</td>
        <td>Definição de diretrizes para tornar a web acessível</td>
        <td>Estabelecimento de padrões que orientam o desenvolvimento de conteúdo acessível para leitores de tela e outras tecnologias assistivas</td>
    </tr>
    <tr>
        <td>2006</td>
        <td>Lançamento do NVDA (NonVisual Desktop Access)</td>
        <td>Leitor de telas de código aberto e gratuito para Windows</td>
        <td>Democratização global do acesso sem custos de licença ao leitor de telas, ampliando a inclusão digital para pessoas com deficiência visual</td>
    </tr>
    <tr>
        <td>2009</td>
        <td>Lançamento do VoiceOver para Mac OS X e iOS</td>
        <td>Primeiro leitor de tela nativo em interface touchscreen</td>
        <td>Fim da dependência de teclados físicos para mobilidade. Acesso facilitado a smartphones e tablets para pessoas cegas</td>
    </tr>
    <tr>
        <td>de 2020 até hoje</td>
        <td>Era da IA Generativa</td>
        <td>Descrição de imagens via visão computacional e LLMs</td>
        <td>Resolução do problema crônico da falta de texto alternativo. Aumento da autonomia para acessar conteúdos visuais, como fotos, gráficos e memes, que antes eram inacessíveis para pessoas cegas</td>
    </tr>
    </tbody>
    </table>
</div>

Esses são apenas alguns dos marcos mais importantes na história dos leitores de tela, claro que existem muitos outros eventos, lançamentos e avanços que contribuíram para a evolução dessa tecnologia.

O que fica evidente é que, ao longo das últimas décadas, os leitores de tela passaram por uma transformação significativa, acompanhando as mudanças tecnológicas e as demandas de acessibilidade. Hoje, eles são ferramentas essenciais para a inclusão digital de pessoas com deficiência visual, permitindo que elas acessem uma ampla variedade de conteúdos e serviços online com mais autonomia e independência.

## Como o leitor de telas funciona por dentro {#como-o-leitor-de-telas-funciona-por-dentro}
---

Um leitor de telas moderno faz muito mais do que “ler o que está escrito”. Ele precisa entender o que cada parte da tela significa e em que situação ela está. Por exemplo, ele precisa diferenciar um botão de um link, saber se uma caixa está marcada, identificar qual campo está com foco e avisar quando algo muda na tela. Depois disso, ele transforma essas informações em uma sequência que a pessoa pode acompanhar por voz e, em muitos casos, por uma linha Braille.

### O caminho da informação: do código à acessibilidade {#o-caminho-da-informacao-do-codigo-a-acessibilidade}
---

Quando uma pessoa abre um site ou um aplicativo, o navegador ou o programa organiza o conteúdo internamente. No caso da web, o <abbr title="HyperText Markup Language em português: Linguagem de Marcação de Hipertexto">HTML</abbr> é transformado em uma estrutura chamada <abbr title="Document Object Model em português: Modelo de Objeto de Documento">DOM</abbr>, que é como um “mapa” do que existe na página.

<div class="text-center">
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/fe5baa0a-17fc-48cc-4772-dd3f5a111d00/public" class="img-fluid" alt="Diagrama mostrando a transformação do HTML em DOM" />
    <figcaption class="visually-hidden">
        A imagem é um infográfico em estilo de ilustração simples, com fundo bege claro e contornos em azul-escuro, organizado em três quadros numerados que explicam, passo a passo, o que acontece quando uma página web é aberta e como o HTML vira uma estrutura em forma de árvore.
        No primeiro quadro, no canto superior esquerdo, aparece o texto “1. A pessoa abre um site”. Abaixo, há o desenho de uma pessoa sentada de perfil diante de um notebook aberto, com as mãos próximas ao teclado. A tela do notebook mostra retângulos e linhas claras, sugerindo uma página carregada. A pessoa usa uma blusa amarela e está sentada em uma cadeira azul.
        No segundo quadro, no canto superior direito, está escrito “2. O navegador lê o HTML”. A ilustração mostra uma janela de navegador com barra superior e três círculos pequenos no canto (lembrando botões de janela).
        Dentro dessa janela aparece um trecho de código HTML em formato simplificado: &lt;html&gt; depois uma linha com &lt;h1&gt;Título&lt;/h1&gt; e outra linha com &lt;p&gt;Parágrafo&lt;/p&gt; e ao final &lt;/html&gt;, como se o navegador estivesse interpretando a marcação do documento.
        O terceiro quadro ocupa a parte inferior inteira e traz o título “3. O HTML é convertido em DOM”. À esquerda, há um ícone que lembra uma folha ou documento, com um cabeçalho em tom azulado e linhas horizontais indicando texto. Uma seta aponta desse documento para a direita, onde aparece um diagrama em forma de árvore (um organograma) representando o DOM: no topo está um oval com “html”, dele saem dois ramos para “head” e “body”. A partir de “body”, saem mais dois ramos para “h1” e “p”. Embaixo de “h1” há uma caixinha com a palavra “Titulo”, e embaixo de “p” outra caixinha com “Parágrafo”, reforçando que o conteúdo do HTML vira nós hierárquicos na estrutura do DOM.
    </figcaption>
</div>

O DOM, porém, não é o melhor formato para tecnologias assistivas, porque ele pode ter muita informação visual e detalhes de formatação que não ajudam na navegação com leitor de telas. Por isso, o navegador costuma criar uma estrutura paralela chamada árvore de acessibilidade. Essa árvore é uma versão mais “limpa” do conteúdo, que tenta manter o que realmente importa para a compreensão e a navegação.

<div class="text-center">
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/95c4dbca-018d-463e-a380-589e724c0100/public" class="img-fluid" alt="Diagrama mostrando que a DOM não é o melhor formato para tecnologias assistivas" />
    <figcaption class="visually-hidden">
    A imagem é um infográfico em estilo de ilustração simples, com fundo bege claro, traços em azul-escuro e elementos em tons de azul e amarelo. Ela está organizada em três quadros, explicando por que o DOM “puro” não é a melhor estrutura para navegação com leitor de telas e como o navegador cria uma árvore de acessibilidade para tornar essa navegação mais eficiente.
    No quadro superior, que ocupa toda a largura, aparece o texto “O DOM não é ideal para navegação com leitor de”. À esquerda desse quadro há um pequeno diagrama em forma de árvore com o nó “DOM” no topo, ramificando para “head” e “body”. Abaixo de “body” surgem dois nós representando o conteúdo: “Título” e “Parágrafo”, em caixas arredondadas. À direita, há o desenho de uma janela de navegador com uma área mostrando código HTML simplificado (com linhas como &lt;html&gt;, &lt;h1&gt;Título&lt;/h1&gt;, &lt;p&gt;Parágrafo&lt;/p&gt; e &lt;/html&gt;). Sobreposta à janela, existe uma representação de um bloco visual de página, com retângulos azuis sugerindo áreas de conteúdo. Entre o diagrama do DOM e a janela do navegador, há um balão com um ícone de alto-falante, indicando a saída de áudio típica de um leitor de telas ou de uma tecnologia assistiva.
    No quadro inferior esquerdo, o texto diz “O navegador cria uma árvore de acessibilidade”. Abaixo, aparece outro diagrama em árvore, agora mais simplificado, com o nó “raiz” no topo. Dele saem dois ramos para “Título” e “Parágrafo”. Abaixo do nó “Título” há uma pequena caixa com a palavra “Título” repetida, sugerindo o conteúdo exposto de forma mais direta e organizada. A ideia visual é mostrar que essa árvore de acessibilidade reduz o excesso de nós e prioriza elementos semânticos relevantes para navegação.
    No quadro inferior direito, está escrito “Essa árvore é usada para navegação mais eficiente”. A ilustração mostra o perfil de uma pessoa com fones de ouvido grandes, vestindo uma blusa amarela. À frente do rosto há três linhas curvas, como ondas sonoras, indicando que a pessoa está ouvindo informações — reforçando que, com a árvore de acessibilidade, a leitura e a navegação por voz ficam mais claras e eficientes do que depender do DOM completo e cheio de detalhes estruturais.
    </figcaption>
</div>

<div class="text-center">
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/b3027c85-4324-4b17-986f-d21bb27c4c00/public" class="img-fluid" alt="DOM versus árvore de acessibilidade: diferenças entre as estruturas" />
    <figcaption class="visually-hidden">
        A imagem é um infográfico em fundo escuro, com texto em tons claros (branco e azul) e um layout dividido verticalmente em duas colunas, comparando “DOM” com “Árvore de Acessibilidade”. No topo, em letras grandes, está o título “DOM vs Árvore de Acessibilidade”. Uma linha vertical fina separa as duas áreas, deixando claro que é uma comparação lado a lado.
        Na coluna da esquerda, aparece o cabeçalho “DOM” e, logo abaixo, a frase “Uma estrutura completa com formatação”. Abaixo do texto, há um diagrama em forma de árvore com vários nós arredondados conectados por linhas, representando a complexidade do DOM. No topo dessa árvore está “html”, que se ramifica em “head” e “body”. A partir de “body”, surgem vários elementos e ramos, incluindo nós como “Título”, “descrição”, “p”, “div”, “ul”, “bt”, “OK”, “button” e “UI”, como se fossem tags e componentes misturados. Ao lado de uma parte do diagrama há um pequeno ícone azul, sugerindo que ali existe um detalhe extra ou um ponto de atenção, reforçando visualmente a ideia de “muita coisa” para navegar.
        Ainda na coluna esquerda, na parte inferior, existem três linhas que parecem trechos de código HTML exibidos como caixas horizontais. A primeira mostra algo como uma tag de imagem com atributo alt, por exemplo “&lt;img src=... alt="foto"&gt;”. A segunda mostra um botão com estilo, algo como “&lt;button style&gt;Enviar&lt;/button&gt;”, destacada com uma tonalidade mais azulada, como se estivesse selecionada ou enfatizada. A terceira mostra um elemento de texto escondido, “&lt;span class="visually-hide" oculto&gt;&lt;/span&gt;” (com a ideia de conteúdo visualmente oculto). Esses exemplos reforçam que o DOM contém marcação completa, estilos e elementos que podem não ser essenciais para a navegação auditiva.
        Na coluna da direita, o cabeçalho diz “Árvore de Acessibilidade” e abaixo vem a frase “Uma versão simplificada para leitores de tela”. O diagrama de árvore nessa coluna é bem mais enxuto. No topo está “raiz”, e dele saem nós como “Título” e “Botão OK”. Ao lado do diagrama há um ícone de alto-falante, indicando saída de voz/leitura. Mais abaixo, há uma região com a frase “Conteúdo essencial para navegação”, acompanhada de um pequeno ícone de acessibilidade (uma pessoa estilizada em um círculo azul). A árvore continua com itens como “Imagem” e “Descrição”, como se o conteúdo fosse reduzido ao que importa semanticamente para quem navega via leitor de telas.
        Na parte inferior da coluna direita, há uma pequena lista visual de elementos destacados, com rótulos como “Imagem” e “Botão”, e um trecho que indica “Enviar” com a anotação “role-button”, sugerindo que a árvore de acessibilidade expõe funções e papéis (roles) de forma clara para tecnologias assistivas. No rodapé central da imagem, atravessando abaixo das duas colunas, aparece a frase “Como o navegador transforma conteúdo para tecnologias assistivas”, resumindo a mensagem principal: o navegador pega a complexidade do DOM e gera uma estrutura mais direta e navegável para leitor de telas.
    </figcaption>
</div>

Em geral, a árvore de acessibilidade dá prioridade ao que tem significado. Elementos que são só decoração ou que não têm função clara podem ser ignorados.

Isso acontece muito quando uma página usa várias marcações genéricas sem indicar o papel de cada parte. Ou seja, quando um site tem muitos elementos visuais, mas não usa as tags e atributos corretos para indicar o que é um título, um botão, um link ou uma imagem, o leitor de telas pode ter dificuldade para organizar a informação de forma clara.

Para que o leitor de telas consiga apresentar um elemento corretamente, cada item dessa árvore precisa ter informações básicas, como:

-  **Nome:** como o elemento deve ser chamado. Pode ser o texto de um botão, o rótulo de um campo ou a descrição de uma imagem.
  
- **Função:** que tipo de elemento é. Por exemplo: botão, link, caixa de seleção, cabeçalho.

- **Estado:** em que condição ele está naquele momento. Por exemplo: focado, marcado, expandido, desabilitado.

- **Valor:** informação variável quando faz sentido. Por exemplo: o texto digitado em um campo, o nível de volume, a porcentagem de uma barra de progresso.

### <abbr title="Application Programming Interface em Português: Interface de Programação de Aplicações">APIs</abbr> de acessibilidade: a ponte entre o sistema e o leitor de telas {#apis-de-acessibilidade-a-ponte-entre-o-sistema-e-o-leitor-de-telas}
---

O leitor de telas não fica “lendo o código” da página o tempo todo. Na maioria dos casos, ele conversa com o sistema operacional (Windows, macOS, Linux, Android, iOS) por meio de APIs de acessibilidade, que funcionam como uma ponte.

Na prática, os programas “avisam” coisas importantes, como qual botão está selecionado, qual campo está com foco, se uma opção está marcada, se um menu foi aberto ou se apareceu uma mensagem de erro. O leitor de telas consulta essas informações e transforma tudo em retorno para a pessoa, geralmente por voz e, em alguns casos, também por Braille.

Cada sistema operacional tem suas próprias tecnologias para essa comunicação. No Windows, por exemplo, essas soluções foram mudando e melhorando com o tempo. Ferramentas mais modernas, como o UI Automation, ajudaram a tornar a troca de informações mais estável e mais completa, especialmente em programas e navegadores atuais.

No macOS também existe uma infraestrutura própria de acessibilidade, integrada ao sistema. No Linux, há um conjunto de tecnologias com o mesmo objetivo. Elas não são iguais entre si. Cada sistema tem suas particularidades e sua forma de expor informações para leitores de tela.

Isso tem um efeito direto no dia a dia. Quando uma interface é construída de um jeito correto, o navegador e o sistema conseguem explicar com clareza o que cada elemento é. Por exemplo, um botão de verdade é entendido como botão, com nome, estado e comportamento esperados.

Já quando a interface é montada com elementos genéricos e “simulações”, fica mais difícil para o leitor de telas entender o que aquilo realmente é. O resultado costuma ser uma experiência frágil, com informações incompletas, confusas ou até silenciosas em momentos importantes.

### Saída por voz e por Braille {#saida-por-voz-e-por-braille}
---

Depois de entender a interface, o leitor de telas precisa transformar tudo em uma forma de retorno que a pessoa consiga acompanhar.

A forma mais comum é a síntese de voz, também chamada de TTS. Esses recursos evoluíram muito com o tempo. As vozes antigas eram mais robóticas e pouco naturais. Hoje, existem modelos bem mais fluentes, com melhor entonação e com opções de velocidade, tom e pronúncia.

Outra forma muito importante é a linha Braille, um dispositivo que permite ler o conteúdo pelo tato. Nela, pequenos pinos sobem e descem para formar os caracteres em Braille, e esses caracteres mudam conforme a pessoa navega.

Esse recurso é especialmente útil quando é necessário alta precisão, como na programação, na revisão de textos, na leitura de símbolos e especificamente importante para a população surdocega.

Algumas linhas Braille usam células de 8 pontos, o que ajuda a representar letras maiúsculas, números e símbolos com mais flexibilidade, além de apoiar melhor conteúdos técnicos.

## Quais leitores de tela existem para cada sistema operacional? {#quais-leitores-de-tela-existem-para-cada-sistema-operacional}
---

Existem vários leitores de tela para diferentes sistemas operacionais, cada um com suas próprias funções. Alguns são nativos do sistema e outros exigem download.

Abaixo está uma tabela com os principais leitores de tela por sistema:

<div class="table-responsive mb-4">
    <table class="table table-bordered table-dark" role="table" aria-labelledby="leitores-de-tela-por-sistema-operacional" aria-describedby="leitores-de-tela-por-sistema-operacional-desc">
        <caption id="leitores-de-tela-por-sistema-operacional" class="fw-bold text-white mb-2">Leitores de tela por sistema operacional</caption>
        <thead>
            <tr>
                <th scope="col">Sistema Operacional</th>
                <th scope="col">Leitor de Telas</th>
                <th scope="col">Descrição</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Windows</td>
                <td><a href="https://www.nvaccess.org/" target="_blank" rel="noopener noreferrer">NVDA (NonVisual Desktop Access)</a></td>
                <td>Gratuito e de código aberto, é um dos mais populares no mundo.</td>
            </tr>
            <tr>
                <td>Windows</td>
                <td> <a href="https://www.freedomscientific.com/products/software/jaws/" target="_blank" rel="noopener noreferrer">JAWS (Job Access With Speech)</a></td>
                <td>É um software comercial (pago) muito robusto e tradicional no mercado corporativo.</td>
            </tr>
            <tr>
                <td>Windows</td>
                <td><a href="https://support.microsoft.com/pt-br/windows/guia-completo-do-narrador-e4397a0d-ef4f-b386-d8ae-c172f109bdb1" target="_blank" rel="noopener noreferrer">Narrador</a></td>
                <td>É o leitor de telas que já vem integrado no próprio Windows, oferecido gratuitamente pela Microsoft.</td>
            </tr>
            <tr>
                <td>macOS</td>
                <td> <a href="https://support.apple.com/pt-br/guide/voiceover/welcome/mac" target="_blank" rel="noopener noreferrer">VoiceOver</a></td>
                <td>Integrado em todos os computadores da Apple (MacBooks, iMacs). É gratuito e conhecido por sua alta qualidade.</td>
            </tr>
            <tr>
                <td>iOS</td>
                <td> <a href="https://support.apple.com/pt-br/guide/iphone/iph3e2e415f/ios" target="_blank" rel="noopener noreferrer">VoiceOver</a></td>
                <td>Versão para dispositivos móveis da Apple (iPhone e iPad). Apesar do mesmo nome, sua interação é baseada em gestos de toque na tela.</td>
            </tr>
            <tr>
                <td>Android</td>
                <td><a href="https://support.google.com/accessibility/android/answer/6283677?hl=pt-BR" target="_blank" rel="noopener noreferrer">TalkBack</a></td>
                <td>É o leitor de telas padrão do sistema Android, do Google. Já vem instalado na maioria dos celulares e tablets.</td>
            </tr>
            <tr>
                <td>Linux</td>
                <td><a href="https://help.gnome.org/users/orca/stable//" target="_blank" rel="noopener noreferrer">Orca</a></td>
                <td>O principal leitor de telas para o ambiente gráfico GNOME, comum em muitas distribuições Linux. É gratuito e de código aberto.</td>
            </tr>
        </tbody>
    </table>
</div>

## Diferenças entre usar a tecnologia com visão e usar com leitor de telas {#diferencas-entre-usar-a-tecnologia-com-visao-e-usar-com-leitor-de-telas}
---

Para entender como uma pessoa com deficiência visual usa computador ou celular, é importante saber que a experiência costuma ser bem diferente da de uma pessoa que enxerga.

Em vez de depender do que está visível na tela, a navegação acontece principalmente por áudio e por uma organização lógica do conteúdo feita por sistemas operacionais, aplicativos e leitores de tela.

Uma forma simples de imaginar isso é pensar na tela como uma sala cheia de objetos.

Para quem enxerga, é como entrar nessa sala com as luzes acesas. Dá para ver tudo ao mesmo tempo: porta, janela, mesa, cadeira. A pessoa olha rapidamente para onde quer, percebe cores, tamanhos, posição dos itens e entende o conjunto da “paisagem” de uma vez. Se quiser interagir com algo, basta apontar e clicar com o mouse, ou tocar diretamente no ponto certo da tela.

Para quem usa leitor de telas, é como estar nessa sala no escuro com uma lanterna que ilumina apenas um objeto por vez. Para conhecer o ambiente, é preciso percorrer item por item, seguindo uma ordem.

O leitor de telas anuncia um elemento de cada vez, como se a pessoa estivesse “varrendo” a tela. Com base no que escuta, a pessoa vai montando um mapa mental de como a página ou o aplicativo está organizado.

Por isso, a estrutura do conteúdo faz muita diferença. Quando um site ou aplicativo está bem construído, o leitor de telas consegue dizer claramente o que cada coisa é, como “botão”, “título”, “campo de edição”, “lista com 5 itens”.

Isso orienta a navegação e dá segurança. Quando a estrutura é ruim, a experiência se parece com uma sala em que todos os objetos são caixas iguais e sem etiqueta. A pessoa até consegue explorar, mas fica mais demorado, confuso e com maior chance de erro.

A seguir está uma tabela com algumas das principais diferenças entre a experiência de navegação visual e a navegação com leitor de telas:

<div class="table-responsive mb-4">
    <table class="table table-bordered table-dark" role="table" aria-labelledby="comparativo-experiencias-uso" aria-describedby="comparativo-experiencias-uso-desc">
        <caption id="comparativo-experiencias-uso" class="fw-bold text-white mb-2">Comparativo entre as experiências de uso</caption>
        <thead>
            <tr>
                <th scope="col">Aspecto da Experiência</th>
                <th scope="col">Pessoas que Enxergam</th>
                <th scope="col">Pessoas que usam Leitores de Telas</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Acesso à Informação</strong></td>
                <td>Acessa a tela inteira de uma vez, pulando para qualquer parte que chame a atenção (acesso paralelo).</td>
                <td>Ouve um elemento por vez, em uma ordem linear, como se estivesse lendo um texto linha por linha (acesso sequencial).</td>
            </tr>
            <tr>
                <td><strong>Interação (Clicar)</strong></td>
                <td>Usa o mouse para apontar e clicar, ou toca diretamente no elemento desejado na tela.</td>
                <td>Navega com o teclado (usando teclas como <kbd>Tab</kbd>, <kbd>Seta</kbd>) até o elemento e pressiona <kbd>Enter</kbd>, ou usa gestos específicos de deslizar na tela do celular (ou trackpad se estiver usando um laptop).</td>
            </tr>
            <tr>
                <td><strong>Compreensão do Layout</strong></td>
                <td>Vê a disposição dos elementos (o que está no topo, no rodapé, na lateral) de forma instantânea.</td>
                <td>Constrói um mapa mental da página a partir da ordem em que os elementos são anunciados pelo leitor de telas. Se a estrutura for ruim, essa construção fica prejudicada.</td>
            </tr>
            <tr>
                <td><strong>Velocidade</strong></td>
                <td>Pode ser muito rápido para encontrar e interagir com um elemento visualmente destacado (um botão grande e vermelho, por exemplo).</td>
                <td>A velocidade depende da familiaridade com os atalhos do leitor de telas e da boa estrutura da página. Pode ser muito rápido para navegar se a página for bem construída ou muito lento se for mal estruturada. Além disso, é natural ter uma navegação mais lenta no início, enquanto se aprende a usar o leitor de telas.</td>
            </tr>
            <tr>
                <td><strong>Conteúdo Gráfico</strong></td>
                <td>Vê imagens, gráficos e vídeos diretamente.</td>
                <td>Depende de descrições alternativas (texto alternativo ou audiodescrição) para entender o que a imagem ou o vídeo contém. Sem isso, o conteúdo é inacessível.</td>
            </tr>
            <tr>
                <td><strong>Feedback</strong></td>
                <td>Recebe feedback visual: um botão muda de cor ao ser pressionado, uma animação aparece, etc.</td>
                <td>Recebe feedback auditivo (o leitor de telas diz "botão pressionado") ou tátil (uma vibração no celular ou em um display braille).</td>
            </tr>
        </tbody>
    </table>
</div>

Essas diferenças mostram que a experiência de uso para pessoas com deficiência visual é única e depende muito da qualidade da estrutura do conteúdo e da forma como as informações são organizadas.

Por isso, é fundamental que pessoas desenvolvedoras de software e designers tenham em mente essas particularidades para criar interfaces mais acessíveis e inclusivas.

## Uma camada adicional de complexidade {#uma-camada-adicional-de-complexidade}
---

Cada sistema operacional transmite informações de acessibilidade de forma específica, assim como cada leitor de telas interpreta e repassa esses dados as pessoas usuárias de maneira própria. Além de entender o sistema operacional, é necessário dominar o leitor de telas, pois usar diferentes leitores pode alterar significativamente a experiência.

Três pessoas cegas utilizando o Windows 11 com NVDA, Jaws ou Narrador terão vivências diferentes, pois cada leitor de telas possui suas próprias formas de interação e comandos, exceto pelas teclas padrão do sistema e os atalhos universais dos aplicativos. Além disso, as configurações personalizadas de cada leitor de telas também podem alterar a maneira como as informações são apresentadas.

Pequenas variações em comandos, navegação ou na interpretação de elementos gráficos podem afetar significativamente o acesso e a compreensão do conteúdo digital por pessoas com deficiência visual. Portanto, a realização de testes e a adaptação das aplicações para diferentes plataformas e ferramentas são essenciais para assegurar uma experiência digital inclusiva e eficiente.

Da mesma forma, no contexto dos dispositivos móveis, a utilização do Google Talkback em sistemas Android pode apresentar variações conforme a marca do smartphone utilizado pela pessoa.

Ao migrar de um sistema operacional para outro, como do Windows para o macOS ou do Android para o iOS, é necessário não só aprender as regras e características do novo sistema, mas também se adaptar a um novo leitor de telas.

Esse processo de adaptação também ocorre dentro de um mesmo sistema operacional: por exemplo, ao deixar de usar o NVDA no Windows para utilizar o Jaws, será preciso aprender desde o início como funciona esse novo leitor de telas. 

Além disso, cada programa possui suas próprias combinações de teclas de atalho, como ao trocar do Word para o Google Docs ou do Microsoft Edge para o Google Chrome, entre outros.

O uso de recursos digitais torna-se ainda mais desafiador: além de ser necessário aprender a lidar com o sistema operacional e os aplicativos desejados, é essencial compreender profundamente o leitor de telas. Caso haja troca de leitor, será preciso reaprender tudo novamente.

Esse domínio é fundamental, pois, sem ele, a pessoa pode não saber se uma dificuldade de acesso a determinado conteúdo ocorre devido à falta de acessibilidade ou simplesmente por não ter experiência suficiente com o leitor de telas para conseguir encontrar esse conteúdo.

### Qual o motivo de tanta complexidade? {#qual-o-motivo-de-tanta-complexidade}
---

A variação de experiência acontece porque acessibilidade digital funciona como uma espécie de “cadeia de tradução”. Primeiro, o aplicativo (um site, um programa, uma tela do celular) precisa “contar” para o sistema operacional o que existe ali: se algo é um botão, um campo de texto, um menu, um alerta, se está marcado ou desmarcado, se está desabilitado, qual é o nome daquele elemento e o que acontece quando a pessoa ativa.

Depois, o leitor de telas “ouve” essas informações e decide como transformar isso em fala, em braille e em formas de navegação. O ponto central é que não existe uma única tradução universal: cada sistema operacional tem seu próprio jeito de receber e organizar essas informações, e cada leitor de telas tem seu próprio jeito de interpretá-las e apresentá-las.

É como se cada sistema operacional falasse um idioma interno diferente, e cada leitor de telas fosse um intérprete com estilo próprio. Mesmo quando dois intérpretes recebem a mesma frase, um pode preferir explicar mais, outro pode ser mais direto; um pode repetir detalhes para garantir clareza, outro pode economizar palavras; um pode organizar a informação em uma ordem, outro em outra.

Isso não significa que um esteja “errado” e o outro “certo” o tempo todo, muitas vezes são escolhas diferentes, feitas para públicos diferentes e hábitos diferentes. No Windows, por exemplo, três pessoas usando NVDA, JAWS e Narrador podem estar consumindo a “mesma tela”, mas cada leitor de telas tem seu próprio conjunto de comandos, seus próprios modos de navegação e até sua própria forma de anunciar informações.

Um pode dizer “botão, menu, colapsado” com mais frequência; outro pode anunciar menos coisas para ficar mais rápido; um pode facilitar saltos específicos por tipo de elemento; outro pode destacar mais mensagens automáticas. Além disso, cada pessoa costuma personalizar o leitor: muda nível de pontuação falada, velocidade, eco de teclas, forma de anunciar links, avisos, e assim por diante. Só isso já muda bastante a vivência.

Também existe um fator que não aparece “de fora”, mas pesa muito: aplicativos e sites nem sempre descrevem a interface de um jeito claro e completo. Quando um elemento é construído de forma “improvisada” (por exemplo, algo que parece botão, mas não se comporta como botão), cada leitor de telas pode tentar “adivinhar” o que aquilo é para tentar comunicar para a pessoa usuária.

Só que cada leitor faz essas adaptações do seu próprio jeito. É aí que duas pessoas podem ter resultados diferentes: uma encontra, a outra não; uma ouve um aviso útil, a outra não ouve; uma consegue ativar um controle, a outra precisa de outro caminho.

Na Web, costuma existir mais “regras em comum”, porque há recomendações e boas práticas bem conhecidas para construir páginas de um jeito mais compreensível por várias tecnologias assistivas.

Mesmo assim, isso não vira uma experiência idêntica, porque ainda existe o navegador no meio (Chrome, Edge, Firefox, Safari) e o leitor de telas em cima disso. É muita gente “traduzindo” em sequência: a página, o navegador, o sistema operacional e o leitor. Se qualquer etapa fizer um trabalho diferente, o resultado muda.

Em dispositivos móveis, a variação pode ser ainda mais evidente. No Android, por exemplo, o TalkBack pode apresentar diferenças conforme a marca do aparelho, a versão do sistema e até mudanças feitas pela fabricante. Às vezes o caminho de configurações muda; às vezes certos gestos funcionam de outro jeito; às vezes recursos aparecem ou somem dependendo do modelo. Então duas pessoas dizendo “eu uso TalkBack” podem, na prática, estar usando experiências bem diferentes.

Além disso, cada programa tem seus próprios atalhos e sua própria organização interna. Trocar do Word para o Google Docs, ou do Edge para o Chrome, muda menus, comandos, comportamento de edição e até a forma como a interface “se movimenta”. Para uma pessoa com deficiência visual, isso pesa porque o uso eficiente depende de memória muscular (atalhos), previsibilidade e domínio de navegação. Qualquer mudança nessas peças exige adaptação.

Então, por que não existe uma padronização completa, do tipo “tudo funciona igual para todo mundo”? Porque, na prática, estamos falando de muitos mundos diferentes tentando conversar ao mesmo tempo. Sistemas operacionais foram criados por empresas diferentes, em épocas diferentes, com objetivos e tecnologias diferentes.

Leitores de telas também foram criados com filosofias diferentes: alguns priorizam rapidez, outros priorizam detalhamento; alguns são mais “guiados”, outros são mais “exploratórios”; alguns investem mais em personalização, outros buscam simplicidade. E, no mobile, ainda entra o fator de cada fabricante mexer no sistema.

Existe, sim, padronização, só que ela costuma padronizar mais o “mínimo necessário para funcionar” do que o “jeito exato de usar”. Em outras palavras: há esforços para que botões sejam botões, campos sejam campos, e as informações essenciais estejam presentes.

Mas ninguém consegue (e nem seria desejável) impor que todos os leitores de telas tenham os mesmos atalhos, falem com as mesmas palavras, na mesma ordem, com a mesma quantidade de detalhes. Isso tiraria liberdade de evolução, impediria que cada produto atendesse melhor certos perfis de uso e ignoraria que pessoas diferentes preferem estilos diferentes de leitura.

Por fim, esse é o motivo pelo qual sem dominar bem o leitor de telas, pode ficar difícil saber se um problema é falta de acessibilidade ou falta de familiaridade com o próprio leitor. Como a experiência depende tanto da ferramenta e das configurações, uma pessoa pode “não encontrar” algo que está lá, ou pode achar que algo é inacessível quando, na verdade, é acessível, mas exige um modo de navegação diferente.

Por isso testes em combinações diferentes (outro leitor, outro navegador, outro dispositivo) são tão valiosos: eles ajudam a separar “problema de construção da interface” de “diferença de uso da ferramenta”, e aumentam as chances de entregar uma experiência realmente boa para o maior número possível de pessoas.

## Algumas dicas para melhorar a experiência de uso das pessoas com deficiência visual {#algumas-dicas-para-melhorar-a-experiencia-de-uso-das-pessoas-com-deficiencia-visual}
---

A acessibilidade digital é um campo complexo, mas existem algumas práticas que podem ajudar a melhorar a experiência de uso para pessoas com deficiência visual. A seguir estão algumas dicas importantes para tornar seus materiais digitais mais acessíveis.

### Pense em estrutura e semântica ao invés de aparência {#pense-em-estrutura-e-semantica-ao-inves-de-aparencia}
---

Os leitores de tela utilizam a estrutura do conteúdo, independentemente do aspecto visual, para interpretar informações. Quando a estrutura é insuficiente ou inadequada, os dados tornam-se difíceis de identificar e a navegação pode ser inviabilizada ou significativamente comprometida.

**Use títulos de verdade:** Em documentos, como os produzidos via Word, Google Docs ou LibreOffice, utilize os títulos nativos do programa, como "Título 1", "Título 2", etc ao invés de apenas aumentar o tamanho da fonte e colocar em negrito.

No Word, a própria Microsoft recomenda usar estilos de título para facilitar navegação por estrutura.

**Use listas de verdade:** Para criar listas, utilize os recursos nativos de formatação de lista (marcada ou numerada) em vez de usar símbolos manuais (como asteriscos, hífens ou números digitados).

**Use um sumário automático:** Em documentos longos, utilize a funcionalidade de sumário automático, que cria links para os títulos e facilita a navegação.

**Quebra de página:** Em documentos, não use um monte de <kbd>Enter</kbd> para criar espaço entre seções. Por exemplo: Você acabou de escrever um capítulo e quer começar o próximo em uma nova página. Em vez de apertar <kbd>Enter</kbd> várias vezes, use a função de quebra de página do programa.

No Word você consegue fazer essa quebra de página com o atalho <kbd>Ctrl</kbd> + <kbd>Enter</kbd>.

No Google Docs, vá em "Inserir" → "Quebra" → "Quebra de página".

**Não use caixas de texto para conteúdo importante:** Evite usar caixas de texto (text boxes) para colocar informações essenciais, pois elas podem ser ignoradas por leitores de tela. Se precisar usar uma caixa de texto, certifique-se de que ela esteja corretamente rotulada e seja acessível.

No PowerPoint, por exemplo, existe o recurso de "placeholder" que é uma caixa de texto pré-formatada e acessível, ideal para títulos e conteúdo principal. Evite criar caixas de texto personalizadas que não sejam reconhecidas como parte do fluxo de leitura.

### Use descrições alternativas para imagens e gráficos {#use-descricoes-alternativas-para-imagens-e-graficos}
---

De acordo com as diretrizes de acessibilidade do <abbr title="World Wide Web Consortium em português: Consórcio World Wide Web">W3C</abbr> e das <abbr title="Web Content Accessibility Guidelines em português: Diretrizes de Acessibilidade para Conteúdo Web">WCAG</abbr>, todas as imagens e gráficos devem ter descrições alternativas que transmitam a mesma informação que a imagem visualmente apresenta.

A seguir está uma imagem de exemplo, para a qual serão mostradas duas formas de descrição alternativa: uma correta e outra incorreta.

<div class="text-center">
    <img src="https://media.istockphoto.com/id/1323184150/photo/her-disability-doesnt-stop-her-from-being-a-successful-businesswoman.jpg?s=612x612&w=0&k=20&c=qnr9GU2wt_XrikxPbYin89x6tAzSpcgfhUBXOTG4_FQ=" class="img-fluid" alt="Mulher de pele preta, cabelos curtos e cacheados, sorrindo, de óculos escuros e blazer rosa, segurando uma bengala branca em uma área externa com prédios ao fundo." />
</div>

**Descrição alternativa incorreta:** “foto123.png”, “imagem.png", "ilustracao-xgpowyqtpom976544.png" e variações do tipo “foto de mulher” ou “mulher com bengala”.

Essas descrições não transmitem informações relevantes sobre a imagem, como características visuais, contexto ou elementos importantes. Elas não ajudam a pessoa com deficiência visual a entender o conteúdo da imagem e podem ser consideradas inúteis para fins de acessibilidade.

**Descrição alternativa correta:** “Mulher de pele preta, cabelos curtos e cacheados, sorrindo, de óculos escuros e blazer rosa, segurando uma bengala branca em uma área externa com prédios ao fundo.”

Essa descrição alternativa é detalhada e informativa, fornecendo uma representação clara da imagem para pessoas com deficiência visual. Ela inclui informações sobre a aparência da mulher, suas expressões faciais, o que ela está vestindo e o ambiente ao seu redor, permitindo que a pessoa compreenda o conteúdo visual de forma mais completa.

Claro que, o texto alternativo tem limites de tamanho de acordo com as próprias diretrizes de acessibilidade, e é importante encontrar um equilíbrio entre ser detalhado e ser conciso. O ideal é incluir as informações mais relevantes para transmitir o significado da imagem, sem se tornar excessivamente longo ou difícil de entender.

Quando a imagem for muito complexa, como um gráfico ou uma ilustração com muitos elementos, não é indicado apenas o texto alternativo, mas também uma descrição mais detalhada com o conteúdo completo da imagem.

Se for uma página web, essa descrição pode ser colocada em uma &lt;figcaption&gt;, que é um elemento HTML usado para fornecer uma legenda ou descrição para uma figura que acompanha a imagem e que será reconhecida por leitores de tela como parte do conteúdo da imagem. Também é possível adicionar a descrição em um parágrafo de texto abaixo da imagem, desde que esteja claro que se trata de uma descrição da imagem e seja acessível para leitores de tela.

Em documentos de texto, slides e outros materiais, a descrição pode ser colocada em um parágrafo próximo à imagem, com uma indicação clara de que se trata de uma descrição detalhada da imagem. Isso é muito importante em contexto onde existem gráficos, mapas, organogramas e outros elementos visuais complexos.

**Observação:** Em hipótese alguma use o campo de texto alternativo, seja no Word, no Google Docs, PowerPoint ou em qualquer outro programa, para colocar a <abbr title="Uniform Resource Locator em português: Localizador Uniforme de Recursos">URL</abbr> (endereço da imagem) ou informações irrelevantes, pois o leitor de telas irá ler exatamente o que está escrito ali.

### Não use cores como única forma de transmitir informação {#nao-use-cores-como-unica-forma-de-transmitir-informacao}
---

As cores podem ser usadas para destacar informações, mas não devem ser a única forma de transmitir uma mensagem importante. Portanto, é fundamental usar outros elementos visuais, como texto, ícones ou padrões, para garantir que a informação seja acessível.

**Observação:** É muito comum em aulas, apresentações e afins frases como <strong>"os itens em vermelho são obrigatórios"</strong> ou <strong>"tudo que está em verde é o saldo positivo"</strong>. Essas formas de comunicação não são acessíveis, fatalmente pessoas impossibilitadas de perceber as cores não terão acesso a essas informações.

### Tabelas: use-as para dados tabulares, não para layout {#tabelas-use-as-para-dados-tabulares-nao-para-layout}
---

As tabelas devem ser usadas apenas para apresentar dados tabulares, ou seja, informações organizadas em linhas e colunas que fazem sentido como um conjunto. Elas não devem ser usadas para criar layouts ou organizar o conteúdo visualmente, pois isso pode confundir os leitores de tela e dificultar a navegação.

Se for necessário usar uma tabela para organizar dados, certifique-se de que ela esteja corretamente estruturada, com cabeçalhos de coluna e linha, e que seja acessível para leitores de tela. Evite usar tabelas para criar espaçamento ou para organizar elementos visuais, pois isso pode tornar a experiência de navegação confusa e frustrante para pessoas com deficiência visual.

### Use links descritivos (não cole a URL inteira) {#use-links-descritivos-nao-cole-a-url-inteira}
---

Ao invés de colocar a URL completa como texto do link, use uma descrição clara e informativa do destino do link.

Por exemplo, em vez de usar <code class="text-decoration-underline text-white">https://www.exemplo.com/artigo-sobre-acessibilidade</code>, use <code class="text-decoration-underline text-white">Leia nosso artigo sobre acessibilidade</code>.

Isso torna o link mais compreensível e fácil de navegar não somente para pessoas com deficiência visual, mas para todas as pessoas, pois fornece contexto sobre o que esperar ao clicar no link.

### Evite inserir caixas de texto “soltas” no PowerPoint {#evite-inserir-caixas-de-texto-soltas-no-powerpoint}
---

No PowerPoint, evite usar caixas de texto (text boxes) para inserir informações importantes, pois elas podem ser ignoradas por leitores de tela. Em vez disso, utilize os placeholders pré-formatados para títulos e conteúdo principal, que são reconhecidos como parte do fluxo de leitura. Se for necessário usar uma caixa de texto personalizada, certifique-se de que ela esteja corretamente rotulada e seja acessível para leitores de tela.

Além disso, não se esqueça de marcar conteúdo decorativo como tal, para que o leitor de telas possa ignorá-lo. Por exemplo, se você usar uma caixa de texto apenas para criar um efeito visual, como um destaque ou um fundo colorido, certifique-se de marcar essa caixa como decorativa para que ela não seja lida pelo leitor de telas.

### Verifique e ajuste a ordem de tabulação (ordem de leitura) {#verifique-e-ajuste-a-ordem-de-tabulacao-ordem-de-leitura}
---

A ordem de tabulação, ou ordem de leitura, é a sequência em que os elementos de uma página ou aplicativo são acessados quando a pessoa navega usando o teclado (geralmente com a tecla <kbd>Tab</kbd>). É fundamental garantir que essa ordem seja lógica e intuitiva para que as pessoas com deficiência visual possam navegar de forma eficiente.

Ajuste via painel/lista de seleção de elementos: Em muitos programas, como o Word, Google Docs, PowerPoint e outros, existe um painel ou lista de seleção de elementos que permite visualizar a estrutura do documento e ajustar a ordem de leitura. Certifique-se de que os elementos estejam organizados de forma lógica, seguindo a hierarquia e a sequência natural do conteúdo.

### Excel (planilhas) {#excel-planilhas}
---

Planilhas são muito usadas para organizar informações, acompanhar atividades e apresentar resultados. Para pessoas que usam leitores de tela, a clareza da estrutura (tabelas, cabeçalhos e nomes de abas) faz toda a diferença.

**Descreva imagens/gráficos com texto alternativo:** Especialmente gráficos que transmitem informação. Se um gráfico for a principal forma de apresentar um resultado, considere também explicar os dados no próprio texto da planilha (por exemplo, em uma célula próxima) ou em um documento de apoio.

**Estruture tabelas de forma simples:** Evite células mescladas, divididas, aninhamento e muitas células em branco. Células em branco em sequência podem “parecer fim da tabela” para quem escuta a leitura, fazendo a pessoa perder contexto.

**Defina cabeçalhos na tabela:** Cabeçalhos permitem ao leitor de telas associar corretamente coluna/linha com os dados. Sem isso, a leitura pode virar uma sequência de valores sem significado claro.

**Evite múltiplas tabelas na mesma planilha:** Quando possível, separe conteúdos diferentes em abas diferentes (ou até em arquivos diferentes) para reduzir confusão de contexto.

**Renomeie as abas e remova planilhas vazias:** Nomes claros ajudam na navegação com leitor de telas, porque a pessoa consegue entender rapidamente onde está e o que cada aba contém.

**Mantenha bom contraste:** Use combinações de fundo e texto que sejam legíveis.

**Não use cor como único significado:** Se algo está “em vermelho porque é crítico”, inclua também texto/indicador (por exemplo: “Crítico”, “Atrasado”, “Fora do prazo”, etc.).

### PDF {#pdf}
---

Um <abbr title="Portable Document Format">PDF</abbr> pode ser acessível, mas isso depende de ele ter estrutura (tags/marcações). Na prática, “parecer certo visualmente” não garante que a leitura por leitor de telas será boa.

**PDF acessível precisa de estrutura (tags/marcações):** O arquivo deve ter ordem lógica de leitura, texto real (não só imagem), descrições alternativas quando necessário, tabelas estruturadas e formulários acessíveis.

**Gere o PDF a partir de um documento Office já acessível:** Se o Word/Docs/LibreOffice estiverem bem estruturados (títulos, listas, tabelas), a exportação tende a preservar a semântica.

**Ao salvar como PDF, habilite marcas estruturais para acessibilidade:** Procure opções do tipo “tags para acessibilidade”, “marcas estruturais” ou “estrutura do documento”, para preservar hierarquia de títulos, ordem de leitura e outras informações importantes.

**Evite “imprimir para PDF” em ferramentas que perdem tags:** Alguns geradores por “impressora PDF” não preservam marcações e geram um PDF sem estrutura (ou seja, mais difícil de navegar com leitor de telas).

**Para PDFs complexos, pode ser necessário editor especializado:** Especialmente para ajustar ordem de leitura, títulos, tabelas e formulários.

### Documento digitalizado (scanner) {#documento-digitalizado-scanner}
---

Quando um documento é digitalizado, muitas vezes ele vira apenas uma imagem dentro de um PDF. Isso muda completamente a acessibilidade.

**PDF digitalizado é imagem — leitor de telas não lê:** Se o conteúdo virou uma “foto”, não há texto real para o leitor de telas interpretar.

**Use <abbr title="Optical Character Recognition em português: Reconhecimento Óptico de Caracteres">OCR</abbr> para converter imagem em texto:** Depois do OCR, revise o resultado. O OCR costuma errar mais quando há baixa resolução, fundo com ruído, fonte pequena, fonte cursiva/itálica/decorada, ou quando o documento está torto e com sombras.

**Depois que virar texto, aplique as mesmas regras de acessibilidade:** Estrutura de títulos, descrições alternativas quando necessário, tabelas corretas, links descritivos, contraste adequado e assim por diante.

### Checklist {#checklist}
---

Se você quiser priorizar o que mais costuma impactar a experiência, este checklist é um bom ponto de partida:

**Títulos com estilos semânticos (não “na mão”):** Use os recursos de Título 1, Título 2, etc., para permitir navegação por estrutura.

**Imagens sempre com descrição útil (e descrições longas no texto quando necessário):** Texto alternativo deve explicar o que importa na imagem, não o nome do arquivo.

**Nada essencial em caixa de texto / cabeçalho / rodapé:** Informações importantes precisam estar no fluxo principal de leitura.

**Tabelas sem mesclagem e com cabeçalhos definidos:** Evite células mescladas e garanta que cabeçalhos estejam configurados.

**Documento longo com sumário linkável:** Um sumário automático facilita muito a navegação.

**Ordem de leitura correta (especialmente em slides):** Garanta que a tabulação e a sequência de leitura façam sentido.

**PDF com tags/estrutura (não “impresso” como imagem):** Prefira exportar preservando marcações.

**Digitalizados sempre com OCR + revisão:** Sem OCR, vira imagem e deixa de ser lido.

**Nunca depender só de cor/efeito visual para transmitir informação:** Sempre inclua texto ou outro indicador além da cor.

## Conclusão {#conclusao}
---

Leitores de tela não “adivinham” o que está na tela. Eles dependem do que o sistema, o navegador e o próprio conteúdo conseguem expor com clareza: nome, função, estado, valor e, principalmente, uma estrutura lógica. Quando essa estrutura existe, a navegação fica rápida, previsível e eficiente. Quando não existe, a experiência vira tentativa e erro.

Por isso, acessibilidade digital não é um detalhe que se coloca no final. Ela começa na forma como você organiza títulos, listas, tabelas e links, e continua no cuidado com gráficos, imagens e com a ordem de leitura, especialmente em documentos e apresentações.

Se você quer um caminho prático: priorize semântica, evite “gambiarras visuais”, descreva o que é essencial e teste seus materiais com teclado e com leitor de telas. O objetivo não é “passar em uma checklist”, e sim garantir que a pessoa consiga entender o conteúdo e concluir tarefas com autonomia.

Quando a gente projeta pensando também em quem acessa por áudio e por Braille, o resultado costuma ser melhor para todo mundo: documentos mais organizados, informações mais claras e interfaces mais fáceis de usar.

