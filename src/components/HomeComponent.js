import React from 'react';
import { HomeCarousel } from './CarouselComponent';
import Coffee from './CoffeeInfoComponent';


function Home(props) {

    return (
        <React.Fragment>
             <div className="container-fluid p-0 m-0">
                <img class="img-fluid" src="./assets/images/home_bg_nav.jpg" alt="coffee"/>
            </div>
            <div className="container-fluid p-0 m-0">
                <HomeCarousel />
            </div>
            <div className="containter" id="cardQF">
                <Coffee />
            </div>
            <div className="container-fluid p-0 m-0">
                <img class="img-fluid" src="./assets/images/img2.jpg" alt="coffee"/>
            </div>
        </React.Fragment>
       
    );

}

export default Home;