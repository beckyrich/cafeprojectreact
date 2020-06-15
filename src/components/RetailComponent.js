import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, InputGroupButtonDropdown } from 'reactstrap';

class Retail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
            products: [
                {
                    id: 0,
                    name: 'Morning Blend',
                    style: 'Ground',
                    size: '1 lb',
                    description: "Start your morning off right with this medium roast that will carry you through your day."
                },
                {
                    id: 1,
                    name: 'Morning Blend',
                    style: 'Whole Bean',
                    size: '1 lb',
                    description: "Start your morning off right with this medium roast that will carry you through your day."
                },
                {
                    id: 2,
                    name: 'Brunch Blend',
                    style: 'Ground',
                    size: '1 lb',
                    description: "Need an afternoon pick me up? This will get you through the afternoon slump."
                },
                {
                    id: 3,
                    name: 'Brunch Blend',
                    style: 'Whole Bean',
                    size: '1 lb',
                    description: "Need an afternoon pick me up? This will get you through the afternoon slump."
                },
                {
                    id: 4,
                    name: 'Dark Roast',
                    style: 'Ground',
                    size: '1 lb',
                    description: "Let this dark roast boost your mood and spirits with an aroma and taste that won't disappoint."
                },
                {
                    id: 5,
                    name: 'Dark Roast',
                    style: 'Ground',
                    size: '1 lb',
                    description: "Let this dark roast boost your mood and spirits with an aroma and taste that won't disappoint."
                },
                {
                    id: 5,
                    name: 'Dark Roast',
                    style: 'Ground',
                    size: '1 lb',
                    description: "Let this dark roast boost your mood and spirits with an aroma and taste that won't disappoint."
                },
                {
                    id: 6,
                    name: 'Tre Caffè',
                    style: 'Coffee Mug',
                    size: 'large',
                    description: "Let everyone know why you love your coffee so much."
                },
                {
                    id: 7,
                    name: 'I love Coffee',
                    style: 'Coffee Mug',
                    size: 'large',
                    description: "Because everyone knows coffee is life."
                },                                             
            ]
    }

    render() {
        return (

        );
    }
}