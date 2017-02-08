import React ,{Component} from 'react';
import {connect} from 'react-redux';
import { createAction } from 'redux-actions';
import Test from './TestContainer/test';
import Header from './header/header';
import Counter from './counter/conter';
 import { Router, Route, Link } from 'react-router'
 class App extends Component{

		Submit(){
			const increment = this.props.increment;
			increment();
			}

	render(){
		const user = this.props.user;
		return(
			<div className="">
				<Header />
				<div className="text">
					Hello World! {JSON.stringify(user.test)}
					<br/>
				<button className=" btn btn-default" onClick={this.Submit.bind(this)}>Click</button> 
				<Link to='/test'>GoToTestRoute</Link>	
				{this.props.children}
				</div>

				<div className="">
				</div>

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