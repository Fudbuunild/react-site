import React ,{Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Mountain from '../assets/mountain.jpg'
import Road from '../assets/road.jpg'

export default class CarouselBox extends Component{
  render(){
     return (
       <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Mountain}
              alt="Forest"
            />
             <Carousel.Caption>
              <h3>Slider 1 Image</h3>
              <p>One Photo</p>
             </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Road}
              alt="Road"
            />
             <Carousel.Caption>
              <h3>Slider 2 image</h3>
              <p>Two Photo</p>
             </Carousel.Caption>
          </Carousel.Item>
       </Carousel>
     )
  }
}
