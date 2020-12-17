import * as React from 'react';
export declare type LWSExtensionErrorProps = {
    installExtensionAction?: (event: React.MouseEvent<HTMLElement>) => void;
    children?: any;
};
export declare const LWSExtensionError: React.ComponentType<Pick<LWSExtensionErrorProps & {
    classes: Record<"form" | "areaTitle" | "formSubmitRow" | "buttonPrimary" | "buttonSecondary" | "supportText", string>;
}, "children" | "installExtensionAction"> & import("@material-ui/core").StyledComponentProps<"form" | "areaTitle" | "formSubmitRow" | "buttonPrimary" | "buttonSecondary" | "supportText">>;
export default LWSExtensionError;
