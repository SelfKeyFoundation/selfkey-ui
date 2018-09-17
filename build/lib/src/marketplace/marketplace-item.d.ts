/// <reference path="../../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type MarketplaceItemProps = {
    title: string;
    description: string;
    active: boolean;
    svgIcon?: string;
    learnMoreAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};
export declare const MarketplaceItem: React.ComponentType<MarketplaceItemProps & import("react-jss").StyledComponentProps<string>>;
export default MarketplaceItem;
