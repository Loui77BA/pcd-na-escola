// Função para determinar a categoria de um elemento com base nos critérios solicitados
function getElementCategory(elem) {
    // Hidrogênio é um caso especial
    if (elem.symbol === "H") {
        return "hidrogenio";
    }
    
    // Gases nobres (Grupo 18)
    if (elem.column === 18 || ["He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"].includes(elem.symbol)) {
        return "gas-nobre";
    }
    
    // Metais alcalinos (Grupo 1, exceto H)
    if (elem.column === 1 && elem.symbol !== "H" || ["Li", "Na", "K", "Rb", "Cs", "Fr"].includes(elem.symbol)) {
        return "alcalino";
    }
    
    // Metais alcalino-terrosos (Grupo 2)
    if (elem.column === 2 || ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"].includes(elem.symbol)) {
        return "alcalino-terroso";
    }
    
    // Lantanídeos
    if (elem.period === "Lantanídeos" || ["La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu"].includes(elem.symbol)) {
        return "lantanideo";
    }
    
    // Actinídeos
    if (elem.period === "Actinídeos" || ["Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"].includes(elem.symbol)) {
        return "actinideo";
    }
    
    // Não metais (incluindo halogênios e calcogênios)
    if (["C", "N", "O", "F", "P", "S", "Cl", "Se", "Br", "I", "At", "Ts"].includes(elem.symbol)) {
        return "nao-metal";
    }
    
    // Semimetais
    if (["B", "Si", "Ge", "As", "Sb", "Te", "Po"].includes(elem.symbol)) {
        return "semimetal";
    }
    
    // Outros metais representativos
    if (["Al", "Ga", "In", "Tl", "Sn", "Pb", "Bi", "Nh", "Fl", "Mc", "Lv"].includes(elem.symbol)) {
        return "metal-representativo";
    }
    
    // Se não se encaixar em nenhuma categoria específica, assumimos que é metal de transição
    return "transicao";
}

// Função para aplicar ou remover cores dos elementos
function toggleElementColors(activate) {
    // Ativa/desativa a classe global que controla a exibição de cores
    const body = document.body;
    
    if (activate) {
        body.classList.add('color-mode-active');
    } else {
        body.classList.remove('color-mode-active');
    }
    
    // Atualiza o texto do botão
    const btnText = document.getElementById('btn-toggle-colors-text');
    if (btnText) {
        btnText.textContent = activate ? 'Desativar cores' : 'Ativar cores';
    }
    
    // Atualiza o estado do botão para acessibilidade
    const btnToggleColors = document.getElementById('btn-toggle-colors');
    if (btnToggleColors) {
        btnToggleColors.setAttribute('aria-pressed', activate ? 'true' : 'false');
        
        // Atualiza a classe do botão
        if (activate) {
            btnToggleColors.classList.remove('btn-outline-light');
            btnToggleColors.classList.add('btn-primary');
        } else {
            btnToggleColors.classList.add('btn-outline-light');
            btnToggleColors.classList.remove('btn-primary');
        }
    }
    
    // Anuncia para leitores de tela
    const visualAnnouncer = document.getElementById('a11y-announcer');
    if (visualAnnouncer) {
        visualAnnouncer.textContent = activate ? 
            'Visualização com cores ativada. Os elementos agora estão coloridos por categoria com contraste aprimorado para facilitar a leitura.' : 
            'Visualização com cores desativada. Os elementos agora estão no tema escuro padrão.';
    }
    
    // Atualiza também os elementos de texto internos para garantir contraste adequado
    if (activate) {
        // Ajusta valores específicos de contraste para textos secundários
        adjustContrastForInnerText();
    }
}

// Função para ajustar o contraste de textos internos aos elementos
function adjustContrastForInnerText() {
    // Seleciona todos os textos de período e coluna dentro dos elementos
    document.querySelectorAll('.btn-elemento .fs-6.text-end.fw-bold.fst-italic').forEach(textElem => {
        // Encontra o botão pai
        const parentButton = textElem.closest('.btn-elemento');
        
        // Determina a cor do texto com base na classe do botão pai
        if (parentButton) {
            // Para cores de fundo claras, usa texto escuro
            if (
                parentButton.classList.contains('elemento-hidrogenio') ||
                parentButton.classList.contains('elemento-transicao') ||
                parentButton.classList.contains('elemento-lantanideo') ||
                parentButton.classList.contains('elemento-actinideo') ||
                parentButton.classList.contains('elemento-metal-representativo') ||
                parentButton.classList.contains('elemento-gas-nobre')
            ) {
                textElem.style.color = 'rgba(0,0,0,0.8)';
            } 
            // Para cores de fundo escuras, usa texto claro
            else if (
                parentButton.classList.contains('elemento-alcalino') ||
                parentButton.classList.contains('elemento-alcalino-terroso') ||
                parentButton.classList.contains('elemento-nao-metal') ||
                parentButton.classList.contains('elemento-semimetal')
            ) {
                textElem.style.color = 'rgba(255,255,255,0.9)';
            }
        }
    });
}

// Função para classificar e aplicar classes de cores aos elementos quando eles são criados
function applyElementColors() {
    // Seleciona todos os botões de elementos da tabela
    const elementButtons = document.querySelectorAll('.btn-elemento');
    
    // Para cada botão, encontra o símbolo do elemento e atribui a classe de cor apropriada
    elementButtons.forEach(btn => {
        // Encontra o símbolo do elemento no conteúdo do botão
        const symbolElement = btn.querySelector('.fw-bolder.fs-1');
        if (symbolElement) {
            const symbol = symbolElement.textContent;
            
            // Busca o elemento correspondente no array de dados
            const elementData = periodicElements.find(elem => elem.symbol === symbol);
            
            if (elementData) {
                // Determina a categoria e aplica a classe
                const category = getElementCategory(elementData);
                btn.classList.add(`elemento-${category}`);
                
                // Encontra a modal correspondente e aplica a classe
                const modalId = btn.getAttribute('data-bs-target')?.substring(1);
                if (modalId) {
                    const modal = document.getElementById(modalId);
                    if (modal) {
                        modal.classList.add(`modal-${category}`);
                    }
                }
            }
        }
    });
    
    // Verifica se o modo de cores está ativo e ajusta o contraste se necessário
    if (document.body.classList.contains('color-mode-active')) {
        adjustContrastForInnerText();
    }
}

// Função a ser executada quando a DOM estiver pronta
document.addEventListener('DOMContentLoaded', function() {
    // Configura o evento de clique no botão de alternar cores
    const btnToggleColors = document.getElementById('btn-toggle-colors');
    if (btnToggleColors) {
        btnToggleColors.addEventListener('click', function() {
            // Verifica o estado atual e inverte
            const isActive = this.getAttribute('aria-pressed') === 'true';
            toggleElementColors(!isActive);
        });
    }
    
    // Aplica as classes iniciais aos elementos existentes
    applyElementColors();
    
    // Observa mudanças no DOM para aplicar cores a novos elementos
    // Isso é importante porque os elementos são recriados ao alternar entre visualizações
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                // Aplica cores aos novos elementos
                applyElementColors();
            }
        });
    });
    
    // Configura o observador para monitorar adições de elementos ao container
    const container = document.querySelector('#secao-periodos .container');
    if (container) {
        observer.observe(container, { childList: true, subtree: true });
    }
});
