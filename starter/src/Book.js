import React from 'react';
import BookShelfChanger from "./BookShelfChanger";

const Book = ({book, handleUpdateStatus}) => {
    const handleChangeStatus = (status) => {
        handleUpdateStatus(book, status);
    }

    return (<div className="book">
        <div className="book-top">
            <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                        `url(${book.imageLinks.smallThumbnail})`,
                }}
            ></div>
            <div className="book-shelf-changer">
                <BookShelfChanger handleChangeStatus={handleChangeStatus} shelf={book.shelf}/>
            </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
    </div>);
};

export default Book;