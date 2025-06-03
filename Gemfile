source "https://rubygems.org"

# Gerenciador principal da versão do Jekyll
gem "jekyll", "~> 4.3.2"

# Tema padrão do Jekyll (você pode remover se estiver usando layout personalizado)
gem "minima", "~> 2.5"

# Plugins utilizados pelo projeto
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17.0"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
end

# Compatibilidade com Ruby 3.4+
gem "csv"
gem "base64"

# Suporte para plataformas Windows e JRuby
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Melhoria de performance para notificações de alteração no Windows
gem "wdm", "~> 0.1", platforms: [:mingw, :x64_mingw, :mswin]

# Compatibilidade com JRuby
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]

# Necessário para executar servidor local no Ruby 3+
gem "webrick", "~> 1.8"
