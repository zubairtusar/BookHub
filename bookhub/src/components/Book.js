import react from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
    console.log(props.data.volumeInfo.imageLinks);
    const ImageURL = props.data.volumeInfo.imageLinks.thumbnail;
    return (
        <div class="col s12 m3">
            <div class="card">
                <div class="card-image">
                    {props.data.volumeInfo.imageLinks.thumbnail == null ? (
                        <img
                            src="https://picsum.photos/200/300"
                            alt=""
                            style={{ width: "10", height: "20" }}
                        />
                    ) : (
                            <img
                                src={ImageURL}
                                alt=""
                                style={{ width: "10", height: "20" }}
                            />
                        )}

                    <span class="card-title">{props.data.volumeInfo.title}</span>
                </div>
                <div class="card-content">{props.data.volumeInfo.publishedDate}</div>
                <div class="card-action">
                    
                </div>
            </div>
        </div>
    );
};

export default Book;