import React from 'react';
import Book from "./Book";

const BookShelf = ({bookList, shelfTitle, shelf, handleUpdateStatus}) => {
    return (<div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {bookList.filter(book => book.shelf === shelf).map((book) => <li key={book.id}>
                        <Book book={book} handleUpdateStatus={handleUpdateStatus}/></li>)}
                </ol>
            </div>
        </div>
    )
};

export default BookShelf;