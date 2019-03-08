import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles: StyleSheet = {
  root: {
    height: '50px',
    width: '43.18px',
  }
};

export const LWSSelfkeyIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps)=> (
  <SvgIcon {...props} viewBox='0 0 53 60'>
    <defs>
        <path d="M70.1818182,34.4995823 L48.5909091,22 L27,34.4995823 L27,59.5004177 L48.5909091,72 L70.1818182,59.5004177 L70.1818182,34.4995823 Z M55.4868898,32.8086884 C55.4841926,33.5992931 54.8562499,34.2395224 54.0808177,34.2422723 L48.8514749,34.2422723 L48.8514749,37.3299916 L52.7091599,37.3299916 C53.4857121,37.3299917 54.115232,37.9718291 54.115232,38.7635756 C54.115232,39.5553221 53.4857121,40.1971595 52.7091599,40.1971596 L48.8514749,40.1971596 L48.8514749,51.1896408 C48.8539896,51.2402906 48.8539896,51.2910377 48.8514749,51.3416876 C51.5800796,52.0741359 53.3548884,54.7535311 53.0020618,57.6077498 C52.6492352,60.4619686 50.2778561,62.6085761 47.4563291,62.6278292 C44.6348022,62.6470823 42.235455,60.5330285 41.84519,57.6838804 C41.4549251,54.8347322 43.1944,52.1313568 45.9131447,51.3617377 C45.9068271,51.3062722 45.9035445,51.250491 45.9033121,51.1946533 L45.9033121,32.8822055 C45.9033121,32.0517021 46.5636476,31.3784461 47.3782129,31.3784461 C47.5015447,31.3788325 47.6243339,31.395113 47.7436605,31.4269006 C47.859651,31.3951689 47.9791829,31.378882 48.0992755,31.3784461 L54.085734,31.3784461 C54.8611662,31.3811961 55.4891089,32.0214254 55.4918061,32.8120301 L55.4868898,32.8086884 Z" id="lws-selfkey-path-1"></path>
        <filter x="-16.2%" y="-14.3%" width="132.4%" height="128.6%" filterUnits="objectBoundingBox" id="lws-selfkey-filter-2">
            <feMorphology radius="1.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
            <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
            <feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="shadowInner"></feMorphology>
            <feOffset dx="0" dy="0" in="shadowInner" result="shadowInner"></feOffset>
            <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"></feComposite>
            <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.0274509804   0 0 0 0 0.62745098   0 0 0 0 0.694117647  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
    </defs>
    <g id="Modal---Dark" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="1.-Select-Wallet-Modal" transform="translate(-442.000000, -135.000000)" fillRule="nonzero">
            <g id="Modal-content" transform="translate(420.000000, 100.000000)">
                <g id="Modal-Title" transform="translate(0.000000, 18.000000)">
                    <g id="title">
                        <g id="sk-logo">
                            <use fill="black" fillOpacity="1" filter="url(#lws-selfkey-filter-2)" xlinkHref="#lws-selfkey-path-1"></use>
                            <path stroke="#03BED3" strokeWidth="1" d="M48.5909091,21.4222549 L70.6818182,34.2113012 L70.6818182,59.7886988 L48.5909091,72.5777451 L26.5,59.7886988 L26.5,34.2113012 L48.5909091,21.4222549 Z M54.9871835,32.721751 C54.9901385,32.752 54.9917031,32.7826839 54.991809,32.8137358 L55.4918061,32.8120301 L55.7728794,32.3985113 L54.9901014,31.8664484 L54.9871835,32.721751 Z"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
  </SvgIcon>
));

export default LWSSelfkeyIcon;
