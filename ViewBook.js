import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import './styles.css';

function ViewBook(props) {

    // const{id} = useParams();

    const nav = useNavigate();

    const [bkdata, setData] = useState();

    useEffect(() => {
        fetch('http://localhost:2000/book').then((res) => {
            return res.json();
        }).then((data) => {
           
            setData(data);
        });
    },[]);

    const deletebook = (id) => {
        fetch('http://localhost:2000/book/'+id, {
            method:"DELETE"
        }).then(() => {
            alert('book deleted');
            window.location.reload();
        });
    }

    const editbook = (id) => {
        nav("/edit/"+id)
        // alert();
    }


    return(
        <>
        <Home/>
        <div className="container">

        
         <h1 className="text-center">{props.title}</h1>
        {
            <table className="table">
                    <tr>
                        <td className="text-bold">Title</td>
                        <td className="text-bold">Author</td>
                        <td className="text-bold">ISBN</td>
                        <td className="text-bold">Actions</td>
                    </tr>
                    {
                      bkdata && bkdata.map((data) => {
                          return(
                            <tr>
                                <td>{data.title}</td>
                                <td>{data.author}</td>
                                <td>{data.isbn}</td>
                                <td>
                                   <a href="#" className="delete" onClick={() =>{deletebook(data.id)}}>Delete</a>
                                   <a href="#" className="edit" onClick={() =>{editbook(data.id)}}>Edit</a>
                                </td>
                            </tr>
                          )
                      })
                       
                    }
            </table>
        }

        </div>
        <Footer/>
        </>
    );
}
export default ViewBook;