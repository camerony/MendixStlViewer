/**
 * This file was generated from stlviewer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, FileValue } from "mendix";

export interface stlviewerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    file?: DynamicValue<FileValue>;
    width: number;
    height: number;
    color: string;
    onClickAction?: ActionValue;
}

export interface stlviewerPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    file: string;
    width: number | null;
    height: number | null;
    color: string;
    onClickAction: {} | null;
}
