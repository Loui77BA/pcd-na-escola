---
layout: default
title: "Página Inicial"
permalink: /
description: "O PcD na Escola é um projeto que visa promover a educação e tecnologia para todas as pessoas, com foco na acessibilidade e inclusão de pessoas com deficiência."
---
<!-- Adiciona fonte Poppins para um visual mais moderno semelhante à Rocketseat -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

<style>
  body {
    font-family: 'Poppins', sans-serif;
  }
  .btn-primary-gradient {
    background: linear-gradient(45deg, #8257e5, #4863f7);
    border: none;
    transition: all 0.3s ease;
  }
  .btn-primary-gradient:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(130, 87, 229, 0.3);
  }
  .btn-outline-custom {
    border: 1px solid rgba(255,255,255,0.2);
    color: #e1e1e6;
    background: rgba(32, 32, 36, 0.5);
    backdrop-filter: blur(4px);
    transition: all 0.3s ease;
  }
  .btn-outline-custom:hover {
    background: rgba(255,255,255,0.1);
    color: #ffffff; 
    border-color: rgba(255,255,255,0.3);
    transform: translateY(-3px);
  }
  .text-gradient {
    background: linear-gradient(90deg, #8257e5, #4863f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .header-bg {
    background: linear-gradient(135deg, #121214, #202024);
    position: relative;
    overflow: hidden;
  }
  .header-bg::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(130, 87, 229, 0.1) 0%, rgba(32, 32, 36, 0) 70%);
    z-index: 0;
  }
  .card-hover {
    transition: all 0.3s ease;
  }
  .card-hover:hover {
    transform: translateY(-10px);
  }
  .card-gradient {
    background: linear-gradient(145deg, #202024, #121214);
    border-left: 4px solid #8257e5;
  }
  .card-icon-bg {
    background: rgba(130, 87, 229, 0.15);
    color: #8257e5;
  }
  .section-divider {
    border-top: 1px solid rgba(130, 87, 229, 0.1);
  }
  .video-container {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    transform: perspective(1000px) rotateY(-5deg);
    transition: all 0.5s ease;
  }
  .video-container:hover {
    transform: perspective(1000px) rotateY(0deg);
  }
  .video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(130, 87, 229, 0.1), transparent);
    pointer-events: none;
  }
  .resource-card {
    transition: all 0.3s ease;
    overflow: hidden;
  }
  .resource-card:hover {
    transform: translateY(-10px);
  }
  .resource-card:hover .btn-link i {
    transform: translateX(5px);
  }
  .cta-section {
    position: relative;
    overflow: hidden;
  }
  .cta-section::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 80 80"><circle cx="40" cy="40" r="1" fill="%238257e5" opacity="0.3"/></svg>');
    z-index: 0;
    opacity: 0.5;
  }
</style>
<header class="py-5 header-bg" role="banner">
    <div class="container px-4 position-relative" style="z-index: 1;">
        <div class="row gx-5 align-items-center justify-content-center">
            <div class="col-lg-7 col-xl-6 col-xxl-5">
                <div class="my-5 text-center text-xl-start">
                    <h1 class="display-3 fw-bold text-white mb-4" style="letter-spacing: -0.5px;">
                        <span class="text-gradient">Educação e tecnologia</span>
                        <span style="display: block; margin-top: 0.5rem;">para todas as pessoas</span>
                    </h1>
                    <p class="lead fw-normal text-white-50 mb-5" style="border-left: 3px solid #8257e5; padding-left: 15px; font-size: 1.1rem; line-height: 1.6;">
                        "Para as pessoas sem deficiência, a tecnologia torna as coisas mais fáceis. Para as pessoas com deficiência, a tecnologia torna as coisas possíveis" <span class="text-white-50" style="font-weight: 500;">— Mary Pat Rabanaugh</span>
                    </p>
                    <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                        <a class="btn btn-primary-gradient btn-lg px-5 py-3 rounded-pill fw-medium" href="#target-audiences" role="button" style="font-size: 1rem;">
                            <i class="material-icons align-middle me-2 fs-5">explore</i>Saiba mais
                        </a>
                        <a class="btn btn-outline-custom btn-lg px-5 py-3 rounded-pill fw-medium" href="/contato" role="button" style="font-size: 1rem;">
                            <i class="material-icons align-middle me-2 fs-5">mail_outline</i>Contato
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-xxl-6 text-center" title="video">        
                <div class="video-container">
                    <div style="position: relative; padding-top: 56.25%;">
                        <iframe
                            src="https://customer-n8imyf4ea5hvxexl.cloudflarestream.com/bdb671eacec4dc6db44cd7729bece654/iframe?poster=https%3A%2F%2Fimagedelivery.net%2FRuw4waFkOelbXULIoE-oQg%2F9da6e101-1fe1-46f8-b533-b0cfd9c49e00%2Fpublic"
                            loading="lazy"
                            style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%; border-radius: 8px;"
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                            allowfullscreen="true"
                        ></iframe>
                        <div class="video-overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<section class="py-5" role="region" aria-labelledby="target-audiences" style="background: linear-gradient(to bottom, #121214, #202024);">
    <div class="container px-5">
        <h2 id="target-audiences" class="fw-bolder mb-5 text-center">
            <span class="h6 d-block text-gradient mb-2" style="text-transform: uppercase; letter-spacing: 3px; font-weight: 600;">Foco principal</span>
            <span class="display-4" style="font-weight: 700; letter-spacing: -1px;">Públicos que queremos</span>
            <span class="display-5 d-block mt-2" style="font-weight: 700; letter-spacing: -1px;">alcançar com prioridade</span>
        </h2>
        <div class="row gx-5 justify-content-center">
            <div class="col-lg-3 mb-5">
                <div class="card h-100 shadow border-0 bg-dark card-hover" style="border-radius: 12px; box-shadow: 0 15px 35px rgba(0,0,0,0.5); overflow: hidden; border-left: 4px solid #8257e5;">
                    <div class="card-body p-4 text-center card-gradient">
                        <div class="card-icon-bg" style="width: 90px; height: 90px; margin: 0 auto 1.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 20px rgba(130, 87, 229, 0.3);">
                            <i class="material-icons fs-1" aria-hidden="true" style="filter: drop-shadow(0 0 8px rgba(130, 87, 229, 0.5));">location_on</i>
                        </div>
                        <h3 class="fw-bold text-white h4" style="margin-bottom: 1rem; letter-spacing: -0.5px;">Nordeste</h3>
                        <p class="text-white-50 mb-0" style="line-height: 1.7; font-weight: 400;">Há mais pessoas com deficiência fora da escola do que a média nacional.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 mb-5">
                <div class="card h-100 shadow border-0 bg-dark card-hover" style="border-radius: 12px; box-shadow: 0 15px 35px rgba(0,0,0,0.5); overflow: hidden; border-left: 4px solid #8257e5;">
                    <div class="card-body p-4 text-center card-gradient">
                        <div class="card-icon-bg" style="width: 90px; height: 90px; margin: 0 auto 1.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 20px rgba(130, 87, 229, 0.3);">
                            <i class="material-icons fs-1" aria-hidden="true" style="filter: drop-shadow(0 0 8px rgba(130, 87, 229, 0.5));">location_city</i>
                        </div>
                        <h3 class="fw-bold text-white h4" style="margin-bottom: 1rem; letter-spacing: -0.5px;">Interior</h3>
                        <p class="text-white-50 mb-0" style="line-height: 1.7; font-weight: 400;">É difícil acessar informações especializadas porque fica longe dos grandes centros.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 mb-5">
                <div class="card h-100 shadow border-0 bg-dark card-hover" style="border-radius: 12px; box-shadow: 0 15px 35px rgba(0,0,0,0.5); overflow: hidden; border-left: 4px solid #8257e5;">
                    <div class="card-body p-4 text-center card-gradient">
                        <div class="card-icon-bg" style="width: 90px; height: 90px; margin: 0 auto 1.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 20px rgba(130, 87, 229, 0.3);">
                            <i class="material-icons fs-1" aria-hidden="true" style="filter: drop-shadow(0 0 8px rgba(130, 87, 229, 0.5));">diversity_1</i>
                        </div>
                        <h3 class="fw-bold text-white h4" style="margin-bottom: 1rem; letter-spacing: -0.5px;">Comunidade</h3>
                        <p class="text-white-50 mb-0" style="line-height: 1.7; font-weight: 400;">O capacitismo acontece em todos os lugares e combater isso precisa de ações conjuntas.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 mb-5">
                <div class="card h-100 shadow border-0 bg-dark card-hover" style="border-radius: 12px; box-shadow: 0 15px 35px rgba(0,0,0,0.5); overflow: hidden; border-left: 4px solid #8257e5;">
                    <div class="card-body p-4 text-center card-gradient">
                        <div class="card-icon-bg" style="width: 90px; height: 90px; margin: 0 auto 1.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 20px rgba(130, 87, 229, 0.3);">
                            <i class="material-icons fs-1" aria-hidden="true" style="filter: drop-shadow(0 0 8px rgba(130, 87, 229, 0.5));">school</i>
                        </div>
                        <h3 class="fw-bold text-white h4" style="margin-bottom: 1rem; letter-spacing: -0.5px;">Escolas</h3>
                        <p class="text-white-50 mb-0" style="line-height: 1.7; font-weight: 400;">Para colaborar com a comunidade escolar, docentes, estudantes e familiares.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="py-5 section-divider" role="region" aria-labelledby="vision-mission" style="background: linear-gradient(to bottom, #202024, #121214);">
    <div class="container px-5">
        <div class="row gx-5 mb-5">
            <div class="col-lg-6">
                <div class="position-relative mb-5">
                    <h2 id="vision" class="fw-bolder mb-3">
                        <span class="h6 d-block text-gradient mb-2" style="text-transform: uppercase; letter-spacing: 3px; font-weight: 600;">Nosso propósito</span>
                        <span class="display-5" style="font-weight: 700; letter-spacing: -0.5px;">Visão</span>
                    </h2>
                    <p class="lead fw-normal text-white-50 mb-4" style="line-height: 1.8; font-size: 1.1rem; border-bottom: 1px solid rgba(130, 87, 229, 0.2); padding-bottom: 1.5rem;">
                        Queremos ser um lugar excelente para compartilhar conteúdo sobre educação, tecnologia e acessibilidade, ajudando na formação crítica de pessoas com deficiência.
                    </p>
                    <div class="card-hover" style="border-radius: 12px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5); border: 2px solid rgba(130, 87, 229, 0.2);">
                        <img class="img-fluid" 
                            src="https://media.istockphoto.com/id/474967218/photo/portrait-of-boy-sitting-in-wheelchair-at-library.jpg?s=612x612&w=0&k=20&c=-awiQc39xdn0XlMrOgfWhyjBcNnYh-I8HnEIf3cvnwg=" 
                            alt="" 
                            aria-hidden="true"
                            style="transform: scale(1.02); transition: transform 0.5s ease;">
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="position-relative">
                    <h2 id="mission" class="fw-bolder mb-3">
                        <span class="h6 d-block text-gradient mb-2" style="text-transform: uppercase; letter-spacing: 3px; font-weight: 600;">Nosso compromisso</span>
                        <span class="display-5" style="font-weight: 700; letter-spacing: -0.5px;">Missão</span>
                    </h2>
                    <p class="lead fw-normal text-white-50 mb-4" style="line-height: 1.8; font-size: 1.1rem; border-bottom: 1px solid rgba(130, 87, 229, 0.2); padding-bottom: 1.5rem;">
                        Queremos facilitar o acesso ao conhecimento e à tecnologia, independentemente das necessidades educacionais específicas de quem deseja aprender.
                    </p>
                    <div class="card-hover" style="border-radius: 12px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5); border: 2px solid rgba(130, 87, 229, 0.2);">
                        <img class="img-fluid" 
                            src="https://media.istockphoto.com/id/1323184150/photo/her-disability-doesnt-stop-her-from-being-a-successful-businesswoman.jpg?s=612x612&w=0&k=20&c=qnr9GU2wt_XrikxPbYin89x6tAzSpcgfhUBXOTG4_FQ=" 
                            alt="" 
                            aria-hidden="true"
                            style="transform: scale(1.02); transition: transform 0.5s ease;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="py-5 section-divider" role="region" aria-labelledby="challenges" style="background: linear-gradient(to bottom, #121214, #202024);">
    <div class="container px-5">
        <div class="row gx-5 align-items-center">
            <div class="col-lg-6">
                <h2 id="challenges" class="fw-bolder mb-4">
                    <span class="h6 d-block text-gradient mb-2" style="text-transform: uppercase; letter-spacing: 3px; font-weight: 600;">O que enfrentamos</span>
                    <span class="display-5" style="font-weight: 700; letter-spacing: -0.5px;">Desafios na Educação</span>
                </h2>
                <p class="lead fw-normal text-white-50 mb-4" style="line-height: 1.8; font-size: 1.1rem;">
                    Pessoas com deficiência enfrentam diversas barreiras no ambiente educacional, desde a falta de acessibilidade física até a ausência de materiais didáticos adaptados. Muitas escolas e universidades ainda não estão preparadas para oferecer um ambiente verdadeiramente inclusivo.
                </p>
                <div class="p-4 mb-4" style="background: linear-gradient(135deg, rgba(130, 87, 229, 0.08), rgba(72, 99, 247, 0.08)); border-radius: 12px; border-left: 4px solid #8257e5;">
                    <p class="lead fw-normal text-white-50 mb-0" style="line-height: 1.8; font-size: 1.1rem;">
                        A falta de capacitação dos profissionais da educação e a escassez de recursos tecnológicos assistivos também são obstáculos significativos que precisam ser superados para garantir uma educação de qualidade para todos.
                    </p>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="video-container" style="border-radius: 12px; overflow: hidden; box-shadow: 0 25px 50px rgba(0,0,0,0.5); border: 2px solid rgba(130, 87, 229, 0.3);">
                    <div style="position:relative;padding-top:56.25%;">
                        <iframe id="panda-25f13c60-bac7-45a9-be54-d519419335b7" 
                                src="https://player-vz-480faebf-94f.tv.pandavideo.com.br/embed/?v=25f13c60-bac7-45a9-be54-d519419335b7" 
                                style="border:none;position:absolute;top:0;left:0;width:100%;height:100%;" 
                                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
                                allowfullscreen=true 
                                fetchpriority="high">
                        </iframe>
                        <div class="video-overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="py-5 section-divider" role="region" aria-labelledby="principles" style="background: linear-gradient(to bottom, #202024, #121214);">
    <div class="container px-5">
        <h2 id="principles" class="fw-bolder mb-5 text-center">
            <span class="h6 d-block text-gradient mb-2" style="text-transform: uppercase; letter-spacing: 3px; font-weight: 600;">Nossos valores</span>
            <span class="display-5" style="font-weight: 700; letter-spacing: -0.5px;">Princípios</span>
        </h2>
        <div class="row gx-5 justify-content-center">
            <div class="col-lg-4 mb-5">
                <div class="card h-100 shadow border-0 bg-dark card-hover" style="border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); overflow: hidden;">
                    <div class="card-body p-5 text-center card-gradient" style="border-top: 4px solid #8257e5; border-radius: 12px;">
                        <div class="card-icon-bg" style="width: 100px; height: 100px; margin: 0 auto 1.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(130, 87, 229, 0.3);">
                            <i class="material-icons fs-1" aria-hidden="true" style="filter: drop-shadow(0 0 8px rgba(130, 87, 229, 0.5));">group</i>
                        </div>
                        <h3 class="fw-bold text-white h4" style="margin-bottom: 1rem; letter-spacing: -0.5px; font-size: 1.5rem;">Humanidade</h3>
                        <p class="text-white-50 mb-0" style="line-height: 1.7; font-weight: 400;">A naturalização da pessoa com deficiência enquanto ser humano, afastando-se por completo do padrão que tende a extremos de inferioridade e superação.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-5">
                <div class="card h-100 shadow border-0 bg-dark card-hover" style="border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); overflow: hidden;">
                    <div class="card-body p-5 text-center card-gradient" style="border-top: 4px solid #8257e5; border-radius: 12px;">
                        <div class="card-icon-bg" style="width: 100px; height: 100px; margin: 0 auto 1.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(130, 87, 229, 0.3);">
                            <i class="material-icons fs-1" aria-hidden="true" style="filter: drop-shadow(0 0 8px rgba(130, 87, 229, 0.5));">diversity_2</i>
                        </div>
                        <h3 class="fw-bold text-white h4" style="margin-bottom: 1rem; letter-spacing: -0.5px; font-size: 1.5rem;">Respeito</h3>
                        <p class="text-white-50 mb-0" style="line-height: 1.7; font-weight: 400;">O respeito absoluto e incondicional a laicidade e aos valores políticos, jurídicos e sociais do Estado Democrático de Direito na abordagem sobre a deficiência.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-5">
                <div class="card h-100 shadow border-0 bg-dark card-hover" style="border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); overflow: hidden;">
                    <div class="card-body p-5 text-center card-gradient" style="border-top: 4px solid #8257e5; border-radius: 12px;">
                        <div class="card-icon-bg" style="width: 100px; height: 100px; margin: 0 auto 1.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(130, 87, 229, 0.3);">
                            <i class="material-icons fs-1" aria-hidden="true" style="filter: drop-shadow(0 0 8px rgba(130, 87, 229, 0.5));">gavel</i>
                        </div>
                        <h3 class="fw-bold text-white h4" style="margin-bottom: 1rem; letter-spacing: -0.5px; font-size: 1.5rem;">Combate</h3>
                        <p class="text-white-50 mb-0" style="line-height: 1.7; font-weight: 400;">O combate ao preconceito inclusive entre as diferentes comunidades de pessoas com deficiência e a equivocada hierarquização de deficiências.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
