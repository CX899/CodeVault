import {useState} from 'react'
import {Container} from 'react-bootstrap'
var checkFor = require('zxcvbn');

const PasswordChecker = () => {
  const [result, setResult] = useState({});

  const setPassword = (event) => {
    let PasswordScore = checkFor(event.target.value);
    setResult(result => ({
      PasswordScore
    }));
  }

  return (
    <div>
      <Container>
        <div>
            <input onChange={(event) => setPassword(event)} type="text" id="password" defaultValue={result.item1} className="input__field" placeholder='Password'>
            </input>
        </div>
        <div>
            <pre>
              Password Score: {JSON.stringify(result['PasswordScore'], null, 1)}
            </pre>
        </div>
      </Container>
    </div>
  )
}

export default  PasswordChecker;