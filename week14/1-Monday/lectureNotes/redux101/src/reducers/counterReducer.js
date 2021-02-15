

let initialState = {
    count: 0,
    title: "Counter Reducer"
}

const counterReducer = (state, action) => {

    if (state === undefined){
        state = initialState
    }
    switch(action.type){

        case 'INCREASE':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREASE':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
    
}

export default counterReducer;