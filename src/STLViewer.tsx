import { createElement, useEffect, useState } from "react";
import { stlviewerContainerProps } from "../typings/STLViewerProps";
import { SpinnerDotted } from "spinners-react";
import "./STLViewer.scss";
import { StlViewer } from "../stl-viewer-react/dist";
import uuid from 'react-uuid';

function STLViewer(props: stlviewerContainerProps) {
    const [loading, setLoading] = useState(true);
    const stlid = uuid();
    useEffect(() => {
        if (props.file?.status !== "loading") {
            const root = document.documentElement;
            root?.style.setProperty("--height", props.height ? props.height.toString() + "px" : "750px");
            root?.style.setProperty("--width", props.width ? props.width.toString() + "px" : "750px");
            setLoading(false);
        }
    }, [stlid, props.file, props.height, props.width]);

    if (loading) {
        return (
            <div className="loadingDiv">
                <SpinnerDotted size={57} thickness={152} speed={100} color="rgba(30,	144, 255, 1)" />
            </div>
        );
    }
    const dataSource = props.file?.value;
    const height = props.height || 50;
    const width = props.width || 50;
    const color = props.color;

    // const test = props.onClickAction;
    return (
            <div >        
                {/* <canvas id="canvas" className="stlcanvas">        </canvas> */}
                <StlViewer stlid={stlid} width={width} height={height} objectColor={color} file={dataSource}></StlViewer>
            </div>
    );
    // <STLViewerWidget dataSource={dataSource} height={Number(height)} width={Number(width)} onChange={onChange} />
    // );
}
export default STLViewer;
