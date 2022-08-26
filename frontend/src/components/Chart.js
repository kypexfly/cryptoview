import { useParams } from "react-router-dom";
import Plot from 'react-plotly.js';
import { useState, useEffect } from "react";

const Chart = () => {

    const { coinid } = useParams()
    const [dataPlot, setDataPlot] = useState([])

    const fetchAssetHistoryPrice = async () => {
        const response = await fetch(`/api/assets/${coinid}/history`);
        const json = await response.json();
        if (response.ok) {
            setDataPlot(json.data);
            // console.log(json.data.slice(0, 5))
        }
    }

    useEffect(() => {
        fetchAssetHistoryPrice()
    }, [])

    const priceUsd = dataPlot.map((timestep) => timestep.priceUsd)
    const date = dataPlot.map((timestep) => timestep.date)

    return (
        <div className="dash-chart-container">
            <h4>Chart from last 24h</h4>
            {!dataPlot.length ? (<div className="loading"><i className="fas fa-spinner fa-pulse"></i></div>) :
                (<Plot
                    data={[
                        {
                            x: date,
                            y: priceUsd,
                            type: 'scatter',
                            fill: 'tonexty',
                            mode: 'lines',
                            hoverlabel: {
                                // bgcolor: "rgba(0,0,0,.8)",
                                bordercolor: "rgba(0,0,0,0)",
                                font: {color: "#FFF", size: 15}
                            },
                            marker: { color: 'slateblue' },
                            hovertemplate: '<b>$%{y:.2f}</b> <br>' +
                                '<span>%{x}<extra></extra>',
                        }
                    ]}
                    layout={{
                        autosize: true,
                        margin: { t: 0, b: 40, l: 80, r: 30 },
                        color: "rgba(0,0,0,0)",
                        paper_bgcolor: "rgba(0,0,0,0)",
                        plot_bgcolor: "rgba(0,0,0,0)",
                        font: { color: "darkgray" },
                        // hovermode: "x",
                        xaxis: {
                            showgrid: false,
                            gridcolor: "slateblue",
                            zeroline: false,
                            showline: false,
                        },
                        yaxis: {
                            showgrid: true,
                            gridcolor: "#2f2f2f",
                            tickprefix: "$",
                            tickformat: ',',
                            zeroline: false,
                            showline: false,
                            autotick: true,
                            range: [Math.min(...priceUsd) * 0.99, Math.max(...priceUsd)],
                        },
                    }}
                    useResizeHandler={true}
                    style={{ width: "100%", height: "325px" }}
                    config={{
                        responsive: true
                    }} />)
            }
        </div>
    );
}

export default Chart;