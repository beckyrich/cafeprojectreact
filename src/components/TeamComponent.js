import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Team extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
 
        };
    }

        render() {
            const team = this.props.teamMembers.map(teamMember => {
                return (
                    <div key={teamMember.id} className="col-md-6">
                        <Card className="center" id="cardQF">
                            <CardImg width="100%" src={teamMember.image}  alt={teamMember.name}/>
                            <CardBody>
                                <CardTitle  id="cardTitleQF">{teamMember.name}</CardTitle>
                                <CardText>{teamMember.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                );
            });
                return (
                    <React.Fragment>
                        <div className="container-fluid">
                            <div className="row">
                                {team}
                            </div>
                        </div>
                        <div className="container-fluid center p-1 mb-2">
                            <img className="img-fluid" src="./assets/images/team/passion.png" alt="quote" />
                        </div>
                    </React.Fragment>
        );
    }
}
    

export default Team;
