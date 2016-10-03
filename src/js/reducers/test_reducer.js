
export function test(state={test:1},action){
	switch(action.type){ 
		case 'TEST':
		return {...state,test: state.test+1 }	
	}
	return state;
}