import Dialogs from './Dialogs'
import { updateNewMessageTextCreator, addMessageCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText 
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => { dispatch(addMessageCreator()) },
    updateNewMessageText: (body) => {dispatch(updateNewMessageTextCreator(body))}
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer



