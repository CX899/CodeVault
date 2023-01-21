import {useState} from 'react'
import {LinearProgress} from '@mui/material';

var checkFor = require('zxcvbn');

const PasswordChecker = () => {
  const [result, setResult] = useState({ PasswordScore : {} });

  const setPassword = (event) => {
    if (event.target.value !== '') {
      let PasswordScore = checkFor(event.target.value);
      console.log(PasswordScore);
      setResult(result => ({
        PasswordScore
      }));
    }
  }
  const toInt = (value) => {
    return parseInt(JSON.stringify(value));
  }

  return (
    <div className='input__field__wrapper'>
        <div className='input__field__container'>
            <input onChange={(event) => setPassword(event)} type="text" id="password" className="input__field" placeholder='Password'>
            </input>
            <LinearProgress variant='determinate' value={toInt(result['PasswordScore']['score'])*25}/>
        </div>

        <div>
            <pre className='input__text'>
              Password Score: {JSON.stringify(result['PasswordScore']['score'], null, 1)} <br/>
              Number of guesses: {JSON.stringify(result['PasswordScore']['guesses'], null, 1)}
            </pre>
        </div>
     
    </div>
  )
}

export default PasswordChecker;