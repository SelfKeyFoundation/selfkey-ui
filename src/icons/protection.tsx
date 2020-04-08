import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles: StyleSheet = {
    root: {
        fill: '#93A4AF',
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: 'white',
        }
    }
};

export const ProtectionIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps) => (
        <SvgIcon style={{ width: props.width || '26px', height: props.height || '29px' }} {...props} viewBox={props.viewBox || "0 0 26 29"}>
            <g id="🏦-Corporate-Wallet-protection" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="802.1---All-Member-Types-protection" transform="translate(-590.000000, -821.000000)" fill="#23E6FE" fillRule="nonzero">
                    <g id="TST-protection" transform="translate(102.000000, 546.000000)">
                        <g id="Radio-button-replace-protection" transform="translate(0.000000, 251.000000)">
                            <g id="Btn-shareholder-protection" transform="translate(460.000000, 0.000000)">
                                <path d="M39.9585218,24.2577597 C40.2884092,23.9159247 40.840434,23.9114997 41.1771802,24.2599723 C43.7001217,26.8804861 47.8665264,29.733315 51.9942118,29.8819967 C52.4095027,29.8972631 52.7506739,30.206574 52.8053232,30.618546 C54.8384119,45.8856279 47.5463741,53 40.7025937,53 L40.7025937,53 L40.6627683,53 C33.5512725,52.9714584 26.3616746,45.4391405 28.329715,30.6189886 C28.3845856,30.206574 28.7257569,29.8972631 29.1414902,29.8824392 C32.6186935,29.7583165 36.6620818,27.6557547 39.9585218,24.2577597 Z M40.5665235,24.8582389 C37.6258573,27.8876272 33.3946258,30.5838094 29.1762268,30.7358098 C26.1145356,53.8254929 45.836314,58.4452437 51.0525615,43.6138079 C52.3137004,40.0290759 52.6190287,35.6962895 51.9594752,30.7358098 C49.9655483,30.6634603 47.8647564,30.0238195 45.7148464,28.8354727 C43.8720349,27.8163839 42.092059,26.4413 40.5665235,24.8582389 Z M40.1038846,26.8758399 C40.365405,26.642861 40.7594556,26.644631 41.020976,26.8787161 C43.9319943,29.4883886 47.2695873,31.2086263 50.4191157,31.7230382 C50.7290904,31.773705 50.9660518,32.026154 50.9954783,32.3376775 C53.1905238,55.4169616 31.8774978,56.4975585 30.0592453,37.6508335 C30.0346863,37.4008182 30.2329285,37.1837696 30.4847138,37.1837696 L30.4847138,37.1837696 C30.7046386,37.1837696 30.8887207,37.3512577 30.9097397,37.5698551 C32.6215698,55.3058929 52.148646,54.3051681 50.1571528,32.544991 C46.924876,31.9878774 43.5275448,30.2413106 40.5607709,27.6130529 C38.3920545,29.5235677 35.0095473,31.8807912 30.9798767,32.5525136 C30.8811981,33.6574482 30.8407089,34.7114949 30.8528778,35.7139897 L30.8528778,35.7139897 C30.8528778,35.9542698 30.6626007,36.1458744 30.4260818,36.1458744 C30.1919968,36.1458744 30.0017197,35.9578099 29.9988433,35.7237248 C29.9857895,34.6533055 30.0307037,33.5271306 30.1406662,32.3449788 C30.1698715,32.0312429 30.4083816,31.7776875 30.7212326,31.7287908 C34.6716948,31.1072927 38.004199,28.7465292 40.1038846,26.8758399 Z M41.5964536,30.2636572 C42.2378644,29.2724463 43.7709225,29.9561163 43.4693554,31.0920263 L43.4693554,31.0920263 L43.4574078,31.1300816 L42.7777204,33.0485615 L43.5290936,33.0485615 C43.9530133,33.0485615 44.3472851,33.2764516 44.5590237,33.6432881 L44.5590237,33.6432881 L45.357745,35.0270009 C45.3964642,35.0942616 45.4152706,35.1677174 45.4152706,35.2400669 C45.4152706,35.3876423 45.338496,35.5312352 45.201762,35.6104435 C44.9971036,35.728371 44.7358044,35.658234 44.6178769,35.4537968 L44.6178769,35.4537968 L43.8191555,34.0705266 C43.7594174,33.9674229 43.6483487,33.9030385 43.5290936,33.9030385 L43.5290936,33.9030385 L42.4748258,33.9030385 L41.3035154,37.2098774 C41.2951077,37.2333301 41.2977628,37.2554554 41.3125867,37.2760319 C41.3269681,37.2966083 41.3468808,37.306786 41.3718823,37.306786 L41.3718823,37.306786 L44.7767361,37.306786 C45.5447033,37.306786 45.9792431,38.1880344 45.5132855,38.7980274 L45.5132855,38.7980274 L43.1808423,41.8462222 C43.0237531,42.0513232 42.7219647,42.0714572 42.5394314,41.8887026 C42.3878735,41.7371447 42.3721647,41.4968646 42.502261,41.3267215 C43.4746655,40.0551837 44.3355587,38.9305575 44.8342618,38.2785267 C44.8411205,38.2694553 44.8621395,38.2426837 44.8422268,38.2021946 C44.8216503,38.1612628 44.7875775,38.1612628 44.7767361,38.1612628 L44.7767361,38.1612628 L41.3718823,38.1612628 C40.7322415,38.1612628 40.2844266,37.5271534 40.4981565,36.9244617 C42.7241772,30.641335 40.9282712,35.7124409 42.6456326,30.8628087 C42.6724042,30.7466512 42.6040372,30.6886831 42.5414228,30.660584 C42.4763745,30.6315999 42.384776,30.6196523 42.314639,30.7267385 C38.6768064,36.4118198 43.3463391,29.1146932 36.3116179,40.1093905 C36.2963515,40.1332858 36.2956877,40.1585086 36.3094054,40.1835101 C36.323123,40.2085116 36.3448058,40.2217868 36.3733473,40.2217868 L36.3733473,40.2217868 L39.2465315,40.2217868 C39.9313078,40.2217868 40.3766889,40.9355472 40.0839719,41.5484164 C37.0191832,47.9689408 39.4180021,42.9445193 37.1114454,47.7764512 C37.0625487,47.8738023 37.0550261,47.9530107 37.1554747,48.026909 C37.2105665,48.0673982 37.293315,48.0977098 37.3798246,48.0207139 C38.1126127,47.0631334 39.9160413,44.7284777 41.5194577,42.6325534 C41.6763257,42.4272311 41.978114,42.4073184 42.1608686,42.5900729 L42.1608686,42.5900729 C42.3128689,42.741852 42.3287991,42.9821322 42.1984814,43.1522753 L42.1984814,43.1522753 L40.9156598,44.8061373 L43.5290936,44.8061373 C43.6483487,44.8061373 43.7594174,44.7417528 43.8191555,44.6386492 L43.8191555,44.6386492 L46.7733181,39.5221866 C46.8326138,39.4184192 46.8326138,39.2907566 46.7733181,39.1876529 L46.7733181,39.1876529 L45.4955853,36.9695972 C45.4568661,36.9023365 45.4387234,36.8288807 45.4387234,36.7565311 C45.4387234,36.608292 45.5150555,36.4646992 45.652232,36.3857121 C45.8566693,36.2677845 46.1177471,36.3377003 46.2361172,36.541695 L46.2361172,36.541695 L47.5134075,38.759972 C47.7251461,39.1268085 47.7251461,39.5823673 47.5134075,39.9494251 L47.5134075,39.9494251 L44.5590237,45.0658876 C44.3472851,45.4327242 43.9530133,45.6606142 43.5290936,45.6606142 L43.5290936,45.6606142 L40.2616376,45.6606142 L38.0393782,48.5647736 C38.0292005,48.5778275 38.0183592,48.5908814 38.0064115,48.6028291 C37.1742811,49.4579698 35.7916747,48.4552537 36.344142,47.4003221 L36.344142,47.4003221 L37.2094603,45.5871584 C36.9525862,45.4920198 36.731555,45.3097078 36.5908385,45.0658876 L36.5908385,45.0658876 L33.6366759,39.9494251 C33.4247161,39.5823673 33.4247161,39.1268085 33.6366759,38.759972 L33.6366759,38.759972 L36.5908385,33.6432881 C36.8027983,33.2764516 37.1968489,33.0485615 37.6207686,33.0485615 L37.6207686,33.0485615 L39.8144865,33.0485615 C39.8282041,33.0275425 41.5964536,30.2636572 41.5964536,30.2636572 Z M39.2682142,33.9030385 L37.6207686,33.9030385 C37.5017347,33.9030385 37.390666,33.9674229 37.3309278,34.0705266 L37.3309278,34.0705266 L34.3765441,39.1872104 C34.3174697,39.2907566 34.3174697,39.4184192 34.3765441,39.5215228 L34.3765441,39.5215228 L37.3309278,44.6386492 C37.384471,44.7309114 37.478282,44.7919771 37.5831556,44.8039247 L37.5831556,44.8039247 L39.3126859,41.1802523 C39.3239698,41.1563571 39.3228635,41.1324618 39.3087034,41.1103366 C39.294322,41.0875476 39.273303,41.0760425 39.2465315,41.0760425 L39.2465315,41.0760425 L36.3733473,41.0760425 C35.6434355,41.0760425 35.1969481,40.2671436 35.5923262,39.6485217 L35.5923262,39.6485217 L39.2682142,33.9030385 Z" id="icon-protection-CORP"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </SvgIcon>
    )
);

export default ProtectionIcon;
