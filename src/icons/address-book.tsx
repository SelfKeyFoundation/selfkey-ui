import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles: StyleSheet = {
  root: {
    width: '54px !important',
    height: '62px !important'
  }
};

export const AddressBookIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps)=> (
  <SvgIcon {...props} viewBox='0 0 54 62'>
    <defs>
        <linearGradient x1="11.0842631%" y1="68.33943%" x2="36.0705554%" y2="0%" id="addressBook-linearGradient-1">
            <stop stopColor="#09A8BA" offset="0%"></stop>
            <stop stopColor="#0ABBD0" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="-Address-Book" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="3000---Address-Book-Full-State" transform="translate(-693.000000, -146.000000)" fill="url(#addressBook-linearGradient-1)" fillRule="nonzero">
            <g id="Page-header" transform="translate(434.000000, 146.000000)">
                <g id="icon-address-book-large" transform="translate(259.000000, 0.000000)">
                    <path d="M3,0 C1.35503,0 0,1.35503 0,3 L0,59 C0,60.64497 1.35503,62 3,62 L51,62 C52.64497,62 54,60.64497 54,59 L54,3 C54,1.35503 52.64497,0 51,0 L3,0 Z M3,2 L8,2 L8,60 L3,60 C2.43497,60 2,59.56503 2,59 L2,3 C2,2.43497 2.43497,2 3,2 Z M10,2 L51,2 C51.56503,2 52,2.43497 52,3 L52,59 C52,59.56503 51.56503,60 51,60 L10,60 L10,2 Z M13,4 C12.4477153,4 12,4.44771525 12,5 C12,5.55228475 12.4477153,6 13,6 C13.5522847,6 14,5.55228475 14,5 C14,4.44771525 13.5522847,4 13,4 Z M17,4 C16.4477153,4 16,4.44771525 16,5 C16,5.55228475 16.4477153,6 17,6 C17.5522847,6 18,5.55228475 18,5 C18,4.44771525 17.5522847,4 17,4 Z M21,4 C20.4477153,4 20,4.44771525 20,5 C20,5.55228475 20.4477153,6 21,6 C21.5522847,6 22,5.55228475 22,5 C22,4.44771525 21.5522847,4 21,4 Z M25,4 C24.4477153,4 24,4.44771525 24,5 C24,5.55228475 24.4477153,6 25,6 C25.5522847,6 26,5.55228475 26,5 C26,4.44771525 25.5522847,4 25,4 Z M29,4 C28.4477153,4 28,4.44771525 28,5 C28,5.55228475 28.4477153,6 29,6 C29.5522847,6 30,5.55228475 30,5 C30,4.44771525 29.5522847,4 29,4 Z M33,4 C32.4477153,4 32,4.44771525 32,5 C32,5.55228475 32.4477153,6 33,6 C33.5522847,6 34,5.55228475 34,5 C34,4.44771525 33.5522847,4 33,4 Z M37,4 C36.4477153,4 36,4.44771525 36,5 C36,5.55228475 36.4477153,6 37,6 C37.5522847,6 38,5.55228475 38,5 C38,4.44771525 37.5522847,4 37,4 Z M41,4 C40.4477153,4 40,4.44771525 40,5 C40,5.55228475 40.4477153,6 41,6 C41.5522847,6 42,5.55228475 42,5 C42,4.44771525 41.5522847,4 41,4 Z M45,4 C44.4477153,4 44,4.44771525 44,5 C44,5.55228475 44.4477153,6 45,6 C45.5522847,6 46,5.55228475 46,5 C46,4.44771525 45.5522847,4 45,4 Z M49,4 C48.4477153,4 48,4.44771525 48,5 C48,5.55228475 48.4477153,6 49,6 C49.5522847,6 50,5.55228475 50,5 C50,4.44771525 49.5522847,4 49,4 Z M49,8 C48.4477153,8 48,8.44771525 48,9 C48,9.55228475 48.4477153,10 49,10 C49.5522847,10 50,9.55228475 50,9 C50,8.44771525 49.5522847,8 49,8 Z M49,12 C48.4477153,12 48,12.4477153 48,13 C48,13.5522847 48.4477153,14 49,14 C49.5522847,14 50,13.5522847 50,13 C50,12.4477153 49.5522847,12 49,12 Z M49,16 C48.4477153,16 48,16.4477153 48,17 C48,17.5522847 48.4477153,18 49,18 C49.5522847,18 50,17.5522847 50,17 C50,16.4477153 49.5522847,16 49,16 Z M21,20 C20.4477153,20 20,20.4477153 20,21 C20,21.5522847 20.4477153,22 21,22 C21.5522847,22 22,21.5522847 22,21 C22,20.4477153 21.5522847,20 21,20 Z M25,20 C24.4477153,20 24,20.4477153 24,21 C24,21.5522847 24.4477153,22 25,22 C25.5522847,22 26,21.5522847 26,21 C26,20.4477153 25.5522847,20 25,20 Z M29,20 C28.4477153,20 28,20.4477153 28,21 C28,21.5522847 28.4477153,22 29,22 C29.5522847,22 30,21.5522847 30,21 C30,20.4477153 29.5522847,20 29,20 Z M33,20 C32.4477153,20 32,20.4477153 32,21 C32,21.5522847 32.4477153,22 33,22 C33.5522847,22 34,21.5522847 34,21 C34,20.4477153 33.5522847,20 33,20 Z M37,20 C36.4477153,20 36,20.4477153 36,21 C36,21.5522847 36.4477153,22 37,22 C37.5522847,22 38,21.5522847 38,21 C38,20.4477153 37.5522847,20 37,20 Z M49,20 C48.4477153,20 48,20.4477153 48,21 C48,21.5522847 48.4477153,22 49,22 C49.5522847,22 50,21.5522847 50,21 C50,20.4477153 49.5522847,20 49,20 Z M49,24 C48.4477153,24 48,24.4477153 48,25 C48,25.5522847 48.4477153,26 49,26 C49.5522847,26 50,25.5522847 50,25 C50,24.4477153 49.5522847,24 49,24 Z M49,28 C48.4477153,28 48,28.4477153 48,29 C48,29.5522847 48.4477153,30 49,30 C49.5522847,30 50,29.5522847 50,29 C50,28.4477153 49.5522847,28 49,28 Z M49,32 C48.4477153,32 48,32.4477153 48,33 C48,33.5522847 48.4477153,34 49,34 C49.5522847,34 50,33.5522847 50,33 C50,32.4477153 49.5522847,32 49,32 Z M49,36 C48.4477153,36 48,36.4477153 48,37 C48,37.5522847 48.4477153,38 49,38 C49.5522847,38 50,37.5522847 50,37 C50,36.4477153 49.5522847,36 49,36 Z M49,40 C48.4477153,40 48,40.4477153 48,41 C48,41.5522847 48.4477153,42 49,42 C49.5522847,42 50,41.5522847 50,41 C50,40.4477153 49.5522847,40 49,40 Z M49,44 C48.4477153,44 48,44.4477153 48,45 C48,45.5522847 48.4477153,46 49,46 C49.5522847,46 50,45.5522847 50,45 C50,44.4477153 49.5522847,44 49,44 Z M49,48 C48.4477153,48 48,48.4477153 48,49 C48,49.5522847 48.4477153,50 49,50 C49.5522847,50 50,49.5522847 50,49 C50,48.4477153 49.5522847,48 49,48 Z M49,52 C48.4477153,52 48,52.4477153 48,53 C48,53.5522847 48.4477153,54 49,54 C49.5522847,54 50,53.5522847 50,53 C50,52.4477153 49.5522847,52 49,52 Z M13,56 C12.4477153,56 12,56.4477153 12,57 C12,57.5522847 12.4477153,58 13,58 C13.5522847,58 14,57.5522847 14,57 C14,56.4477153 13.5522847,56 13,56 Z M17,56 C16.4477153,56 16,56.4477153 16,57 C16,57.5522847 16.4477153,58 17,58 C17.5522847,58 18,57.5522847 18,57 C18,56.4477153 17.5522847,56 17,56 Z M21,56 C20.4477153,56 20,56.4477153 20,57 C20,57.5522847 20.4477153,58 21,58 C21.5522847,58 22,57.5522847 22,57 C22,56.4477153 21.5522847,56 21,56 Z M25,56 C24.4477153,56 24,56.4477153 24,57 C24,57.5522847 24.4477153,58 25,58 C25.5522847,58 26,57.5522847 26,57 C26,56.4477153 25.5522847,56 25,56 Z M29,56 C28.4477153,56 28,56.4477153 28,57 C28,57.5522847 28.4477153,58 29,58 C29.5522847,58 30,57.5522847 30,57 C30,56.4477153 29.5522847,56 29,56 Z M33,56 C32.4477153,56 32,56.4477153 32,57 C32,57.5522847 32.4477153,58 33,58 C33.5522847,58 34,57.5522847 34,57 C34,56.4477153 33.5522847,56 33,56 Z M37,56 C36.4477153,56 36,56.4477153 36,57 C36,57.5522847 36.4477153,58 37,58 C37.5522847,58 38,57.5522847 38,57 C38,56.4477153 37.5522847,56 37,56 Z M41,56 C40.4477153,56 40,56.4477153 40,57 C40,57.5522847 40.4477153,58 41,58 C41.5522847,58 42,57.5522847 42,57 C42,56.4477153 41.5522847,56 41,56 Z M45,56 C44.4477153,56 44,56.4477153 44,57 C44,57.5522847 44.4477153,58 45,58 C45.5522847,58 46,57.5522847 46,57 C46,56.4477153 45.5522847,56 45,56 Z M49,56 C48.4477153,56 48,56.4477153 48,57 C48,57.5522847 48.4477153,58 49,58 C49.5522847,58 50,57.5522847 50,57 C50,56.4477153 49.5522847,56 49,56 Z" id="Shape"></path>
                </g>
            </g>
        </g>
    </g>
  </SvgIcon>
));

export default AddressBookIcon;




