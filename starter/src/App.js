import "./App.css";
import BookShelves from "./BookShelves";
import Search from "./Search";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route exact path="/" element={<BookShelves/>}/>
                <Route exact path="/search" element={<Search/>}/>
            </Routes>
        </div>
    );
}

export default App;
