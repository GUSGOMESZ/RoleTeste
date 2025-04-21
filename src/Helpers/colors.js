const getColor = (sub) => {
    switch (sub) {
        case "Português":
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
        case "Quimíca":
            return "bg-red-700";
        default:
            return "bg-gray-500"; // Cor padrão caso nenhuma correspondência seja encontrada
    }
};

export default getColor;