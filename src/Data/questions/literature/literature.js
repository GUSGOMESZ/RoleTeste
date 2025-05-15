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
      dicas: [
        "Metáfora estabelece uma relação de semelhança implícita entre dois termos.",
        "Dica: Não há uso de palavras comparativas como 'como' ou 'parece'.",
        "A resposta correta é a opção A.",
      ],
    },
    {
      text: "No verso 'As estrelas piscavam no céu como olhos curiosos', qual figura de linguagem é utilizada?",
      options: ["Comparação", "Metonímia", "Antítese", "Eufemismo"],
      correctAnswer: 0,
      dicas: [
        "Comparação usa termos como 'como' ou 'parece' para ligar elementos.",
        "Dica: Exemplo clássico: 'Seus olhos brilhavam como diamantes'.",
        "A resposta correta é a opção A.",
      ],
    },
  ],
  // Autores e Obras (1)
  [
    {
      text: "Quem escreveu 'Macunaíma', obra conhecida como 'rapsódia da identidade nacional'?",
      options: [
        "Machado de Assis",
        "Graciliano Ramos",
        "Mário de Andrade",
        "Clarice Lispector",
      ],
      correctAnswer: 2,
      dicas: [
        "Mário de Andrade foi um líder do Modernismo brasileiro.",
        "Dica: A obra mistura lendas indígenas e cultura popular.",
        "A resposta correta é a opção C.",
      ],
    },
    {
      text: "Qual autor do Romantismo brasileiro escreveu 'Iracema', romance indianista?",
      options: [
        "Aluísio Azevedo",
        "José de Alencar",
        "Castro Alves",
        "Manuel Antônio de Almeida",
      ],
      correctAnswer: 1,
      dicas: [
        "José de Alencar é o maior nome do Indianismo no Brasil.",
        "Dica: 'Iracema' significa 'lábios de mel' em tupi.",
        "A resposta correta é a opção B.",
      ],
    },
  ],
  // Escolas Literárias (2)
  [
    {
      text: "Qual característica é marcante do Realismo literário?",
      options: [
        "Idealização da natureza",
        "Crítica social e análise psicológica",
        "Linguagem rebuscada e metafórica",
        "Temas mitológicos",
      ],
      correctAnswer: 1,
      dicas: [
        "O Realismo surgiu como oposição ao Romantismo no século XIX.",
        "Dica: Autores como Machado de Assis exploram a hipocrisia burguesa.",
        "A resposta correta é a opção B.",
      ],
    },
    {
      text: "Gregório de Matos, conhecido por sua poesia satírica, pertence a qual escola literária?",
      options: ["Barroco", "Arcadismo", "Romantismo", "Modernismo"],
      correctAnswer: 0,
      dicas: [
        "O Barroco é marcado por dualidades (ex: fé x razão).",
        "Dica: Gregório é chamado de 'Boca do Inferno' pela crítica social.",
        "A resposta correta é a opção A.",
      ],
    },
  ],
  // Interpretação Literária (3)
  [
    {
      text: "No poema 'No meio do caminho' de Drummond, a 'pedra' simboliza:",
      options: [
        "Um obstáculo existencial",
        "Um objeto real na estrada",
        "Uma referência religiosa",
        "Um animal perigoso",
      ],
      correctAnswer: 0,
      dicas: [
        "A pedra representa algo que interrompe a trajetória do eu lírico.",
        "Dica: Drummond usa elementos cotidianos para tratar de questões universais.",
        "A resposta correta é a opção A.",
      ],
    },
    {
      text: "No soneto 'Amor é fogo que arde sem se ver', de Camões, qual é o tema central?",
      options: [
        "A natureza efêmera da vida",
        "A contradição do amor",
        "A glorificação da guerra",
        "A descrição de uma paisagem",
      ],
      correctAnswer: 1,
      dicas: [
        "Camões explora o paradoxo do amor através de antíteses.",
        "Dica: O poema pertence à lírica camoniana, marcada pelo conflito.",
        "A resposta correta é a opção B.",
      ],
    },
  ],
];

export { literature, literatureSignatures };
