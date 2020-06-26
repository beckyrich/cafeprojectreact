import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Collapse } from 'reactstrap';

class Accordion extends Component {
    constructor(props){
        super(props);
        this.toggle=this.toggle.bind(this);
        this.state = {
            collapse: 0,
            cards: [
                {
                    id: 0,
                    message: "Tre Caffè opened its doors in Spring 2020. This little gem is located in the iconic Pike Place Market in Seattle, Washington. We would love the chance to welcome you in person, and for you to experiene first hand our tasty food and energizing coffees, teas, and drinks!",
                    header: "Welcome to Tre Caffè!"
                },
                {
                    id: 1,
                    message: "Monday to Friday: 6am to 10pm<br/>Saturday: 6am to 12pm<br/>Sunday: 8am to 8pm",
                    header:"When to Visit!"
                },
                {
                    id: 2,
                    message: "1912 Pike Pl, Seattle, WA 98101",
                    header: "Where to Find Us!"
                }
            ],
        };
    }

    toggle(e) {
        let event = e.target.dataset.event;
        this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
    }

   render() {
       const {cards, collapse} = this.state;
       return(
           <div className="container">
               {cards.map(index => {
                   return(
                       <Card key={index.id}>
                           <CardHeader onClick={this.toggle} data-event={index.id}>{index.header}</CardHeader>
                           <Collapse isOpen={collapse === index.id}>
                                <CardBody>{index.message}</CardBody>
                           </Collapse>
                       </Card>
                   )
               })}
           </div>
        );
   }
}

export default Accordion;
