import React, { Component } from 'react';
import './ImageCarousel.css';
import { Carousel, ButtonGroup, Button } from 'react-bootstrap';

class ImageCarousel extends Component {
  //imageBase = "./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-"
  render() {
    return (
      <div>
      {/* Can do some sort of better CSS thing than the fixed width/height.  I suck tho, so idk */}
      <Carousel interval={null} indicators={false}>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0001.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0002.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0003.jpg")}/>
        </Carousel.Item>
      </Carousel>
      {/* Don't know what I wanna do with ButtonGroup yet.  Could maybe descend it. */}
      <ButtonGroup justified>
        <Button href="#">Back</Button>
        <Button href="#">Pause</Button>
        <Button href="#">Forward</Button>
      </ButtonGroup>
      </div>
    )
  }
}

export default ImageCarousel;