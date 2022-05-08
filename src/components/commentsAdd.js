import React, { Component } from 'react';

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
        <p 
        style={{   textAlign: 'left' }}
        >
        <i class="fa fa-user" aria-hidden="true"></i> {eachComment}
        </p>
    ))
    return (
     <div>
        <div style={{}}>
          <div>
          <div style={{border: '1px solid white', padding: '10px', fontFamily: ' Roboto,sans-serif'}}>
            <textarea
          placeholder="Enter your comment here..."
          value={this.state.usersComment}
          style={{ fontSize: '20px' , background: '#f7f2ff', width: '97%' ,  border: '1px solid #E5E5E5', borderRadius: '4px', padding: '10px', marginRight: '20px'}}
          onChange={e => this.userUpdateComment(e)}>
          </textarea>                   
<br/>
    <button 
       onClick={this.postsComment}
       style={{ background: '#7c21d6', width: '110px', color: 'white', fontSize: '20px',cursor: 'pointer', float: 'left', border: 'none', height: '40px' }}

      //  style={{ fontSize: '24px', background: '#fff' , cursor: 'pointer', float: 'left'}}
        >Comment</button>
        <br/>
        <br/>
                 <div
                  style={{ background: '#f7f2ff', padding: '10px',}}>
                 <p style={{textAlign: 'left', display: 'block', color:'rgb(80, 80, 80)'}}><b>Comments ({listOfComments.length})</b> </p> 
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
