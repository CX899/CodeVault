import {useState, useEffect} from 'react'
import {LinearProgress} from '@mui/material';
import { motion } from "framer-motion";
import Modal from './Modal/index.js';
import PasswordGenerator from './PasswordGenerator.js';

var checkFor = require('zxcvbn');

const PasswordChecker = () => {

  //State Variables
  const [result, setResult] = useState({ PasswordScore : {} });
  const [modalOpen, setModalOpen] = useState(false);
  const [strenght, setStrenght] = useState('');
  const [strenghtScore, setstrenghtScore] = useState('0');
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [password, setPassword] = useState('');


  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const [color, setColor] = useState("blue");


  useEffect(() =>{
    document.getElementsByClassName('pStrenght')[0].style.color = color
  }, [color])
  
  //Change the score value
  useEffect(() => {
    if (password !== '' || password !== undefined) {
      let PasswordScore = checkFor(password);
      console.log(PasswordScore);
      setResult({ PasswordScore});
    }
    if (result['PasswordScore']['score'] === 0) {
      setColor("red");
      setStrenght('Very Weak');
      setstrenghtScore('0');
    }
    else if (result['PasswordScore']['score'] === 1) {
      setColor("orange");
      setStrenght('Weak');
      setstrenghtScore('1');
    }
    else if (result['PasswordScore']['score'] === 2) {
      setColor("yellow");
      setStrenght('Medium');
      setstrenghtScore('2');
    }
    else if (result['PasswordScore']['score'] === 3) {
      setColor("blue");
      setStrenght('Strong');
      setstrenghtScore('3');
    }
    else if (result['PasswordScore']['score'] === 4) {
      setColor("green");
      setStrenght('Very Strong');
      setstrenghtScore('4');
    }

  }
  , [generatedPassword, password])

  useEffect(() => {
    setPassword(generatedPassword)
  }, [generatedPassword])

  //Function to convert from Obj to Int
  const toInt = (value) => {
    return parseInt(JSON.stringify(value));
  }

  //Main React Script
  return (
    <div className='input__field__wrapper'>
      <div className='range__field__container'>
        <h1 className='rangeTitle'>Password Generator Tool</h1>
        <PasswordGenerator generatedPassword={generatedPassword} setGeneratedPassword={setGeneratedPassword}/>
      </div>
        <div className='input__field__container'>
        <h1 className='checkerTitle'>Password Strength Checker Tool</h1>
            <input onChange={(event) => setPassword(event.target.value)} value={password}  type="text" id="password" className="input__field" placeholder='Password'>
            </input>
            <LinearProgress className='progress__bar' variant='determinate' value={toInt(result['PasswordScore']['score'])*25}/>
            <div className="scoreContainer"><h3 className="pStrenght">{strenght}</h3><h3 className="sScore">Score: {strenghtScore}/4</h3></div>
            <motion.button 
          whileHover={{ scale: 1.04 }}
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