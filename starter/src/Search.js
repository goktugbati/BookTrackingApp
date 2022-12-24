import React, {useState} from 'react';
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

const Search = () => {
    const [searchResult, setSearchResult] = useState([]);
    const handleSearch = (e) => {
        searchBooks(e.target.value);
    }

    const handleUpdateStatus = (book, status) => {
        BooksAPI.update(book, status).then(() => {
        });
    }

    const searchBooks = async (query) => {
        if (query) {
            const res = await BooksAPI.search(query, 40);
            if (!res.error) {
                console.log(res);
                setSearchResult(res);
            } else {
                setSearchResult([]);
            }
        }
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <a
                    className="close-search"
                    href="/"
                >
                    Close
                </a>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchResult.map((book) => <li key={book.id}><Book
                        handleUpdateStatus={handleUpdateStatus}
                        book={book}/></li>)}
                </ol>
            </div>
        </div>);
};

export default Search;
