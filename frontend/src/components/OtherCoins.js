import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const OtherCoins = () => {

    const navigate = useNavigate()
    const { coinid } = useParams()
    const [asset, setAsset] = useState({})

    const fetchAsset = async () => {
        const response = await fetch(`/api/assets/${coinid}`);
        const json = await response.json();
        if (response.ok) {
            setAsset(json.data);
        }
    }

    return (
        <div id="othercoins">
            {/* <div className="dash-details"> */}
                <div className="boxstyle"><Link to="/assets/ethereum">Text 1</Link></div>
                <div className="boxstyle"><Link to="/assets/bitcoin">Text 2</Link></div>
            {/* </div> */}
        </div>
    );
}

export default OtherCoins;