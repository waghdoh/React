import { LOGO_CDN } from "../utils/common-constants";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    src={LOGO_CDN}
                    alt="company-logo"
                    className="logo-img"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li><i className="fa-solid fa-house"></i> Home</li>
                    <li><i className="fa-solid fa-circle-info"></i> About</li>
                    <li><i className="fa-solid fa-phone"></i> Contact</li>
                    <li><i className="fa-solid fa-cart-shopping"></i> Cart</li>
                    <li><i className="fa-solid fa-user"></i> Login</li>
                </ul>
            </div>
        </div>
    );
};
export default Header;