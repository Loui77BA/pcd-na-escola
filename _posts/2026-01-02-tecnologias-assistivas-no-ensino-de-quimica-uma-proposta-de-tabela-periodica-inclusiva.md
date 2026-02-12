---
layout: post
title: "Tecnologias Assistivas no Ensino de Química: Uma Proposta de Tabela Periódica Acessível"
description: "Este artigo apresenta uma proposta de tabela periódica acessível para estudantes com deficiência visual, utilizando tecnologias WEB para implementar recursos de acessibilidade na ferramenta."
date: 2026-01-02 10:00:00 -0300
author: ["Louise Suelen"]
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
                <!-- 8.3 Validação e Testes -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#validacao-e-testes">
                        <span class="badge bg-secondary">8.3</span>
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
                <!-- 9.1 Análise dos Resultados -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#analise-dos-resultados">
                        <span class="badge bg-secondary">9.1</span>
                        Análise dos Resultados
                    </a>
                </li>
                <!-- 9.2 Ferramenta Disponível para Uso -->
                <li class="list-group-item bg-dark text-white border-0">
                    <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                       href="#ferramenta-disponivel-para-uso">
                        <span class="badge bg-secondary">9.2</span>
                        Ferramenta Disponível para Uso
                    </a>
                    <ul class="list-group list-group-flush ms-3">
                        <!-- 9.2.1 Modos de Visualização -->
                        <li class="list-group-item bg-dark text-white border-0">
                            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                               href="#modos-de-visualizacao">
                                <span class="badge bg-secondary">9.2.1</span>
                                Modos de Visualização
                            </a>
                        </li>
                        <!-- 9.2.2 Painel de Controle -->
                        <li class="list-group-item bg-dark text-white border-0">
                            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                               href="#painel-de-controle">
                                <span class="badge bg-secondary">9.2.2</span>
                                Painel de Controle
                            </a>
                        </li>
                        <!-- 9.2.3 Cartões de Elementos Químicos -->
                        <li class="list-group-item bg-dark text-white border-0">
                            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                               href="#cartoes-de-elementos-quimicos">
                                <span class="badge bg-secondary">9.2.3</span>
                                Cartões de Elementos Químicos
                            </a>
                        </li>
                        <!-- 9.2.4 Modal de Detalhes do Elemento -->
                        <li class="list-group-item bg-dark text-white border-0">
                            <a class="stretched-link text-decoration-none d-flex align-items-center gap-2 rounded px-2 py-1 link-light"
                               href="#modal-de-detalhes-do-elemento">
                                <span class="badge bg-secondary">9.2.4</span>
                                Modal de Detalhes do Elemento
                            </a>
                        </li>
                    </ul>
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

Este artigo propõe uma solução voltada à acessibilidade da tabela periódica para pessoas com deficiência, destacando o papel dos recursos tecnológicos no fomento à inclusão e à autonomia no processo de aprendizagem de Química.

<div class="text-center">
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/01248cbd-d6fc-4d17-2007-b107616a0000/public" aria-hidden="true" class="img-fluid" />
</div>

## Apresentação {#apresentacao}
---

A percepção equivocada de que pessoas com deficiência enfrentam obstáculos intransponíveis continua presente em diversos setores da sociedade, inclusive no contexto educacional. Tal visão contribui para a insuficiência de materiais e metodologias pedagógicas adaptadas, o que torna o processo de inclusão mais complexo.

A falta de informação, o pouco contato diário com pessoas com deficiência e a carência de ações voltadas à conscientização ajudam a manter preconceitos. Diante disso, este estudo investiga os desafios e as estratégias para ensinar a tabela periódica dos elementos químicos a estudantes com deficiência visual, destacando a relevância de adaptações específicas que sejam viáveis e aplicáveis.

O uso de recursos digitais, como o desenvolvimento web é essencial para ampliar o acesso de pessoas com deficiência visual ao conhecimento científico. Por isso, foi criada uma tabela periódica inclusiva, compatível com linhas Braille e leitores de tela.

A metodologia empregada envolveu uma revisão bibliográfica detalhada, seguida pela confecção prática da tabela, que foi validada por especialistas com deficiência visual. A acessibilidade foi analisada por meio de testes feitos por profissionais com deficiência visual que atuam nas áreas de acessibilidade digital, desenvolvimento de software, psicologia, pedagogia e outros campos.

Pessoas cegas e com baixa visão participaram da avaliação usando tecnologias assistivas em diferentes dispositivos. Os resultados mostram que, com adaptações e uso adequado da tecnologia, é possível garantir uma experiência educacional inclusiva no estudo da tabela periódica. 

Essa iniciativa não só amplia o acesso ao conhecimento científico, como também ajuda a romper barreiras históricas e incentiva a participação ativa de estudantes com deficiência visual nas escolas. Além disso, destaca-se a importância de investir continuamente na melhoria de materiais didáticos acessíveis.

Ao divulgar essa proposta, busca-se promover uma educação mais inclusiva e justa, na qual todas as pessoas tenham oportunidades plenas de aprendizado e desenvolvimento, contribuindo assim para uma transformação social duradoura.

## Conceitos gerais {#conceitos-gerais}
---

Historicamente, pessoas com deficiência foram frequentemente consideradas incapazes. Em diversos contextos, elas acabaram sendo responsabilizadas por sua própria exclusão social, fenômeno atualmente identificado como capacitismo. 

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"Esse preconceito é tão forte na sociedade que atinge até instituições e pessoas que, em teoria, deveriam defender os direitos de grupos minorizados e marginalizados."</p>
  <footer class="text-light">IVANOVICH; GESSER, 2020</footer>
</blockquote>

Nessa conjuntura, as pessoas com deficiência frequentemente são percebidas como menos aptas a experienciar, aprender, expressar desejos e, especialmente, serem alvo de desejo.

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"Assim, são muitas vezes impedidas de viver plenamente e de exercer seus direitos."</p>
  <footer class="text-light">GESSER; BLOCK; HENRIQUE NUERNBERG, 2019</footer>
</blockquote>

O capacitismo é estrutural e persistente na sociedade porque: 

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"[...] desde o momento em que uma criança nasce ela emerge em um mundo onde recebe mensagens de que ser uma pessoa com deficiência é ser inferior."</p>
  <footer class="text-light">GESSER; BLOCK; HENRIQUE NUERNBERG, 2019</footer>
</blockquote>

Pessoas com deficiência visual também integram esse contexto, principalmente porque: 

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"[...] a sociedade reconhece o que é extremamente visual, privilegiando a visualização como condição de conhecer, em um universo constituído por símbolos gráficos, imagens, letras e números."</p>
  <footer class="text-light">REIS, 2015, p. 15</footer>
</blockquote>

A educação, ao representar os valores da sociedade contemporânea e contribuir para o desenvolvimento das próximas gerações, fundamenta-se de maneira significativa no uso de recursos visuais, como jogos, imagens e gráficos (REIS, 2015). 

A Química é uma área do conhecimento altamente dependente da visão. Ela é:

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"[...] a ciência responsável pelo estudo da matéria e de suas transformações."</p>
  <footer class="text-light">FELTRE, 2004, p. 7</footer>
</blockquote>

Nesta área, o emprego de representações visuais é fundamental, viabilizando a comunicação eficiente de um elevado volume de informações em tempo reduzido. A disciplina de Química contempla atividades experimentais, práticas laboratoriais, bem como a manipulação de vidrarias e substâncias químicas. 

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"Por isso, cores, gráficos e equações químicas fazem parte de sua linguagem simbólica."</p>
  <footer class="text-light">FELTRE, 2004</footer>
</blockquote>

Apesar dos desafios da Química para pessoas com deficiência visual, o uso de novas tecnologias permite criar estratégias inclusivas.

Cabe às instituições de ensino, equipes pedagógicas, docentes e ao Serviço de Atendimento Educacional Especializado (SAEE) planejar e aplicar adaptações que garantam o acesso à aprendizagem (BRASIL, 1996).

## Educação e deficiência visual: principais questões {#educacao-e-deficiencia-visual-principais-questoes}
---

Segundo Reis (2015, p. 28), a deficiência visual pode ser entendida como “um impedimento total ou, ainda, a diminuição da capacidade visual”. Essa condição pode resultar de diferentes causas que acometem os olhos ou o sistema visual como um todo. É importante ressaltar que, além da cegueira, a baixa visão também integra o espectro das deficiências visuais.

De acordo com Reis (2015, p. 28), a deficiência visual é avaliada a partir de duas medidas oftalmológicas: acuidade visual (capacidade de enxergar a uma determinada distância) e campo visual (área alcançada pela visão).

<div class="text-center mb-4">
        <figcaption>Figura 1: Representação visual dos dois principais parâmetros oftalmológicos para avaliação visual.</figcaption>

        <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/db43e9f5-7daa-4214-f8ff-9282daaff900/public" class="img-fluid" alt="Ilustração explicando os conceitos de acuidade visual e campo visual." />
        <figcaption class="visually-hidden">Na parte superior, uma cabeça de perfil olhando para uma tabela de exame visual com letras decrescentes, representando a acuidade visual. Na parte inferior, outra cabeça de perfil com um cone triangular saindo dos olhos, mostrando a área de visão que alcança uma árvore, representando o campo visual.</figcaption>
        <figcaption>Fonte: Elaborado pelas autoras.</figcaption>
</div>

A baixa visão caracteriza-se por uma manifestação heterogênea, podendo os indivíduos apresentar distintos perfis de funcionamento visual. Essa variação decorre da interação entre fatores como acuidade visual, amplitude do campo visual e a etiologia (causa ou origem) da deficiência.

Segundo o Ministério da Educação (BRASIL, 2005, p.16), considera-se pessoa com baixa visão quem possui “desde a condição de indicar a projeção da luz até o grau em que a redução da acuidade visual interfere ou limita seu desenvolvimento”.

O e-book "Acessibilidade Para Estudantes Com Deficiência Visual: Orientações Para O Ensino Superior" define:

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
    <p class="lead fst-italic lh-lg">"[...] a baixa visão corresponde a um comprometimento do funcionamento visual, em ambos os olhos, que não pode ser sanado, por exemplo, com o uso de óculos convencionais, lentes de contato ou cirurgias oftalmológicas."</p>
    <footer class="text-light">GARRUTTI DE LOURENÇO et al., 2020, p. 2</footer>
</blockquote>

Dessa forma, condições como miopia, que podem ser corrigidas com o uso de óculos, não são classificadas como deficiência visual, mas sim como problemas visuais, uma vez que podem ser substancialmente reduzidas ou eliminadas por meio de recursos ópticos.

### Principais características da baixa visão {#principais-caracteristicas-da-baixa-visao}
---

De acordo com Garrutti de Lourenço et al. (2020, p. 2), a baixa visão está relacionada a distintos tipos de limitações visuais, que podem manifestar-se de forma isolada ou simultânea. Destacam-se entre essas limitações:

- redução da nitidez visual (acuidade visual diminuída);

- restrição do campo visual, limitando a percepção ao espaço imediatamente à frente;

- alteração na discriminação de contraste, dificultando a identificação de objetos;

- dificuldade de adaptação à luminosidade, tanto em ambientes intensamente iluminados quanto pouco iluminados;

- modificação na percepção das cores;

- limitação na visualização de objetos próximos ou distantes;

- percepção restrita do entorno, observando apenas uma área delimitada conforme a condição apresentada.

Fonte: Elaborado pelas autoras com base em GARRUTTI DE LOURENÇO et al., 2020.

Alterações visuais que muitas vezes passam despercebidas exigem adaptações específicas para leitura, escrita e outras atividades diárias. A baixa visão requer intervenções adequadas, pois a principal barreira à inclusão é a falta de crença na importância dessas adaptações, segundo Garrutti de Lourenço et al. (2020, p. 2). 

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

É fundamental que profissionais da educação identifiquem as necessidades educacionais específicas de cada estudante com baixa visão, visando práticas pedagógicas inclusivas e personalizadas (GARRUTTI DE LOURENÇO et al., 2020, p. 2). 

Diante disso, são frequentes na escola situações envolvendo estudantes com baixa visão, tais como:

- Dificuldade ao ler textos com fonte pequena ou baixo contraste; 

- Cansaço visual que surge rapidamente ao realizar tarefas de leitura e escrita; 

- Dificuldade em enxergar os conteúdos mostrados no quadro ou nos materiais didáticos tradicionais; 

- É preciso mais tempo para terminar tarefas que exigem processamento visual;

- Dificuldade na participação em atividades realizadas sob iluminação intensa ou em superfícies refletoras; 

- Necessidade dispositivos ópticos, iluminação apropriada e materiais acessíveis. 

Fonte: Elaborado pelas autoras com base em GARRUTTI DE LOURENÇO et al., 2020, p. 3.

As necessidades de cada estudante com baixa visão devem ser avaliadas individualmente, pois as dificuldades variam entre as pessoas (GARRUTTI DE LOURENÇO et al., 2020, p. 3-4).

### Cegueira {#cegueira}
---

Apesar de algumas pessoas cegas apresentarem certa percepção luminosa, a compreensão do ambiente ocorre predominantemente por meio dos sentidos táctil e auditivo. Dessa forma, a cegueira abrange desde a completa ausência de visão até uma mínima detecção de luz, demandando abordagens educacionais que valorizem métodos alternativos baseados no tato e na audição. 

A disponibilização de materiais didáticos variados é igualmente essencial, pois proporciona diferentes possibilidades de aprendizagem aos estudantes cegos. Dentre as estratégias indicadas para promover a inclusão escolar de alunos com cegueira, ressaltam-se:

- Uso de materiais em Braille para facilitar a leitura e escrita;

- Oferta de recursos táteis, como mapas e gráficos em alto-relevo;

- Implementação de softwares leitores de tela para acesso aos conteúdos digitais;

- Adaptação das atividades para que possam ser realizadas por meio do tato e da audição;

- Formação dos professores acerca das necessidades educacionais específicas desses alunos.

Fonte: Elaborado pelas autoras com base em BRASIL, 2005; SIAULIYS; ORMELEZI; BRIANT, 2010.

É imprescindível que os ambientes educacionais promovam a efetivação dos direitos constitucionais e legais das pessoas com deficiência, concretizando as garantias previstas em lei. A adoção de medidas de acessibilidade física e digital, assim como a integração entre docentes, familiares e especialistas, constitui obrigação legal destinada a garantir o desenvolvimento acadêmico e social desses estudantes, conforme estabelecem a Constituição Federal e a Lei nº 13.146/2015 (BRASIL, 2015), bem como demais legislações aplicáveis à inclusão. 

## A Química {#a-quimica}
---

A Química, originada há muito tempo, firmou-se progressivamente como uma ciência moderna, especialmente nos séculos XVI e XVII, período em que surgiram modelos conceituais semelhantes aos atuais. Durante seu desenvolvimento, a disciplina ultrapassou métodos apenas quantitativos e passou a utilizar imagens, símbolos próprios e códigos de cores, tornando mais fácil entender os fenômenos naturais.

A introdução dessa disciplina nos currículos franceses do século XIX ocorreu devido ao destaque das ciências naturais nas reformas educacionais republicanas e ao método da “lição de coisas”, que favorecia o aprendizado prático com objetos.

O ensino de Química hoje inclui cálculos estequiométricos, observação sistemática, notação de fórmulas moleculares e uso de códigos cromáticos para facilitar a compreensão (KAHN, 2014; SCHWAHN; OAIGEN, 2009, 2008; SCHWAHN; ANDRADE NETO, 2011).

Razuck e Guimarães (2014, p. 3) reforçam a importância dessa abordagem visual afirmando que a Química:

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"[...] se utiliza de grande apelo visual, pois muitos de seus conceitos se baseiam na visualização de esquemas para sua compreensão."</p>
  <footer class="text-light">RAZUCK; GUIMARÃES, 2014, p. 3</footer>
</blockquote>

De acordo com os autores, o aprendizado em Química está intimamente ligado à utilização de imagens, ilustrações, diagramas ou modelos, pois esses recursos facilitam a compreensão dos conceitos. Eles ainda acrescentam que:

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"[...] a utilização de imagens, como ferramenta, na compreensão de conceitos é verificada, por exemplo, no ensino de Modelos Atômicos, no qual cada modelo se associa a uma representação imagística."</p>
  <footer class="text-light">RAZUCK; GUIMARÃES, 2014, p. 3</footer>
</blockquote>

O aspecto visual é fundamental na Química e constitui parte integrante de sua essência, visto que a disciplina consolidou, ao longo do tempo, uma linguagem específica composta por símbolos, fórmulas e representações gráficas. Entre os exemplos desse contexto destacam-se a tabela periódica, os modelos moleculares e as estruturas de Lewis, ferramentas que contribuem significativamente tanto para o processo de ensino quanto para a compreensão dos conteúdos químicos.

Segundo Almeida (2015) e Feltre (2004), compreender Química requer explicações teóricas e demonstrações práticas e visuais.

Assim, Química é definida como:

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"[...] uma ciência que possui uma linguagem própria proveniente do aspecto representacional da ciência como o uso de fórmulas e reações."</p>
  <footer class="text-light">ALMEIDA, 2015, p. 19</footer>
</blockquote>

A especificidade dos objetos de estudo da Química atribui à disciplina uma natureza peculiar, exigindo a integração de fundamentação teórica com atividades práticas e recursos visuais (FELTRE, 2004). Dessa forma, a padronização de equações, fórmulas, gráficos e textos é essencial, visto que a escolha das formas de representação interfere diretamente na clareza do conteúdo e pode influenciar os resultados obtidos (ALMEIDA, 2015).

A Química desenvolveu uma linguagem própria composta por símbolos, fórmulas, imagens e práticas. Entender Química exige interpretar e usar essa linguagem para estudar os fenômenos naturais.

## Tabela periódica {#tabela-periodica}
---

Tolentino e Rocha-Filho (1997, p. 1) afirmam que: 

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"[...] A classificação periódica dos elementos é, sem dúvida, uma das maiores e mais valiosas generalizações científicas. Concretizada na segunda metade da década de 60 do século 19, desde então muito serviu como guia de pesquisas em Química e, aos poucos, se tornou um valioso instrumento didático no ensino da Química."</p>
  <footer class="text-light">TOLENTINO; ROCHA-FILHO, 1997, p. 1</footer>
</blockquote>

A tabela periódica organiza os elementos químicos por número atômico, destacando padrões nas propriedades devido à configuração eletrônica dos átomos.

As linhas horizontais da tabela periódica, denominadas períodos, localizam à esquerda os metais e à direita os não metais. As colunas verticais, conhecidas como grupos, reúnem elementos com propriedades específicas, exemplificados pelo grupo 1, que corresponde aos metais alcalinos (FELTRE, 2004).

Elementos de um mesmo grupo tendem a apresentar semelhanças marcantes, geralmente mais evidentes do que aquelas verificadas entre elementos de um mesmo período. Contudo, algumas exceções ocorrem, sendo as similaridades entre lantanídeos e actinídeos dentro de um mesmo período um exemplo relevante (FELTRE, 2004).

De acordo com a lei periódica de Moseley, as propriedades físicas e químicas dos elementos mudam periodicamente conforme seus números atômicos aumentam. Essas mudanças, chamadas de propriedades periódicas, aparecem ao longo da tabela periódica, como é o caso do raio atômico, da eletronegatividade e da eletropositividade (FELTRE, 2004).

A classificação em blocos na tabela periódica reflete a distribuição dos elétrons nos átomos. 

- O bloco <strong>s</strong> inclui elementos como hidrogênio, hélio e metais alcalinos; 

- O bloco <strong>p</strong> reúne elementos diversos, incluindo metaloides; 

- O bloco <strong>d</strong> corresponde aos metais de transição;
 
- O bloco <strong>f</strong> agrupa lantanídeos e actinídeos. 

A repetição de certos padrões, chamada periodicidade, é a base para criar a lei periódica e a tabela periódica. Isso significa que elementos em posições parecidas mostram características semelhantes, como o tamanho dos átomos, a facilidade para ganhar ou perder elétrons e a energia necessária para retirar um elétron.

Essa regularidade acontece por causa da configuração eletrônica única de cada elemento, o que define suas propriedades químicas e modos típicos de agir. 

### Propriedades da tabela periódica {#propriedades-da-tabela-periodica}
---

Propriedades químicas seguem padrões na tabela periódica, facilitando comparações. Energia de ionização indica quão difícil é perder um elétron; afinidade eletrônica mostra a energia liberada ao receber um elétron. Ambos variam de forma previsível entre os elementos.

O raio atômico, que indica o tamanho do átomo, varia sistematicamente de acordo com a posição do elemento na tabela periódica.

<div class="text-center mb-4">
    <figcaption>Figura 2: Variação das propriedades periódicas na tabela periódica.</figcaption>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Periodic_trends_-_pt_edition.svg/600px-Periodic_trends_-_pt_edition.svg.png" class="img-fluid" alt="Diagrama mostrando as tendências periódicas da tabela periódica." />
    <figcaption>Fonte: <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Periodic_trends_-_pt_edition.svg/600px-Periodic_trends_-_pt_edition.svg.png" target="_blank" rel="noopener noreferrer" class="text-break d-inline-block mw-100">      https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Periodic_trends_-_pt_edition.svg/600px-Periodic_trends_-_pt_edition.svg.png</a></figcaption>
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

Além dessas características, observa-se uma diferença clara entre os grupos de elementos: os metais, que ficam majoritariamente à esquerda da tabela, apresentam-se geralmente sólidos em temperatura ambiente, conduzem bem calor e eletricidade, além de serem maleáveis e dúcteis; por outro lado, os não metais estão principalmente à direita da tabela, podendo ser encontrados nos estados sólido, líquido ou gasoso, e não são bons condutores de calor e eletricidade. 

Mais do que apenas uma lista de símbolos, a tabela periódica é organizada de forma a revelar padrões, similaridades e distinções entre os elementos, o que torna mais fácil entender suas propriedades químicas e como eles se comportam.

## Tecnologias assistivas no ensino de Química {#tecnologias-assistivas-no-ensino-de-quimica}
---

Conforme estabelece a Lei nº 13.146, de 6 de julho de 2015, conhecida como Lei Brasileira de Inclusão da Pessoa com Deficiência (BRASIL, 2015), o Art. 3º, inciso III, define tecnologias assistivas nos seguintes termos:

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"[...] produtos, equipamentos, dispositivos, recursos, metodologias, estratégias, práticas e serviços que objetivem promover a funcionalidade, relacionada à atividade e à participação da pessoa com deficiência ou com mobilidade reduzida, visando à sua autonomia, independência, qualidade de vida e inclusão social."</p>
  <footer class="text-light">BRASIL, 2015</footer>
</blockquote>

Tecnologias assistivas são ferramentas que possibilitam a participação de pessoas com deficiência, promovendo inclusão e autonomia. No ensino de Química, garantem acesso igualitário ao conteúdo para alunos com deficiência visual.

O uso dessas ferramentas se torna ainda mais eficaz quando está em sintonia com o conceito de desenho universal, que, segundo o artigo 3º, inciso III, da Lei Brasileira de Inclusão (Lei nº 13.146/2015), é definido como:

<blockquote class="bg-dark text-light rounded shadow-lg p-4 my-5 border-start border-4 border-primary">
  <p class="lead fst-italic lh-lg">"[...] concepção de produtos, ambientes, programas e serviços a serem usados por todas as pessoas, sem necessidade de adaptação ou de projeto específico, incluindo os recursos de tecnologia assistiva."</p>
  <footer class="text-light">BRASIL, 2015</footer>
</blockquote>

Esse conceito defende que produtos e ambientes sejam criados desde o início para atender a todos, sem depender de adaptações posteriores, considerando diversas características físicas, sensoriais e cognitivas.

As tecnologias assistivas variam em complexidade. As chamadas <em>low-tech</em> (tecnologias de baixa complexidade) incluem opções simples, como:

- <strong>planos inclinados para leitura</strong>;
- <strong>lápis de ponta grossa</strong>;
- <strong>marcadores de página em Braille</strong>;
- <strong>materiais táteis confeccionados artesanalmente</strong>.

Por outro lado, as <em>high-tech</em> (tecnologias de alta complexidade) abrangem equipamentos e materiais industriais, como por exemplo:

- <strong><em>softwares</em> leitores de tela</strong>;
- <strong>impressoras Braille</strong>;
- <strong>lupas eletrônicas</strong>;
- <strong>dispositivos de ampliação de tela</strong>.

Essas tecnologias podem ser organizadas em categorias específicas, que abrangem desde tarefas diárias até lazer. Exemplos são:

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

Os exemplos mostram como as tecnologias assistivas são amplas e versáteis, capazes de transformar práticas educativas, especialmente nas aulas de Química. Além disso, essas ferramentas promovem inclusão e garantem que estudantes com deficiência tenham acesso efetivo em diferentes áreas do conhecimento.

## Internet e desenvolvimento Web como tecnologias assistivas {#internet-e-desenvolvimento-web-como-tecnologias-assistivas}
---

A internet é uma rede mundial de computadores que permite a troca de informações entre usuários em qualquer lugar. Já a web consiste em páginas conectadas, acessadas por navegadores como Google Chrome, Firefox ou Safari.

O desenvolvimento web envolve planejar, criar e manter recursos online, utilizando linguagens e tecnologias específicas para assegurar a funcionalidade e a boa experiência em sites e aplicações (OLIVEIRA, 2021).

Esta área é organizada em dois domínios fundamentais:

- <a href="https://pcdnaescola.com.br/computacao-para-iniciantes/programas-ou-softwares/#o-que-e-front-end" target="_blank" rel="noopener noreferrer"><strong>Front-end</strong></a>: refere-se à parte visual e interativa do site ou aplicação, com a qual as pessoas interagem diretamente. São os botões, menus, textos, mídias e outros elementos que compõem a interface do usuário.

- <a href="https://pcdnaescola.com.br/computacao-para-iniciantes/programas-ou-softwares/#o-que-e-back-end" target="_blank" rel="noopener noreferrer"><strong>Back-end</strong></a>: é a parte que funciona nos bastidores, responsável por processar dados, gerenciar servidores e bancos de dados. O back-end lida com a lógica do sistema, as regras de negócio, autenticação de usuários, armazenamento de informações e comunicação com o front-end.

Conteúdos na internet podem ser acessíveis desde o início usando tecnologias apropriadas, tornando a web uma ferramenta assistiva graças à sua versatilidade.

Um site ou aplicativo vai além de uma imagem estática, composto por camadas de informação que se complementam para atender a diferentes necessidades. Por exemplo, um gráfico pode não ser acessível para pessoas cegas, mas um código bem estruturado pode detalhar cada ponto do gráfico, tornando-o compatível com leitores de tela.

Essa abordagem está em consonância com o conceito de Desenho Universal, cujo objetivo é criar produtos e ambientes acessíveis para todos, independentemente das necessidades individuais. O desenvolvimento da Internet e de aplicações Web com foco em acessibilidade contribui para a eliminação de barreiras educacionais, assegurando que o conteúdo esteja disponível para todas as pessoas.

Para isso, é essencial seguir as diretrizes de acessibilidade, como o <em>WCAG</em> (<em>Web Content Accessibility Guidelines</em>). O <em>WCAG</em> é um conjunto de recomendações internacionais que orienta a criação de conteúdos <em>Web</em> acessíveis para pessoas com deficiência.

Quando um site segue essas diretrizes, ele se torna compatível com tecnologias assistivas, como leitores de tela e linhas <em>Braille</em>. A inclusão, nesse sentido, não é um recurso extra, mas parte do processo de criação. 

A internet e o desenvolvimento web tornam-se acessíveis ao aplicar práticas de codificação e design que garantem a leitura visual e semântica das informações. Assim, o conteúdo é logicamente estruturado para facilitar a interpretação por tecnologias assistivas que vão interfacear a comunicação entre a pessoa e o conteúdo digital.

Entre essas práticas, destacam-se os aspectos apresentados a seguir.

### <em>HTML</em> Semântico {#html-semantico}
---

Trata-se do uso de elementos de código que deixam clara a função estrutural de cada parte da página.

Ao invés de usar apenas elementos genéricos, como <em>&lt;div&gt;</em> e <em>&lt;span&gt;</em>, o <em>HTML</em> semântico emprega tags (etiquetas) específicas, como:

- <em>&lt;header&gt;</em> para o cabeçalho,
- <em>&lt;nav&gt;</em> para a navegação,
- <em>&lt;article&gt;</em> para artigos,
- <em>&lt;section&gt;</em> para seções,
- <em>&lt;footer&gt;</em> para o rodapé,
- <em>&lt;ul&gt;</em> para listas não ordenadas,
- <em>&lt;ol&gt;</em> para listas ordenadas,
- <em>&lt;li&gt;</em> para itens de lista,
- E assim por diante.

Essas tags definem de forma explícita a função de cada seção do conteúdo, contribuindo para uma melhor compreensão da estrutura da página.

Em vez de a pessoa desenvolvedora criar tudo de maneira genérica e apenas alterar a aparência visual, desde o início são sugeridos elementos estruturais que facilitam a compreensão da natureza do conteúdo. 

Os <em>softwares</em> leitores de tela reconhecem as marcações semânticas e informam as pessoas usuárias sobre como o conteúdo está organizado hierarquicamente, tornando a navegação e a compreensão do contexto mais fáceis.

<div class="text-center mb-4">
    <figcaption>Figura 3: Comparação entre <em>HTML</em> semântico e não semântico.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/a853eb89-dbf2-4e78-41ca-75712f919600/public" class="img-fluid" alt="Ilustração comparando HTML semântico e não semântico." />
    <div class="sr-only">
        <p>Descrição detalhada da imagem: A imagem é um infográfico em fundo preto, com o título grande no topo “<em>HTML</em> Semântico: Clareza Estrutural e Acessibilidade”, comparando duas formas de estruturar páginas.</p>
        <p>À esquerda, a seção “Genérico (Ruim)” traz o subtítulo “Tudo igual, difícil de entender” e mostra um bloco cinza com várias caixas com tags de “&lt;div&gt;” e algumas “&lt;span&gt;”, ilustrando uma estrutura confusa. Uma seta azul liga esse bloco a um monitor com interrogações (“???”), indicando falta de clareza na organização do conteúdo.</p>
        <p>O centro mostra um ícone de pessoa com notebook e a legenda “Estrutura desde o início”, ligado por linhas coloridas ao texto “Acessibilidade e compreensão”, destacando que uma estrutura adequada facilita o uso por pessoas com tecnologias assistivas como leitores de tela.</p>
        <p>No lado direito encontra-se a seção “Semântico (Bom)”, com o subtítulo “Função explícita, fácil de entender”. Ali é apresentado um wireframe (esboço) azul de uma página, cujas áreas são claramente identificadas:</p>
        <ul>
            <li>no topo está o “&lt;header&gt;” tag para o cabeçalho da página,</li>
            <li>seguido por “&lt;nav&gt;”; para a barra de navegação (menu),</li>
            <li>o conteúdo principal aparece dividido em blocos verdes, com “&lt;article&gt;” (artigo) à esquerda, “&lt;section&gt;” (seção) ao centro e outra “&lt;section&gt;” (seção) à direita, que exibe exemplos de listas com “&lt;ul&gt;” (lista não ordenada), “&lt;ol&gt;” (lista ordenada) e “&lt;li&gt;” (item de lista).</li>
            <li>Na base da página encontra-se o “&lt;footer&gt;” (rodapé) da página.</li>
        </ul>
        <p>Abaixo desse esquema visual, outro monitor apresenta um ícone de alto-falante e balões rotulados indicam os elementos facilmente reconhecíveis, como “Navegação”, “Cabeçalho”, “Artigo”, “Rodapé” e “Lista”.</p>
        <p>Uma seta curva verde aponta para o layout semântico (página estruturada com as tags que indicam a função de cada elemento), acompanhada da frase “Organização hierárquica clara para todos, incluindo leitores de tela”, destacando que essa maneira de construir páginas facilita a compreensão para todas as pessoas incluindo aquelas que utilizam tecnologias assistivas como leitores de tela.</p>
        <p>Resumindo: a imagem compara duas formas de estruturar páginas web, mostrando que o <em>HTML</em> semântico, com tags específicas, oferece clareza e acessibilidade, enquanto o <em>HTML</em> genérico dificulta a compreensão do conteúdo e trata tudo de forma igual.</p>
        <p>Fim da descrição detalhada da imagem.</p>
    </div>
    <figcaption>Fonte: Elaborado pela autora.</figcaption>
</div>

### Texto Alternativo em Imagens (<em>Alt Text</em>) {#texto-alternativo-em-imagens-alt-text}
---

O texto alternativo é uma descrição textual associada a imagens, inserida pelo atributo <em>alt</em> (texto alternativo) na tag <em>&lt;img&gt;</em> (que serve para inserir imagens) do HTML. Ele permite que pessoas cegas, usando leitores de tela, compreendam o conteúdo visual das imagens.

No ensino de Química, usar representações gráficas com textos alternativos detalhando a composição molecular é recomendado. Por exemplo:

<div class="text-center mb-4">
    <figcaption>Figura 4: Estrutura molecular do benzeno.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/dde96d0f-0607-4ab3-d3ec-51f9825b0300/public" class="img-fluid shadow" alt="Estrutura molecular do benzeno (C6H6)." />
    <figcaption class="visually-hidden">Descrição detalhada da imagem: A imagem mostra um desenho simples, em preto e branco, de uma molécula em forma de anel: seis letras “C” (carbono) formam um hexágono, como se fosse uma “argola” com seis lados. Entre esses carbonos aparecem linhas alternadas (algumas duplas e outras simples), indicando as ligações entre eles. Em volta do anel, há seis letras “H” (hidrogênio), uma ligada a cada carbono, apontando para fora do hexágono. É o tipo de esquema usado em química para mostrar a estrutura de uma molécula, com tudo bem centralizado em um fundo branco.</figcaption>
    <figcaption>Fonte: <a href="https://upload.wikimedia.org/wikipedia/commons/2/23/Benzene-2D-flat.png" target="_blank">https://upload.wikimedia.org/wikipedia/commons/2/23/Benzene-2D-flat.png</a></figcaption>
</div>

A imagem é inserida assim no código <em>HTML</em>:

```html
<img src="endereco-da-imagem" alt="Estrutura molecular do benzeno (C6H6)." />
<figcaption>Descrição detalhada da imagem: A imagem mostra um desenho simples, em preto e branco, de uma molécula em forma de anel: seis letras “C” (carbono) formam um hexágono, como se fosse uma “argola” com seis lados. Entre esses carbonos aparecem linhas alternadas (algumas duplas e outras simples), indicando as ligações entre eles. Em volta do anel, há seis letras “H” (hidrogênio), uma ligada a cada carbono, apontando para fora do hexágono. É o tipo de esquema usado em química para mostrar a estrutura de uma molécula, com tudo bem centralizado em um fundo branco.</figcaption>
```
{: .bg-dark .text-light .p-3}

O atributo <em>alt</em> deve ser resumido, claro e descritivo, transmitindo a informação essencial da imagem. Para desenhos complexos, como gráficos ou diagramas, é recomendável fornecer uma descrição mais detalhada em um texto complementar próximo à imagem como é feito com a tag <em>&lt;figcaption&gt;</em> que serve para legendar figuras.

### Compatibilidade com Leitores de Telas {#compatibilidade-com-leitores-de-telas}
---

Leitores de tela convertem conteúdo visual em áudio ou tato via dispositivos Braille. Sites e aplicativos devem garantir a interação eficiente desses <em>softwares</em> com todos os componentes da interface, incluindo botões, hiperlinks e menus de navegação.

A falta de compatibilidade dificulta o acesso à informação para pessoas com deficiência visual, tornando recursos digitais obstáculos à inclusão. Para assegurar essa compatibilidade, é essencial seguir as diretrizes de acessibilidade, como o <em>WCAG</em>, e testar regularmente os recursos com leitores de tela populares, como <em>NVDA</em>, <em>JAWS</em> e <em>VoiceOver</em>.

### <em>Design</em> de Alto Contraste e Tamanho de Fonte Ajustável: {#design-de-alto-contraste-e-tamanho-de-fonte-ajustavel}
---

Para pessoas com baixa visão, a inclusão de recursos que possibilitam a personalização do contraste de cores e do tamanho da tipografia é fundamental para garantir a acessibilidade. O desenvolvimento web atual adota funcionalidades que permitem ajustar esses parâmetros visuais, conferindo a pessoa autonomia para adaptar a apresentação do conteúdo às suas necessidades perceptivas particulares.

### <em>WAI-ARIA</em> (<em>Accessible Rich Internet Applications</em>) {#wai-aria-accessible-rich-internet-applications}
---

<em>WAI-ARIA</em> (<em>Accessible Rich Internet Applications</em> ou em Português, Aplicações Ricas de Internet Acessíveis) é uma especificação técnica do W3C (World Wide Web Consortium - um consórcio internacional que desenvolve padrões para a web) que adiciona atributos ao HTML para melhorar a acessibilidade de aplicações web dinâmicas. Esses atributos fornecem metadados sobre função, estado e propriedades dos elementos, facilitando a interpretação por tecnologias assistivas.

Esta especificação é importante para implementar interfaces complexas, como abas, menus expansíveis e modais, onde a semântica estrutural do <em>HTML</em> pode não ser suficiente para descrever o comportamento e as relações dos elementos interativos.

Exemplos de atributos <em>WAI-ARIA</em> incluem:

- <em>aria-label</em>: fornece uma etiqueta descritiva para elementos interativos como botões ou links. Por exemplo, uma sequência de botões que só contém ícones pode usar <em>aria-label</em> para descrever a função de cada botão.

- <em>aria-hidden</em>: indica se um elemento deve ser ignorado por tecnologias assistivas. Isso é útil para ocultar elementos decorativos que não contribuem para a compreensão do conteúdo.

- <em>role</em>: define o papel de um elemento na interface que pode não ser evidente apenas pela tag <em>HTML</em>. Por exemplo, um <em>&lt;section&gt;</em> (<em>seção</em>) pode ser designado como um <em>role="dialog"</em> para indicar que é uma janela modal interativa.

### Acessibilidade no Código {#acessibilidade-no-codigo}
---

A acessibilidade no código envolve a aplicação de boas práticas de desenvolvimento web para garantir que todas as pessoas, independentemente de suas habilidades, possam acessar e interagir com o conteúdo digital. Isso inclui o uso de <em>HTML</em> semântico, atributos <em>WAI-ARIA</em>, textos alternativos para imagens, navegação por teclado, entre outros.

Além disso, conteúdos suplementares, como tooltips ou submenus, não devem ser ativados exclusivamente através do foco por mouse (<em>mouse over</em>) ou teclado (<em>focus</em>), mas sim por ambos os métodos, garantindo que todas as pessoas possam acessar essas informações.

É fundamental também que a funcionalidade seja independente da orientação da tela, garantindo sempre múltiplas alternativas de acesso ao conteúdo. Mensagens relevantes para a pessoa, como confirmações de ações executadas ou notificações sobre o andamento de processos, devem ser comunicadas sem ocasionar alterações no contexto ou foco da interface. 

Existem outras diretrizes que falam sobre toda funcionalidade baseada em arrastar e soltar ter alternativa por clique, toque, teclado ou comando de voz, entre outras recomendações. São muitas boas práticas que devem ser adotadas para garantir a acessibilidade no código. 

O ideial é que equipes de desenvolvimento de <em>software</em> estejam sempre atualizadas sobre as melhores práticas e diretrizes de acessibilidade, como as do <em>WCAG</em>, para criar experiências digitais inclusivas. É sempre melhor um projeto nascer acessível do que tentar adaptar algo que já existe sem boas práticas de acessibilidade.

## Desenvolvimento de uma Tabela Periódica Acessível {#desenvolvimento-de-uma-tabela-periodica-acessivel}
---

Considerando os desafios já destacados, criou-se uma tabela periódica focada na acessibilidade. Esse recurso foi desenvolvido seguindo princípios fundamentais para assegurar que qualquer pessoa, inclusive aquelas com diferentes condições visuais, possa acessar e utilizar a tabela com facilidade.

Os critérios de acessibilidade estabelecidos são: 

- **Compatibilidade com leitores de tela**: A tabela foi estruturada para que pessoas que utilizam leitores de tela consigam acessar, entender e interagir facilmente com todas as informações fornecidas.

- **Adaptabilidade**: O design responsivo assegura que a tabela seja exibida corretamente em uma ampla variedade de dispositivos, incluindo smartphones, tablets e computadores. Dessa forma, o conteúdo permanece consistente e acessível independentemente do tamanho do texto ou das necessidades visuais da pessoa, viabilizando a navegação tanto nos modos retrato (vertical) quanto paisagem (horizontal), sem apresentar distorções.

- **Independência das cores**: As relações químicas são indicadas por sinais e descrições além das cores, facilitando a compreensão inclusive para quem tem deficiência de percepção cromática ou não enxerga.

- **Alto contraste**: Há opções com cores muito destacadas, como letras brancas em fundo preto e diferentes tons de cinza, facilitando a leitura para pessoas com baixa visão.

- **Ajuste de tamanho do texto**: O tamanho da fonte pode ser alterado conforme a necessidade, garantindo a manutenção da integridade e clareza das informações apresentadas.

- **Integração com VLibras**: Um botão exclusivo para VLibras (sistema de tradução automática para a Língua Brasileira de Sinais) permite converter textos para Libras, promovendo maior acessibilidade para pessoas surdas.

A Tabela Periódica Acessível busca garantir precisão semântica, preservando o significado original do conteúdo. Materiais fidedignos (fiéis) não apresentam alterações ou distorções em seu sentido. 

É importante destacar que a interação entre tecnologias assistivas e conteúdo sem acessibilidade pode comprometer a transmissão eficiente de informações, impactando de forma significativa as áreas de ciências exatas e tecnológicas. Dessa forma, o desenvolvimento de recursos acessíveis torna-se fundamental para assegurar o acesso equitativo ao conhecimento científico por todas as pessoas.

A interpretação da tabela periódica pode ser bastante desafiadora para pessoas cegas ou com baixa visão, mesmo quando fazem uso de leitores de tela. A presença de símbolos, números e agrupamentos torna a compreensão auditiva difícil, principalmente se as descrições não forem bem-organizadas.

A maioria das soluções online ignora práticas de acessibilidade e dificulta o aprendizado de pessoas cegas, com daltonismo, dislexia ou baixa visão. Assim, criar uma tabela periódica acessível é fundamental para incluir todos os estudantes no estudo da Química.

Adicionalmente a solução foi desenvolvida para funcionar eficientemente mesmo com internet limitada e em dispositivos de baixo desempenho, priorizando o baixo uso de recursos e dados. O objetivo é facilitar o acesso à tabela periódica em regiões com infraestrutura tecnológica restrita, permitindo que mais pessoas consultem o recurso sem barreiras técnicas.

### Metodologia {#metodologia}
---

A criação da Tabela Periódica Acessível envolveu um processo iterativo de descoberta, prototipagem, testes, ajustes e otimizações, guiado por quatro objetivos principais:

- **Compatibilidade com Tecnologias Assistivas**: Assegurar que a ferramenta ofereça total funcionalidade para leitores de tela, linhas Braille e lupas eletrônicas, utilizando <em>HTML</em> semântico, recursos <em>WAI-ARIA</em> e gerenciamento apropriado de foco.

- **Responsividade e Baixo Custo Cognitivo**: Proporcionar uma experiência de uso eficiente em qualquer dispositivo, assegurando navegação intuitiva, áreas de toque adequadas e um layout responsivo que preserva a organização das informações.

- **Configuração Visual**: Oferecer as pessoas a possibilidade de modificar aspectos visuais da ferramenta, como contraste ou tamanho da fonte, conforme suas preferências, que podem ser armazenadas para uso futuro.

- **Garantir a precisão semântica do conteúdo**: Transmitir corretamente todas as informações e relações químicas, incluindo períodos, grupos e categorias, sem confiar apenas em elementos visuais como cores ou organização espacial.

Todas as decisões técnicas e de design seguiram quatro princípios fundamentais.

**1. Independência de Modalidade Sensorial**

As cores são usadas apenas para reforço visual e nunca como única fonte de informação. Cada categoria química é identificada por:

- Texto claro no rótulo 

- Agrupamento em seções com cabeçalhos 

- Atributos <em>ARIA</em> 

- Detalhes nas janelas modais

Assim, qualquer pessoa, independentemente de sua capacidade visual, pode compreender as relações entre os elementos químicos.

**2. Compatibilidade com Tecnologias Assistivas**

Todos os componentes interativos estão devidamente configurados com atributos <em>WAI-ARIA</em> apropriados: 

- **<em>role</em>**: determina o papel semântico do elemento (caixa de diálogo, botão, navegação, etc.);

- **<em>aria-label</em>** ou **<em>aria-labelledby</em>**: atribui rótulos acessíveis a elementos interativos;

- **<em>aria-pressed</em>**: sinaliza o estado (pressionado ou não) de botões do tipo alternância (toggle);

- **<em>aria-expanded</em>**: informa se um componente expansível está aberto ou fechado (como menus ou acordeões);

- **<em>aria-hidden</em>**: oculta elementos estritamente decorativos dos leitores de tela ou linhas Braille;

- **<em>aria-live</em>**: anuncia alterações dinâmicas no conteúdo sem interromper o foco atual como mensagens de confirmação ou erros.

O foco é gerenciado programaticamente para garantir que, ao abrir janelas modais, ele seja imediatamente direcionado ao primeiro elemento interativo. Ao fechar a janela, o foco retorna exatamente ao botão ativador, assegurando a continuidade e o contexto da navegação da pessoa.

**3. Configurabilidade Visual Personalizada**

Visando atender à pluralidade de necessidades visuais, foram desenvolvidos controles que possibilitam ampla personalização, a saber:

- **Alto contraste**: relação de luminância (medida da intensidade de luz emitida ou refletida por uma superfície) superior a 7:1, em conformidade com o nível AAA do WCAG (<em>Web Content Accessibility Guidelines</em>);

- **Contraste negativo**: inversão de polaridade (contraste negativo) destinada a pessoas sensíveis a fundos claros;

- **Escala de cinza**: supressão integral das informações cromáticas (cores) para facilitar a distinção de elementos por meio de formas e textos;

- **Ajuste de tamanho de texto**: possibilidade de escalonamento (zoom) entre 80% e 200%, mantendo a integridade do layout;

- **Sublinhado de links**: reforço visual para identificação independentemente da cor;

- **Fontes aprimoradas**: tipografias (fontes) otimizadas para maior legibilidade (distinção entre caracteres parecidos, como "I", "l" e "1").

Todos os ajustes realizados são armazenados via <em>localStorage</em>, que é um mecanismo do navegador Web (Google Chrome, Firefox, Safari, etc.) para salvar dados localmente no dispositivo da pessoa, permitindo que suas preferências sejam mantidas em visitas futuras.

**4. Design Responsivo e Performático**

A interface é otimizada para:

- Dispositivos móveis (smartphones e tablets),

- Computadores desktop e notebooks,

- Conexões lentas ou instáveis,

- Equipamentos com baixo processamento e memória.

A aplicação adota uma arquitetura JavaScript modular, incorporando técnicas de <em>Code Splitting</em> (divisão de código) e <em>Lazy Loading</em> (carregamento em partes), o que permite o carregamento dos scripts somente sob demanda e contribui para a redução do tempo de inicialização. Além disso, as imagens da tabela periódica são veiculadas (distribuídas) por meio de uma CDN (<em>Content Delivery Network</em> em Português Rede de Distribuição de Conteúdo), que armazena os arquivos em servidores (computadores dedicados a entregar conteúdos) distribuídos globalmente.

Outro papel importante da CDN é otimizar as imagens para diferentes tamanhos de tela e resoluções, garantindo que a qualidade visual seja mantida sem comprometer o desempenho. A CDN também faz a compressão automática das imagens, reduzindo o tamanho dos arquivos e acelerando o tempo de carregamento, especialmente em conexões mais lentas.

Essa compressão acontece também com os <em>scripts</em> e estilos (<em>CSS</em>) da aplicação, para que o uso de dados seja minimizado, tornando a ferramenta mais acessível em termos de requisitos técnicos. Dessa forma, garante-se baixa latência (tempo de resposta rápido) e economia de dados para a pessoa, independentemente das condições de conexão. 

### Arquitetura Técnica em Três Camadas {#arquitetura-tecnica-em-tres-camadas}
---

A fim de atingir esses objetivos e respeitar esses princípios anteriormente mencionados, a solução foi estruturada em três camadas técnicas separadas, cada uma com responsabilidades específicas, para garantir a manutenebilidade (facilidade de manutenção) do código e a organização lógica.

**1. Camada de Controles Globais: Barra de Ferramentas de Acessibilidade**

Esta camada apresenta uma barra de ferramentas de acessibilidade (A11y Toolbar) disponível em todas as páginas do site. Por meio dela, pessoas conseguem ajustar a aparência visual conforme suas preferências. As escolhas feitas são registradas no <em>localStorage</em> do navegador, garantindo que permaneçam salvas entre os acessos ao site.

Entre os controles oferecidos estão:

- **Ajuste de texto**: muda o tamanho da fonte.

- **Alto contraste e contraste negativo**: aumentam a luminância.

- **Escala de cinza**: elimina as cores.

- **Sublinhado de links e fonte aprimorada**: facilitam identificar elementos interativos e ler o texto.

O plugin <a href="https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras" target="_blank" rel="noopener noreferrer">VLibras</a> também é incorporado a essa camada, sendo posicionado dinamicamente para evitar sobrepor outros controles.

**2. Camada de Interface da Tabela Periódica**

Esta página é a interface principal da tabela periódica, desenvolvida para garantir navegação fácil. Aqui estão apresentados os elementos essenciais que fazem parte dela, como:

- **Link “Pular para o Conteúdo” (<em>Skip Link</em>)**: oferece às pessoas que usam teclado ou leitores de tela a possibilidade de ir direto ao conteúdo principal da página.

- **Painel de Controle**: apresenta botões de alternância (<em>toggle</em>) para a seleção dos modos de visualização (“Por Períodos”, “Por Grupos” e “Por Categorias”) e para ativação do sistema de cores opcional. As cores são oferecidas como recurso complementar para pessoas que as identificam, sem prejudicar a compreensão das relações químicas quando não utilizadas.

- **Modais Informativas**: Janelas de diálogo como “Como Usar”, “Saiba Mais” e créditos oferecem instruções, contextualizam a tabela e apresentam as pessoas responsáveis pelo desenvolvimento.

- **Modal de Elemento**: ao escolher um elemento, aparece uma janela modal detalhada mostrando todas as suas informações químicas (como número atômico, massa, distribuição eletrônica etc.) apresentadas de forma textual e linear.

**3. Camada de Lógica: Geração do Conteúdo da Tabela Periódica**

Esta camada é o núcleo funcional da ferramenta, formada por quatro scripts modulares que gerenciam dados e interatividade. 

Os <em>scripts</em> são:

- **<em>tabela-periodica.js</em>**: Funciona como o repositório de dados da aplicação, exportando um Array (estrutura) de Objetos com as propriedades completas dos elementos químicos, servindo como a base de informações para os componentes da interface da tabela periódica.

- **<em>tabela-periodica-grupos.js</em>**: Módulo responsável pela lógica de agrupamento e renderização da visualização "Por Grupos". Ele processa os dados brutos organizando-os por colunas e realiza a manipulação para injetar o <em>HTML</em> dinamicamente na interface da tabela periódica.

- **<em>tabela-periodica-categorias.js</em>**: Controlador da visualização "Por Categorias", classifica elementos pelas séries químicas e organiza a interface hierarquicamente em categorias e subcategorias (como Metais Alcalinos e Gases Nobres) para segmentar a navegação.

- **<em>tabela-periodica-colors.js</em>**: Controla um sistema opcional de cores. Ele atribui classes <em>CSS</em> aos elementos conforme suas categorias químicas e usa um <em>MutationObserver</em> (observador de mudanças) para que a coloração seja mantida corretamente, mesmo quando os elementos são recriados dinamicamente ao mudar o modo de visualização.

A arquitetura modular organiza o sistema, melhora a eficiência e facilita a manutenção do código. Optou-se por JavaScript puro (<em>vanilla JS</em>) para evitar <em>frameworks</em> (bibliotecas ou estruturas de código pré-construídos) externos, reduzindo arquivos e melhorando o desempenho em conexões lentas.

Assim, depois que o sistema é carregado, ele continua funcionando normalmente mesmo com a internet instável. Apesar de não ser a opção tecnicamente mais avançada ou que utiliza os métodos mais modernos do desenvolvimento de software, essa solução é a que melhor satisfaz as necessidades de acessibilidade e usabilidade em cenários de conectividade limitada, que são justamente os contextos para os quais a ferramenta foi criada.

### Validação e Testes {#validacao-e-testes}
---

Para fazer a validação de acessibilidade da tabela periódica, foram realizados testes manuais com as seguintes tecnologias assistivas:

<div class="table-responsive">
<table class="table table-bordered table-striped table-hover table-dark text-white border-secondary" role="table" aria-label="Tabela com tecnologias assistivas utilizadas nos testes de validação de acessibilidade da tabela periódica acessível.">
<caption class="visually-hidden">Tabela 1: Tecnologias assistivas utilizadas nos testes de validação de acessibilidade da tabela periódica acessível.</caption>
    <thead class="table-dark">
        <tr>
            <th scope="col">Tecnologia</th>
            <th scope="col">Descrição</th>
            <th scope="col">Sistema Operacional</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">NVDA (NonVisual Desktop Access)</th>
            <td>Leitor de telas gratuito e de código aberto.</td>
            <td>Windows 11</td>
        </tr>
        <tr>
            <th scope="row">JAWS (Job Access With Speech)</th>
            <td>Leitor de telas pago e de código fechado.</td>
            <td>Windows 11</td>
        </tr>
        <tr>
            <th scope="row">VoiceOver</th>
            <td>Leitor de telas integrado em dispositivos Apple.</td>
            <td>iOS 15 e macOS 26.2 (Tahoe)</td>
        </tr>
        <tr>
            <th scope="row">Orca</th>
            <td>Leitor de telas gratuito e de código aberto.</td>
            <td>Linux Ubuntu MATE 22.04 LTS</td>
        </tr>
        <tr>
            <th scope="row">Google TalkBack</th>
            <td>Leitor de telas integrado em dispositivos Android.</td>
            <td>Android 16</td>
        </tr>
        <tr>
            <th scope="row">Lupas Eletrônicas</th>
            <td>Softwares de ampliação de tela que aumentam o tamanho dos elementos visuais.</td>
            <td>
                <ul>
                    <li>Windows 11</li>
                    <li>macOS 26.2 (Tahoe)</li>
                    <li>Linux Ubuntu MATE 22.04 LTS</li>
                    <li>Linux Ubuntu 22.04 LTS - GNOME</li>
                    <li>Linux Mint 21.1 - Cinnamon</li>
                    <li>iOS 15</li>
                    <li>Android 16</li>
                </ul>
            </td>
        </tr>
    </tbody>
    <caption>Fonte: Elaborada pela autora.</caption>
</table>
</div>

Para garantir a compatibilidade da tabela periódica acessível, foram realizados testes nos seguintes navegadores:

- Google Chrome

- Mozilla Firefox

- Microsoft Edge

- Safari

O objetivo desses testes foi assegurar que a tabela funcionasse corretamente em diferentes ambientes, proporcionando uma experiência consistente para todas as pessoas usuárias, independentemente do navegador ou tecnologia assistiva utilizada.

Participaram do processo de validação 55 pessoas com deficiência visual, sendo:

- 47 pessoas (85%) cegas;

- 8 pessoas (15%) com baixa visão.

As regiões Sudeste e Nordeste do Brasil foram as mais representadas, somando mais de 70% do total de participantes. A distribuição geográfica completa está detalhada na Tabela a seguir.

<div class="table-responsive">
<table class="table table-bordered table-striped table-hover table-dark text-white border-secondary" role="table" aria-label="Tabela com a distribuição geográfica dos participantes do teste de validação da tabela periódica acessível.">
<caption class="visually-hidden">Tabela 2: Distribuição geográfica dos participantes do teste de validação da tabela periódica acessível.</caption>
    <thead class="table-dark">
        <tr>
            <th scope="col">Região</th>
            <th scope="col">Porcentagem</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Sudeste</th>
            <td>40,00%</td>
        </tr>
        <tr>
            <th scope="row">Nordeste</th>
            <td>32,73%</td>
        </tr>
        <tr>
            <th scope="row">Sul</th>
            <td>16,36%</td>
        </tr>
        <tr>
            <th scope="row">Centro-Oeste</th>
            <td>9,09%</td>
        </tr>
        <tr>
            <th scope="row">Norte</th>
            <td>1,82%</td>
        </tr>
    </tbody>
    <caption>Fonte: Elaborada pela autora.</caption>
</table>
</div>

As áreas de atuaação das pessoas participantes estão distribuídas conforme a Tabela a seguir.

<div class="table-responsive">
<table class="table table-bordered table-striped table-hover table-dark text-white border-secondary" role="table" aria-label="Tabela com as profissões dos participantes do teste de validação da tabela periódica acessível.">
<caption class="visually-hidden">Tabela 3: Profissões dos participantes do teste de validação da tabela periódica acessível.</caption>
    <thead class="table-dark">
        <tr>
            <th scope="col">Profissão</th>
            <th scope="col">Quantidade de pessoas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Desenvolvimento de Software</th>
            <td>11</td>
        </tr>
        <tr>
            <th scope="row">Análise de Acessibilidade Digital</th>
            <td>8</td>
        </tr>
        <tr>
            <th scope="row">Advocacia</th>
            <td>4</td>
        </tr>
        <tr>
            <th scope="row">Esporte</th>
            <td>3</td>
        </tr>
        <tr>
            <th scope="row">Atuação</th>
            <td>3</td>
        </tr>
        <tr>
            <th scope="row">Empreendedorismo</th>
            <td>3</td>
        </tr>
        <tr>
            <th scope="row">Psicologia</th>
            <td>3</td>
        </tr>
        <tr>
            <th scope="row">Docência de área específica</th>
            <td>3</td>
        </tr>
        <tr>
            <th scope="row">Estudante</th>
            <td>2</td>
        </tr>
        <tr>
            <th scope="row">Massoterapia</th>
            <td>2</td>
        </tr>
        <tr>
            <th scope="row">Pedagogia</th>
            <td>2</td>
        </tr>
        <tr>
            <th scope="row">Informática</th>
            <td>2</td>
        </tr>
        <tr>
            <th scope="row">Análise de produtos</th>
            <td>1</td>
        </tr>
        <tr>
            <th scope="row">Ciência de dados</th>
            <td>1</td>
        </tr>
        <tr>
            <th scope="row">Funcionalismo público</th>
            <td>1</td>
        </tr>
        <tr>
            <th scope="row">Consultoria</th>
            <td>1</td>
        </tr>
        <tr>
            <th scope="row">Edição de áudio</th>
            <td>1</td>
        </tr>
        <tr>
            <th scope="row">Fisioterapia</th>
            <td>1</td>
        </tr>
        <tr>
            <th scope="row">Musicista</th>
            <td>1</td>
        </tr>
        <tr>
            <th scope="row">Revisão Braille</th>
            <td>1</td>
        </tr>
        <tr>
            <th scope="row">Terapia Ocupacional</th>
            <td>1</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th scope="row">Total</th>
            <td>55</td>
        </tr>
    </tfoot>
    <caption>Fonte: Elaborada pela autora.</caption>
</table>
</div>

Percebe-se uma diversidade significativa de áreas de atuação entre as pessoas participantes, porém há uma predominância de profissionais ligados à tecnologia e acessibilidade digital. Apesar disso, também há representantes de outras áreas, como advocacia, psicologia, docência e pedagogia, entre outras.

Essa variedade contribui para uma avaliação mais abrangente da tabela periódica acessível, considerando diferentes perspectivas e necessidades.

Os testes consistiram em:

- **Navegação por teclado**: Verificação da funcionalidade completa da tabela periódica utilizando apenas o teclado, garantindo que todas as interações possam ser realizadas sem o uso do mouse.

- **Leitura por leitores de tela**: Avaliação da compatibilidade da tabela periódica com diversos leitores de tela, assegurando que todas as informações sejam acessíveis e compreensíveis mantendo a semântica correta.

- **Uso no mobile**: Testes de usabilidade e acessibilidade em dispositivos móveis, verificando a responsividade do design e a facilidade de navegação em telas menores.

- **Testes com lupas eletrônicas**: Análise da legibilidade e usabilidade da tabela periódica quando ampliada por lupas eletrônicas, garantindo que o conteúdo permaneça claro e organizado mesmo em níveis elevados de zoom.

- **Avaliação de personalização visual**: Testes das funcionalidades de ajuste de contraste, tamanho de fonte e outras opções visuais para assegurar que as preferências da pessoa sejam aplicadas corretamente e que a tabela permaneça acessível em todas as configurações.

O objetivo era validar:

- A acessibilidade da tabela periódica para pessoas com diferentes condições visuais.

- A usabilidade em diversos dispositivos.

- A eficácia das opções de personalização visual.

- A compatibilidade com tecnologias assistivas populares.

- A manutenção da precisão semântica do conteúdo quando acessado por leitores de tela.

- A redução do custo cognitivo durante a navegação e interação com a tabela periódica.

- A satisfação geral das pessoas participantes com a experiência de uso da tabela periódica acessível.

Depois dos testes as pessoas participantes responderam, via formulário online, a uma pesquisa de satisfação com perguntas objetivas e subjetivas sobre a experiência de uso da tabela periódica acessível.

As perguntas do formulário foram:

<div class="table-responsive">
<table class="table table-bordered table-striped table-hover table-dark text-white border-secondary" role="table" aria-label="Tabela com as perguntas e possibilidades de respostas do questionário de satisfação.">
<caption class="visually-hidden">Tabela 4: Perguntas e possibilidades de respostas do questionário de satisfação.</caption>
    <thead class="table-dark">
        <tr>
            <th scope="col">Pergunta</th>
            <th scope="col">Possibilidades de resposta</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1. Compare a Tabela Periódica Acessível com outras tabelas periódicas que você já utilizou, apenas versões digitais (sites ou aplicativos) e considere os seguintes aspectos:
                <ul class="mt-4">
                    <li>Acessibilidade</li>
                    <li>Usabilidade</li>
                    <li>Design</li>
                </ul>
                Como você avaliaria a Tabela Periódica Acessível em relação a essas outras opções?
            </th>
            <td>
                <ul>
                    <li>Menos acessível, usável e com design pior.</li>
                    <li>Igualmente acessível, usável e com design semelhante.</li>
                    <li>Mais acessível, usável e com design melhor.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th scope="row">2. Quão fácil foi para você navegar e encontrar informações na Tabela Periódica Acessível usando apenas o teclado?</th>
            <td>
                <ul>
                    <li>Difícil.</li>
                    <li>Nem difícil, nem fácil.</li>
                    <li>Fácil.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th scope="row">3. A Tabela Periódica Acessível funcionou bem com o leitor de tela que você utiliza?</th>
            <td>
                <ul>
                    <li>Não funcionou bem.</li>
                    <li>Funcionou razoavelmente bem.</li>
                    <li>Funcionou perfeitamente.</li>
                    <li>Não utilizei leitor de tela.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th scope="row">4. Quão satisfatório foi o ajuste de contraste e tamanho de fonte na Tabela Periódica Acessível para atender às suas necessidades visuais?</th>
            <td>
                <ul>
                    <li>Insatisfatório.</li>
                    <li>Razoavelmente satisfatório.</li>
                    <li>Muito satisfatório.</li>
                    <li>Não utilizei esses recursos.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th scope="row">5. Você encontrou alguma dificuldade ao usar a Tabela Periódica Acessível em dispositivos móveis (smartphones ou tablets)?</th>
            <td>
                Resposta aberta (campo de texto livre).
            </td>
        </tr>
        <tr>
            <th scope="row">6. Com base na sua experiência, qual é o seu nível geral de satisfação com a Tabela Periódica Acessível? Sinta-se à vontade para compartilhar quaisquer comentários adicionais ou sugestões para melhorias.</th>
            <td>Resposta aberta (campo de texto livre).</td>
        </tr>
    </tbody>
    <caption>Fonte: Elaborada pela autora.</caption>
</table>
</div>

Esse questionamento aberto permitiu que as pessoas participantes expressassem suas opiniões e fornecessem feedback valioso para aprimorar a ferramenta.


## Resultados e Impacto {#resultados-e-impacto}
---

A seguir são apresentados os resultados obtidos a partir dos testes de validação da tabela periódica acessível, bem como o impacto observado na experiência de uso das pessoas participantes. A análise dos dados coletados revelou que a maioria das pessoas avaliou a tabela periódica acessível como uma ferramenta necessária e inovadora, destacando seu baixo custo cognitivo e a facilidade de navegação.

### Análise dos Resultados {#analise-dos-resultados}
---

**Pergunta 1**

<div class="text-center mb-4">
    <figcaption>Figura 5: Avaliação comparativa da tabela — acessibilidade, usabilidade e design.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/eeeaa7fe-f176-447b-b3d0-bae2815a0500/public" class="img-fluid shadow" alt="Gráfico de barras horizontais com a distribuição das respostas da Pergunta 1." />
    <figcaption class="visually-hidden">Descrição detalhada da imagem: A imagem apresenta um gráfico de barras horizontais em fundo escuro, intitulado “Pergunta 1 — Distribuição geral (pessoas cegas n=47, pessoas com baixa visão n=8) / Comparação com outras tabelas digitais (acessibilidade, usabilidade e design)”.
    <br />
    O gráfico resume 55 respostas no total (n=55) para uma pergunta de comparação com outras tabelas digitais, considerando acessibilidade, usabilidade e design.
    <br />
    Eixo horizontal (X): rotulado como “Percentual do total (n=55)”, com escala de 0 a 100%.
    <br />
    Eixo vertical (Y): lista três categorias de resposta (rótulos longos, alinhados à esquerda), correspondentes às avaliações possíveis.
    <br />
    Há três barras (uma por categoria), com os valores escritos junto às barras:
    <br />
    “Mais acessível/usável e design melhor” — barra muito mais longa, representando 89,1%, com 49 respostas indicadas como “89.1% (49)”.
    <br />
    “Igualmente acessível/usável e design semelhante” — barra bem menor, representando 10,9%, com 6 respostas indicadas como “10.9% (6)”.
    <br />
    “Menos acessível/usável e design pior” — categoria sem barra visível (valor zerado), indicada como 0,0%, com 0 respostas (“0.0% (0)”).
    </figcaption>
    <figcaption>Fonte: Elaborada pela autora.</figcaption>
</div>

A maioria expressiva dos participantes (89,1%) avaliou que a tabela é mais acessível, fácil de usar e apresenta melhor design do que outras tabelas digitais. Uma parcela menor (10,9%) percebeu equivalência entre as opções, enquanto nenhum participante considerou que a tabela era menos acessível ou apresentava um design inferior.

A tabela periódica acessível se destaca pelas qualidades de acessibilidade, usabilidade e design. Estes resultados evidenciam a necessidade de envolvimento de pessoas com deficiência no processo de desenvolvimento de recursos educacionais, garantindo que suas necessidades sejam atendidas e que a experiência de uso seja satisfatória.

**Pergunta 2**

<div class="text-center mb-4">
    <figcaption>Figura 6: Facilidade de navegação e de encontrar informações usando apenas o teclado.</figcaption>   
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/1c551c9d-ea77-4d7c-4b43-303f8e0c0100/public" class="img-fluid shadow" alt="Gráfico de barras horizontais da Pergunta 2 sobre navegar e encontrar informações só com teclado: 72,7% (40 pessoas) consideram fácil; 27,3% (15 pessoas) nem difícil nem fácil; 0% (0 pessoas) difícil." />
    <figcaption class="visually-hidden">Descrição detalhada da imagem: A imagem apresenta um gráfico de barras horizontais em fundo escuro, intitulado “Pergunta 2 — Distribuição geral (pessoas cegas n=47, pessoas com baixa visão n=8) / Facilidade de navegação e de encontrar informações usando apenas teclado”.
    <br />
    O gráfico resume 55 respostas (n=55) sobre a facilidade de navegação e de localizar informações utilizando somente o teclado.
    <br />
    Eixo horizontal (X): rotulado como “Percentual do total (n=55)”, com escala percentual iniciando em 0 e seguindo até aproximadamente 80 (com marcações regulares).
    <br />
    Eixo vertical (Y): contém três categorias de resposta.
    <br />
    As três barras e seus valores (percentual e contagem) são:
    <br />
    “Fácil” — a barra mais longa, com 72,7% (40), indicada no fim da barra como “72.7% (40)”.
    <br />
    “Nem difícil, nem fácil” — barra intermediária, com 27,3% (15), indicada como “27.3% (15)”.
    <br />
    “Difícil” — não há barra visível (valor zero), indicado como 0,0% (0).
    </figcaption>
    <figcaption>Fonte: Elaborada pela autora.</figcaption>
</div>

72,7% dos participantes acham fácil usar apenas o teclado para navegar e encontrar informações. 27,3% classificaram como neutro, e nenhum relatou dificuldades impeditivas (0%).

Os resultados mostram que a tabela periódica acessível permite navegação eficiente por teclado, beneficiando pessoas que precisam desta modalidade de navegação. A falta de relatos de dificuldade confirma a eficácia do design acessível. 

**Pergunta 3**

<div class="text-center mb-4">
    <figcaption>Figura 7: Funcionamento da Tabela Periódica Acessível com leitor de telas.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/3fee5239-ce97-4e84-7b0b-1b73313d5100/public" class="img-fluid shadow" alt="Gráfico de barras horizontais da Pergunta 3 sobre compatibilidade com leitores de tela: 78,2% (43 pessoas) consideram que funcionou perfeitamente; 16,4% (9 pessoas) que funcionou razoavelmente bem; 5,5% (3 pessoas) que não funcionou bem; 0% (0 pessoas) não utilizaram leitor de telas." />
    <figcaption class="visually-hidden">Descrição detalhada da imagem: A imagem apresenta um gráfico de barras horizontais em fundo escuro, com o título “Pergunta 3 — Distribuição geral (n=55) / A Tabela Periódica Acessível funcionou bem com o leitor de tela utilizado?”.
    <br />
    O gráfico resume 55 respostas (n=55) sobre a experiência de uso da Tabela Periódica Acessível em relação ao leitor de tela (quando utilizado).
    <br />
    Eixo horizontal (X): rotulado como “Percentual do total (n=55)”, com escala percentual iniciando em 0 e indo até cerca de 70 (com marcações regulares).
    <br />
    Eixo vertical (Y): lista quatro categorias de resposta, cada uma com uma barra correspondente.
    <br />
    As categorias e valores exibidos no final das barras (percentual e contagem) são:
    <br />
    1 “Funcionou perfeitamente” — barra mais longa, com 69,1% (38).
    <br />
    2 “Não utilizei leitor de tela” — segunda maior barra, com 14,5% (8).
    <br />
    3 “Funcionou razoavelmente bem” — barra menor, com 12,7% (7).
    <br />
    4 “Não funcionou bem” — barra curta, com 3,6% (2).
    </figcaption>
    <figcaption>Fonte: Elaborada pela autora.</figcaption>
</div>

Dos 55 participantes, a maior parte (69,1%) afirmou que a tabela funcionou perfeitamente com o leitor de telas usado. Uma parcela menor (14,5%) não utilizou o leitor de telas e 12,7% disseram que o funcionamento foi razoavelmente bom. Somente 3,6% dos entrevistados relataram que a tabela não funcionou bem.

Os participantes com baixa visão que não utilizaram leitores de tela recorreram a ampliadores (lupas), recursos de contraste e demais ferramentas de acessibilidade. Não foi possível identificar por que pessoas usuárias de leitores de tela avaliaram o funcionamento da tabela de maneiras tão diferentes, indo do "perfeito" ao "razoavelmente bem" ou "não funcionou bem". 

Vale ressaltar que cada participante apresenta diferentes níveis de habilidade ao usar leitores de tela, já que nem todos conhecem ou dominam totalmente as ferramentas oferecidas pelo software. Além disso, a compatibilidade pode ser afetada por fatores como a versão do leitor de telas, o sistema operacional e as configurações individuais.

Os resultados demonstram que a tabela periódica acessível apresenta compatibilidade consistente com leitores de tela, uma vez que a maior parte das pessoas usuárias relatou experiências positivas. Contudo, evidencia-se a necessidade de futuras pesquisas. Destaca-se a importância de considerar a diversidade de experiências e habilidades das pessoas usuárias para compreender as diferentes avaliações e identificar oportunidades de aprimoramento da ferramenta, caso necessário.

**Pergunta 4**

<div class="text-center mb-4">
    <figcaption>Figura 8: Satisfação com ajuste de contraste e tamanho de fonte.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/dbb59e77-f3ca-491d-43e8-5017245ae700/public" class="img-fluid shadow" alt="Gráfico de barras horizontais da Pergunta 4 sobre satisfação com ajuste de contraste e tamanho da fonte: 85,5% (47) não utilizaram esses recursos; 14,5% (8) consideraram muito satisfatório; 0% (0) razoavelmente satisfatório ou insatisfatório." />
    <figcaption class="visually-hidden">Descrição detalhada da imagem: A imagem apresenta um gráfico de barras horizontais em fundo escuro, com o título “Pergunta 4 — Distribuição geral (n=55) / Satisfação com ajuste de contraste e tamanho de fonte para atender às necessidades visuais”.
    <br />
    O gráfico resume 55 respostas (n=55) sobre a satisfação com recursos de ajuste de contraste e de tamanho de fonte (recursos tipicamente associados à personalização visual).
    <br />
    Eixo horizontal (X): rotulado como “Percentual do total (n=55)”, com escala percentual partindo de 0 e chegando até cerca de 90 (marcas regulares).
    <br />
    Eixo vertical (Y): contém quatro categorias de resposta, cada uma com seu rótulo à esquerda.
    <br />
    As barras e valores indicados são:
    <br />
    1 “Não utilizei esses recursos” — barra mais longa, com 85,5% (47), indicada no fim da barra como “85.5% (47)”.
    <br />
    2 “Muito satisfatório” — barra menor, com 14,5% (8), indicada como “14.5% (8)”.
    <br />
    3 “Insatisfatório” — não há barra visível, indicado como 0,0% (0).
    <br />
    4 “Razoavelmente satisfatório” — também sem barra visível, indicado como 0,0% (0).
    </figcaption>
    <figcaption>Fonte: Elaborada pela autora.</figcaption>
</div>

A maioria dos participantes (85,5%) indicou que não utilizou os recursos de ajuste de contraste e tamanho da fonte. Dos que avaliaram a experiência, 14,5% consideraram-na como muito satisfatória. Não foram observados registros de avaliação intermediária (razoavelmente satisfatório) ou de insatisfação, ambos com índice de 0%.

O pequeno número de pessoas que utilizaram o recurso se deve à baixa participação de pessoas com baixa visão na pesquisa, já que a maioria dos participantes eram pessoas cegas que utilizam leitores de tela. Uma possibilidade para aprimorar pesquisas futuras é investir esforços adicionais na inclusão de um número mais significativo de pessoas com baixa visão.

Embora a participação seja voluntária, a expansão das estratégias de divulgação pode potencialmente aumentar o número de participantes, contribuindo para uma avaliação mais robusta da ferramenta. Porém, é importante destacar que a satisfação expressa por aqueles que utilizaram os recursos de personalização visual é um indicativo positivo da eficácia desses recursos para atender às necessidades visuais das pessoas usuárias.

**Pergunta 5**

A pergunta 5 era aberta (campo de texto livre) e buscava identificar dificuldades específicas relacionadas ao uso da tabela periódica acessível em dispositivos móveis. As respostas foram analisadas qualitativamente para identificar temas comuns e insights (percepções ou entendimentos) sobre a experiência de uso em plataformas móveis.

A maioria dos participantes relatou que a tabela periódica acessível funcionou bem em dispositivos móveis, sem dificuldades significativas. As pessoas com baixa visão que utilizaram a tabela em smartphones ou tablets mencionaram que os recursos de personalização visual, como ajuste de contraste e tamanho de fonte, foram úteis para melhorar a legibilidade e a usabilidade da tabela em telas menores.

Além disso, a ideia de dividir a tabela periódica em diferentes modos de visualização e em "cartões" (elementos químicos apresentados em formato de cartões) foi destacada como uma solução eficaz para facilitar a navegação e a compreensão do conteúdo em dispositivos móveis, onde o espaço de tela é limitado. Essa abordagem permitiu que as pessoas usuárias que apresentam campo visual reduzido ou que utilizam lupas eletrônicas pudessem acessar as informações de maneira mais organizada e acessível, sem grande custo cognitivo ou fadiga visual.

Para as pessoas usuárias de leitores de tela, a experiência de uso em dispositivos móveis também foi positiva, com relatos de que a tabela periódica acessível manteve sua funcionalidade e compatibilidade com os leitores de tela. A possibilidade de "granular" (filtrar ou organizar) as informações em diferentes modos de visualização contribuiu para uma navegação mais eficiente e direcionada, permitindo que as pessoas usuárias pudessem acessar as informações de maneira mais rápida e intuitiva. 

A tabela periódica é uma ferramenta de consulta sobre os elementos químicos, e a possibilidade de acessar essas informações de maneira eficiente em dispositivos móveis é fundamental para garantir a inclusão e a equidade no acesso ao conhecimento científico. Os resultados indicam que a tabela periódica acessível foi bem-sucedida em atender às necessidades das pessoas usuárias em plataformas móveis, proporcionando uma experiência de uso satisfatória e inclusiva.

**Pergunta 6**

A pergunta 6 também era aberta (campo de texto livre) e buscava avaliar o nível geral de satisfação dos participantes com a tabela periódica acessível, além de permitir que eles compartilhassem comentários adicionais ou sugestões para melhorias. A análise qualitativa das respostas revelou um alto nível de satisfação geral com a tabela periódica acessível, com muitos participantes expressando entusiasmo e reconhecimento pela importância de uma ferramenta acessível para o ensino de Química.

Um ponto recorrente foi a insegurança em definir com precisão a fidelidade semântica da tabela periódica acessível. Muitas pessoas comentaram que suas dificuldades com o conteúdo de Química as levavam a se perguntar se suas dúvidas originavam-se de questões de acessibilidade ou simplesmente de problemas com um conteúdo que não dominam.

Houveram diversos relatos negativos relacionados a experiências educacionais das pessoas participantes, como a falta de recursos acessíveis em materiais didáticos, a ausência de apoio adequado por parte de instituições de ensino e a dificuldade em encontrar informações científicas apresentadas de forma inclusiva. Esses relatos reforçam a importância de iniciativas como a tabela periódica acessível, que visam preencher lacunas significativas na oferta de recursos educacionais para pessoas com deficiência visual.

Muitos participantes destacaram a relevância da tabela periódica acessível como uma ferramenta que promove a inclusão e a equidade no acesso ao conhecimento científico. Eles ressaltaram que a tabela não apenas facilita o aprendizado, mas também contribui para a autonomia e a participação ativa em ambientes educacionais.

### Ferramenta Disponível para Uso {#ferramenta-disponivel-para-uso}
---

A tabela periódica acessível está disponível para uso público no seguinte endereço: <a href="https://pcdnaescola.com.br/ferramentas-tabela-periodica-acessivel-para-pessoas-com-deficiencia/" target="_blank" rel="noopener noreferrer" class="text-break">https://pcdnaescola.com.br/ferramentas-tabela-periodica-acessivel-para-pessoas-com-deficiencia/</a>. A ferramenta pode ser acessada gratuitamente por qualquer pessoa interessada, sem necessidade de cadastro ou pagamento.

A metodologia permitiu desenvolver uma ferramenta que torna a tabela periódica acessível a pessoas com deficiência visual, comprovando sua viabilidade técnica e pedagógica. A seguir são destacados os principais aspectos relacionados à ultilização da tabela periódica acessível:

### 1. Modos de Visualização {#modos-de-visualizacao}
---

A tabela periódica pode ser visualizada de três maneiras diferentes: por períodos, por grupos e por categorias. Cada modo oferece uma perspectiva distinta sobre a organização dos elementos químicos, facilitando a compreensão das suas propriedades e relações.

<div class="text-center mb-4">
    <figcaption>Figura 9: Botões de controle para alternar entre os modos de visualização da tabela periódica (visualização por períodos, grupos e categorias).</figcaption>
     <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/fa712b1a-0440-4eb2-911f-c2d6b1ad5c00/public" class="img-fluid" alt="Botões de controle para alternar entre os modos de visualização da tabela periódica" />
    <figcaption class="visually-hidden">A imagem mostra uma barra de opções de visualização em fundo escuro. No canto esquerdo aparece o texto “Modo de visualização:”. À direita desse texto há três botões grandes, arredondados, alinhados horizontalmente. O primeiro botão está destacado em azul e traz um ícone de linhas empilhadas junto do texto “Por períodos”, indicando que essa opção está selecionada. O segundo botão é cinza escuro, com um ícone de colunas e o texto “Por grupos”. O terceiro botão também é cinza escuro e apresenta um ícone de formas geométricas junto do texto “Por categorias”. A imagem representa um menu onde a pessoa usuária pode escolher como deseja organizar ou visualizar as informações: por períodos, por grupos ou por categorias.</figcaption>
    <figcaption>Fonte: Elaborada pela autora.</figcaption>
</div>

#### 1.1 Visualização por Períodos {#visualizacao-por-periodos}
---

Os elementos estão organizados em seções que equivalem aos períodos (as linhas horizontais da tabela), tornando a tabela dividida em partes menores e mais fáceis de manejar, isso é especialmente útil em telas de smartphones, onde o conteúdo aparece na vertical.

<div class="text-center mb-4">
    <figcaption>Figura 10: Demonstração da visualização por períodos, com elementos agrupados em seções correspondentes a cada linha da tabela.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/6f7c129b-9d6e-4a40-d20b-7cbb1d7bdb00/public" class="img-fluid" alt="visualização do primeiro e segundo períodos da tabela periódica" />
    <figcaption class="visually-hidden">A imagem mostra uma parte de uma tabela periódica organizada por períodos, sobre um fundo escuro. No topo aparece o título “1º período”. Logo abaixo há dois cartões grandes e arredondados. O primeiro é branco e mostra a letra “H” no centro, com o nome “Hidrogênio” escrito abaixo, além das indicações “Período 1” na parte superior e “Coluna 1” na parte inferior. Ao lado dele há um cartão azul claro com a sigla “He” e o nome “Hélio”, também com “Período 1” no topo e “Coluna 18” na parte de baixo. <br /> Mais abaixo está o título “2º período”. Nessa parte aparecem quatro cartões coloridos alinhados lado a lado. O primeiro é roxo e mostra “Li” com o nome “Lítio”, indicando “Período 2” no topo e “Coluna 1” embaixo. O segundo é azul acinzentado, com “Be” e o nome “Berílio”, marcado como “Período 2” e “Coluna 2”. O terceiro é vermelho, com a letra “B” e o nome “Boro”, identificado como “Período 2” e “Coluna 13”. O quarto é verde, com a letra “C” e o nome “Carbono”, mostrando “Período 2” e “Coluna 14”. <br /> Cada cartão tem o símbolo do elemento em letras grandes no centro, o nome completo logo abaixo e pequenas setas para baixo, sugerindo que é possível abrir mais informações. A imagem representa um modo visual da tabela periódica em que os elementos aparecem como blocos separados por períodos, usando cores diferentes para facilitar a identificação e a organização.</figcaption>
    <figcaption>Fonte: Elaborada pela autora.</figcaption>
</div>

#### 1.2 Visualização por Grupos {#visualizacao-por-grupos}
---

Os elementos estão dispostos em grupos (colunas verticais), possibilitando que a pessoa examine elementos com propriedades químicas semelhantes. Essa estrutura de navegação também se mostra mais adequada para dispositivos com telas reduzidas.

<div class="text-center mb-4">
    <figcaption>Figura 11: Demonstração da visualização por grupos, com elementos organizados em colunas.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/550b29eb-4641-4cb6-59b9-6d4c77df1000/public" class="img-fluid" alt="visualização dos grupos 3 e 4 da tabela periódica" />
    <figcaption class="visually-hidden">
    A imagem mostra uma parte da tabela periódica organizada por grupos, sobre um fundo escuro. Na parte superior aparece o título “Grupo 3”. Abaixo dele há dois cartões grandes e arredondados, na cor amarela. O primeiro cartão mostra o símbolo “Sc” e o nome “Escândio”, com a indicação “Coluna 3” na parte superior e “Período 4” na parte inferior. Ao lado está outro cartão também amarelo com o símbolo “Y” e o nome “Ítrio”, identificado como “Coluna 3” e “Período 5”. Em ambos os cartões há uma pequena seta para baixo abaixo do nome do elemento, indicando que podem existir mais informações ao serem selecionados.
    <br />
    Mais abaixo aparece o título “Grupo 4”. Logo em seguida há quatro cartões amarelos alinhados horizontalmente. O primeiro mostra “Ti” e o nome “Titânio”, com as indicações “Coluna 4” e “Período 4”. O segundo apresenta “Zr” e o nome “Zircônio”, marcado como “Coluna 4” e “Período 5”. O terceiro cartão mostra “Hf” e o nome “Háfnio”, com “Coluna 4” e “Período 6”. O quarto cartão exibe “Rf” e o nome “Rutherfórdio”, identificado como “Coluna 4” e “Período 7”.
    <br />
    Todos os cartões têm o símbolo químico em letras grandes no centro, o nome completo do elemento logo abaixo e as informações de coluna e período em letras menores. A imagem representa um modo de visualização da tabela periódica por grupos, em que os elementos são apresentados em blocos separados e organizados verticalmente conforme pertencem à mesma coluna química, facilitando a comparação entre elementos do mesmo grupo.
    </figcaption>
    <figcaption>Fonte: Elaborada pela autora.</figcaption>
</div>

#### 1.3 Visualização por Categorias {#visualizacao-por-categorias}
---

Os elementos estão classificados de acordo com suas categorias químicas, distribuídos em quatro grupos principais. São eles:

- Metais

- Semimetais

- Não Metais

- Outros (Hidrogênio)

Ao agrupar elementos que compartilham características químicas, essa apresentação torna mais simples entender as propriedades e os comportamentos de cada um deles.

Por exemplo, no âmbito da categoria "Metais", estão incluídas subcategorias como Metais Alcalinos, Metais Alcalinoterrosos, Metais de Transição, Lantanídeos, Actinídeos e Outros Metais.

A categoria "Não Metais" inclui os não metais, halogênios e gases nobres, enquanto o hidrogênio é classificado separadamente em "Outros" devido às suas características únicas.

Essa estrutura facilita a exploração didática da tabela periódica e a compreensão das relações e classificações dos elementos.

<div class="text-center mb-4">
    <figcaption>Figura 12: Exemplo da categoria "Semimetais" na visualização por categorias.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/00bf013e-2494-4376-ba30-04a57a056c00/public" class="img-fluid" alt="Semimetais na visualização por categorias" />
    <figcaption class="visually-hidden">
    A imagem mostra uma parte da tabela periódica organizada por categoria, com o título “Semimetais” centralizado no topo, sobre um fundo escuro. Abaixo do título aparecem vários cartões grandes, arredondados e todos na cor vermelha, distribuídos em duas linhas. Na primeira linha há quatro cartões. O primeiro mostra a letra “B” e o nome “Boro”, com a indicação “Período 2” na parte superior e “Grupo 13” na parte inferior. Ao lado dele está o cartão do “Si”, com o nome “Silício”, identificado como “Período 3” e “Grupo 14”. Em seguida aparece o cartão do “Ge”, com o nome “Germânio”, marcado como “Período 4” e “Grupo 14”. O quarto cartão dessa linha mostra “As” e o nome “Arsênio”, com as informações “Período 4” e “Grupo 15”.
    <br />
    Na segunda linha há três cartões também vermelhos. O primeiro apresenta “Sb” e o nome “Antimônio”, com “Período 5” e “Grupo 15”. O segundo mostra “Te” e o nome “Telúrio”, identificado como “Período 5” e “Grupo 16”. O terceiro cartão exibe “Po” e o nome “Polônio”, com “Período 6” e “Grupo 16”.
    <br />
    Em todos os cartões, o símbolo químico aparece em letras grandes no centro, o nome completo do elemento logo abaixo e, mais embaixo, uma pequena seta apontando para baixo, indicando que é possível acessar mais informações. A imagem representa um modo de visualização da tabela periódica por categorias, reunindo apenas os elementos classificados como semimetais e mostrando de forma clara seus períodos e grupos.
    </figcaption>
    <figcaption>Fonte: Elaborada pela autora.</figcaption>
</div>

<div class="text-center mb-4">
    <figcaption>Figura 13: Exemplo da categoria "Não Metais" na visualização por categorias.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/74c6cb47-115f-4972-7e14-266316dd8600/public" class="img-fluid" alt="Não metais na visualização por categorias" />
    <figcaption class="visually-hidden">
    A imagem mostra uma parte da tabela periódica organizada por categoria, com o título “Não Metais” no centro da parte superior, sobre um fundo escuro. Abaixo do título aparecem vários cartões grandes, arredondados e todos na cor verde, distribuídos em duas linhas.
    <br />
    Na primeira linha há quatro cartões. O primeiro apresenta a letra “C” e o nome “Carbono”, com a indicação “Período 2” na parte superior e “Grupo 14” na parte inferior. Ao lado dele está o cartão do “N”, com o nome “Nitrogênio”, identificado como “Período 2” e “Grupo 15”. Em seguida aparece o cartão do “O”, com o nome “Oxigênio”, marcado como “Período 2” e “Grupo 16”. O quarto cartão dessa linha mostra “P” e o nome “Fósforo”, com as informações “Período 3” e “Grupo 15”.
    <br />
    Na segunda linha há dois cartões verdes. O primeiro mostra a letra “S” e o nome “Enxofre”, com a indicação “Período 3” e “Grupo 16”. Ao lado dele está o cartão do “Se”, com o nome “Selênio”, identificado como “Período 4” e “Grupo 16”.
    <br />
    Em todos os cartões, o símbolo químico aparece em letras grandes no centro, o nome completo do elemento logo abaixo e, mais embaixo, uma pequena seta apontando para baixo, indicando que é possível abrir mais informações. A imagem representa um modo de visualização da tabela periódica por categorias, reunindo apenas os elementos classificados como não metais e mostrando de forma clara seus períodos e grupos.
    </figcaption>
    <figcaption>Fonte: Elaborada pela autora.</figcaption>
</div>

### 2. Painel de Controle {#painel-de-controle}
---

Um painel de controle fixo no topo permite alternar entre períodos, grupos, categorias e ativar ou desativar as cores da tabela.

<div class="text-center mb-4">
    <figcaption>Figura 14: Painel de controle da tabela periódica, com opções para alternar visualizações e ativar/desativar cores.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/afcad38c-2abe-484b-6d3e-942882041c00/public" class="img-fluid" alt="Painel de controle da tabela periódica" />
    <figcaption class="visually-hidden">
    A imagem mostra um painel de configurações em fundo escuro, com cantos arredondados, organizado em duas partes principais. Na parte superior aparece o texto “Modo de visualização:”, acompanhado de um pequeno ícone ao lado esquerdo. Logo abaixo desse título há três botões grandes e arredondados, dispostos horizontalmente. O primeiro botão está destacado em azul e contém um ícone de linhas empilhadas junto do texto “Por períodos”, indicando que esta opção está selecionada no momento. Ao lado dele há um segundo botão em cinza escuro com um ícone de colunas e o texto “Por grupos”. O terceiro botão, também em cinza escuro, apresenta um ícone de formas geométricas e o texto “Por categorias”.
    <br />
    Abaixo dessa primeira área existe uma linha horizontal que separa as seções. Em seguida aparece o texto “Visualização com cores:”, acompanhado de um ícone que lembra uma paleta de pintura. Logo abaixo desse texto há um botão arredondado em tom escuro com o rótulo “Ativar cores” e um pequeno ícone de conta-gotas, indicando que é possível ligar ou desligar o uso de cores na visualização dos elementos.
    <br />
    No conjunto, a imagem representa um menu de opções onde a pessoa usuária pode escolher como deseja visualizar a tabela ou os conteúdos — por períodos, por grupos ou por categorias — e também decidir se quer ativar ou não uma visualização colorida.
    </figcaption>
    <figcaption>Fonte: Elaborada pela autora.</figcaption>
</div>

Ao habilitar a visualização por períodos, o painel apresenta uma seção intitulada "Navegue pelos períodos da tabela", composta por botões referentes aos sete períodos, bem como opções específicas para lantanídeos e actinídeos. A seleção de qualquer um desses botões direciona a pessoa imediatamente para a respectiva seção da página.

<div class="text-center mb-4">
    <figcaption>Figura 15: Painel de navegação por períodos, com botões para cada período, lantanídeos e actinídeos.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/08252ef4-b9e3-4c16-73c0-491563db6c00/public" aria-hidden="true" class="img-fluid" />
    <figcaption class="visually-hidden">A imagem mostra um painel de navegação em fundo escuro, com cantos arredondados, pensado para facilitar a exploração da tabela periódica. No canto esquerdo do painel há um ícone circular com três linhas horizontais, semelhante a um menu. Ao lado desse ícone aparece o texto “Navegue pelos períodos da tabela”, indicando o objetivo da área.
    <br />
    Logo abaixo desse título há uma sequência de botões pequenos, ovais e de cor cinza escuro, alinhados horizontalmente. Cada botão representa um período da tabela periódica e traz os rótulos “1º Período”, “2º Período”, “3º Período”, “4º Período”, “5º Período”, “6º Período” e “7º Período”. Esses botões sugerem que a pessoa usuária pode selecionar diretamente o período que deseja visualizar.
    <br />
    Abaixo dessa primeira linha de botões há dois outros botões semelhantes, também ovais e escuros, com os rótulos “Lantanídeos” e “Actinídeos”, permitindo o acesso direto a esses conjuntos específicos de elementos químicos.
    <br />
    No conjunto, a imagem representa um componente de navegação simples e organizado, que permite escolher rapidamente diferentes períodos da tabela periódica ou acessar grupos especiais, de forma clara e fácil de usar.
    </figcaption>
    <figcaption>Fonte: Elaborada pela autora.</figcaption>
</div>

Na visualização por grupos, o painel mostra botões para cada um dos 18 grupos e para lantanídeos e actinídeos. Ao clicar em um botão, a pessoa vai direto à seção correspondente.

<div class="text-center mb-4">
    <figcaption>Figura 16: Painel de navegação por grupos, com botões para os 18 grupos, lantanídeos e actinídeos.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/dee30e7b-9132-4219-ab2d-07521b680600/public" aria-hidden="true" class="img-fluid" />
    <figcaption class="visually-hidden">A imagem mostra um painel de navegação em fundo escuro, com bordas arredondadas, voltado para a exploração da tabela periódica por grupos. No canto esquerdo há um ícone circular com o desenho de colunas verticais, indicando a ideia de organização por grupos. Ao lado desse ícone aparece o texto “Navegue pelos grupos da tabela”, que explica a função do painel.
    <br />
    Abaixo do título há vários botões pequenos, ovais e em tom de cinza escuro, distribuídos em duas linhas principais. Na primeira linha aparecem os botões “Grupo 1”, “Grupo 2”, “Grupo 3”, “Grupo 4”, “Grupo 5”, “Grupo 6”, “Grupo 7”, “Grupo 8” e “Grupo 9”. Logo abaixo, na segunda linha, estão os botões “Grupo 10”, “Grupo 11”, “Grupo 12”, “Grupo 13”, “Grupo 14”, “Grupo 15”, “Grupo 16” e “Grupo 17”.
    <br />
    Na parte inferior do painel há mais três botões semelhantes, com os rótulos “Grupo 18”, “Lantanídeos” e “Actinídeos”. Esses botões permitem acessar rapidamente tanto o último grupo da tabela periódica quanto os conjuntos especiais de elementos.
    <br />
    No conjunto, a imagem representa um menu de navegação claro e organizado, que possibilita escolher diretamente qualquer grupo da tabela periódica ou acessar categorias específicas, facilitando a exploração e a compreensão da estrutura da tabela.
    </figcaption>
    <figcaption>Fonte: Elaborada pela autora.</figcaption>
</div>

Na visualização por categorias, o painel apresenta a seção "Navegue pelas categorias da tabela", exibindo botões hierarquicamente organizados de acordo com as quatro principais categorias: Metais (com subdivisões como Alcalinos, Alcalinoterrosos, Transição, entre outras), Semimetais, Não Metais (incluindo Halogênios e Gases Nobres) e Outros (Hidrogênio). Ao selecionar um desses botões, a pessoa é direcionada para a respectiva categoria ou subcategoria, promovendo uma navegação eficiente pelo tipo de elemento químico.

<div class="text-center mb-4">
    <figcaption>Figura 17: Painel de navegação por categorias, com botões organizados hierarquicamente.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/a6cf2451-92d0-4f8e-b17b-1d10bfae7000/public" aria-hidden="true" class="img-fluid" />
    <figcaption class="visually-hidden">A imagem mostra um painel de navegação em fundo escuro, com cantos arredondados, dedicado à exploração da tabela periódica por categorias. No canto esquerdo há um ícone que representa diferentes formas geométricas, indicando classificação ou agrupamento. Ao lado desse ícone aparece o texto “Navegue pelas categorias da tabela:”, que explica a função do painel.
    <br />
    Abaixo do título há vários botões ovais, em tom de cinza escuro, organizados em duas linhas. Na primeira linha aparecem os botões “Metais Alcalinos”, “Alcalinoterrosos”, “Metais de Transição”, “Lantanídeos”, “Actinídeos” e “Outros Metais”. Na segunda linha estão os botões “Semimetais”, “Não Metais”, “Halogênios”, “Gases Nobres” e “Hidrogênio”.
    <br />
    Todos os botões têm o mesmo formato e estilo visual, sugerindo que podem ser selecionados para filtrar ou navegar entre os diferentes tipos de elementos químicos. No conjunto, a imagem representa um menu claro e organizado que permite escolher categorias específicas da tabela periódica, facilitando a navegação e o entendimento da classificação dos elementos.
    </figcaption>
    <figcaption>Fonte: Elaborada pela autora.</figcaption>
</div>

### 3. Cartões de Elementos Químicos {#cartoes-de-elementos-quimicos}
---

Cada elemento químico aparece em um cartão com símbolo, nome, período e coluna.

<div class="text-center mb-4">
    <figcaption>Figura 18: Cartão interativo do elemento Boro</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/22f300fb-5e4d-45ea-3131-3f47f6848d00/public" aria-hidden="true" class="img-fluid" />
    <figcaption class="visually-hidden">Exemplo de cartão de elemento químico. O cartão é um quadrado com bordas arredondadas. O elemento do exemplo é o Boro, no cartão está sendo exibido o símbolo (B), o nome (Boro), o período (2) e a coluna (13) que é onde ele está localizado na tabela periódica.
    </figcaption>
    <figcaption>Fonte: Elaborada pela autora.</figcaption>
</div>

Estes cartões permitem interação: ao usar o mouse, tocar na tela ou pressionar <em>Enter</em>, uma janela modal surge exibindo dados detalhados do elemento, incluindo símbolo, nome, número atômico, massa atômica e configuração eletrônica.

### 4. <em>Modal</em> de Detalhes do Elemento {#modal-de-detalhes-do-elemento}
---

Ao acessar um cartão de elemento por clique, toque ou <em>Enter</em>, abre-se uma janela <em>modal</em> com informações detalhadas.

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

<div class="text-center mb-4">
    <figcaption>Figura 19: Representação visual da distribuição eletrônica do Hidrogênio.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/c7c023b7-c298-4a7a-772f-9005930f1100/public" class="img-fluid" alt="Diagrama ilustrativo da distribuição eletrônica do Hidrogênio" />
        <figcaption class="visually-hidden">A imagem mostra uma representação visual simples da distribuição eletrônica do hidrogênio, sobre um fundo preto. No centro aparece um pequeno círculo cinza, que representa o núcleo do átomo. Ao redor desse núcleo há um único círculo fino na cor azul-clara, formando uma órbita eletrônica. Sobre essa órbita existe apenas um pequeno ponto azul-claro, que representa o único elétron do hidrogênio, girando em volta do núcleo. Perto da parte superior da órbita está a letra “K”, indicando a camada eletrônica K, que é a primeira e única camada ocupada nesse elemento. A imagem ilustra de forma didática que o hidrogênio possui apenas um elétron distribuído na camada mais interna do átomo.
    </figcaption>
    <figcaption>Fonte: Elaborada pela autora.</figcaption>
</div>

  - <strong>Linear (textual)</strong>: A notação científica padrão da distribuição eletrônica, apresentada em formato de texto sequencial. Exemplo: Camada 1: 1s¹. A leitura dessa notação é direta, sequencial e construída usando atributos <em>ARIA</em> para garantir que leitores de tela anunciem corretamente cada parte da configuração eletrônica.

<div class="text-center mb-4">
    <figcaption>Figura 20: Modal de detalhes do elemento, exibindo informações completas e acessíveis.</figcaption>
    <img src="https://imagedelivery.net/Ruw4waFkOelbXULIoE-oQg/6dc29fb6-d403-40e4-1dea-0017e6efd300/public" class="img-fluid" alt="Janela pop-up de informações do elemento Boro" />
    <figcaption class="visually-hidden">
    A imagem mostra uma janela de detalhes aberta sobre a tabela periódica, com foco no elemento Boro, em uma interface de fundo escuro. No topo da janela aparece o título “Boro” e, no canto superior direito, há um botão em forma de “X” para fechar o painel. Logo abaixo está o subtítulo “Informações”, indicando que se trata de um painel informativo.
    <br />
    Na parte superior do conteúdo há uma ilustração em estilo de carta, semelhante a um cartão educativo. Nela aparece a letra “B”, o nome “Boro”, o número atômico “5” e a indicação “Equipamentos Esportivos”, acompanhada do desenho de uma raquete e uma bola, sugerindo um uso ou associação simbólica do elemento. Abaixo dessa ilustração estão listadas várias informações textuais: o grupo químico “Semimetal”, o símbolo “B”, o número atômico “5” e o número de massa “10,81”.
    <br />
    Mais abaixo aparece a seção “Distribuição eletrônica”, acompanhada de um diagrama visual do átomo. Esse diagrama mostra um núcleo central em cinza e duas camadas eletrônicas circulares, identificadas pelas letras “K” e “L”. Pequenos pontos azuis sobre essas órbitas representam os elétrons distribuídos ao redor do núcleo. Logo abaixo do desenho, a distribuição eletrônica é detalhada em texto, indicando: “Camada 1: 1s2” e “Camada 2: 2s2 2p1”.
    <br />
    Na parte inferior da janela há um botão com o texto “Voltar à tabela”, indicando que a pessoa usuária pode fechar o painel e retornar à visualização geral da tabela periódica. Ao fundo, de forma desfocada e escurecida, ainda é possível perceber outros cartões da tabela periódica, como Lítio, Carbono, Nitrogênio, Neônio, Silício e Argônio, mostrando que o painel do Boro está sobreposto à tabela principal.
    </figcaption>
    <figcaption>Fonte: Elaborada pela autora.</figcaption>
</div>

## Considerações Finais {#consideracoes-finais}
---

Este artigo teve como objetivo investigar desafios e estratégias para o ensino da tabela periódica a estudantes com deficiência visual e, a partir disso, propor e validar uma ferramenta digital acessível. Esse objetivo foi alcançado por meio do desenvolvimento de uma Tabela Periódica Acessível baseada em tecnologias <em>Web</em> e em princípios de acessibilidade, contemplando o uso de <em>HTML</em> semântico, textos alternativos, compatibilidade com leitores de tela, navegação por teclado e rotulagem adequada com <em>ARIA</em>, além de modos de visualização que organizam o conteúdo em blocos menores e mais manejáveis.

Os resultados obtidos na validação indicam que a proposta responde diretamente ao problema da pesquisa: é possível disponibilizar a tabela periódica em formato digital sem que o recurso se torne uma barreira para pessoas com deficiência visual. A maioria dos participantes considerou a ferramenta mais acessível, mais usável e com melhor design do que outras tabelas digitais (89,1%). Também se observou boa avaliação da navegação por teclado (72,7% classificaram como fácil) e do funcionamento com leitores de tela (69,1% relataram funcionamento perfeito). Em conjunto, esses achados sugerem que as decisões de design e a estrutura técnica adotada contribuíram para reduzir barreiras, favorecendo autonomia e consistência na experiência de uso.

Como contribuição prática, a pesquisa disponibiliza uma ferramenta gratuita e pública que pode ser incorporada ao contexto educacional como recurso de apoio ao ensino de Química, especialmente quando se busca ampliar a autonomia e a participação de estudantes com deficiência visual. Do ponto de vista teórico e metodológico, o trabalho reforça a internet e o desenvolvimento <em>Web</em> como tecnologias assistivas viáveis, evidenciando que acessibilidade não é um complemento, mas um requisito estruturante do projeto. Além disso, o estudo exemplifica um caminho replicável de concepção de recursos educacionais: combinar princípios de Desenho Universal, boas práticas de acessibilidade e validação com pessoas usuárias para orientar decisões de desenvolvimento.

Apesar dos resultados positivos, algumas limitações devem ser consideradas. A amostra foi restrita e apresentou baixa participação de pessoas com baixa visão, o que reduz a generalização dos achados para todo o espectro da deficiência visual. A avaliação também foi baseada predominantemente em percepções de uso (questionário), sem contemplar medidas diretas de aprendizagem ou acompanhamento longitudinal em sala de aula. Adicionalmente, a experiência pode variar conforme dispositivo, sistema operacional, versão do leitor de tela e nível de familiaridade das pessoas participantes com tecnologias assistivas.

Como continuidade, recomenda-se ampliar a pesquisa com maior diversidade de participantes (incluindo mais pessoas com baixa visão) e com estudos em ambientes educacionais reais, investigando não apenas usabilidade e acessibilidade, mas também impactos no aprendizado, na motivação e na participação em atividades de Química. Outra direção relevante é aprofundar testes comparativos entre diferentes leitores de tela e plataformas, bem como aprimorar estratégias pedagógicas de uso da ferramenta (por exemplo, roteiros didáticos e orientações para docentes) para fortalecer sua integração ao currículo.

Por fim, novas investigações podem explorar a combinação de recursos digitais acessíveis com abordagens multissensoriais (como materiais táteis), buscando ampliar ainda mais as possibilidades de ensino inclusivo de conteúdos que dependem fortemente de representações visuais. A pesquisa reforça a importância de considerar a diversidade de necessidades e experiências das pessoas com deficiência visual no desenvolvimento de recursos educacionais, promovendo uma educação mais inclusiva, equitativa e centrada na autonomia dos estudantes.

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