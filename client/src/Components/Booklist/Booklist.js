import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBooks } from "./actions";
import "./Booklist.css";

class Booklist extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const { books } = this.props;
    if (!books) {
      return <div>Loading</div>;
    }
    return (
      <div className="Booklist">
        {books.map((book, id) => {
          return (
            <p key={id}>
              {book.title}: {book.synopsis}
            </p>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.books.books
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getBooks }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booklist);
