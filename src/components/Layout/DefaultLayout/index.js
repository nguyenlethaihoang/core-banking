import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div classname="container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default DefaultLayout;