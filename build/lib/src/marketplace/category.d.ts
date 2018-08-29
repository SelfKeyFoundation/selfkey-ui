/// <reference path="../../../../src/react-jss.d.ts" />
import * as React from 'react';
export declare type CategoryProps = {
    title: string;
    description: string;
    active: boolean;
    svgIcon?: string;
};
export declare const Category: React.ComponentType<CategoryProps & import("react-jss").StyledComponentProps<string>>;
export default Category;
