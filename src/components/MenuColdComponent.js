import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

class MenuCold extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
            
    }
    render() {
        const cold = this.props.colddrinks.map(colddrink => {
            return (
                <div key={colddrink.id} className="col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={colddrink.image} alt={colddrink.name} />
                        <CardBody>
                            <CardTitle>{colddrink.name}</CardTitle>
                            <CardText>{colddrink.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {cold}
                </div>
            </div>
        );
    }  
}

export default MenuCold; 