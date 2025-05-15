const historySignatures = {
  0: "Revolução Francesa",
  1: "Brasil Colonial",
  2: "Guerras Mundiais",
  3: "Revolução Industrial",
};

const history = [
  // Revolução Francesa (0)
  [
    {
      text: "Qual foi um dos fatores imediatos que desencadearam a Revolução Francesa em 1789?",
      options: [
        "A queda da Bastilha",
        "A crise financeira do Estado e a convocação dos Estados Gerais",
        "A execução de Luís XVI",
        "A invasão napoleônica da Europa",
      ],
      correctAnswer: 1,
      dicas: [
        "A crise econômica e a pressão por reformas tributárias foram decisivas.",
        "Dica: A convocação dos Estados Gerais em maio de 1789 gerou conflitos entre o Terceiro Estado e a monarquia.",
        "A resposta correta é a opção B.",
      ],
    },
    {
      text: "Durante o período conhecido como 'Terror' (1793-1794), qual grupo político liderou a perseguição a opositores da Revolução?",
      options: [
        "Os girondinos",
        "Os jacobinos, liderados por Robespierre",
        "Os sans-culottes",
        "Os monarquistas constitucionais",
      ],
      correctAnswer: 1,
      dicas: [
        "O Comitê de Salvação Pública controlava o período do Terror.",
        "Dica: Robespierre defendia a virtude revolucionária através da guilhotina.",
        "A resposta correta é a opção B.",
      ],
    },
  ],
  // Brasil Colonial (1)
  [
    {
      text: "Qual foi o principal produto de exportação do Brasil durante o século XVI e parte do XVII, sustentando a economia colonial?",
      options: ["Café", "Ouro", "Cana-de-açúcar", "Algodão"],
      correctAnswer: 2,
      dicas: [
        "Cultivo ligado aos engenhos e ao trabalho escravo.",
        "Dica: Nordeste brasileiro foi o centro dessa produção.",
        "A resposta correta é a opção C.",
      ],
    },
    {
      text: "Qual foi o principal motivo da Coroa Portuguesa para implementar o sistema de capitanias hereditárias no Brasil?",
      options: [
        "Facilitar a exploração de ouro",
        "Transferir o poder político para os indígenas",
        "Dividir o território e delegar a colonização a particulares",
        "Promover a independência das colônias",
      ],
      correctAnswer: 2,
      dicas: [
        "Portugal não tinha recursos para colonizar sozinho.",
        "Dica: O sistema foi inspirado nas capitanias das ilhas do Atlântico.",
        "A resposta correta é a opção C.",
      ],
    },
  ],
  // Guerras Mundiais (2)
  [
    {
      text: "Qual evento é considerado o estopim para o início da Primeira Guerra Mundial em 1914?",
      options: [
        "Invasão da Polônia pela Alemanha",
        "Assassinato do arquiduque Francisco Ferdinando",
        "Bombardeio a Pearl Harbor",
        "Revolução Russa",
      ],
      correctAnswer: 1,
      dicas: [
        "O assassinato ocorreu em Sarajevo, na Bósnia (28 de junho de 1914).",
        "Dica: O arquiduque era herdeiro do Império Austro-Húngaro.",
        "A resposta correta é a opção B.",
      ],
    },
    {
      text: "Qual cláusula do Tratado de Versalhes (1919) contribuiu para o ressentimento alemão e o surgimento do nazismo?",
      options: [
        "Criação da Liga das Nações",
        "Devolução da Alsácia-Lorena à França",
        "Culpabilização da Alemanha pela guerra e pagamento de indenizações",
        "Reconhecimento da independência da Tchecoslováquia",
      ],
      correctAnswer: 2,
      dicas: [
        "Artigo 231: a 'Cláusula da Culpa de Guerra'.",
        "Dica: As indenizações geraram crise econômica na Alemanha nos anos 1920.",
        "A resposta correta é a opção C.",
      ],
    },
  ],
  // Revolução Industrial (3)
  [
    {
      text: "Qual país é considerado o berço da Revolução Industrial no século XVIII?",
      options: ["França", "Alemanha", "Inglaterra", "Estados Unidos"],
      correctAnswer: 2,
      dicas: [
        "Condições favoráveis: carvão, capital acumulado e mão de obra.",
        "Dica: Primeiras fábricas têxteis e máquina a vapor de James Watt.",
        "A resposta correta é a opção C.",
      ],
    },
    {
      text: "Qual sistema de produção foi substituído pelas fábricas durante a Revolução Industrial?",
      options: [
        "Sistema artesanal",
        "Sistema doméstico (putting-out system)",
        "Sistema feudal",
        "Sistema de guildas",
      ],
      correctAnswer: 1,
      dicas: [
        "No sistema doméstico, artesãos produziam em casa para intermediários.",
        "Dica: As fábricas centralizaram a produção com máquinas a vapor.",
        "A resposta correta é a opção B.",
      ],
    },
  ],
];

export { history, historySignatures };
