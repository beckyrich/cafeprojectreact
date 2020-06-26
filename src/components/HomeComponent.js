import React from 'react';
import { HomeCarousel } from './CarouselComponent';
import Coffee from './CoffeeInfoComponent';


function Home(props) {

    return (
        <React.Fragment>
             <div className="container-fluid p-0 m-0">
                <img class="img-fluid" src="./assets/images/home_bg_nav.jpg" alt="coffee"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <HomeCarousel />
                    </div>
                </div>
                <div className="containter">
                    <Coffee />
                </div>
            </div>
        </React.Fragment>
       
    );

}

export default Home;