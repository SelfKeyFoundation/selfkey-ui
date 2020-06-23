import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = createStyles({
    root: {
        fill: '#00C0D9',
        transition: 'all 0.2s ease-out',
    }
});

export const PassportsIcon = withStyles(styles)((props: SvgIconProps & WithStyles<typeof styles>) => (
    <SvgIcon style={{ width: props.width || '36px', height: props.height || '44px' }} {...props} viewBox={props.viewBox || "0 0 36 44"}>
        <g id="🌐-Web-Marketplace-passports" stroke="none" strokeWidth="1" fill="inherit" fillRule="evenodd">
            <g id="5000---Web-Marketplace" transform="translate(-1041.000000, -443.000000)" fill="inherit" fill-rule="nonzero">
                <g id="Makretplaces-Boxes" transform="translate(230.000000, 426.000000)">
                    <g id="Exchange-Box-3" transform="translate(781.000000, 0.000000)">
                        <g id="icon-marketplace-passports" transform="translate(30.000000, 17.000000)">
                            <path d="M0,0 L0,44 L35.483871,44 L35.483871,0 L0,0 Z M1.41935484,1.41935484 L34.0645161,1.41935484 L34.0645161,42.5806452 L1.41935484,42.5806452 L1.41935484,1.41935484 Z M4.96774194,2.83870968 C4.5768651,2.83870968 4.25806452,3.15751026 4.25806452,3.5483871 C4.25806452,3.93926394 4.5768651,4.25806452 4.96774194,4.25806452 C5.35861877,4.25806452 5.67741935,3.93926394 5.67741935,3.5483871 C5.67741935,3.15751026 5.35861877,2.83870968 4.96774194,2.83870968 Z M4.96774194,5.67741935 C4.5768651,5.67741935 4.25806452,5.99621994 4.25806452,6.38709677 C4.25806452,6.77797361 4.5768651,7.09677419 4.96774194,7.09677419 C5.35861877,7.09677419 5.67741935,6.77797361 5.67741935,6.38709677 C5.67741935,5.99621994 5.35861877,5.67741935 4.96774194,5.67741935 Z M13.483871,5.67741935 C11.5322581,5.67741935 9.93548387,7.27419355 9.93548387,9.22580645 C9.93548387,10.3041833 10.4344758,11.263357 11.1995968,11.9175909 C9.60836729,12.7464721 8.51612903,14.4097786 8.51612903,16.3225806 L9.93548387,16.3225806 C9.93548387,14.354335 11.5156254,12.7741935 13.483871,12.7741935 C15.4521173,12.7741935 17.0322581,14.354335 17.0322581,16.3225806 L18.4516129,16.3225806 C18.4516129,14.4097786 17.3593754,12.7464721 15.7681452,11.9175909 C16.5332661,11.263357 17.0322581,10.3041833 17.0322581,9.22580645 C17.0322581,7.27419355 15.4354839,5.67741935 13.483871,5.67741935 Z M21.2903226,6.38709677 L21.2903226,7.80645161 L29.8064516,7.80645161 L29.8064516,6.38709677 L21.2903226,6.38709677 Z M13.483871,7.09677419 C14.6675909,7.09677419 15.6129032,8.04208652 15.6129032,9.22580645 C15.6129032,10.4095264 14.6675909,11.3548387 13.483871,11.3548387 C12.300151,11.3548387 11.3548387,10.4095264 11.3548387,9.22580645 C11.3548387,8.04208652 12.300151,7.09677419 13.483871,7.09677419 Z M4.96774194,8.51612903 C4.5768651,8.51612903 4.25806452,8.83492961 4.25806452,9.22580645 C4.25806452,9.61668329 4.5768651,9.93548387 4.96774194,9.93548387 C5.35861877,9.93548387 5.67741935,9.61668329 5.67741935,9.22580645 C5.67741935,8.83492961 5.35861877,8.51612903 4.96774194,8.51612903 Z M21.2903226,10.6451613 L21.2903226,12.0645161 L29.8064516,12.0645161 L29.8064516,10.6451613 L21.2903226,10.6451613 Z M4.96774194,11.3548387 C4.5768651,11.3548387 4.25806452,11.6736393 4.25806452,12.0645161 C4.25806452,12.455393 4.5768651,12.7741935 4.96774194,12.7741935 C5.35861877,12.7741935 5.67741935,12.455393 5.67741935,12.0645161 C5.67741935,11.6736393 5.35861877,11.3548387 4.96774194,11.3548387 Z M4.96774194,14.1935484 C4.5768651,14.1935484 4.25806452,14.512349 4.25806452,14.9032258 C4.25806452,15.2941026 4.5768651,15.6129032 4.96774194,15.6129032 C5.35861877,15.6129032 5.67741935,15.2941026 5.67741935,14.9032258 C5.67741935,14.512349 5.35861877,14.1935484 4.96774194,14.1935484 Z M21.2903226,14.9032258 L21.2903226,16.3225806 L29.8064516,16.3225806 L29.8064516,14.9032258 L21.2903226,14.9032258 Z M4.96774194,17.0322581 C4.5768651,17.0322581 4.25806452,17.3510586 4.25806452,17.7419355 C4.25806452,18.1328123 4.5768651,18.4516129 4.96774194,18.4516129 C5.35861877,18.4516129 5.67741935,18.1328123 5.67741935,17.7419355 C5.67741935,17.3510586 5.35861877,17.0322581 4.96774194,17.0322581 Z M4.96774194,19.8709677 C4.5768651,19.8709677 4.25806452,20.1897683 4.25806452,20.5806452 C4.25806452,20.971522 4.5768651,21.2903226 4.96774194,21.2903226 C5.35861877,21.2903226 5.67741935,20.971522 5.67741935,20.5806452 C5.67741935,20.1897683 5.35861877,19.8709677 4.96774194,19.8709677 Z M4.96774194,22.7096774 C4.5768651,22.7096774 4.25806452,23.028478 4.25806452,23.4193548 C4.25806452,23.8102317 4.5768651,24.1290323 4.96774194,24.1290323 C5.35861877,24.1290323 5.67741935,23.8102317 5.67741935,23.4193548 C5.67741935,23.028478 5.35861877,22.7096774 4.96774194,22.7096774 Z M8.51612903,22.7096774 L8.51612903,24.1290323 L29.8064516,24.1290323 L29.8064516,22.7096774 L8.51612903,22.7096774 Z M4.96774194,25.5483871 C4.5768651,25.5483871 4.25806452,25.8671877 4.25806452,26.2580645 C4.25806452,26.6489414 4.5768651,26.9677419 4.96774194,26.9677419 C5.35861877,26.9677419 5.67741935,26.6489414 5.67741935,26.2580645 C5.67741935,25.8671877 5.35861877,25.5483871 4.96774194,25.5483871 Z M8.51612903,27.6774194 L8.51612903,29.0967742 L25.5483871,29.0967742 L25.5483871,27.6774194 L8.51612903,27.6774194 Z M4.96774194,28.3870968 C4.5768651,28.3870968 4.25806452,28.7058974 4.25806452,29.0967742 C4.25806452,29.487651 4.5768651,29.8064516 4.96774194,29.8064516 C5.35861877,29.8064516 5.67741935,29.487651 5.67741935,29.0967742 C5.67741935,28.7058974 5.35861877,28.3870968 4.96774194,28.3870968 Z M4.96774194,31.2258065 C4.5768651,31.2258065 4.25806452,31.544607 4.25806452,31.9354839 C4.25806452,32.3263607 4.5768651,32.6451613 4.96774194,32.6451613 C5.35861877,32.6451613 5.67741935,32.3263607 5.67741935,31.9354839 C5.67741935,31.544607 5.35861877,31.2258065 4.96774194,31.2258065 Z M8.51612903,32.6451613 L8.51612903,34.0645161 L29.8064516,34.0645161 L29.8064516,32.6451613 L8.51612903,32.6451613 Z M4.96774194,34.0645161 C4.5768651,34.0645161 4.25806452,34.3833167 4.25806452,34.7741935 C4.25806452,35.1650704 4.5768651,35.483871 4.96774194,35.483871 C5.35861877,35.483871 5.67741935,35.1650704 5.67741935,34.7741935 C5.67741935,34.3833167 5.35861877,34.0645161 4.96774194,34.0645161 Z M4.96774194,36.9032258 C4.5768651,36.9032258 4.25806452,37.2220264 4.25806452,37.6129032 C4.25806452,38.0037801 4.5768651,38.3225806 4.96774194,38.3225806 C5.35861877,38.3225806 5.67741935,38.0037801 5.67741935,37.6129032 C5.67741935,37.2220264 5.35861877,36.9032258 4.96774194,36.9032258 Z M8.51612903,37.6129032 L8.51612903,39.0322581 L25.5483871,39.0322581 L25.5483871,37.6129032 L8.51612903,37.6129032 Z M4.96774194,39.7419355 C4.5768651,39.7419355 4.25806452,40.0607361 4.25806452,40.4516129 C4.25806452,40.8424897 4.5768651,41.1612903 4.96774194,41.1612903 C5.35861877,41.1612903 5.67741935,40.8424897 5.67741935,40.4516129 C5.67741935,40.0607361 5.35861877,39.7419355 4.96774194,39.7419355 Z" id="Shape-passports"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </SvgIcon>
));

export default PassportsIcon;
