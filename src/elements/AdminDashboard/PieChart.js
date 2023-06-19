import { Pie } from "react-chartjs-2";
import { Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";

function PieChart({ mydata, mylabels, label }) {
    Chartjs.register(ArcElement, Tooltip, Legend);

    let myOptions = {
        responsive: true,
        miantanAspectRatio: false,
    };

    let data = {
        labels: mylabels,
        datasets: [
            {
                label: label,
                data: mydata,
                backgroundColor: [
                    "#00a748",
                    "#33b96d",
                    "#66ca91",
                    "#99dcb6",
                    "#ccedda",
                ],
                borderColor: [
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                    "#ffffff",
                ],
                borderWidth: 1.
            },
        ],
    };

    return <Pie data={data} options={myOptions} />
}
export default PieChart;
