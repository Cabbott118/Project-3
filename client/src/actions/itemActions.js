// Making requests to back-end
import { 
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM
} from './constants';

// Go to itemReducer and check type
export const getItems = () => {
    return {
        type: GET_ITEMS
    };
};

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    };
};

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    };
};