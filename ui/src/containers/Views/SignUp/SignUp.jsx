import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as clientActions from '../../../actions/clientActions';
class SignUp extends PureComponent{

  constructor(props){
    super(props)
    this.state={
      name: '',
      lastname: '',
      message:''
    }

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChangeName(e){
    this.setState({
      name: e.target.value
    })
  }

  onChangeLastName(e){
    this.setState({
      lastname: e.target.value
    })
  }

  submit(){
    if(this.state.name && this.state.lastname){
      this.props.actions.client.setName(this.state.name);
      this.props.actions.client.setLastName(this.state.lastname);
    }
    else{
      this.setState({
        message: 'Fields empty!'
      })
    }
  }

  render(){
    return(
      <div>
        <input onChange={this.onChangeName} value={this.state.name}/>
        <input onChange={this.onChangeLastName} value={this.state.lastname}/>
        <button onClick={this.submit}>Submit</button>
        { this.state.message ?
          <h3>{this.state.message}</h3> :
          null
        }
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions:{
      client: bindActionCreators(clientActions, dispatch)
    }
  }
}

export default connect(null, mapDispatchToProps)(SignUp)