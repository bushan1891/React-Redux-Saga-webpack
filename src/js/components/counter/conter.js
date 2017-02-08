import React,{ Component} from 'react'; 
import {connect} from 'react-redux';
import { createAction } from 'redux-actions';
import {STOP_COUNTER,START_COUNTER,INCRIMENT} from './types';
class Counter extends React.Component{
    onStart(){
        this.props.startCounter();
    }
    onEnd(){
        this.props.stopCounter();
    }
    render(){
        if(this.props.counter.run){
            setTimeout(()=>this.props.increment(),1000);
        }
        return(
            <div>
                    <div className="dispaly"><h2>{this.props.counter.counter}</h2></div>
                    <div className="keys">
                        <div className="start">
                            <button className="btn btn-primary" onClick={this.onStart.bind(this)}>Start</button>
                            <button className="btn btn-primary" onClick={this.onEnd.bind(this)}>End</button>
                        </div>
                    </div>
            </div>
        )
    }
} 
function mapStateToProps(state){
    return{
        counter:state.counter
    }
}
function mapDispatchToProps(dispatch){
    return {
        startCounter :()=>{dispatch(createAction(START_COUNTER)())},
        stopCounter :()=>{dispatch(createAction(STOP_COUNTER)())},
        increment:()=>{dispatch(createAction(INCRIMENT)())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);