import * as React from 'react';
export declare type LWSModalHeaderProps = {
    closeAction?: (event: React.MouseEvent<HTMLElement>) => void;
};
export declare const LWSModalHeader: React.ComponentType<Pick<LWSModalHeaderProps & {
    classes: Record<"title" | "root" | "closeButton", string>;
}, "closeAction"> & import("@material-ui/core").StyledComponentProps<"title" | "root" | "closeButton">>;
export default LWSModalHeader;
