const physicsSignatures = {
  0: "Mecânica",
  1: "Termodinâmica",
  2: "Óptica",
  3: "Eletromagnetismo",
};

const physics = [
  // Mecânica (0)
  [
    {
      text: "Qual é a segunda lei de Newton, que relaciona força, massa e aceleração?",
      options: ["F = m / a", "F = m * a", "F = a / m", "F = m + a"],
      correctAnswer: 1,
      dicas: [
        "A força resultante é igual à massa multiplicada pela aceleração.",
        "Dica: Se um objeto de 2 kg tem aceleração de 3 m/s², a força é 6 N.",
        "A resposta correta é a opção B (F = m * a).",
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
        "Responsável por alterar a direção da velocidade, mantendo o movimento circular.",
        "Dica: Presente em planetas orbitando estrelas ou carros em curvas.",
        "A resposta correta é a opção C (Aceleração centrípeta).",
      ],
    },
  ],

  // Termodinâmica (1)
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
        "Lei da conservação da energia: ΔU = Q - W.",
        "Dica: Em um motor, parte do calor é convertida em trabalho.",
        "A resposta correta é a opção A.",
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
        "Ciclo teórico com máxima eficiência termodinâmica.",
        "Dica: Combina expansão/compressão isotérmica e adiabática.",
        "A resposta correta é a opção C (processos reversíveis).",
      ],
    },
  ],

  // Óptica (2)
  [
    {
      text: "Qual fenômeno óptico explica a separação da luz branca nos diferentes comprimentos de onda ao passar por um prisma?",
      options: ["Reflexão", "Difração", "Dispersão", "Interferência"],
      correctAnswer: 2,
      dicas: [
        "Ocorre porque cada cor tem um índice de refração diferente no prisma.",
        "Dica: É o mesmo fenômeno que forma o arco-íris.",
        "A resposta correta é a opção C (Dispersão).",
      ],
    },
    {
      text: "Qual é a relação entre os ângulos de incidência e refração ao passar de um meio para outro, segundo a lei de Snell?",
      options: [
        "n₁ * sen(i) = n₂ * sen(r)",
        "n₁ / sen(i) = n₂ / sen(r)",
        "sen(i) = sen(r)",
        "n₁ * sen(r) = n₂ * sen(i)",
      ],
      correctAnswer: 0,
      dicas: [
        "Lei de Snell-Descartes: n₁ senθ₁ = n₂ senθ₂.",
        "Dica: Se n₂ > n₁, o raio refrata-se aproximando da normal.",
        "A resposta correta é a opção A.",
      ],
    },
  ],

  // Eletromagnetismo (3)
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
        "Descreve a força magnética em um fio percorrido por corrente.",
        "Dica: F = i * L × B (força, corrente, comprimento e campo).",
        "A resposta correta é a opção C (Lei de Ampère).",
      ],
    },
    {
      text: "Qual equação de Maxwell descreve como um campo elétrico variável no tempo gera um campo magnético?",
      options: [
        "∇ · E = ρ/ε₀",
        "∇ × B = μ₀ J + μ₀ ε₀ ∂E/∂t",
        "∇ × E = - ∂B/∂t",
        "∇ · B = 0",
      ],
      correctAnswer: 1,
      dicas: [
        "Lei de Ampère-Maxwell: campos magnéticos podem ser gerados por correntes ou campos elétricos variáveis.",
        "Dica: Termo μ₀ ε₀ ∂E/∂t é a 'corrente de deslocamento'.",
        "A resposta correta é a opção B.",
      ],
    },
  ],
];

export { physics, physicsSignatures };
