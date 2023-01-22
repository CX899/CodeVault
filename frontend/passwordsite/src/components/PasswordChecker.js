import {useState, useEffect} from 'react'
import {LinearProgress} from '@mui/material';
import { motion } from "framer-motion";
import Modal from './Modal/index.js';

var checkFor = require('zxcvbn');

const PasswordChecker = () => {

  //State Variables
  const [result, setResult] = useState({ PasswordScore : {} });
  const [modalOpen, setModalOpen] = useState(false);
  const [strenght, setStrenght] = useState('');
  const [length, setLength] = useState(8);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const [color, setColor] = useState("blue");


  useEffect(() =>{
    document.getElementsByClassName('pStrenght')[0].style.color = color
  }, [color])
  
  //Change the score value
  const setPassword = (event) => {
    if (event.target.value !== '') {
      let PasswordScore = checkFor(event.target.value);
      console.log(PasswordScore);
      setResult({ PasswordScore});
      console.log(result);
    }
    if (result['PasswordScore']['score'] === 0) {
      setColor("red");
      setStrenght('Very Weak');
    }
    else if (result['PasswordScore']['score'] === 1) {
      setColor("orange");
      setStrenght('Weak');
    }
    else if (result['PasswordScore']['score'] === 2) {
      setColor("yellow");
      setStrenght('Medium');
    }
    else if (result['PasswordScore']['score'] === 3) {
      setColor("blue");
      setStrenght('Strong');
    }
    else if (result['PasswordScore']['score'] === 4) {
      setColor("green");
      setStrenght('Very Strong');
    }
    if (result['PasswordScore']['score'] === 0) {
      setColor("red");
    }
    else if (result['PasswordScore']['score'] === 1) {
      setColor("orange");
    }
    else if (result['PasswordScore']['score'] === 2) {
      setColor("yellow");
    }
    else if (result['PasswordScore']['score'] === 3) {
      setColor("blue");
    }
    else if (result['PasswordScore']['score'] === 4) {
      setColor("green");
    }
  }

  //Function to convert from Obj to Int
  const toInt = (value) => {
    return parseInt(JSON.stringify(value));
  }


  //Main React Script
  return (
    <div className='input__field__wrapper'>
      <div className='range__field__container'>
        <h1>Password Generator Tool</h1>
        <input className = "slider" type="range" min="4" max="12" value={length} onChange={(e) => setLength(e.target.value)} />
      </div>
        <div className='input__field__container'>
        <h1>CodeVault</h1>
        <div><h3 className="pStrenght">{strenght}</h3></div>
            <input onChange={(event) => setPassword(event)} type="text" id="password" className="input__field" placeholder='Password'>
            </input>
            <LinearProgress className='progress__bar' variant='determinate' value={toInt(result['PasswordScore']['score'])*25}/>
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
        <div>

        </div>
    </div>
  );
}

export default PasswordChecker;