import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/team'>Meet the Team</Link></li>
                            <li><Link to='/menu'>Menu</Link></li>
                            <li><Link to='/location'>Location</Link></li>
                            <li><Link to='/retail'>Retail</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="https://www.google.com/maps/place/1912+Pike+Pl,+Seattle,+WA+98101/@47.6100877,-122.344653,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ab2cf3f403b:0x60daa107cbc7e9ec!8m2!3d47.6100877!4d-122.3424643">
                            <i class="fa fa-map-o" aria-hidden="true"></i> 1912 Pike Pl, Seattle, WA 98101</a><br />
                        <a role="button" className="btn btn-link" href="tel:+12065551234">
                            <i className="fa fa-phone" /> 1-206-555-1234</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer; 