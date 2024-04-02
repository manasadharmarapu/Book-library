import {useNavigate} from "react-router-dom";

function Navigation() {

     const nav = useNavigate();

     const main = () => {
         
        nav('/view/5')
     }

    return(
        <div>
             {/* <button onClick={main}>Click</button> */}
        </div>
    )
}
export default Navigation;