import { BookOpen, House, Mail, Weight } from "lucide-react";
import { NavLink } from "react-router";


const NavBar = () => {

    const navLinks = [
        { name: 'home', icon: <House className=" transform hover:scale-125 transition ease-in-out duration-300"/> },
        { name: 'about', icon: <BookOpen className=" transform hover:scale-125 transition ease-in-out duration-300"/>},
        { name: 'contact', icon: <Mail className=" transform hover:scale-125 transition ease-in-out duration-300 " />}
    ]

    return (
        <div className="flex flex-col space-y-2 items-center max-w-10 w-full ">
            {
                navLinks.map(navLink => <NavLink to={navLink.name}> {navLink.icon}</NavLink>)
            }
        </div>
    );
};

export default NavBar;