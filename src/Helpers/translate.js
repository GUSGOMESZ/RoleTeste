const translate = (sub) => {
    switch (sub) {
        case "Portuguese":
            return "Português";
        case "Literature":
            return "Literatura";
        case "History":
            return "Historia";
        case "Geography":
            return "Geografia";
        case "Philosophy":
            return "Filosofia";
        case "Sociology":
            return "Sociologia";
        case "Math":
            return "Matematica";
        case "Physics":
            return "Fisica";
        case "Chemical":
            return "Quimíca";
        default:
            return sub; // Caso padrão para evitar erros
    }
};

export default translate;