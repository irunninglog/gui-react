import React from 'react';

class Athlete extends React.Component {

    render() {
        return (
            <div className="Athlete">
                <div>Logged in athlete:</div>
                <div>id: {this.props.athlete.id}</div>
                <div>name: {this.props.athlete.firstName} {this.props.athlete.lastName}</div>
                <div>location: {this.props.athlete.city}, {this.props.athlete.state}, {this.props.athlete.country}</div>
                <div>sex: {this.props.athlete.sex}</div>
            </div>
        );
    }

}

export default Athlete;