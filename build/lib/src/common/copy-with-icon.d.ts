import * as React from 'react';
import { WithStyles } from '@material-ui/styles';
declare const styles: Record<"icon" | "clipboard" | "copyText", import("@material-ui/styles").CSSProperties | import("@material-ui/styles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles").CreateCSSProperties<{}>)>;
export declare type CopyWithIconProps = {
    text: string;
};
export declare type CopyWithIconStyledProps = WithStyles<keyof typeof styles> & CopyWithIconProps;
export declare const CopyWithIcon: React.ComponentType<Pick<CopyWithIconStyledProps, "text"> & import("@material-ui/styles").StyledComponentProps<"icon" | "clipboard" | "copyText">>;
export default CopyWithIcon;
