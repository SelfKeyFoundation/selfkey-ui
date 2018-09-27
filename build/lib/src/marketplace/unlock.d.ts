/// <reference path="../../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type UnlockProps = {
    amount?: number;
    token?: string;
    days?: number;
    minGasPrice: number;
    maxGasPrice: number;
    gasLimit: number;
    fiat: string;
    fiatRate: number;
    onTransactionFeeChange: (value: number) => void;
};
export declare const Unlock: React.ComponentType<UnlockProps & import("react-jss").StyledComponentProps<string>>;
export default Unlock;
