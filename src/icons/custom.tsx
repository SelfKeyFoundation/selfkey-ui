import * as React from 'react';
// @ts-ignore
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles: StyleSheet = {
  root: {
    width: '44px !important',
    height: '44px !important'
  }
};

export const CustomIcon = injectSheet(styles)<SvgIconProps>((props: any)=> (
  <SvgIcon {...props} viewBox='0 0 33 32'>
    <g fill="none" fillRule="evenodd">
      <path fill="#00C0D9" fillRule="nonzero" d="M23.685 0c-2.494 0-4.757.485-6.443 1.302-1.684.819-2.871 2.023-2.871 3.498v7.15c-1.46-.48-3.194-.75-5.056-.75-2.495 0-4.758.485-6.444 1.302C1.187 13.321 0 14.525 0 16v11.2c0 1.475 1.187 2.68 2.871 3.498C4.557 31.515 6.82 32 9.315 32c2.494 0 4.757-.485 6.443-1.302 1.563-.76 2.696-1.854 2.852-3.188 1.464.484 3.204.757 5.075.757 2.495 0 4.758-.486 6.444-1.302 1.684-.82 2.871-2.023 2.871-3.498V4.8c0-1.475-1.187-2.68-2.871-3.498C28.443.485 26.18 0 23.685 0zm0 1.067c2.356 0 4.485.47 5.978 1.196 1.493.725 2.272 1.656 2.272 2.537s-.78 1.813-2.272 2.538c-1.493.725-3.622 1.195-5.978 1.195-2.355 0-4.484-.47-5.977-1.195-1.493-.725-2.273-1.657-2.273-2.538 0-.881.78-1.812 2.273-2.537 1.493-.725 3.622-1.196 5.977-1.196zm-2.927 1.6a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.13 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.128 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.13 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm-7.452 1.6a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.129 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.129 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.129 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.129 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm-7.452 1.6a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.13 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.128 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.13 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm-11.71 1.191c.482.475 1.095.894 1.806 1.24 1.686.817 3.949 1.302 6.443 1.302 2.495 0 4.758-.485 6.444-1.302.71-.346 1.324-.765 1.806-1.24v1.475c0 .882-.78 1.813-2.272 2.538-1.493.725-3.622 1.196-5.978 1.196-2.355 0-4.484-.471-5.977-1.196-1.493-.725-2.273-1.656-2.273-2.538V7.058zm9.58 3.075a.534.534 0 0 0 0 1.067.534.534 0 0 0 0-1.067zm2.13 0a.534.534 0 0 0 0 1.067.534.534 0 0 0 0-1.067zm-11.71.659c.482.475 1.095.891 1.806 1.24 1.686.816 3.949 1.301 6.443 1.301 2.495 0 4.758-.485 6.444-1.302.71-.348 1.324-.764 1.806-1.24v1.476c0 .88-.78 1.812-2.272 2.537C28.17 15.53 26.041 16 23.685 16c-1.979 0-3.794-.333-5.212-.873-.364-1.08-1.378-1.973-2.715-2.625-.102-.048-.21-.092-.314-.137-.002-.034-.009-.065-.009-.098v-1.475zm-6.121 1.475c2.355 0 4.484.47 5.977 1.196 1.493.725 2.273 1.656 2.273 2.537s-.78 1.813-2.273 2.538c-1.493.725-3.622 1.195-5.977 1.195-2.356 0-4.485-.47-5.978-1.195C1.844 17.813 1.065 16.88 1.065 16c0-.881.78-1.812 2.272-2.537 1.493-.725 3.622-1.196 5.978-1.196zm-2.928 1.6a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.13 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.128 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.13 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm12.241 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.13 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm4.79.658V16c0 .881-.78 1.813-2.273 2.538-1.493.725-3.622 1.195-5.978 1.195-1.908 0-3.66-.31-5.056-.814v-2.602c1.46.477 3.194.75 5.056.75 2.495 0 4.758-.486 6.444-1.302.71-.348 1.324-.765 1.806-1.24zm-26.613.942a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.129 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.129 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.129 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.129 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm-7.452 1.6a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.13 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.128 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.13 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm12.241.533a.534.534 0 0 0 0 1.067.534.534 0 0 0 0-1.067zm2.13 0a.534.534 0 0 0 0 1.067.534.534 0 0 0 0-1.067zm-26.081.658c.482.475 1.095.894 1.806 1.24 1.686.817 3.949 1.302 6.444 1.302 2.494 0 4.757-.485 6.443-1.302.71-.346 1.324-.765 1.807-1.24v1.475c0 .882-.78 1.813-2.273 2.538-1.493.725-3.622 1.196-5.977 1.196-2.356 0-4.485-.471-5.978-1.196-1.493-.725-2.272-1.656-2.272-2.538v-1.475zm30.87 0v1.475c0 .882-.78 1.813-2.272 2.538-1.493.725-3.622 1.196-5.978 1.196-1.908 0-3.663-.31-5.056-.815V20.05c1.46.477 3.194.75 5.056.75 2.495 0 4.758-.485 6.444-1.302.71-.348 1.324-.765 1.806-1.24zm-21.29 3.075a.534.534 0 0 0 0 1.067.534.534 0 0 0 0-1.067zm2.13 0a.534.534 0 0 0 0 1.067.534.534 0 0 0 0-1.067zm12.241 0a.534.534 0 0 0 0 1.067.534.534 0 0 0 0-1.067zm2.13 0a.534.534 0 0 0 0 1.067.534.534 0 0 0 0-1.067zm-26.081.659c.482.475 1.095.891 1.806 1.24 1.686.816 3.949 1.301 6.444 1.301 2.494 0 4.757-.485 6.443-1.302.71-.348 1.324-.764 1.807-1.24v1.476c0 .88-.78 1.812-2.273 2.537-1.493.725-3.622 1.196-5.977 1.196-2.356 0-4.485-.47-5.978-1.196-1.493-.725-2.272-1.656-2.272-2.537v-1.475zm30.87 0v1.475c0 .88-.78 1.812-2.272 2.537-1.493.725-3.622 1.196-5.978 1.196-1.908 0-3.663-.308-5.056-.815v-2.602c1.46.477 3.194.75 5.056.75 2.495 0 4.758-.485 6.444-1.302.71-.348 1.324-.764 1.806-1.24zm-21.29 3.075a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.13 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm12.241 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm2.13 0a.534.534 0 0 0 0 1.066.534.534 0 0 0 0-1.066zm-26.081.658c.482.475 1.095.892 1.806 1.24 1.686.816 3.949 1.302 6.444 1.302 2.494 0 4.757-.486 6.443-1.302.71-.348 1.324-.765 1.807-1.24V27.2c0 .881-.78 1.813-2.273 2.538-1.493.725-3.622 1.195-5.977 1.195-2.356 0-4.485-.47-5.978-1.195-1.493-.725-2.272-1.657-2.272-2.538v-1.475zm9.58 3.075a.534.534 0 0 0 0 1.067.534.534 0 0 0 0-1.067zm2.13 0a.534.534 0 0 0 0 1.067.534.534 0 0 0 0-1.067z"/>
    </g>
  </SvgIcon>
));

export default CustomIcon;
