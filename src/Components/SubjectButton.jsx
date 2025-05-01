import { getGradientColor, getLeftBorderColor } from "../Helpers/colors"; // Função ajustada

function SubjectButton({
  subject,
  index,
  activeOne,
  handleButtonClick,
  isAble,
}) {
  return (
    <button
      onClick={() => handleButtonClick(subject, index)}
      className={`flex content-center rounded-lg hover:bg-gray-100/70 hover:text-black w-full h-auto py-2 pl-10 text-xl ${
        activeOne === subject
          ? `bg-gradient-to-r via-slate-50 from-gray-100 ${getGradientColor(
              subject
            )} text-black border-l-10 ${getLeftBorderColor(
              subject
            )} transition-all duration-500`
          : "text-white"
      } ${isAble ? "" : "cursor-not-allowed"}`}
      disabled={!isAble}
    >
      {subject}
    </button>
  );
}

export default SubjectButton;
