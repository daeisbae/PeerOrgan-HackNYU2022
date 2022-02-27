import React, { Component } from 'react';
import { motion } from 'framer-motion';
import './DonorHome.css'


export class RecepientStories extends Component {
    render() {
      return (
          <div className='donorHomeContainer'>
              <div className='donorTop'>
                  <div className='donorTopTitle'>
                      <img src='./images/PeerOrganLogo.png' />
                  </div>
                  <div className='donorTopDesc'>
                      <h2>Browse Recipients</h2>
                      <p>Read about their stories and if you feel like you're a good match,
                          send them a message.
                      </p>
                  </div>
              </div>
              <div className='donorList'>
                  <div className='recipientDiv'>
                      <div className='recipientImg'>
                        <img src='./images/redhead.png' />
                      </div>
                      <div className='recipientDescription'>
                          <a className='fix'><img id='smaller' src='./images/usericon.png' />Sarah Melanie</a>
                          <h4>Need Lung Transplant!</h4>
                          <p>Hi my name is Sarah, and I enjoy going out for walks on the beach. Unfortunately
                              from a sudden illness, my left lung ..
                          </p>
                          <a id='bringdown' href=''>Read More <img id='down' src='./images/arrowright.png' /></a>
                      </div>
                  </div>
                  <div className='recipientDiv'>
                      <div className='recipientImg'>
                        <img src='./images/blacklady.png' />
                      </div>
                      <div className='recipientDescription'>
                          <a className='fix'><img id='smaller' src='./images/usericon.png' />Dae Hwan</a>
                          <h4>Urgent Need of Kidney!</h4>
                          <p>
                              Dae is a teacher and mother of four children, recently she went through a car accident
                              leaving her ..
                          </p>
                          <a id='bringdown' href=''>Read More <img id='down' src='./images/arrowright.png' /></a>
                      </div>
                  </div>
                  <div className='recipientDiv'>
                      <div className='recipientImg'>
                        <img src='./images/asianman.png' />
                      </div>
                      <div className='recipientDescription'>
                          <a className='fix'><img id='smaller' src='./images/usericon.png' />Eric Choi</a>
                          <h4>Spare A Liver?</h4>
                          <p>Hello, my name is Eric. Due to constant stress of hackathons, I've drank a lot, and my doctors
                              require me to ..
                          </p>
                          <a id='bringdown' href=''>Read More <img id='down' src='./images/arrowright.png' /></a>
                      </div>
                  </div>
              </div>
          </div>
      )
    }
  }
  
  export default RecepientStories;