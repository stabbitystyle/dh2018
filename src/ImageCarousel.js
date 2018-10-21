import React, { Component } from 'react';
import './ImageCarousel.css';

import { Carousel} from 'react-bootstrap';
import Sound from 'react-sound';
import mp3_file1 from './resources/sound/output_page1.mp3';
import mp3_file2 from './resources/sound/output_page2.mp3';
import mp3_file4 from './resources/sound/output_page4.mp3';
import mp3_file5 from './resources/sound/output_page5.mp3';
import mp3_file6 from './resources/sound/output_page6.mp3';
import mp3_file8 from './resources/sound/output_page8.mp3';
import mp3_file9 from './resources/sound/output_page9.mp3';
import mp3_file12 from './resources/sound/output_page12.mp3';
import mp3_file13 from './resources/sound/output_page13.mp3';
import mp3_file14 from './resources/sound/output_page14.mp3';
import mp3_file15 from './resources/sound/output_page15.mp3';
import mp3_file17 from './resources/sound/output_page16.mp3';
import mp3_file18 from './resources/sound/output_page18.mp3';
import mp3_file19 from './resources/sound/output_page19.mp3';
import mp3_file21 from './resources/sound/output_page21.mp3';
import mp3_file22 from './resources/sound/output_page22.mp3';
import mp3_file23 from './resources/sound/output_page23.mp3';
import mp3_file25 from './resources/sound/output_page25.mp3';

class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSound: null,
    };
  }
  //imageBase = "./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-"
  render() {
    return (
      <div>
      {/* Can do some sort of better CSS thing than the fixed width/height.  I suck tho, so idk */}
      <Sound
        url={this.state.currentSound}
        playStatus={Sound.status.PLAYING}
      />
      <Carousel interval={null} indicators={true}>
        <Carousel.Item>
          <img onClick={() => this.setState({ currentSound: mp3_file1 })} class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0001.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img onClick={() => this.setState({ currentSound: mp3_file2 })} class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0002.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0003.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img onClick={() => this.setState({ currentSound: mp3_file4 })} class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0004.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img onClick={() => this.setState({ currentSound: mp3_file5 })} class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0005.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img onClick={() => this.setState({ currentSound: mp3_file6 })} class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0006.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0007.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img onClick={() => this.setState({ currentSound: mp3_file8 })} class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0008.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img onClick={() => this.setState({ currentSound: mp3_file9 })} class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0009.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0010.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0011.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img onClick={() => this.setState({ currentSound: mp3_file12 })} class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0012.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img onClick={() => this.setState({ currentSound: mp3_file13 })} class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0013.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img onClick={() => this.setState({ currentSound: mp3_file14 })} class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0014.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img onClick={() => this.setState({ currentSound: mp3_file15 })} class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0015.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0016.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img onClick={() => this.setState({ currentSound: mp3_file17 })} class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0017.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img onClick={() => this.setState({ currentSound: mp3_file18 })} class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0018.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img onClick={() => this.setState({ currentSound: mp3_file19 })} class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0019.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0020.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img onClick={() => this.setState({ currentSound: mp3_file21 })} class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0021.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img onClick={() => this.setState({ currentSound: mp3_file22 })} class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0022.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img onClick={() => this.setState({ currentSound: mp3_file23 })} class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0023.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0024.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img onClick={() => this.setState({ currentSound: mp3_file25 })} class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0025.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0026.jpg")}/>
        </Carousel.Item>
        <Carousel.Item>
          <img class="img-responsive center-block" width={900} height={500} alt="900x500" src={require("./resources/img/public-domain-stock-graphics-vintage-childrens-books-a-frog-he-would-a-wooing-go-0027.jpg")}/>
        </Carousel.Item>
      </Carousel>
      {/* Don't know what I wanna do with ButtonGroup yet.  Could maybe descend it. */}
      </div>
    )
  }
}

export default ImageCarousel;