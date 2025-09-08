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

            // Gera os "cards" (botões) para cada elemento do grupo/coluna
            columnGroups[column].forEach((elem) => {
                const colBtn = document.createElement("button");
                colBtn.classList.add(
                    "btn",
                    "text-white",
                    "mb-4",
                    "shadow",
                    "border-5",
                    "col-lg-4",
                    "btn-elemento"
                );
                colBtn.type = "button";
                colBtn.setAttribute("data-bs-toggle", "modal");

                // Cria ID único para a modal
                const modalId = `modal-${elem.symbol}-${elem.period}-${elem.column}`;
                colBtn.setAttribute("data-bs-target", `#${modalId}`);
                colBtn.setAttribute(
                    "aria-label",
                    `Elemento ${elem.name}, símbolo ${elem.symbol}, período ${elem.period}, coluna ${elem.column}. Pressione para mais informações.`
                );

                // Conteúdo do botão (formato específico para cada tipo de elemento)
                let buttonContent = '';
                
                // Layout especial para Lantanídeos e Actinídeos
                if (column === "Lantanídeos" || column === "Actinídeos") {
                    buttonContent = `
                        <div class="fs-6 text-end fw-bold fst-italic">${elem.period}</div>
                        <span class="fw-bolder fs-1">${elem.symbol}</span><br/>
                        <span class="fw-bolder fs-4">${elem.name}</span><br/>
                        <span class="fw-bolder material-symbols-outlined" aria-hidden="true">expand_more</span>
                        <div class="fs-6 text-end fw-bold fst-italic">Coluna ${elem.column}</div>
                    `;
                } else {
                    // Layout normal para outros elementos (invertido como solicitado)
                    buttonContent = `
                        <div class="fs-6 text-end fw-bold fst-italic">Coluna ${elem.column}</div>
                        <span class="fw-bolder fs-1">${elem.symbol}</span><br/>
                        <span class="fw-bolder fs-4">${elem.name}</span><br/>
                        <span class="fw-bolder material-symbols-outlined" aria-hidden="true">expand_more</span>
                        <div class="fs-6 text-end fw-bold fst-italic">Período ${elem.period}</div>
                    `;
                }
                
                colBtn.innerHTML = buttonContent;
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

                // Armazena o símbolo do elemento no modal para usar
                // posteriormente na aplicação de cores nas modais.  
                modalDiv.setAttribute('data-element-symbol', elem.symbol);

                // Aria-describedby, apontando para o ID de um container
                const descId = `desc-${modalId}`;

                // Prepara o bloco da imagem, caso a propriedade imageUrl esteja definida no elemento.
                const imageSection = elem.imageUrl
                  ? `<div class="text-center mb-3"><img src="${elem.imageUrl}" aria-hidden="true" class="img-fluid rounded" style="max-height: 250px; object-fit: contain;"></div>`
                  : '';

                // Montando a estrutura do modal
                modalDiv.innerHTML = `
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h2 class="modal-title fw-bold" id="label-${modalId}">
                    ${elem.name}
                  </h2>
                  <button
                    type="button"
                    class="btn-close fw-bold bg-light h3"
                    data-bs-dismiss="modal"
                    aria-label="Fechar"
                  ></button>
                </div>
                <div class="modal-body" id="${descId}">
                  <h3 class="mb-3">Informações</h3>
                  ${imageSection}
                  <p><strong>Grupo:</strong> ${elem.groupName}</p>
                  <p><strong>Símbolo:</strong> ${elem.symbolWriting}</p>
                  <p><strong>Número atômico:</strong> ${elem.atomicNumber}</p>
                  <p><strong>Número de massa:</strong> ${elem.atomicMass}</p>
                  <div class="col mb-3">
                    <strong>Distribuição eletrônica</strong><br/>
                    ${createDistribution(elem.distribution)}
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary fw-bold"
                    data-bs-dismiss="modal"
                  >
                    Voltar à tabela
                  </button>
                </div>
              </div>
            </div>
          `;

                // Adiciona a modal no container principal
                container.appendChild(modalDiv);
                
                // Adiciona a classe modal-dialog-scrollable ao modal-dialog para tornar a barra de rolagem visível
                const modalDialogElement = modalDiv.querySelector('.modal-dialog');
                if (modalDialogElement) {
                    modalDialogElement.classList.add('modal-dialog-scrollable');
                }
            });

            // Ao término do loop dos elementos, anexamos a row ao container
            container.appendChild(row);
        });
}
