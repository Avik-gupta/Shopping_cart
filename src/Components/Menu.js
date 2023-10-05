import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Menu()
{
  const data = useSelector(state=>state.productCart.value);

   return<div className="container">
    <div>
        <ul className="nav nav-tabs navbar-default">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart : {data.length}</Link></li>
        </ul>
    </div>
   </div>  
}
export default Menu;
