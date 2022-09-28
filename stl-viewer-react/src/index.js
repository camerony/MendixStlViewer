import React, { useEffect } from "react";
import Stl from "./STLArrows";

export const StlViewer = ({ stlid, width, height, file, objectColor, primaryColor }) => {
    useEffect(() => {
        Stl(
            stlid,
            width,
            height,
            file,
            objectColor ? objectColor : "#000000",//"#105689",
            primaryColor ? primaryColor : "#1e90ff"
        );
    }, [file]);
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
                <div id={"stlviewer" + stlid}></div>
            </div>
        </div>
    );
};
