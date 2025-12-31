const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    src="data:image/png;base64,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"
                    alt="company-logo"
                    className="logo-img"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
 export default Header;