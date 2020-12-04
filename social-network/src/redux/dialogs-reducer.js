const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESAGE_TEXT = 'UPDATE_NEW_MESAGE_TEXT'

let initialState = {
  dialogs: [
    { id: 1, name: 'dima' },
    { id: 2, name: 'andre' },
    { id: 3, name: 'sveta' },
    { id: 4, name: 'ulya' },
    { id: 5, name: 'kris' }
  ],
  messages: [
    { id: 1, message: 'hi' },
    { id: 2, message: 'how are you' },
    { id: 3, message: 'hello' }
  ],
  newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      let text = state.newMessageText
      return {
        ...state,
        messages: [ ...state.messages, {id: 3, message: text} ],
        newMessageText:''        
      }
    case UPDATE_NEW_MESAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessageText
      }
    default:
      return state
  }
}

export const addMessageCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextCreator = (text) => {
  return ({ type: UPDATE_NEW_MESAGE_TEXT, newMessageText: text })
}

export default dialogsReducer