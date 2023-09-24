import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;