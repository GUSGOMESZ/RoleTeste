const mathSignatures = {
    0: "Álgebra",
    1: "Geometria",
    2: "Trigonometria",
    3: "Cálculo",
};

const math = [
  // Álgebra
  [
    {
      text: "Qual é a solução da equação 2x + 5 = 13?",
      options: ["x = 4", "x = 6", "x = 8", "x = 3"],
      correctAnswer: 0,
      dicas: [
        "Isolar x no lado esquerdo",
        "Link da videoaula",
        "A resposta é a opção A."
      ],
    },
    {
      text: "Em uma progressão aritmética com primeiro termo 3 e razão 5, qual é o quinto termo?",
      options: ["18", "23", "20", "17"],
      correctAnswer: 1,
      dicas: [
        "Fórmula geral: a_n = a_1 + (n-1)r",
        "Link da videoaula",
        "A resposta é a opção B."
      ],
    },
  ],

  // Geometria
  [
    {
      text: "Qual é a área de um triângulo com base 10 e altura 6?",
      options: ["30", "60", "16", "36"],
      correctAnswer: 0,
      dicas: [
        "Fórmula: (base * altura) / 2",
        "Link da videoaula",
        "A resposta é a opção A."
      ],
    },
    {
      text: "Qual é o valor do ângulo interno de um polígono regular de 12 lados?",
      options: ["150°", "160°", "140°", "170°"],
      correctAnswer: 1,
      dicas: [
        "Fórmula: ((n-2)*180)/n",
        "Link da videoaula",
        "A resposta é a opção B."
      ],
    },
  ],

  // Trigonometria
  [
    {
      text: "Qual é o valor de sen(30°)?",
      options: ["1/2", "√2/2", "√3/2", "1"],
      correctAnswer: 0,
      dicas: [
        "Lembre-se dos valores notáveis",
        "Link da videoaula",
        "A resposta é a opção A."
      ],
    },
    {
      text: "Em um triângulo retângulo, se o cosseno de um ângulo é 3/5, qual é o seno desse ângulo?",
      options: ["4/5", "3/4", "5/3", "1/2"],
      correctAnswer: 0,
      dicas: [
        "Use o teorema de Pitágoras",
        "Link da videoaula",
        "A resposta é a opção A."
      ],
    },
  ],

  // Cálculo
  [
    {
      text: "Qual a derivada de f(x) = x^3 + 2x^2?",
      options: ["3x^2 + 4x", "x^2 + 4x", "3x^2 + 2x", "3x^3 + 4x"],
      correctAnswer: 0,
      dicas: [
        "Regra do poder: d/dx x^n = n x^(n-1)",
        "Link da videoaula",
        "A resposta é a opção A."
      ],
    },
    {
      text: "Qual é a integral indefinida de ∫ 2x dx?",
      options: ["x^2 + C", "2x^2 + C", "x + C", "x^2"],
      correctAnswer: 0,
      dicas: [
        "Regra da potência inversa para integrais",
        "Link da videoaula",
        "A resposta é a opção A."
      ],
    },
  ],
];

export { math, mathSignatures };
