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
                    <div key={product.id} className="col-md-6">
                        <Card className="center" id="cardQF">
                            <CardImg width="100%" src={product.image} alt={product.name} />
                            <CardBody>
                                <CardTitle id="cardTitleQF">{product.name}</CardTitle>
                                <CardSubtitle>{product.style}</CardSubtitle>
                                <CardText>{product.description}</CardText>
                                <Button style={{backgroundColor:"#393E46", color: "#EEEEEE"}} type="submit" size="lg" block>Buy</Button>
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