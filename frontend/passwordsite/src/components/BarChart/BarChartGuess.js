import React, { useState } from 'react';
import { Bar } from "react-chartjs-2"
import { guesses } from '../data';
import {Chart as ChartJS} from 'chart.js/auto'



function BarChart({chartData}) {
    return <Bar data={chartData} />;
}

const BarChartGuessVisualiser = () => {
    const [guessData, setGuessData] = useState({
        labels: guesses.map(guess => guess.label),
        datasets: [{
            label: 'Amount of Guesses to Crack the Password',
            data: guesses.map(guess => guess.guess),
            backgroundColor: ['red', 'green']
        }],
        
    })
return (
    <BarChart chartData={guessData}/>
)
}

export default BarChartGuessVisualiser;



