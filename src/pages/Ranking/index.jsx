import { useEffect, useState } from "react";
import { getAllStats } from "../../Services/apiStats";
import { getAllAccounts } from "../../Services/apiAccount";

export function Ranking() {
  const currentUser = localStorage.getItem("email");
  const [accounts, setAccounts] = useState([]);
  const [stats, setStats] = useState([]);
  const [formatted, setFormatted] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const stats = await getAllStats();
      const accounts = await getAllAccounts();

      // Combinar os dados
      const combined = stats.map((stat) => {
        const account = accounts.find((acc) => acc.userId === stat.userid);
        return {
          userEmail: account ? account.userEmail : "Usuário desconhecido",
          points: stat.total,
        };
      });

      // Ordenar por pontos (decrescente)
      const sorted = combined.sort((a, b) => b.points - a.points);

      setFormatted(sorted);
    };

    fetchData();
  }, [currentUser]);

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen overflow-hidden inset-0 bg-black gap-10">
      <div className="text-4xl font-bold text-sky-100 uppercase">
        Ranking de Líderes
      </div>
      <div className="flex flex-col w-[50%] h-[80%] bg-slate-300 gap-3 pt-5 pb-5">
        <div className="flex flex-row w-full h-[10%] bg-slate-200">
          <div className="text-xl font-bold text-black uppercase flex justify-center items-center w-[50%] h-full">
            Usuário
          </div>
          <div className="text-xl font-bold text-black uppercase flex justify-center items-center w-[50%] h-full">
            Pontos
          </div>
        </div>
        {formatted.map((user) => (
          <div
            key={user.userEmail}
            className="flex flex-row w-full h-[10%] bg-slate-100"
          >
            <div className="text-xl text-black uppercase flex justify-center items-center w-[50%] h-full">
              {user.userEmail}
            </div>
            <div className="text-xl text-black uppercase flex justify-center items-center w-[50%] h-full">
              {user.points}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
