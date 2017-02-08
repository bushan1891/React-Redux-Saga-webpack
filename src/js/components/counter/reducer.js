import {STOP_COUNTER,START_COUNTER,INCRIMENT} from './types';

const initial_state={
    counter:0,
    run:false
}
export default function(state=initial_state,action){
    switch(action.type){
        case STOP_COUNTER:return {...state,run:false};
        case START_COUNTER:return {...state,run:true};
        case INCRIMENT:return {...state,counter:state.counter+1}
    }
    return state;
}