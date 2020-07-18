import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

class MenuFood extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
            
    }
    render() {
        const foodItem = this.props.foods.map(food => {
            return (
                <div key={food.id} className="col-md-5 m-1">
                    <Card id="cardQF">
                        <CardImg width="100%" src={food.image} alt={food.name} />
                        <CardBody>
                            <CardTitle id="cardTitleQF">{food.name}</CardTitle>
                            <CardText>{food.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        });

        return (
            <div className="container" >
                <div className="row">
                    {foodItem}
                </div>
            </div>
        );
    }  
}

export default MenuFood; 