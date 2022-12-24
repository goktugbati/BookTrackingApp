import "./App.css";
import BookShelves from "./BookShelves";
import Search from "./Search";
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import * as BooksAPI from "./BooksAPI";

function App() {
    const [books, setBooks] = useState([]);


    useEffect(() => {
        const getBooks = async () => {
            const res = await BooksAPI.getAll();
            setBooks(res)
            console.log(res);
        }
        getBooks();
    }, []);

    const handleUpdateStatus = (book, status) => {
        book.shelf = status
        setBooks([...books])
    }

    return (
        <div className="app">
            <Routes>
                <Route exact path="/" element={<BookShelves books={books} handleUpdateStatus={handleUpdateStatus}/>} />
                <Route exact path="/search" element={<Search books={books} handleUpdateStatus={handleUpdateStatus}/>} />
            </Routes>
        </div>
    );
}

export default App;
