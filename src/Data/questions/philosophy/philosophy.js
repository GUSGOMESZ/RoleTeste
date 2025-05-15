const philosophySignatures = {
  0: "Filosofia Antiga",
  1: "Filosofia Medieval",
  2: "Filosofia Moderna",
  3: "Filosofia Contemporânea",
};

const philosophy = [
  // Filosofia Antiga (0)
  [
    {
      text: "Quem é considerado o pai da filosofia ocidental, conhecido por seu método de questionamento dialético?",
      options: ["Aristóteles", "Platão", "Sócrates", "Pitágoras"],
      correctAnswer: 2,
      dicas: [
        "Ele não deixou escritos; seus ensinamentos foram registrados por Platão.",
        "Dica: Foi condenado à morte por corromper a juventude ateniense.",
        "A resposta correta é a opção C (Sócrates).",
      ],
    },
    {
      text: "Qual obra de Platão apresenta a alegoria da caverna, refletindo sobre a condição humana e o conhecimento?",
      options: ["A República", "Fedro", "Timeu", "Banquete"],
      correctAnswer: 0,
      dicas: [
        "A alegoria compara a realidade às sombras projetadas em uma caverna.",
        "Dica: O livro discute a natureza da justiça e o ideal de governo.",
        "A resposta correta é a opção A (A República).",
      ],
    },
  ],

  // Filosofia Medieval (1)
  [
    {
      text: "Qual filósofo cristão escreveu 'Confissões', combinando reflexão filosófica e religiosa?",
      options: [
        "Tomás de Aquino",
        "Santo Agostinho",
        "Anselmo de Cantuária",
        "Boécio",
      ],
      correctAnswer: 1,
      dicas: [
        "Sua obra aborda a conversão ao cristianismo e a busca pela verdade.",
        "Dica: Frase famosa: 'Nosso coração está inquieto até repousar em Ti, Senhor'.",
        "A resposta correta é a opção B (Santo Agostinho).",
      ],
    },
    {
      text: "Quem formulou as cinco vias para demonstrar racionalmente a existência de Deus na Idade Média?",
      options: [
        "Guido de Arezzo",
        "Tomás de Aquino",
        "Pedro Abelardo",
        "Roger Bacon",
      ],
      correctAnswer: 1,
      dicas: [
        "As cinco vias incluem argumentos como o do 'Primeiro Motor'.",
        "Dica: Autor da *Suma Teológica*, síntese entre fé e razão.",
        "A resposta correta é a opção B (Tomás de Aquino).",
      ],
    },
  ],

  // Filosofia Moderna (2)
  [
    {
      text: "Qual filósofo é conhecido pelo princípio 'Cogito, ergo sum' (Penso, logo existo)?",
      options: ["René Descartes", "John Locke", "David Hume", "Baruch Spinoza"],
      correctAnswer: 0,
      dicas: [
        "Ele propôs a dúvida metódica como fundamento do conhecimento.",
        "Dica: Considerado o pai do racionalismo moderno.",
        "A resposta correta é a opção A (René Descartes).",
      ],
    },
    {
      text: "Qual obra de Immanuel Kant definiu o conceito de 'imperativo categórico'?",
      options: [
        "Crítica da Razão Pura",
        "Fundamentação da Metafísica dos Costumes",
        "Crítica da Razão Prática",
        "Prolegômenos a toda Metafísica Futura",
      ],
      correctAnswer: 1,
      dicas: [
        "O imperativo categórico é uma máxima moral universalizável.",
        "Dica: 'Aja de tal modo que sua ação possa ser uma lei universal'.",
        "A resposta correta é a opção B (Fundamentação da Metafísica dos Costumes).",
      ],
    },
  ],

  // Filosofia Contemporânea (3)
  [
    {
      text: "Qual filósofo existencialista escreveu 'O Ser e o Nada'?",
      options: [
        "Jean-Paul Sartre",
        "Simone de Beauvoir",
        "Albert Camus",
        "Martin Heidegger",
      ],
      correctAnswer: 0,
      dicas: [
        "Ele defendia que 'a existência precede a essência'.",
        "Dica: Autor da frase 'O inferno são os outros'.",
        "A resposta correta é a opção A (Jean-Paul Sartre).",
      ],
    },
    {
      text: "Quem é o autor das 'Investigações Filosóficas', obra fundamental da filosofia da linguagem do século XX?",
      options: [
        "Ludwig Wittgenstein",
        "Bertrand Russell",
        "Karl Popper",
        "Jürgen Habermas",
      ],
      correctAnswer: 0,
      dicas: [
        "Ele critica a noção de linguagem como representação do mundo.",
        "Dica: Frase famosa: 'Os limites da minha linguagem significam os limites do meu mundo'.",
        "A resposta correta é a opção A (Ludwig Wittgenstein).",
      ],
    },
  ],
];

export { philosophy, philosophySignatures };
