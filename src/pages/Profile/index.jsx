import { useState } from "react";
import { getStat } from "../../Services/apiStats";
import { useEffect } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import styled from "styled-components";

const ChartBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem;
  grid-column: span 2;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

export function Profile() {
  const currentUser = localStorage.getItem("email");
  const [data, setData] = useState([]);

  // const response = getStat(currentUser);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getStat(currentUser);
      console.log(response);
      setData(response);
    };

    fetchData();
  }, [currentUser]);

  const content = [
    { id: 1, type: "Total Perguntas", total: data.total },
    {
      id: 2,
      type: "Erros/Acertos",
      rights: data.right,
      wrongs: data.total - data.right,
    },
    { id: 3, type: "T.P. Português", total: data.totalpt },
    {
      id: 4,
      type: "E/A Português",
      rights: data.pt,
      wrongs: data.totalpt - data.pt,
    },
    { id: 5, type: "T.P. Literatura", total: data.totallt },
    {
      id: 6,
      type: "E/A Literatura",
      rights: data.lt,
      wrongs: data.totallt - data.lt,
    },
    { id: 7, type: "T.P. História", total: data.totalht },
    {
      id: 8,
      type: "E/A História",
      rights: data.ht,
      wrongs: data.totalht - data.ht,
    },
    { id: 9, type: "T.P. Geografia", total: data.totalgg },
    {
      id: 10,
      type: "E/A Geografia",
      rights: data.gg,
      wrongs: data.totalgg - data.gg,
    },
    { id: 11, type: "T.P. Filosofia", total: data.totalph },
    {
      id: 12,
      type: "E/A Filosofia",
      rights: data.ph,
      wrongs: data.totalph - data.ph,
    },
    { id: 13, type: "T.P. Sociologia", total: data.totalsc },
    {
      id: 14,
      type: "E/A Sociologia",
      rights: data.sc,
      wrongs: data.totalsc - data.sc,
    },
    { id: 15, type: "T.P. Matemática", total: data.totalmt },
    {
      id: 16,
      type: "E/A Matemática",
      rights: data.mt,
      wrongs: data.totalmt - data.mt,
    },
    { id: 17, type: "T.P. Física", total: data.totalpc },
    {
      id: 18,
      type: "E/A Física",
      rights: data.pc,
      wrongs: data.totalpc - data.pc,
    },
    { id: 19, type: "T.P. Química", total: data.totalch },
    {
      id: 20,
      type: "E/A Química",
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
        percentage: Math.round((data.totalph / data.total) * 100),
        color: "var(--color-pink-100)",
      },
      {
        type: "Matemática",
        percentage: Math.round((data.totalph / data.total) * 100),
        color: "var(--color-indigo-700)",
      },
      {
        type: "Física",
        percentage: Math.round((data.totalph / data.total) * 100),
        color: "var(--color-green-100)",
      },
      {
        type: "Química",
        percentage: Math.round((data.totalph / data.total) * 100),
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
    <div className="flex flex-col w-screen h-screen overflow-hidden inset-0 bg-black">
      <div className="flex items-center p-20 w-full h-[20%] bg-black">
        <div className="text-4xl font-bold text-sky-100 uppercase">
          {currentUser}
        </div>
      </div>
      <div className="w-full h-[30%] grid grid-flow-col grid-rows-2 p-5 gap-5 bg-black border-slate-100 border-t-3">
        {content.map((c) => (
          <div key={c.id} className="w-5xs rounded-lg h-auto bg-slate-50">
            <div className="flex items-center justify-center w-auto h-[60%]">
              {c.type}
            </div>
            {c.id % 2 !== 0 && (
              <div className="flex items-center justify-center w-full h-[40%]">
                {c.total}
              </div>
            )}
            {c.id % 2 === 0 && (
              <div className="flex items-center justify-center w-full h-[40%]">
                {c.rights} / {c.wrongs}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-row w-full h-[50%] place-content-around bg-black border-slate-100 border-t-3">
        <div className="w-[30%] h-full border-slate-100 border-3 bg-slate-500">
          <ChartBox>
            <h2>Tabela</h2>
            <ResponsiveContainer width="120%" height={240}>
              <PieChart>
                <Pie
                  data={formatSubjectGraphData()}
                  nameKey="type"
                  dataKey="percentage"
                  innerRadius={85}
                  outerRadius={110}
                  cx="40%"
                  cy="50%"
                  paddingAngle={3}
                >
                  {formatSubjectGraphData().map((sub) => (
                    <Cell fill={sub.color} stroke={sub.color} key={sub.type} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  verticalAlign="middle"
                  align="right"
                  width="35%"
                  layout="vertical"
                  iconSize={15}
                  iconType="circle"
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartBox>
        </div>
        <div className="w-[30%] h-full border-slate-100 border-3 bg-slate-500">
          <ChartBox>
            <h2>Tabela</h2>
            <ResponsiveContainer width="120%" height={240}>
              <PieChart>
                <Pie
                  data={formatRightsWrongData()}
                  nameKey="type"
                  dataKey="percentage"
                  innerRadius={85}
                  outerRadius={110}
                  cx="40%"
                  cy="50%"
                  paddingAngle={3}
                >
                  {formatRightsWrongData().map((sub) => (
                    <Cell fill={sub.color} stroke={sub.color} key={sub.type} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  verticalAlign="middle"
                  align="right"
                  width="35%"
                  layout="vertical"
                  iconSize={15}
                  iconType="circle"
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartBox>
        </div>
        <div className="w-[30%] h-full  border-slate-100"></div>
      </div>
    </div>
  );
}
