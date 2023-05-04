import './footer.css';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="containerq-fluid footer-wrapper">
            <footer className="d-flex flex-wrap justify-content-around align-items-center py-3 my-2 border-top footer-content">
                <p className="col-md-4 mb-0 text-muted">SlamBook © 2022 Company, Inc</p>


                <ul className="nav col-md-6 justify-content-end">
                <li className="nav-item"><NavLink className="nav-link " id= "footer-nav" to='/'> Home </NavLink></li>
                <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">About Us</a></li>
                <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Subscriptions</a></li>
                <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">FAQs</a></li>
                <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Testimonials</a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;