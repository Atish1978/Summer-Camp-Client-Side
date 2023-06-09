import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import logo from '../../../../src/assets/logoSchool.png'

const NavBar = () => {

  const { user, logOut } = useContext(AuthContext);

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
      
      <div className="navbar-center flex-auto">
      
        <ul className="menu menu-horizontal px-1 flex gap-8">
          <Link to='/'><li>Home</li></Link>
          <Link to='/instructors'><li>Instructors</li></Link>
          <Link to='/classes'><li>Classes</li></Link>
          <li>Dashboard</li>

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