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

let beneficios =[0,56,20,36,80,40,30,-20,25,30,12,60];
let meses =['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

let midata={
    labels: meses,
    datasets:[ //Cada una de las lineas del grafico
        {
            label:"Prueba",
            data: beneficios,
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

export default function LinearChart(){
    return <Line data={midata} options={myOptions}/>
}