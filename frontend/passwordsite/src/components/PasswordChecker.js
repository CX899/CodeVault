import {useState} from 'react'
import {LinearProgress} from '@mui/material';

var checkFor = require('zxcvbn');

const PasswordChecker = () => {
  const [result, setResult] = useState({ PasswordScore : {} });

  const setPassword = (event) => {
    if (event.target.value !== '') {
      let PasswordScore = checkFor(event.target.value);
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
        </div>
        <div>
            <pre className='input__text'>
              Password Score: {JSON.stringify(result['PasswordScore']['score'], null, 1)}
            </pre>
            <LinearProgress variant='determinate' value={toInt(result['PasswordScore']['score'])*25}/>
        </div>
     
    </div>
  )
}

export default PasswordChecker;