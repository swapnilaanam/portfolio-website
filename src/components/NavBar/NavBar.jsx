import { Link } from "react-router-dom";

const NavBar = () => {
    const navItems = <>
        <li><Link to="/#banner" className="text-2xl font-semibold hover:bg-transparent">Home</Link></li>
        <li><Link to="/#about" className="text-2xl font-semibold hover:bg-transparent">About Me</Link></li>
        <li><Link to="/#skills" className="text-2xl font-semibold hover:bg-transparent">Skills</Link></li>
        <li><Link to="/#portfolio" className="text-2xl font-semibold hover:bg-transparent">Portfolio</Link></li>
        <li><Link to="/#contact" className="text-2xl font-semibold hover:bg-transparent">Contact Me</Link></li>
    </>
    return (
        <nav className="navbar bg-base-200 py-5">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-3xl font-bold hover:bg-transparent">Swapnil Aanam</Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-left">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-14 -mr-12 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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