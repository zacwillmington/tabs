const defaultState = {
    contacts: [],
    contactsHasErrors: false,
    contactsAreLoading: false,
    currentContact: {}
}

export default function contactsReducer(state = defaultState, action) {
    switch (action.type) {

      case 'CONTACTS_HAS_ERRORS':
            return { 
                ...state,
                contactsHasErrors: true,
                contactsAreLoading: false,            
                errors: action.errors
            }

        case 'CONTACTS_ARE_LOADING':
            return {
                ...state,
                contactsAreLoading: true,
                contactsHasErrors: false,
                }

        case 'CONTACTS_FETCH_DATA_SUCCESS':
            return {
                ...state,
                contactsAreLoading: false,
                contactsHasErrors: false,
                contacts: action.contacts.contacts
            }
        
        case 'ADD_TO_CONTACTS': 
            return {
                ...state,
                currentContact: action.contactData,
                contactsAreLoading: false,
                contacts: [...state.contacts, action.contactData]
            }

        case 'REMOVE_CONTACT': 
            return {
                ...state,
                contacts: state.contacts.filter( ({ id }) => id !== action.eventId)
            }

        default:
            return state;
    }
}
 