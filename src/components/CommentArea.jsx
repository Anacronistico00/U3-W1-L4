import { Component } from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment';

const URL = 'https://striveschool-api.herokuapp.com/api/comments/';

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwMGRkNTBlYTI4NjAwMTUyOGI5NTgiLCJpYXQiOjE3MzY2NzcyMjksImV4cCI6MTczNzg4NjgyOX0.zLzKm3iXeO3hZs1lPOOWUq6Ap9M1YDAS06cSDSgRtm8';

class CommentArea extends Component {
  state = {
    comments: [],
  };

  getComments = async () => {
    const asin = this.props.asin;

    try {
      const response = await fetch(URL + asin, {
        headers: {
          Authorization: token,
        },
      });
      if (!response.ok) {
        throw new Error('Impossibile recuperare i dati dalla API');
      }

      const data = await response.json();
      console.log(data);

      this.setState({
        comments: data,
      });
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  componentDidMount() {
    this.getComments();
  }

  render() {
    return (
      <>
        <ul className='text-start p-0'>
          <h5 className='text-center'>Comments</h5>
          <CommentsList comments={this.state.comments} />
          <hr />
        </ul>
        <AddComment asin={this.props.asin} />
      </>
    );
  }
}

export default CommentArea;
