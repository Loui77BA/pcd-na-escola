# frozen_string_literal: true

# Adiciona aviso "(abre em nova janela)" para leitores de tela
# em todos os links com target="_blank" gerados pelo Jekyll.

Jekyll::Hooks.register [:pages, :documents], :post_render do |item|
  next unless item.output_ext == ".html"

  item.output = item.output.gsub(
    %r{<a\b([^>]*\btarget\s*=\s*["']_blank["'][^>]*)>(.+?)</a>}mi
  ) do |match|
    attrs = Regexp.last_match(1)
    inner = Regexp.last_match(2)

    if inner.include?("abre em nova janela")
      match
    else
      %(<a#{attrs}>#{inner}<span class="visually-hidden">(abre em nova janela)</span></a>)
    end
  end
end
