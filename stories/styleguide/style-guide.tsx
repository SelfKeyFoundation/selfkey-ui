import * as React from 'react';

import { TableLarge as TableLargeCmp } from '../../src/common/table/table-large';
import { TableSmall as TableSmallCmp } from '../../src/common/table/table-small';
import { TableMultiLine as TableMultiLineCmp } from '../../src/common/table/table-multi-line';
import { Input as InputCmp } from '../../src/common/form/input';

export const TableLarge = () => (
    <TableLargeCmp></TableLargeCmp>
);

export const TableSmall = () => (
    <TableSmallCmp></TableSmallCmp>
);

export const TableMultiLine = () => (
    <TableMultiLineCmp></TableMultiLineCmp>
);

export const Input = () => (
    <div style={{padding: '50xp'}}>
        <InputCmp></InputCmp>
    </div>
);


