import "../App.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Menu() {
    const location = useLocation();
    const currentPath = location.pathname;
    
    return (
        <div className="menuDiv">
            <nav id="menuNav">
                <Link to="/" className={currentPath === "/" ? "active" : ""}>
                Home
                </Link>
                <Link to="/social" className={currentPath === "/social" ? "active" : ""}>
                Social
                </Link>
                <Link to="/support" className={currentPath === "/support" ? "active" : ""}>
                Support
                </Link>
                <Link to="/action" className={currentPath === "/action" ? "active" : ""}>
                Action
                </Link>
                <Link to="/signal" className={currentPath === "/signal" ? "active" : ""}>
                Signal
                </Link>
                <Link to="/stories" className={currentPath === "/stories" ? "active" : ""}>
                Stories
                </Link>
            </nav>
        </div>
    );
}

export default Menu;