![Logo do Projeto PcD na Escola](./images/logo.png)

# PcD na Escola

O PcD na Escola surge a partir das necessidades educacionais especificas de Louise Suelen (autora do projeto), visando alcançar pessoas com perfis semelhantes, incluindo:

- Pessoas com deficiência, em especial deficiência visual
- Pessoas que residem no interior do Brasil, afastadas dos grandes centros de seus estados, em especial região Nordeste
- Pessoas que gostam de ciência e tecnologia, mas encontram dificuldades de acesso a conteúdos adaptados

O projeto atende comunidades acadêmicas e escolares, focando no ensino de ciências exatas e tecnológicas (CET) para pessoas com necessidades educacionais específicas (NEE). Promovemos um debate baseado na laicidade, acessibilidade e inclusão.

Nosso objetivo é evitar que oportunidades de aprendizado sejam perdidas devido às características individuais de quem busca aprender.

## Objetivos

1. Disponibilizar artigos informativos e conteudistas sobre ciência e tecnologia, com foco em acessibilidade e na pessoa com deficiência.
2. Disponibilizar cursos, tutoriais e outros materiais educacionais no âmbito das ciências exatas e tecnológicas, acessíveis a pessoas com deficiência.
3. Disponibilizar ferramentas que funcionem como tecnologias assistivas (calculadoras, conversores, tabelas interativas), acessíveis a leitores de tela e outras tecnologias assistivas.

## Acessibilidade

### Barra de acessibilidade

O site possui uma barra de ferramentas de acessibilidade que permite:

- Ajuste de tamanho da fonte (0.75x a 2.0x)
- Alto contraste (preto e branco)
- Contraste negativo (cores invertidas)
- Escala de cinza
- Sublinhado de links
- Fonte legível (sans-serif)

As preferências são salvas no navegador via localStorage.

### MathA11y - Acessibilidade de expressões matemáticas

O projeto inclui a biblioteca `math-a11y.js`, desenvolvida especificamente para este projeto. Ela converte expressões LaTeX em descrições textuais em português para leitores de tela.

Recursos:

- Conversão de 200+ símbolos LaTeX para português (letras gregas, operadores, relações, teoria de conjuntos, lógica, cálculo)
- Reconhecimento de frações, raízes, expoentes, índices, matrizes, integrais, limites, derivadas e derivadas parciais
- Segmentação automática de expressões longas em trechos navegáveis, permitindo que o usuário percorra a expressão parte a parte
- Renderização visual via KaTeX com `aria-hidden`, mantendo o visual intacto enquanto o leitor de tela lê a descrição textual

### Outras práticas de acessibilidade

- HTML semântico com ARIA (landmarks, `aria-label`, `aria-expanded`, `aria-live`)
- Links externos anunciam "(abre em nova janela)" para leitores de tela
- Design dark mode com contraste mínimo WCAG AA (5.0:1)
- Indicadores de foco visíveis (#ffd700)
- Integração com VLibras (intérprete de Libras)
- Dados estruturados JSON-LD (Article, Course, VideoObject, BreadcrumbList)
- Busca estática via Pagefind

## Estrutura do projeto

```
pcd-na-escola/
  _posts/             # Artigos em Markdown
  _courses/           # Cursos (metadados das videoaulas)
  _ferramentas/       # Ferramentas interativas
  _layouts/           # Templates Jekyll (home, post, course, lesson)
  _includes/          # Componentes reutilizáveis (navbar, footer, scripts)
  _plugins/           # Plugins Jekyll customizados
    external_links.rb   # Anuncia links externos para leitores de tela
    lesson_pages.rb     # Gera páginas de aulas a partir dos cursos
  _data/              # Metadados de séries (YAML)
  assets/
    css/              # Estilos (site, custom, a11y-toolbar, courses, cf-player)
    js/               # Scripts
      math-a11y.js      # Biblioteca de acessibilidade matemática
      a11y-init.js      # Barra de acessibilidade
      search-init.js    # Integração com Pagefind
      cf-player.js      # Player de vídeo acessível (Cloudflare Stream)
      tabela-periodica.js  # Tabela periódica interativa
  .github/workflows/  # CI/CD (deploy automático)
```

## Tecnologias

| Categoria | Tecnologias |
|-----------|-------------|
| Gerador de site | Jekyll 4.3.2 |
| Hospedagem | GitHub Pages |
| Linguagens | HTML, CSS, JavaScript, Ruby, Markdown |
| CSS | Bootstrap 5.3.3, CSS customizado com variáveis |
| Matemática | KaTeX 0.16.21, math-a11y.js (biblioteca própria) |
| Busca | Pagefind |
| Vídeos | Cloudflare Stream |
| Acessibilidade | ARIA, VLibras, barra de acessibilidade própria |
| Ícones | Material Symbols (Google) |
| CI/CD | GitHub Actions |
| SEO | jekyll-seo-tag, jekyll-sitemap, jekyll-feed, JSON-LD |

## Como executar localmente

```bash
# Instalar dependências
bundle install

# Iniciar servidor de desenvolvimento
bundle exec jekyll serve
```

O site estará disponível em `http://localhost:4000`.

## Deploy

O deploy é automático via GitHub Actions. A cada push na branch `main`:

1. O Jekyll compila o site
2. O Pagefind gera o índice de busca
3. O site é publicado no GitHub Pages

## Acesso ao site

[https://pcdnaescola.com.br](https://pcdnaescola.com.br)
