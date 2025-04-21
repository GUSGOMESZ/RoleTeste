import Subjects from "../../Data/subjects";
import Topics from "../../Data/topics";
import SubjectButton from "../../Components/SubjectButton";
import RouletteHalf from "../../Components/RoulleteHalf";
import translate from "../../Helpers/translate";
import getColor from "../../Helpers/colors";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../App.css";

// Set-ExecutionPolicy RemoteSigned –Scope Process
// const spinTime = 3000;

export function Roulette() {
  const navigate = useNavigate();
  const topics = Topics;

  const [activeButton, setActiveButton] = useState("Português");
  const [wheelBgColor, setWheelBgColor] = useState("bg-sky-500");
  const [possibleContent, setPossibleContent] = useState(topics[0]);
  const [able, setAble] = useState(true);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [data, setData] = useState(topics[0]);

  const [isAsking, setIsAsking] = useState(false);
  const [selectedContent, setSelectedContent] = useState("");

  const currentUser = localStorage.getItem("email");

  const handleButtonClick = (subject, index) => {
    setActiveButton(subject);
    setData(topics[index]);
    setWheelBgColor(getColor(subject));
    setPossibleContent(topics[index]);
  };

  const handleSpin = () => {
    setAble(false);
    const randomIndex = Math.floor(Math.random() * possibleContent.length);

    setPrizeNumber(randomIndex);

    setMustSpin(true);

    setSelectedContent(possibleContent[randomIndex].option);

    console.log(selectedContent);

    setTimeout(() => {
      setAble(true);

      setIsAsking(true);
    }, 6000);
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
        className={`flex flex-row w-screen h-screen overflow-hidden inset-0 bg-black ${
          isAsking ? "opacity-70" : ""
        }`}
      >
        <div className="flex flex-col w-1/2 h-full">
          <div className="flex items-center w-full h-1/6 p-20">
            <div className="font-bold text-7xl text-white">RoleTeste</div>
          </div>
          <div className="w-full h-4/6 p-3 pl-10 pr-10 pt-0 gap-5">
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
          <div className="flex flex-row w-full h-1/6 bg-slate-500">
            <div className="w-[50%] h-full bg-indigo-200 p-5">
              <div className="flex justify-center items-center w-full h-full border-2 border-black">
                <button className="border-1 border-black p-3 hover:bg-indigo-400">
                  {currentUser}
                </button>
              </div>
            </div>
            <div className="w-[25%] h-full bg-indigo-200 p-5">
              <div className="flex justify-center items-center w-full h-full border-2 border-black">
                <button className="border-1 border-black p-3 hover:bg-indigo-400">
                  Placar De Líderes
                </button>
              </div>
            </div>
            <div className="w-[25%] h-full bg-indigo-200 p-5">
              <div className="flex justify-center items-center w-full h-full border-2 border-black">
                <button
                  onClick={logout}
                  className="border-1 border-black p-3 hover:bg-indigo-400"
                >
                  Sair
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-1/2 h-full ${wheelBgColor} transition-all duration-500`}
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
                className="p-3 border-2 border-black"
                disabled={!able}
              >
                Spin
              </button>
            </RouletteHalf>
          </div>
        </div>
      </div>

      {isAsking && (
        <div className="fixed inset-0 flex items-center justify-center bg-slate z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="mb-4 text-gray-800">
              O tema selecionado foi <b>{selectedContent}</b>. Você gostaria de
              seguir para uma questão sobre o tema sorteado ?
            </p>
            <div className="space-x-4">
              <button
                onClick={() => setIsAsking(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Não
              </button>
              <button
                onClick={() => {
                  // Lógica para seguir para a questão
                  closePopup();
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Sim
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
