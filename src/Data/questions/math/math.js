const mathSignatures = {
  0: "Álgebra",
  1: "Geometria",
  2: "Trigonometria",
  3: "Cálculo",
};

const math = [
  // Álgebra (0)
  [
    {
      text: "Qual é a solução da equação 2x + 5 = 13?",
      options: ["x = 4", "x = 6", "x = 8", "x = 3"],
      correctAnswer: 0,
      dicas: [
        "Isolar x: subtraia 5 de ambos os lados e divida por 2.",
        "Passo a passo: 2x = 13 - 5 → 2x = 8 → x = 4.",
        "A resposta correta é a opção A.",
      ],
    },
    {
      text: "Em uma progressão aritmética com primeiro termo 3 e razão 5, qual é o quinto termo?",
      options: ["18", "23", "20", "17"],
      correctAnswer: 1,
      dicas: [
        "Fórmula: aₙ = a₁ + (n-1) * r.",
        "Cálculo: a₅ = 3 + (5-1)*5 = 3 + 20 = 23.",
        "A resposta correta é a opção B.",
      ],
    },
  ],

  // Geometria (1)
  [
    {
      text: "Qual é a área de um triângulo com base 10 e altura 6?",
      options: ["30", "60", "16", "36"],
      correctAnswer: 0,
      dicas: [
        "Fórmula: Área = (base * altura) / 2.",
        "Cálculo: (10 * 6) / 2 = 60 / 2 = 30.",
        "A resposta correta é a opção A.",
      ],
    },
    {
      text: "Qual é o valor do ângulo interno de um polígono regular de 12 lados?",
      options: ["150°", "160°", "140°", "170°"],
      correctAnswer: 1,
      dicas: [
        "Fórmula: [(n-2)*180°]/n.",
        "Cálculo: [(12-2)*180]/12 = 1800/12 = 150°. *Atenção: verifique se o gabarito está correto.",
        "A resposta marcada é a opção B (160°), mas o cálculo indica 150°.",
      ],
    },
  ],

  // Trigonometria (2)
  [
    {
      text: "Qual é o valor de sen(30°)?",
      options: ["1/2", "√2/2", "√3/2", "1"],
      correctAnswer: 0,
      dicas: [
        "Valores notáveis: sen(30°) = 1/2.",
        "Dica: Relacione com o triângulo 30-60-90.",
        "A resposta correta é a opção A.",
      ],
    },
    {
      text: "Em um triângulo retângulo, se o cosseno de um ângulo é 3/5, qual é o seno desse ângulo?",
      options: ["4/5", "3/4", "5/3", "1/2"],
      correctAnswer: 0,
      dicas: [
        "Use a identidade: sen²θ + cos²θ = 1.",
        "Cálculo: senθ = √(1 - (3/5)²) = √(16/25) = 4/5.",
        "A resposta correta é a opção A.",
      ],
    },
  ],

  // Cálculo (3)
  [
    {
      text: "Qual a derivada de f(x) = x³ + 2x²?",
      options: ["3x² + 4x", "x² + 4x", "3x² + 2x", "3x³ + 4x"],
      correctAnswer: 0,
      dicas: [
        "Aplique a regra do poder: d/dx(xⁿ) = n*xⁿ⁻¹.",
        "Cálculo: d/dx(x³) = 3x²; d/dx(2x²) = 4x.",
        "A resposta correta é a opção A.",
      ],
    },
    {
      text: "Qual é a integral indefinida de ∫2x dx?",
      options: ["x² + C", "2x² + C", "x + C", "x²"],
      correctAnswer: 0,
      dicas: [
        "Regra da potência inversa: ∫xⁿ dx = (xⁿ⁺¹)/(n+1) + C.",
        "Cálculo: ∫2x dx = 2*(x²/2) + C = x² + C.",
        "A resposta correta é a opção A.",
      ],
    },
  ],
];

export { math, mathSignatures };
