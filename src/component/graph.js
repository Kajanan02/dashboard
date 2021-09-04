import React, {useEffect, useState} from "react";
import C3Chart from 'react-c3js';
import * as d3 from "d3";
import 'c3/c3.css';

export default function Graph() {

    const [dataSet, setDataSet] = useState({});

    function styleGraph() {
        if (window.innerWidth < 769) {
            console.log("inside styling chart");
            d3.select(".c3-axis-x-label").attr("dy", "42px");
            d3.selectAll(".tick").style("font-size", "7px");
            d3.select(".dfpc .c3-axis-y-label").attr("dy", "-34px");
        } else {
            d3.select(".dfpc .c3-axis-y-label").attr("dy", "-35px");
        }
        d3.selectAll(".c3-legend-item").attr("x", "400");

    }

    async function addDataGraphDate(graphData) {
        await new Promise((resolve, reject) => {
            resolve(1); setDataSet(graphData)
        });
    }

    useEffect(() => {
        if (dataSet.length) {
            dataSet.slice(0, dataSet.length);
        }

        drawGraph()
        console.log('graph DraW')
    }, []);


    function drawGraph() {

        let income = [200,330,400,700,800,999,800,700,1200,1500,1600,1800]
        let expense = []

        const graphData = {};
        graphData.data = null;
        graphData.axis = null;
        const tooltip = {
            format: {
                value: function (value, ratio, id, index) {
                    return value;
                }
            },
        };

        const data = {

            columns: [
                ['expense',200,330,400,700,800,999,800,700,1200,1500,1600,1800],
                ['income',250,430,500,800,900,1299,1400,1600,1800,2000,2600,3800],
            ],

        };
        let axis

        axis = {
            x: {
                show: true,
                type: 'category',
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                label: {
                    // text: 'Months',
                    position: 'outer-center'
                },
                tick: {
                    // count:  12,
                    fit: true,
                    // rotate: window.innerWidth > 767 ? 0 : 9,
                    // culling: {
                    //     max: window.innerWidth > 767 ? 6 : 5,
                    // },
                    height: 100,
                },
            },
            y: {
                label: {
                    // text: 'Amount (in LKR)',
                    position: 'outer-middle',

                }
            },
        };
        const zoom = {
            rescale: true

        };
        graphData['data'] = data;
        graphData['axis'] = axis;
        graphData['tooltip'] = tooltip;
        graphData['zoom'] = zoom;

        addDataGraphDate(graphData).then(() => {
            console.log("drawing graph");
        });

    }

    return(
        <div className={"graph-container dfpc"}>
            <div className={"fw-bold fs-2 mb-4"}>SALES SUMMARY OF THE YEAR</div>
            { dataSet.data && (
                <C3Chart area={{zerobased: false}} padding={{left: 45}} tooltip={dataSet.tooltip} zoom={dataSet.zoom}
                         data={dataSet.data} subchart={{show: false}} onrendered={styleGraph} axis={dataSet.axis}/>
            )}

        </div>




    )
}
