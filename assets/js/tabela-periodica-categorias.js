// Função melhorada para categorizar elementos com mais detalhes
function getElementCategoryDetailed(elem) {
    // Hidrogênio é um caso especial
    if (elem.symbol === "H") {
        return "hidrogenio";
    }
    
    // Metais alcalinos (Grupo 1, exceto H)
    if (elem.column === 1 && elem.symbol !== "H" || ["Li", "Na", "K", "Rb", "Cs", "Fr"].includes(elem.symbol)) {
        return "metais-alcalinos";
    }
    
    // Metais alcalino-terrosos (Grupo 2)
    if (elem.column === 2 || ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"].includes(elem.symbol)) {
        return "metais-alcalinoterrosos";
    }
    
    // Lantanídeos
    if (elem.period === "Lantanídeos" || ["La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu"].includes(elem.symbol)) {
        return "lantanideos";
    }
    
    // Actinídeos
    if (elem.period === "Actinídeos" || ["Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"].includes(elem.symbol)) {
        return "actinideos";
    }
    
    // Halogênios (Grupo 17)
    if (["F", "Cl", "Br", "I", "At", "Ts"].includes(elem.symbol)) {
        return "halogenios";
    }
    
    // Gases nobres (Grupo 18)
    if (elem.column === 18 || ["He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"].includes(elem.symbol)) {
        return "gases-nobres";
    }
    
    // Outros não metais
    if (["C", "N", "O", "P", "S", "Se"].includes(elem.symbol)) {
        return "nao-metais";
    }
    
    // Semimetais
    if (["B", "Si", "Ge", "As", "Sb", "Te", "Po"].includes(elem.symbol)) {
        return "semimetais";
    }
    
    // Outros metais (metais representativos)
    if (["Al", "Ga", "In", "Tl", "Sn", "Pb", "Bi", "Nh", "Fl", "Mc", "Lv"].includes(elem.symbol)) {
        return "outros-metais";
    }
    
    // Metais de transição (o restante)
    return "metais-transicao";
}

// Função para gerar seções por categorias de elementos
function generateCategorySections() {
    // Define as categorias organizadas hierarquicamente
    const categories = {
        'Metais': {
            'metais-alcalinos': 'Metais Alcalinos',
            'metais-alcalinoterrosos': 'Metais Alcalinoterrosos', 
            'metais-transicao': 'Metais de Transição',
            'lantanideos': 'Lantanídeos',
            'actinideos': 'Actinídeos',
            'outros-metais': 'Outros Metais'
        },
        'Semimetais': {
            'semimetais': 'Semimetais'
        },
        'Não Metais': {
            'nao-metais': 'Não Metais',
            'halogenios': 'Halogênios', 
            'gases-nobres': 'Gases Nobres'
        },
        'Outros': {
            'hidrogenio': 'Hidrogênio'
        }
    };
    
    // Agrupa os elementos por categoria
    const categoryGroups = {};
    
    // Inicializa todos os grupos
    Object.values(categories).forEach(categoryObj => {
        Object.keys(categoryObj).forEach(key => {
            categoryGroups[key] = [];
        });
    });
    
    // Classifica cada elemento
    periodicElements.forEach((elem) => {
        const category = getElementCategoryDetailed(elem);
        if (categoryGroups[category]) {
            categoryGroups[category].push(elem);
        }
    });
    
    const container = document.querySelector("#secao-periodos .container");
    container.innerHTML = ''; // Limpa o container
    
    // Gera as seções organizadas por categoria principal
    Object.entries(categories).forEach(([mainCategory, subCategories]) => {
        // Cria título da categoria principal
        const mainCategoryTitle = document.createElement("div");
        mainCategoryTitle.classList.add("text-center", "my-5");
        mainCategoryTitle.innerHTML = `
            <h2 class="display-5 fw-bold text-primary pb-2 mb-4">
                ${mainCategory}
            </h2>
        `;
        container.appendChild(mainCategoryTitle);
        
        // Processa cada subcategoria
        Object.entries(subCategories).forEach(([categoryKey, categoryName]) => {
            const elements = categoryGroups[categoryKey];
            
            if (elements && elements.length > 0) {
                // Título da subcategoria
                const categoryTitle = document.createElement("div");
                categoryTitle.classList.add("text-center", "linha-secao", "col-lg-10", "container");
                
                const sectionId = `categoria-${categoryKey}`;
                categoryTitle.innerHTML = `
                    <h3 id="${sectionId}" class="titulo-linha mb-4">${categoryName}</h3>
                `;
                container.appendChild(categoryTitle);
                
                // Container dos elementos
                const row = document.createElement("div");
                row.classList.add(
                    "row", "gx-5", "row-cols-1", "row-cols-sm-2", 
                    "row-cols-xl-5", "justify-content-center"
                );
                
                // Ordena os elementos por número atômico
                elements.sort((a, b) => parseInt(a.atomicNumber) - parseInt(b.atomicNumber));
                
                // Gera os cards dos elementos
                elements.forEach((elem) => {
                    const colBtn = document.createElement("button");
                    colBtn.classList.add(
                        "btn", "text-white", "mb-4", "shadow", 
                        "border-5", "col-lg-4", "btn-elemento"
                    );
                    colBtn.type = "button";
                    colBtn.setAttribute("data-bs-toggle", "modal");
                    
                    const modalId = `modal-${elem.symbol}-${elem.period}-${elem.column}`;
                    colBtn.setAttribute("data-bs-target", `#${modalId}`);
                    colBtn.setAttribute(
                        "aria-label",
                        `Elemento ${elem.name}, símbolo ${elem.symbol}, categoria ${categoryName}. Pressione para mais informações.`
                    );
                    
                    // Conteúdo do botão
                    colBtn.innerHTML = `
                        <div class="fs-6 text-end fw-bold fst-italic">Período ${elem.period}</div>
                        <span class="fw-bolder fs-1">${elem.symbol}</span><br/>
                        <span class="fw-bolder fs-4">${elem.name}</span><br/>
                        <span class="fw-bolder material-symbols-outlined" aria-hidden="true">expand_more</span>
                        <div class="fs-6 text-end fw-bold fst-italic">Grupo ${elem.column}</div>
                    `;
                    
                    row.appendChild(colBtn);
                    
                    // Cria o modal correspondente
                    const modalDiv = document.createElement("div");
                    modalDiv.classList.add("modal", "fade", "dialog");
                    modalDiv.id = modalId;
                    modalDiv.tabIndex = -1;
                    modalDiv.setAttribute("role", "dialog");
                    modalDiv.setAttribute("aria-modal", "true");
                    modalDiv.setAttribute("aria-labelledby", `label-${modalId}`);
                    modalDiv.setAttribute("aria-hidden", "true");
                    modalDiv.setAttribute('data-element-symbol', elem.symbol);
                    
                    const descId = `desc-${modalId}`;
                    
                    const imageSection = elem.imageUrl
                        ? `<div class="text-center mb-3"><img src="${elem.imageUrl}" aria-hidden="true" class="img-fluid rounded" style="max-height: 250px; object-fit: contain;"></div>`
                        : '';
                    
                    const distributionImageSection = elem.distributionImageUrl
                        ? `<div class="text-center my-2"><img src="${elem.distributionImageUrl}" alt="Ilustração da distribuição eletrônica de ${elem.name}" class="img-fluid rounded mb-3 shadow" aria-hidden="true" style="max-height: 100%; object-fit: contain;"></div>`
                        : '';
                    
                    modalDiv.innerHTML = `
                        <div class="modal-dialog modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h2 class="modal-title fw-bold" id="label-${modalId}">
                                        ${elem.name}
                                    </h2>
                                    <button type="button" class="btn-close fw-bold bg-light h3" 
                                            data-bs-dismiss="modal" aria-label="Fechar"></button>
                                </div>
                                <div class="modal-body" id="${descId}">
                                    <h3 class="mb-3">Informações</h3>
                                    ${imageSection}
                                    <p><strong>Categoria:</strong> ${categoryName}</p>
                                    <p><strong>Grupo:</strong> ${elem.groupName}</p>
                                    <p><strong>Símbolo:</strong> ${elem.symbolWriting}</p>
                                    <p><strong>Número atômico:</strong> ${elem.atomicNumber}</p>
                                    <p><strong>Número de massa:</strong> ${elem.atomicMass}</p>
                                    <div class="col mb-3">
                                        <strong>Distribuição eletrônica</strong><br/>
                                        ${distributionImageSection}
                                        ${createDistribution(elem.distribution)}
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary fw-bold" 
                                            data-bs-dismiss="modal">
                                        Voltar à tabela
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                    
                    container.appendChild(modalDiv);
                });
                
                container.appendChild(row);
            }
        });
    });
}