import { Link } from "react-router-dom";
import Footer from "../components/FooterComponent";
import Header from "../components/HeaderComponent";
import '../styles/NotFound.css'

const NotFound = () => {
    return (
        <>
            <Header />
                <div className="notfound_container">
                    <div>Oops! Page Not Found😬</div><br />
                    <Link className="desktop" to="/"><div className="back">Go back</div></Link>
                </div>
            <Footer />
        </>
    )
}

export default NotFound;