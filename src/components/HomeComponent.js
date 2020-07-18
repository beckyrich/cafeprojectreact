import React from 'react';
import { HomeCarousel } from './CarouselComponent';
import Coffee from './CoffeeInfoComponent';
import Accordion from './AccordionComponent';


function Home(props) {

    return (
        <React.Fragment>
             <div className="container-fluid p-0 m-0">
                <img className="img-fluid" src="./assets/images/home/home_bg_nav.jpg" alt="coffee"/>
            </div>
            <div className="container-fluid p-0 m-0" id="accordCard">
                <Accordion />
            </div>
            <div className="container-fluid p-0 m-0">
                <HomeCarousel />    
            </div>
            <div className="container-fluid p-0 m-0" id="cardQF">
                <Coffee />
            </div>
            <div className="container-fluid p-0 m-0">
                <img className="img-fluid" src="./assets/images/home/img2.jpg" alt="coffee" />
            </div>
        </React.Fragment>
    );
}

export default Home;