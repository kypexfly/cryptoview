import { useEffect } from "react";

const Home = ({ title }) => {

    useEffect((title) => {
        document.title = title || "CryptoView"
    }, [])

    return (
        <div id="home">
            {/* <section className="landing">
                <div className="container">
                    <div className="landbox">
                        <h1>Welcome to CryptoView!</h1>
                    </div>
                </div>
            </section> */}
            <section className="sections">
                <div className="container">

                </div>
            </section>
        </div>
    );
}

export default Home;