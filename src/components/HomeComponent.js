import React from 'react';
import { HomeCarousel } from './CarouselComponent';
import Coffee from './CoffeeInfoComponent';


function Home(props) {

    return (
        <React.Fragment>
             <div className="container-fluid p-0 m-0">
                <img class="img-fluid" src="./assets/images/home_bg_nav.jpg" alt="coffee"/>
            </div>
<<<<<<< HEAD
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <HomeCarousel />
                    </div>
                </div>
                <div className="container">
                    <FunCoffee funinfo={this.state.funinfo}/>
                </div>
=======
            <div className="container-fluid p-0 m-0">
                <HomeCarousel />
            </div>
            <div className="container" id="cardQF">
                <Coffee />
            </div>
            <div className="container-fluid p-0 m-0">
                <img class="img-fluid" src="./assets/images/img2.jpg" alt="coffee"/>
>>>>>>> 24da5bf11da0c55f2ada07a4dc57d83df683e306
            </div>
        </React.Fragment>
       
    );

}

export default Home;