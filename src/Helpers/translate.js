const translate = (sub) => {
    switch (sub) {
      case "Portuguese":
        return "Portugues";
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
        return "Quimica";
      default:
        return sub;
    }
  };
  
  export default translate;