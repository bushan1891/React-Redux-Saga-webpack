import React ,{Component} from 'react';
import {connect} from 'react-redux';
import { createAction } from 'redux-actions';
import { Router, Route, Link } from 'react-router'

class Test2 extends Component{
	render(){
		return (
			<div >
				Hey from Test 2
                <div>
                    <Link to='/test'>Back to Test </Link>	
                </div>
			</div>
			)
	}
}

function mapDispatchToProps(dispatch) {
  return {
  	test: ()=>dispatch(createAction('TEST')() ),
    dispatch,
  }
}

function mapStateToProps(state){
	return {
		user: state.user,
	}
}


export default connect (mapStateToProps,mapDispatchToProps)(Test2);