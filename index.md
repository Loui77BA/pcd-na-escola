---
layout: default
title: "Página Inicial"
permalink: /
description: "O PcD na Escola é um projeto que visa promover a educação e tecnologia para todas as pessoas, com foco na acessibilidade e inclusão de pessoas com deficiência."
---
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

<style>
  body {
    font-family: 'Poppins', sans-serif;
  }
  
  .btn-primary-gradient {
    background: linear-gradient(90deg, #8257e5, #6c4ed9);
    border: none;
    transition: all 0.2s ease;
  }
  .btn-primary-gradient:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(130, 87, 229, 0.4);
  }
  
  .btn-outline-custom {
    border: 1px solid rgba(255,255,255,0.2);
    color: #e1e1e6;
    background: transparent;
    transition: all 0.2s ease;
  }
  .btn-outline-custom:hover {
    background: rgba(130, 87, 229, 0.1);
    color: #ffffff; 
    border-color: #8257e5;
  }
  
  .text-gradient {
    background: linear-gradient(90deg, #8257e5, #6c4ed9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .header-bg {
    background: #121214;
  }
  
  .card-hover {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  }
  
  .card-simple {
    background: #1a1a1d;
    border: 1px solid rgba(130, 87, 229, 0.2);
    border-radius: 8px;
  }
  
  .card-icon-bg {
    background: rgba(130, 87, 229, 0.1);
    color: #8257e5;
    width: 60px;
    height: 60px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .section-bg-alt {
    background: #1a1a1d;
  }
  
  .accent-border {
    border-left: 3px solid #8257e5;
    padding-left: 1rem;
  }
</style>
<header class="py-5 header-bg" role="banner">
    <div class="container px-4">
        <div class="row gx-5 align-items-center justify-content-center">
            <div class="col-lg-7 col-xl-6">
                <div class="my-5 text-center text-xl-start">
                    <h1 class="display-4 fw-bold text-white mb-4">
                        <span class="text-gradient">Educação e tecnologia</span>
                        <span class="d-block mt-2">para todas as pessoas</span>
                    </h1>
                    <p class="lead text-white-50 mb-4 accent-border">
                        "Para as pessoas sem deficiência, a tecnologia torna as coisas mais fáceis. Para as pessoas com deficiência, a tecnologia torna as coisas possíveis" 
                        <span class="d-block mt-2 text-white">— Mary Pat Rabanaugh</span>
                    </p>
                    <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                        <a class="btn btn-primary-gradient btn-lg px-4 py-3 rounded-pill" href="#target-audiences" role="button">
                            <i class="material-icons align-middle me-2">explore</i>Saiba mais
                        </a>
                        <a class="btn btn-outline-custom btn-lg px-4 py-3 rounded-pill" href="/contato" role="button">
                            <i class="material-icons align-middle me-2">mail_outline</i>Contato
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-xl-5 text-center">        
                <div style="border-radius: 8px; overflow: hidden;">
                    <div style="position: relative; padding-top: 56.25%;">
                        <iframe
                            src="https://customer-n8imyf4ea5hvxexl.cloudflarestream.com/bdb671eacec4dc6db44cd7729bece654/iframe?poster=https%3A%2F%2Fimagedelivery.net%2FRuw4waFkOelbXULIoE-oQg%2F9da6e101-1fe1-46f8-b533-b0cfd9c49e00%2Fpublic"
                            loading="lazy"
                            style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%; border-radius: 8px;"
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                            allowfullscreen="true"
                            title="Vídeo de apresentação"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<section class="py-5 section-bg-alt" role="region" aria-labelledby="target-audiences">
    <div class="container px-5">
        <h2 id="target-audiences" class="fw-bold mb-5 text-center">
            <span class="d-block text-gradient text-uppercase mb-2" style="font-size: 0.875rem; letter-spacing: 2px;">Foco principal</span>
            <span class="display-5">Públicos que queremos alcançar</span>
        </h2>
        <div class="row gx-4 justify-content-center">
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="card h-100 card-simple card-hover">
                    <div class="card-body p-4 text-center">
                        <div class="card-icon-bg mx-auto mb-3">
                            <i class="material-icons fs-3" aria-hidden="true">location_on</i>
                        </div>
                        <h3 class="fw-bold text-white h5 mb-3">Nordeste</h3>
                        <p class="text-white-50 mb-0 small">Há mais pessoas com deficiência fora da escola do que a média nacional.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="card h-100 card-simple card-hover">
                    <div class="card-body p-4 text-center">
                        <div class="card-icon-bg mx-auto mb-3">
                            <i class="material-icons fs-3" aria-hidden="true">location_city</i>
                        </div>
                        <h3 class="fw-bold text-white h5 mb-3">Interior</h3>
                        <p class="text-white-50 mb-0 small">É difícil acessar informações especializadas porque fica longe dos grandes centros.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="card h-100 card-simple card-hover">
                    <div class="card-body p-4 text-center">
                        <div class="card-icon-bg mx-auto mb-3">
                            <i class="material-icons fs-3" aria-hidden="true">diversity_1</i>
                        </div>
                        <h3 class="fw-bold text-white h5 mb-3">Comunidade</h3>
                        <p class="text-white-50 mb-0 small">O capacitismo acontece em todos os lugares e combater isso precisa de ações conjuntas.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="card h-100 card-simple card-hover">
                    <div class="card-body p-4 text-center">
                        <div class="card-icon-bg mx-auto mb-3">
                            <i class="material-icons fs-3" aria-hidden="true">school</i>
                        </div>
                        <h3 class="fw-bold text-white h5 mb-3">Escolas</h3>
                        <p class="text-white-50 mb-0 small">Para colaborar com a comunidade escolar, docentes, estudantes e familiares.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="py-5" role="region" aria-labelledby="vision-mission">
    <div class="container px-5">
        <div class="row gx-5 mb-4">
            <div class="col-lg-6 mb-4 mb-lg-0">
                <h2 id="vision" class="fw-bold mb-3">
                    <span class="h3">Visão</span>
                </h2>
                <p class="text-white-50 mb-3 accent-border">
                    Queremos ser um lugar excelente para compartilhar conteúdo sobre educação, tecnologia e acessibilidade, ajudando na formação crítica de pessoas com deficiência.
                </p>
                <div style="border-radius: 8px; overflow: hidden; border: 1px solid rgba(130, 87, 229, 0.2);">
                    <img class="img-fluid" 
                        src="https://media.istockphoto.com/id/474967218/photo/portrait-of-boy-sitting-in-wheelchair-at-library.jpg?s=612x612&w=0&k=20&c=-awiQc39xdn0XlMrOgfWhyjBcNnYh-I8HnEIf3cvnwg=" 
                        alt="Menino em cadeira de rodas na biblioteca" 
                        loading="lazy">
                </div>
            </div>
            <div class="col-lg-6">
                <h2 id="mission" class="fw-bold mb-3">
                    <span class="h3">Missão</span>
                </h2>
                <p class="text-white-50 mb-3 accent-border">
                    Queremos facilitar o acesso ao conhecimento e à tecnologia, independentemente das necessidades educacionais específicas de quem deseja aprender.
                </p>
                <div style="border-radius: 8px; overflow: hidden; border: 1px solid rgba(130, 87, 229, 0.2);">
                    <img class="img-fluid" 
                        src="https://media.istockphoto.com/id/1323184150/photo/her-disability-doesnt-stop-her-from-being-a-successful-businesswoman.jpg?s=612x612&w=0&k=20&c=qnr9GU2wt_XrikxPbYin89x6tAzSpcgfhUBXOTG4_FQ=" 
                        alt="Mulher profissional com deficiência" 
                        loading="lazy">
                </div>
            </div>
        </div>
    </div>
</section>

<section class="py-5 section-bg-alt" role="region" aria-labelledby="challenges">
    <div class="container px-5">
        <div class="row gx-5 align-items-center">
            <div class="col-lg-6 mb-4 mb-lg-0">
                <h2 id="challenges" class="fw-bold mb-4">
                    <span class="d-block text-gradient text-uppercase mb-2" style="font-size: 0.875rem; letter-spacing: 2px;">O que enfrentamos</span>
                    <span class="h3">Desafios na Educação</span>
                </h2>
                <p class="text-white-50 mb-4">
                    Pessoas com deficiência enfrentam diversas barreiras no ambiente educacional, desde a falta de acessibilidade física até a ausência de materiais didáticos adaptados. Muitas escolas e universidades ainda não estão preparadas para oferecer um ambiente verdadeiramente inclusivo.
                </p>
                <div class="p-4 card-simple">
                    <p class="text-white-50 mb-0">
                        A falta de capacitação dos profissionais da educação e a escassez de recursos tecnológicos assistivos também são obstáculos significativos que precisam ser superados para garantir uma educação de qualidade para todos.
                    </p>
                </div>
            </div>
            <div class="col-lg-6">
                <div style="border-radius: 8px; overflow: hidden;">
                    <div style="position:relative;padding-top:56.25%;">
                        <iframe id="panda-25f13c60-bac7-45a9-be54-d519419335b7" 
                                src="https://player-vz-480faebf-94f.tv.pandavideo.com.br/embed/?v=25f13c60-bac7-45a9-be54-d519419335b7" 
                                style="border:none;position:absolute;top:0;left:0;width:100%;height:100%;" 
                                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
                                allowfullscreen=true 
                                fetchpriority="high"
                                title="Vídeo sobre desafios na educação">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="py-5" role="region" aria-labelledby="principles">
    <div class="container px-5">
        <h2 id="principles" class="fw-bold mb-5 text-center">
            <span class="d-block text-gradient text-uppercase mb-2" style="font-size: 0.875rem; letter-spacing: 2px;">Nossos valores</span>
            <span class="display-5">Princípios</span>
        </h2>
        <div class="row gx-4 justify-content-center">
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100 card-simple card-hover">
                    <div class="card-body p-4 text-center">
                        <div class="card-icon-bg mx-auto mb-3">
                            <i class="material-icons fs-3" aria-hidden="true">group</i>
                        </div>
                        <h3 class="fw-bold text-white h5 mb-3">Humanidade</h3>
                        <p class="text-white-50 mb-0 small">A naturalização da pessoa com deficiência enquanto ser humano, afastando-se por completo do padrão que tende a extremos de inferioridade e superação.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100 card-simple card-hover">
                    <div class="card-body p-4 text-center">
                        <div class="card-icon-bg mx-auto mb-3">
                            <i class="material-icons fs-3" aria-hidden="true">diversity_2</i>
                        </div>
                        <h3 class="fw-bold text-white h5 mb-3">Respeito</h3>
                        <p class="text-white-50 mb-0 small">O respeito absoluto e incondicional a laicidade e aos valores políticos, jurídicos e sociais do Estado Democrático de Direito na abordagem sobre a deficiência.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100 card-simple card-hover">
                    <div class="card-body p-4 text-center">
                        <div class="card-icon-bg mx-auto mb-3">
                            <i class="material-icons fs-3" aria-hidden="true">gavel</i>
                        </div>
                        <h3 class="fw-bold text-white h5 mb-3">Combate</h3>
                        <p class="text-white-50 mb-0 small">O combate ao preconceito inclusive entre as diferentes comunidades de pessoas com deficiência e a equivocada hierarquização de deficiências.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
