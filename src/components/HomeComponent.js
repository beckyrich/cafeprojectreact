import React from 'react';
import { HomeCarousel } from './CarouselComponent';


function Home(props) {

    return (
        <React.Fragment>
             <div className="container-fluid p-0 m-0">
                <img class="img-fluid" src="./assets/images/home_bg_nav.jpg" alt="coffee"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col d-block w-100">
                        <HomeCarousel />
                    </div>
                </div>
                
            </div>
        </React.Fragment>
       
    );

}

export default Home;