import * as React from 'react';
import { Website } from './lws-common';
export declare type Attribute = any;
export declare type LWSRequiredInfoProps = {
    allowAction?: (event: React.MouseEvent<HTMLElement>) => void;
    cancelAction?: (event: React.MouseEvent<HTMLElement>) => void;
    editAction?: (event: React.MouseEvent<HTMLElement>) => void;
    disallowAttributeAction?: (attribute: Attribute, disallow: boolean) => void;
    attributes: Attribute[];
    notAllowedAttributes?: Attribute[];
    requested: Attribute[];
    website: Website;
};
export declare const LWSRequiredInfo: React.ComponentType<Pick<LWSRequiredInfoProps & {
    classes: Record<"form" | "clickable" | "areaTitle" | "buttonPrimary" | "buttonSecondary" | "requiredInfo" | "attribute" | "waringMessage" | "formSubmitColumn" | "tocMessage" | "edit", string>;
}, "requested" | "attributes" | "allowAction" | "cancelAction" | "editAction" | "notAllowedAttributes" | "website" | "disallowAttributeAction"> & import("@material-ui/core").StyledComponentProps<"form" | "clickable" | "areaTitle" | "buttonPrimary" | "buttonSecondary" | "requiredInfo" | "attribute" | "waringMessage" | "formSubmitColumn" | "tocMessage" | "edit">>;
export default LWSRequiredInfo;
