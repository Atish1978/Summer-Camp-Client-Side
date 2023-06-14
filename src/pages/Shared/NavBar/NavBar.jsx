import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../providers/AuthProviders";
import logo from '../../../../src/assets/logoSchool.png'
// import useAdmin from "../../../hooks/useAdmin";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  // const [isAdmin] = useAdmin();
  const [selectedclass] = useCart();




  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => { console.error(error) })
  }
  return (
    <div className="navbar bg-base-100 h-24 mb-4 flex-none">
      <div className="navbar-start ps-6 flex-row">
        <img className="w-20 rounded-full" src={logo} alt="" />
        <div>
          <p className="ps-4 text-2xl text-yellow-300 font-bold">Sports Summer Camp</p>
          <p className="ps-4 text-1xl">Anandaniketan School</p>

        </div>
      </div>

      <div className="navbar-center flex-auto items-center justify-center">

        <ul className="menu menu-horizontal px-1 items-center justify-center">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/instructors'>Instructors</Link></li>
          <li><Link to='/classes'>Classes</Link></li>
         
          <li>
            <Link to="/dashboard/mycart">
              <button className="btn">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-success">+{selectedclass?.length || 0}</div>
              </button>
            </Link>
          </li>
          <li><Link to='/dashboard'>Dashboard</Link></li>

        </ul>

        
      </div>
      {
        user ?
          <>
            <img src={user.photoURL} className='ms-4 rounded-full' width={40} height={40} />
            <button onClick={handleLogOut} className="btn btn-xs ms-4 text-white">Sign out</button>
          </> :
          <>
            <Link to='/login'><button className="btn btn-sm ms-4 text-white">Sign In</button> </Link>
          </>


      }


    </div>
  );
};

export default NavBar;