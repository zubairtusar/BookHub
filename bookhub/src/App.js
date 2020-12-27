import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import Searchbar from './components/Searchbar';
import DropDown from './components/DropDown';
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
      <div style={{display:'flex', alignItems:'center', marginRight: 150}}>
        <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
        <DropDown/>
      </div>
      <BookList books={books}/>
    </div>
  </div>;
}
export default App;