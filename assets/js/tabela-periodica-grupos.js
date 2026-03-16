// Função para gerar seções por grupos (colunas) da tabela periódica
function generateColumnSections() {
    // Agrupa os elementos pelo número da coluna
    const columnGroups = {};

    // Cria grupos especiais para Lantanídeos e Actinídeos
    columnGroups["Lantanídeos"] = [];
    columnGroups["Actinídeos"] = [];

    periodicElements.forEach((elem) => {
        // Se o elemento for um Lantanídeo ou Actinídeo, coloque-o no grupo especial
        if (elem.period === "Lantanídeos") {
            columnGroups["Lantanídeos"].push(elem);
        } else if (elem.period === "Actinídeos") {
            columnGroups["Actinídeos"].push(elem);
        } else {
            // Para elementos normais, agrupamos pela coluna
            if (!columnGroups[elem.column]) {
                columnGroups[elem.column] = [];
            }
            columnGroups[elem.column].push(elem);
        }
    });

    const container = document.querySelector("#secao-periodos .container");
    container.innerHTML = ''; // Limpa o container antes de adicionar novos elementos

    // Definimos a ordem desejada dos grupos/colunas (1 a 18)
    // Seguido dos grupos especiais Lantanídeos e Actinídeos
    const columnOrder = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18",
        "Lantanídeos", "Actinídeos"
    ];

    // Ordena as chaves (grupos/colunas) segundo a ordem customizada
    Object.keys(columnGroups)
        .sort((a, b) => {
            const indexA = columnOrder.indexOf(String(a));
            const indexB = columnOrder.indexOf(String(b));

            // Se não encontrou, joga pro final
            if (indexA === -1 && indexB === -1) {
                // Se ambos não encontrados, ordena alfanumericamente
                return String(a).localeCompare(String(b));
            } else if (indexA === -1) {
                return 1; // 'a' fica depois
            } else if (indexB === -1) {
                return -1; // 'b' fica depois
            }
            // Se ambos encontrados, compara índice
            return indexA - indexB;
        })
        .forEach((column) => {
            // Cria o título de seção:
            let tituloLinha = "";
            if (column === "Lantanídeos" || column === "Actinídeos") {
                // Se for uma string especial, usa como está
                tituloLinha = column;
            } else {
                // Caso contrário, adiciona "Grupo"
                tituloLinha = `Grupo ${column}`;
            }

            // Div que contém o título
            const columnTitle = document.createElement("div");
            columnTitle.classList.add(
                "text-center",
                "linha-secao",
                "col-lg-10",
                "container"
            );
            // Definir ID específico para Lantanídeos e Actinídeos para corresponder aos links sem acentos
            let sectionId;
            if (column === "Lantanídeos") {
                sectionId = "grupo-lantanideos";
            } else if (column === "Actinídeos") {
                sectionId = "grupo-actinideos";
            } else {
                sectionId = `grupo-${column}`;
            }

            columnTitle.innerHTML = `
          <h2 id="${sectionId}" class="titulo-linha mb-4">${tituloLinha}</h2>
        `;
            container.appendChild(columnTitle);

            // Cria um container row (apenas uma vez por grupo/coluna)
            const row = document.createElement("div");
            row.classList.add(
                "row",
                "gx-5",
                "row-cols-1",
                "row-cols-sm-2",
                "row-cols-xl-5",
                "justify-content-center"
            );

            // Gera os "cards" (botões) e modais para cada elemento do grupo/coluna
            columnGroups[column].forEach((elem) => {
                // Layout especial para Lantanídeos e Actinídeos (rótulos invertidos)
                const isSpecial = (column === "Lantanídeos" || column === "Actinídeos");
                const topLabel = isSpecial ? elem.period : `Coluna ${elem.column}`;
                const bottomLabel = isSpecial ? `Coluna ${elem.column}` : `Período ${elem.period}`;

                const colBtn = createElementCard(
                    elem,
                    topLabel,
                    bottomLabel,
                    `período ${elem.period}, coluna ${elem.column}`
                );
                row.appendChild(colBtn);

                // Modal é criada/cacheada automaticamente no container dedicado
                createElementModal(elem);
            });

            // Ao término do loop dos elementos, anexamos a row ao container
            container.appendChild(row);
        });
}
