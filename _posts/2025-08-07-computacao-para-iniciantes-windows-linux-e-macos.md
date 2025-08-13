---
layout: post
title: "Computação para Iniciantes: Windows, Linux e macOS"
description: "Agora que já entendemos o que são sistemas operacionais, vamos explorar três dos mais populares: Windows, Linux e macOS."
date: 2025-08-07 10:00:00 -0300
author: Louise Suelen
categories: [Computação para Iniciantes]
tags: [computação, tecnologia]
permalink: /computacao-para-iniciantes-windows-linux-macos/
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
        <!-- 2. Apple e Microsoft: quem faz os programas -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#apple-e-microsoft-quem-faz-os-programas">
                <span class="badge bg-secondary">2</span>
                Apple e Microsoft: quem faz os programas
            </a>
        </li>
        <!-- 3. Windows -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#windows">
                <span class="badge bg-secondary">3</span>
                Windows
            </a>
        </li>
        <!-- 4. Mac OS -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#mac-os">
                <span class="badge bg-secondary">4</span>
                Mac OS
            </a>
        </li>
        <!-- 5. Linux -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#linux">
                <span class="badge bg-secondary">5</span>
                Linux
            </a>
            <ul class="list-group bg-dark">
                <!-- Subitens de Linux -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#distribuicoes-populares">
                        <span class="badge bg-secondary">5.1</span>
                        Algumas distribuições populares
                    </a>
                    <ul class="list-group bg-dark">
                        <li class="list-group-item bg-dark text-white border-0">
                            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                               href="#ubuntu">
                                <span class="badge bg-secondary">5.1.1</span>
                                Ubuntu
                            </a>
                        </li>
                        <li class="list-group-item bg-dark text-white border-0">
                            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                               href="#linux-mint">
                                <span class="badge bg-secondary">5.1.2</span>
                                Linux Mint
                            </a>
                        </li>
                        <li class="list-group-item bg-dark text-white border-0">
                            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                               href="#debian">
                                <span class="badge bg-secondary">5.1.3</span>
                                Debian
                            </a>
                        </li>
                        <li class="list-group-item bg-dark text-white border-0">
                            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                               href="#fedora">
                                <span class="badge bg-secondary">5.1.4</span>
                                Fedora
                            </a>
                        </li>
                        <li class="list-group-item bg-dark text-white border-0">
                            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                               href="#arch-linux">
                                <span class="badge bg-secondary">5.1.5</span>
                                Arch Linux
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#comparacao-sistemas-operacionais">
                        <span class="badge bg-secondary">5.2</span>
                        Comparação entre sistemas operacionais
                    </a>
                </li>
            </ul>
        </li>
        <!-- 6. Sobre a acessibilidade em cada sistema operacional -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#sobre-a-acessibilidade-em-cada-sistema-operacional">
                <span class="badge bg-secondary">6</span>
                Sobre a acessibilidade em cada sistema operacional
            </a>
            <ul class="list-group bg-dark">
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#comentario-da-autora">
                        <span class="badge bg-secondary">6.1</span>
                        Comentário da autora
                    </a>
                </li>
            </ul>
        </li>
        <!-- 7. Resumo -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#resumo">
                <span class="badge bg-secondary">7</span>
                Resumo
            </a>
        </li>
    </ul>
---

<p>Vamos explorar três dos mais populares sistemas operacionais: Windows, Linux e macOS. Todos eles têm suas características únicas, interfaces e diferentes formas de interação.</p>

{% include figure.html
    src="https://miro.medium.com/v2/resize:fit:698/0*7FjJW89gWct6ISLH.jpg"
    alt="Três ícones em círculos, representando sistemas operacionais. Da esquerda para a direita, os ícones são: o logo do Windows, o pinguim mascote do Linux e o logo da Apple, que representa o Mac OS X. Os três círculos estão conectados por linhas horizontais."
%}

## <a id="apresentacao"></a> Apresentação
---

Para começar, é importante lembrar que um sistema operacional é como um intermediário entre quem usa o computador e as peças dele. Ele transforma o que você pede em ações que o computador entende, além de cuidar de coisas como a memória, os programas que estão abertos e os recursos disponíveis. 

Agora que já sabemos disso, fica mais fácil falar sobre três sistemas operacionais famosos: Windows, macOS e Linux. Cada um deles surgiu de um jeito, tem uma ideia principal diferente e funciona de formas variadas. Essas diferenças aparecem no jeito de usar: alguns são fechados e controlados por uma empresa, enquanto outros dão mais liberdade para personalizar e mudar. 

Essas características influenciam diretamente a experiência de quem usa o computador, seja em tarefas cotidianas, jogos ou trabalhos profissionais.

Por exemplo, o Windows costuma ser escolhido por quem busca praticidade, compatibilidade com a maioria dos programas e uma interface intuitiva, enquanto o macOS é valorizado pelo ambiente integrado e pela estabilidade, especialmente para quem trabalha com design e edição de vídeo. Já o Linux se destaca pela flexibilidade e pela possibilidade de modificar tudo, atraindo pessoas que gostam de explorar e aprender mais sobre como o sistema funciona. 

Entender essas diferenças ajuda a escolher o sistema que melhor se encaixa com o perfil e as necessidades de cada pessoa, tornando o uso do computador mais eficiente e agradável.

<img src="https://f.i.uol.com.br/fotografia/2023/08/01/169091682164c957d50b24d_1690916821_3x2_rt.jpg" aria-hidden="true" />

## <a id="apple-e-microsoft-quem-faz-os-programas"></a> Apple e Microsoft: quem faz os programas
---

Primeiro, é importante saber que Windows e Mac OS são produtos de empresas privadas. O Windows é da Microsoft e o Mac OS é da Apple. Já o Linux não é um sistema completo; ele é apenas o Kernel (que você já sabe o que é porque leu no artigo sobre sistemas operacionais).

Para facilitar, imagine que Windows e Mac OS são como carros de marcas diferentes, tipo Chevrolet e Volkswagen. Muita gente acha que só muda a marca, mas, na verdade, cada sistema funciona de um jeito próprio, assim como os carros são feitos de formas diferentes e têm detalhes únicos.

Além dessas diferenças de origem e funcionamento, cada sistema operacional também tem seu próprio jeito de lidar com atualizações, segurança e suporte aos clientes. Enquanto o Windows aposta em atualizações frequentes e automáticas para corrigir falhas e trazer novidades, o macOS prefere atualizar menos vezes, mas sempre focando em estabilidade e integração entre dispositivos da Apple. 

<img src="https://mobizoo.com.br/wp-content/uploads/2018/02/atualizacoes-automaticas-no-windows-10-1.jpg" aria-hidden="true" />

<img src="https://files.tecnoblog.net/wp-content/uploads/2020/08/download-mac-os-700x222.png" aria-hidden="true" />

A Microsoft e a Apple criam e cuidam de tudo nos sistemas Windows e macOS. Isso quer dizer que são essas empresas que decidem como o sistema vai funcionar, como vai ser a aparência e o que ele pode fazer. Esse controle faz com que cada sistema tenha um jeito próprio, tanto na forma de usar quanto no visual, facilitando para que qualquer pessoa reconheça se está usando Windows ou macOS.

<img src="https://upload.wikimedia.org/wikipedia/en/9/92/Windows_11_Desktop.png" aria-hidden="true" />

## <a id="windows"></a> Windows
---

O Windows ficou tão popular que muita gente acha que ele é o próprio computador. Para a maioria, usar o computador é abrir o Windows e colocar programas, como Word ou Google Chrome, para funcionar. Por isso, muita gente nem sabe que está usando um sistema operacional, pensa que o Windows é só “o computador” mesmo. 

Não é preciso conhecer toda a história da Microsoft ou saber sobre todas as versões do Windows, mas vale lembrar de alguns pontos importantes. Ele tem um jeito próprio de mostrar as coisas na tela e de funcionar, porque é a Microsoft que decide tudo sobre ele. 

Por isso, muita gente acha que usar computador é sempre do jeito do Windows. Quando essa pessoa compra um Mac, por exemplo, precisa aprender como fazer as mesmas tarefas, só que de um jeito diferente, igual quando troca de carro e esse carro é de outra fabricante.

<img src="https://cdn.mos.cms.futurecdn.net/HDBUxwugxUvfvDUpE5sxo3.png" aria-hidden="true" />

O Windows foi feito para funcionar em quase qualquer computador e com quase todos os tipos de programas. Por isso, ele precisa dar conta de conversar com várias peças diferentes, como placas-mãe, placas de vídeo, impressoras, webcams, controles de videogame e muito mais.

Para garantir que tudo funcione direitinho, a Microsoft cria regras e padrões (como os famosos “drivers” e instaladores) e ainda oferece formas de rodar programas antigos. Assim, quem usa Windows consegue usar tanto os programas mais novos quanto aqueles mais antigos sem grandes problemas. 

No Windows, tudo começa na Área de Trabalho, onde você pode colocar seus arquivos e atalhos. O Menu Iniciar serve para procurar e abrir programas, e a Barra de Tarefas ajuda a trocar entre os programas que estão abertos. Para organizar seus arquivos, existe o Explorador de Arquivos, que funciona como uma lista de pastas.

No Windows, virou costume instalar programas clicando em “próximo, próximo, finalizar”. Isso ficou tão comum que muita gente que está começando a programar acha estranho instalar coisas pelo terminal ou só quer usar programas que têm botão para clicar. 

<img src="https://dkrn4sk0rn31v.cloudfront.net/2019/11/01155748/installer_1.png" aria-hidden="true" />

<img src="https://dkrn4sk0rn31v.cloudfront.net/2019/11/01155747/installer_2.png" aria-hidden="true" />

Muita coisa que a gente acha normal em computador, na verdade, é porque o Windows ficou muito famoso e todo mundo acabou acostumando com o jeito dele. Por isso, quando aparece algo diferente, parece estranho ou complicado, mas é só um jeito alternativo de fazer as coisas.

<img src="https://512pixels.net/wp-content/uploads/2018/06/mojave-dark-mode.png" aria-hidden="true" />

## <a id="mac-os"></a> Mac OS
---

O macOS é o sistema que vem nos computadores da Apple, como o MacBook e o iMac. Ele é conhecido por ser bonito e funcionar bem, mas só dá para usar em computadores feitos pela própria Apple. Isso acontece porque a Apple fabrica tanto as peças quanto o sistema, então tudo é feito para se encaixar direitinho e não dar problema.

Até dá para instalar o macOS em computadores que não são da Apple (o famoso Hackintosh), mas isso não é oficial e costuma dar bastante trabalho, porque o sistema foi feito para funcionar só nos aparelhos da marca.

<img src="https://i.blogs.es/9fbc6f/hackintosh1/1366_2000.jpg" aria-hidden="true" />

Como o macOS só funciona em computadores da Apple, quem compra um Mac já sabe que o sistema foi feito especialmente para aquele modelo. Por isso, tudo funciona muito bem junto, a bateria dura bastante (nos portáteis) e quase não aparecem problemas de compatibilidade.  

No macOS, a tela é organizada de outro jeito. Em cima, tem uma barra que sempre aparece, chamada Barra de Menus. Ela muda o que mostra dependendo do programa que você está usando.

<img src="https://help.apple.com/assets/67D1B1065D0706C4AD080C54/67D1B10E5D0706C4AD080C79/pt_BR/097440509070511d4bb1c4b22569bcfc.png" aria-hidden="true" />

Embaixo, fica o Dock, onde você pode abrir programas rapidamente e ver quais estão abertos. Para mexer nos arquivos e pastas, existe o Finder, que é parecido com o Explorador de Arquivos do Windows, só que tem um visual diferente e algumas formas de navegação diferentes.

<img src="https://help.apple.com/assets/6785864BAB2E1B818B0BFD91/6786AA6B514A09F11D050134/pt_BR/d1f83e47ba852f6ab6f01f8bd47600b9.png" aria-hidden="true" />

<img src="https://help.apple.com/assets/6785864BAB2E1B818B0BFD91/6786AA6B514A09F11D050134/pt_BR/0c452d151709d8af4f4cb85900a340b1.png" aria-hidden="true" />

Quem está acostumado com Windows pode achar estranho algumas coisas no macOS, como usar a tecla <kbd>Command</kbd> em vez da <kbd>Ctrl</kbd> para fazer atalhos, ou o fato de que fechar uma janela não significa que o programa foi realmente encerrado — ele pode continuar funcionando escondido. Depois de um tempo, essas diferenças ficam fáceis de entender, principalmente porque o sistema funciona de jeito parecido nos outros aparelhos da Apple, como o iPhone e o iPad.

No fim das contas, o macOS é indicado para quem busca um sistema estável, que funciona direitinho junto com outros aparelhos da Apple e tem um visual simples. Pode parecer que não dá para mudar muita coisa ou personalizar tanto quanto no Windows, mas isso faz parte da ideia da Apple de manter tudo funcionando igual e sem surpresas.

<img src="https://www.edivaldobrito.com.br/wp-content/uploads/2024/11/gnome-os-podera-virar-distro-linux-geral.webp" aria-hidden="true" />

## <a id="linux"></a> Linux
---

O Linux funciona de um jeito diferente do Windows e do macOS. Ele não é um sistema completo sozinho — na verdade, o que chamamos de Linux é só o núcleo, que faz a ligação entre as peças do computador e os programas.

Sem esse núcleo, nada do computador funcionaria, mas, por si só, ele não traz coisas como tela com ícones, lugares para guardar arquivos ou os aplicativos que usamos no dia a dia. Por isso, para usar Linux no computador, é preciso juntar esse núcleo com outras partes, formando então um sistema operacional completo.

{% include figure.html
  src="https://1drv.ms/i/c/bf6f4302973a9faf/IQTsNlF_3PlIRK2DG8LSzTwPAX47JB0l09vobeYAKfmZ1vg"
  alt="Um ícone do Tux, o pinguim mascote do Linux, dentro de um bloco azul rotulado como LINUX. Este bloco se conecta a outros ícones: na parte superior, a um monitor com vários aplicativos e a ícones de pastas e engrenagem. Na parte inferior, conecta-se a ícones de grade, pasta e outro ícone genérico, indicando a interação do kernel com diferentes partes do sistema operacional."
  caption="O Linux é composto pelo kernel e por várias outras partes que formam um sistema operacional completo."
%}

No Linux, esse conjunto de coisas que faz o sistema funcionar recebe o nome de distribuição. Uma distribuição Linux é como um pacote que traz o núcleo do sistema, a tela com ícones, o lugar para guardar arquivos, programas básicos e também ferramentas para instalar e atualizar outros programas.

Como o Linux é aberto e qualquer pessoa pode mexer, dá para criar uma distribuição juntando as partes que quiser. As distribuições Linux que são sistemas operacionais completos, que podem ser instalados e usados no computador.

Diferente do macOS e do Windows, que já vêm “prontos” e com tudo no lugar, como a tela, os programas principais e as ferramentas escolhidas pela empresa que desenvolve, o Linux funciona como um monte de peças separadas. Dá para juntar essas partes de jeitos diferentes, criando sistemas que podem ter uma cara e funções variadas, dependendo do que a pessoa quiser.

{% include figure.html
  src="https://1drv.ms/i/c/bf6f4302973a9faf/IQTtmYPxALOkSqzYJXjMC6oUAYcjq1y2UNzAqsBz_dSt5iM?width=1536&height=1024"
  alt="O diagrama mostra a diferença entre sistemas prontos, como macOS e Windows, e o Linux, onde o usuário pode montar o sistema do jeito que quiser. Nos sistemas prontos, a empresa já escolhe tudo para a pessoa, mostrando o sistema como uma caixa fechada. Já no Linux, o sistema é feito de várias partes separadas, como núcleo, hardware, ambiente gráfico e gerenciador de programas. Assim, dá para montar sistemas diferentes combinando essas peças, como Ubuntu, Fedora e Arch. O diagrama explica que, ao usar Linux, o próprio usuário decide como o sistema vai ser, escolhendo as partes que prefere."
  caption="Diagrama ilustra como o Linux permite uma personalização profunda, em contraste com sistemas operacionais mais fechados."
%}

O Linux em si é apenas o kernel, a parte central responsável por conversar com o hardware e repassar as informações para os programas. Todo o resto, como o visual do sistema, o gerenciador de arquivos, o instalador de programas e até a forma como as janelas se comportam, pode ser escolhido, trocado ou configurado de acordo com o gosto de quem está montando a distribuição.

No Windows, por exemplo, a tela sempre tem a Área de Trabalho, a Barra de Tarefas, o Menu Iniciar e o Explorador de Arquivos (que hoje segue o estilo do Windows 11). Todos os computadores com Windows funcionam desse jeito. Já no macOS, a experiência também é padrão: tem uma barra em cima chamada Barra de Menus, o Dock para abrir programas e o Finder para mexer nos arquivos. Nesses sistemas, não dá para mudar o visual de um jeito fácil ou oficial. 

No Linux, há muitos tipos diferentes de “telas” que você pode escolher para usar no seu computador, e essas telas são chamadas de ambientes gráficos (ou desktop environments). Cada ambiente tem um jeito diferente de organizar as janelas, os menus, os atalhos e o visual do sistema. Alguns exemplos conhecidos são:

**GNOME** – Tem um visual simples e limpo, feito para quem gosta de ter foco e praticidade. Os menus são diretos e fáceis de usar.

{% include figure.html
  src="https://www.edivaldobrito.com.br/wp-content/uploads/2025/07/gnome-49-alpha-teste-publico-traz-novidades-e-desativa-suporte-ao-x11.webp"
  alt="A imagem mostra a área de trabalho do GNOME. O plano de fundo é um padrão abstrato de blocos azuis e brancos que parecem flutuar no espaço. No centro da tela há uma janela chamada Sobre. No lado esquerdo desta janela está o menu de Configurações que lista opções como Notificações Pesquisar Contas Online e Compartilhamento. A opção Sistema está selecionada. No lado direito da janela há um grande logotipo do GNOME e um texto que descreve as informações do sistema operacional. As informações incluem o nome do sistema operacional, o processador, a memória e a capacidade do disco. Na parte inferior da tela há um dock horizontal com ícones de aplicativos incluindo um botão para mostrar aplicativos uma pasta de arquivos um ícone que parece um calendário um ícone que parece uma mala de ferramentas um ícone que se parece com uma roda dentada de engrenagem e um ícone de configurações. A barra superior do desktop mostra no canto esquerdo a data e no canto direito o status da bateria e do sistema."
  caption="Área de trabalho do GNOME, destacando sua interface limpa e funcional."
%}

**KDE Plasma** – É bem flexível, parecida com a interface do Windows. Você pode mudar quase tudo: as cores, o lugar dos botões, os efeitos e até onde ficam os menus e barras. Dá para deixar do jeito que preferir.

{% include figure.html
  src="https://upload.wikimedia.org/wikipedia/commons/e/e5/KDE_5.png"
  alt="A imagem exibe o ambiente de desktop KDE Plasma com três janelas abertas: o gerenciador de arquivos Dolphin, a janela de Configurações do Sistema e a janela Sobre este Sistema com o logo do Arch Linux. Esta última mostra informações de software como KDE Plasma 5.27 e a versão do Kernel, e dados de hardware como processador Intel Core i7 e memória. O painel de tarefas na parte inferior da tela inclui um menu de aplicativos com categorias e atalhos para gerenciamento de energia."
  caption="Área de trabalho do KDE Plasma."
%}

**XFCE** – Leve e rápido, ideal para computadores antigos ou para quem prefere simplicidade, sem consumir muita memória.
{% include figure.html
  src="https://upload.wikimedia.org/wikipedia/commons/e/ed/XFCE_4.20.png"
  alt="Captura de tela do desktop X F C E, com um plano de fundo azul e linhas diagonais. Três janelas estão abertas: o gerenciador de arquivos Thunar mostrando pastas e arquivos, uma prévia de imagem exibindo o logo do X F C E, e o gerenciador de tarefas listando processos e uso de memória. Um terminal X f c e também está aberto, mostrando o prompt de comando. Na área de trabalho, um ícone de rato representa o X F C E, e há ícones para Lixeira, Locais e Sistema de Arquivos. A barra de tarefas inferior inclui um menu, atalhos de aplicativos e o relógio."
  caption="Área de trabalho do XFCE."
%}

**Cinnamon** – Criado pelo Linux Mint, combina aparência tradicional (parecida com o Windows) com um bom nível de personalização.

{% include figure.html
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Linux_Mint_19.1_%22Tessa%22_%28Cinnamon%29.png/800px-Linux_Mint_19.1_%22Tessa%22_%28Cinnamon%29.png"
  alt="Captura de tela do desktop Cinnamon com um tema escuro. O menu de aplicativos está aberto no canto inferior esquerdo, mostrando a categoria Office selecionada e uma lista de aplicativos. O painel lateral do menu exibe atalhos para locais como Home e Documentos, enquanto a área de trabalho tem ícones de computador e home. O logo do Linux Mint está em destaque ao centro da tela, e a barra de tarefas inferior mostra aplicativos e o relógio."
  caption="Área de trabalho do Cinnamon."
%}

**MATE** – É parecido com o visual antigo do GNOME e mantém aquele jeitão mais tradicional de menus e barras, sendo fácil de usar e estável para quem prefere simplicidade.

{% include figure.html
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Mate-desktop-1.26.en.png/1139px-Mate-desktop-1.26.en.png"
  alt="Captura de tela do desktop MATE com um plano de fundo azul. A janela sobre o ambiente MATE Desktop está em primeiro plano. Há uma descrição do ambiente e Ícones na área de trabalho incluindo computador, Home, lixeira e minha pasta. Na parte inferior da tela, uma barra de tarefas mostra o menu, aplicativos abertos e o relógio."
  caption="Área de trabalho do MATE."
%}

Além da aparência do computador, você também pode mudar o gerenciador de arquivos (que é como o "Explorador de Arquivos" do Windows ou o "Finder" do macOS). No Linux, não existe só um tipo de gerenciador de arquivos. Você pode escolher outros, que podem ter visuais e funções diferentes. Por exemplo: 

**Nautilus** – É bem simples e fácil, vem junto com o GNOME e serve para tarefas básicas.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/CentOS_Stream_10_GNOME_Files_47.0_light_-_English.png/1138px-CentOS_Stream_10_GNOME_Files_47.0_light_-_English.png" aria-hidden="true" />

**Dolphin** – Usado no KDE Plasma, tem muitas opções avançadas, como abas, áreas divididas e pode acessar arquivos em outros computadores.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Dolphin-default-view.png/800px-Dolphin-default-view.png" aria-hidden="true" />

**Thunar** – Vem no XFCE, é rápido e leve, feito para ser prático.

<img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Thunar-1.6.2.png" aria-hidden="true" />

**Nemo** – Padrão do Cinnamon, tem recursos extras como abas e permite criar ações personalizadas.

<img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Nemo_5.6.4.png" aria-hidden="true" />

**Caja** – Usado no MATE, lembra os programas antigos, com menus e atalhos mais tradicionais.

<img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Mate-caja-1.26.png" aria-hidden="true" />

Nada impede, por exemplo, de você usar o ambiente gráfico GNOME com o gerenciador de arquivos Dolphin ou o KDE Plasma com o Nautilus. Você pode misturar e combinar as partes que quiser, criando um sistema que se encaixe exatamente no que você precisa ou quer. Muitas distribuições Linux fazem isso, lançam diferentes versões variando os componentes, como o ambiente gráfico e o gerenciador de arquivos, para atender a diferentes preferências e necessidades das pessoas.

A própria pessoa também pode criar sua distribuição personalizada, escolhendo cada um desses elementos de acordo com suas preferências. Por isso (por todas as possibilidades de personalização), duas distribuições (e até as versões dentro delas) do Linux podem parecer sistemas bem diferentes para quem usa — mesmo sendo baseadas no mesmo núcleo. Uma pode ter menus simples e pouca coisa na tela, enquanto outra mostra botões grandes, cores chamativas e atalhos para várias funções, uma pode usar o gerenciador de arquivos Nemo, enquanto outra pode preferir o Thunar e assim por diante.

### <a name="distribuicoes-populares"> Algumas distribuições populares
---

O universo do Linux é muito grande, mas algumas distribuições são mais conhecidas porque são mais estáveis, fáceis de usar e cheias de recursos. Cada uma dessas versões tem um público diferente e prioridades próprias. Saber essas diferenças faz com que seja mais fácil escolher a distribuição que combina melhor com o jeito de cada pessoa usar o computador. Vamos conhecer algumas das mais populares.

<img src="https://linuxiac.com/wp-content/uploads/2020/06/ubuntu-linux.jpg" aria-hidden="true" />

#### Ubuntu
---

O Ubuntu é uma das distribuições de Linux mais famosas e é feito pela empresa Canonical. Ele é fácil de usar e já traz tudo o que a maioria das pessoas precisa: uma tela amigável, programas como navegador de internet, editor de textos, tocador de música e vídeo, e um instalador simples.

O Ubuntu tem novas versões de tempos em tempos, e algumas recebem atualizações durante cinco anos (as chamadas LTS - Long Term Support ou em português Suporte de Longo Prazo). Existem também versões intermediárias que recebem suporte por nove meses. Funciona assim:

- **LTS**: São lançadas a cada dois anos e recebem atualizações de segurança e correções por cinco anos.
  - Exemplos de versões LTS: 20.04, 22.04, 24.04 e por aí vai.
- **Intermediárias**: São lançadas a cada seis meses e recebem suporte por nove meses.
  - Exemplos de versões intermediárias: 20.10, 21.04, 21.10, 22.10 e assim por diante.

<img src="https://www.edivaldobrito.com.br/wp-content/uploads/2024/04/ubuntu-24-04-lts-ja-esta-disponivel-para-download.webp" aria-hidden="true" />

**Observação**: O número das versões do Ubuntu segue o formato "ano.mês", por exemplo, "22.04" significa que foi lançada no ano de 2022 no mês de abril. Do mesmo jeito, "21.10" foi lançada no ano de 2021 no mês de outubro.

<img src="https://1000logos.net/wp-content/uploads/2023/04/Linux-Mint-logo.png" aria-hidden="true" />

#### Linux Mint
---

O Linux Mint é uma distribuição baseada no Ubuntu, mas com algumas diferenças que a tornam mais amigável para quem está migrando do Windows. Ele vem com uma interface mais tradicional e uma seleção de programas que facilitam a vida das pessoas. O Mint também é conhecido por sua estabilidade e facilidade de uso.

O Linux Mint tem três versões principais, cada uma com um ambiente gráfico diferente:

- **Cinnamon**: É a versão mais popular e vem com a interface Cinnamon, que é moderna e fácil de usar.
- **MATE**: É uma versão mais leve, que usa um ambiente de desktop tradicional, ideal para computadores mais antigos.
- **Xfce**: É a versão mais leve e rápida, projetada para ser ainda mais eficiente em termos de recursos.

<img src="https://www.linuxdescomplicado.com.br/wp-content/webpc-passthru.php?src=https://www.linuxdescomplicado.com.br/wp-content/uploads/2023/12/wp-1614235964505-1024x576.jpg&nocache=1" aria-hidden="true" />

A principal diferença entre essas versões é o ambiente gráfico, que muda a aparência e a forma de interagir com o sistema. Assim, cada pessoa pode escolher a versão que mais combina com seu jeito de usar o computador.

<img src="https://www.edivaldobrito.com.br/wp-content/uploads/2025/01/sistemas-derivados-do-debian-descubra-suas-vantagens-e-particularidades.webp" aria-hidden="true" />

#### Debian
---

O Debian é uma das distribuições mais antigas e respeitadas do Linux. Ele é conhecido por sua estabilidade e segurança, sendo a base para muitas outras distribuições, incluindo o Ubuntu (ou seja assim como o Linux Mint é baseado no Ubuntu, o próprio Ubuntu é baseado no Debian). O Debian é mantido por uma comunidade de desenvolvedores e usuários que colaboram para melhorar o sistema.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Debian_6.0.2.1.png/800px-Debian_6.0.2.1.png" aria-hidden="true" />

Uma das características marcantes do Debian é seu sistema de gerenciamento de pacotes, que facilita a instalação e atualização de software. O Debian também é altamente configurável, permitindo que os usuários personalizem sua instalação de acordo com suas necessidades.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Fedora_logo_%282021%29.svg/1280px-Fedora_logo_%282021%29.svg.png" aria-hidden="true" />

#### Fedora
---

O Fedora é uma distribuição de Linux patrocinada pela Red Hat (que é uma empresa de software) e é conhecida por sua abordagem inovadora e por incluir as últimas tecnologias. Ele é frequentemente usado por desenvolvedores e profissionais de TI que desejam estar na vanguarda das novidades do mundo Linux.

Uma das principais características do Fedora é seu ciclo de lançamento rápido, com novas versões sendo lançadas a cada seis meses. Isso significa que os usuários têm acesso a atualizações e novos recursos com frequência. O Fedora também é conhecido por sua forte ênfase na segurança e na privacidade, incorporando tecnologias como o SELinux (Security-Enhanced Linux) para proteger o sistema.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Screenshot-fedora26-apps.png/800px-Screenshot-fedora26-apps.png" aria-hidden="true" />

O Fedora é uma excelente escolha para quem deseja um sistema Linux moderno e atualizado, com uma comunidade ativa e suporte para as últimas inovações.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Archlinux-logo-standard-version.svg/1280px-Archlinux-logo-standard-version.svg.png" aria-hidden="true" />

#### Arch Linux
---

O Arch Linux é um tipo de sistema operacional baseado em Linux que se destaca por ser simples e dar muita liberdade para quem usa. Com ele, cada pessoa pode escolher e instalar só o que quiser, deixando o computador mais leve e do jeito que preferir. O Arch Linux é conhecido por sua abordagem "faça você mesmo", permitindo que os usuários construam seu sistema do zero, instalando apenas os componentes que desejam. Isso resulta em um sistema leve e altamente personalizável.

Uma coisa legal do Arch Linux é que ele sempre recebe atualizações, então não é preciso instalar tudo de novo para ter as versões mais novas dos programas. Ele tem um modelo de atualizações contínuas (rolling release), o que significa que ele vai atualizando sem ter grandes saltos, ele vai recebendo melhorias e novas funcionalidades de forma gradual (sem precisar reinstalar o sistema).

O Arch Linux não é como o Windows, que faz grandes atualizações de versão a cada poucos anos. No Arch, não tem essas mudanças bruscas (brusco é repentino), tudo vai se atualizando aos poucos. Além disso, tem muita informação disponível para ajudar quem precisa, e uma comunidade bem animada que costuma dar suporte.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Arch_Linux_screenshot%2C_12.06.2024.png/800px-Arch_Linux_screenshot%2C_12.06.2024.png" aria-hidden="true" />

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Example_of_pacman_in_Arch_Linux_screenshot.png/800px-Example_of_pacman_in_Arch_Linux_screenshot.png" aria-hidden="true" />

O Arch Linux é mais recomendado para quem já entende um pouco mais de computadores, gosta de mexer e configurar tudo do jeito próprio, e não se importa de gastar algum tempo aprendendo e ajustando o sistema. Apesar de ser mais complexo, ele oferece uma experiência única para quem quer um controle total sobre o que está usando, ou está estudando para aprender mais sobre como sistemas operacionais funcionam.

### <a name="comparacao-sistemas-operacionais"></a> Comparação entre sistemas operacionais
---

No Linux, a maneira de usar o computador pode ser bem diferente dependendo da distribuição escolhida. Tem distribuições, como o Ubuntu, que são feitas para serem fáceis, com menus e janelas parecidos com o Windows ou o Mac.

Outras, como o Arch Linux, são para quem gosta de mexer em tudo e deixar o sistema do seu jeito. Por isso, enquanto no Windows e no Mac quase todo mundo tem a mesma experiência, no Linux isso pode mudar bastante de uma pessoa para outra.

Uma das diferenças principais é que a maioria das distribuições do Linux é de graça e pode ser instalada em quase qualquer computador, até mesmo nos mais antigos. Também, como qualquer pessoa pode ver e modificar o código, os problemas costumam ser resolvidos rápido, deixando os sistemas baseados em Linux mais seguros.

Por outro lado, essa liberdade faz com que seja importante querer aprender um pouco mais sobre como as distribuições funcionam, principalmente se quiser aproveitar bem tudo o que elas oferecem.

Para tornar o entendimento mais fácil, aqui está uma tabela comparando os principais sistemas operacionais:

<div class="table-responsive">
    <table class="table table-bordered table-dark">
        <caption class="text-white">Comparação entre sistemas operacionais populares</caption>
        <thead>
            <tr>
                <th scope="col">Sistema Operacional</th>
                <th scope="col">Para quem é recomendado</th>
                <th scope="col">Ambiente Gráfico</th>
                <th scope="col">Períodos de Atualização</th>
                <th scope="col">Nível de Dificuldade</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Windows</strong></td>
                <td>Uso doméstico, empresas, jogos, compatibilidade ampla</td>
                <td>Windows Shell (Área de Trabalho, Menu Iniciar, Barra de Tarefas)</td>
                <td>Atualizações mensais + grandes atualizações anuais</td>
                <td>Baixa – interface amplamente conhecida</td>
            </tr>
            <tr>
                <td><strong>macOS</strong></td>
                <td>Usuários de hardware Apple, profissionais criativos, integração com iPhone/iPad</td>
                <td>Aqua (Barra de Menus, Dock, Finder)</td>
                <td>Grandes atualizações anuais + patches de segurança</td>
                <td>Baixa a média – diferente do Windows, mas consistente</td>
            </tr>
            <tr>
                <td><strong>Linux – Ubuntu</strong></td>
                <td>Iniciantes no Linux, uso doméstico e servidores</td>
                <td>GNOME</td>
                <td>LTS a cada 2 anos (suporte de 5 anos) + versões intermediárias a cada 6 meses</td>
                <td>Baixa a média – instalação simples, mas requer adaptação</td>
            </tr>
            <tr>
                <td><strong>Linux – Mint</strong></td>
                <td>Migrantes do Windows, uso doméstico</td>
                <td>Cinnamon (padrão), MATE ou XFCE</td>
                <td>Baseado no Ubuntu – segue seus ciclos de atualização</td>
                <td>Baixa – interface próxima ao Windows</td>
            </tr>
            <tr>
                <td><strong>Linux – Debian</strong></td>
                <td>Servidores, uso profissional e entusiastas que priorizam estabilidade</td>
                <td>GNOME (padrão), mas oferece outros</td>
                <td>Lançamentos estáveis a cada ~2 anos + atualizações de segurança</td>
                <td>Média – instalação tranquila, mas tem muita configuração manual</td>
            </tr>
            <tr>
                <td><strong>Linux – Fedora</strong></td>
                <td>Desenvolvedores e entusiastas que querem novidades rápidas</td>
                <td>GNOME</td>
                <td>Lançamento a cada ~6 meses</td>
                <td>Média a alta – foco em software livre, menos pacotes proprietários</td>
            </tr>
            <tr>
                <td><strong>Arch Linux</strong></td>
                <td>Usuários avançados, estudantes e entusiastas que querem controle total</td>
                <td>Sem padrão – usuário escolhe</td>
                <td>Rolling release (atualizações contínuas)</td>
                <td>Alta – exige conhecimento técnico e configuração manual</td>
            </tr>
        </tbody>
    </table>
</div>

No fim, o Linux é como uma caixa de ferramentas: cada distribuição decide quais ferramentas colocar dentro e como organizá-las. Essa flexibilidade atrai quem gosta de personalizar o sistema, explorar configurações e até criar soluções próprias. Mas também há distribuições prontas para quem quer apenas instalar e começar a usar, sem complicação.

## <a id="sobre-a-acessibilidade-em-cada-sistema-operacional"></a> Sobre a acessibilidade em cada sistema operacional
---

Quase todos os sistemas criam uma espécie de “árvore” de acessibilidade, que é uma lista organizada com informações sobre o que está na tela, como nome, função, estado e ações possíveis de cada elemento. Ferramentas de acessibilidade, como leitores de tela, conseguem acessar e usar essa árvore através de algumas tecnologias específicas: 

- **No Windows**: O sistema usa uma tecnologia chamada UI Automation (UIA) para mostrar os elementos e suas funções. Isso é o que permite que leitores de tela como Narrador, JAWS e NVDA funcionem e também ajuda em testes automáticos. Algumas aplicações, como navegadores, usam uma tecnologia extra chamada IAccessible2 (IA2), principalmente quando precisam de recursos além do básico.
- **No macOS**: Os aplicativos usam um sistema chamado NSAccessibility para enviar informações para o leitor de tela. No iPhone e iPad, existe o UIAccessibility, que faz a ligação dos aplicativos ao VoiceOver, o leitor de tela da Apple.
- **No Linux (GNOME/MATE)**: Tudo gira em torno do AT-SPI2, que organiza como as informações saem do programa e chegam ao leitor de tela, como o Orca, e aos programas que criam as janelas e botões.

Por que isso é importante na engenharia de software? Porque é o jeito como o software é feito – não só o que aparece na tela – que faz com que leitores de tela, comandos de voz ou outros aparelhos consigam entender e usar o que está ali.

Se o programa não diz com detalhes o que cada parte do programa é, como seu nome, funções (como "botão de enviar") e estado (como "desativado"), quem precisa dessas ferramentas pode ter problemas para usar, mesmo que o visual esteja bonito.

Atualmente, há muitos recursos diferentes para acessibilidade. No Windows 11, por exemplo, é possível usar o Narrador para que o computador leia o que está na tela, aumentar o tamanho das coisas usando a Lupa, mudar as cores para facilitar a leitura e controlar o computador com a voz.

No macOS, tem o VoiceOver que lê o que aparece na tela, dá para usar braille e identificar imagens, além de ferramentas para ampliar textos e mudar controles.

No Linux, com GNOME o Orca lê o que está na tela e tem opções de alto contraste e braille. O KDE também oferece uma lupa e opções para destacar o contraste. 

### Quais leitores de tela estão disponíveis para cada sistema operacional?

- **Windows**:
  - [Narrador](https://support.microsoft.com/pt-br/windows/guia-completo-do-narrador-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (da própria Microsoft)
  - [JAWS](https://www.freedomscientific.com/products/software/jaws/) (Job Access With Speech da empresa Freedom Scientific)
  - [NVDA](https://www.nvaccess.org/) (NonVisual Desktop Access da organização NV Access)
- **MacOS**:
  - [VoiceOver](https://support.apple.com/pt-br/guide/voiceover/welcome/mac) (da própria Apple)
- **Linux**:
  - [Orca](https://help.gnome.org/users/orca/stable/) (mantido pela comunidade e pela GNOME software)

**Observações:**

- O VoiceOver é o leitor de telas usado nos computadores e celulares da Apple, como o MacBook, iPhone e iPad. Ele já vem instalado e não precisa pagar nada para usar, basta ter um aparelho da Apple.

- O Narrador é o leitor de telas que vem junto com o Windows, da Microsoft. Ele também é de graça e já está no computador, mas é mais indicado para quem está começando, porque não tem tantas funções como outros programas, como o JAWS ou o NVDA.

- No Linux, a acessibilidade depende do tipo de interface que você usa. O GNOME, por exemplo, tem o Orca, que é um leitor de telas bem completo. Se quiser usar leitor de telas no Linux, o ideal é escolher o GNOME, sem muitas modificações. Outra opção boa é o Mate, que também funciona bem com o Orca e é mais leve. 

### <a id="comentario-da-autora"> Comentário da autora
---

Usar computadores pode ser ainda mais difícil para pessoas com deficiência, porque elas precisam aprender não só como usar o computador, mas também como usar ferramentas de acessibilidade. Para quem não tem deficiência, trocar de sistema, como ir do Windows para o Mac ou Linux, geralmente significa se acostumar com o novo visual e diferenças de navegação. Já para quem depende de leitores de tela, a mudança é bem maior.

Se a pessoa troca o leitor de tela (por exemplo, do Narrador para o JAWS ou NVDA), precisa reaprender praticamente todos os comandos, mesmo que continue usando o mesmo sistema operacional. A adaptação pode ser um processo longo e desafiador, exigindo paciência e prática.

Mudar de sistema operacional para essas pessoas exige aprender tanto sobre o novo sistema quanto sobre como funcionam os leitores de tela e outras ferramentas de acessibilidade, que podem ser bem diferentes em cada sistema. Essa variedade torna o processo mais complicado e pode dificultar que a pessoa consiga usar a tecnologia de forma independente.

#### Comentários sobre o Linux e Mac OS
---

É importante saber que a acessibilidade no Linux pode variar bastante. Muita gente acha que o sistema é difícil de usar ou que a acessibilidade é sempre igual em qualquer distribuição, mas isso não é verdade. Os ambientes GNOME e MATE costumam funcionar melhor com leitores de tela, mesmo em diferentes distribuições do Linux.

Já outros ambientes, como o Cinnamon, podem dar mais trabalho para quem depende da acessibilidade, no caso dos leitores de tela. Para pessoas com baixa visão, essa interface pode ser muito boa, porque é possível ajustar cores, aumentar o contraste, usar a lupa e adaptar a tela de várias formas diferentes para enxergar melhor.

Para quem usa exclusivamente leitores de tela o GNOME, do jeito que vem normalmente (sem muitas modificações), costuma ser a opção mais indicada. A interface MATE também é uma boa escolha, muitas vezes até melhor que o GNOME, dependendo das preferências da pessoa que estiver usando o leitor de tela.

Outra dica importante é usar o terminal, já que o Linux pode ser controlado totalmente só por ele. Saber mexer no terminal também ajuda quem usa o Mac e até o Windows, com o WSL. Vale lembrar que essas sugestões são baseadas em experiências pessoais (da autora).

Para quem não é da área de informática, o NVDA, que funciona no Windows, costuma ser uma boa escolha. O Windows tem muitas opções de acessibilidade e ainda conta com muita gente ajudando e tirando dúvidas.

No Mac, a documentação da Apple sobre o VoiceOver é bem completa. O sistema funciona muito bem com o VoiceOver e se integra fácil com outros aparelhos da Apple, fazendo com que os recursos de acessibilidade estejam disponíveis em vários aplicativos. O reconhecimento de tela também é rápido e eficiente.

Por outro lado, pode faltar alguma coisa quando se precisa de funções fora do mundo Apple (com programas de outras empresas), o que pode limitar a acessibilidade em algumas situações. Ou seja, o VoiceOver funciona muito bem dentro do ecossistema Apple, mas pode ter limitações quando se trata de aplicativos de terceiros.

## Resumo
---

Os três principais sistemas operacionais usados em computadores pessoais — Windows, macOS e Linux — são bastante diferentes em como são criados, distribuídos e usados. Essas diferenças afetam como as pessoas usam o computador e o quanto é fácil usar cada sistema.

O Windows é conhecido por funcionar em vários tipos de computadores, ter uma aparência familiar e muitos programas disponíveis, por isso é o mais usado em casas e empresas. O macOS só funciona em computadores da Apple, mas oferece uma integração muito boa entre os aparelhos da marca, é estável e fácil de mexer, embora permita pouca personalização. Já o Linux é famoso por ser bem flexível e personalizável, existindo em várias distribuições, desde as mais fáceis, como Ubuntu e Mint, até as mais avançadas, como Arch Linux.

Todos esses sistemas têm ferramentas de acessibilidade para pessoas com deficiência visual, mas a qualidade dessas ferramentas muda de acordo com o sistema. No Windows, existem opções como Narrador, NVDA e JAWS. No macOS, o VoiceOver já vem instalado e funciona de forma integrada. No Linux, principalmente nas interfaces gráficas GNOME e MATE, existe o leitor de tela Orca, mas o funcionamento dele depende da versão e das configurações do sistema.

Por isso, escolher o sistema operacional ideal depende de pontos como compatibilidade dos programas, facilidade de uso, objetivos de cada pessoa, o quanto ela entende de tecnologia, se gosta de personalizar o computador e, se for o caso, as necessidades de acessibilidade. 