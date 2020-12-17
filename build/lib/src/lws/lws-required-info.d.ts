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
    classes: Record<"form" | "areaTitle" | "buttonPrimary" | "buttonSecondary" | "requiredInfo" | "attribute" | "clickable" | "waringMessage" | "formSubmitColumn" | "tocMessage" | "edit", string>;
}, "allowAction" | "requested" | "cancelAction" | "editAction" | "attributes" | "notAllowedAttributes" | "website" | "disallowAttributeAction"> & import("@material-ui/core").StyledComponentProps<"form" | "areaTitle" | "buttonPrimary" | "buttonSecondary" | "requiredInfo" | "attribute" | "clickable" | "waringMessage" | "formSubmitColumn" | "tocMessage" | "edit">>;
export default LWSRequiredInfo;
