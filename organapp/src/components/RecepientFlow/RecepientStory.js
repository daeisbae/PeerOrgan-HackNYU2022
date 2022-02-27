import React, { Component } from 'react';
import { motion} from 'framer-motion';
import '../UserForm.css'


export class RecepientStory extends Component {
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
                <div className='pContainerY'>
                <p id='pSizing'>Almost done! Here's where you share your story.</p>
                </div>
                  <div className='ratingContainer'>
                  <div className='Rating'>
                      <p>Upload a few pictures that represent your story</p>
                      <div className='ratingButtonContainer' id='recepientContainer'>
                          <img src='./images/insertImages.png' />
                      </div>
                  </div>
                  <div className='Rating'>
                  <p>Add a title</p>
                  <div className='ratingButtonContainer' id='recepientContainer'>
                  <input className='titleRecepient' type='text' placeholder='Ex. Need lung transplant asap!'></input>
                      </div>
                      
                  </div>
                  <div className='Rating'>
                  <p>Tell us why you're looking for donors</p>
                  <div className='ratingButtonContainer' id='recepientContainer'>
                      <input className='descriptionRecepient' type='text' placeholder='Ex. I am in desperate need of a donor for my lung!'></input>
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
  
  export default RecepientStory;