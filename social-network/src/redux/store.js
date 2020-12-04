import dialogsReducer from "./DialogsReducer"
import profileReducer from "./ProfileReducer"

let store = {
  _state: {
    profilePage: {
      post: [
        { id: 1, post: 'hi', likeCount: 11 },
        { id: 2, post: 'hello', likeCount: 12 },
      ],
      newPostText: '1'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'dima' },
        { id: 2, name: 'andre' },
        { id: 3, name: 'sveta' },
        { id: 4, name: 'ulya' },
        { id: 5, name: 'kris' }
      ],
      messages: [
        { id: 1, message: 'hi' },
        { id: 6, message: 'hi' },
        { id: 2, message: 'how are you' },
        { id: 3, message: 'hello' }
      ],
      newMessageText: ''
    }
  },
  _callSubscriber() {
    console.log('234234234')
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._callSubscriber(this._state)
  
    console.log('store', this._state.profilePage.newPostText)
    console.log('store', action)
  }
}


export default store;
window.store = store