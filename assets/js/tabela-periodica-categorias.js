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

                // Gera os cards e modais dos elementos
                elements.forEach((elem) => {
                    const colBtn = createElementCard(
                        elem,
                        `Período ${elem.period}`,
                        `Grupo ${elem.column}`,
                        `categoria ${categoryName}`
                    );
                    row.appendChild(colBtn);

                    // Modal é criada/cacheada automaticamente no container dedicado
                    createElementModal(
                        elem,
                        `<p><strong>Categoria:</strong> ${categoryName}</p>`
                    );
                });

                container.appendChild(row);
            }
        });
    });
}
