import React, { Component } from 'react';
import { motion } from 'framer-motion'
import '../UserForm.css'


export class RecepientOrDonor extends Component {
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
                      Exit
                  </button>
              </div>
              <div className='progress'>
                  <img src='./images/progressbar.png' />
              </div>
              <motion.div initial={{ x: 200, opacity: 0 }}
            transition={{ delay: 0.2}}
            animate={{ x: 0, opacity: 1 }} className='topChooseContainer'>
                <p>Do you want to become a donor or a recepient?</p>
                <div className='buttoncontainer'>
                <div className='donor'>
                  <button>
                      Donor
                      <img src='./images/donor.png' />
                  </button>
                </div>
                <div className='recepient'>
                  <button onClick={this.continue}>
                      Recipient
                      <img src='/images/recipient.png' />
                  </button>
                </div>
                </div>
              </motion.div>
          </div>
      );
    }
  }
  
  export default RecepientOrDonor;