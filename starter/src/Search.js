import React, {useEffect, useState} from 'react';
import Book from "./Book";
import {useNavigate} from "react-router-dom";

const Search = ({books, handleUpdateStatus}) => {
    const [searchResult, setSearchResult] = useState([]);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        const currentSearchResult = books.filter(book => book.title.toLowerCase().includes(e.target.value));
        setSearchResult(currentSearchResult);
    }

    useEffect(() => {
        setSearchResult(books);
    }, [books]);


    return (
        <div className="search-books">
            <div className="search-books-bar">
                <a
                    className="close-search"
                    onClick={navigate('/')}
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
                    {searchResult.map((book) => <li key={book.id}><Book handleUpdateStatus={handleUpdateStatus}
                                                                        book={book}/></li>)}
                </ol>
            </div>
        </div>);
};

export default Search;
