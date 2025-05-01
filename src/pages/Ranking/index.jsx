import { useEffect, useState } from "react";
import { getAllStats } from "../../Services/apiStats";
import { getAllAccounts } from "../../Services/apiAccount";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export function Ranking() {
  const currentUser = localStorage.getItem("email");
  const [accounts, setAccounts] = useState([]);
  const [stats, setStats] = useState([]);
  const [formatted, setFormatted] = useState([]);

  const navigate = useNavigate();

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center py-12 px-4">
      {/* Botão de Voltar */}
      <button
        onClick={() => navigate("/roulette")}
        className="absolute left-8 top-12 p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/80 transition-all group"
      >
        <FaArrowLeft className="w-6 h-6 text-blue-400 group-hover:text-purple-300 transition-colors" />
      </button>

      {/* Título com efeito especial */}
      <div className="relative mb-12">
        <h1 className="h-15 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300 mb-4 text-center">
          Ranking de Líderes
        </h1>
        <div className="absolute inset-0 bg-white/5 blur-3xl opacity-30" />
      </div>

      {/* Container do Ranking */}
      <div className="w-full max-w-4xl bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Cabeçalho */}
        <div className="grid grid-cols-2 gap-4 p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-b border-white/10">
          <div className="text-xl font-semibold text-blue-300 uppercase">
            Usuário
          </div>
          <div className="text-xl font-semibold text-purple-300 uppercase">
            Pontos
          </div>
        </div>

        {/* Lista de Usuários */}
        <div className="divide-y divide-white/5">
          {formatted.map((user, index) => (
            <div
              key={user.userEmail}
              className={`grid grid-cols-2 gap-4 p-6 transition-all hover:bg-white/5 ${
                currentUser === user.userEmail
                  ? "bg-blue-900/10 border-l-4 border-blue-400"
                  : ""
              }`}
            >
              <div className="flex items-center space-x-4">
                {/* Medalhas para os primeiros lugares */}
                {index < 3 && (
                  <span className="text-2xl">
                    {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                  </span>
                )}
                <span
                  className={`text-lg ${
                    currentUser === user.userEmail
                      ? "text-blue-300 font-medium"
                      : "text-gray-300"
                  }`}
                >
                  {user.userEmail}
                </span>
              </div>
              <div className="flex items-center justify-end space-x-2">
                <span className="text-xl font-mono font-bold text-purple-300">
                  {user.points}
                </span>
                <span className="text-gray-400">pts</span>
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé Decorativo */}
        <div className="p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 text-center text-sm text-gray-400">
          Atualizado em tempo real
        </div>
      </div>

      {/* Efeitos de Brilho */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-30" />
      </div>
    </div>
  );
}
