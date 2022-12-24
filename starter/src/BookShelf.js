import React from 'react';
import Book from "./Book";

const BookShelf = (props) => {
    return (<div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.bookList.filter(book => book.shelf === props.shelf).map((book) => <li key={book.id}>
                        <Book book={book} handleUpdateStatus={props.handleUpdateStatus}/></li>)}
                </ol>
            </div>
        </div>
    )
};

export default BookShelf;