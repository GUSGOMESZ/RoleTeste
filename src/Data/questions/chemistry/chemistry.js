const chemistrySignatures = {
  0: "Química Geral",
  1: "Química Orgânica",
  2: "Química Inorgânica",
  3: "Físico-Química",
};

const chemistry = [
  // Química Geral (0)
  [
    {
      text: "Qual é a unidade de concentração definida como mol de soluto por litro de solução?",
      options: [
        "Molalidade",
        "Molaridade",
        "Normalidade",
        "Fracionamento molar",
      ],
      correctAnswer: 1,
      dicas: [
        "A molaridade relaciona quantidade de matéria (mol) e volume da solução (L).",
        "Dica: A fórmula é M = mol do soluto / litros da solução.",
        "A resposta é a opção B.",
      ],
    },
    {
      text: "Qual lei descreve a relação entre pressão e volume de um gás ideal a temperatura constante?",
      options: [
        "Lei de Charles",
        "Lei de Boyle",
        "Lei de Avogadro",
        "Lei de Dalton",
      ],
      correctAnswer: 1,
      dicas: [
        "Lei de Boyle: pressão e volume são inversamente proporcionais.",
        "Dica: P₁V₁ = P₂V₂ (temperatura constante).",
        "A resposta é a opção B.",
      ],
    },
  ],

  // Química Orgânica (1)
  [
    {
      text: "Qual é o grupo funcional presente nos álcoois?",
      options: [
        "Aldeído (-CHO)",
        "Cetona (C=O)",
        "Hidroxila (-OH)",
        "Éster (-COO-)",
      ],
      correctAnswer: 2,
      dicas: [
        "Álcoois têm o grupo -OH ligado a carbono saturado.",
        "Dica: Exemplos: etanol (CH₃CH₂OH), metanol (CH₃OH).",
        "A resposta é a opção C.",
      ],
    },
    {
      text: "Qual reação orgânica converte um alceno em um diálcool adicionando água?",
      options: ["Hidratação", "Hidrogenação", "Hidrólise", "Dihidratação"],
      correctAnswer: 0,
      dicas: [
        "Hidratação de alcenos segue a regra de Markovnikov.",
        "Dica: Usa ácido sulfúrico (H₂SO₄) como catalisador.",
        "A resposta é a opção A.",
      ],
    },
  ],

  // Química Inorgânica (2)
  [
    {
      text: "Qual composto é conhecido como sal de cozinha?",
      options: [
        "Cloreto de potássio (KCl)",
        "Cloreto de sódio (NaCl)",
        "Sulfato de magnésio (MgSO₄)",
        "Nitrato de cálcio (Ca(NO₃)₂)",
      ],
      correctAnswer: 1,
      dicas: [
        "O NaCl é essencial para a função biológica e culinária.",
        "Dica: É o principal componente do sal marinho.",
        "A resposta é a opção B.",
      ],
    },
    {
      text: "Qual tipo de ligação ocorre quando átomos compartilham pares de elétrons?",
      options: ["Iônica", "Covalente", "Metálica", "Van der Waals"],
      correctAnswer: 1,
      dicas: [
        "Ligações covalentes são comuns em moléculas orgânicas.",
        "Dica: Exemplo: H₂O (água) e CH₄ (metano).",
        "A resposta é a opção B.",
      ],
    },
  ],

  // Físico-Química (3)
  [
    {
      text: "Qual propriedade coligativa causa a elevação do ponto de ebulição de uma solução?",
      options: [
        "Pressão osmótica",
        "Elevamento ebuliométrico",
        "Depressão crioscópica",
        "Tensão superficial",
      ],
      correctAnswer: 1,
      dicas: [
        "Quanto mais partículas dissolvidas, maior o efeito coligativo.",
        "Dica: Exemplo: água salgada ferve a mais de 100°C.",
        "A resposta é a opção B.",
      ],
    },
    {
      text: "Na equação de Arrhenius, k = A * e^(-Ea/RT), o que representa Ea?",
      options: ["Energia de ativação", "Energia livre", "Entalpia", "Entropia"],
      correctAnswer: 0,
      dicas: [
        "Ea é a energia mínima para que uma reação ocorra.",
        "Dica: Catalisadores diminuem Ea, acelerando a reação.",
        "A resposta é a opção A.",
      ],
    },
  ],
];

export { chemistry, chemistrySignatures };
