import {HEADER_LOAD,HEADER_LOAD_COMPLETE} from './types';

export default function(state={},action){
    switch(action.type){
        case HEADER_LOAD_COMPLETE: return {...state,headerLoad:true}
    }
    return state;
}