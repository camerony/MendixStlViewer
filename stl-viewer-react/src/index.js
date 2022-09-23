import React, { useEffect } from "react";
import Stl from "./STLArrows";

export const StlViewer = ({ stlid, width, height, file, objectColor, primaryColor, volume }) => {
    useEffect(() => {
        Stl(
            stlid,
            width,
            height,
            file,
            objectColor ? objectColor : "#000000",//"#105689",
            primaryColor ? primaryColor : "#1e90ff",
            volume
        );
    }, [file]);
    // const buttonStyle = {
    //     backgroundColor: "DodgerBlue",
    //     border: 0,
    //     color: "white",
    //     padding: "8px 12px",
    //     fontSize: "12px",
    //     margin: "5px"
    // };
    // const buttonGridStyle = {
    //     textAlign: "center",
    //     display: "inline-block",
    //     position: "absolute",
    //     right: "2vh",
    //     bottom: "1vh"
    // };
    const errorDivStyle = {
        display: "none",
        background: "#872317",
        zIndex: "3",
        color: "white",
        height: "100%",
        width: "100%",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        right: "0",
        top: "0",
        fontFamily: "Arial"
    };

    

    return (
        <div>
            <div style={{ width, height, position: "relative" }}>
                <div style={errorDivStyle} id={"errorView"+ stlid}>
                    Could not load Model!
                </div>
                {/* <div style={buttonGridStyle}>
                    <button style={buttonStyle} id={"rotate" + stlid}>
                        rotation
                    </button>
                    <button style={buttonStyle} id={"grid" + stlid}>
                        grid
                    </button>
                </div> */}
                <div id={"stlviewer" + stlid}></div>
            </div>
        </div>
    );
};
