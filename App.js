import AddBook from "./AddBook";
import Footer from "./Footer";
import Home from "./Home";
import Latest from "./Latest";
import Navigation from "./Navigation";
import ViewBook from './ViewBook';
import Welcome from "./Welcome";
import './styles.css';

function App() {
  return (
    <div>
       <Home/>
       {/* <a href="add">Add Book</a>
       <a href="view">View Book</a> */}
       {/* <ViewBook/> */}
      <Welcome/>
      <Latest/>
      <Footer/>
      {/* <Navigation/> */}
    </div>
  );
}

export default App;
