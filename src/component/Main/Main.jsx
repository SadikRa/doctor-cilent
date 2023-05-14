import { Outlet } from "react-router-dom";
import Navbaaar from "../Navbarss/Navbaaar";

const Main = () => {
    return (
        <div className="container">
            <Navbaaar></Navbaaar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;