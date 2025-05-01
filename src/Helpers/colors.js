export const getBackgroundColor = (sub) => {
  switch (sub) {
    case "Portugues":
      return "bg-sky-500";
    case "Literatura":
      return "bg-rose-950";
    case "Historia":
      return "bg-orange-500";
    case "Geografia":
      return "bg-lime-600";
    case "Filosofia":
      return "bg-violet-600";
    case "Sociologia":
      return "bg-blue-500";
    case "Matematica":
      return "bg-rose-600";
    case "Fisica":
      return "bg-emerald-500";
    case "Quimica":
      return "bg-red-700";
    default:
      return "bg-gray-500";
  }
};

export const getGradientColor = (sub) => {
  switch (sub) {
    case "Portugues":
      return "to-sky-500";
    case "Literatura":
      return "to-rose-950";
    case "Historia":
      return "to-orange-500";
    case "Geografia":
      return "to-lime-600";
    case "Filosofia":
      return "to-violet-600";
    case "Sociologia":
      return "to-blue-500";
    case "Matematica":
      return "to-rose-600";
    case "Fisica":
      return "to-emerald-500";
    case "Quimica":
      return "to-red-700";
    default:
      return "to-gray-500";
  }
};

export const getLeftBorderColor = (sub) => {
  switch (sub) {
    case "Portugues":
      return "border-sky-500";
    case "Literatura":
      return "border-rose-950";
    case "Historia":
      return "border-orange-500";
    case "Geografia":
      return "border-lime-600";
    case "Filosofia":
      return "border-violet-600";
    case "Sociologia":
      return "border-blue-500";
    case "Matematica":
      return "border-rose-600";
    case "Fisica":
      return "border-emerald-500";
    case "Quimica":
      return "border-red-700";
    default:
      return "border-gray-500";
  }
};
