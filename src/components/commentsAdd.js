import React, { Component } from 'react';
import './commentsAdd.css';

class CommentsAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments : [],
      usersComment:null,
    }
    this.postsComment = this.postsComment.bind(this);
  }


  userUpdateComment(e) {
    this.setState({ usersComment: e.target.value })
  }

  
  postsComment() {
    if((this.state.usersComment.length))
    {
      this.setState({
        usersComment: "",
      })
      console.log('postsComment fired');
      this.state.comments.push(this.state.usersComment);
    }
  }


  render() {
    const listOfComments = this.state.comments.map(eachComment => (
        <p className='userIcon'>
          <i class="fa fa-user" aria-hidden="true"></i> {eachComment}
        </p>
    ))


    return (
      <div>
        <div>
          <div>

            <div className='App-Comments'>
              <textarea
                placeholder="Enter your comment here..."
                value={this.state.usersComment}
                onChange={e => this.userUpdateComment(e)}>
              </textarea> 

              <br/>

              <button className='comment-btn' onClick={this.postsComment}>
                  Comment
              </button>

              <br/>
              <br/>

              <div className='commentsList'>
                <p className='commentsCount'><b>Comments({listOfComments.length})</b> </p> 
                  {listOfComments}
              </div>
              
            </div>
          </div>
        </div>
     
      </div>
    );
  }
}

export default CommentsAdd;
