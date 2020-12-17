import * as React from 'react';
export declare type LWSErrorProps = {
    actionButton?: React.ReactElement<any>;
    actionName: string;
    errorName: string;
    actionIcon: React.ReactElement<any>;
    supportText: string;
};
export declare const LWSError: React.ComponentType<Pick<LWSErrorProps & {
    classes: Record<"form" | "areaTitle" | "formSubmitRow" | "supportText" | "lwsError", string>;
}, "supportText" | "actionButton" | "actionName" | "errorName" | "actionIcon"> & import("@material-ui/core").StyledComponentProps<"form" | "areaTitle" | "formSubmitRow" | "supportText" | "lwsError">>;
export default LWSError;
