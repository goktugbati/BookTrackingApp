import React from 'react';
import PropTypes from "prop-types";

const BookShelfChanger = ({handleChangeStatus, shelf}) => {
    const shelves = [
        {
            id: 1,
            shelfName: 'currentReading',
            shelfDisplayName: 'Currently Reading'
        },
        {
            id: 2,
            shelfName: 'wantToRead',
            shelfDisplayName: 'Want to Read'
        },
        {
            id: 3,
            shelfName: 'read',
            shelfDisplayName: 'Read'
        },
        {
            id: 4,
            shelfName: 'none',
            shelfDisplayName: 'None'
        },
    ]

    const handleChangeOption = (e) => {
        handleChangeStatus(e.target.value);
    }
    return (
        <div className="book-shelf-changer">
            <select onChange={handleChangeOption} value={shelf ? shelf : 'none'}>
                <option disabled>
                    Move to...
                </option>
                {shelves.map(
                    shelf =>
                        <option key={shelf.id} value={shelf.name}>
                            {shelf.shelfDisplayName}
                        </option>)
                }
            </select>
        </div>
    )
}

export default BookShelfChanger;

BookShelfChanger.propTypes = {
    shelf: PropTypes.string.isRequired,
    handleChangeStatus: PropTypes.func.isRequired
};
