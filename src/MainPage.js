import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import OptionButton from './OptionButton';


class MainPage extends Component{
    render(){
        <ButtonToolbar>
            <Button>Book shelf</Button>
            <Button>Start</Button>
            <OptionButton><Link to="/settings"></Link></OptionButton>
        </ButtonToolbar>
    }

}

export default MainPage;