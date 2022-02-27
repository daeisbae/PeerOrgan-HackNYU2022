import React, { Component } from 'react';
import { motion } from 'framer-motion';
import '../UserForm.css'


export class RecepientBirthdate extends Component {
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
                  <img src='./images/progressbar2.png' />
              </div>
              <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='topChooseContainer'>
                  <p id='pSizing'>When's your Birthday?</p>
                  <div className='inputContainerB'>
                  <input type='text'
                  placeholder='MM' /> 
                  <input type='text'
                  placeholder='DD' /> 
                  <input id='resizeButton' type='text'
                  placeholder='YYYY' />
                  </div>
              </motion.div>
              <div className='Continue'>
                  <button onClick={this.continue}>Continue</button>
              </div>
          </div>
      );
    }
  }
  
  export default RecepientBirthdate;