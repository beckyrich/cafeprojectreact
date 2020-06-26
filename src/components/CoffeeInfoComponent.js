import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

class Coffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
           funinfo: [
            {
                id: 0,
                image: "img/caffe_sign.jpg",
                name: "neon sign",
                title: "Coffee Quotes",
                message: "Everyone should beleive in something. I believe I will have another coffee.",
                btntext: "Click for more quotes!",
                link: "https://www.thebaristalife.com/blogs/blog/barista-lifes-top-117-coffee-quotes"
            },
            {
                id: 1,
                image: "img/coffee_rawbean.jpg",
                name: "raw coffee bean",
                title: "Coffee Facts",
                message: "Did you know that coffee beans are technically seeds! They are the ptis of cherry-like berries. Plus, the berries can be eaten as food!",
                btntext: "Click for fun facts!",
                link: "https://www.goodhousekeeping.com/health/diet-nutrition/a30303/facts-about-coffee/",
            }
           ],
        };
    }
    
        render() {
            const coffee = this.state.funinfo.map(info => {
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