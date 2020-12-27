import axios from 'axios';

const GoogleBooks = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/",
});

const getBooksByTerm=(SearchTerm, setBooks)=>{
    GoogleBooks.get('/volumes',
        {
        params: {
                //key: "",
                q: SearchTerm,
            }
        }).then((response)=>{
        console.log(response.data);
        setBooks(response.data.items);
    });
}

export { getBooksByTerm };