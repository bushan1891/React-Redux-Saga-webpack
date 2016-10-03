import React ,{Component} from 'react';
import {connect} from 'react-redux';
import { createAction } from 'redux-actions';

class Test extends Component{
	render(){
		return (
			<div>
				Hey from Test
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


export default connect (mapStateToProps,mapDispatchToProps)(Test);