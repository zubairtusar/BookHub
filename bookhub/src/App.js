import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import Searchbar from './components/Searchbar';
import BookList from './components/BookList';
import { getBooksByTerm} from "./api/GoogleBooks";



const App = () =>{
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  const handleSubmit = async(event)=>{
    event.preventDefault();
    await getBooksByTerm(searchTerm, setBooks);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  return <div>
    <div>
      <Navbar/>
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit}/>
      <BookList books={books}/>
    </div>
  </div>;
}
export default App;