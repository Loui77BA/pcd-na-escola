---
layout: post
title: "Tecnologias Assistivas no Ensino de Química: Uma Proposta de Tabela Periódica Acessível"
description: "Este artigo apresenta uma proposta de tabela periódica acessível para estudantes com deficiência visual, utilizando tecnologias WEB para implementar recursos de acessibilidade na ferramenta."
date: 2025-08-19 10:00:00 -0300
author: ["Ana Célia Barreto de Araújo Santana, ", "Karine do Prado Ribeiro e ", "Louise Suelen Reis"]
categories: [Educação]
tags: [Educação, Química]
permalink: /tecnologias-assistivas-no-ensino-de-quimica-uma-proposta-de-tabela-periodica-acessivel/
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
        <!-- 2. Conceitos gerais -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#conceitos-gerais">
                <span class="badge bg-secondary">2</span>
                Conceitos gerais
            </a>
        </li>
        <!-- 3. Educação e deficiência visual: principais questões -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#educacao-e-deficiencia-visual-principais-questoes">
                <span class="badge bg-secondary">3</span>
                Educação e deficiência visual: principais questões
            </a>
            <ul class="list-group list-group-flush ms-3">
                <!-- 3.1 Principais características da baixa visão -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#principais-caracteristicas-da-baixa-visao">
                        <span class="badge bg-secondary">3.1</span>
                        Principais características da baixa visão
                    </a>
                </li>
                <!-- 3.2 Cegueira -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#cegueira">
                        <span class="badge bg-secondary">3.2</span>
                        Cegueira
                    </a>
                </li>
            </ul>
        </li>
        <!-- 4. A Química -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#a-quimica">
                <span class="badge bg-secondary">4</span>
                A Química
            </a>
        </li>
        <!-- 5. Tabela periódica -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#tabela-periodica">
                <span class="badge bg-secondary">5</span>
                Tabela periódica
            </a>
            <ul class="list-group list-group-flush ms-3">
                <!-- 5.1 Propriedades da tabela periódica -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#propriedades-da-tabela-periodica">
                        <span class="badge bg-secondary">5.1</span>
                        Propriedades da tabela periódica
                    </a>
                </li>
            </ul>
        </li>
        <!-- 6. Tecnologias assistivas no ensino de Química -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#tecnologias-assistivas-no-ensino-de-quimica">
                <span class="badge bg-secondary">6</span>
                Tecnologias assistivas no ensino de Química
            </a>
        </li>
        <!-- 7. Internet e desenvolvimento Web como tecnologias assistivas -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#internet-e-desenvolvimento-web-como-tecnologias-assistivas">
                <span class="badge bg-secondary">7</span>
                Internet e desenvolvimento Web como tecnologias assistivas
            </a>
            <ul class="list-group list-group-flush ms-3">
                <!-- 7.1 HTML Semântico -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#html-semantico">
                        <span class="badge bg-secondary">7.1</span>
                        HTML Semântico
                    </a>
                </li>
                <!-- 7.2 Texto Alternativo em Imagens (Alt Text) -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#texto-alternativo-em-imagens-alt-text">
                        <span class="badge bg-secondary">7.2</span>
                        Texto Alternativo em Imagens (Alt Text)
                    </a>
                </li>
                <!-- 7.3 Compatibilidade com Leitores de Telas -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#compatibilidade-com-leitores-de-telas">
                        <span class="badge bg-secondary">7.3</span>
                        Compatibilidade com Leitores de Telas
                    </a>
                </li>
                <!-- 7.4 Design de Alto Contraste e Tamanho de Fonte Ajustável -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#design-de-alto-contraste-e-tamanho-de-fonte-ajustavel">
                        <span class="badge bg-secondary">7.4</span>
                        Design de Alto Contraste e Tamanho de Fonte Ajustável
                    </a>
                </li>
                <!-- 7.5 WAI-ARIA (Accessible Rich Internet Applications) -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#wai-aria-accessible-rich-internet-applications">
                        <span class="badge bg-secondary">7.5</span>
                        WAI-ARIA (Accessible Rich Internet Applications)
                    </a>
                </li>
                <!-- 7.6 Acessibilidade no Código -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#acessibilidade-no-codigo">
                        <span class="badge bg-secondary">7.6</span>
                        Acessibilidade no Código
                    </a>
                </li>
            </ul>
        </li>
        <!-- 8. Desenvolvimento de uma Tabela Periódica Acessível -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#desenvolvimento-de-uma-tabela-periodica-acessivel">
                <span class="badge bg-secondary">8</span>
                Desenvolvimento de uma Tabela Periódica Acessível
            </a>
            <ul class="list-group list-group-flush ms-3">
                <!-- 8.1 Metodologia -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#metodologia">
                        <span class="badge bg-secondary">8.1</span>
                        Metodologia
                    </a>
                </li>
                <!-- 8.2 Arquitetura Técnica em Três Camadas -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#arquitetura-tecnica-em-tres-camadas">
                        <span class="badge bg-secondary">8.2</span>
                        Arquitetura Técnica em Três Camadas
                    </a>
                </li>
                <!-- 8.3 Princípios de Acessibilidade Implementados -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#principios-de-acessibilidade-implementados">
                        <span class="badge bg-secondary">8.3</span>
                        Princípios de Acessibilidade Implementados
                    </a>
                </li>
                <!-- 8.4 Validação e Testes -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#validacao-e-testes">
                        <span class="badge bg-secondary">8.4</span>
                        Validação e Testes
                    </a>
                </li>
            </ul>
        </li>
        <!-- 9. Resultados e Impacto -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#resultados-e-impacto">
                <span class="badge bg-secondary">9</span>
                Resultados e Impacto
            </a>
            <ul class="list-group list-group-flush ms-3">
                <!-- 9.1 Visualização por Períodos -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#visualizacao-por-periodos">
                        <span class="badge bg-secondary">9.1</span>
                        Visualização por Períodos
                    </a>
                </li>
                <!-- 9.2 Visualização por Grupos -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#visualizacao-por-grupos">
                        <span class="badge bg-secondary">9.2</span>
                        Visualização por Grupos
                    </a>
                </li>
                <!-- 9.3 Visualização por Categorias -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#visualizacao-por-categorias">
                        <span class="badge bg-secondary">9.3</span>
                        Visualização por Categorias
                    </a>
                </li>
                <!-- 9.4 Painel de Controle -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#painel-de-controle">
                        <span class="badge bg-secondary">9.4</span>
                        Painel de Controle
                    </a>
                </li>
                <!-- 9.5 Cartões de Elementos Químicos -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#cartoes-de-elementos-quimicos">
                        <span class="badge bg-secondary">9.5</span>
                        Cartões de Elementos Químicos
                    </a>
                </li>
                <!-- 9.6 Modal de Detalhes do Elemento -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#modal-de-detalhes-do-elemento">
                        <span class="badge bg-secondary">9.6</span>
                        Modal de Detalhes do Elemento
                    </a>
                </li>
            </ul>
        </li>
        <!-- 10. Considerações Finais -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#consideracoes-finais">
                <span class="badge bg-secondary">10</span>
                Considerações Finais
            </a>
        </li>
        <!-- 11. Referências -->
        <li class="list-group-item bg-dark text-white border-0">
            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
               href="#referencias">
                <span class="badge bg-secondary">11</span>
                Referências
            </a>
        </li>
    </ul>
---

Este artigo apresenta uma solução para tornar a tabela periódica acessível a pessoas com deficiência. O objetivo é demonstrar como recursos tecnológicos podem promover inclusão e autonomia no aprendizado de Química.

<div class="text-center">
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/01248cbd-d6fc-4d17-2007-b107616a0000/public" aria-hidden="true" class="img-fluid" />
</div>

## Apresentação {#apresentacao}
---

A percepção equivocada de que pessoas com deficiência enfrentam obstáculos intransponíveis ainda persiste em diferentes segmentos da sociedade, inclusive em ambientes educacionais. Essa visão contribui para a carência de materiais e metodologias pedagógicas adaptadas, tornando a inclusão mais desafiadora.

A limitação de informações, a pouca convivência cotidiana com pessoas com deficiência e a ausência de iniciativas voltadas à sensibilização colaboram para perpetuar preconceitos. Nesse cenário, este trabalho analisa os desafios e estratégias relacionadas ao ensino da tabela periódica dos elementos químicos para estudantes com deficiência visual, enfatizando a importância de adaptações específicas viáveis e aplicáveis.

A utilização de recursos digitais voltados ao desenvolvimento web revela-se fundamental nesse processo, potencializando o acesso de pessoas com deficiência visual ao conhecimento científico. Por esse motivo, foi desenvolvida uma versão inclusiva da tabela periódica, compatível com linhas Braille e leitores de tela.

A abordagem metodológica incluiu uma revisão bibliográfica abrangente, seguida da elaboração prática da tabela e de sua validação por especialistas com deficiência visual. O nível de acessibilidade foi avaliado por meio de testes realizados por pessoas com deficiência visual que atuam profissionalmente nas áreas de acessibilidade digital, desenvolvimento de software, psicologia, pedagogia entre outras.

Participaram dessa avaliação indivíduos cegos e com baixa visão, usuários de tecnologias assistivas como lupas eletrônicas, linhas Braille e diferentes leitores de tela em variados dispositivos — celulares, tablets, notebooks e computadores. Os resultados demonstram que, com as adaptações adequadas e o uso correto das tecnologias, é plenamente possível proporcionar uma experiência educacional inclusiva e eficaz no estudo da tabela periódica.

Além de ampliar o acesso ao saber científico, essa iniciativa contribui para superar barreiras históricas e estimula a participação ativa de estudantes com deficiência visual no contexto escolar. Ademais, ressalta-se a necessidade de investir continuamente no aprimoramento de materiais didáticos acessíveis. Por conseguinte, ao compartilhar essa proposta, pretende-se fomentar uma educação mais inclusiva e equitativa, na qual todos tenham a oportunidade de aprender e se desenvolver integralmente, promovendo uma transformação social duradoura.

## Conceitos gerais {#conceitos-gerais}
---

Ao longo da história, sempre existiu o estigma de que pessoas com deficiência seriam incapazes. Muitas vezes, essas pessoas foram responsabilizadas pela própria exclusão social em um processo que hoje recebe o nome de capacitismo.

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"Esse preconceito é tão forte na sociedade que atinge até instituições e pessoas que, em teoria, deveriam defender os direitos de grupos minorizados e marginalizados."</p>
  <footer class="text-light">IVANOVICH; GESSER, 2020</footer>
</blockquote>

Nesse cenário, pessoas com deficiência acabam sendo vistas como menos capazes de sentir, aprender, desejar e, principalmente, de serem desejadas.

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"Assim, são muitas vezes impedidas de viver plenamente e de exercer seus direitos."</p>
  <footer class="text-light">GESSER; BLOCK; HENRIQUE NUERNBERG, 2019</footer>
</blockquote>

O capacitismo está enraizado na sociedade, de forma estrutural e constante, já que:

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"[...] desde o momento em que uma criança nasce ela emerge em um mundo onde recebe mensagens de que ser uma pessoa com deficiência é ser inferior."</p>
  <footer class="text-light">GESSER; BLOCK; HENRIQUE NUERNBERG, 2019</footer>
</blockquote>

As pessoas com deficiência visual fazem parte desse contexto, principalmente porque:

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"[...] a sociedade reconhece o que é extremamente visual, privilegiando a visualização como condição de conhecer, em um universo constituído por símbolos gráficos, imagens, letras e números."</p>
  <footer class="text-light">REIS, 2015, p. 15</footer>
</blockquote>

A educação, refletindo a sociedade atual e formando a futura, também se apoia fortemente em elementos visuais, como jogos, imagens e gráficos (REIS, 2015).

A Química é um dos campos do conhecimento mais dependentes da visão. Ela é:

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"[...] a ciência responsável pelo estudo da matéria e de suas transformações."</p>
  <footer class="text-light">FELTRE, 2004, p. 7</footer>
</blockquote>

Para essa área, o uso de representações visuais é essencial, pois permite transmitir um grande volume de informações em pouco tempo. A Química envolve experimentos, práticas de laboratório, manipulação de vidrarias e substâncias.

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"Por isso, cores, gráficos e equações químicas fazem parte de sua linguagem simbólica."</p>
  <footer class="text-light">FELTRE, 2004</footer>
</blockquote>

Diante das características próprias da Química e da forma como ela é ensinada, pode parecer impossível pensar em um aprendizado inclusivo para pessoas com deficiência visual. No entanto, com o apoio de novas tecnologias, é possível, sim, criar estratégias.

Além disso, cabe às instituições de ensino, equipes pedagógicas, professoras, professores e ao Serviço de Atendimento Educacional Especializado (SAEE) planejar e aplicar adaptações que tornem esse aprendizado acessível (BRASIL, 1996).

## Educação e deficiência visual: principais questões {#educacao-e-deficiencia-visual-principais-questoes}
---

Segundo Reis (2015, p. 28), a deficiência visual pode ser entendida como “um impedimento total ou, ainda, a diminuição da capacidade visual”. Essa condição pode ser causada por diversos fatores que afetam os olhos ou o sistema responsável pela visão. Embora muitas pessoas associem deficiência visual exclusivamente à cegueira, a baixa visão também faz parte desse grupo.

De acordo com Reis (2015, p. 28), a deficiência visual é avaliada a partir de duas medidas oftalmológicas: acuidade visual (capacidade de enxergar a uma determinada distância) e campo visual (área alcançada pela visão).

<div class="text-center">
        <figcaption>Figura 1: Representação visual dos dois principais parâmetros oftalmológicos para avaliação visual.</figcaption>

        <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/db43e9f5-7daa-4214-f8ff-9282daaff900/public" class="img-fluid" alt="Ilustração explicando os conceitos de acuidade visual e campo visual. Na parte superior, uma cabeça de perfil olhando para uma tabela de exame visual com letras decrescentes, representando a acuidade visual. Na parte inferior, outra cabeça de perfil com um cone triangular saindo dos olhos, mostrando a área de visão que alcança uma árvore, representando o campo visual." />

        <figcaption>Fonte: Elaborado pelas autoras.</figcaption>
</div>

A baixa visão não se manifesta de maneira uniforme. Indivíduos podem apresentar diferentes formas de funcionamento visual, resultado da combinação entre acuidade visual, campo visual e etiologia (causa ou origem) da deficiência.

O Ministério da Educação (BRASIL, 2005, p.16) define como pessoa com baixa visão aquela que apresenta “desde a condição de indicar a projeção da luz até o grau em que a redução da acuidade visual interfere ou limita seu desenvolvimento”.

O e-book Acessibilidade Para Estudantes Com Deficiência Visual: Orientações Para O Ensino Superior apresenta a seguinte definição:

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
    <p class="lead fst-italic lh-lg">"[...] a baixa visão corresponde a um comprometimento do funcionamento visual, em ambos os olhos, que não pode ser sanado, por exemplo, com o uso de óculos convencionais, lentes de contato ou cirurgias oftalmológicas."</p>
    <footer class="text-light">GARRUTTI DE LOURENÇO et al., 2020, p. 2</footer>
</blockquote>

Assim, condições como miopia corrigida com óculos não se enquadram como deficiência visual, sendo consideradas problemas visuais, pois podem ser mitigadas (muito reduzidas ou até solucionadas) com recursos óticos.

### Principais características da baixa visão {#principais-caracteristicas-da-baixa-visao}
---

Como destacado por Garrutti de Lourenço et al. (2020, p. 2), a baixa visão associa-se a diferentes tipos de limitações visuais, que podem ocorrer isoladamente ou em conjunto. Entre elas, destacam-se: 

- redução da nitidez visual (acuidade visual diminuída);

- restrição do campo visual, limitando a percepção ao espaço imediatamente à frente;

- alteração na discriminação de contraste, dificultando a identificação de objetos;

- dificuldade de adaptação à luminosidade, tanto em ambientes intensamente iluminados quanto pouco iluminados;

- modificação na percepção das cores;

- limitação na visualização de objetos próximos ou distantes;

- percepção restrita do entorno, observando apenas uma área delimitada conforme a condição apresentada.

Fonte: Elaborado pelas autoras com base em GARRUTTI DE LOURENÇO et al., 2020.

Essas alterações visuais, por vezes imperceptíveis para terceiros, exigem adaptações específicas para leitura e escrita. A relativa invisibilidade da baixa visão não diminui sua relevância nem a necessidade de intervenções apropriadas. Garrutti de Lourenço et al. (2020, p. 2) enfatizam que a principal barreira à inclusão de pessoas com baixa visão é a descrença quanto à importância das adaptações, o que constitui um entrave atitudinal significativo.

Dentre as principais causas de baixa visão, incluem-se:

- complicações oculares em prematuros (retinopatia da prematuridade);

- inflamações decorrentes de toxoplasmose (retinocoroidite macular por toxoplasmose);

- albinismo;

- catarata congênita;

- doenças retinianas (retinose pigmentar);

- comprometimento do nervo óptico (atrofia ótica);

- glaucoma;

- retinopatia diabética.

Fonte: Elaborado pelas autoras com base em GARRUTTI DE LOURENÇO et al., 2020.

No contexto educacional, é essencial que profissionais compreendam o percurso e as necessidades específicas de cada estudante com baixa visão, de modo a subsidiar práticas pedagógicas inclusivas que atendam às demandas individuais (GARRUTTI DE LOURENÇO et al., 2020, p. 2).

Diante dessas particularidades, observam-se situações recorrentes na escola envolvendo estudantes com baixa visão, como:

- limitações na leitura de textos com tipografia reduzida ou baixo contraste;

- fadiga visual acelerada durante atividades de leitura e escrita;

- dificuldades para visualizar conteúdos apresentados em quadro ou materiais didáticos convencionais;

- necessidade de tempo adicional para concluir tarefas que demandam processamento visual;

- prejuízo na participação em atividades realizadas sob iluminação intensa ou superfícies refletoras;

- solicitação de recursos específicos, como dispositivos ópticos de ampliação, iluminação adequada e materiais acessíveis.

Fonte: Elaborado pelas autoras com base em GARRUTTI DE LOURENÇO et al., 2020, p. 3.

Tais dificuldades variam entre os indivíduos, tornando imprescindível a avaliação individualizada das necessidades de cada estudante com baixa visão (GARRUTTI DE LOURENÇO et al., 2020, p. 3-4).

### Cegueira {#cegueira}
---

Conforme o Ministério da Educação (Brasil, 2005, p. 17), a cegueira pode manifestar-se em diferentes graus: há casos em que o indivíduo não possui qualquer percepção visual e outros em que é possível apenas a identificação de luz, sem formação de imagens. Siauliys, Ormelezi e Briant (2010, p. 34) reiteram que pessoas cegas podem apresentar ausência total de visão ou distinguir apenas variações entre claro e escuro.

Algumas pessoas conseguem identificar a origem da luz, mas, para fins de aprendizagem, utilizam predominantemente os sentidos do tato e da audição para compreender o ambiente ao seu redor. Portanto, a cegueira abrange desde a total ausência de percepção visual até a capacidade limitada de perceber luminosidade, exigindo, no contexto educacional, estratégias pedagógicas baseadas em modalidades sensoriais alternativas, especialmente o tato e a audição.

É fundamental também a oferta de materiais didáticos diversificados, possibilitando múltiplos canais de aprendizagem aos estudantes cegos. Entre as estratégias recomendadas para a inclusão escolar de estudantes com cegueira, destacam-se:

- utilização de materiais em Braille para leitura e escrita;

- emprego de recursos táteis, como mapas e gráficos em relevo;

- adoção de softwares leitores de tela para acesso a conteúdos digitais;

- adaptação de atividades para que possam ser realizadas pelo tato e pela audição;

- capacitação de professores quanto às necessidades específicas desses estudantes.

Fonte: Elaborado pelas autoras com base em BRASIL, 2005; SIAULIYS; ORMELEZI; BRIANT, 2010.

Adicionalmente, é fundamental que os ambientes educacionais efetivem os direitos constitucionais e legais das pessoas com deficiência, transpondo da teoria para a prática as garantias já estabelecidas em lei. A implementação de acessibilidade física e digital, bem como a articulação entre professores, familiares e especialistas, constitui obrigação legal que deve ser cumprida para assegurar o pleno desenvolvimento acadêmico e social desses estudantes, conforme preconizam a Constituição Federal e a legislação específica sobre inclusão, a lei nº 13.146/2015 (BRASIL, 2015).

## A Química {#a-quimica}
---

A Química, ciência de origens remotas, consolidou-se progressivamente como disciplina científica moderna, sobretudo a partir dos séculos XVI e XVII, quando surgiram os primeiros modelos conceituais próximos das concepções atuais. Ao longo de sua evolução, foi além de uma abordagem quantitativa, adotando representações imagéticas, simbologias próprias e códigos cromáticos que facilitam a compreensão dos fenômenos naturais.

Sua inserção nos currículos escolares teve início na França do século XIX, impulsionada pela valorização das ciências naturais nas reformas educacionais republicanas e pela metodologia da “lição de coisas”, que privilegiava a aprendizagem empírica e a interação direta com objetos.

Atualmente, ensinar e aprender Química envolve não apenas cálculos estequiométricos, mas também a observação sistemática, o uso da notação simbólica para fórmulas moleculares e a aplicação de códigos cromáticos como recurso visual para compreensão conceitual (KAHN, 2014; SCHWAHN; OAIGEN, 2009, 2008; SCHWAHN; ANDRADE NETO, 2011). Reforçando essa dimensão visual, Razuck e Guimarães (2014, p. 3) destacam que o ensino de Química:

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"[...] se utiliza de grande apelo visual, pois muitos de seus conceitos se baseiam na visualização de esquemas para sua compreensão."</p>
  <footer class="text-light">RAZUCK; GUIMARÃES, 2014, p. 3</footer>
</blockquote>

Ou seja, conforme afirmam os autores, a aprendizagem em Química está profundamente relacionada ao uso de imagens, desenhos, diagramas ou modelos, que tornam os conceitos mais acessíveis. Eles complementam:

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"[...] a utilização de imagens, como ferramenta, na compreensão de conceitos é verificada, por exemplo, no ensino de Modelos Atômicos, no qual cada modelo se associa a uma representação imagística."</p>
  <footer class="text-light">RAZUCK; GUIMARÃES, 2014, p. 3</footer>
</blockquote>

Dessa forma, fica evidente que recursos visuais são ferramentas essenciais na Química, especialmente no estudo dos Modelos Atômicos, em que cada concepção é representada por figuras que facilitam a assimilação do conteúdo.

O caráter visual não é mero detalhe, mas integra a essência da disciplina, que desenvolveu ao longo do tempo uma linguagem própria feita de símbolos, fórmulas e representações visuais. Exemplos concretos desse universo são a tabela periódica, os modelos moleculares e as estruturas de Lewis, recursos que auxiliam tanto o ensino quanto a compreensão.

Como explicitam Almeida (2015) e Feltre (2004), a linguagem da Química exige explicações teóricas aliadas a demonstrações práticas e visuais para garantir um real entendimento dos conceitos.

Portanto, a Química pode ser definida como:

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"[...] uma ciência que possui uma linguagem própria proveniente do aspecto representacional da ciência como o uso de fórmulas e reações."</p>
  <footer class="text-light">ALMEIDA, 2015, p. 19</footer>
</blockquote>


A natureza dos objetos de estudo da Química confere à disciplina características singulares, tornando indispensável a articulação de explicações teóricas com práticas e recursos visuais (FELTRE, 2004). Assim, equações, fórmulas, gráficos e textos precisam seguir padrões específicos, pois a forma de representação influencia diretamente a clareza do conteúdo e pode impactar nos resultados alcançados (ALMEIDA, 2015).

Em síntese, a Química construiu uma identidade própria ao longo do tempo, fundada em símbolos, fórmulas, imagens e práticas complementares. Compreender Química, portanto, é não apenas estudar fenômenos da natureza, mas também interpretar e utilizar a linguagem singular que caracteriza essa ciência.

## Tabela periódica {#tabela-periodica}
---

Tolentino e Rocha-Filho (1997, p. 1) afirmam que: 

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"[...] A classificação periódica dos elementos é, sem dúvida, uma das maiores e mais valiosas generalizações científicas. Concretizada na segunda metade da década de 60 do século 19, desde então muito serviu como guia de pesquisas em Química e, aos poucos, se tornou um valioso instrumento didático no ensino da Química."</p>
  <footer class="text-light">TOLENTINO; ROCHA-FILHO, 1997, p. 1</footer>
</blockquote>

A tabela periódica representa uma estrutura sistematizada utilizada para classificar os elementos químicos, organizando-os segundo a ordem crescente de seus números atômicos. Essa disposição se baseia na configuração eletrônica dos átomos, evidenciando a recorrência de determinadas propriedades entre os elementos.

As linhas horizontais, denominadas períodos, apresentam à esquerda os metais e, à direita, os não metais. Já as colunas verticais, chamadas grupos, reúnem conjuntos específicos de elementos, como o grupo 1, que corresponde aos metais alcalinos (FELTRE, 2004). Elementos pertencentes a um mesmo grupo geralmente compartilham semelhanças marcantes, frequentemente mais notáveis do que aquelas observadas entre elementos de um mesmo período. No entanto, há casos em que as semelhanças dentro dos períodos também se destacam, como entre os lantanídeos e actinídeos (FELTRE, 2004).

Segundo a lei periódica de Moseley, as propriedades físicas e químicas dos elementos variam periodicamente de acordo com seus números atômicos. Essas variações, conhecidas como propriedades periódicas, manifestam-se ao longo da tabela, sendo exemplos delas: raio atômico, eletronegatividade e eletropositividade (FELTRE, 2004).

A classificação em blocos na tabela decorre da maneira como os elétrons se distribuem nas camadas eletrônicas de cada átomo. Os blocos expressam a ordem de preenchimento dos orbitais: o bloco s abrange elementos como hidrogênio, hélio e os metais alcalinos; o bloco p inclui elementos variados, como oxigênio, flúor, cloro e todos os metaloides; o bloco d engloba os metais de transição, tais como ferro, cobre e zinco, localizados na região central da tabela; e o bloco f, posicionado inferiormente, reúne os lantanídeos e actinídeos, como urânio e cério.

A repetição de certos padrões, denominada periodicidade, fundamenta a formulação da lei periódica e o desenvolvimento da tabela periódica. Essa periodicidade implica que elementos localizados em posições semelhantes apresentam propriedades análogas, como tamanho atômico, tendência à perda ou ganho de elétrons e energia necessária para a remoção de um elétron. Essa regularidade resulta da configuração eletrônica peculiar de cada elemento, determinando suas propriedades químicas e comportamentos característicos.

### Propriedades da tabela periódica {#propriedades-da-tabela-periodica}
---

Diversas propriedades químicas seguem padrões ao longo da tabela, facilitando a comparação e compreensão do comportamento dos elementos. A energia de ionização, por exemplo, refere-se à quantidade de energia necessária para que um átomo perca um elétron, refletindo a força com que mantém seus elétrons. Já a afinidade eletrônica diz respeito à energia liberada quando um átomo recebe um elétron, indicando sua capacidade de atrair elétrons – ambos os parâmetros variam de maneira previsível entre os elementos.

O raio atômico, definido pela distância entre o núcleo e a camada mais externa de elétrons, corresponde ao tamanho do átomo e apresenta variação sistemática conforme a posição do elemento na tabela.

<div class="text-center">
    <figcaption>Figura 2: Variação das propriedades periódicas na tabela periódica.</figcaption>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Periodic_trends_-_pt_edition.svg/600px-Periodic_trends_-_pt_edition.svg.png" class="img-fluid" alt="Diagrama mostrando as tendências periódicas da tabela periódica." />
    <figcaption>Fonte: <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Periodic_trends_-_pt_edition.svg/600px-Periodic_trends_-_pt_edition.svg.png" target="_blank">https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Periodic_trends_-_pt_edition.svg/600px-Periodic_trends_-_pt_edition.svg.png</a></figcaption>
</div>
<div class="sr-only">
    <p>Descrição detalhada da imagem: A imagem mostra a tabela periódica dos elementos em forma de retângulo dividido em pequenos quadrados (cada um representando um elemento químico). Sobre essa tabela, há setas coloridas que indicam como algumas propriedades periódicas variam de acordo com a posição dos elementos.</p>
    <p>Raio atômico (tamanho do átomo):</p>

    <ul>
        <li>Representado por uma seta azul grossa apontando de cima para baixo (mostrando que aumenta ao descer na tabela). </li>
        <li>Outra seta azul aponta da direita para a esquerda, indicando que o raio também cresce nesse sentido. </li>
        <li>
            Em resumo: átomos maiores estão mais à esquerda e embaixo na tabela. </li>
    </ul>

    <p>Energia de ionização (energia para retirar um elétron): </p>

    <ul>
        <li>Uma seta vermelha apontando da esquerda para a direita, mostrando que essa energia cresce nesse sentido. </li>
        <li>Outra seta vermelha aponta de baixo para cima, reforçando que também cresce ao subir na tabela. </li>
        <li>Isso significa que é mais difícil retirar elétrons de elementos localizados no canto superior direito (como o flúor). </li>
    </ul>

    <p>Afinidade eletrônica (energia liberada ao ganhar um elétron): </p>

    <ul>
        <li>Representada por uma seta marrom apontando da esquerda para a direita e outra de baixo para cima. </li>
        <li>Indica que os elementos no canto superior direito tendem a atrair elétrons com mais facilidade. </li>
    </ul>

    <p>Características metálicas: </p>

    <ul>
        <li>Uma seta cinza-escura atravessa a tabela do canto superior direito para o canto inferior esquerdo, mostrando que a tendência metálica aumenta nesse sentido. </li>
        <li>Ou seja, os metais predominam na parte esquerda e inferior da tabela (como sódio e cálcio). </li>
    </ul>

    <p>Características não-metálicas: </p>

    <ul>
        <li>Uma seta marrom mais clara atravessa a tabela do canto inferior esquerdo para o canto superior direito, indicando que as propriedades não-metálicas crescem nesse sentido. </li>
        <li>Assim, os não-metais estão mais concentrados na parte superior direita (como oxigênio, nitrogênio e cloro). </li>
    </ul>

    <p>Fim da descrição detalhada da imagem.</p>
</div>

Além dessas tendências, nota-se uma clara distinção entre os grupos de elementos: metais, em geral sólidos à temperatura ambiente, bons condutores de calor e eletricidade, maleáveis e dúcteis, localizam-se predominantemente à esquerda da tabela; já os não metais, que podem ser encontrados nos estados sólido, líquido ou gasoso e não conduzem calor e eletricidade com eficiência, distribuem-se principalmente à direita.

A tabela periódica, portanto, vai além de uma simples listagem de símbolos: sua organização permite identificar tendências, semelhanças e diferenças, facilitando a compreensão das propriedades químicas e do comportamento dos elementos.

No contexto educacional, especialmente em situações onde recursos visuais não estão disponíveis, como para pessoas cegas ou com baixa visão, é essencial o uso de tecnologias assistivas – leitores de tela, materiais táteis e abordagens pedagógicas inclusivas –, permitindo o acesso pleno ao conteúdo e assegurando a participação no processo de aprendizagem.

## Tecnologias assistivas no ensino de Química {#tecnologias-assistivas-no-ensino-de-quimica}
---

De acordo com a Lei nº 13.146 de 6 de julho de 2015, que institui a Lei Brasileira de Inclusão da Pessoa com Deficiência (BRASIL, 2015), em seu Art. 3º III, tecnologias assistivas são:

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"[...] produtos, equipamentos, dispositivos, recursos, metodologias, estratégias, práticas e serviços que objetivem promover a funcionalidade, relacionada à atividade e à participação da pessoa com deficiência ou com mobilidade reduzida, visando à sua autonomia, independência, qualidade de vida e inclusão social."</p>
  <footer class="text-light">BRASIL, 2015</footer>
</blockquote>

Em síntese, tecnologias assistivas compreendem instrumentos e recursos destinados a viabilizar a participação plena de pessoas com deficiência na sociedade, promovendo autonomia, qualidade de vida e inclusão social. No contexto educacional, especialmente no ensino de Química, tais soluções asseguram que estudantes com deficiência visual, como cegos ou pessoas com baixa visão, tenham acesso equitativo ao conteúdo pedagógico. 

A aplicação dessas ferramentas é potencializada quando alinhada ao conceito de desenho universal que, conforme o art. 3º, inciso III, da Lei Brasileira de Inclusão (Lei nº 13.146/2015), é definido como:

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"[...] concepção de produtos, ambientes, programas e serviços a serem usados por todas as pessoas, sem necessidade de adaptação ou de projeto específico, incluindo os recursos de tecnologia assistiva."</p>
  <footer class="text-light">BRASIL, 2015</footer>
</blockquote>

Esta abordagem preconiza que, desde sua concepção, produtos e ambientes devem ser projetados para atender ao maior número possível de usuários, independentemente de suas características físicas, sensoriais ou cognitivas, dispensando adaptações posteriores.

As tecnologias assistivas apresentam distintos níveis de complexidade e sofisticação. As denominadas <em>low-tech</em> abrangem alternativas simples, como:

- <strong>planos inclinados para leitura</strong>;
- <strong>lápis de ponta grossa</strong>;
- <strong>marcadores de página em Braille</strong>;
- <strong>materiais táteis confeccionados artesanalmente</strong>.

Já as <em>high-tech</em> englobam recursos industrializados, tais como:

- <strong><em>softwares</em> leitores de tela</strong>;
- <strong>impressoras Braille</strong>;
- <strong>lupas eletrônicas</strong>;
- <strong>dispositivos de ampliação de tela</strong>.

Para fins de organização, essas tecnologias podem ser classificadas em categorias específicas, contemplando desde atividades diárias até o lazer. Exemplos incluem:

- <strong>Auxílios para a vida diária e prática</strong>: engrossadores de lápis, cadernos com pauta grossa, utensílios de cozinha adaptados.
- <strong>Comunicação alternativa (CAA)</strong>: pranchas de comunicação, vocalizadores de fala, intérpretes virtuais de <em>Libras</em>.
- <strong>Acessibilidade ao computador</strong>: teclados adaptados, leitores de tela, <em>softwares</em> de comando de voz.
- <strong>Controle de ambiente</strong>: sistemas de iluminação controlados por voz, torneiras com sensor, assistentes virtuais como <em>Alexa</em> e <em>Google Home</em>.
- <strong>Projetos arquitetônicos acessíveis</strong>: rampas, pisos táteis, banheiros acessíveis.
- <strong>Órteses e próteses</strong>: próteses de membros, aparelhos ortopédicos, posicionadores posturais.
- <strong>Adequação postural</strong>: almofadas especiais, planos inclinados, encostos anatômicos.
- <strong>Auxílios de mobilidade</strong>: cadeiras de rodas, bengalas, andadores.
- <strong>Recursos para baixa visão e cegueira</strong>: lupas, ampliadores, <em>Braille</em>, relógios falantes.
- <strong>Recursos para surdez</strong>: legendas, sistemas de alerta vibratório em celulares, sinais visuais de alerta.
- <strong>Mobilidade veicular</strong>: automóveis adaptados, elevadores em ônibus.
- <strong>Esporte e lazer</strong>: bolas com guizo, dominó em alto relevo, baralhos em <em>Braille</em>.

Categorias da Tecnologia Assistiva (BERSCH, 2013).

Os exemplos apresentados evidenciam a abrangência e versatilidade das tecnologias assistivas, destacando seu potencial para transformar processos educacionais, notadamente nas aulas de Química. Além disso, essas tecnologias também impactam outros campos do conhecimento, garantindo efetivo acesso e inclusão para estudantes com deficiência.

## Internet e desenvolvimento Web como tecnologias assistivas {#internet-e-desenvolvimento-web-como-tecnologias-assistivas}
---

A internet é uma rede global de computadores que viabiliza o compartilhamento e a troca de informações, independentemente da localização dos usuários. A web, por sua vez, representa o conjunto de páginas e conteúdos interligados, acessíveis através de endereços e links por meio de navegadores como Google Chrome, Mozilla Firefox ou Safari.

O desenvolvimento web engloba o planejamento, criação e manutenção dos recursos disponíveis na internet, envolvendo o uso de linguagens de programação e tecnologias específicas para garantir funcionalidade, organização e experiência de uso em sites e aplicações (OLIVEIRA, 2021).

Essa área se estrutura em três domínios principais:

- <em>Front-end</em>: corresponde à camada de apresentação e interação com o público, incluindo interfaces visuais, componentes estilizados e controles interativos. Utiliza tecnologias como <em>HTML</em>, <em>CSS</em> e <em>JavaScript</em> para criar estruturas semânticas, estilos e comportamentos dinâmicos, sempre priorizando acessibilidade e experiência do usuário.

- <em>Back-end</em>: refere-se à infraestrutura não visível ao público, envolvendo servidores, bancos de dados e camadas lógicas subjacentes. Este domínio é responsável pelo processamento de dados, autenticação, autorização, segurança da informação e execução de operações complexas que sustentam o funcionamento das aplicações.

- <em>Full Stack</em>: integra competências técnicas que abrangem tanto o <em>front-end</em> quanto o <em>back-end</em>, permitindo ao profissional implementar soluções completas e coordenadas em todas as camadas da arquitetura de <em>software</em>.

Ao criar conteúdos para a internet, é possível adotar tecnologias que considerem a acessibilidade desde o início, tornando a web uma importante tecnologia assistiva. Um dos principais fatores que contribuem para isso é a versatilidade da plataforma.

Um site ou aplicativo não é apenas uma imagem estática; ele pode ser construído com diferentes camadas de informação que se complementam, atendendo a diversas necessidades. Por exemplo, enquanto um gráfico pode ser inacessível para uma pessoa cega, um código bem estruturado por trás desse gráfico pode descrever cada um de seus pontos e tendências de forma detalhada, permitindo que a informação seja lida por um leitor de telas.

Essa abordagem se alinha com o conceito de Desenho Universal, que busca criar produtos e ambientes que sejam acessíveis a todas as pessoas, independentemente de suas necessidades específicas. A Internet e o desenvolvimento Web, quando feitos com acessibilidade, podem ser usados para romper barreiras de aprendizado, garantindo que o conteúdo seja acessível para todas as pessoas. 

Para isso, é essencial seguir as diretrizes de acessibilidade, como o <em>WCAG</em> (<em>Web Content Accessibility Guidelines</em>). O <em>WCAG</em> é um conjunto de recomendações internacionais que orienta a criação de conteúdos <em>Web</em> acessíveis para pessoas com deficiência.

Quando um site segue essas diretrizes, ele se torna compatível com tecnologias assistivas, como leitores de tela e linhas <em>Braille</em>. A inclusão, nesse sentido, não é um recurso extra, mas parte do processo de criação. 

Dessa maneira, a transformação da internet e do desenvolvimento <em>web</em> em tecnologias assistivas acontece por meio de práticas de codificação e <em>design</em> que tornam as informações legíveis não apenas visualmente, mas também semanticamente. Isso significa que o conteúdo é organizado de forma lógica e estruturada, permitindo que as tecnologias assistivas o interpretem e o transmitam de maneira correta. 

Algumas dessas práticas incluem os aspectos descritos a seguir.

### <em>HTML</em> Semântico {#html-semantico}
---

Refere-se à utilização de elementos de código que explicitam a função estrutural de cada componente da página. 

Em contraposição ao uso indiscriminado de estruturas genéricas como <em>&lt;div&gt;</em> para todos os elementos, os desenvolvedores implementam <em>tags</em> específicas como <em>&lt;h1&gt;</em> para títulos principais, <em>&lt;p&gt;</em> para conteúdo textual em parágrafos, <em>&lt;ul&gt;</em> para enumerações não ordenadas e <em>&lt;ol&gt;</em> para sequências numeradas, proporcionando maior clareza estrutural.

Os <em>softwares</em> leitores de tela identificam essas marcações semânticas e transmitem ao usuário informações sobre a organização hierárquica do conteúdo, facilitando a navegação e compreensão contextual. 

### Texto Alternativo em Imagens (<em>Alt Text</em>) {#texto-alternativo-em-imagens-alt-text}
---

O texto alternativo constitui uma descrição textual associada a elementos imagéticos. Esta descrição é implementada no código <em>HTML</em> mediante o atributo <em>alt</em> na <em>tag</em> <em>&lt;img&gt;</em>. Considerando-se que os leitores de tela não processam conteúdo visual diretamente, a interpretação do texto alternativo viabiliza a compreensão do conteúdo imagético por pessoas cegas.

No contexto do ensino de Química, representações gráficas de estruturas moleculares podem ser complementadas com textos alternativos que detalham sua composição, como no exemplo:

<div class="text-center">
    <figcaption>Figura 3: Estrutura molecular do benzeno.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/dde96d0f-0607-4ab3-d3ec-51f9825b0300/public" class="img-fluid shadow" alt="Estrutura molecular do benzeno (C6H6), representada por um hexágono regular com seis átomos de carbono nos vértices. Cada carbono está conectado aos adjacentes por ligações alternadas entre simples (linha contínua) e duplas (linha tracejada), formando um sistema de elétrons deslocalizados. Cada carbono também está ligado a um átomo de hidrogênio que aponta para fora do hexágono." />
    <figcaption>Fonte: <a href="https://upload.wikimedia.org/wikipedia/commons/2/23/Benzene-2D-flat.png" target="_blank">https://upload.wikimedia.org/wikipedia/commons/2/23/Benzene-2D-flat.png</a></figcaption>
</div>

Onde a imagem é implementada no código <em>HTML</em> da seguinte forma:

```html
<img src="https://upload.wikimedia.org/wikipedia/commons/2/23/Benzene-2D-flat.png" class="img-fluid bg-light" alt="Estrutura molecular do benzeno (C6H6), representada por um hexágono regular com seis átomos de carbono nos vértices. Cada carbono está conectado aos adjacentes por ligações alternadas entre simples (linha contínua) e duplas (linha tracejada), formando um sistema de elétrons deslocalizados. Cada carbono também está ligado a um átomo de hidrogênio que aponta para fora do hexágono." />
```
{: .bg-dark .text-light .p-3}

Na implementação consta o atributo <em>alt</em> que descreve detalhadamente a estrutura molecular do benzeno, permitindo que usuários de leitores de tela compreendam o conteúdo visual.

### Compatibilidade com Leitores de Telas {#compatibilidade-com-leitores-de-telas}
---

Os leitores de tela compreendem aplicativos computacionais que convertem o conteúdo visual exibido em formato audível ou tátil através de dispositivos <em>Braille</em>. A implementação de <em>sites</em> e aplicações deve assegurar que tais <em>softwares</em> possam interagir eficientemente com todos os componentes da interface, incluindo elementos interativos como botões, <em>hiperlinks</em> e estruturas de navegação.

A inadequação nessa compatibilidade representa um impedimento significativo ao acesso informacional para pessoas com deficiência visual, transformando potenciais ferramentas de inclusão em obstáculos adicionais à participação plena na sociedade digital.

### <em>Design</em> de Alto Contraste e Tamanho de Fonte Ajustável: {#design-de-alto-contraste-e-tamanho-de-fonte-ajustavel}
---

Para indivíduos com baixa visão, a implementação de recursos que permitam a personalização do contraste cromático e da dimensão tipográfica apresenta-se como fator determinante para a acessibilidade. O desenvolvimento <em>web</em> contemporâneo incorpora funcionalidades que viabilizam a customização destes parâmetros visuais, proporcionando autonomia ao usuário para adequar a apresentação do conteúdo às suas necessidades perceptivas específicas. 

### <em>WAI-ARIA</em> (<em>Accessible Rich Internet Applications</em>) {#wai-aria-accessible-rich-internet-applications}
---

<em>WAI-ARIA</em> constitui uma especificação técnica composta por um conjunto de atributos complementares à estrutura <em>HTML</em>, desenvolvida pelo <em>W3C</em> com o propósito de aprimorar a acessibilidade em aplicações <em>web</em> com interfaces dinâmicas e interativas. Tais atributos proporcionam metadados semânticos referentes à função, estado e propriedades dos elementos constituintes da interface, permitindo que tecnologias assistivas interpretem adequadamente a estrutura informacional e os comportamentos funcionais dos componentes interativos.

Esta especificação apresenta particular relevância na implementação de componentes de interface complexos, como sistemas de navegação por abas, menus expansíveis e caixas de diálogo modal, contextos nos quais a semântica estrutural nativa do <em>HTML</em> pode revelar-se insuficiente para descrever com precisão o comportamento e as relações entre os elementos interativos.

### Acessibilidade no Código {#acessibilidade-no-codigo}
---

As linguagens de programação contemporâneas e os ambientes de desenvolvimento integrado oferecem recursos especializados orientados à implementação de interfaces que contemplem os requisitos de acessibilidade digital. Na estruturação de formulários interativos, preconiza-se o estabelecimento de associações explícitas entre campos de entrada e seus respectivos rótulos descritivos, mediante elementos e atributos semânticos apropriados, assegurando que tecnologias assistivas possam comunicar adequadamente a função e o propósito de cada componente do formulário aos usuários que dependem de leitores de tela.

Analogamente, a disponibilização de conteúdo audiovisual requer a incorporação de recursos complementares como legendas sincronizadas, transcrições textuais e audiodescrição, garantindo que pessoas com deficiência auditiva ou surdez possam acessar integralmente as informações veiculadas em formato sonoro, em consonância com os princípios de acessibilidade comunicacional e as diretrizes técnicas estabelecidas por padrões internacionais.

A internet, enquanto infraestrutura global de comunicação e disseminação de informações, conjugada ao desenvolvimento web como disciplina técnica e metodológica, constitui um ecossistema tecnológico com potencial transformador para a superação de barreiras educacionais. A adoção sistemática de práticas e princípios de design e implementação orientados à acessibilidade digital possibilita que conteúdos científicos de elevada complexidade conceitual e representacional, particularmente em disciplinas com forte componente visual como a Química, tornem-se acessíveis e compreensíveis para todos os indivíduos, independentemente de suas especificidades sensoriais, cognitivas ou motoras.

Esta abordagem fundamenta-se no reconhecimento de que a inclusão digital e educacional não constitui uma adaptação excepcional, mas resulta de decisões arquiteturais e metodológicas deliberadas, incorporadas desde a concepção dos recursos informacionais. Mediante a aplicação consistente destes princípios, a internet e as tecnologias de desenvolvimento web transcendem sua função comunicacional primária e consolidam-se como tecnologias assistivas de elevado impacto, contribuindo significativamente para a democratização do conhecimento e a promoção da equidade educacional.

## Desenvolvimento de uma Tabela Periódica Acessível {#desenvolvimento-de-uma-tabela-periodica-acessivel}
---

Considerando os desafios apresentados, foi desenvolvida uma tabela periódica com foco prioritário na acessibilidade. Este recurso foi concebido com base em princípios fundamentais, visando proporcionar facilidade de uso a qualquer pessoa, independentemente das suas capacidades visuais.

Foram definidos os seguintes critérios de acessibilidade:

- **Compatibilidade com leitores de tela:** A estrutura da tabela foi planejada para garantir que usuários desses recursos possam acessar, compreender e interagir eficientemente com todas as informações apresentadas.

- **Adaptabilidade:** O design responsivo permite que a tabela seja visualizada adequadamente em diferentes dispositivos, como smartphones, tablets ou computadores. O conteúdo permanece íntegro independentemente do tamanho do texto ou das restrições visuais da pessoa usuária, incluindo navegação tanto em modo retrato (vertical) quanto paisagem (horizontal), sem distorções.

- **Independência das cores:** As relações entre os elementos químicos são comunicadas por outros sinais e descrições, além das cores, assegurando plena compreensão mesmo por pessoas com deficiência na percepção cromática.

- **Alto contraste:** São disponibilizadas opções de cores com elevado destaque, como fundo preto e letras brancas, além de tons de cinza, melhorando a legibilidade para usuários com baixa visão.

- **Tamanho do texto ajustável:** É possível modificar o tamanho da fonte conforme a necessidade, sem prejuízo à integridade ou clareza das informações.

- **Integração com VLibras:** Um botão dedicado ao VLibras (um recurso de tradução automática para a Língua Brasileira de Sinais) possibilita a conversão do conteúdo textual para Libras, ampliando a acessibilidade para pessoas surdas.

O propósito central da Tabela Periódica Acessível é assegurar precisão semântica, mantendo o significado original do conteúdo fielmente preservado. Materiais considerados fidedignos (fiéis) não apresentam alterações, distorções ou modificações em seu sentido autêntico.

Ressalta-se que a interação entre tecnologias assistivas e conteúdos desprovidos de acessibilidade pode comprometer a transmissão adequada das informações, impactando especialmente áreas de ciências exatas e tecnológicas. Portanto, a criação de recursos acessíveis é essencial para garantir que todos tenham acesso equitativo ao conhecimento científico.

Compreender uma tabela periódica representa um desafio significativo para pessoas cegas ou com baixa visão, mesmo utilizando leitores de tela. A complexidade visual associada aos símbolos, números e agrupamentos dificulta a interpretação auditiva, particularmente quando as descrições não são estruturadas adequadamente.

A maioria das soluções online existentes negligencia práticas de acessibilidade, dificultando a correta assimilação dos dados e prejudicando o aprendizado de diversos grupos, incluindo pessoas cegas, daltônicas, disléxicas ou com baixa visão. Diante desse cenário, a criação de uma tabela periódica acessível torna-se imprescindível para garantir que todos os estudantes possam compreender e interagir com esse conteúdo fundamental da Química.

Adicionalmente, a solução proposta foi otimizada para ambientes com conexão limitada à internet e dispositivos de menor desempenho, priorizando leveza e economia de dados móveis. Essa abordagem visa ampliar o acesso ao recurso, especialmente em regiões com infraestrutura tecnológica restrita, garantindo que mais pessoas possam usufruir da tabela periódica acessível sem enfrentar barreiras técnicas.

### Metodologia {#metodologia}
---

A implementação da Tabela Periódica Acessível seguiu um ciclo iterativo composto por descoberta, prototipagem, testes com pessoas usuárias, ajustes e otimizações, orientado por quatro metas centrais:

- Compatibilidade com Tecnologias Assistivas: Garantir que a ferramenta seja plenamente funcional com leitores de tela, linhas Braille e lupas eletrônicas, por meio do uso de HTML semântico, recursos WAI-ARIA e adequada gestão de foco.

- Responsividade e Baixo Custo Cognitivo: Oferecer uma experiência de uso fluida em qualquer dispositivo, com navegação simplificada, áreas de toque amplas e um layout que se adapta sem comprometer a estrutura da informação.

- Configurabilidade Visual: Permitir que os usuários ajustem a apresentação visual da ferramenta (contraste, tamanho do texto, etc.) de acordo com suas necessidades, com as preferências sendo salvas entre as sessões.

- Fidelidade Semântica do Conteúdo: Assegurar que todas as informações e relações químicas (períodos, grupos, categorias) sejam transmitidas com precisão, sem depender exclusivamente de pistas visuais, como cores ou disposição espacial.

Para alcançar esses objetivos, a solução foi projetada com uma arquitetura técnica em três camadas, separando responsabilidades e facilitando a manutenção.

### Arquitetura Técnica em Três Camadas {#arquitetura-tecnica-em-tres-camadas}
---

**1. Camada de Controles Globais (A11y Toolbar)**

Essa camada consiste em uma barra de ferramentas de acessibilidade (<em>A11y Toolbar</em>) presente em todas as páginas do <em>site</em>. Ela permite que os usuários personalizem a experiência visual conforme suas necessidades. As configurações são salvas no <em>localStorage</em> do navegador para persistirem entre as visitas e, a cada alteração, um anúncio audível é realizado para usuários de leitores de tela, por meio de uma região <em>aria-live</em>. Os controles incluem:

- <strong>Ajuste de texto</strong>: altera o tamanho da fonte.
- <strong>Alto contraste e contraste negativo</strong>: modos de visualização com maior luminância.
- <strong>Escala de cinza</strong>: remove a saturação de cores.
- <strong>Sublinhado de <em>links</em> e fonte aprimorada</strong>: facilitam a identificação dos elementos interativos e a leitura.

Além disso, o <em>plugin</em> <em>VLibras</em> é integrado a essa camada, com seu posicionamento ajustado dinamicamente para não sobrepor outros controles.

**2. Camada de Interface da Ferramenta**

Corresponde à página principal da tabela periódica, estruturada para garantir uma navegação clara e acessível. Seus principais componentes são:

- <strong><em>Link</em> de Pulo (<em>Skip Link</em>)</strong>: permite que usuários de teclado e leitores de tela saltem diretamente para o conteúdo principal.
- <strong>Painel de Controle</strong>: contém botões de alternância (<em>toggle</em>) para selecionar os modos de visualização ("Por Períodos", "Por Grupos" e "Por Categorias") e para ativar o sistema de cores opcional. As cores estão disponíveis como reforço visual para quem as percebe, mas não são essenciais à compreensão das relações químicas.
- <strong>Modais Informativas</strong>: janelas de diálogo acessíveis ("Como Usar" e "Saiba Mais") fornecem contexto e instruções sobre a ferramenta e como navegar por ela. Além disso, há uma janela modal de créditos com informações sobre as pessoas envolvidas no desenvolvimento.
- <strong><em>Modal</em> de Elemento</strong>: ao selecionar um elemento, uma janela <em>modal</em> detalhada é exibida, contendo todas as suas informações químicas (número atômico, massa, distribuição eletrônica etc.) em formato textual e linear.

**3. Camada de Lógica e Geração de Conteúdo (JavaScript)**

Essa camada é o núcleo funcional da ferramenta, composta por quatro <em>scripts</em> modulares que gerenciam os dados e a interatividade:

- <strong>tabela-periodica.js</strong>: contém o <em>array</em> com os dados brutos de todos os elementos químicos, servindo como a "única fonte de verdade" para a aplicação.
- <strong>tabela-periodica-grupos.js</strong>: responsável por renderizar a visualização "Por Grupos". Agrupa os elementos por suas colunas na tabela periódica e gera dinamicamente o <em>HTML</em> correspondente.
- <strong>tabela-periodica-categorias.js</strong>: renderiza a visualização "Por Categorias". Esse <em>script</em> agrupa os elementos com base em suas propriedades químicas (ex: "Metais Alcalinos", "Gases Nobres") e os apresenta sob títulos hierárquicos, como "Metais" (categoria principal) e "Metais de Transição" (subcategoria).
- <strong>tabela-periodica-colors.js</strong>: gerencia o sistema de cores opcional. Aplica classes <em>CSS</em> aos elementos com base em sua categoria química e utiliza um <em>MutationObserver</em> para garantir que a coloração seja aplicada corretamente, mesmo quando os elementos são recriados dinamicamente ao trocar o modo de visualização.

Essa arquitetura modular garante que cada parte do sistema tenha uma responsabilidade única, tornando o código mais organizado, eficiente e fácil de manter.

A decisão de utilizar <em>JavaScript</em> puro (também conhecido como <em>Vanilla JS</em>), sem o uso de <em>frameworks</em>, foi estratégica, pois buscou-se reduzir a necessidade de carregamento de bibliotecas externas, o que poderia aumentar o tamanho total dos arquivos e impactar negativamente o desempenho, especialmente em conexões lentas.

Além disso, a ausência de uma camada de abstração complexa reduz a carga de processamento no dispositivo do usuário, garantindo que a ferramenta funcione de maneira fluida mesmo em computadores e smartphones mais antigos ou com recursos limitados.

Adicionalmente, a renderização de toda a interface no lado do cliente (client-side rendering) oferece uma vantagem substancial em ambientes de baixa conectividade. Após o carregamento inicial dos scripts, todas as interações, como alternar entre os modos de visualização ou abrir a janela modal de um elemento, são processadas instantaneamente no navegador, sem a necessidade de novas requisições ao servidor.

Isso não apenas torna a experiência de uso mais ágil e responsiva, mas também minimiza o consumo de dados, assegurando que, uma vez carregada, a ferramenta permaneça totalmente funcional mesmo que a conexão com a internet seja perdida ou fique instável. Tecnicamente, pode não ser a abordagem mais moderna, mas é a que melhor atende às necessidades específicas de acessibilidade e usabilidade em contextos desafiadores de conectividade, onde se pretende que a ferramenta seja utilizada.

### Princípios de Acessibilidade Implementados {#principios-de-acessibilidade-implementados}
---

Quatro princípios fundamentais orientaram todas as decisões técnicas e de design:

**1. Independência de Modalidade Sensorial**

As cores são empregadas exclusivamente como reforço visual, nunca como única forma de transmitir informação. Cada categoria química é identificada não apenas por cor, mas também por:

- Texto explícito no rótulo de cada elemento
- Agrupamento semântico em seções com cabeçalhos claros
- Atributos ARIA descritivos
- Informações detalhadas nas janelas modais

Essa abordagem garante que pessoas cegas, com baixa visão ou com deficiências na percepção cromática (daltonismo) tenham acesso completo a todas as informações.

**2. Compatibilidade com Tecnologias Assistivas**

Todos os componentes interativos foram implementados com os atributos <em>WAI-ARIA</em> apropriados:

- <strong><em>role</em></strong>: define o papel semântico do elemento (<em>dialog</em>, <em>button</em>, <em>navigation</em> etc.)
- <strong><em>aria-label</em> ou <em>aria-labelledby</em></strong>: fornece rótulos acessíveis
- <strong><em>aria-pressed</em></strong>: indica o estado de botões de alternância (<em>toggle</em>)
- <strong><em>aria-expanded</em></strong>: comunica se um componente expansível está aberto ou fechado
- <strong><em>aria-hidden</em></strong>: oculta elementos puramente decorativos de leitores de tela
- <strong><em>aria-live</em></strong>: anuncia mudanças dinâmicas no conteúdo

O gerenciamento programático de foco assegura que, ao abrir janelas modais, o foco seja capturado e direcionado ao primeiro elemento focável dentro da janela. Ao fechá-la, o foco retorna precisamente ao botão que a acionou, preservando o contexto de navegação do usuário.

**3. Configurabilidade Visual Personalizada**

Reconhecendo a diversidade de necessidades visuais, foram implementados controles que permitem personalização abrangente:

- <strong>Alto contraste</strong>: relação de luminância superior a 7:1 (nível <em>AAA</em> do <em>WCAG</em> - <em>Web Content Accessibility Guidelines</em>)
- <strong>Contraste negativo</strong>: inversão de polaridade para usuários sensíveis a fundos claros
- <strong>Escala de cinza</strong>: remoção completa de informação cromática
- <strong>Ajuste de tamanho de texto</strong>: escalonamento de 80% a 200% sem quebra de <em>layout</em>
- <strong>Sublinhado de <em>links</em></strong>: identificação visual independente de cor
- <strong>Fontes aprimoradas</strong>: tipografias com maior distinção entre caracteres similares

Todas essas configurações são salvas em localStorage e restauradas automaticamente em visitas subsequentes.

**4. Design Responsivo e Performático**

A interface foi otimizada para funcionar eficientemente em:

- <strong>Dispositivos móveis</strong> (<em>smartphones</em> e <em>tablets</em>)
- <strong>Computadores <em>desktop</em> e <em>notebooks</em></strong>
- <strong>Conexões de internet lentas ou intermitentes</strong>
- <strong>Dispositivos com poder de processamento limitado</strong>

O código <em>JavaScript</em> é modular e carregado de forma otimizada, executando apenas as funções necessárias para o modo de visualização ativo. As imagens são servidas através de <em>CDN</em> com redimensionamento automático, minimizando o consumo de dados.

A título de curiosidade, uma <em>CDN</em> (<em>Content Delivery Network</em> ou Rede de Distribuição de Conteúdo em português) é uma rede distribuída de servidores que entrega conteúdos da <em>web</em> de forma rápida e eficiente, reduzindo a latência e melhorando a performance do <em>site</em> para usuários em diferentes regiões geográficas. Nesse contexto, a utilização de uma <em>CDN</em> para hospedar as imagens da tabela periódica assegura que os usuários possam carregar o conteúdo visual rapidamente, independentemente de sua localização ou da qualidade de sua conexão com a internet.

### Validação e Testes {#validacao-e-testes}
---

A solução foi submetida a um processo rigoroso de validação, envolvendo:

**Testes com Usuários Reais:**

Pessoas cegas e com baixa visão, utilizando diferentes tecnologias assistivas (<em>NVDA</em>, <em>JAWS</em>, <em>VoiceOver</em>, <em>TalkBack</em>, lupas eletrônicas, linhas <em>Braille</em>), testaram a ferramenta em múltiplos dispositivos (<em>smartphones</em> <em>Android</em> e <em>iOS</em>, <em>tablets</em>, <em>notebooks</em> e computadores <em>desktop</em>). O <em>feedback</em> coletado foi incorporado iterativamente ao desenvolvimento.

Participaram dos testes usuários com variados níveis de familiaridade com tecnologia, garantindo que a solução fosse intuitiva e acessível para todos os perfis.

**Testes Automatizados:**

Ferramentas de validação automática foram empregadas para verificar:

- <strong>Contraste de cores</strong> (conformidade com <em>WCAG</em> <em>AA</em> e <em>AAA</em>)
- <strong>Estrutura semântica do <em>HTML</em></strong>
- <strong>Presença e adequação de atributos <em>ARIA</em></strong>
- <strong>Funcionalidade completa via navegação por teclado</strong>

**Revisão por Especialistas:**

Profissionais com deficiência visual especializados em acessibilidade digital, desenvolvedores de <em>software</em> com experiência em tecnologias assistivas, psicólogos e pedagogos com <em>expertise</em> em educação inclusiva revisaram a solução, fornecendo recomendações que foram incorporadas ao produto final.

## Resultados e Impacto {#resultados-e-impacto}
---

A metodologia aplicada resultou em uma ferramenta que demonstra a viabilidade técnica e pedagógica de tornar conteúdos científicos complexos mais acessíveis.

<div class="text-center">
    <figcaption>Figura 4: Botões de controle para alternar entre os modos de visualização da tabela periódica (visualização por períodos, grupos e categorias).</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/fa712b1a-0440-4eb2-911f-c2d6b1ad5c00/public" aria-hidden="true" class="img-fluid" />
    <figcaption>Fonte: Elaborada pelas autoras.</figcaption>
</div>

### Visualização por Períodos {#visualizacao-por-periodos}
---

Os elementos são dispostos em seções que correspondem aos períodos (linhas horizontais da tabela), o que fragmenta a tabela em partes menores e mais gerenciáveis — ideal para telas de smartphones, onde o conteúdo é apresentado verticalmente.

<div class="text-center">
    <figcaption>Figura 5: Demonstração da visualização por períodos, com elementos agrupados em seções correspondentes a cada linha da tabela.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/6f7c129b-9d6e-4a40-d20b-7cbb1d7bdb00/public" aria-hidden="true" class="img-fluid" />
    <figcaption>Fonte: Elaborada pelas autoras.</figcaption>
</div>

### Visualização por Grupos {#visualizacao-por-grupos}
---

Os elementos são organizados por grupos (colunas verticais), permitindo ao usuário explorar os elementos por propriedades químicas semelhantes. Essa forma de navegação também é mais amigável para telas pequenas.

<div class="text-center">
    <figcaption>Figura 6: Demonstração da visualização por grupos, com elementos organizados em colunas.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/550b29eb-4641-4cb6-59b9-6d4c77df1000/public" aria-hidden="true" class="img-fluid" />
    <figcaption>Fonte: Elaborada pelas autoras.</figcaption>
</div>

### Visualização por Categorias {#visualizacao-por-categorias}
---

Os elementos são agrupados por suas categorias químicas, organizados em quatro grandes grupos principais:

- Metais
- Semimetais
- Não Metais
- Outros (Hidrogênio)

Essa visualização facilita a compreensão das propriedades e comportamentos dos elementos ao agrupá-los por características químicas semelhantes.

Por exemplo, dentro da categoria "Metais", encontram-se subcategorias como Metais Alcalinos, Metais Alcalinoterrosos, Metais de Transição, Lantanídeos, Actinídeos e Outros Metais.

Na categoria "Não Metais", estão agrupados os Não Metais propriamente ditos, os Halogênios e os Gases Nobres. O Hidrogênio, por ser único, possui sua própria categoria em "Outros".

Essa organização permite ao usuário explorar a tabela periódica de forma mais didática, compreendendo as relações entre os elementos e suas classificações químicas.

<div class="text-center">
    <figcaption>Figura 7: Exemplo da categoria "Semimetais" na visualização por categorias.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/550b29eb-4641-4cb6-59b9-6d4c77df1000/public" aria-hidden="true" class="img-fluid" />
    <figcaption>Fonte: Elaborada pelas autoras.</figcaption>
</div>

<div class="text-center">
    <figcaption>Figura 8: Exemplo da categoria "Não Metais" na visualização por categorias.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/550b29eb-4641-4cb6-59b9-6d4c77df1000/public" aria-hidden="true" class="img-fluid" />
    <figcaption>Fonte: Elaborada pelas autoras.</figcaption>
</div>

Essa abordagem, que utiliza botões e seções menores, é fundamental para garantir a responsividade da aplicação. Em vez de forçar a adaptação de uma tabela grande a uma tela pequena, o design já foi pensado para dispositivos móveis.

### Painel de Controle {#painel-de-controle}
---

Há um painel de controle fixo na parte superior da janela, onde é possível alternar entre as visualizações por períodos, grupos e categorias, além de ativar ou desativar as cores na tabela.

<div class="text-center">
    <figcaption>Figura 9: Painel de controle da tabela periódica, com opções para alternar visualizações e ativar/desativar cores.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/fa712b1a-0440-4eb2-911f-c2d6b1ad5c00/public" aria-hidden="true" class="img-fluid" />
    <figcaption>Fonte: Elaborada pelas autoras.</figcaption>
</div>

Quando a visualização por períodos está ativada, o painel exibe uma seção chamada "Navegue pelos períodos da tabela", com botões para cada um dos 7 períodos, além dos botões para lantanídeos e actinídeos. Ao pressionar um desses botões, o usuário é direcionado diretamente para a seção correspondente na página.

<div class="text-center">
    <figcaption>Figura 10: Painel de navegação por períodos, com botões para cada período, lantanídeos e actinídeos.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/fa712b1a-0440-4eb2-911f-c2d6b1ad5c00/public" aria-hidden="true" class="img-fluid" />
    <figcaption>Fonte: Elaborada pelas autoras.</figcaption>
</div>

Na visualização por grupos, o painel exibe a seção "Navegue pelos grupos da tabela", com botões para cada um dos 18 grupos, além dos botões para lantanídeos e actinídeos. Ao pressionar um desses botões, o usuário é levado diretamente à seção correspondente.

<div class="text-center">
    <figcaption>Figura 11: Painel de navegação por grupos, com botões para os 18 grupos, lantanídeos e actinídeos.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/fa712b1a-0440-4eb2-911f-c2d6b1ad5c00/public" aria-hidden="true" class="img-fluid" />
    <figcaption>Fonte: Elaborada pelas autoras.</figcaption>
</div>

Na visualização por categorias, o painel exibe a seção "Navegue pelas categorias da tabela", com botões organizados hierarquicamente pelas quatro grandes categorias: Metais (com subcategorias como Alcalinos, Alcalinoterrosos, Transição etc.), Semimetais, Não Metais (incluindo Halogênios e Gases Nobres) e Outros (Hidrogênio). Ao pressionar um desses botões, o usuário é direcionado para a categoria ou subcategoria correspondente, facilitando a navegação por tipo de elemento químico.

<div class="text-center">
    <figcaption>Figura 12: Painel de navegação por categorias, com botões hierárquicos para cada tipo de elemento.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/fa712b1a-0440-4eb2-911f-c2d6b1ad5c00/public" aria-hidden="true" class="img-fluid" />
    <figcaption>Fonte: Elaborada pelas autoras.</figcaption>
</div>

### Cartões de Elementos Químicos {#cartoes-de-elementos-quimicos}
---

Cada elemento químico é apresentado em um cartão individual, exibindo informações essenciais como símbolo, nome e posição na tabela (período e coluna).

<div class="text-center">
    <figcaption>Figura 13: Cartão interativo de um elemento químico, exibindo informações essenciais.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/fa712b1a-0440-4eb2-911f-c2d6b1ad5c00/public" aria-hidden="true" class="img-fluid" />
    <figcaption>Fonte: Elaborada pelas autoras.</figcaption>
</div>

Esses cartões são interativos: ao clicar com o mouse, tocar na tela ou pressionar Enter, uma janela modal se abre, fornecendo informações detalhadas sobre o elemento, como símbolo, nome, número atômico, número de massa (massa atômica) e configuração eletrônica.

### <em>Modal</em> de Detalhes do Elemento {#modal-de-detalhes-do-elemento}
---

Ao acessar um cartão de elemento, seja clicando, tocando ou pressionando <em>Enter</em>, uma janela <em>modal</em> é aberta com informações detalhadas.

- **Gerenciamento de foco:** Ao abrir a <em>modal</em>, o foco é automaticamente direcionado para o primeiro elemento interativo (geralmente o botão de fechar no canto superior direito), garantindo que pessoas que navegam por teclado ou usam leitores de tela saibam imediatamente onde estão e possam fechar a janela facilmente.

- Ao fechar a <em>modal</em>, o foco retorna automaticamente para o cartão do elemento que foi acessado, evitando que o usuário se perca na página e precise procurar novamente onde estava antes de abrir a janela.

- **Estrutura semântica:** A <em>modal</em> utiliza elementos <em>HTML</em> semânticos apropriados, com atributos <em>ARIA</em> <em>role</em>="<em>dialog</em>" e <em>aria-modal</em>="<em>true</em>", informando aos leitores de tela que uma janela de diálogo foi aberta e alterando o modo de navegação.

- **Rotulagem acessível:** Cada <em>modal</em> possui um título claro (o nome do elemento), anunciado quando a janela é aberta. As informações são organizadas hierarquicamente com títulos (<em>&lt;h2&gt;</em>, <em>&lt;h3&gt;</em>) que permitem navegação rápida por marcos de referência.

**Informações apresentadas na <em>modal</em>**

A janela <em>modal</em> de cada elemento apresenta as seguintes informações:

- **Nome do elemento:** Apresentado como título principal da <em>modal</em>, sendo a primeira informação anunciada pelos leitores de tela.

- **Ilustração do elemento:** Uma imagem que mostra como o elemento aparece ou é utilizado no cotidiano. Por exemplo, para o carbono, pode ser uma ilustração de grafite ou diamante; para o oxigênio, uma representação de bolhas de ar.

- <strong>Grupo</strong>: Indica a família de elementos à qual pertence (por exemplo: "Metais Alcalinos", "Halogênios", "Gases Nobres"). Essa informação é fundamental para entender as propriedades químicas do elemento.

- <strong>Símbolo</strong>: A abreviatura química do elemento (exemplo: H para Hidrogênio, O para Oxigênio, Au para Ouro), apresentada de forma clara e acessível.

- <strong>Número atômico</strong>: Indica quantos prótons existem no núcleo do átomo, definindo a identidade do elemento e sua posição na tabela periódica.

- <strong>Número de massa (massa atômica)</strong>: Representa a soma de prótons e nêutrons no núcleo, indicando a massa aproximada do átomo.

- <strong>Distribuição eletrônica</strong>: Apresentada de duas formas complementares para garantir acessibilidade total:

  - <strong>Visual</strong>: Um diagrama ilustrativo mostrando o núcleo do átomo no centro e as camadas eletrônicas ao redor, com os elétrons distribuídos em suas respectivas posições. Essa representação visual auxilia quem enxerga a compreender espacialmente a organização dos elétrons.

<div class="text-center">
    <figcaption>Figura 14: Representação visual da distribuição eletrônica do Hidrogênio.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/fa712b1a-0440-4eb2-911f-c2d6b1ad5c00/public" aria-hidden="true" class="img-fluid" />
    <figcaption>Fonte: Elaborada pelas autoras.</figcaption>
</div>

  - <strong>Linear (textual)</strong>: A notação científica padrão da distribuição eletrônica, apresentada em formato de texto sequencial. Exemplo: Camada 1: 1s¹. A leitura dessa notação é direta, sequencial e construída usando atributos <em>ARIA</em> para garantir que leitores de tela anunciem corretamente cada parte da configuração eletrônica.

<div class="text-center">
    <figcaption>Figura 15: Modal de detalhes do elemento, exibindo informações completas e acessíveis.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/fa712b1a-0440-4eb2-911f-c2d6b1ad5c00/public" aria-hidden="true" class="img-fluid" />
    <figcaption>Fonte: Elaborada pelas autoras.</figcaption>
</div>

Diante do exposto, os principais resultados alcançados com a Tabela Periódica Acessível podem ser resumidos em quatro pontos essenciais:

- <strong>Preservação de Fidelidade Semântica</strong>: Todas as informações químicas são transmitidas com precisão absoluta, independentemente da modalidade sensorial utilizada para acessá-las.

- <strong>Promoção de Autonomia</strong>: Usuários navegam independentemente pela tabela periódica, acessam informações detalhadas sobre elementos específicos e compreendem as relações entre períodos, grupos e categorias sem necessidade de assistência externa.

- **Demonstração de Viabilidade:** A ferramenta comprova que, mediante aplicação rigorosa de padrões de acessibilidade e uso apropriado de tecnologias web, é possível criar recursos educacionais que atendam simultaneamente estudantes com e sem deficiência.

- **Estabelecimento de Padrões Replicáveis:** A arquitetura modular e as práticas implementadas podem ser adaptadas para o desenvolvimento de outras ferramentas educacionais inclusivas em diferentes áreas do conhecimento.

A evolução do projeto, desde versões iniciais com soluções improvisadas (uso inadequado de atributos alt, áudios pré-gravados que rapidamente se tornavam desatualizados) até a versão atual (com HTML semântico rigoroso, WAI-ARIA implementado corretamente, design responsivo e sistema modular de JavaScript), ilustra a importância da aplicação consistente de princípios de acessibilidade e da incorporação do feedback de usuários reais no processo de desenvolvimento iterativo.

## Considerações Finais {#consideracoes-finais}
---

A integração de tecnologias assistivas no ensino de Química, exemplificada pela criação de uma tabela periódica acessível, demonstra o potencial transformador dessas ferramentas para promover a inclusão educacional. A adoção de práticas de desenvolvimento web orientadas à acessibilidade não apenas amplia o acesso ao conhecimento científico, mas também fortalece a autonomia e a participação plena de estudantes com deficiência.

A experiência adquirida ao longo deste projeto reforça a necessidade de uma abordagem consciente e deliberada na criação de recursos educacionais, considerando desde o início as diversas necessidades dos usuários. A implementação de tecnologias assistivas deve ser vista não como um complemento opcional, mas como um componente essencial do design educacional inclusivo.

Os resultados alcançados evidenciam que, com planejamento adequado, é possível desenvolver ferramentas que atendam às exigências de acessibilidade sem comprometer a qualidade ou a complexidade do conteúdo científico. Este projeto serve como modelo replicável para futuras iniciativas que busquem promover a inclusão e a equidade no acesso ao conhecimento em diversas áreas do saber.

## Referências {#referencias}
---

<ul class="references-list text-light text-break ps-lg-4">
    <li class="mb-3">
    BERSCH, R. Classificações de Tecnologia Assistiva. Porto Alegre: Acessibilidade Brasil/Assistiva, 2013.
    </li>
    <li class="mb-3">
        BERSCH, R. Tecnologia Assistiva e Educação Inclusiva. In: <em>Ensaios Pedagógicos</em>. Brasília: Ministério da Educação, Secretaria de Educação Especial, 2006. p. 146.
    </li>
    <li class="mb-3">
    BRASIL. Lei nº 9.394, de 20 de dezembro de 1996. Estabelece as diretrizes e bases da educação nacional. <em>Diário Oficial da União</em>, Brasília, DF, v. 134, n. 248, 23 dez. 1996. Seção 1, p. 27834–27841.
    </li>
        <li class="mb-3">
            BRASIL. Lei nº 13.146, de 6 de julho de 2015. Institui a Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência).
        </li>
    <li class="mb-3">
    BRASIL. Decreto nº 3.298, de 20 de dezembro de 1999. Regulamenta a Lei nº 7.853/1989 e dispõe sobre a Política Nacional para a Integração da Pessoa Portadora de Deficiência.
    </li>
    <li class="mb-3">
        BRASIL. Ministério da Educação. Secretaria de Educação Especial. <em>Desenvolvendo competências para o atendimento das necessidades educacionais de alunos cegos e de alunos com baixa visão</em>. Brasília: MEC/SEESP, 2005.
    </li>
    <li class="mb-3">
        CONDE, A. J. M. Definindo cegueira e baixa visão.
    </li>
    <li class="mb-3">
        FELTRE, R. <em>Química Geral</em>. São Paulo: Editora Moderna, 2004.
    </li>
    <li class="mb-3">
        GALVÃO FILHO, T. As novas tecnologias na escola e no mundo atual: fator de inclusão social do aluno com necessidades especiais? In: <em>Anais do III Congresso Ibero-Americano de Informática na Educação Especial</em>. Fortaleza: MEC, 2002.
    </li>
    <li class="mb-3">
        GALVÃO FILHO, T.; DAMASCENO, L. Programa InfoEsp: Premio Reina Sofia 2007 de Rehabilitación y de Integración. <em>Boletín del Real Patronato Sobre Discapacidad</em>, Ministerio de Educación, Política Social y Deporte, Madrid, n. 63, p. 14–23, abr. 2008. ISSN 1696-0998.
    </li>
    <li class="mb-3">
    GARRUTTI DE LOURENÇO, B. A.; <em>et al.</em> <em>Acessibilidade para estudantes com deficiência visual: orientações para o ensino superior</em>. São Paulo: UNIFESP, 2020.
    </li>
    <li class="mb-3">
        IVANOVICH, A. C. F.; GESSER, M. Deficiência e capacitismo: correção dos corpos e produção de sujeitos (a)políticos. <em>Quaderns de Psicologia</em>, v. 22, n. 3, e1618, 2020.
    </li>
    <li class="mb-3">
        JACYNTHO, M. D. de A. <em>Processos para Desenvolvimento de Aplicações Web</em>. 2008. 25 f. Monografia (Bacharelado em Ciência da Computação) — PUC-Rio, 2008.
    </li>
    <li class="mb-3">
        LIMA, A. G. <em>JavaScript – Aplicações Interativas para a Web</em>.
    </li>
    <li class="mb-3">
        MANTOAN, M. T. E. A tecnologia aplicada à educação na perspectiva inclusiva. Mimeo, 2005.
    </li>
    <li class="mb-3">
        RABELLO, E. T.; PASSOS, J. S. Vygotsky e o desenvolvimento humano.
    </li>
    <li class="mb-3">
        REBONATTO, M. T. <em>Organização de Computadores – Notas de aula</em>. Passo Fundo, 2003.
    </li>
    <li class="mb-3">
        REIS, C. de A. R. <em>A baixa visão no meu caminho</em>. Aracaju: Editora Triunfo, 2015.
    </li>
    <li class="mb-3">
        SANTOS, E. C. dos; FERRÉ, F. <em>Introdução ao desenvolvimento Web usando HTML, CSS e PHP</em>.
    </li>
    <li class="mb-3">
        SIAULIYS, M. O. C.; ORMELEZI, E. M.; BRIANT, M. E. (Org.). <em>A deficiência visual associada à deficiência múltipla e o atendimento educacional especializado: encarando desafios e construindo possibilidades</em>. São Paulo: Laramara, 2010.
    </li>
    <li class="mb-3">
        SILVA, M. O. E. Inclusão e Formação Docente. <em>Eccos – Revista Científica</em>, v. 10, n. 2, p. 479–495, [s.d.].
    </li>
    <li class="mb-3">
    W3C – World Wide Web Consortium. <em>Web Content Accessibility Guidelines (WCAG) 2.2</em>. 05 out. 2023.
    </li>
    <li class="mb-3">
    W3C – World Wide Web Consortium. <em>Accessible Rich Internet Applications (WAI‑ARIA) 1.2</em>. 06 set. 2023.
    </li>
</ul>