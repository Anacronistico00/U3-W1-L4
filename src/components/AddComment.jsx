import { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

const URL = 'https://striveschool-api.herokuapp.com/api/comments/';

const token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzYwMGRkNTBlYTI4NjAwMTUyOGI5NTgiLCJpYXQiOjE3MzY2NzcyMjksImV4cCI6MTczNzg4NjgyOX0.zLzKm3iXeO3hZs1lPOOWUq6Ap9M1YDAS06cSDSgRtm8';

const initialState = {
  comment: '',
  rate: 1,
};

class AddComment extends Component {
  state = {
    comments: {
      ...initialState,
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.postComment();
  };

  postComment = async () => {
    try {
      const response = await fetch(URL + this.props.asin, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({
          ...this.state.comments,
          elementId: this.props.asin,
        }),
      });
      if (!response.ok) {
        throw new Error('Impossibile recuperare i dati dalla Api');
      }

      const data = await response.json();
      console.log('Commento inviato con successo', data);
      this.setState({
        comments: {
          ...initialState,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label> Inserisci Commento</Form.Label>
            <Form.Control
              as='textarea'
              rows={4}
              value={this.state.comments.comment}
              onChange={(e) => {
                this.setState({
                  comments: {
                    ...this.state.comments,
                    comment: e.target.value,
                  },
                });
              }}
            ></Form.Control>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Valutazione</Form.Label>
            <Form.Select
              aria-label='Table size'
              value={this.state.comments.rate}
              onChange={(e) => {
                this.setState({
                  comments: {
                    ...this.state.comments,
                    rate: Number(e.target.value),
                  },
                });
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
          </Form.Group>

          <Button variant='success' type='submit'>
            Lascia un commento
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;
