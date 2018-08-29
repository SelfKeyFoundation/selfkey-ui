/// <reference path="../../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type ItemProps = {
    title: string;
    description: string;
    active: boolean;
    svgIcon?: string;
};
export declare const Item: React.ComponentType<ItemProps & import("react-jss").StyledComponentProps<string>>;
export default Item;
