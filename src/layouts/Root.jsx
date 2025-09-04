import { Outlet } from "react-router";
import NavBar from "../components/NavBar";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-row ">
            <NavBar />
            <Outlet></Outlet>
        </div>
    );
};

export default Root;