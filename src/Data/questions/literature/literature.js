const literatureSignatures = {
  0: "Figuras de Linguagens",
  1: "Autores e Obras",
  2: "Escolas Literárias",
  3: "Interpretação Literária",
};

const literature = [
  // Figuras de Linguagens (0)
  [
    {
      text: "Qual figura de linguagem predomina no trecho: 'O tempo é um rio que arrasta tudo'?",
      options: ["Metáfora", "Hipérbole", "Personificação", "Ironia"],
      correctAnswer: 0,
      dicas: [],
    },
    {
      text: "No verso 'As estrelas piscavam no céu como olhos curiosos', qual figura de linguagem é utilizada?",
      options: ["Comparação", "Metonímia", "Antítese", "Eufemismo"],
      correctAnswer: 0,
      dicas: [],
    },
  ],
  // Autores e Obras (1)
  [
    {
      text: "Quem escreveu 'Macunaíma', obra conhecida como 'rapsódia da identidade nacional'?",
      options: ["Machado de Assis", "Graciliano Ramos", "Mário de Andrade", "Clarice Lispector"],
      correctAnswer: 2,
      dicas: [],
    },
    {
      text: "Qual autor do Romantismo brasileiro escreveu 'Iracema', romance indianista?",
      options: ["Aluísio Azevedo", "José de Alencar", "Castro Alves", "Manuel Antônio de Almeida"],
      correctAnswer: 1,
      dicas: [],
    },
  ],
  // Escolas Literárias (2)
  [
    {
      text: "Qual característica é marcante do Realismo literário?",
      options: ["Idealização da natureza", "Crítica social e análise psicológica", "Linguagem rebuscada e metafórica", "Temas mitológicos"],
      correctAnswer: 1,
      dicas: [],
    },
    {
      text: "Gregório de Matos, conhecido por sua poesia satírica, pertence a qual escola literária?",
      options: ["Barroco", "Arcadismo", "Romantismo", "Modernismo"],
      correctAnswer: 0,
      dicas: [],
    },
  ],
  // Interpretação Literária (3)
  [
    {
      text: "No poema 'No meio do caminho' de Drummond, a 'pedra' simboliza:",
      options: ["Um obstáculo existencial", "Um objeto real na estrada", "Uma referência religiosa", "Um animal perigoso"],
      correctAnswer: 0,
      dicas: [],
    },
    {
      text: "No soneto 'Amor é fogo que arde sem se ver', de Camões, qual é o tema central?",
      options: ["A natureza efêmera da vida", "A contradição do amor", "A glorificação da guerra", "A descrição de uma paisagem"],
      correctAnswer: 1,
      dicas: [],
    },
  ],
];

export { literature, literatureSignatures };