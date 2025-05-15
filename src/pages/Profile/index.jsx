import { useState, useEffect } from "react";
import { getStat } from "../../Services/apiStats";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import styled from "styled-components";
import { SubjectsGraph } from "../../Components/SubjectsGraph";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ChartBox = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  }
`;

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#EC4899",
  "#14B8A6",
  "#F97316",
  "#64748B",
  "#8B5CF6",
];

export function Profile() {
  const currentUser = localStorage.getItem("email");
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await getStat(currentUser);
      console.log("reponse: " + response);
      setData(response);
    };

    fetchData();
  }, [currentUser]);

  const content = [
    { id: 1, type: "Total de Perguntas Respondidas", total: data.total },
    {
      id: 2,
      type: "Acertos Totais",
      rights: data.right,
      wrongs: data.total - data.right,
    },
    { id: 3, type: "Pontos em Português", total: data.totalpt },
    {
      id: 4,
      type: "Acertos em Português",
      rights: data.pt,
      wrongs: data.totalpt - data.pt,
    },
    { id: 5, type: "Pontos em Literatura", total: data.totallt },
    {
      id: 6,
      type: "Acertos em Literatura",
      rights: data.lt,
      wrongs: data.totallt - data.lt,
    },
    { id: 7, type: "Pontos em História", total: data.totalht },
    {
      id: 8,
      type: "Acertos em História",
      rights: data.ht,
      wrongs: data.totalht - data.ht,
    },
    { id: 9, type: "Pontos em Geografia", total: data.totalgg },
    {
      id: 10,
      type: "Acertos em Geografia",
      rights: data.gg,
      wrongs: data.totalgg - data.gg,
    },
    { id: 11, type: "Pontos em Filosofia", total: data.totalph },
    {
      id: 12,
      type: "Acertos em Filosofia",
      rights: data.ph,
      wrongs: data.totalph - data.ph,
    },
    { id: 13, type: "Pontos em Sociologia", total: data.totalsc },
    {
      id: 14,
      type: "Acertos em Sociologia",
      rights: data.sc,
      wrongs: data.totalsc - data.sc,
    },
    { id: 15, type: "Pontos em Matemática", total: data.totalmt },
    {
      id: 16,
      type: "Acertos em Matemática",
      rights: data.mt,
      wrongs: data.totalmt - data.mt,
    },
    { id: 17, type: "Pontos em Física", total: data.totalpc },
    {
      id: 18,
      type: "Acertos em Física",
      rights: data.pc,
      wrongs: data.totalpc - data.pc,
    },
    { id: 19, type: "Pontos em Química", total: data.totalch },
    {
      id: 20,
      type: "Acertos em Química",
      rights: data.ch,
      wrongs: data.totalch - data.ch,
    },
  ];

  function formatSubjectGraphData() {
    const subjectsGraph = [
      {
        type: "Português",
        percentage: Math.round((data.totalpt / data.total) * 100),
        color: "var(--color-blue-700)",
      },
      {
        type: "Literatura",
        percentage: Math.round((data.totallt / data.total) * 100),
        color: "var(--color-red-800)",
      },
      {
        type: "História",
        percentage: Math.round((data.totalht / data.total) * 100),
        color: "var(--color-orange-100)",
      },
      {
        type: "Geografia",
        percentage: Math.round((data.totalgg / data.total) * 100),
        color: "var(--color-green-700)",
      },
      {
        type: "Filosofia",
        percentage: Math.round((data.totalph / data.total) * 100),
        color: "var(--color-yellow-700)",
      },
      {
        type: "Sociologia",
        percentage: Math.round((data.totalsc / data.total) * 100),
        color: "var(--color-pink-100)",
      },
      {
        type: "Matemática",
        percentage: Math.round((data.totalmt / data.total) * 100),
        color: "var(--color-indigo-700)",
      },
      {
        type: "Física",
        percentage: Math.round((data.totalpc / data.total) * 100),
        color: "var(--color-green-100)",
      },
      {
        type: "Química",
        percentage: Math.round((data.totalch / data.total) * 100),
        color: "var(--color-red-700)",
      },
    ];

    return subjectsGraph;
  }

  function formatRightsWrongData() {
    const rightWordData = [
      {
        type: "Acertos",
        percentage: Math.round((data.right / data.total) * 100),
        color: "var(--color-green-700)",
      },
      {
        type: "Erros",
        percentage: Math.round(((data.total - data.right) / data.total) * 100),
        color: "var(--color-red-700)",
      },
    ];

    return rightWordData;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Header Section */}
      <div className="relative px-8 py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 pattern-dots pattern-gray-800 pattern-size-4 pattern-opacity-20" />

        <div className="relative z-10 text-center">
          <button
            onClick={() => navigate("/roulette")}
            className="absolute left-8 top-12 p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/80 transition-all group"
          >
            <FaArrowLeft className="w-6 h-6 text-blue-400 group-hover:text-purple-300 transition-colors" />
          </button>

          <h1 className="h-15 text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent mb-4">
            {currentUser}
          </h1>
          <p className="text-gray-300 text-lg">Estatísticas de Desempenho</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-5 gap-4 px-8 pb-8 mt-4">
        {content.map((c) => (
          <div
            key={c.id}
            className="p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-400 transition-all"
          >
            <div className="text-sm text-gray-400 mb-2">{c.type}</div>
            <div className="text-2xl font-bold text-blue-400">
              {c.id % 2 !== 0 ? c.total : c.rights}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="flex flex-wrap justify-center gap-8 px-8 pb-12">
        {/* Subjects Distribution Pie Chart */}
        <ChartBox className="w-full max-w-2xl">
          <h3 className="text-xl font-semibold text-gray-200 mb-4">
            Distribuição por Matéria
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={formatSubjectGraphData()}
                nameKey="type"
                dataKey="percentage"
                innerRadius="60%"
                outerRadius="80%"
                paddingAngle={5}
              >
                {formatSubjectGraphData().map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "rgba(0, 0, 0, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  text: "white"
                }}
              />
              <Legend
                layout="vertical"
                align="right"
                verticalAlign="middle"
                wrapperStyle={{ color: "#fff" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartBox>

        {/* Performance Pie Chart */}
        <ChartBox className="w-full max-w-lg">
          <h3 className="text-xl font-semibold text-gray-200 mb-4">
            Desempenho Geral
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={formatRightsWrongData()}
                dataKey="percentage"
                innerRadius="60%"
                outerRadius="80%"
                paddingAngle={5}
              >
                {formatRightsWrongData().map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index === 0 ? "#10B981" : "#EF4444"}
                  />
                ))}
              </Pie>
              <Tooltip
                content={({ payload }) => (
                  <div className="bg-gray-800 p-2 rounded border border-gray-700">
                    {payload.map((entry) => (
                      <p key={entry.name} className="text-sm text-white">
                        {entry.name}: {entry.value}%
                      </p>
                    ))}
                  </div>
                )}
              />
              <Legend
                layout="vertical"
                align="right"
                verticalAlign="middle"
                wrapperStyle={{ color: "#fff" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartBox>

        {/* Additional Graph */}
        <ChartBox className="w-full max-w-3xl">
          <h3 className="text-xl font-semibold text-gray-200 mb-4">
            Progresso Detalhado
          </h3>
          <div className="h-80">
            <SubjectsGraph stats={data} />
          </div>
        </ChartBox>
      </div>
    </div>
  );
}
