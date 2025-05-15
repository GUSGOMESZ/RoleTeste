const geographySignatures = {
  0: "Geografia Física",
  1: "Geografia Humana",
  2: "Cartografia",
  3: "Climatologia",
};

const geography = [
  // Geografia Física (0)
  [
    {
      text: "A colisão entre placas tectônicas, como a de Nazca e a Sul-Americana, é responsável por qual fenômeno geológico no Chile?",
      options: [
        "Formação de desertos",
        "Atividade vulcânica e terremotos",
        "Criação de recifes de coral",
        "Erosão acelerada do solo",
      ],
      correctAnswer: 1,
      dicas: [
        "Limites convergentes de placas geram vulcanismo e abalos sísmicos.",
        "Dica: O Chile está no Círculo de Fogo do Pacífico, área de intenso tectonismo.",
        "A resposta correta é a opção B.",
      ],
    },
    {
      text: "Qual clima predomina na região amazônica, caracterizado por altas temperaturas e chuvas abundantes durante todo o ano?",
      options: [
        "Clima tropical seco",
        "Clima subtropical úmido",
        "Clima equatorial",
        "Clima desértico",
      ],
      correctAnswer: 2,
      dicas: [
        "O clima equatorial ocorre próximo à linha do Equador, com florestas tropicais.",
        "Dica: Alta umidade e temperaturas médias de 25°C a 28°C.",
        "A resposta correta é a opção C.",
      ],
    },
  ],
  // Geografia Humana (1)
  [
    {
      text: "Qual é a principal causa do processo de urbanização acelerada em países subdesenvolvidos no século XX?",
      options: [
        "Expansão de políticas agrícolas",
        "Êxodo rural devido à industrialização e busca por oportunidades urbanas",
        "Diminuição da taxa de natalidade",
        "Incentivo governamental à migração internacional",
      ],
      correctAnswer: 1,
      dicas: [
        "Urbanização está ligada ao movimento populacional do campo para as cidades.",
        "Dica: Falta de infraestrutura no campo e atração por empregos urbanos.",
        "A resposta correta é a opção B.",
      ],
    },
    {
      text: "O que representa a 'Transição Demográfica'?",
      options: [
        "A substituição da população rural pela urbana",
        "A mudança de altas para baixas taxas de natalidade e mortalidade ao longo do tempo",
        "A migração de povos entre continentes",
        "O envelhecimento populacional sem alteração nas taxas de fecundidade",
      ],
      correctAnswer: 1,
      dicas: [
        "Modelo que explica a evolução das taxas vitais de uma população.",
        "Dica: Países desenvolvidos já completaram essa transição.",
        "A resposta correta é a opção B.",
      ],
    },
  ],
  // Cartografia (2)
  [
    {
      text: "Qual elemento cartográfico é essencial para entender a relação entre distâncias no mapa e na realidade?",
      options: ["Rosa dos ventos", "Escala", "Legenda", "Título"],
      correctAnswer: 1,
      dicas: [
        "A escala indica quantas vezes o espaço real foi reduzido no mapa.",
        "Dica: Escala numérica: 1:100.000 (1 cm = 1 km).",
        "A resposta correta é a opção B.",
      ],
    },
    {
      text: "A projeção cartográfica de Mercator é amplamente utilizada para navegação marítima, mas é criticada por:",
      options: [
        "Distorcer as áreas próximas aos polos",
        "Não representar a altitude",
        "Ignorar fusos horários",
        "Ser incompatível com GPS",
      ],
      correctAnswer: 0,
      dicas: [
        "Projeções cilíndricas exageram regiões de alta latitude.",
        "Dica: A Groenlândia parece maior que a América do Sul nessa projeção.",
        "A resposta correta é a opção A.",
      ],
    },
  ],
  // Climatologia (3)
  [
    {
      text: "Qual tipo climático é caracterizado por verões quentes, invernos frios e estações bem definidas, comum em regiões como o sul do Brasil?",
      options: [
        "Clima equatorial",
        "Clima desértico",
        "Clima temperado",
        "Clima polar",
      ],
      correctAnswer: 2,
      dicas: [
        "Clima típico de latitudes médias (entre 30° e 60°).",
        "Dica: Presente em países como EUA, Argentina e sul do Brasil.",
        "A resposta correta é a opção C.",
      ],
    },
    {
      text: "O fenômeno climático El Niño está associado principalmente a:",
      options: [
        "Resfriamento anormal das águas do Pacífico",
        "Aquecimento das águas do Pacífico Tropical",
        "Aumento da precipitação no Saara",
        "Intensificação das monções na Ásia",
      ],
      correctAnswer: 1,
      dicas: [
        "Altera padrões climáticos globais, como secas e enchentes.",
        "Dica: Reduz a pesca no Peru e causa chuvas no sul do Brasil.",
        "A resposta correta é a opção B.",
      ],
    },
  ],
];

export { geography, geographySignatures };
