import { useEffect } from "react";

const About = ({ title }) => {

    useEffect(() => {
        document.title = title || "CryptoView"
    }, [])

    return (
        <div>
            <div className="container">
                <h1>About</h1>
                <hr />

                <div id="about">

                    <strong>CryptoView</strong> is a project that provides some tools that everyone can use for free. <a href="https://docs.coincap.io/"> CoinCap</a> and <a href="https://cryptopanic.com/">CryptoPanic</a> APIs were used.
                    
                    <ul>
                        <li>News feed from CryptoPanic</li>
                        <li>Cryptocurrency Converter Calculator</li>
                        <li>List of top cryptocurrencies</li>
                    </ul>

                    {/* <strong>Others</strong>
                    <ul>
                        <li>
                            Go to the developer <a href="https://rchu-dev.netlify.app">Website</a> |
                            <a href="https://github.com/kypexfly"> GitHub</a> |
                            <a href="https://www.linkedin.com/in/ricardo-chu-zheng/"> LinkedIn</a>
                        </li>
                    </ul> */}
                </div>
            </div>
        </div>
    );
}

export default About;