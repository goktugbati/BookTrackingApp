import React, {useEffect, useState} from 'react';
import BookShelfChanger from "./BookShelfChanger";
import * as BooksAPI from "./BooksAPI";

const Book = ({book,handleUpdateStatus}) => {
    const [shelf, setShelf] = useState('none');
    const handleChangeStatus = (status) => {
        handleUpdateStatus(book, status);
    }


    useEffect(() => {
        const getBookShelf = async () => {
            const res = await BooksAPI.get(book.id);
            setShelf(res.shelf);
        }

        if (book.shelf){
            setShelf(book.shelf);
        }else {
            getBookShelf();
        }
        return () => {
            setShelf('none');
        };
    }, [book.id, book.shelf]);


    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                            book.imageLinks ? `url(${book.imageLinks.smallThumbnail})` : '',
                    }}
                ></div>
                <BookShelfChanger handleChangeStatus={handleChangeStatus} shelf={shelf}/>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    );
};

export default Book;