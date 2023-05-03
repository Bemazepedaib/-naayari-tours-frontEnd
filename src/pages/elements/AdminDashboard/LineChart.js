import { Line } from "react-chartjs-2";
import {Chart as Chartjs,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler
    } from "chart.js";

function LinearChart({title,mydata,mylabels}) {
Chartjs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


let data={
    labels: mylabels,
    datasets:[ //Cada una de las lineas del grafico
        {
            label:title,
            data: mydata,
            tension:0.5,
            fill:true,
            borderColor:"rgb(255,99,132)",
            backgroundColor:"rgba(255,99,132,0.5)",
            pointRadius:5,
            pointBorderColor: "rgba(255,99,132)",
            pointBackgroundColor: "rgba(255,99,132)"        
        },
    ],
};

let myOptions ={

};

    return <Line data={data} options={myOptions}/>
}
export default LinearChart;
