const chemistrySignatures = {
    0: "Química Geral",
    1: "Química Orgânica",
    2: "Química Inorgânica",
    3: "Físico-Química",
};

const chemistry = [
  // Química Geral
  [
    {
      text: "Qual é a unidade de concentração definida como mol de soluto por litro de solução?",
      options: ["Molalidade", "Molaridade", "Normalidade", "Fracionamento molar"],
      correctAnswer: 1,
      dicas: [
        "Conheça as diferentes unidades de concentração",
        "Link da videoaula",
        "A resposta é a opção B."
      ],
    },
    {
      text: "Qual lei descreve a relação entre pressão e volume de um gás ideal a temperatura constante?",
      options: ["Lei de Charles", "Lei de Boyle", "Lei de Avogadro", "Lei de Dalton"],
      correctAnswer: 1,
      dicas: [
        "Fórmula: P1*V1 = P2*V2",
        "Link da videoaula",
        "A resposta é a opção B."
      ],
    },
  ],

  // Química Orgânica
  [
    {
      text: "Qual é o grupo funcional presente nos álcoois?",
      options: ["Aldeído (-CHO)", "Cetona (C=O)", "Hidroxila (-OH)", "Éster (-COO-)"],
      correctAnswer: 2,
      dicas: [
        "Identifique os grupos funcionais comuns",
        "Link da videoaula",
        "A resposta é a opção C."
      ],
    },
    {
      text: "Qual reação orgânica converte um alceno em um diálcool adicionando água?",
      options: ["Hidratação", "Hidrogenação", "Hidrólise",
                "Dihidratação"],
      correctAnswer: 0,
      dicas: [
        "Reações de adição em alquenos",
        "Link da videoaula",
        "A resposta é a opção A."
      ],
    },
  ],

  // Química Inorgânica
  [
    {
      text: "Qual composto é conhecido como sal de cozinha?",
      options: ["Cloreto de potássio (KCl)", "Cloreto de sódio (NaCl)", "Sulfato de magnésio (MgSO4)", "Nitrato de cálcio (Ca(NO3)2)"],
      correctAnswer: 1,
      dicas: [
        "Uso cotidiano de sais inorgânicos",
        "Link da videoaula",
        "A resposta é a opção B."
      ],
    },
    {
      text: "Qual tipo de ligação ocorre quando átomos compartilham pares de elétrons?",
      options: ["Iônica", "Covalente", "Metálica", "Van der Waals"],
      correctAnswer: 1,
      dicas: [
        "Diferença entre ligações iônica e covalente",
        "Link da videoaula",
        "A resposta é a opção B."
      ],
    },
  ],

  // Físico-Química
  [
    {
      text: "Qual propriedade coligativa causa a elevação do ponto de ebulição de uma solução?",
      options: ["Pressão osmótica", "Elevamento ebuliométrico", "Depressão crioscópica", "Tensão superficial"],
      correctAnswer: 1,
      dicas: [
        "Entenda propriedades coligativas",
        "Link da videoaula",
        "A resposta é a opção B."
      ],
    },
    {
      text: "Na equação de Arrhenius, k = A * e^(-Ea/RT), o que representa Ea?",
      options: ["Energia de ativação", "Energia livre", "Entalpia", "Entropia"],
      correctAnswer: 0,
      dicas: [
        "Compreenda a cinética química",
        "Link da videoaula",
        "A resposta é a opção A."
      ],
    },
  ],
];

export { chemistry, chemistrySignatures };
