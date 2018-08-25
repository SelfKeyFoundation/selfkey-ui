/// <reference path="../../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type Attribute = {
    name: string;
    value: string;
};
export declare type Website = {
    name: string;
    url: string;
    termsUrl: string;
    policyUrl: string;
};
export declare type LWSRequiredInfoProps = {
    allowAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    cancelAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    editAction?: ((event: React.MouseEvent<HTMLElement>) => void);
    attributes: Array<Attribute>;
    website: Website;
};
export declare const LWSRequiredInfo: React.ComponentType<LWSRequiredInfoProps & import("react-jss").StyledComponentProps<string>>;
export default LWSRequiredInfo;
