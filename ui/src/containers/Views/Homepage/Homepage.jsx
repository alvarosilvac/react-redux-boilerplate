import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as clientActions from '../../../actions/clientActions';
import { routerActions } from 'react-router-redux';

class Homepage extends PureComponent{

  constructor(props){
    super(props)
    this.state={
      register: false
    }

    this.logOut = this.logOut.bind(this);
    this.register = this.register.bind(this);
  }

  componentDidMount(){
    if(this.props.client.name){
      this.setState({
        register: true
      })
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.client.name && !this.props.client.name){
      this.setState({
        register: false
      })
    }
  }

  logOut(){
    this.props.actions.client.logOut()
  }

  register(){
    this.props.actions.router.push('/sign-up')
  }

  render(){
    return(
      <div>
        { this.state.register ? 
          <h3>Hi, Mr. {this.props.client.lastname}</h3> : 
          <h3>User not registered!</h3> 
        }
        { this.state.register ?
          <button onClick={this.logOut}>Log out</button> :
          <button onClick={this.register}>Register</button>
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    client: state.client
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions:{
      client: bindActionCreators(clientActions, dispatch),
      router: bindActionCreators(routerActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)