import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';

const flip = {
    hidden: {
      transform: "scale(0) rotateX(-360deg)",
      opacity: 0,
      transition: {
        delay: 0.3,
      },
    },
    visible: {
      transform: " scale(1) rotateX(0deg)",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    close: {
      transform: "scale(0) rotateX(360deg)",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

const Modal = ({handleClose, text, passwordScore}) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div 
            onClick={(e) => e.stopPropagation()}
            className='modal orange-gradient'
            variants={flip}
            initial='hidden'
            animate='visible'
            exit='visible'
            >
                <pre>Info: {JSON.stringify(passwordScore, null, 1)}</pre>
                <button onClick={handleClose}>Close</button>
            </motion.div>
        </Backdrop>
    )
}

export default Modal;