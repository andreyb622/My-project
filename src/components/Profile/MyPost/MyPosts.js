import React from 'react'
import style from './style.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let textNewPost = React.createRef()

  let addPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = textNewPost.current.value
    props.updateNewPostTextAction(text)
  }

  let postElements = props.state.post.map(post => <Post message={post.post} id={post.id} likeCount={post.likeCount} />)

  return (
    <div className={style.myPost}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={textNewPost} value={props.state.newPostText}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts