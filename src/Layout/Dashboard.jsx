import { Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <h2>This is Dashboard Layout Page</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;