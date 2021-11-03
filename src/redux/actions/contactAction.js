export const ADD_ITEM = "ADD_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export const addItem = (id, name, email, phone) => {
    return {type: ADD_ITEM, id, name, email, phone}
}

export const removeItem = (id, phone) => {
    return {type: ADD_ITEM, id, phone}
}