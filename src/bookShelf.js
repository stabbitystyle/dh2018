import React, { Component } from 'react';
import { Table, ListGroup} from 'react-bootstrap';

class BookShelf extends Component {
    render(){
        return (
            <ListGroup>
            <Table condensed bordered  hover>
            <thead>
            <tr>
                <th>Book</th>
                <th>Author</th>
                <th>Date Started</th>
                <th>Date Completed</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Harry Potter</td>
                <td>J. K. Rowling</td>
                <td>7/15/2018</td>
                <td>Pending</td>
            </tr>
            <tr>
                <td>A frog he would A-Wooing Go</td>
                <td>JE Caldecott</td>
                <td>10/20/2018</td>
                <td>Pending</td>
            </tr>
            </tbody>
        </Table>
        </ListGroup>
        )
    }
}

export default BookShelf;