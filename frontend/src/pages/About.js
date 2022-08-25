import { useEffect } from "react";

const About = ({ title }) => {

    useEffect(() => {
        document.title = title || "CryptoView"
    }, [])

    return (
        <div className="container">
            <h1>About</h1>
            <hr />

            <div id="about">

                <strong>CryptoView</strong> is a project that uses <a href="https://docs.coincap.io/">CoinCap API</a> and <a href="https://cryptopanic.com/">CryptoPanic API</a>. It provides some tools that everyone can use for free:
                <ul>
                    <li>News feed from CryptoPanic</li>
                    <li>Cryptocurrency Converter Calculator</li>
                    <li>List of top cryptocurrencies</li>
                </ul>

                <br />

                <strong>Others</strong>
                <ul>
                    <li>
                        Go to the developer <a href="https://rchu-dev.netlify.app">Website</a> |
                        <a href="https://github.com/kypexfly"> GitHub</a> |
                        <a href="https://www.linkedin.com/in/ricardo-chu-zheng/"> LinkedIn</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;