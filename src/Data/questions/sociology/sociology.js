const sociologySignatures = {
  0: "Sociologia Clássica",
  1: "Sociologia Contemporânea",
  2: "Teorias Sociológicas",
  3: "Cultura e Sociedade",
};

const sociology = [
  // Sociologia Clássica (0)
  [
    {
      text: "Quem é considerado o pai da sociologia moderna, autor da 'Lei dos Três Estados'?",
      options: ["Auguste Comte", "Émile Durkheim", "Karl Marx", "Max Weber"],
      correctAnswer: 0,
      dicas: [
        "Fundador do positivismo e criador do termo 'sociologia'.",
        "Dica: Defendia que a sociedade deveria ser estudada com métodos científicos.",
        "A resposta correta é a opção A (Auguste Comte).",
      ],
    },
    {
      text: "Qual conceito durkheimiano refere-se à coesão social baseada em diferenças de funções e especialização?",
      options: [
        "Solidariedade mecânica",
        "Solidariedade orgânica",
        "Consciência coletiva",
        "Fato social",
      ],
      correctAnswer: 1,
      dicas: [
        "Característica de sociedades complexas e industrializadas.",
        "Dica: Contrasta com a solidariedade de sociedades tradicionais.",
        "A resposta correta é a opção B (Solidariedade orgânica).",
      ],
    },
  ],

  // Sociologia Contemporânea (1)
  [
    {
      text: "Qual sociólogo formulou a teoria da 'Estruturação', conciliando agência e estrutura?",
      options: [
        "Anthony Giddens",
        "Pierre Bourdieu",
        "Zygmunt Bauman",
        "Jürgen Habermas",
      ],
      correctAnswer: 0,
      dicas: [
        "Sua teoria supera a dicotomia entre ação individual e estruturas sociais.",
        "Dica: Autor de 'A Constituição da Sociedade' (1984).",
        "A resposta correta é a opção A (Anthony Giddens).",
      ],
    },
    {
      text: "Quem cunhou o termo 'modernidade líquida' para descrever a sociedade atual?",
      options: [
        "Ulrich Beck",
        "Judith Butler",
        "Zygmunt Bauman",
        "Michel Foucault",
      ],
      correctAnswer: 2,
      dicas: [
        "Descreve a fragilidade das relações e instituições na pós-modernidade.",
        "Dica: Associado aos conceitos de 'amor líquido' e 'medo líquido'.",
        "A resposta correta é a opção C (Zygmunt Bauman).",
      ],
    },
  ],

  // Teorias Sociológicas (2)
  [
    {
      text: "Qual abordagem teórica vê a sociedade como um sistema que tende ao equilíbrio?",
      options: [
        "Teoria do Conflito",
        "Interacionismo Simbólico",
        "Funcionalismo",
        "Teoria Crítica",
      ],
      correctAnswer: 2,
      dicas: [
        "Durkheim e Parsons são expoentes dessa perspectiva.",
        "Dica: Compara a sociedade a um organismo biológico.",
        "A resposta correta é a opção C (Funcionalismo).",
      ],
    },
    {
      text: "Qual teoria foca nas tensões e desigualdades geradas pela luta por recursos escassos?",
      options: [
        "Funcionalismo",
        "Teoria do Conflito",
        "Estruturalismo",
        "Positivismo",
      ],
      correctAnswer: 1,
      dicas: [
        "Marx é um precursor dessa abordagem.",
        "Dica: Analisa disputas de classe, gênero e raça.",
        "A resposta correta é a opção B (Teoria do Conflito).",
      ],
    },
  ],

  // Cultura e Sociedade (3)
  [
    {
      text: "Qual conceito de Pierre Bourdieu refere-se aos conhecimentos, habilidades e disposições que conferem vantagem social?",
      options: ["Habitus", "Capital social", "Capital cultural", "Campo"],
      correctAnswer: 2,
      dicas: [
        "Inclui educação formal, gostos artísticos e códigos culturais.",
        "Dica: Filhos de elites geralmente herdam esse capital.",
        "A resposta correta é a opção C (Capital cultural).",
      ],
    },
    {
      text: "Quem desenvolveu os estudos culturais focando na hegemonia e na relação mídia-sociedade?",
      options: [
        "Raymond Williams",
        "Stuart Hall",
        "Antonio Gramsci",
        "Erving Goffman",
      ],
      correctAnswer: 1,
      dicas: [
        "Diretor do Centro de Estudos Culturais Contemporâneos de Birmingham.",
        "Dica: Teoria da codificação/decodificação em comunicação.",
        "A resposta correta é a opção B (Stuart Hall).",
      ],
    },
  ],
];

export { sociology, sociologySignatures };
