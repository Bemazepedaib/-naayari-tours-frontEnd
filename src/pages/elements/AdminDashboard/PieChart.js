import { Chart as Chartjs, ArcElement,Tooltip,Legend } from "chart.js";
import { DefaultRouteMatcherManager } from "next/dist/server/future/route-matcher-managers/default-route-matcher-manager";
import { Pie } from "react-chartjs-2";

Chartjs.register(ArcElement,Tooltip,Legend);

let options={
    responsive: true,
    miantanAspectRatio:false,
};

let data={
    labels:["Carne","Jamón","Dulces","Turrón","Vino"],
    datasets:[
        {
            label: "Popularidad en Navidad",
            data:[35,20,20,15,10],
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

export default function PieChart(){
    return <Pie data={data} options={options}/>
}