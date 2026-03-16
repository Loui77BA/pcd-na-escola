// Funções compartilhadas entre os geradores de visualização da tabela periódica

// Container dedicado para modais (persiste entre trocas de view)
var _modalContainer = null;
function getModalContainer() {
    if (!_modalContainer) {
        _modalContainer = document.getElementById('modais-container');
        if (!_modalContainer) {
            _modalContainer = document.createElement('div');
            _modalContainer.id = 'modais-container';
            document.body.appendChild(_modalContainer);
        }
    }
    return _modalContainer;
}

/**
 * Cria o botão (card) de um elemento químico.
 * @param {Object} elem - Dados do elemento
 * @param {string} topLabel - Texto exibido no topo do card (ex: "Período 2")
 * @param {string} bottomLabel - Texto exibido na base do card (ex: "Coluna 13")
 * @param {string} ariaContext - Contexto adicional para aria-label (ex: "período 2, coluna 13")
 * @returns {HTMLButtonElement}
 */
function createElementCard(elem, topLabel, bottomLabel, ariaContext) {
    const modalId = `modal-${elem.symbol}-${elem.period}-${elem.column}`;

    const colBtn = document.createElement("button");
    colBtn.classList.add(
        "btn", "text-white", "mb-4", "shadow",
        "border-5", "col-lg-4", "btn-elemento"
    );
    colBtn.type = "button";
    colBtn.setAttribute("data-bs-toggle", "modal");
    colBtn.setAttribute("data-bs-target", `#${modalId}`);
    colBtn.setAttribute(
        "aria-label",
        `Elemento ${elem.name}, símbolo ${elem.symbol}, ${ariaContext}. Pressione para mais informações.`
    );

    colBtn.innerHTML = `
        <div class="fs-6 text-end fw-bold fst-italic">${topLabel}</div>
        <span class="fw-bolder fs-1">${elem.symbol}</span><br/>
        <span class="fw-bolder fs-4">${elem.name}</span><br/>
        <span class="fw-bolder material-symbols-outlined" aria-hidden="true">expand_more</span>
        <div class="fs-6 text-end fw-bold fst-italic">${bottomLabel}</div>
    `;

    return colBtn;
}

/**
 * Cria a modal de detalhes de um elemento químico ou retorna a existente do cache.
 * As modais são armazenadas no container dedicado e reutilizadas entre views.
 * @param {Object} elem - Dados do elemento
 * @param {string} [extraInfo] - HTML adicional a inserir antes das informações padrão (ex: categoria)
 * @returns {HTMLDivElement}
 */
function createElementModal(elem, extraInfo) {
    const modalId = `modal-${elem.symbol}-${elem.period}-${elem.column}`;
    const container = getModalContainer();

    // Se a modal já existe no cache, apenas atualiza extraInfo se necessário
    var existing = document.getElementById(modalId);
    if (existing) {
        // Atualiza o campo de informações extra (ex: categoria) se fornecido
        var extraSlot = existing.querySelector('[data-extra-info]');
        if (extraSlot) {
            extraSlot.innerHTML = extraInfo || '';
        }
        return existing;
    }

    const descId = `desc-${modalId}`;

    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal", "fade", "dialog");
    modalDiv.id = modalId;
    modalDiv.tabIndex = -1;
    modalDiv.setAttribute("role", "dialog");
    modalDiv.setAttribute("aria-modal", "true");
    modalDiv.setAttribute("aria-labelledby", `label-${modalId}`);
    modalDiv.setAttribute("aria-hidden", "true");
    modalDiv.setAttribute("data-element-symbol", elem.symbol);
    modalDiv.setAttribute("aria-describedby", descId);

    const imageSection = elem.imageUrl
        ? `<div class="text-center mb-3"><img src="${elem.imageUrl}" aria-hidden="true" class="img-fluid rounded" style="max-height: 250px; object-fit: contain;"></div>`
        : '';

    const distributionImageSection = elem.distributionImageUrl
        ? `<div class="text-center my-2"><img src="${elem.distributionImageUrl}" alt="Ilustração da distribuição eletrônica de ${elem.name}" class="img-fluid rounded mb-3 shadow" aria-hidden="true" style="max-height: 100%; object-fit: contain;"></div>`
        : '';

    const extraInfoHtml = extraInfo || '';

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
                    <span data-extra-info>${extraInfoHtml}</span>
                    <p><strong>Grupo:</strong> ${elem.groupName}</p>
                    <p><strong>Símbolo:</strong> ${elem.symbolWriting}<span class="visually-hidden"> que se escreve com, ${elem.symbolPronunciation}</span></p>
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

    // Armazena no container dedicado (fora do container de view que é limpo a cada troca)
    container.appendChild(modalDiv);

    return modalDiv;
}
