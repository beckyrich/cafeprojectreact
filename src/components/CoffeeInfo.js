import React, { Component } from 'react';
import { Card, CardImg, CardSubtitle, CardText, CardBody, CardTitle, Button } from 'reactstrap';

class Coffee extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    
        render() {
            const coffee = this.props.funinfo.map(info => {
                return (
                    <div key={info.id} className="col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={info.image} alt={info.name} />
                            <CardBody>
                                <CardTitle>{info.title}</CardTitle>
                                <CardText>{info.message}</CardText>
                                <Button href={info.link}>{info.btntext}</Button>
                            </CardBody>
                        </Card>
                    </div>
                );
            });

            return (
                <div className="container">
                    <div className="row">
                        {coffee}
                    </div>
                </div>
            );
        }
}

export default Coffee;