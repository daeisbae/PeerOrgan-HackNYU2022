import React from 'react'
import "antd/dist/antd.css";
import "./Carousel.css"
import { Carousel } from 'antd';

  
export default function CarouselExample() {
  
  return (
    <div style={{
      display: 'block', width: 375
    }}>
      <>
        <Carousel className='carousel'>
          <div>
            <h3 style={{ height: 205 }}><img src='./images/redheadFullPicture.png' /></h3>
          </div>
          <div>
            <h3 style={{ height: 205 }}><img src='./images/RedHeadFamily.png' /></h3>
          </div>
          <div>
            <h3 style={{ height: 205 }}><img src='./images/redheadbeach.png'/></h3>
          </div>
        </Carousel>
      </>
    </div>
  );
}