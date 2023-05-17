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

function BarChart({ title, mydata, mylabels }) {
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
                label: title,
                data: mydata,
                backgroundColor: "rgba(0,210,195,0.5)",
            },
        ],
    };

    let myOptions = {
        responsive: true,
        animation: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                min: -25,
                max: 100
            },
            x: {
                ticks: { color: "rgba(0,220,195)" }
            }
        }
    };

    return <Bar data={data} options={myOptions} />
}
export default BarChart;

