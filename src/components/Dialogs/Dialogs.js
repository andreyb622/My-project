import React from 'react';
import style from './style.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />)
  let messagesElements = props.dialogsPage.messages.map(message => <Message text={message.message} id={message.id} />)
  let textNewMessage = React.createRef()

  let newMessageText = props.newMessageText

  let addMessage = () => {
    props.sendMessage()
  }

  let onMessageNewTextChance = (e) => {
    let body = e.target.value
    props.updateNewMessageText(body)
  }

  return (

    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
        <div className={style.addMessage}>
          <div>
            <textarea onChange={onMessageNewTextChance} value={newMessageText} placeholder='Enter your message' ref={textNewMessage}></textarea>
          </div>
          <div>
            <button onClick={addMessage}>Send</button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Dialogs