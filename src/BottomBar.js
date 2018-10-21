import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { Navbar, ButtonGroup } from 'react-bootstrap';

class BottomBar extends Component {
    render(){
    return(
        <Navbar>
                <ButtonGroup justified bsSize="large">
                    <Button href='#'>
                        <span class="glyphicon glyphicon-fast-backward" aria-hidden="true"> </span>
                        </Button>
                    <Button href='#'>
                        <span class="glyphicon glyphicon-repeat" aria-hidden="true"> </span>
                        </Button>
                    <Button href='#'>
                        <span class="glyphicon glyphicon-fast-forward" aria-hidden="true"> </span>
                        </Button>
                </ButtonGroup>
        </Navbar>
    )
    }
}


export default BottomBar;