import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../actions/contactAction";



const initialState = [
    {
        name: "Asraful",
        id: "3SRW43DE",
        numOffList: 1,
        email: "mxasraful@outlook.com",
        phone: "01239329239",
        phoneCountry: "bd"
    },
    {
        name: "Asraful I",
        id: "23SER34DE",
        numOffList: 2,
        email: "mxasrafuli@outlook.com",
        phone: "01239333203",
        phoneCountry: "bd"
    },
    {
        name: "Asraful Islam",
        id: "CERT45R43",
        numOffList: 3,
        email: "asrafulislam@gmail.com",
        phone: "01334734845",
        phoneCountry: "bd"
    },
]

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const newContactItems = [...state, action.payload]
            return newContactItems
        case EDIT_ITEM:
            const newContactItemsWithoutItem = state.filter(item => item.id !== action.payload.id)
            const newEditedContactItems = [...newContactItemsWithoutItem, action.payload]
            return newEditedContactItems
        case DELETE_ITEM:
            const newDeletedContactItems = state.filter(item => item.id !== action.id)
            return newDeletedContactItems
        default:
            return state
    }
}

export default contactReducer