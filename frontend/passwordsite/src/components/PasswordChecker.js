import {useState} from 'react'
import {Container} from 'react-bootstrap'
var checkFor = require('zxcvbn');

const PasswordChecker = () => {
  const [password, setPassword] = useState('');
  
  const checkPassword = () => {
    const result = checkFor(password);
    console.log(result);
  }

  return (
    <div>
      <Container>
        <div>
            <input onChange={(event) => setPassword(event.target.value)} type="text" id="password" className="input__field" placeholder='Password'>
            </input>
        </div>
        <div className='Buttons'>
            <button onClick={checkPassword} id="btn1">Check my password</button>
        </div>
      </Container>
    </div>
  )
}

export default PasswordChecker