import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Team from './TeamComponent';
import Location from './LocationComponent';
import Retail from './RetailComponent';
import { PRODUCTS } from '../shared/products';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {}
        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' componet={Home} />
                    <Route exact path='/menu' component={Menu} />
                    <Route exact path='/team' component={Team} />
                    <Route exact path='/location' component={Location} />
                    <Route exact path='/retail' component={Retail} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>  
        );

export default Main; 
       

