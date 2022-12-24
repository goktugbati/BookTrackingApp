import React from 'react';

const SearchBooksBar = ({handleSearch}) => {
    return (
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
    )
}

export default SearchBooksBar;