let INITIAL_STATE = {
    activities: []
}

const todo = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state,
                activities: action.payload
            }
        default:
            return state
    }
}

export default todo