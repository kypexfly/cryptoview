import { useEffect } from "react";

const Home = ({ title }) => {

    useEffect(() => {
        document.title = title || "CryptoView"
    }, [])

    return (
        <div className="boxed">            
            <center>
                <h1>Welcome to CryptoView</h1>
            </center>
        </div>
    );
}

export default Home;