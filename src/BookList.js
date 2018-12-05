import React, { Component } from "react";
import SearchBar from './SearchBar';

import BookTable from './BookTable';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredBooks: this.props.books
    };

    this.filterBooks = this.filterBooks.bind(this);
  }

  filterBooks(query) {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book => {
      return `${book.title}`
        .toLowerCase()
        .includes(query);
    });
    this.setState({ filteredBooks: filteredBooks });
  }

  
    render() {
      return (
        <div>
        <SearchBar changeHandler={this.filterBooks}></SearchBar>
        <BookTable books={this.state.filteredBooks}></BookTable>
        </div>
        
      );
    }
  }
  
  export default BookList;
  