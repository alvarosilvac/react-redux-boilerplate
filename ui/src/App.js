import React, { Component } from 'react';
import './styles/App.css';
import Routes from './routes';
import { withRouter } from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      location: this.props.location
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({location: nextProps.location})
  }

  render() {
    return (
        <div>
          <Routes location={ this.state.location.pathname }/>
        </div>
    );
  }
}

export default withRouter(App);
