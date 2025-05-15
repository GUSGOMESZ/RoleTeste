const physicsSignatures = {
    0: "Mecânica",
    1: "Termodinâmica",
    2: "Óptica",
    3: "Eletromagnetismo",
};

const physics = [
  // Mecânica
  [
    {
      text: "Qual é a segunda lei de Newton, que relaciona força, massa e aceleração?",
      options: [
        "F = m / a",
        "F = m * a",
        "F = a / m",
        "F = m + a",
      ],
      correctAnswer: 1,
      dicas: [
        "Resumo do conteúdo",
        "Link da videoaula",
        "A resposta é a opção B."
      ],
    },
    {
      text: "Em um movimento circular uniforme, como se chama a aceleração que aponta para o centro da trajetória?",
      options: [
        "Aceleração tangencial",
        "Aceleração angular",
        "Aceleração centrípeta",
        "Aceleração coriolis",
      ],
      correctAnswer: 2,
      dicas: [
        "Resumo do conteúdo",
        "Link da videoaula",
        "A resposta é a opção C."
      ],
    },
  ],

  // Termodinâmica
  [
    {
      text: "Qual enunciado corresponde à primeira lei da termodinâmica?",
      options: [
        "A energia não pode ser criada nem destruída",
        "A entropia de um sistema isolado sempre aumenta",
        "A pressão de um gás ideal depende apenas da temperatura",
        "Não há transferência de calor em processos adiabáticos",
      ],
      correctAnswer: 0,
      dicas: [
        "Resumo do conteúdo",
        "Link da videoaula",
        "A resposta é a opção A."
      ],
    },
    {
      text: "Em um ciclo de Carnot, qual é a característica dos processos que o compõem?",
      options: [
        "São todos irreversíveis",
        "São todos isotérmicos",
        "São processos reversíveis",
        "São todos adiabáticos",
      ],
      correctAnswer: 2,
      dicas: [
        "Resumo do conteúdo",
        "Link da videoaula",
        "A resposta é a opção C."
      ],
    },
  ],

  // Óptica
  [
    {
      text: "Qual fenômeno óptico explica a separação da luz branca nos diferentes comprimentos de onda ao passar por um prisma?",
      options: [
        "Reflexão",
        "Difração",
        "Dispersão",
        "Interferência",
      ],
      correctAnswer: 2,
      dicas: [
        "Resumo do conteúdo",
        "Link da videoaula",
        "A resposta é a opção C."
      ],
    },
    {
      text: "Qual é a relação entre os ângulos de incidência e refração ao passar de um meio para outro, segundo a lei de Snell?",
      options: [
        "n1 * sen(i) = n2 * sen(r)",
        "n1 / sen(i) = n2 / sen(r)",
        "sen(i) = sen(r)",
        "n1 * sen(r) = n2 * sen(i)",
      ],
      correctAnswer: 0,
      dicas: [
        "Resumo do conteúdo",
        "Link da videoaula",
        "A resposta é a opção A."
      ],
    },
  ],

  // Eletromagnetismo
  [
    {
      text: "Qual lei relaciona campo magnético, corrente elétrica e força em um condutor, conhecida como força de Ampère?",
      options: [
        "Lei de Ohm",
        "Lei de Faraday",
        "Lei de Ampère",
        "Lei de Gauss",
      ],
      correctAnswer: 2,
      dicas: [
        "Resumo do conteúdo",
        "Link da videoaula",
        "A resposta é a opção C."
      ],
    },
    {
      text: "Qual equação de Maxwell descreve como um campo elétrico variável no tempo gera um campo magnético?",
      options: [
        "∇ · E = ρ/ε0",
        "∇ × B = μ0 J + μ0 ε0 ∂E/∂t",
        "∇ × E = - ∂B/∂t",
        "∇ · B = 0",
      ],
      correctAnswer: 1,
      dicas: [
        "Resumo do conteúdo",
        "Link da videoaula",
        "A resposta é a opção B."
      ],
    },
  ],
];

export { physics, physicsSignatures };
