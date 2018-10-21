import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { Navbar, ButtonGroup } from 'react-bootstrap';

class BottomBar extends Component {
    render(){
    return(
        <Navbar>
                <ButtonGroup justified>
                    <Button href='#'> Go Back </Button>
                    <Button href='#'> Replay </Button>
                    <Button href='#'> Next </Button>
                </ButtonGroup>
        </Navbar>
    )
    }
}

export default BottomBar;