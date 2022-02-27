import React, { Component } from 'react';
import { motion } from 'framer-motion';
import Carousel from './Carousel';
import './DonorHome.css'

export class DonorExampleProfile extends Component {
    render() {
      return (
          <div className='donorExampleContainer'>
                <div className='exit'>
                  <button onClick={this.back}>
                      <img src='./images/exitarrow.png' />
                      Back
                  </button>
              </div>
              <div className='donorTopTitle'>
                <img src='./images/PeerOrganLogo.png' />
              </div>
              <div className='donorCarousel'>
                  <Carousel />
              </div>
              <div className='titleInfo'>
                  <h3>Need Lung Transplant!</h3>
                  <div className='recepientInformation'>
                  <img id='smaller' src='./images/usericon.png' /><p>Sarah Melanie is looking for a donor</p>
                  </div>
                  <div className='buttonInfo'>
                      <div className='bloodIcon'><p>Blood Type:</p><h4>AB+</h4></div>
                      <div className='organIcon'><p>Organ:</p><h4>lungs</h4></div>
                      <div className='ageIcon'><p>Age:</p><h4>35</h4></div>
                  </div>

              </div>
              <div className='contactButton'>
                  <button>Send Email</button>
                  <button>Share</button>
              </div>
              <div className='donorExampleDescription'>
                  <h3>Sarah's Story</h3>
                  <p>Hi my name is Sarah, and I enjoy going out for walks on the beach. Unfortunately
                      from a sudden illness, my left lung has been completely destroyed.
                      It would mean the world to me if a donor would contact me and get to know more about me and my family.
                      My past occupation was a highschool teacher, but sadly I had to quit. I do not want to give up just yet,
                      I believe there is hope!</p>
              </div>
          </div>
      )
    }
  }
  
  export default DonorExampleProfile;