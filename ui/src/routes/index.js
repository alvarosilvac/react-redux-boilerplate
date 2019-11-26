import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Homepage } from '../containers/Views';
import { connect } from 'react-redux';

class Routes extends PureComponent{

  constructor(props){
    super(props);

    this.getName = this.getName.bind(this)
  }

  getName(){
    return this.props.client.name
  }
  
  render(){
    return(
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    );
  }
}

function mapStateToProps(state){
  return{
    client: state.client
  }
}

export default connect(mapStateToProps)(Routes)