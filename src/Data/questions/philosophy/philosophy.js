const philosophySignatures = {
    0: "Filosofia Antiga",
    1: "Filosofia Medieval",
    2: "Filosofia Moderna",
    3: "Filosofia Contemporânea",
};

const philosophy = [
  // Filosofia Antiga
  [
    {
      text: "Quem é considerado o pai da filosofia ocidental, conhecido por seu método de questionamento dialético?",
      options: ["Aristóteles", "Platão", "Sócrates", "Pitágoras"],
      correctAnswer: 2,
      dicas: [
        "Resumo do conteúdo",
        "Link da videoaula",
        "A resposta eh a opcao C."
      ],
    },
    {
      text: "Qual obra de Platão apresenta a alegoria da caverna, refletindo sobre a condição humana e o conhecimento?",
      options: ["A República", "Fedro", "Timeu", "Banquete"],
      correctAnswer: 0,
      dicas: [
        "Resumo do conteúdo",
        "Link da videoaula",
        "A resposta eh a opcao A."
      ],
    },
  ],

  // Filosofia Medieval
  [
    {
      text: "Qual filósofo cristão escreveu 'Confissões', combinando reflexão filosófica e religiosa?",
      options: ["Tomás de Aquino", "Santo Agostinho", "Anselmo de Cantuária", "Boécio"],
      correctAnswer: 1,
      dicas: [
        "Resumo do conteúdo",
        "Link da videoaula",
        "A resposta eh a opcao B."
      ],
    },
    {
      text: "Quem formulou as cinco vias para demonstrar racionalmente a existência de Deus na Idade Média?",
      options: ["Guido de Arezzo", "Tomás de Aquino", "Pedro Abelardo", "Roger Bacon"],
      correctAnswer: 1,
      dicas: [
        "Resumo do conteúdo",
        "Link da videoaula",
        "A resposta eh a opcao B."
      ],
    },
  ],

  // Filosofia Moderna
  [
    {
      text: "Qual filósofo é conhecido pelo princípio 'Cogito, ergo sum' (Penso, logo existo)?",
      options: ["René Descartes", "John Locke", "David Hume", "Baruch Spinoza"],
      correctAnswer: 0,
      dicas: [
        "Resumo do conteúdo",
        "Link da videoaula",
        "A resposta eh a opcao A."
      ],
    },
    {
      text: "Qual obra de Immanuel Kant definiu o conceito de 'imperativo categórico'?",
      options: ["Crítica da Razão Pura", "Fundamentação da Metafísica dos Costumes", "Crítica da Razão Prática", "Prolegômenos a toda Metafísica Futura"],
      correctAnswer: 1,
      dicas: [
        "Resumo do conteúdo",
        "Link da videoaula",
        "A resposta eh a opcao B."
      ],
    },
  ],

  // Filosofia Contemporânea
  [
    {
      text: "Qual filósofo existencialista escreveu 'O Ser e o Nada'?",
      options: ["Jean-Paul Sartre", "Simone de Beauvoir", "Albert Camus", "Martin Heidegger"],
      correctAnswer: 0,
      dicas: [
        "Resumo do conteúdo",
        "Link da videoaula",
        "A resposta eh a opcao A."
      ],
    },
    {
      text: "Quem é o autor das 'Investigações Filosóficas', obra fundamental da filosofia da linguagem do século XX?",
      options: ["Ludwig Wittgenstein", "Bertrand Russell", "Karl Popper", "Jürgen Habermas"],
      correctAnswer: 0,
      dicas: [
        "Resumo do conteúdo",
        "Link da videoaula",
        "A resposta eh a opcao A."
      ],
    },
  ],
];

export { philosophy, philosophySignatures };
