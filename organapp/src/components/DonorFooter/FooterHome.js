import React, { Component } from 'react';
import { motion } from 'framer-motion';
import './Footer.css'


export class FooterHome extends Component {
    render() {
      return (
          <div className='footerContainer'>
            <button><img src='./images/homeselect.png' /></button>
            <button><img src='./images/profile.png' /></button>
            <button><img src='./images/settings.png' /></button>
          </div>
      )
    }
  }
  
  export default FooterHome;