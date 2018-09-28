/// <reference path="../../../../src/react-jss.d.ts" />
import * as React from 'react';
import { Website } from './lws-common';
export declare type Attribute = {
    label: string;
    key: string;
    attribute?: string;
    data?: any;
    document?: boolean;
};
export declare type LWSRequiredInfoProps = {
    allowAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    cancelAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    editAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    disallowAttributeAction?: ((attribute: Attribute, disallow: boolean) => void);
    attributes: Array<Attribute>;
    notAllowedAttributes?: Array<Attribute>;
    requested: Array<Attribute>;
    website: Website;
};
export declare const LWSRequiredInfo: React.ComponentType<LWSRequiredInfoProps & import("react-jss").StyledComponentProps<string>>;
export default LWSRequiredInfo;
