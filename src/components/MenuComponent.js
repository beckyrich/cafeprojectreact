import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Collapse } from 'reactstrap';

class Menu extends Component {
    constructor(props){
        super(props);
        this.toggle=this.toggle.bind(this);
        this.state = {
            collapse: 0,
            cards: [
                {
                    id: 0,
                    type: "Expresso",
                    items: ["Single Shot / 1.50 ", " ~ ", "Double Shot/ 2.00 ", " ~ ", "Americano/ 12oz or 16oz / 2.00/2.50 ", " ~ ", "Cappuccino/ 12oz or 16oz/ 2.25/2.75 ", " ~ ", "Latte/ 12oz or 16oz/ 2.50/3.00 ", " ~ ", "Flavored Latte/ 12oz or 16oz/ 3.00/3.75 ",  " ~ ", "Mocha/ 12oz or 16oz/ 3.25/4.00 ", " ~ ", "Caramel Macchiato/ 12oz or 16oz/ 3.25/4.00 "],
                },
                {   
                    id: 1,
                    type:"Coffee", 
                    items:["Drip Coffee/ 12oz or 16oz/ 1.75/2.00 ", " ~ ", "Pour Over/ 12oz or 16oz/ 2.00/2.75 ", " ~ ", "French Press/ One Pot/ 4.50 ", " ~ ", "Cold Brew/ 12oz or 16oz/ 3.00/3.50 "],
                    
                },
                {
                    id: 2,
                    type: "Tea",
                    items:["Loose Leaf/ 12oz or 16oz/ 2.00/2.25 "," ~ ", "Tea Latte/ 12oz or 16oz/ 2.00/2.25 ", " ~ ", "Jasmine Pearl Teas/ One Pot/ Varies by Variety"],
                },
                {
                    id: 3,
                    type: "More",
                    items:["Hot Chocolate/ 12oz or 16oz/ 2.00/2.50 ", " ~ ", "Flavored Milk/ 12oz or 16oz/ 2.00/2.25 ", " ~ ", "Italian Soda/ 2.00 ", " ~ ", "Flavored Red Bull/ 2.75 ", " ~ ", "Pasteries and Treates/ Varies by Selection "],
                }
            ],
        };
    }

    toggle(e) {
        let event = e.target.dataset.event;
        this.setState({ collapse: this.state.collapse === Number(event) ? -1 : Number(event) });
    }


    render() {
        const {cards, collapse} = this.state;
        return(
            <div className="container">
                {cards.map(index => {
                    return(
                        <Card id="accordCard" key={index.id}>
                            <CardHeader id="headingTwo" onClick={this.toggle} data-event={index.id}>{index.type}</CardHeader>
                            <Collapse isOpen={collapse === index.id}>
                                 <CardBody>{index.items}</CardBody>
                            </Collapse>
                        </Card>
                    )
                })}
            </div>
        );
    }
}

export default Menu; 