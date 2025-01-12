import SingleBook from './SingleBook';
import { Component } from 'react';

class BookList extends Component {
  state = {
    search: '',
  };

  handleSearch = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    const filteredBooks = this.props.books.filter((book) =>
      book.title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <div>
        <div>
          <h1 className='text-center my-3 fw-bolder'>Welcome to My Library!</h1>
        </div>
        <div style={{ margin: '1rem', textAlign: 'center' }}>
          <input
            type='text'
            placeholder='Search for a Book...'
            value={this.state.search}
            onChange={this.handleSearch}
            style={{ padding: '0.5rem', width: '50%', fontSize: '1rem' }}
          />
        </div>
        <div className='d-flex flex-wrap justify-content-center'>
          {filteredBooks.map((book, i) => (
            <SingleBook key={i} book={book} />
          ))}
        </div>
      </div>
    );
  }
}

export default BookList;
