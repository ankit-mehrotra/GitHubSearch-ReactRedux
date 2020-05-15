import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunk_action_creator } from './actions/fetchAction';
import UserInfo from './userInfo';

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const username = this.getUsername.value;
    this.props.dispatch(thunk_action_creator(username));
    this.getUsername.value= '';
  };


  render() {
    
    return (
     <div className='container'>
       <form onSubmit={this.handleSubmit} className='form'>
         <h2 className='title'>Enter you GitHub Username:</h2>
         <input type='text' placeholder='Enter your GitHub Username' ref={input => (this.getUsername = input)}/>
         <button className='button' type='submit'>Submit</button>
       </form>
       {this.props.data.isFetching ? <h3>Loading ...</h3> : null}
       {this.props.data.isError ? (<h3 className='error'>No such user exists</h3>) : null}
       {Object.keys(this.props.data.userData).length > 0 ? (<UserInfo user={this.props.data.userData}/>): null}

     </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state
  }
}
export default connect(mapStateToProps)(App);
