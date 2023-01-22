import {useState} from 'react'
import {LinearProgress} from '@mui/material';
import { motion } from "framer-motion";
import Modal from './Modal/index.js';

var checkFor = require('zxcvbn');

const PasswordChecker = () => {
  const [result, setResult] = useState({ PasswordScore : {} });
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const setPassword = (event) => {
    if (event.target.value !== '') {
      let PasswordScore = checkFor(event.target.value);
      console.log(PasswordScore);
      setResult({ PasswordScore});
      console.log(result);
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

        <div>
          <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button"
          onClick={() => (modalOpen ? close() : open())}
          >
            More Info
          </motion.button>

          {modalOpen && <Modal passwordScore={result} modalOpen={modalOpen} handleClose={close}/>}

        </div>
     
    </div>
  );
}

export default PasswordChecker;