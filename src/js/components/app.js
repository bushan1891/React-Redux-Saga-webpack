import React ,{Component} from 'react';
import {connect} from 'react-redux';
import { createAction } from 'redux-actions';
import Test from './TestContainer/test';
 
 class App extends Component{

		Submit(){
			const increment = this.props.increment;
			increment();
			}

	render(){
		const user = this.props.user;
		return(
			<div className="container">
				<p className="text">
					Hello World! {JSON.stringify(user.test)}
					<br/>
				<button onClick={this.Submit.bind(this)}>Click</button>	
				</p>
			</div>
			)
	}
} 

function mapDispatchToProps(dispatch) {
  return {
  	increment: ()=>dispatch(createAction('TEST')({payload:"pass your payload here"}) ),
    dispatch,
  }
}

function mapStateToProps(state) {
  return { user :state.test }
}

export default connect (mapStateToProps,mapDispatchToProps)(App);