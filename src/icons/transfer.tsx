import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles: StyleSheet = {
  root: {
    width: '26px !important',
    height: '26px !important'
  }
};

export const TransferIcon= injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps)=> (
  <SvgIcon {...props} viewBox="0 0 489.2 489.2">
    <g>
	<g>
		<path d="M481.044,382.5c0-6.8-5.5-12.3-12.3-12.3h-418.7l73.6-73.6c4.8-4.8,4.8-12.5,0-17.3c-4.8-4.8-12.5-4.8-17.3,0l-94.5,94.5    c-4.8,4.8-4.8,12.5,0,17.3l94.5,94.5c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-73.6-73.6h418.8    C475.544,394.7,481.044,389.3,481.044,382.5z" fill="#93b0c1"/>
		<path d="M477.444,98l-94.5-94.4c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l73.6,73.6h-418.8c-6.8,0-12.3,5.5-12.3,12.3    s5.5,12.3,12.3,12.3h418.8l-73.6,73.4c-4.8,4.8-4.8,12.5,0,17.3c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l94.5-94.5    C482.244,110.6,482.244,102.8,477.444,98z" fill="#93b0c1"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
  </SvgIcon>
));

export default TransferIcon;
