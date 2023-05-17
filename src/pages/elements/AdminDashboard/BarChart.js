import { Bar } from "react-chartjs-2";
import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";

function BarChart({ title, mydata, mylabels, max, label }) {
    Chartjs.register(
        CategoryScale,
        LinearScale,
        PointElement,
        BarElement,
        Title,
        Tooltip,
        Legend,
        Filler
    );


    let data = {
        labels: mylabels,
        datasets: [
            {
                label: label,
                data: mydata,
                backgroundColor: "#00a748",
                borderRadius: 5
            },
        ],
    };

    let myOptions = {
        responsive: true,
        animation: false,
        plugins: {
            legend: {
                display: true
            }
        },
        scales: {
            y: {
                min: 0,
                max: max,
                ticks: {
                    stepSize: 1
                }
            },
            x: {
                ticks: { color: "#00a748" }
            }
        }
    };

    return <Bar data={data} options={myOptions} />
}
export default BarChart;

