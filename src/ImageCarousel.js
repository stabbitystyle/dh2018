import React, { Component } from 'react';
import './ImageCarousel.css';
import { Carousel } from 'react-bootstrap';

class ImageCarousel extends Component {
  imageBase = "./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-"
  for
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0001.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0002.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0003.jpg")}/>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default ImageCarousel;