/// <reference path="../../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type LWSErrorProps = {
    actionButton?: React.ReactElement<any>;
    actionName: string;
    errorName: string;
    actionIcon: React.ReactElement<any>;
    supportText: string;
};
export declare const LWSError: React.ComponentType<LWSErrorProps & import("react-jss").StyledComponentProps<string>>;
export default LWSError;
