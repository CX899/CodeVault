import React, { useState } from 'react';
import { Bar } from "react-chartjs-2"
import { times } from '../data';
import {Chart as ChartJS} from 'chart.js/auto'


function BarChart({chartData}) {
    return <Bar data={chartData} options={chartData} />;
}


const BarChartTimeVisualiser = () => {
    const [timeData, setTimeData] = useState({
        labels: times.map(time => time.label),
        datasets: [{
            label: 'Amount of Time to Crack the Password',
            data: times.map(time => time.time),
            backgroundColor: ['red', 'green'],
        }],
        options:{
            plugins:{
                legend:{
                    display:false
                }
            },
            scales:{
                y:{ 
                    ticks:{
                        color: 'black'
                    },
                    position: 'right',
                    title:{
                        display: true,
                        text: 'Higher is Better'
                    }
                }
            }
        }   
    })
return (
    <BarChart chartData={timeData} options = {timeData}/>
)
}
export default BarChartTimeVisualiser;