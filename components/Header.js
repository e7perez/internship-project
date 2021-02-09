import Link from "next/link";

const Header = () => {
    return (
        <div className="header">

            <div className="navbar__container">
                <div className="navbar">
                    <div className="logo">
                        <Link href="/">
                            <a>
                                87Lux
                            </a>
                        </Link>
                    </div>

                    <div className="navbar__links">
                        <Link href="/">
                            <a className="nav__link">Themes</a>
                        </Link>
                        <Link href="/services">
                            <a className="nav__link">Apps</a>
                        </Link>
                        <Link href="/gallery">
                            <a className="nav__link">Assets</a>
                        </Link>
                        <Link href="/contactus">
                            <a className="nav__link">Contact Us</a>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Header;