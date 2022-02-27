import React, { Component } from 'react';
import { motion} from 'framer-motion';
import './UserForm.css'


export class DonorQuestion4 extends Component {
    continue = e => {
      e.preventDefault();
      this.props.nextStep();
    };
  
    back = e => {
      e.preventDefault();
      this.props.prevStep();
    };
  
    render() {
      const { values, handleChange } = this.props;
      return (
          <div className='chooseContainer'>
              <div className='exit'>
                  <button onClick={this.back}>
                      <img src='./images/exitarrow.png' />
                      Back
                  </button>
              </div>
              <div className='progress'>
                  <img src='./images/progressbar5.png' />
              </div>
              <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} id='question4' className='topChooseContainer'>
                  <p id='pSizing'>Almost done! Let's some more details about your health.</p>
                  <div className='ratingContainer'>
                  <div className='Rating'>
                      <p>How active are you on a daily basis?</p>
                      <div className='ratingButtonContainer'>
                      <button>1</button>
                      <button>2</button>
                      <button>3</button>
                      <button>4</button>
                      <button>5</button>
                      </div>
                  </div>
                  <div className='Rating'>
                  <p>How often do you drink alcohol?</p>
                  <div className='ratingButtonContainer'>
                      <button>1</button>
                      <button>2</button>
                      <button>3</button>
                      <button>4</button>
                      <button>5</button>
                      </div>
                      
                  </div>
                  <div className='Rating'>
                  <p>How often do you smoke / vape?</p>
                  <div className='ratingButtonContainer'>
                      <button>1</button>
                      <button>2</button>
                      <button>3</button>
                      <button>4</button>
                      <button>5</button>
                      </div>
                      
                  </div>
                  <div className='Rating'>
                  <p>How often do you use recreational drugs?</p>
                  <div className='ratingButtonContainer'>
                      <button>1</button>
                      <button>2</button>
                      <button>3</button>
                      <button>4</button>
                      <button>5</button>
                      </div>
                      
                  </div>
                  </div>
              </motion.div>
              <div className='Continue'>
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} 
                  onClick={this.continue}>Continue</motion.button>
              </div>
          </div>
      );
    }
  }
  
  export default DonorQuestion4;