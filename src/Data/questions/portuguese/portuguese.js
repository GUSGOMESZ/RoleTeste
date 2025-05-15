const portugueseSignatures = {
  0: "Morfologia",
  1: "Acentuação",
  2: "Interpretação",
  3: "Gramática",
};

const portuguese = [
  // Morfologia (0)
  [
    {
      text: "Na frase 'Estou (cantando) no chuveiro', a palavra destacada é classificada como:",
      options: [
        "Verbo no gerúndio",
        "Verbo no particípio",
        "Advérbio de modo",
        "Substantivo comum",
      ],
      correctAnswer: 0,
      dicas: [
        "O gerúndio é uma forma verbal que indica ação em andamento (termina em -ndo).",
        "Dica: A terminação -ndo é característica dessa forma verbal.",
        "A resposta correta é a opção A.",
      ],
    },
    {
      text: "A palavra 'guarda-chuva' é formada por qual processo?",
      options: [
        "Derivação prefixal",
        "Composição por justaposição",
        "Flexão de gênero",
        "Derivação sufixal",
      ],
      correctAnswer: 1,
      dicas: [
        "Composição por justaposição une palavras sem alterar sua forma (ex: guarda + chuva).",
        "Dica: Nesse processo, as palavras mantêm sua grafia original.",
        "A resposta correta é a opção B.",
      ],
    },
  ],
  // Acentuação (1)
  [
    {
      text: "Qual palavra é acentuada por ser proparoxítona?",
      options: ["Caminhão", "Herói", "Ótimo", "Heroísmo"],
      correctAnswer: 1,
      dicas: [
        "Proparoxítonas têm acento na antepenúltima sílaba e são sempre acentuadas.",
        "Dica: A palavra 'Herói' tem a sílaba tônica em 'ró' (terceira sílaba de trás para frente).",
        "A resposta correta é a opção B.",
      ],
    },
    {
      text: "Qual opção apresenta acento devido a um hiato?",
      options: ["Saúde", "Óleo", "Vírgula", "É"],
      correctAnswer: 0,
      dicas: [
        "Hiatos ocorrem quando vogais da mesma sílaba se separam (ex: sa-ú-de).",
        "Dica: O acento em 'saúde' marca o hiato entre o 'u' e o 'i'.",
        "A resposta correta é a opção A.",
      ],
    },
  ],
  // Interpretação (2)
  [
    {
      text: "'A sustentabilidade não é mais uma opção, mas uma necessidade...'. Qual é o tema central do texto?",
      options: [
        "A importância da tecnologia moderna",
        "A urgência da sustentabilidade ambiental",
        "A necessidade de aumentar a produção industrial",
        "O crescimento populacional no século XXI",
      ],
      correctAnswer: 1,
      dicas: [
        "O tema central é a ideia mais repetida e abrangente do texto.",
        "Dica: Observe palavras-chave como 'sustentabilidade' e 'recursos naturais'.",
        "A resposta correta é a opção B.",
      ],
    },
    {
      text: "Qual é a intenção do autor ao descrever o céu nublado no texto?",
      options: [
        "Criticar o clima da região",
        "Simbolizar a incerteza do personagem",
        "Destacar a beleza da natureza",
        "Informar sobre condições metereológicas",
      ],
      correctAnswer: 1,
      dicas: [
        "Elementos naturais frequentemente simbolizam estados emocionais.",
        "Dica: O céu nublado reflete o conflito interno do personagem.",
        "A resposta correta é a opção B.",
      ],
    },
  ],
  // Gramática (3)
  [
    {
      text: "Qual forma verbal completa corretamente a frase: Os alunos (?) para a prova durante toda a tarde.",
      options: ["estudou", "estudaram", "estudamos", "estudara"],
      correctAnswer: 1,
      dicas: [
        "Sujeito plural exige verbo no plural (Os alunos estudaram).",
        "Dica: O sujeito 'Os alunos' está na terceira pessoa do plural.",
        "A resposta correta é a opção B.",
      ],
    },
    {
      text: "Qual opção preenche adequadamente a lacuna: Ela (?) viu no espelho antes de sair.",
      options: ["se", "lhe", "a si", "o"],
      correctAnswer: 0,
      dicas: [
        "Pronome reflexivo 'se' indica ação do sujeito sobre si mesmo.",
        "Dica: A ação de 'se ver' é reflexiva (ela viu a si mesma).",
        "A resposta correta é a opção A.",
      ],
    },
  ],
];

export { portuguese, portugueseSignatures };
