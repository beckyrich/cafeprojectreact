import React, { Component } from 'react';

class Retail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 0,
                    name: 'Morning Blend',
                    image: 'assets/images/comingsoon.jpeg',
                    style: 'Ground',
                    size: '1 lb',
                    description: "Start your morning off right with this medium roast that will carry you through your day."
                },
                {
                    id: 1,
                    name: 'Morning Blend',
                    image: 'assets/images/comingsoon.jpeg',
                    style: 'Whole Bean',
                    size: '1 lb',
                    description: "Start your morning off right with this medium roast that will carry you through your day."
                },
                {
                    id: 2,
                    name: 'Brunch Blend',
                    image: 'assets/images/comingsoon.jpeg',
                    style: 'Ground',
                    size: '1 lb',
                    description: "Need an afternoon pick me up? This will get you through the afternoon slump."
                },
                {
                    id: 3,
                    name: 'Brunch Blend',
                    image: 'assets/images/comingsoon.jpeg',
                    style: 'Whole Bean',
                    size: '1 lb',
                    description: "Need an afternoon pick me up? This will get you through the afternoon slump."
                },
                {
                    id: 4,
                    name: 'Dark Roast',
                    image: 'assets/images/comingsoon.jpeg',
                    style: 'Ground',
                    size: '1 lb',
                    description: "Let this dark roast boost your mood and spirits with an aroma and taste that won't disappoint."
                },
                {
                    id: 5,
                    name: 'Dark Roast',
                    image: 'assets/images/comingsoon.jpeg',
                    style: 'Ground',
                    size: '1 lb',
                    description: "Let this dark roast boost your mood and spirits with an aroma and taste that won't disappoint."
                },
                {
                    id: 6,
                    name: 'Tre Caffè Apparel',
                    image: 'assets/images/comingsoon.jpeg',
                    style: 'Hoodie',
                    size: 'Various',
                    description: "Show us your love for Tre Caffè!"
                },
                {
                    id: 7,
                    name: 'Tre Caffè',
                    image: 'assets/images/comingsoon.jpeg',
                    style: 'Coffee Mug',
                    size: 'large',
                    description: "Let everyone know why you love your coffee so much."
                },
                {
                    id: 8,
                    name: 'I love Coffee',
                    image: 'assets/images/comingsoon.jpeg',
                    style: 'Coffee Mug',
                    size: 'large',
                    description: "Because everyone knows coffee is life."
                },                                             
            ]
        };
    }
    
        render() {
            const retail = this.state.products.map(product => {
                return (
                    <div className="col">
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <h4>{product.style}</h4>
                        <p>{product.description}</p>
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