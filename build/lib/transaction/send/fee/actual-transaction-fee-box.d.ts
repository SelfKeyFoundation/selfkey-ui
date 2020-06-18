import * as React from 'react';
export declare const styles: Record<"root", import("@material-ui/core/styles/withStyles").CSSProperties | import("@material-ui/core/styles/withStyles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/core/styles/withStyles").CreateCSSProperties<{}>)>;
export declare type ActualTransactionFeeBoxProps = {
    locale: string;
    ethFee: number;
    usdFee: number;
    fiatCurrency: string;
};
export declare const ActualTransactionFeeBox: React.ComponentType<Pick<ActualTransactionFeeBoxProps & {
    classes: Record<"root", string>;
}, "locale" | "fiatCurrency" | "ethFee" | "usdFee"> & import("@material-ui/core").StyledComponentProps<"root">>;
export default ActualTransactionFeeBox;
