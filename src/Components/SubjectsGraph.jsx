import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar componentes necessários
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function SubjectsGraph({ stats }) {
  // console.log(stats);
  // Extrair dados das matérias do objeto stats
  const materiasData = {
    labels: ["CH", "GG", "HT", "LT", "MT", "PC", "PH", "PT", "SC"],
    datasets: [
      {
        label: "Pontos por Matéria",
        data: [
          stats.totalch,
          stats.totalgg,
          stats.totalht,
          stats.totallt,
          stats.totalmt,
          stats.totalpc,
          stats.totalph,
          stats.totalpt,
          stats.totalsc,
        ],
        backgroundColor: "rgba(56, 189, 248, 0.6)",
        borderColor: "rgba(56, 189, 248, 1)",
        borderWidth: 2,
      },
    ],
  };

  // Opções de configuração do gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Desempenho por Matéria",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Pontos",
          font: {
            size: 14,
          },
        },
        grid: {
          color: "rgba(0,0,0,0.1)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Matérias",
          font: {
            size: 14,
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return <Bar data={materiasData} options={options} />;
}
