import React, {useState} from 'react';
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
import SearchBooksBar from "./SearchBooksBar";

const Search = () => {
    const [searchResult, setSearchResult] = useState([]);

    const handleSearch = (e) => {
        searchBooks(e.target.value);
    }

    const handleUpdateStatus = (book, status) => {
        BooksAPI.update(book, status);
    }

    const searchBooks = async (query) => {
        if (query) {
            const res = await BooksAPI.search(query, 40)
            if (!res.error) {
                setSearchResult(res);
            }else {
                setSearchResult([]);
            }
        }else {
            setSearchResult([]);
        }
    }

    return (
        <div className="search-books">
            <SearchBooksBar handleSearch={handleSearch}/>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchResult !== 'undefined' ? searchResult.map((book) =>
                        <li key={book.id}>
                            <Book
                                handleUpdateStatus={handleUpdateStatus}
                                book={book}/>
                        </li>) : ''}
                </ol>
            </div>
        </div>);
};

export default Search;
