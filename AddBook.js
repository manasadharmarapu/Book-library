import { useState } from "react";
import Home from "./Home";
import Footer from "./Footer";

function AddBook() {

    const [title,setTitle] = useState();
    const [author,setAuthor] = useState();
    const [price,setPrice] = useState();
    const [publisher,setPublisher] = useState();
    const [date,setDate] = useState();
    const [page,setPage] = useState();
    const [copy,setCopy] = useState();
    const [isbn,setIsbn] = useState();

    const addbook = (e) => {
        e.preventDefault();

        let data = {title, author, price, publisher, date, page, copy, isbn}

        fetch('http://localhost:2000/book', {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        }).then(() => {
            alert();
        });
    }

    return(
        
        <>
        <Home/>
        <div className="bg">

        <div className="container">

          <div className="addbook">
            
            <form className="form" onSubmit={addbook}>
                <input type="text" onChange={(e) => {setTitle(e.target.value)}} className="form-input" placeholder="Enter Title"/>
                <input type="text" onChange={(e) => {setAuthor(e.target.value)}} className="form-input" placeholder="Enter Author"/>
                <input type="text" onChange={(e) => {setPrice(e.target.value)}} className="form-input" placeholder="Enter Price"/>
                <input type="text" onChange={(e) => {setPublisher(e.target.value)}} className="form-input" placeholder="Enter Publisher"/>
                <input type="date" onChange={(e) => {setDate(e.target.value)}} className="form-input"/>
                <input type="text" onChange={(e) => {setPage(e.target.value)}} className="form-input" placeholder="Enter No.of Pages"/>
                <input type="text" onChange={(e) => {setCopy(e.target.value)}} className="form-input" placeholder="Enter No.of Copies"/>
                <input type="text" onChange={(e) => {setIsbn(e.target.value)}} className="form-input" placeholder="Enter ISBN"/>
                <input type="submit" className="form-submit"/>
            </form>

            </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}
export default AddBook;