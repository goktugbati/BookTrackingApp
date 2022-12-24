import React from 'react';

const BookShelfChanger = ({handleChangeStatus, shelf}) => {

    const handleChangeOption = (e) => {
        handleChangeStatus(e.target.value);
    }
 return(
     <div>
         <select onChange={handleChangeOption} value={shelf ? shelf : 'none'}>
             <option value="none" disabled>
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