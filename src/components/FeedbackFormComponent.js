import React, { Component } from 'react';
import { Form, Button } from 'reactstrap';
import { FormLabel, FormControl, FormGroup, FormText } from 'react-bootstrap';

class Feedback extends Component {
    render() {
        return(
            <div className="row">
                <div className="col-sm-6">
                    <Form id="form">
                        <FormGroup controlId="name">
                            <FormLabel id="cardTitleQF">Name:</FormLabel>
                            <FormControl type="text" placeholder="Enter name" />
                        </FormGroup>
                        <FormGroup controlId="email"> 
                            <FormLabel id="cardTitleQF">Email address:</FormLabel>
                            <FormControl type="email" placeholder="Enter email" />
                            <FormText className="text-muted">We'll never share your email with anyone else.</FormText>
                        </FormGroup>
                        <FormGroup controlId="message">
                            <FormLabel id="cardTitleQF">Message:</FormLabel>
                            <FormControl as="textarea" rows="5" placeholder="Leave your message here!" />
                        </FormGroup>
                        <Button style={{backgroundColor:"#393E46", color: "#EEEEEE"}} type="submit" block>Submit</Button>
                    </Form>
                </div>
                <div className="col-sm-6" style={{padding: "30px"}}>
                    <img className="img-fluid" src="./assets/images/home/img2.jpg" alt="coffee" />
                </div>
            </div>
        )
    }
}

export default Feedback;