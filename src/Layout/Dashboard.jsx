import { FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    // const [selectedclass] = useCart();


    const isAdmin = true;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

                    
                    {/* Sidebar content here */}

                    {
                        isAdmin ? <>
                             <li><NavLink><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink><FaWallet></FaWallet>Payment History</NavLink></li>
                    <li><NavLink><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>

                         </> : 
                         
                         <>
                          <li><NavLink><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink><FaWallet></FaWallet>Payment History</NavLink></li>
                    <li><NavLink><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                         </>
}
                   
                </ul>
                
            </div>
        </div>
    );
};

export default Dashboard;