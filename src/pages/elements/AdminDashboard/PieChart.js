import { Chart as Chartjs, ArcElement,Tooltip,Legend } from "chart.js";
import { Pie } from "react-chartjs-2";


function PieChart({title,mydata,mylabels}) {
Chartjs.register(ArcElement,Tooltip,Legend);

let myOptions={
    responsive: true,
    miantanAspectRatio:false,
};

let data={
    labels:mylabels,
    datasets:[
        {
            label: title,
            data:mydata,
            backgroundColor:[
                "rgba(255,99,132,0.2)",
                "rgba(255,206,86,0.2)",
                "rgba(54,162,235,0.3)",
                "rgba(75,192,192,0.2)",
                "rgba(153,102,255,0.2)",
            ],
            borderColor:[
                "rgba(255,99,132,1)",
                "rgba(255,206,86,1)",
                "rgba(54,162,235,1)",
                "rgba(75,192,192,1)",
                "rgba(153,102,255,1)",
            ],
            borderWidth:1.
        },
    ],
};

    return <Pie data={data} options={myOptions}/>
}
export default PieChart;
