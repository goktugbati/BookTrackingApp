import React, {useEffect, useState} from 'react';
import BookShelf from "./BookShelf";
import * as BooksAPI from "./BooksAPI";

const BookShelves = () => {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        const res = await BooksAPI.getAll();
        setBooks(res)
    }

    useEffect(() => {
        getBooks();
        return () => {
            setBooks([]);
        };
    }, []);

    const handleShelfChange = (book, status) => {
        BooksAPI.update(book, status).then(() => {
            book.shelf = status
            setBooks([...books])
        });
    }

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf handleUpdateStatus={handleShelfChange} bookList={books}
                               shelfTitle="Currently Reading" shelf='currentlyReading'/>
                    <BookShelf handleUpdateStatus={handleShelfChange} bookList={books}
                               shelfTitle="Want To Read" shelf='wantToRead'/>
                    <BookShelf handleUpdateStatus={handleShelfChange} bookList={books} shelfTitle="Read"
                               shelf='read'/>
                </div>
            </div>
            <div className="open-search">
                <a href='/search'>Add a book</a>
            </div>
        </div>    );
};

export default BookShelves;
