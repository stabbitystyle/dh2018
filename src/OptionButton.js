import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { ButtonGroup } from 'react-bootstrap';

class Option extends Component {
    render(){
    return(
        <ButtonGroup justified>
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true">
                <Button href='#'> Option </Button>
            </span>
        </ButtonGroup>
    )
    }
}

export default Option;