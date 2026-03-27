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
series: "computacao-para-iniciantes"
---

{% include figure.html
    src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/8c6a7e49-752b-4800-71fd-e92568c6e100/public"
    decorative=true
%}

## <a id="apresentacao"></a> Apresentação
---

Redes de computadores existem para conectar dispositivos e permitir troca de dados. Na prática, é por causa delas que conseguimos acessar sites, enviar mensagens, fazer chamadas de vídeo, estudar online e usar serviços de banco e compras.

Hoje, redes conectam muito mais do que computadores: celulares, TVs, relógios, câmeras e vários outros equipamentos. Quando objetos do dia a dia se conectam entre si, chamamos isso de Internet das Coisas (IoT).

Neste artigo, vamos entender:

- quais são as partes básicas de uma rede;
- quais tipos de rede usamos no dia a dia;
- como funcionam topologias como estrela, anel e barramento;
- como funcionam os modelos OSI e TCP/IP;
- quais protocolos são mais usados na internet;
- qual a diferença entre internet e Web.

## <a id="partes-de-uma-rede-de-computadores"></a> Partes de uma Rede de Computadores
---

Uma rede funciona com pessoas, equipamentos, programas e regras de comunicação. A tabela abaixo resume os principais elementos.

<p class="small text-light mb-2" id="tabela-partes-rede-ajuda">Observação: em telas pequenas, deslize horizontalmente para ler todas as colunas da tabela.</p>
<div class="table-responsive">
    <table class="table table-bordered table-dark" aria-describedby="tabela-partes-rede-ajuda">
        <caption class="text-white">Elementos básicos de uma rede de computadores</caption>
        <thead>
            <tr>
                <th scope="col">Elemento</th>
                <th scope="col">Função principal</th>
                <th scope="col">Exemplo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Dispositivos</th>
                <td>Enviam e recebem dados</td>
                <td>Computador, celular, tablet</td>
            </tr>
            <tr>
                <th scope="row">Roteador</th>
                <td>Conecta redes e direciona pacotes</td>
                <td>Roteador Wi-Fi residencial</td>
            </tr>
            <tr>
                <th scope="row">Switch</th>
                <td>Interliga equipamentos na mesma rede local</td>
                <td>Switch de escritório</td>
            </tr>
            <tr>
                <th scope="row">Servidor</th>
                <td>Armazena e fornece serviços</td>
                <td>Servidor de site ou de arquivos</td>
            </tr>
            <tr>
                <th scope="row">Meio de transmissão</th>
                <td>Transporta o sinal</td>
                <td>Cabo de rede e Wi-Fi</td>
            </tr>
            <tr>
                <th scope="row">Protocolos</th>
                <td>Definem regras da comunicação</td>
                <td>TCP, IP, HTTP, DNS</td>
            </tr>
        </tbody>
    </table>
</div>

Quando um dado viaja pela rede, ele é dividido em pacotes. Esses pacotes saem de um dispositivo, passam por equipamentos de rede e chegam ao destino, onde são remontados.

Para organizar esse processo, usamos modelos em camadas. Os dois mais conhecidos são OSI e TCP/IP.

## <a id="tipos-de-rede"></a> Tipos de rede no dia a dia
---

Antes de falar de protocolos, vale conhecer os tipos de rede mais comuns. Isso ajuda a ligar a teoria com situações reais.

<p class="small text-light mb-2" id="tabela-tipos-rede-ajuda">Observação: em telas pequenas, deslize horizontalmente para ler todas as colunas da tabela.</p>
<div class="table-responsive">
    <table class="table table-bordered table-dark" aria-describedby="tabela-tipos-rede-ajuda">
        <caption class="text-white">Tipos de rede mais comuns</caption>
        <thead>
            <tr>
                <th scope="col">Tipo</th>
                <th scope="col">Alcance</th>
                <th scope="col">Exemplo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">PAN</th>
                <td>Pessoal, curta distância</td>
                <td>Celular conectado ao fone Bluetooth</td>
            </tr>
            <tr>
                <th scope="row">LAN</th>
                <td>Ambiente local (casa, escola, empresa)</td>
                <td>Rede Wi-Fi de casa ou do laboratório</td>
            </tr>
            <tr>
                <th scope="row">WAN</th>
                <td>Longa distância, conecta várias redes</td>
                <td>A própria internet</td>
            </tr>
        </tbody>
    </table>
</div>

## <a id="topologias-de-rede"></a> Topologias de rede
---

Topologia é a forma como os dispositivos são organizados e conectados em uma rede. Em redes modernas, a estrela é a mais comum, mas conhecer outros modelos ajuda a entender vantagens e limitações.

<p class="small text-light mb-2" id="tabela-topologias-ajuda">Observação: em telas pequenas, deslize horizontalmente para ler todas as colunas da tabela.</p>
<div class="table-responsive">
    <table class="table table-bordered table-dark" aria-describedby="tabela-topologias-ajuda">
        <caption class="text-white">Topologias de rede para iniciantes</caption>
        <thead>
            <tr>
                <th scope="col">Topologia</th>
                <th scope="col">Como funciona</th>
                <th scope="col">Vantagem</th>
                <th scope="col">Limitação</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Estrela</th>
                <td>Todos os dispositivos se conectam a um ponto central (switch/roteador)</td>
                <td>Fácil de gerenciar e expandir</td>
                <td>Se o ponto central falhar, a rede para</td>
            </tr>
            <tr>
                <th scope="row">Barramento</th>
                <td>Vários dispositivos compartilham o mesmo cabo principal</td>
                <td>Estrutura simples</td>
                <td>Mais colisões e perda de desempenho com muitos dispositivos</td>
            </tr>
            <tr>
                <th scope="row">Anel</th>
                <td>Os dispositivos formam um circuito fechado</td>
                <td>Fluxo de dados mais organizado</td>
                <td>Falha em um ponto pode afetar toda a rede</td>
            </tr>
            <tr>
                <th scope="row">Malha</th>
                <td>Cada dispositivo pode ter vários caminhos de conexão</td>
                <td>Alta redundância e tolerância a falhas</td>
                <td>Custo e configuração mais complexos</td>
            </tr>
        </tbody>
    </table>
</div>

## <a id="modelo-osi"></a> Modelo OSI
---

O modelo OSI foi criado para explicar a comunicação em rede de forma organizada. Ele tem sete camadas. Mesmo não sendo aplicado exatamente assim no dia a dia, é excelente para estudo.

<p class="small text-light mb-2" id="tabela-osi-ajuda">Observação: em telas pequenas, deslize horizontalmente para ler todas as colunas da tabela.</p>
<div class="table-responsive">
    <table class="table table-bordered table-dark" aria-describedby="tabela-osi-ajuda">
        <caption class="text-white">Camadas do modelo OSI</caption>
        <thead>
            <tr>
                <th scope="col">Camada</th>
                <th scope="col">Função resumida</th>
                <th scope="col">Exemplo prático</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">7. Aplicação</th>
                <td>Interface entre usuário e serviços de rede</td>
                <td>Navegador e e-mail</td>
            </tr>
            <tr>
                <th scope="row">6. Apresentação</th>
                <td>Formata, codifica e cifra dados</td>
                <td>Compressão e criptografia</td>
            </tr>
            <tr>
                <th scope="row">5. Sessão</th>
                <td>Controla início, manutenção e fim da comunicação</td>
                <td>Sessão de chamada de vídeo</td>
            </tr>
            <tr>
                <th scope="row">4. Transporte</th>
                <td>Entrega dados com confiabilidade e ordem</td>
                <td>TCP</td>
            </tr>
            <tr>
                <th scope="row">3. Rede</th>
                <td>Define endereçamento e roteamento</td>
                <td>IP</td>
            </tr>
            <tr>
                <th scope="row">2. Enlace</th>
                <td>Comunicação entre dispositivos da mesma rede</td>
                <td>Ethernet</td>
            </tr>
            <tr>
                <th scope="row">1. Física</th>
                <td>Transmissão de sinais pelo meio físico</td>
                <td>Cabo, fibra, rádio</td>
            </tr>
        </tbody>
    </table>
</div>

Em resumo, o OSI funciona como mapa de aprendizado: ele separa funções para ficar mais fácil diagnosticar problemas e entender onde cada tecnologia atua.

## <a id="modelo-tcp-ip"></a> Modelo TCP/IP
---

O TCP/IP é o modelo usado na prática pela internet. Ele é mais simples, com quatro camadas.

<p class="small text-light mb-2" id="tabela-tcpip-ajuda">Observação: em telas pequenas, deslize horizontalmente para ler todas as colunas da tabela.</p>
<div class="table-responsive">
    <table class="table table-bordered table-dark" aria-describedby="tabela-tcpip-ajuda">
        <caption class="text-white">Camadas do modelo TCP/IP</caption>
        <thead>
            <tr>
                <th scope="col">Camada</th>
                <th scope="col">Função resumida</th>
                <th scope="col">Exemplo de protocolo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Aplicação</th>
                <td>Serviços usados pelos aplicativos</td>
                <td>HTTP, DNS, SMTP, FTP</td>
            </tr>
            <tr>
                <th scope="row">Transporte</th>
                <td>Entrega entre origem e destino</td>
                <td>TCP, UDP</td>
            </tr>
            <tr>
                <th scope="row">Internet</th>
                <td>Endereçamento e roteamento</td>
                <td>IP</td>
            </tr>
            <tr>
                <th scope="row">Acesso à Rede</th>
                <td>Comunicação com o meio físico</td>
                <td>Ethernet, Wi-Fi</td>
            </tr>
        </tbody>
    </table>
</div>

<p class="small text-light mb-2" id="tabela-comparacao-camadas-ajuda">Observação: em telas pequenas, deslize horizontalmente para ler todas as colunas da tabela.</p>
<div class="table-responsive">
    <table class="table table-bordered table-dark" aria-describedby="tabela-comparacao-camadas-ajuda">
        <caption class="text-white">Comparação entre OSI e TCP/IP</caption>
        <thead>
            <tr>
                <th scope="col">Ponto</th>
                <th scope="col">OSI</th>
                <th scope="col">TCP/IP</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Quantidade de camadas</th>
                <td>7</td>
                <td>4</td>
            </tr>
            <tr>
                <th scope="row">Uso principal</th>
                <td>Estudo e referência</td>
                <td>Implementação real da internet</td>
            </tr>
            <tr>
                <th scope="row">Complexidade</th>
                <td>Mais detalhado</td>
                <td>Mais direto</td>
            </tr>
        </tbody>
    </table>
</div>

## <a id="protocolos-comunicacao-internet"> Protocolos de comunicação na internet
---

Protocolos são regras de comunicação. Sem eles, dispositivos não conseguem trocar dados de forma organizada.

<p class="small text-light mb-2" id="tabela-protocolos-ajuda">Observação: em telas pequenas, deslize horizontalmente para ler todas as colunas da tabela.</p>
<div class="table-responsive">
    <table class="table table-bordered table-dark" aria-describedby="tabela-protocolos-ajuda">
        <caption class="text-white">Protocolos mais usados na internet</caption>
        <thead>
            <tr>
                <th scope="col">Protocolo</th>
                <th scope="col">Camada (TCP/IP)</th>
                <th scope="col">Para que serve</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">HTTP</th>
                <td>Aplicação</td>
                <td>Carrega páginas e conteúdo web</td>
            </tr>
            <tr>
                <th scope="row">HTTPS</th>
                <td>Aplicação</td>
                <td>Versão segura do HTTP, com criptografia (TLS)</td>
            </tr>
            <tr>
                <th scope="row">FTP</th>
                <td>Aplicação</td>
                <td>Transferência de arquivos</td>
            </tr>
            <tr>
                <th scope="row">SMTP</th>
                <td>Aplicação</td>
                <td>Envio de e-mails</td>
            </tr>
            <tr>
                <th scope="row">DNS</th>
                <td>Aplicação</td>
                <td>Tradução de nomes em endereços IP</td>
            </tr>
            <tr>
                <th scope="row">IP</th>
                <td>Internet</td>
                <td>Endereçamento e roteamento</td>
            </tr>
            <tr>
                <th scope="row">TCP</th>
                <td>Transporte</td>
                <td>Entrega confiável, em ordem</td>
            </tr>
            <tr>
                <th scope="row">UDP</th>
                <td>Transporte</td>
                <td>Entrega rápida, sem confirmação</td>
            </tr>
        </tbody>
    </table>
</div>

Quando você abre um site, o processo acontece em etapas simples:

1. o DNS descobre o endereço IP do site;
2. TCP/IP leva os pacotes entre seu dispositivo e o servidor;
3. HTTPS protege a troca de dados, quando o site usa conexão segura;
4. o servidor responde e o navegador monta a página na tela.

Na prática, o navegador usa DNS para achar o endereço de um site, HTTP para pedir o conteúdo e TCP/IP para transportar os dados até seu dispositivo.

Cada protocolo tem um papel específico, e todos trabalham juntos para que a internet funcione com eficiência.

## <a id="a-world-wide-web-www"> A World Wide Web (WWW)
---

A Web (World Wide Web) surgiu no CERN, no fim dos anos 1980, com Tim Berners-Lee. A proposta era facilitar o compartilhamento de documentos entre pesquisadores.

Com o tempo, a Web virou a principal forma de acessar conteúdo na internet usando navegadores.

A Web usa principalmente HTTP e hipertexto. Hipertexto é um modelo de leitura com links: você não precisa seguir uma sequência única; pode navegar entre páginas relacionadas.

A tabela abaixo mostra a diferença entre os dois tipos de leitura:

<p class="small text-light mb-2" id="tabela-hipertexto-ajuda">Observação: em telas pequenas, deslize horizontalmente para ler todas as colunas da tabela.</p>
<div class="table-responsive">
    <table class="table table-bordered table-dark" aria-describedby="tabela-hipertexto-ajuda">
        <caption class="text-white">Diferenças entre texto linear e hipertexto</caption>
        <thead>
            <tr>
                <th scope="col">Aspecto</th>
                <th scope="col">Texto Linear</th>
                <th scope="col">Hipertexto</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Sequência de leitura</th>
                <td>Um caminho único predefinido (do início ao fim)</td>
                <td>Múltiplos caminhos por links</td>
            </tr>
            <tr>
                <th scope="row">Interatividade</th>
                <td>Passiva (apenas lê)</td>
                <td>Ativa (escolhe o caminho)</td>
            </tr>
            <tr>
                <th scope="row">Conexão entre conteúdos</th>
                <td>Referências externas ou notas</td>
                <td>Links diretos entre páginas</td>
            </tr>
            <tr>
                <th scope="row">Exemplo</th>
                <td>Um livro impresso</td>
                <td>Wikipedia ou sites com links</td>
            </tr>
        </tbody>
    </table>
</div>

Hoje, esse jeito de navegar é o que mais usamos na internet. Um exemplo claro é a Wikipédia: quando você lê um artigo e encontra uma palavra desconhecida, pode clicar nela e ser levado para outra explicação. Embora hoje isso seja comum, a ideia do hipertexto veio antes mesmo da internet existir.

Importante: internet e Web não são a mesma coisa. A internet é a infraestrutura de redes; a Web é um dos serviços que funciona sobre essa infraestrutura.

## Resumo
---

Redes de computadores conectam dispositivos para trocar dados e acessar serviços. No dia a dia, isso aparece em redes pessoais (PAN), redes locais (LAN) e redes de longa distância (WAN), como a internet.

Também vimos que a rede pode ser organizada de formas diferentes (topologias), como estrela, barramento, anel e malha. Cada uma tem vantagens e limitações em custo, manutenção e tolerância a falhas.

Para entender a comunicação, os modelos em camadas ajudam bastante:

- o OSI é mais detalhado e útil para estudo;
- o TCP/IP é o modelo usado na prática da internet.

Na navegação web, protocolos como DNS, IP, TCP, HTTP e HTTPS trabalham juntos para encontrar sites, transportar pacotes e exibir páginas com segurança.

Por fim, lembre-se: internet e Web não são sinônimos. A internet é a infraestrutura de redes; a Web é um serviço que funciona sobre ela.