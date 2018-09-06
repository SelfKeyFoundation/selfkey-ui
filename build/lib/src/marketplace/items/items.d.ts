/// <reference path="../../../../../src/react-jss.d.ts" />
import * as React from 'react';
import { ItemProps } from './item';
export declare type ItemsProps = {
    category: string;
    items: Array<ItemProps>;
    backAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare const Items: React.ComponentType<ItemsProps & import("react-jss").StyledComponentProps<string>>;
export default Items;
