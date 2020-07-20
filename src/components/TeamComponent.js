import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Team extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
 
        };
    }

        render() {
            const team = this.state.teamMembers.map(teamMember => {
                return (
                    <div key={teamMember.id} className="col-md-5 m-1">
                        <Card id="teamCard">
                            <CardImg width="100%" src={teamMember.image} alt={teamMember.name} />
                            <CardBody>
                                <CardTitle>{teamMember.name}</CardTitle>
                                <CardText>{teamMember.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                );
            });
                return (
                    <div className="container">
                        <div className="row">
                            {team}
                        </div>
                    </div>
        );
    }
}
    

export default Team;
