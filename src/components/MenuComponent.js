import React, { Component } from 'react';
import { Card, CardHeader, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
            
    }
    render() {
        const hot = this.props.hotdrinks.map(hotdrink => {
            return (
                <div key={hotdrink.id} className="col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={hotdrink.image} alt={hotdrink.name} />
                        <CardBody>
                            <CardTitle>{hotdrink.name}</CardTitle>
                            <CardText>{hotdrink.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {hot}
                </div>
            </div>
        );
    }  
}

export default Menu; 