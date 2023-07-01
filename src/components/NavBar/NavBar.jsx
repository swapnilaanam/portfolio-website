import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import './NavLink.css';

const NavBar = () => {

    const goToBanner = (e) => {
        scrollTo(0, 0);
    }

    const navItems = <>
        <li>
            <HashLink onClick={goToBanner} to="/" className="text-2xl font-semibold hover:bg-transparent">
                Home
            </HashLink>
        </li>
        <li>
            <HashLink to="/#about" className="text-2xl font-semibold hover:bg-transparent">
                About Me
            </HashLink>
        </li>
        <li>
            <HashLink to="/#skills" className="text-2xl font-semibold hover:bg-transparent">
                Skills
            </HashLink>
        </li>
        <li>
            <HashLink to="/#portfolio" className="text-2xl font-semibold hover:bg-transparent">
                Portfolio
            </HashLink>
        </li>
        <li>
            <HashLink to="/#contact" className="text-2xl font-semibold hover:bg-transparent">
                Contact Me
            </HashLink>
        </li>
    </>
    return (
        <nav className="navbar fixed top-0 bg-slate-800 bg-opacity-90 text-white py-5 z-[100] border-b-2 border-slate-900"
            id="navbar">
            <div className="navbar-start">
                <HashLink onClick={goToBanner} to="/" className="btn btn-ghost normal-case text-3xl font-bold hover:bg-transparent">
                    Swapnil Aanam
                </HashLink>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-left">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-14 -mr-12 z-[1] p-2 shadow bg-slate-800 bg-opacity-90 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    {navItems}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;