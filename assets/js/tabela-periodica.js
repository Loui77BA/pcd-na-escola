// --------------------------------------------------
// 1. Array com dados dos elementos
// --------------------------------------------------

const periodicElements = [
    // Período 1 (linha 1) da tabela periódica
    {
        period: 1,
        column: 1,
        name: "Hidrogênio",
        symbol: "H",
        symbolWriting: "H",
        atomicNumber: 1,
        atomicMass: "1,007",
        groupName: "Não metal",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2017/09/1-hidrogenio.jpg",
        distribution: [{ camada: 1, subnivel: "1 s", eletrons: 1 }],
    },
    {
        period: 1,
        column: 18,
        name: "Hélio",
        symbol: "He",
        symbolWriting: "He",
        atomicNumber: 2,
        atomicMass: "4,003",
        groupName: "Gás nobre",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2017/09/2-helio.jpg",
        distribution: [{ camada: 1, subnivel: "1 s", eletrons: 2 }],
    },
    // Período 2 (linha 2) da tabela periódica
    {
        period: 2,
        column: 1,
        name: "Lítio",
        symbol: "Li",
        symbolWriting: "Li",
        atomicNumber: 3,
        atomicMass: "6,94",
        groupName: "Metal alcalino",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2017/10/3-litio.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 1 },
        ],
    },
    {
        period: 2,
        column: 2,
        name: "Berílio",
        symbol: "Be",
        symbolWriting: "Be",
        atomicNumber: 4,
        atomicMass: "9,012",
        groupName: "Metal alcalino-terroso",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2010/05/4-berilio.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
        ],
    },
    {
        period: 2,
        column: 13,
        name: "Boro",
        symbol: "B",
        symbolWriting: "B",
        atomicNumber: 5,
        atomicMass: "10,81",
        groupName: "Semimetal",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2017/10/5-boro.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 1 },
        ],
    },
    {
        period: 2,
        column: 14,
        name: "Carbono",
        symbol: "C",
        symbolWriting: "C",
        atomicNumber: 6,
        atomicMass: "12,01",
        groupName: "Não metal",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2017/10/6-carbono.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 2 },
        ],
    },
    {
        period: 2,
        column: 15,
        name: "Nitrogênio",
        symbol: "N",
        symbolWriting: "N",
        atomicNumber: 7,
        atomicMass: "14,01",
        groupName: "Não metal",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2017/10/7-nitrogenio.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 3 },
        ],
    },
    {
        period: 2,
        column: 16,
        name: "Oxigênio",
        symbol: "O",
        symbolWriting: "O",
        atomicNumber: 8,
        atomicMass: "16,00",
        groupName: "Não metal",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2017/10/8-oxigenio.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 4 },
        ],
    },
    {
        period: 2,
        column: 17,
        name: "Flúor",
        symbol: "F",
        symbolWriting: "F",
        atomicNumber: 9,
        atomicMass: "19,00",
        groupName: "Halogênio",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2017/10/9-fluor.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 5 },
        ],
    },
    {
        period: 2,
        column: 18,
        name: "Neônio",
        symbol: "Ne",
        symbolWriting: "Ne",
        atomicNumber: 10,
        atomicMass: "20,18",
        groupName: "Gás nobre",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2017/11/10-neonio.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
        ],
    },
    // Período 3 (linha 3) da tabela periódica
    {
        period: 3,
        column: 1,
        name: "Sódio",
        symbol: "Na",
        symbolWriting: "Na",
        atomicNumber: 11,
        atomicMass: "22,99",
        groupName: "Metal alcalino",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2017/11/11-sodio.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 1 },
        ],
    },
    {
        period: 3,
        column: 2,
        name: "Magnésio",
        symbol: "Mg",
        symbolWriting: "Mg",
        atomicNumber: 12,
        atomicMass: "24,31",
        groupName: "Metal alcalino-terroso",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2017/11/12-magnesio.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
        ],
    },
    {
        period: 3,
        column: 13,
        name: "Alumínio",
        symbol: "Al",
        symbolWriting: "Al",
        atomicNumber: 13,
        atomicMass: "26,98",
        groupName: "Metal pobre",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2017/11/13-aluminio.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 1 },
        ],
    },
    {
        period: 3,
        column: 14,
        name: "Silício",
        symbol: "Si",
        symbolWriting: "Si",
        atomicNumber: 14,
        atomicMass: "28,09",
        groupName: "Semimetal",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2017/11/14-silicio.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 2 },
        ],
    },
    {
        period: 3,
        column: 15,
        name: "Fósforo",
        symbol: "P",
        symbolWriting: "P",
        atomicNumber: 15,
        atomicMass: "30,97",
        groupName: "Não metal",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2017/11/15-fosforo-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 3 },
        ],
    },
    {
        period: 3,
        column: 16,
        name: "Enxofre",
        symbol: "S",
        symbolWriting: "S",
        atomicNumber: 16,
        atomicMass: "32,07",
        groupName: "Não metal",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2017/11/16-enxofre-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 4 },
        ],
    },
    {
        period: 3,
        column: 17,
        name: "Cloro",
        symbol: "Cl",
        symbolWriting: "Cl",
        atomicNumber: 17,
        atomicMass: "35,45",
        groupName: "Halogênio",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2017/11/17-cloro-med.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 5 },
        ],
    },
    {
        period: 3,
        column: 18,
        name: "Argônio",
        symbol: "Ar",
        symbolWriting: "Ar",
        atomicNumber: 18,
        atomicMass: "39,95",
        groupName: "Gás nobre",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2017/11/18-argonio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
        ],
    },
    // Período 4 (linha 4) da tabela periódica
    {
        period: 4,
        column: 1,
        name: "Potássio",
        symbol: "K",
        symbolWriting: "K",
        atomicNumber: 19,
        atomicMass: "39,10",
        groupName: "Metal alcalino",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2017/11/19-potassio.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 1 },
        ],
    },
    {
        period: 4,
        column: 2,
        name: "Cálcio",
        symbol: "Ca",
        symbolWriting: "Ca",
        atomicNumber: 20,
        atomicMass: "40,08",
        groupName: "Metal alcalino-terroso",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2017/11/20-calcio.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
        ],
    },
    {
        period: 4,
        column: 3,
        name: "Escândio",
        symbol: "Sc",
        symbolWriting: "Sc",
        atomicNumber: 21,
        atomicMass: "44,96",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/02/21-escandio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 1 },
        ],
    },
    {
        period: 4,
        column: 4,
        name: "Titânio",
        symbol: "Ti",
        symbolWriting: "Ti",
        atomicNumber: 22,
        atomicMass: "47,87",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/02/22-titanio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 2 },
        ],
    },
    {
        period: 4,
        column: 5,
        name: "Vanádio",
        symbol: "V",
        symbolWriting: "V",
        atomicNumber: 23,
        atomicMass: "50,94",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/02/23-vanadio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 3 },
        ],
    },
    {
        period: 4,
        column: 6,
        name: "Cromo",
        symbol: "Cr",
        symbolWriting: "Cr",
        atomicNumber: 24,
        atomicMass: "51,99",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/02/24-cromo-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            // Exceção: 4s perde 1 elétron para estabilizar 3d⁵ (meia-camada)
            { camada: 4, subnivel: "4 s", eletrons: 1 },
            { camada: 3, subnivel: "3 d", eletrons: 5 },
        ],
    },
    {
        period: 4,
        column: 7,
        name: "Manganês",
        symbol: "Mn",
        symbolWriting: "Mn",
        atomicNumber: 25,
        atomicMass: "54,94",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/02/25-manganes-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 5 },
        ],
    },
    {
        period: 4,
        column: 8,
        name: "Ferro",
        symbol: "Fe",
        symbolWriting: "Fe",
        atomicNumber: 26,
        atomicMass: "55,85",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/02/26-ferro-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 6 },
        ],
    },
    {
        period: 4,
        column: 9,
        name: "Cobalto",
        symbol: "Co",
        symbolWriting: "Co",
        atomicNumber: 27,
        atomicMass: "58,93",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/02/27-cobalto-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 7 },
        ],
    },
    {
        period: 4,
        column: 10,
        name: "Níquel",
        symbol: "Ni",
        symbolWriting: "Ni",
        atomicNumber: 28,
        atomicMass: "58,69",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/02/28-niquel-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 8 },
        ],
    },
    {
        period: 4,
        column: 11,
        name: "Cobre",
        symbol: "Cu",
        symbolWriting: "Cu",
        atomicNumber: 29,
        atomicMass: "63,55",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/02/29-cobre-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            // Exceção: 4s cede 1 elétron para completar 3d⁽¹⁰⁾
            { camada: 4, subnivel: "4 s", eletrons: 1 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
        ],
    },
    {
        period: 4,
        column: 12,
        name: "Zinco",
        symbol: "Zn",
        symbolWriting: "Zn",
        atomicNumber: 30,
        atomicMass: "65,38",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/02/30-zinco-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
        ],
    },
    {
        period: 4,
        column: 13,
        name: "Gálio",
        symbol: "Ga",
        symbolWriting: "Ga",
        atomicNumber: 31,
        atomicMass: "69,72",
        groupName: "Metal pobre",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/03/31-galio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 1 },
        ],
    },
    {
        period: 4,
        column: 14,
        name: "Germânio",
        symbol: "Ge",
        symbolWriting: "Ge",
        atomicNumber: 32,
        atomicMass: "72,63",
        groupName: "Semimetal",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/03/32-germanio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 2 },
        ],
    },
    {
        period: 4,
        column: 15,
        name: "Arsênio",
        symbol: "As",
        symbolWriting: "As",
        atomicNumber: 33,
        atomicMass: "74,92",
        groupName: "Semimetal",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/03/33-arsenio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 3 },
        ],
    },
    {
        period: 4,
        column: 16,
        name: "Selênio",
        symbol: "Se",
        symbolWriting: "Se",
        atomicNumber: 34,
        atomicMass: "78,97",
        groupName: "Não metal",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/03/34-selenio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 4 },
        ],
    },
    {
        period: 4,
        column: 17,
        name: "Bromo",
        symbol: "Br",
        symbolWriting: "Br",
        atomicNumber: 35,
        atomicMass: "79,90",
        groupName: "Halogênio",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/03/35-bromo-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 5 },
        ],
    },
    {
        period: 4,
        column: 18,
        name: "Criptônio",
        symbol: "Kr",
        symbolWriting: "Kr",
        atomicNumber: 36,
        atomicMass: "83,80",
        groupName: "Gás nobre",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/03/36-criptonio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
        ],
    },
    // Período 5 (linha 5) da tabela periódica
    {
        period: 5,
        column: 1,
        name: "Rubídio",
        symbol: "Rb",
        symbolWriting: "Rb",
        atomicNumber: 37,
        atomicMass: "85,47",
        groupName: "Metal alcalino",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/03/37-rubidio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 5, subnivel: "5 s", eletrons: 1 },
        ],
    },
    {
        period: 5,
        column: 2,
        name: "Estrôncio",
        symbol: "Sr",
        symbolWriting: "Sr",
        atomicNumber: 38,
        atomicMass: "87,62",
        groupName: "Metal alcalino-terroso",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/03/38-estroncio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
        ],
    },
    {
        period: 5,
        column: 3,
        name: "Ítrio",
        symbol: "Y",
        symbolWriting: "Y",
        atomicNumber: 39,
        atomicMass: "88,91",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/03/39-itrio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 4, subnivel: "4 d", eletrons: 1 },
        ],
    },
    {
        period: 5,
        column: 4,
        name: "Zircônio",
        symbol: "Zr",
        symbolWriting: "Zr",
        atomicNumber: 40,
        atomicMass: "91,22",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/03/40-zirconio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 4, subnivel: "4 d", eletrons: 2 },
        ],
    },
    {
        period: 5,
        column: 5,
        name: "Nióbio",
        symbol: "Nb",
        symbolWriting: "Nb",
        atomicNumber: 41,
        atomicMass: "92,91",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/03/41-niobio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            // Exceção: 5s¹ e 4d⁴ (em vez de 5s² e 4d³)
            { camada: 5, subnivel: "5 s", eletrons: 1 },
            { camada: 4, subnivel: "4 d", eletrons: 4 },
        ],
    },
    {
        period: 5,
        column: 6,
        name: "Molibdênio",
        symbol: "Mo",
        symbolWriting: "Mo",
        atomicNumber: 42,
        atomicMass: "95,95",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/03/42-molibdenio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            // Exceção: 5s¹ e 4d⁵
            { camada: 5, subnivel: "5 s", eletrons: 1 },
            { camada: 4, subnivel: "4 d", eletrons: 5 },
        ],
    },
    {
        period: 5,
        column: 7,
        name: "Tecnécio",
        symbol: "Tc",
        symbolWriting: "Tc",
        atomicNumber: 43,
        atomicMass: "98",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/03/43-tecnecio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 4, subnivel: "4 d", eletrons: 5 },
        ],
    },
    {
        period: 5,
        column: 8,
        name: "Rutênio",
        symbol: "Ru",
        symbolWriting: "Ru",
        atomicNumber: 44,
        atomicMass: "101,07",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/03/44-rutenio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            // Exceção: 5s¹ e 4d⁷
            { camada: 5, subnivel: "5 s", eletrons: 1 },
            { camada: 4, subnivel: "4 d", eletrons: 7 },
        ],
    },
    {
        period: 5,
        column: 9,
        name: "Ródio",
        symbol: "Rh",
        symbolWriting: "Rh",
        atomicNumber: 45,
        atomicMass: "102,91",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/03/45-rodio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            // Exceção: 5s¹ e 4d⁸
            { camada: 5, subnivel: "5 s", eletrons: 1 },
            { camada: 4, subnivel: "4 d", eletrons: 8 },
        ],
    },
    {
        period: 5,
        column: 10,
        name: "Paládio",
        symbol: "Pd",
        symbolWriting: "Pd",
        atomicNumber: 46,
        atomicMass: "106,42",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/03/46-paladio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            // Exceção grande: 5s⁰ e 4d¹⁰
            { camada: 4, subnivel: "4 d", eletrons: 10 },
        ],
    },
    {
        period: 5,
        column: 11,
        name: "Prata",
        symbol: "Ag",
        symbolWriting: "Ag",
        atomicNumber: 47,
        atomicMass: "107,87",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/03/47-prata-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            // Exceção: 4d¹⁰ e 5s¹
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 1 },
        ],
    },
    {
        period: 5,
        column: 12,
        name: "Cádmio",
        symbol: "Cd",
        symbolWriting: "Cd",
        atomicNumber: 48,
        atomicMass: "112,41",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/03/48-cadmio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
        ],
    },
    {
        period: 5,
        column: 13,
        name: "Índio",
        symbol: "In",
        symbolWriting: "In",
        atomicNumber: 49,
        atomicMass: "114,82",
        groupName: "Metal pobre",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/09/49-indio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 1 },
        ],
    },
    {
        period: 5,
        column: 14,
        name: "Estanho",
        symbol: "Sn",
        symbolWriting: "Sn",
        atomicNumber: 50,
        atomicMass: "118,71",
        groupName: "Metal pobre",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/09/50-estanho-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 2 },
        ],
    },
    {
        period: 5,
        column: 15,
        name: "Antimônio",
        symbol: "Sb",
        symbolWriting: "Sb",
        atomicNumber: 51,
        atomicMass: "121,76",
        groupName: "Semimetal",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/04/51-antimonio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 3 },
        ],
    },
    {
        period: 5,
        column: 16,
        name: "Telúrio",
        symbol: "Te",
        symbolWriting: "Te",
        atomicNumber: 52,
        atomicMass: "127,60",
        groupName: "Semimetal",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/09/52-telurio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 4 },
        ],
    },
    {
        period: 5,
        column: 17,
        name: "Iodo",
        symbol: "I",
        symbolWriting: "I",
        atomicNumber: 53,
        atomicMass: "126,90",
        groupName: "Halogênio",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/04/53-iodo-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 5 },
        ],
    },
    {
        period: 5,
        column: 18,
        name: "Xenônio",
        symbol: "Xe",
        symbolWriting: "Xe",
        atomicNumber: 54,
        atomicMass: "131,29",
        groupName: "Gás nobre",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/09/54-xenonio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
        ],
    },
    // Período 6 (linha 6) da tabela periódica
    {
        period: 6,
        column: 1,
        name: "Césio",
        symbol: "Cs",
        symbolWriting: "Cs",
        atomicNumber: 55,
        atomicMass: "132,91",
        groupName: "Metal alcalino",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/55-cesio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 6, subnivel: "6 s", eletrons: 1 },
        ],
    },
    {
        period: 6,
        column: 2,
        name: "Bário",
        symbol: "Ba",
        symbolWriting: "Ba",
        atomicNumber: 56,
        atomicMass: "137,33",
        groupName: "Metal alcalino-terroso",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/56-bario-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Série dos Lantanídeos
    // Z=57
    {
        period: "Lantanídeos",
        column: 3,
        name: "Lantânio",
        symbol: "La",
        symbolWriting: "La",
        atomicNumber: 57,
        atomicMass: "138,91",
        groupName: "Lantanídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/57-lantanio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 5, subnivel: "5 d", eletrons: 1 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Z=58
    {
        period: "Lantanídeos",
        column: 3,
        name: "Cério",
        symbol: "Ce",
        symbolWriting: "Ce",
        atomicNumber: 58,
        atomicMass: "140,12",
        groupName: "Lantanídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/58-cerio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 1 },
            { camada: 5, subnivel: "5 d", eletrons: 1 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Z=59
    {
        period: "Lantanídeos",
        column: 3,
        name: "Praseodímio",
        symbol: "Pr",
        symbolWriting: "Pr",
        atomicNumber: 59,
        atomicMass: "140,91",
        groupName: "Lantanídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/59-praseodimio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 3 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Z=60
    {
        period: "Lantanídeos",
        column: 3,
        name: "Neodímio",
        symbol: "Nd",
        symbolWriting: "Nd",
        atomicNumber: 60,
        atomicMass: "144,24",
        groupName: "Lantanídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/60-neodimio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 4 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Z=61
    {
        period: "Lantanídeos",
        column: 3,
        name: "Promécio",
        symbol: "Pm",
        symbolWriting: "Pm",
        atomicNumber: 61,
        atomicMass: "(145)",
        groupName: "Lantanídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/61-promecio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 5 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Z=62
    {
        period: "Lantanídeos",
        column: 3,
        name: "Samário",
        symbol: "Sm",
        symbolWriting: "Sm",
        atomicNumber: 62,
        atomicMass: "150,36",
        groupName: "Lantanídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/62-samario-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 6 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Z=63
    {
        period: "Lantanídeos",
        column: 3,
        name: "Európio",
        symbol: "Eu",
        symbolWriting: "Eu",
        atomicNumber: 63,
        atomicMass: "151,96",
        groupName: "Lantanídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/63-europio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 7 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Z=64
    {
        period: "Lantanídeos",
        column: 3,
        name: "Gadolínio",
        symbol: "Gd",
        symbolWriting: "Gd",
        atomicNumber: 64,
        atomicMass: "157,25",
        groupName: "Lantanídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/64-gadolinio-MED.jpg",
        distribution: [
            // até Xe (54 elétrons):
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            // agora somam 54 elétrons (Xenônio)
            // Gd tem exceção: 4f⁷ 5d¹ 6s²
            { camada: 4, subnivel: "4 f", eletrons: 7 },
            { camada: 5, subnivel: "5 d", eletrons: 1 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Z=65
    {
        period: "Lantanídeos",
        column: 3,
        name: "Térbio",
        symbol: "Tb",
        symbolWriting: "Tb",
        atomicNumber: 65,
        atomicMass: "158,93",
        groupName: "Lantanídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/65-terbio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 9 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Z=66
    {
        period: "Lantanídeos",
        column: 3,
        name: "Disprósio",
        symbol: "Dy",
        symbolWriting: "Dy",
        atomicNumber: 66,
        atomicMass: "162,50",
        groupName: "Lantanídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/66-disprosio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Z=67
    {
        period: "Lantanídeos",
        column: 3,
        name: "Hólmio",
        symbol: "Ho",
        symbolWriting: "Ho",
        atomicNumber: 67,
        atomicMass: "164,93",
        groupName: "Lantanídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/67-holmio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 11 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Z=68
    {
        period: "Lantanídeos",
        column: 3,
        name: "Érbio",
        symbol: "Er",
        symbolWriting: "Er",
        atomicNumber: 68,
        atomicMass: "167,26",
        groupName: "Lantanídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/68-erbio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 12 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Z=69
    {
        period: "Lantanídeos",
        column: 3,
        name: "Túlio",
        symbol: "Tm",
        symbolWriting: "Tm",
        atomicNumber: 69,
        atomicMass: "168,93",
        groupName: "Lantanídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/69-tulio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 13 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Z=70
    {
        period: "Lantanídeos",
        column: 3,
        name: "Itérbio",
        symbol: "Yb",
        symbolWriting: "Yb",
        atomicNumber: 70,
        atomicMass: "173,05",
        groupName: "Lantanídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/70-iterbio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Z=71
    {
        period: "Lantanídeos",
        column: 3,
        name: "Lutécio",
        symbol: "Lu",
        symbolWriting: "Lu",
        atomicNumber: 71,
        atomicMass: "174,97",
        groupName: "Lantanídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/71-lutecio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 1 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Período 6 (continuação) dos elementos não-lantanídeos
    // Z=72
    {
        period: 6,
        column: 4,
        name: "Háfnio",
        symbol: "Hf",
        symbolWriting: "Hf",
        atomicNumber: 72,
        atomicMass: "178,49",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/72-hafnio-MED.jpg",
        distribution: [
            // +1 e– em 5d em relação ao Lu
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 2 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Z=73
    {
        period: 6,
        column: 5,
        name: "Tântalo",
        symbol: "Ta",
        symbolWriting: "Ta",
        atomicNumber: 73,
        atomicMass: "180,95",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/73-tantalo-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 3 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Z=74
    {
        period: 6,
        column: 6,
        name: "Tungstênio",
        symbol: "W",
        symbolWriting: "W",
        atomicNumber: 74,
        atomicMass: "183,84",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/74-tungstenio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 4 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Z=75
    {
        period: 6,
        column: 7,
        name: "Rênio",
        symbol: "Re",
        symbolWriting: "Re",
        atomicNumber: 75,
        atomicMass: "186,21",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/75-renio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 5 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Z=76
    {
        period: 6,
        column: 8,
        name: "Ósmio",
        symbol: "Os",
        symbolWriting: "Os",
        atomicNumber: 76,
        atomicMass: "190,23",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/76-osmio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 6 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Z=77
    {
        period: 6,
        column: 9,
        name: "Irídio",
        symbol: "Ir",
        symbolWriting: "Ir",
        atomicNumber: 77,
        atomicMass: "192,22",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/77-iridio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 7 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Z=78
    {
        period: 6,
        column: 10,
        name: "Platina",
        symbol: "Pt",
        symbolWriting: "Pt",
        atomicNumber: 78,
        atomicMass: "195,08",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/78-platina-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            // Exceção: Pt costuma ter 5d⁹ 6s¹
            { camada: 5, subnivel: "5 d", eletrons: 9 },
            { camada: 6, subnivel: "6 s", eletrons: 1 },
        ],
    },
    // Z=79
    {
        period: 6,
        column: 11,
        name: "Ouro",
        symbol: "Au",
        symbolWriting: "Au",
        atomicNumber: 79,
        atomicMass: "196,97",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/79-ouro-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            // Ouro: 5d¹⁰ 6s¹
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 1 },
        ],
    },
    // Z=80
    {
        period: 6,
        column: 12,
        name: "Mercúrio",
        symbol: "Hg",
        symbolWriting: "Hg",
        atomicNumber: 80,
        atomicMass: "200,59",
        groupName: "Metal de transição",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/80-mercurio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
        ],
    },
    // Z=81
    {
        period: 6,
        column: 13,
        name: "Tálio",
        symbol: "Tl",
        symbolWriting: "Tl",
        atomicNumber: 81,
        atomicMass: "204,38",
        groupName: "Metal pobre",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/81-talio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 1 },
        ],
    },
    // Z=82
    {
        period: 6,
        column: 14,
        name: "Chumbo",
        symbol: "Pb",
        symbolWriting: "Pb",
        atomicNumber: 82,
        atomicMass: "207,2",
        groupName: "Metal pobre",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/82-chumbo-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 2 },
        ],
    },
    // Z=83
    {
        period: 6,
        column: 15,
        name: "Bismuto",
        symbol: "Bi",
        symbolWriting: "Bi",
        atomicNumber: 83,
        atomicMass: "208,98",
        groupName: "Metal pobre",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/83-bismuto-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 3 },
        ],
    },
    // Z=84
    {
        period: 6,
        column: 16,
        name: "Polônio",
        symbol: "Po",
        symbolWriting: "Po",
        atomicNumber: 84,
        atomicMass: "(209)",
        groupName: "Semimetal",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/84-polonio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 4 },
        ],
    },
    // Z=85
    {
        period: 6,
        column: 17,
        name: "Astato",
        symbol: "At",
        symbolWriting: "At",
        atomicNumber: 85,
        atomicMass: "(210)",
        groupName: "Halogênio",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/85-astato-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 5 },
        ],
    },
    // Z=86
    {
        period: 6,
        column: 18,
        name: "Radônio",
        symbol: "Rn",
        symbolWriting: "Rn",
        atomicNumber: 86,
        atomicMass: "(222)",
        groupName: "Gás nobre",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/86-radonio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
        ],
    },
    // Período 7 (linha 7) da tabela periódica
    {
        period: 7,
        column: 1,
        name: "Frâncio",
        symbol: "Fr",
        symbolWriting: "Fr",
        atomicNumber: 87,
        atomicMass: "(223)",
        groupName: "Metal alcalino",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/11/87-francio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            { camada: 7, subnivel: "7 s", eletrons: 1 },
        ],
    },
    // Z=88
    {
        period: 7,
        column: 2,
        name: "Rádio",
        symbol: "Ra",
        symbolWriting: "Ra",
        atomicNumber: 88,
        atomicMass: "(226)",
        groupName: "Metal alcalino-terroso",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/11/88-radio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            { camada: 7, subnivel: "7 s", eletrons: 2 },
        ],
    },
    // Série dos Actinídeos
    // Z=89
    {
        period: "Actinídeos",
        column: 3,
        name: "Actínio",
        symbol: "Ac",
        symbolWriting: "Ac",
        atomicNumber: 89,
        atomicMass: "(227)",
        groupName: "Actinídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/89-actinio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            // Até aqui temos 86 elétrons (equivalente a [Rn]).
            // Actínio (Z=89): [Rn] 7s² 6d¹
            { camada: 7, subnivel: "7 s", eletrons: 2 },
            { camada: 6, subnivel: "6 d", eletrons: 1 },
        ],
    },
    // Z=90
    {
        period: "Actinídeos",
        column: 3,
        name: "Tório",
        symbol: "Th",
        symbolWriting: "Th",
        atomicNumber: 90,
        atomicMass: "232,04",
        groupName: "Actinídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/90-torio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            // Tório (Z=90): [Rn] 7s² 6d²
            { camada: 7, subnivel: "7 s", eletrons: 2 },
            { camada: 6, subnivel: "6 d", eletrons: 2 },
        ],
    },
    // Z=91
    {
        period: "Actinídeos",
        column: 3,
        name: "Protactínio",
        symbol: "Pa",
        symbolWriting: "Pa",
        atomicNumber: 91,
        atomicMass: "231,04",
        groupName: "Actinídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/91-protactinio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            // Protactínio (Z=91): [Rn] 7s² 6d¹ 5f²
            { camada: 7, subnivel: "7 s", eletrons: 2 },
            { camada: 6, subnivel: "6 d", eletrons: 1 },
            { camada: 5, subnivel: "5 f", eletrons: 2 },
        ],
    },
    // Z=92
    {
        period: "Actinídeos",
        column: 3,
        name: "Urânio",
        symbol: "U",
        symbolWriting: "U",
        atomicNumber: 92,
        atomicMass: "238,03",
        groupName: "Actinídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/92-uranio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            // Urânio (Z=92): [Rn] 7s² 6d¹ 5f³
            { camada: 7, subnivel: "7 s", eletrons: 2 },
            { camada: 6, subnivel: "6 d", eletrons: 1 },
            { camada: 5, subnivel: "5 f", eletrons: 3 },
        ],
    },
    // Z=93
    {
        period: "Actinídeos",
        column: 3,
        name: "Netúnio",
        symbol: "Np",
        symbolWriting: "Np",
        atomicNumber: 93,
        atomicMass: "(237)",
        groupName: "Actinídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/93-neptunio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            // Netúnio (Z=93): [Rn] 7s² 6d¹ 5f⁴
            { camada: 7, subnivel: "7 s", eletrons: 2 },
            { camada: 6, subnivel: "6 d", eletrons: 1 },
            { camada: 5, subnivel: "5 f", eletrons: 4 },
        ],
    },
    // Z=94
    {
        period: "Actinídeos",
        column: 3,
        name: "Plutônio",
        symbol: "Pu",
        symbolWriting: "Pu",
        atomicNumber: 94,
        atomicMass: "(244)",
        groupName: "Actinídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/94-plutonio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            // Plutônio (Z=94): mais aceito como [Rn] 7s² 5f⁶ (sem 6d)
            { camada: 7, subnivel: "7 s", eletrons: 2 },
            { camada: 5, subnivel: "5 f", eletrons: 6 },
        ],
    },
    // Z=95
    {
        period: "Actinídeos",
        column: 3,
        name: "Amerício",
        symbol: "Am",
        symbolWriting: "Am",
        atomicNumber: 95,
        atomicMass: "(243)",
        groupName: "Actinídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/95-americio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            // Amerício (Z=95): [Rn] 7s² 5f⁷
            { camada: 7, subnivel: "7 s", eletrons: 2 },
            { camada: 5, subnivel: "5 f", eletrons: 7 },
        ],
    },
    // Z=96
    {
        period: "Actinídeos",
        column: 3,
        name: "Cúrio",
        symbol: "Cm",
        symbolWriting: "Cm",
        atomicNumber: 96,
        atomicMass: "(247)",
        groupName: "Actinídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/96-curio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            // Cúrio (Z=96): geralmente [Rn] 7s² 5f⁷ 6d¹
            { camada: 7, subnivel: "7 s", eletrons: 2 },
            { camada: 6, subnivel: "6 d", eletrons: 1 },
            { camada: 5, subnivel: "5 f", eletrons: 7 },
        ],
    },
    // Z=97
    {
        period: "Actinídeos",
        column: 3,
        name: "Berquélio",
        symbol: "Bk",
        symbolWriting: "Bk",
        atomicNumber: 97,
        atomicMass: "(247)",
        groupName: "Actinídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/97-berquelio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            // Berquélio (Z=97): [Rn] 7s² 5f⁹ (algumas fontes consideram 5f8 6d1 7s2)
            { camada: 7, subnivel: "7 s", eletrons: 2 },
            { camada: 5, subnivel: "5 f", eletrons: 9 },
        ],
    },
    // Z=98
    {
        period: "Actinídeos",
        column: 3,
        name: "Califórnio",
        symbol: "Cf",
        symbolWriting: "Cf",
        atomicNumber: 98,
        atomicMass: "(251)",
        groupName: "Actinídeo",
        imageUrl: "https://www.tabelaperiodica.org/wp-content/uploads/2018/10/98-californio-MED.jpg",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            // Califórnio (Z=98): [Rn] 7s² 5f¹⁰
            { camada: 7, subnivel: "7 s", eletrons: 2 },
            { camada: 5, subnivel: "5 f", eletrons: 10 },
        ],
    },
    // Z=99
    {
        period: "Actinídeos",
        column: 3,
        name: "Einstênio",
        symbol: "Es",
        symbolWriting: "Es",
        atomicNumber: 99,
        atomicMass: "(252)",
        groupName: "Actinídeo",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            // Einstênio (Z=99): [Rn] 7s² 5f¹¹
            { camada: 7, subnivel: "7 s", eletrons: 2 },
            { camada: 5, subnivel: "5 f", eletrons: 11 },
        ],
    },
    // Z=100
    {
        period: "Actinídeos",
        column: 3,
        name: "Férmio",
        symbol: "Fm",
        symbolWriting: "Fm",
        atomicNumber: 100,
        atomicMass: "(257)",
        groupName: "Actinídeo",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            // Férmio (Z=100): [Rn] 7s² 5f¹²
            { camada: 7, subnivel: "7 s", eletrons: 2 },
            { camada: 5, subnivel: "5 f", eletrons: 12 },
        ],
    },
    // Z=101
    {
        period: "Actinídeos",
        column: 3,
        name: "Mendelévio",
        symbol: "Md",
        symbolWriting: "Md",
        atomicNumber: 101,
        atomicMass: "(258)",
        groupName: "Actinídeo",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            // Mendelévio (Z=101): [Rn] 7s² 5f¹³
            { camada: 7, subnivel: "7 s", eletrons: 2 },
            { camada: 5, subnivel: "5 f", eletrons: 13 },
        ],
    },
    // Z=102
    {
        period: "Actinídeos",
        column: 3,
        name: "Nobélio",
        symbol: "No",
        symbolWriting: "No",
        atomicNumber: 102,
        atomicMass: "(259)",
        groupName: "Actinídeo",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            // Nobélio (Z=102): [Rn] 7s² 5f¹⁴
            { camada: 7, subnivel: "7 s", eletrons: 2 },
            { camada: 5, subnivel: "5 f", eletrons: 14 },
        ],
    },
    // Z=103
    {
        period: "Actinídeos",
        column: 3,
        name: "Laurêncio",
        symbol: "Lr",
        symbolWriting: "Lr",
        atomicNumber: 103,
        atomicMass: "(262)",
        groupName: "Actinídeo",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            // Laurêncio (Z=103): configuração comumente aceita como [Rn] 7s² 5f¹⁴ 7p¹
            { camada: 7, subnivel: "7 s", eletrons: 2 },
            { camada: 5, subnivel: "5 f", eletrons: 14 },
            { camada: 7, subnivel: "7 p", eletrons: 1 },
        ],
    },
    // Período 7 (continuando) elementos não-actinídeos
    // Z = 104
    {
        period: 7,
        column: 4,
        name: "Rutherfórdio",
        symbol: "Rf",
        symbolWriting: "Rf",
        atomicNumber: 104,
        atomicMass: "(267)",
        groupName: "Metal de transição",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 5, subnivel: "5 f", eletrons: 14 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            { camada: 6, subnivel: "6 d", eletrons: 2 },
            { camada: 7, subnivel: "7 s", eletrons: 2 },
        ],
    },
    // Z = 105
    {
        period: 7,
        column: 5,
        name: "Dúbnio",
        symbol: "Db",
        symbolWriting: "Db",
        atomicNumber: 105,
        atomicMass: "(268)",
        groupName: "Metal de transição",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 5, subnivel: "5 f", eletrons: 14 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            { camada: 6, subnivel: "6 d", eletrons: 3 },
            { camada: 7, subnivel: "7 s", eletrons: 2 },
        ],
    },
    // Z = 106
    {
        period: 7,
        column: 6,
        name: "Seabórgio",
        symbol: "Sg",
        symbolWriting: "Sg",
        atomicNumber: 106,
        atomicMass: "(269)",
        groupName: "Metal de transição",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 5, subnivel: "5 f", eletrons: 14 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            { camada: 6, subnivel: "6 d", eletrons: 4 },
            { camada: 7, subnivel: "7 s", eletrons: 2 },
        ],
    },
    // Z = 107
    {
        period: 7,
        column: 7,
        name: "Bóhrio",
        symbol: "Bh",
        symbolWriting: "Bh",
        atomicNumber: 107,
        atomicMass: "(270)",
        groupName: "Metal de transição",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 5, subnivel: "5 f", eletrons: 14 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            { camada: 6, subnivel: "6 d", eletrons: 5 },
            { camada: 7, subnivel: "7 s", eletrons: 2 },
        ],
    },
    // Z = 108
    {
        period: 7,
        column: 8,
        name: "Hássio",
        symbol: "Hs",
        symbolWriting: "Hs",
        atomicNumber: 108,
        atomicMass: "(270)",
        groupName: "Metal de transição",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 5, subnivel: "5 f", eletrons: 14 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            { camada: 6, subnivel: "6 d", eletrons: 6 },
            { camada: 7, subnivel: "7 s", eletrons: 2 },
        ],
    },
    // Z = 109
    {
        period: 7,
        column: 9,
        name: "Meitnério",
        symbol: "Mt",
        symbolWriting: "Mt",
        atomicNumber: 109,
        atomicMass: "(278)",
        groupName: "Metal de transição",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 5, subnivel: "5 f", eletrons: 14 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            { camada: 6, subnivel: "6 d", eletrons: 7 },
            { camada: 7, subnivel: "7 s", eletrons: 2 },
        ],
    },
    // Z = 110
    {
        period: 7,
        column: 10,
        name: "Darmstádio",
        symbol: "Ds",
        symbolWriting: "Ds",
        atomicNumber: 110,
        atomicMass: "(281)",
        groupName: "Metal de transição",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 5, subnivel: "5 f", eletrons: 14 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            { camada: 6, subnivel: "6 d", eletrons: 8 },
            { camada: 7, subnivel: "7 s", eletrons: 2 },
        ],
    },
    // Z = 111
    {
        period: 7,
        column: 11,
        name: "Roentgênio",
        symbol: "Rg",
        symbolWriting: "Rg",
        atomicNumber: 111,
        atomicMass: "(282)",
        groupName: "Metal de transição",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 5, subnivel: "5 f", eletrons: 14 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            { camada: 6, subnivel: "6 d", eletrons: 9 },
            { camada: 7, subnivel: "7 s", eletrons: 2 },
        ],
    },
    // Z = 112
    {
        period: 7,
        column: 12,
        name: "Copernício",
        symbol: "Cn",
        symbolWriting: "Cn",
        atomicNumber: 112,
        atomicMass: "(285)",
        groupName: "Metal de transição",
        distribution: [
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 5, subnivel: "5 f", eletrons: 14 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            { camada: 6, subnivel: "6 d", eletrons: 10 },
            { camada: 7, subnivel: "7 s", eletrons: 2 },
        ],
    },
    // Z = 113
    {
        period: 7,
        column: 13,
        name: "Nihônio",
        symbol: "Nh",
        symbolWriting: "Nh",
        atomicNumber: 113,
        atomicMass: "(286)",
        groupName: "Metal pobre",
        distribution: [
            // Mesma base do Cn (Z=112), mas com +1 elétron em 7p
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 5, subnivel: "5 f", eletrons: 14 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            { camada: 6, subnivel: "6 d", eletrons: 10 },
            { camada: 7, subnivel: "7 s", eletrons: 2 },
            { camada: 7, subnivel: "7 p", eletrons: 1 },
        ],
    },
    // Z = 114
    {
        period: 7,
        column: 14,
        name: "Fleróvio",
        symbol: "Fl",
        symbolWriting: "Fl",
        atomicNumber: 114,
        atomicMass: "(289)",
        groupName: "Metal pobre",
        distribution: [
            // Mesma base do Nihônio, mas 7p²
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 5, subnivel: "5 f", eletrons: 14 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            { camada: 6, subnivel: "6 d", eletrons: 10 },
            { camada: 7, subnivel: "7 s", eletrons: 2 },
            { camada: 7, subnivel: "7 p", eletrons: 2 },
        ],
    },
    // Z = 115
    {
        period: 7,
        column: 15,
        name: "Moscóvio",
        symbol: "Mc",
        symbolWriting: "Mc",
        atomicNumber: 115,
        atomicMass: "(290)",
        groupName: "Semimetal",
        distribution: [
            // 7p³
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 5, subnivel: "5 f", eletrons: 14 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            { camada: 6, subnivel: "6 d", eletrons: 10 },
            { camada: 7, subnivel: "7 s", eletrons: 2 },
            { camada: 7, subnivel: "7 p", eletrons: 3 },
        ],
    },
    // Z = 116
    {
        period: 7,
        column: 16,
        name: "Livermório",
        symbol: "Lv",
        symbolWriting: "Lv",
        atomicNumber: 116,
        atomicMass: "(293)",
        groupName: "Metal pobre",
        distribution: [
            // 7p⁴
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 5, subnivel: "5 f", eletrons: 14 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            { camada: 6, subnivel: "6 d", eletrons: 10 },
            { camada: 7, subnivel: "7 s", eletrons: 2 },
            { camada: 7, subnivel: "7 p", eletrons: 4 },
        ],
    },
    // Z = 117
    {
        period: 7,
        column: 17,
        name: "Tenessino",
        symbol: "Ts",
        symbolWriting: "Ts",
        atomicNumber: 117,
        atomicMass: "(294)",
        groupName: "Halogênio",
        distribution: [
            // 7p⁵
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 5, subnivel: "5 f", eletrons: 14 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            { camada: 6, subnivel: "6 d", eletrons: 10 },
            { camada: 7, subnivel: "7 s", eletrons: 2 },
            { camada: 7, subnivel: "7 p", eletrons: 5 },
        ],
    },
    // Z = 118
    {
        period: 7,
        column: 18,
        name: "Oganessono",
        symbol: "Og",
        symbolWriting: "Og",
        atomicNumber: 118,
        atomicMass: "(294)",
        groupName: "Gás nobre",
        distribution: [
            // 7p⁶
            { camada: 1, subnivel: "1 s", eletrons: 2 },
            { camada: 2, subnivel: "2 s", eletrons: 2 },
            { camada: 2, subnivel: "2 p", eletrons: 6 },
            { camada: 3, subnivel: "3 s", eletrons: 2 },
            { camada: 3, subnivel: "3 p", eletrons: 6 },
            { camada: 3, subnivel: "3 d", eletrons: 10 },
            { camada: 4, subnivel: "4 s", eletrons: 2 },
            { camada: 4, subnivel: "4 p", eletrons: 6 },
            { camada: 4, subnivel: "4 d", eletrons: 10 },
            { camada: 4, subnivel: "4 f", eletrons: 14 },
            { camada: 5, subnivel: "5 s", eletrons: 2 },
            { camada: 5, subnivel: "5 p", eletrons: 6 },
            { camada: 5, subnivel: "5 d", eletrons: 10 },
            { camada: 5, subnivel: "5 f", eletrons: 14 },
            { camada: 6, subnivel: "6 s", eletrons: 2 },
            { camada: 6, subnivel: "6 p", eletrons: 6 },
            { camada: 6, subnivel: "6 d", eletrons: 10 },
            { camada: 7, subnivel: "7 s", eletrons: 2 },
            { camada: 7, subnivel: "7 p", eletrons: 6 },
        ],
    },
];

// Garante que cada elemento tenha o campo imageUrl definido.
// Por padrão deixamos uma string vazia, mas esse campo pode ser
// preenchido posteriormente com a URL de uma imagem ilustrativa.
periodicElements.forEach((el) => {
    if (typeof el.imageUrl === 'undefined') {
        el.imageUrl = '';
    }
});


// --------------------------------------------------
// GERAÇÃO DA TABELA
// --------------------------------------------------

// Variável global indicando se o modo colorido está ativo ou não.  
// Esta flag será utilizada nas funções de controle de cor e para
// ajustar o visual das modais quando necessário.
let colorModeActive = false;

function generatePeriodSections() {
    // Agrupa os elementos pelo número/string do período
    const periodGroups = {};
    periodicElements.forEach((elem) => {
        if (!periodGroups[elem.period]) {
            periodGroups[elem.period] = [];
        }
        periodGroups[elem.period].push(elem);
    });

    const container = document.querySelector("#secao-periodos .container");

    // Definimos a ordem desejada dos períodos
    // 1..7 e depois a "série" dos Lantanídeos (e Actinídeos, se houver).
    const periodOrder = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "Lantanídeos",
        "Actinídeos", // só terá efeito se existir "Actinídeos" no array
    ];

    // Ordena as chaves (períodos) segundo a ordem customizada
    Object.keys(periodGroups)
        .sort((a, b) => {
            const indexA = periodOrder.indexOf(String(a));
            const indexB = periodOrder.indexOf(String(b));

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
        .forEach((period) => {
            // Cria o título de seção:
            let tituloLinha = "";
            if (period === "Lantanídeos" || period === "Actinídeos") {
                // Se for uma string especial, usa como está
                tituloLinha = period;
            } else {
                // Caso contrário, adiciona "º período"
                tituloLinha = `${period}º período`;
            }

            // Div que contém o título
            const periodTitle = document.createElement("div");
            periodTitle.classList.add(
                "text-center",
                "linha-secao",
                "col-lg-10",
                "container"
            );
            periodTitle.innerHTML = `
          <h2 id="periodo-${period}" class="titulo-linha mb-4">${tituloLinha}</h2>
        `;
            container.appendChild(periodTitle);

            // Cria um container row (apenas uma vez por período)
            const row = document.createElement("div");
            row.classList.add(
                "row",
                "gx-5",
                "row-cols-1",
                "row-cols-sm-2",
                "row-cols-xl-5",
                "justify-content-center"
            );

            // Gera os "cards" (botões) para cada elemento do período
            periodGroups[period].forEach((elem) => {
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

                // Conteúdo do botão
                colBtn.innerHTML = `
            <div class="fs-6 text-end fw-bold fst-italic">Período ${elem.period}</div>
            <span class="fw-bolder fs-1">${elem.symbol}</span><br/>
            <span class="fw-bolder fs-4">${elem.name}</span><br/>
            <span class="fw-bolder material-symbols-outlined" aria-hidden="true">expand_more</span>
            <div class="fs-6 text-end fw-bold fst-italic">Coluna ${elem.column}</div>
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

// Helper para montar distribuição eletrônica
function createDistribution(distArray) {
    // distArray: [{ camada: 1, subnivel: "1 s", eletrons: 2}, ... ]
    let result = "";
    distArray.forEach((d) => {
        result += `
        <div class="d-flex">
          <span><strong>Camada ${d.camada}:</strong>&ThinSpace;</span>
          <p aria-roledescription="subnível eletrônico">&ThinSpace; ${d.subnivel}</p>
          <p style="position: relative; top: -0.5em;" aria-roledescription="elétrons.">
            ${d.eletrons}
          </p>
        </div>
      `;
    });
    return result;
}

// Função para ativar ou desativar as cores dos elementos
function setupColorToggle() {
    const toggleButton = document.getElementById('toggle-cores');
    if (!toggleButton) return; // Sai da função se o botão não existir
    
    // Usaremos a variável global colorModeActive para controlar o estado.
    // Remove a definição local para garantir que a mesma flag seja utilizada
    // em todas as funções.
    
    toggleButton.addEventListener('click', () => {
      // Alterna o estado global de cores
      colorModeActive = !colorModeActive;
      
      // Seleciona todos os botões de elementos
      const elementButtons = document.querySelectorAll('.btn-elemento');
      
      if (colorModeActive) {
        // Ativa as cores
        toggleButton.textContent = 'Desativar cores';
        toggleButton.setAttribute('aria-label', 'Desativar cores da tabela periódica');
        
        // Primeiro adiciona a classe global ao body
        document.body.classList.add('colors-active');
        
        elementButtons.forEach(button => {
          // Extrai o símbolo do elemento do botão
          const symbolElement = button.querySelector('.fw-bolder.fs-1');
          if (!symbolElement) return;
          
          const symbol = symbolElement.textContent.trim();
          const color = getElementColor(symbol);
          
          // Adiciona a classe de colorido ao botão
          button.classList.add('colored-element');
          
          // Método mais direto para forçar a cor de fundo
          button.style.backgroundColor = color;
          button.style.background = color;
          button.style.borderColor = darkenColor(color, 20);
          
          // Técnica extra específica para Chrome/Edge
          button.setAttribute('style', 
            `background: ${color} !important; 
             background-color: ${color} !important; 
             background-image: none !important; 
             color: #000000 !important; 
             border-color: ${darkenColor(color, 20)} !important;`
          );
          
          // Forçar a cor preta em TODOS os elementos internos (textos)
          const allTexts = button.querySelectorAll('*');
          allTexts.forEach(text => {
            text.style.color = '#000000';
            text.setAttribute('style', 'color: #000000 !important');
          });
        });
        
      } else {
        // Desativa as cores (volta ao padrão dark)
        toggleButton.textContent = 'Ativar cores';
        toggleButton.setAttribute('aria-label', 'Ativar cores da tabela periódica');
        
        // Remove classe do body primeiro
        document.body.classList.remove('colors-active');
        
        elementButtons.forEach(button => {
          // Remove todas as modificações de estilo
          button.classList.remove('colored-element');
          
          // Limpar completamente os estilos inline
          button.removeAttribute('style');
          
          // Restaurar estilos originais do elemento
          button.style = '';
          
          // Restaurar estilos dos filhos 
          const allTexts = button.querySelectorAll('*');
          allTexts.forEach(text => {
            text.removeAttribute('style');
            text.style = '';
          });
        });
      }
      // Após tratar os botões de elementos, ajusta também as modais
      updateModalColors(colorModeActive);
    });
  }

  // Função para determinar a cor do elemento com base em seu símbolo
  function getElementColor(symbol) {
    // Gases nobres - Azul-claro
    if (['He', 'Ne', 'Ar', 'Kr', 'Xe', 'Rn', 'Og'].includes(symbol)) {
      return '#a0d2ff';
    }
    
    // Halogênios - Ciano (azul-esverdeado)
    if (['F', 'Cl', 'Br', 'I', 'At', 'Ts'].includes(symbol)) {
      return '#80ffe0';
    }
    
    // Não metais - Verde-vivo (neon)
    if (['N', 'O', 'P', 'S', 'Se', 'Te'].includes(symbol)) {
      return '#80ff80';
    }
    
    // Semimetais - Verde-oliva
    if (['B', 'Si', 'Ge', 'As', 'Sb', 'Bi', 'Po'].includes(symbol)) {
      return '#c0ca80';
    }
    
    // Metais pobres - Cinza-azulado claro
    if (['Al', 'Ga', 'In', 'Sn', 'Tl', 'Pb', 'Fl', 'Mc', 'Lv'].includes(symbol)) {
      return '#c0d0e0';
    }
    
    // Metais de transição - Rosa-avermelhado (salmão escuro)
    if ([
      'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn',
      'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd',
      'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg',
      'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn'
    ].includes(symbol)) {
      return '#e39b9b';
    }
    
    // Metais alcalino-terrosos - Amarelo-limão
    if (['Be', 'Mg', 'Ca', 'Sr', 'Ba', 'Ra'].includes(symbol)) {
      return '#d1ff7a';
    }
    
    // Metais alcalinos - Laranja
    if (['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr'].includes(symbol)) {
      return '#ffa54d';
    }
    
    // Lantanídeos - Laranja-claro (salmão)
    if ([
      'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 
      'Ho', 'Er', 'Tm', 'Yb', 'Lu'
    ].includes(symbol)) {
      return '#ffb38a';
    }
    
    // Actinídeos - Lilás (violeta-claro)
    if ([
      'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf',
      'Es', 'Fm', 'Md', 'No', 'Lr'
    ].includes(symbol)) {
      return '#d8b0ff';
    }
    
    // Hidrogênio - Roxo-claro
    if (symbol === 'H') {
      return '#c9abff';
    }
    
    // Cor padrão caso o símbolo não seja encontrado
    return '#7c7c7c';
  }
  
  // Função auxiliar para escurecer uma cor (para bordas)
  function darkenColor(color, percent) {
    const num = parseInt(color.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, (num >> 16) - amt);
    const G = Math.max(0, (num >> 8 & 0x00FF) - amt);
    const B = Math.max(0, (num & 0x0000FF) - amt);
    return `#${(1 << 24 | R << 16 | G << 8 | B).toString(16).slice(1)}`;
  }

/**
 * Atualiza as cores das janelas modais de acordo com o modo de cor.  
 * Quando o modo colorido está ativado, cada modal assume a mesma cor
 * do botão do elemento correspondente. Caso contrário, as modais
 * retornam ao esquema escuro padrão definido nos estilos CSS.
 * @param {boolean} active Indica se o modo colorido está ativo.
 */
function updateModalColors(active) {
  // Seleciona todas as modais existentes no documento
  const modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => {
    const symbol = modal.getAttribute('data-element-symbol');
    if (!symbol) return;
    const color = getElementColor(symbol);
    const modalContent = modal.querySelector('.modal-content');
    if (!modalContent) return;
    if (active) {
      // Aplica cor de fundo e define texto preto para contraste
      modalContent.style.backgroundColor = color;
      modalContent.style.color = '#000000';
      const header = modalContent.querySelector('.modal-header');
      const body = modalContent.querySelector('.modal-body');
      const footer = modalContent.querySelector('.modal-footer');
      [header, body, footer].forEach((section) => {
        if (section) {
          section.style.backgroundColor = color;
          section.style.color = '#000000';
        }
      });
      // Ajusta a visibilidade do botão de fechar invertendo a cor
      const closeBtn = modalContent.querySelector('.btn-close');
      if (closeBtn) {
        closeBtn.style.filter = 'invert(1)';
      }
    } else {
      // Remove estilos inline para retornar ao modo escuro
      modalContent.style.backgroundColor = '';
      modalContent.style.color = '';
      const header = modalContent.querySelector('.modal-header');
      const body = modalContent.querySelector('.modal-body');
      const footer = modalContent.querySelector('.modal-footer');
      [header, body, footer].forEach((section) => {
        if (section) {
          section.style.backgroundColor = '';
          section.style.color = '';
        }
      });
      const closeBtn = modalContent.querySelector('.btn-close');
      if (closeBtn) {
        closeBtn.style.filter = '';
      }
    }
  });
}
  
  // Chamar a função ao carregar a página
  document.addEventListener('DOMContentLoaded', () => {
        generatePeriodSections();
        setupColorToggle();
        
        // Inicializa o estado das cores conforme o valor de colorModeActive
        const elementButtons = document.querySelectorAll('.btn-elemento');
        if (elementButtons && elementButtons.length > 0) {
            updateModalColors(colorModeActive);
        }

        // Sempre que uma modal Bootstrap for exibida, aplica a cor
        // correta de acordo com o estado global colorModeActive. O
        // evento 'show.bs.modal' é disparado imediatamente antes de
        // a modal se tornar visível.
        document.addEventListener('show.bs.modal', function () {
          updateModalColors(colorModeActive);
        });
      });