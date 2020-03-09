import { 
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM,
    ITEMS_LOADING
} from '../actions/constants';

const initialState = {
    items: [],
    loading: false
};

export default function(state = initialState, action) {
    // When object comes in from itemActions, test the type
    switch(action.type) {
        case GET_ITEMS:
            return {
                // Return items state
                ...state,
                items: action.payload,
                loading: false
            };

        case ADD_ITEM: 
            return {
                ...state,
                items: [action.payload, ...state.items]
            };

        case DELETE_ITEM:
            return {
                // Return items state
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            };

        case ITEMS_LOADING: 
            return {
                // Return items state
                ...state,
                loading: true
            };
            
        default:
            // Return initialState from current items
            return state;
    };
};