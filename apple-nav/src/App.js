import React from 'react';
import './App.css';
import NavContainer from './Components/NavContainer';
import { Route } from 'react-router-dom';
import SubNav from './Components/SubNav';
import data from './Data';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navs: []
    }
  }

  componentDidMount() {
    this.setState({
      navs: data.navs
    })
  }

  render() {
    return (
      <div className="App">
        <NavContainer navs={this.state.navs} />
        <Route path="/:productName" render={(props) => <SubNav  {...props} navs={this.state.navs} />} />
      </div>
    );
  }

}

export default App;
