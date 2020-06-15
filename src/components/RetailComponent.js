import React, { Component } from 'react';
import { Card, CardImg, CardSubtitle, CardText, CardBody, CardTitle, Button } from 'reactstrap';

class Retail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    
        render() {
            const retail = this.props.products.map(product => {
                return (
                    <div key={product.id} className="col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={product.image} alt={product.name} />
                            <CardBody>
                                <CardTitle>{product.name}</CardTitle>
                                <CardSubtitle>{product.style}</CardSubtitle>
                                <CardText>{product.description}</CardText>
                                <Button>Buy</Button>
                            </CardBody>
                        </Card>
                    </div>
                );
            });

        return (
            <div className="container">
                <div className="row">
                    {retail}
                </div>
            </div>
        );
    }
}

export default Retail;