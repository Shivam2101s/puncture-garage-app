import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <div id="navbar">
      <Link className="link" to={"/"}>
        Home
      </Link>

      <Link className="link" to={"#"}>Offers</Link>  
            
      <Link className="link" to={"/cart"}>Cart</Link>
      <Link className="link" to={"/checkout"}>Checkout</Link>
    </div>
  );
};
