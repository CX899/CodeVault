import BarChartGuessVisualiser from './BarChartGuess.js'
import BarChartTimeVisualiser from './BarChartTime.js'

const BarChartVisualiser = () => {
    return (
        <div className='bar-charts-container'>
            <div className='Guess chart-box' >
                <BarChartGuessVisualiser/>
            </div>
            <div className='Time chart-box'>
                <BarChartTimeVisualiser/>
            </div>
        </div>
    )
}
export default BarChartVisualiser