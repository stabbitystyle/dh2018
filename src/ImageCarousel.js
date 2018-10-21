import React, { Component } from 'react';
import './ImageCarousel.css';
import { Carousel, ButtonGroup, Button } from 'react-bootstrap';

class ImageCarousel extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      text: null
    }
  }

  setText = function(num) {
    this.setState({ page: this.state.page++ });

    // fetch(`localhost:5000/text/${num}`)
    fetch('http://localhost:5000/text')
    .then(res => {
        const result = res.text();
        console.log(result);
        return result
     })
    .then(text => {
      this.setState({ text })
   });
  }

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
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0004.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0005.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0006.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0007.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0008.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0009.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0010.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0011.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0012.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0013.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0014.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0015.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0016.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0017.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0018.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0019.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0020.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0021.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0022.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0023.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0024.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0025.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0026.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0027.jpg")}/>
        </Carousel.Item>
      </Carousel>
      {/* Don't know what I wanna do with ButtonGroup yet.  Could maybe descend it. */}
      <ButtonGroup justified>
        <Button href="#">Back</Button>
        <Button href="#">Pause</Button>
        <Button onClick={() => this.setText(this.state.page)} >Forward</Button>
      </ButtonGroup>
      </div>
    )
  }
}

export default ImageCarousel;