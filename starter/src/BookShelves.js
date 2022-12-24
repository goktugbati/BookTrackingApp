import React from 'react';
import BookShelf from "./BookShelf";
import {useNavigate} from "react-router-dom";

const BookShelves = ({books, handleUpdateStatus}) => {
    const navigate = useNavigate();

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf handleUpdateStatus={handleUpdateStatus} bookList={books}
                               shelfTitle="Currently Reading" shelf='currentlyReading'/>
                    <BookShelf handleUpdateStatus={handleUpdateStatus} bookList={books}
                               shelfTitle="Want To Read" shelf='wantToRead'/>
                    <BookShelf handleUpdateStatus={handleUpdateStatus} bookList={books} shelfTitle="Read"
                               shelf='read'/>
                </div>
            </div>
            <div className="open-search">
                <a onClick={() => {
                    navigate('/search');
                }}>Add a book</a>
            </div>
        </div>    );
};

export default BookShelves;
