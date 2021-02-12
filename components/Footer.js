import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <h1>We work with any budget!</h1>
                <Link href="/">
                    <a className="footer__link">Lets Get Started</a>
                </Link>
            </div>
        </footer>
    )
}
export default Footer;