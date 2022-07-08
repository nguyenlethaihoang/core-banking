import Header from "../components/Header";

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div classname="container">
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default HeaderOnly;