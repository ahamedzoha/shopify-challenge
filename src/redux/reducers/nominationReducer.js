const INITIAL_STATE = {
    nominees: [],
};

const nominationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_NOMINEE":
            return {
                ...state,
                nominees: [...state.nominees, action.payload],
            };

        case "REMOVE_NOMINEE":
            return {
                ...state,
                nominees: state.nominees.filter(
                    (nominee) => nominee.id !== action.payload.id
                ),
            };
        default:
            return state;
    }
};

export default nominationReducer;
