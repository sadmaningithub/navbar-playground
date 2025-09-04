import { BookOpen, House, Mail, Weight } from "lucide-react";
import { NavLink } from "react-router";


const NavBar = () => {

    const navLinks = [
        { name: 'home', icon: <House className=" " /> },
        { name: 'about', icon: <BookOpen className=" " /> },
        { name: 'contact', icon: <Mail className="  " /> }
    ]

    return (
        <div className="flex flex-col space-y-2 items-center max-w-10 w-full ">
            {
                navLinks.map(navLink => <NavLink className={({ isActive }) => isActive ? "transform scale-130" : "transform hover:scale-125 hover:opacity-70 transition ease-in-out duration-300"} to={navLink.name}> {navLink.icon}</NavLink>)
            }
        </div>
    );
};

export default NavBar;