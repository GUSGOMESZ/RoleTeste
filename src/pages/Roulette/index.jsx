import Subjects from "../../Data/subjects";
import Topics from "../../Data/topics";
import SubjectButton from "../../Components/SubjectButton";
import RouletteHalf from "../../Components/RoulleteHalf";
import translate from "../../Helpers/translate";
import { getBackgroundColor } from "../../Helpers/colors";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  portuguese,
  portugueseSignatures,
} from "../../Data/questions/portuguese/portuguese";

import { FaUser } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import "../../App.css";
import {
  incrementChemistry,
  incrementGeography,
  incrementHistory,
  incrementLiterature,
  incrementMath,
  incrementPhilosophy,
  incrementPhisics,
  incrementPortuguese,
  incrementRight,
  incrementSociology,
  incrementTotalChemistryPoints,
  incrementTotalGeographyPoints,
  incrementTotalHistoryPoints,
  incrementTotalLiteraturePoints,
  incrementTotalMathPoints,
  incrementTotalPhilosophyPoints,
  incrementTotalPhisicsPoints,
  incrementTotalPortuguesePoints,
  incrementTotalSociologyPoints,
  incrementTotalStats,
} from "../../Services/apiStats";

// Set-ExecutionPolicy RemoteSigned –Scope Process
// const spinTime = 3000;

const findIndexByValue = (arr, value) =>
  arr.findIndex((item) => item.option === value);

function getRandomObject(array) {
  const indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio];
}

const template = {
  text: "Qual dos seguintes sistemas de administração colonial foi caracterizado pelo uso direto de governantes europeus nas colônias?",
  options: [
    "Colonialismo de exploração",
    "Sistema de protetorado",
    "Administração indireta",
    "Administração direta",
  ],
  correctAnswer: 3,
  dicas: ["Resumo do conteúdo", "Link da videoaula", "A resposta é a opção D."],
};

export function Roulette() {
  const navigate = useNavigate();
  const topics = Topics;

  const [randomQuestion, setRandomQuestion] = useState({});

  const [activeButton, setActiveButton] = useState("Portugues");
  const [wheelBgColor, setWheelBgColor] = useState("bg-sky-500");
  const [possibleContent, setPossibleContent] = useState(topics[0]);
  const [able, setAble] = useState(true);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [data, setData] = useState(topics[0]);

  const [isConfirming, setIsConfirming] = useState(false);
  const [isAsking, setIsAsking] = useState(false);
  const [selectedContent, setSelectedContent] = useState("");

  const currentUser = localStorage.getItem("email");

  const handleButtonClick = (subject, index) => {
    setActiveButton(subject);
    setData(topics[index]);
    setWheelBgColor(getBackgroundColor(subject));
    setPossibleContent(topics[index]);
  };

  const handleSpin = () => {
    setAble(false);
    const randomIndex = Math.floor(Math.random() * possibleContent.length);

    setPrizeNumber(randomIndex);

    setMustSpin(true);

    setSelectedContent(possibleContent[randomIndex].option);

    console.log(activeButton);

    setTimeout(() => {
      setAble(true);

      setIsConfirming(true);
    }, 6000);
  };

  const activeQuestion = () => {
    const selectedKey = findIndexByValue(data, selectedContent);

    const questionsArray = portuguese[selectedKey];

    const temp = getRandomObject(questionsArray);

    // setRandomQuestion(temp);
    setRandomQuestion(template);

    setIsConfirming(false);
    setIsAsking(true);
  };

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [openHints, setOpenHints] = useState([false, false, false]);
  const [avaliablePoints, setAvaliablePoints] = useState(3);

  // Lógica para alternar dicas
  const toggleHint = (index) => {
    const newHints = [...openHints];
    newHints[index] = !newHints[index];
    setOpenHints(newHints);
    setAvaliablePoints(avaliablePoints == 0 ? 0 : avaliablePoints - 1);
  };

  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const verifyAnswer = async () => {
    setIsAsking(false);

    await incrementTotalStats(currentUser);

    if (selectedAnswer != randomQuestion.correctAnswer) {
      // console.log("errou");
      setIsWrong(true);
    } else {
      // console.log("acertou");
      await incrementRight(currentUser);

      console.log(activeButton);

      if (activeButton === "Portugues") await incrementPortuguese(currentUser);
      if (activeButton === "Literatura") await incrementLiterature(currentUser);
      if (activeButton === "Historia") await incrementHistory(currentUser);
      if (activeButton === "Geografia") await incrementGeography(currentUser);
      if (activeButton === "Filosofia") await incrementPhilosophy(currentUser);
      if (activeButton === "Sociologia") await incrementSociology(currentUser);
      if (activeButton === "Matematica") await incrementMath(currentUser);
      if (activeButton === "Fisica") await incrementPhisics(currentUser);
      if (activeButton === "Quimica") await incrementChemistry(currentUser);

      if (avaliablePoints !== 0) {
        if (activeButton === "Portugues")
          await incrementTotalPortuguesePoints(currentUser, avaliablePoints);
        if (activeButton === "Literatura")
          await incrementTotalLiteraturePoints(currentUser, avaliablePoints);
        if (activeButton === "Historia")
          await incrementTotalHistoryPoints(currentUser, avaliablePoints);
        if (activeButton === "Geografia")
          await incrementTotalGeographyPoints(currentUser, avaliablePoints);
        if (activeButton === "Filosofia")
          await incrementTotalPhilosophyPoints(currentUser, avaliablePoints);
        if (activeButton === "Sociologia")
          await incrementTotalSociologyPoints(currentUser, avaliablePoints);
        if (activeButton === "Matematica")
          await incrementTotalMathPoints(currentUser, avaliablePoints);
        if (activeButton === "Fisica")
          await incrementTotalPhisicsPoints(currentUser, avaliablePoints);
        if (activeButton === "Quimica")
          await incrementTotalChemistryPoints(currentUser, avaliablePoints);
      }

      setIsCorrect(true);
    }
  };

  const logout = () => {
    localStorage.removeItem("email");
    // localStorage.removeItem("password");

    navigate("/signin");

    window.location.reload();
  };

  return (
    <>
      <div
        className={`flex flex-row w-screen h-screen overflow-hidden inset-0 bg-gradient-to-br from-gray-900 to-gray-800 ${
          isConfirming || isAsking ? "opacity-70" : ""
        }`}
      >
        <div className="flex flex-col w-1/2 h-full">
          <div className="flex flex-row items-center w-full h-1/6">
            <div className="flex h-full w-[50%] justify-center items-center">
              <button disabled={true} onClick={() => navigate("/roulette")}>
                <div className="font-bold text-7xl text-rose-50 hover:text-slate-300">
                  ROLETESTE
                </div>
              </button>
            </div>
            <div className="flex h-full w-[50%] gap-10 justify-center items-center">
              <button
                disabled={!able}
                onClick={() => navigate("/profile")}
                className={`flex justify-center items-center rounded-xl w-12 h-12 bg-rose-50 hover:bg-slate-300 hover:scale-110 active:scale-95 transition-all duration-500 ${
                  able ? "" : "cursor-not-allowed"
                }`}
              >
                <FaUser />
              </button>
              <button
                disabled={!able}
                onClick={() => navigate("/ranking")}
                className={`flex justify-center items-center rounded-xl w-12 h-12 bg-rose-50 hover:bg-slate-300 hover:scale-110 active:scale-95 transition-all duration-500 ${
                  able ? "" : "cursor-not-allowed"
                }`}
              >
                <FaClipboardList />
              </button>
              <button
                disabled={!able}
                onClick={logout}
                className={`flex justify-center items-center rounded-xl w-12 h-12 bg-rose-50 hover:bg-slate-300 hover:scale-110 active:scale-95 transition-all duration-500 ${
                  able ? "" : "cursor-not-allowed"
                }`}
              >
                <BiLogOut />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center w-full h-5/6 gap-3 px-5 pt-5">
            {Subjects.map((sub, index) => (
              <SubjectButton
                key={sub}
                subject={translate(sub)}
                index={index}
                activeOne={activeButton}
                handleButtonClick={handleButtonClick}
                isAble={able}
              />
            ))}
          </div>
        </div>
        <div
          className={`w-1/2 h-full ${wheelBgColor} transition-all duration-500 opacity-90`}
        >
          <div className="flex flex-col items-center justify-around w-full h-full">
            <RouletteHalf
              mustSpin={mustSpin}
              setMustSpin={setMustSpin}
              prizeNumber={prizeNumber}
              data={data}
              handleSpin={handleSpin}
              able={able}
            >
              <button
                onClick={handleSpin}
                disabled={!able}
                className={`relative px-8 py-4 text-2xl font-bold transition-all duration-300 ${
                  able
                    ? "bg-gradient-to-br from-neutral-900 to-neutral-900 hover:from-neutral-900 hover:to-neutral-900 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                    : "bg-gray-400 opacity-50 cursor-not-allowed"
                } rounded-2xl text-white group`}
              >
                <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <span className="bg-gradient-to-b from-white to-gray-200 bg-clip-text text-transparent">
                  GIRAR ROLETA
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 ml-3 inline-block group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
            </RouletteHalf>
          </div>
        </div>
      </div>

      {isConfirming && (
        <div className="fixed inset-0 flex items-center justify-center bg-slate z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="mb-4 text-gray-800">
              O tema selecionado foi <b>{selectedContent}</b>. Você gostaria de
              seguir para uma questão sobre o tema sorteado ?
            </p>
            <div className="space-x-4">
              <button
                onClick={() => setIsConfirming(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Não
              </button>
              <button
                onClick={() => activeQuestion()}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Sim
              </button>
            </div>
          </div>
        </div>
      )}

      {isAsking && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            {/* Cabeçalho (mantido igual) */}
            <div className="flex justify-between items-center mb-6 sticky top-0 bg-white py-2">
              <h2 className="text-3xl font-bold text-slate-800">
                {activeButton} - {selectedContent}
              </h2>
              <button
                onClick={() => {
                  setIsAsking(false);
                  setSelectedAnswer(null);
                  setOpenHints([false, false, false]);
                  setAvaliablePoints(3);
                }}
                className="text-slate-500 hover:text-slate-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Pergunta (mantida igual) */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <p className="text-2xl text-slate-800 leading-relaxed">
                  {randomQuestion.text}
                </p>
              </div>

              {/* Opções de Resposta com seleção */}
              <div className="grid gap-4">
                {randomQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedAnswer(index)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer
                ${
                  selectedAnswer === index
                    ? "border-blue-500 bg-blue-50"
                    : "border-slate-200 hover:border-blue-300 bg-white"
                }`}
                  >
                    <p
                      className={`text-xl font-medium ${
                        selectedAnswer === index
                          ? "text-blue-800"
                          : "text-slate-800"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}. {option}
                    </p>
                  </div>
                ))}
              </div>

              {/* Dicas em lista vertical */}
              <div className="space-y-4">
                {[1, 2, 3].map((hintIndex) => (
                  <div
                    key={hintIndex}
                    className="border-2 border-dashed rounded-xl overflow-hidden transition-all
                ${openHints[hintIndex-1] ? 'border-emerald-500' : 'border-emerald-200'}"
                  >
                    <div
                      className="p-4 bg-emerald-50 flex justify-between items-center cursor-pointer"
                      onClick={() => toggleHint(hintIndex - 1)}
                    >
                      <span className="text-lg font-semibold text-emerald-800">
                        Dica {hintIndex}
                      </span>
                      <svg
                        className={`h-6 w-6 transform transition-transform ${
                          openHints[hintIndex - 1] ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>

                    {/* Conteúdo da dica */}
                    {openHints[hintIndex - 1] && (
                      <div className="p-4 bg-white border-t border-emerald-100">
                        <p className="text-slate-700">
                          {/* Exemplo de conteúdo de dica */}
                          {["Dica 1", "Dica 2", "Dica 3"][hintIndex - 1]}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Botão de enviar */}
              <button
                onClick={verifyAnswer}
                className={`w-full py-4 text-white rounded-xl font-bold text-lg transition-colors
            ${
              selectedAnswer !== null
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
                disabled={selectedAnswer === null}
              >
                Confirmar Resposta
              </button>
            </div>
          </div>
        </div>
      )}

      {isWrong && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 animate-fade-in">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-95 hover:scale-100">
            {/* Cabeçalho vermelho */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-red-500 to-rose-600 rounded-t-2xl" />

            <div className="flex flex-col items-center text-center space-y-6">
              {/* Ícone animado */}
              <div className="animate-bounce">
                <span className="text-6xl">❗</span>
              </div>

              {/* Mensagem principal */}
              <h3 className="text-3xl font-bold text-red-600 leading-tight">
                Oops!
                <br />
                <span className="text-2xl text-slate-800">
                  Você errou a pergunta
                </span>
              </h3>

              {/* Contador de pontos */}
              <div className="flex items-center gap-2 bg-red-50 px-6 py-3 rounded-full">
                <span className="text-4xl font-black text-red-600">0</span>
                <span className="text-lg font-medium text-red-800">
                  pontos pra você!
                </span>
              </div>
            </div>

            {/* Botão de fechar */}
            <button
              onClick={() => {
                setIsWrong(false);
                setAvaliablePoints(3);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {isCorrect && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 animate-fade-in">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-95 hover:scale-100">
            {/* Faixa verde no topo */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-t-2xl" />

            <div className="flex flex-col items-center text-center space-y-6">
              {/* Ícone animado */}
              <div className="animate-pulse">
                <svg
                  className="h-20 w-20 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Mensagem principal */}
              <h3 className="text-3xl font-bold text-emerald-600 leading-tight">
                Acertou!
                <br />
                <span className="text-2xl text-slate-800">
                  {avaliablePoints > 0
                    ? "Você ganhou pontos!"
                    : "Resposta correta, mas..."}
                </span>
              </h3>

              {/* Contador de pontos */}
              <div
                className={`flex items-center gap-2 px-6 py-3 rounded-full ${
                  avaliablePoints > 0 ? "bg-emerald-50" : "bg-amber-50"
                }`}
              >
                <span className="text-4xl font-black text-emerald-600">
                  {avaliablePoints}
                </span>
                <span className="text-lg font-medium text-slate-800">
                  {avaliablePoints > 0
                    ? "pontos conquistados!"
                    : "pontos (usou todas as dicas)"}
                </span>
              </div>

              {/* Botão de ação */}
              <button
                onClick={() => setIsCorrect(false)}
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl
                    font-bold text-lg transition-all duration-300 shadow-lg
                    hover:shadow-emerald-200 transform hover:-translate-y-1"
              >
                Continuar
              </button>
            </div>

            {/* Botão de fechar */}
            <button
              onClick={() => {
                setIsCorrect(false);
                setAvaliablePoints(3);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
