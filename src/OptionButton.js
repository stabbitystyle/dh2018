import { Button } from 'react-bootstrap';
import React, { Component } from 'react';

class Option extends Component {
    render(){
    return(
        <Button href='#' bsSize="large">
            <span class="glyphicon glyphicon-cog" aria-hidden="true"> </span>
        </Button>
    )
    }
}

export default Option;