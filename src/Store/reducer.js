const initialState = {
    counter: 0,
    name: "Dheeraj",
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + action.payload
            }


        case 'DEC_COUNTER':
            return {
                ...state,
                counter: state.counter - action.payload
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
        case 'DELETE_RESULT':
            const updatedArray = state.results.filter(result => result.id !== action.resultElid)
            return {
                ...state,
                results: updatedArray
            }

        default:
            return state;
    }
}
export default reducer;