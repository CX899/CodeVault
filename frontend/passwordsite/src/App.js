import './App.css';
import {PasswordChecker, PasswordGenerator} from './components/paths';
import BarChartVisualiser from './components/BarChart/BarChartContainer';

function App() {
  return (
    <div>
      <PasswordChecker/>
      <BarChartVisualiser/>

    </div>
  );
}

export default App;
