import { 
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM
} from '../actions/constants';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    items: [
        { 
            id: uuidv4(), 
            vin: '123456789tettffss', 
            brand: 'Example Brand 1', 
            typetrailer: 'Example Type 1', 
            dimensions: '24x8x4', 
            weight: '8000'
        },
        { 
            id: uuidv4(), 
            vin: '12345678988888888', 
            brand: 'Example Brand 2', 
            typetrailer: 'Example Type 2', 
            dimensions: '20x6x4', 
            weight: '6000'
        },
        { 
            id: uuidv4(), 
            vin: '12345678999999999', 
            brand: 'Example Brand 3', 
            typetrailer: 'Example Type 3', 
            dimensions: '32x10x4', 
            weight: '9500'
        },
        { 
            id: uuidv4(), 
            vin: '12345678911111111', 
            brand: 'Example Brand 4', 
            typetrailer: 'Example Type 4', 
            dimensions: '12x8x4', 
            weight: '4000'
        },
    ]
};

export default function(state = initialState, action) {
    // When object comes in from itemActions, test the type
    switch(action.type) {
        case GET_ITEMS:
            return {
                // Return items state
                ...state
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
                items: state.items.filter(item => item.id !== action.payload)
            };
        default:
            // Return initialState from current items
            return state;
    }
}