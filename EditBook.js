import { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";

function EditBook() {

const {id} = useParams();

const nav = useNavigate();

    const [title,setTitle] = useState();
    const [author,setAuthor] = useState();
    const [price,setPrice] = useState();
    const [publisher,setPublisher] = useState();
    const [date,setDate] = useState();
    const [page,setPage] = useState();
    const [copy,setCopy] = useState();
    const [isbn,setIsbn] = useState();

useEffect (() => {
    fetch(' http://localhost:2000/book/'+id).then((res) => {
          return res.json();
    }).then((data) => {
        setTitle(data.title);
        setAuthor(data.author);
        setPrice(data.price);
        setPublisher(data.publisher);
        setDate(data.date);
        setPage(data.page);
        setCopy(data.copy);
        setIsbn(data.isbn);
    })
},[]);

    const updatedata = (e) => {
        e.preventDefault();

        const data = {title, author, price, publisher, date, page, copy, isbn}
        fetch(' http://localhost:2000/book/'+id,{
            method: "PUT",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(data)
        }).then(() => {
            alert("Data update");
            nav("/view")
        });
    }

    return (

        <div>
            <form className="form" onSubmit={updatedata}>
                <input type="text" defaultValue={title} onChange={(e) => {setTitle(e.target.value)}} className="form-input" placeholder="Enter Title"/>
                <input type="text" defaultValue={author} onChange={(e) => {setAuthor(e.target.value)}} className="form-input" placeholder="Enter Author"/>
                <input type="text" defaultValue={price} onChange={(e) => {setPrice(e.target.value)}} className="form-input" placeholder="Enter Price"/>
                <input type="text" defaultValue={publisher} onChange={(e) => {setPublisher(e.target.value)}} className="form-input" placeholder="Enter Publisher"/>
                <input type="date" defaultValue={date} onChange={(e) => {setDate(e.target.value)}} className="form-input"/>
                <input type="text" defaultValue={page} onChange={(e) => {setPage(e.target.value)}} className="form-input" placeholder="Enter No.of Pages"/>
                <input type="text" defaultValue={copy} onChange={(e) => {setCopy(e.target.value)}} className="form-input" placeholder="Enter No.of Copies"/>
                <input type="text" defaultValue={isbn} onChange={(e) => {setIsbn(e.target.value)}} className="form-input" placeholder="Enter ISBN"/>
                <input type="submit" className="form-submit"/>
            </form>
        </div>
    )
}
export default EditBook;