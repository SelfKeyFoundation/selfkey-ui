/// <reference path="../../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type ItemProps = {
    name: string;
    status: string;
    description: string;
    logoUrl?: string;
    viewAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare const Item: React.ComponentType<ItemProps & import("react-jss").StyledComponentProps<string>>;
export default Item;
