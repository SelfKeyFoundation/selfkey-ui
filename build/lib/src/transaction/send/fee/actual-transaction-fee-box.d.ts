import * as React from 'react';
export declare const styles: Record<"root", import("@material-ui/styles").CSSProperties | import("@material-ui/styles").CreateCSSProperties<{}> | ((props: {}) => import("@material-ui/styles").CreateCSSProperties<{}>)>;
export declare type ActualTransactionFeeBoxProps = {
    locale: string;
    ethFee: number;
    usdFee: number;
    fiatCurrency: string;
};
export declare const ActualTransactionFeeBox: React.ComponentType<Pick<any, string | number | symbol> & import("@material-ui/styles").StyledComponentProps<"root">>;
export default ActualTransactionFeeBox;
