import * as React from "react";
import { WithStyles } from '@material-ui/core';
declare const styles: Record<"clipboard" | "icon" | "copyText", import("@material-ui/core/styles/withStyles").CSSProperties | import("@material-ui/core/styles/withStyles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/core/styles/withStyles").CreateCSSProperties<{}>)>;
export declare type CopyWithIconProps = {
    text: string;
};
export declare type CopyWithIconStyledProps = WithStyles<keyof typeof styles> & CopyWithIconProps;
export declare const CopyWithIcon: React.ComponentType<Pick<CopyWithIconStyledProps, "text"> & import("@material-ui/core").StyledComponentProps<"clipboard" | "icon" | "copyText">>;
export default CopyWithIcon;