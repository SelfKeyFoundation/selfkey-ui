/// <reference path="../../../src/react-jss.d.ts" />
import * as React from 'react';
import { MarketplaceItemProps } from './marketplace-item';
export declare type MarketplaceProps = {
    items: Array<MarketplaceItemProps>;
};
export declare const Marketplace: React.ComponentType<MarketplaceProps & import("react-jss").StyledComponentProps<string>>;
export default Marketplace;
