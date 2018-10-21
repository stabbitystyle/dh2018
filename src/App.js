import React, { Component } from 'react';
<<<<<<< HEAD
import image1 from './components/displayImage/images/spongebob.jpg'
import image2 from './components/displayImage/images/spongebob2.jpg'
import image3 from './components/displayImage/images/image3.png'

class App extends Component {
    render() {
        return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class ="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={image1} alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class ="d-block w-100" src={image2} alt="Second slide"/>
                        </div>
                        <div class ="carousel-item">
                            <img class ="d-block w-100" src={image3} alt="Third slide"/>
                        </div>
                    </div>
=======
import './App.css';
import TopNavbar from './TopNavbar';
import BottomBar from './BottomBar';
import ImageCarousel from './ImageCarousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavbar></TopNavbar>
        <header className="App-header">
          <ImageCarousel></ImageCarousel>
          <BottomBar/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
>>>>>>> dev

                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            </div>


            );
        }
    }

export default App;