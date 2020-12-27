import axios from 'axios';

const GoogleBooks = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/",
});

const getBooksByTerm=(SearchTerm, setBooks, start_Index, setTotalPages)=>{
    GoogleBooks.get('/volumes',
        {
        params: {
                //key: "",
                q: SearchTerm,
                startIndex: start_Index,
                maxResults: 20 
            }
        }).then((response)=>{
        console.log(response.data);
        setBooks(response.data.items);
        setTotalPages(Math.ceil(response.data.totalItems/20));
    });
}

const getBookDetails = (bookID, setCurrentBook) => {
    GoogleBooks.get('volumes/'+bookID)
        .then((response) => {
            console.log("book", response.data);
            setCurrentBook(response.data);
        });
}


export { getBooksByTerm, getBookDetails };