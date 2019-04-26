import React from 'react';
import logo from './logo.svg';
import './App.css';
import Athlete from './Athlete';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const AthleteQuery = () => (
  <Query
    query={gql`
      {
        athlete {
          id
          firstName
          lastName
          city
          state
          country
          sex
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div>
          <Athlete athlete={data.athlete}/>
        </div>
      );
    }}
  </Query>
);

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <AthleteQuery />
        
        </header>
      </div>
    );
  }
}

export default App;
