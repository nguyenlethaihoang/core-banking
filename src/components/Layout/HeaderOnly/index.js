import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div classname="container">
                <div className="content">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default HeaderOnly;