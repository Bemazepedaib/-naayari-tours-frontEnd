import { Bar } from "react-chartjs-2";
import {Chart as Chartjs,
        CategoryScale,
        LinearScale,
        PointElement,
        BarElement,
        Title,
        Tooltip,
        Legend,
        Filler
    } from "chart.js";

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

let beneficios =[0,56,20,36,80,40,30,-20,25,30,12,60];
let meses =['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']


let midata={
    labels: meses,
    datasets:[
        {
            label:"Beneficios",
            data: beneficios,
            backgroundColor:"rgba(0,210,195,0.5)",
        },
    ],
};

let myOptions ={
    responsive:true,
    animation:false,
    plugins:{
        legend:{
            display:false
        }
    },
    scales:{
        y:{
            min: -25,
            max:100
        },
        x:{
            ticks:{color:"rgba(0,220,195)"}
        }
    }
};

export default function BarChart(){
    return <Bar data={midata} options={myOptions}/>
}