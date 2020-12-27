import React, { useState, useEffect } from "react";
import { getBookDetails } from "./../api/GoogleBooks";
import { Link } from "react-router-dom";

const BookDetails = (props) => {
    const [currentBook, setCurrentBook] = useState({});

    useEffect(() => {
        getBookDetails(props.location.book_id, setCurrentBook);
    }, []);
    return (
        <div>
            {console.log("details", currentBook)}
            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            {currentBook.volumeInfo.imageLinks == undefined ? (
                                <img
                                    src="https://picsum.photos/200/300"
                                    alt=""
                                    style={{ width: "10", height: "20" }}
                                />
                            ) : (
                                    <img
                                        src={currentBook.volumeInfo.imageLinks.thumbnail}
                                        alt=""
                                        style={{ width: "10", height: "20" }}
                                    />
                                )}
                            <span class="card-title">{currentBook.volumeInfo.title}</span>
                        </div>
                        <div class="card-content">
                            <p>{currentBook.volumeInfo.subtitle}</p>
                        </div>
                        <div class="card-content">
                            <p>{currentBook.volumeInfo.publisher}</p>
                        </div>
                        <div class="card-content">
                            <p>{currentBook.volumeInfo.publishedDate}</p>
                        </div>
                        <div class="card-action">
                            <Link to="/">Go to search page!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    
};

export default BookDetails;