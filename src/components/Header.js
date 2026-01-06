import { Link } from "react-router-dom";
import { LOGO_CDN } from "../utils/common-constants";
import useOnOffLineStatus from "../utils/useOnOffLineStatus";

const Header = () => {
    const onOfflineStatus = useOnOffLineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/">
                    <img
                        src={LOGO_CDN}
                        alt="company-logo"
                        className="logo-img"
                    />
                </Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>{onOfflineStatus ? "🟢 Online" : "🔴 Offline"}</li>
                    <li><Link to="/"><i className="fa-solid fa-house"></i> Home</Link></li>
                    <li><Link to="/about"><i className="fa-solid fa-circle-info"></i> About</Link></li>
                    <li><Link to="/contact"><i className="fa-solid fa-phone"></i> Contact</Link></li>
                    <li><i className="fa-solid fa-cart-shopping"></i> Cart</li>
                    <li><i className="fa-solid fa-user"></i> Login</li>
                </ul>
            </div>
        </div>
    );
};
export default Header;