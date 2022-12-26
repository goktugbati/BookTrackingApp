import React from 'react';
import PropTypes from "prop-types";

const BookShelfChanger = ({handleChangeStatus, shelf}) => {

    const handleChangeOption = (e) => {
        handleChangeStatus(e.target.value);
    }
 return(
     <div className="book-shelf-changer">
         <select onChange={handleChangeOption} value={shelf ? shelf : 'none'}>
             <option disabled>
                 Move to...
             </option>
             <option value="currentlyReading">
                 Currently Reading
             </option>
             <option value="wantToRead">Want to Read</option>
             <option value="read">Read</option>
             <option value="none">None</option>
         </select>
     </div>
 )
}

export default BookShelfChanger;

BookShelfChanger.propTypes = {
    shelf: PropTypes.string.isRequired,
    handleChangeStatus: PropTypes.func.isRequired
};
