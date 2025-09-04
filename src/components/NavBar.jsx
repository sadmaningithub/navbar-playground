import { BookOpen, House, Mail, Weight } from "lucide-react";
import { NavLink } from "react-router";


const NavBar = () => {

    const navLinks = [
        { name: 'home', icon: <House /> },
        { name: 'about', icon: <BookOpen />},
        { name: 'contact', icon: <Mail className="hover:h-10 hover:w-10" />}
    ]

    return (
        <div className="border">
            {
                navLinks.map(navLink => <NavLink to={navLink.name}> {navLink.icon}</NavLink>)
            }
        </div>
    );
};

export default NavBar;