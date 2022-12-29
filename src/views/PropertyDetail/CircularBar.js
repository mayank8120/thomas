import React from 'react'

import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import {
    buildStyles
} from "react-circular-progressbar";
const CircularBar = ({ propwalkscore }) => {
    return (
        <>

            {
                propwalkscore !== 'N/A' ?
                    <CircularProgressbarWithChildren value={propwalkscore} className="progress"
                        styles={buildStyles({
                            pathColor: "#9d56f7",
                            trailColor: "#efefef"
                        })}>
                        <div className="progress-value  text-center">
                            <div style={{ "line-height": "17px" }}>
                                <span className="purpleText font-weight700 fontSize18">{propwalkscore}</span><br />
                                <span style={{ "text-transform": "lowercase", "font-size": "400" }}
                                    className="font-weight400 filter70">of 100</span>

                            </div>
                        </div>
                    </CircularProgressbarWithChildren>
                    :
                    <CircularProgressbarWithChildren value={0} className="progress"
                        styles={buildStyles({
                            pathColor: "#9d56f7",
                            trailColor: "#efefef"
                        })}>
                        <div className="progress-value  text-center">
                            <div style={{ "line-height": "17px" }}>
                                N/A
                            </div>
                        </div>
                    </CircularProgressbarWithChildren>
            }

            {/* <CircularProgressbarWithChildren value={41} className="progress"
                styles={buildStyles({
                    pathColor: "#9d56f7",
                    trailColor: "#efefef"
                })}>
                <div className="progress-value  text-center">
                    <div style={{ "line-height": "17px" }}>
                        <span className="purpleText font-weight700 fontSize16">41</span><br />
                        <span style={{ "text-transform": "lowercase", "font-size": "400" }}
                            className="font-weight400">of 100</span>

                    </div>
                </div>
            </CircularProgressbarWithChildren> */}

            {/* <div className="media-body">
                <div className="mt-0 d-flex align-items-center mb-0">
                    <span>
                        <img src={require('../../assets/img/walkScore.svg').default} />
                    </span>
                    <h6 className="font-weight500 mb-0">Walk Score</h6>
                </div>
                <p className="mb-0 para fontSize16">{title} is very walkable and
                    have good walk score. Most errands can be accomplished on foot.</p>
            </div> */}

        </>
    )
}

export default CircularBar
