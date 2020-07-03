var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import LinearGradient from './_linearGradient';
var styles = createStyles({
    root: {
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: 'white',
        },
    }
});
var linearGradientColor = 'url(#default-linear-gradient)';
export var DownloadIcon = withStyles(styles)(function (props) { return (React.createElement(SvgIcon, __assign({ style: { width: props.width || '74px', height: props.height || '74px', fill: props.fill || linearGradientColor } }, props, { viewBox: props.viewBox || "0 0 74 74" }),
    React.createElement(LinearGradient, null),
    React.createElement("g", { id: "Modal---Dark", stroke: "none", strokeWidth: "1", fill: "inherit", fillRule: "evenodd" },
        React.createElement("g", { id: "2.3-Error---No-Plugin", transform: "translate(-683.000000, -277.000000)", fill: "inherit", fillRule: "nonzero" },
            React.createElement("g", { id: "key", transform: "translate(683.000000, 277.000000)" },
                React.createElement("g", { id: "icon-download" },
                    React.createElement("path", { d: "M37,0 C16.5772961,0 0,16.5772961 0,37 C0,57.4227039 16.5772961,74 37,74 C57.4227039,74 74,57.4227039 74,37 C74,16.5772961 57.4227039,0 37,0 Z M37,2.24242424 C56.2095176,2.24242424 71.7575758,17.7904835 71.7575758,37 C71.7575758,56.2095176 56.2095176,71.7575758 37,71.7575758 C17.7904835,71.7575758 2.24242424,56.2095176 2.24242424,37 C2.24242424,17.7904835 17.7904835,2.24242424 37,2.24242424 Z M37,5.60606061 C36.3824577,5.60606061 35.8787879,6.10973039 35.8787879,6.72727273 C35.8787879,7.34481506 36.3824577,7.84848485 37,7.84848485 C37.6175423,7.84848485 38.1212121,7.34481506 38.1212121,6.72727273 C38.1212121,6.10973039 37.6175423,5.60606061 37,5.60606061 Z M42.934541,6.18418561 C42.3870744,6.17104612 41.9140631,6.55208333 41.8045688,7.090791 C41.6863168,7.69519385 42.0804924,8.28645833 42.6892758,8.40909091 C43.2936787,8.52734403 43.8849432,8.13316733 44.0075758,7.52876448 C44.1258289,6.91998106 43.7316522,6.32871658 43.1272493,6.206084 C43.061553,6.19732509 43.0002373,6.18856506 42.934541,6.18418561 Z M31.1004969,6.18856506 C31.0260417,6.18856506 30.9515865,6.19294564 30.8771312,6.206084 C30.2683478,6.32871658 29.8741711,6.91998106 29.9968037,7.52876448 C30.0537411,7.81782642 30.2245499,8.07623106 30.4741956,8.24266155 C30.7194608,8.40471145 31.0216622,8.46602718 31.3151047,8.40909091 C31.923887,8.28645833 32.3180637,7.69957442 32.1954312,7.090791 C32.0903175,6.56960227 31.6348251,6.19294564 31.1004969,6.18856506 Z M25.4243605,7.9098017 C25.2754501,7.9098017 25.1265385,7.93607955 24.986387,7.99301582 C24.4126426,8.23390152 24.1410985,8.88648173 24.3819842,9.46022727 C24.6184893,10.0339728 25.2710706,10.3055158 25.8448151,10.0690107 C26.4185606,9.828125 26.6901047,9.17554479 26.4535985,8.60179924 C26.2784091,8.18572415 25.8754735,7.91418115 25.4243605,7.9098017 Z M48.6106774,7.9098017 C48.1464249,7.90104167 47.7259704,8.17258579 47.5464015,8.60179924 C47.3098964,9.17554479 47.5814394,9.828125 48.1551849,10.0690107 C48.7289305,10.3055158 49.3815107,10.0339728 49.6180158,9.46022727 C49.8589015,8.88648173 49.5873585,8.23390152 49.013613,7.99301582 C48.8866009,7.940459 48.7464494,7.91418115 48.6106774,7.9098017 Z M20.1949577,10.704072 C19.9672115,10.704072 19.7438447,10.7697683 19.5555158,10.8967803 C19.0430871,11.2384002 18.9029356,11.9347772 19.2489349,12.4515865 C19.5905537,12.9640152 20.2869318,13.1041667 20.8037411,12.7581673 C21.3205492,12.4165486 21.4563213,11.7201705 21.1147014,11.2077418 C20.9088547,10.8967803 20.5628554,10.7084514 20.1949577,10.704072 Z M53.8357008,10.704072 C53.4546635,10.6996925 53.0955258,10.8880214 52.8852986,11.2077418 C52.5392992,11.7201705 52.6794508,12.4165486 53.1918795,12.7581673 C53.7086887,13.1041667 54.4050668,12.9640152 54.7466856,12.4515865 C54.9131161,12.2063213 54.9744318,11.8997393 54.9174955,11.6106774 C54.8605593,11.3172348 54.6897493,11.0588302 54.4401047,10.8967803 C54.2605348,10.7741477 54.0546881,10.7084514 53.8357008,10.704072 Z M15.609375,14.4706439 C15.3071736,14.4706439 15.0137311,14.5888971 14.8035038,14.8035038 C14.3655303,15.2370978 14.3655303,15.9509949 14.8035038,16.3845878 C15.2370978,16.8225613 15.9509949,16.8225613 16.3845878,16.3845878 C16.8225613,15.9509949 16.8225613,15.2370978 16.3845878,14.8035038 C16.1787411,14.5932765 15.9028175,14.4750234 15.609375,14.4706439 Z M58.4212834,14.4706439 C58.119082,14.4706439 57.8256395,14.5888971 57.6154122,14.8035038 C57.1774387,15.2370978 57.1774387,15.9509949 57.6154122,16.3845878 C58.0490062,16.8225613 58.7629022,16.8225613 59.1964962,16.3845878 C59.6344697,15.9509949 59.6344697,15.2370978 59.1964962,14.8035038 C58.9906484,14.5932765 58.7147259,14.4750234 58.4212834,14.4706439 Z M62.1834759,19.0606061 C61.9557297,19.0562266 61.7367424,19.1219229 61.5484135,19.2489349 C61.0359848,19.5905537 60.8958333,20.2869318 61.2418327,20.7993605 C61.5834514,21.3161698 62.2798295,21.4563213 62.7922582,21.110322 C63.3090675,20.7643226 63.449219,20.0723251 63.1032197,19.5555158 C62.8973719,19.2489349 62.5513737,19.0606061 62.1834759,19.0606061 Z M11.8471825,19.0606061 C11.4661464,19.0518472 11.1070076,19.2401749 10.8967803,19.5555158 C10.5551615,20.0723251 10.6909325,20.7687032 11.2077418,21.110322 C11.7245499,21.4563213 12.4165486,21.3161698 12.7625479,20.8037411 C13.1041667,20.2869318 12.9683946,19.5905537 12.4515865,19.2489349 C12.2720176,19.1306818 12.0661698,19.0649855 11.8471825,19.0606061 Z M64.9777462,24.2943895 C64.8288358,24.29001 64.6799242,24.3206673 64.5397727,24.3776047 C63.9660272,24.6141098 63.6944842,25.2710706 63.9309893,25.8404356 C64.171875,26.4141812 64.8244552,26.6857242 65.3982008,26.449219 C65.9719463,26.2127128 66.2434893,25.5557531 66.0069842,24.9820076 C65.8317948,24.5703131 65.4288592,24.2943895 64.9777462,24.2943895 Z M9.05729167,24.2943895 C8.59304033,24.2856295 8.17258579,24.5571736 7.99739639,24.986387 C7.76089015,25.5601326 8.03243427,26.2127128 8.60179924,26.4535985 C9.17554479,26.6901047 9.83250445,26.4185606 10.0690107,25.8448151 C10.3055158,25.2710706 10.0339728,24.6184893 9.46022727,24.3819842 C9.33321524,24.3250479 9.19744318,24.2987689 9.05729167,24.2943895 Z M66.6946023,29.9749053 C66.6201471,29.9705258 66.5456918,29.9792848 66.4712355,29.9924242 C65.8668327,30.1150568 65.472656,30.7063213 65.5909091,31.3107242 C65.7135417,31.9195076 66.3048062,32.3136843 66.909209,32.1954312 C67.5179924,32.0727986 67.9121691,31.4815341 67.793916,30.8727507 C67.6888024,30.3515631 67.2289305,29.9749053 66.6946023,29.9749053 Z M7.34043561,29.9749053 C6.79296903,29.9617658 6.31995767,30.3384236 6.21046458,30.8727507 C6.15352718,31.1661932 6.21046458,31.4727752 6.37689394,31.7180403 C6.54332442,31.9676849 6.80172794,32.1384949 7.09517045,32.1954312 C7.38423352,32.2523674 7.68643494,32.1910517 7.93607955,32.0290007 C8.1813447,31.8625713 8.35215464,31.6041667 8.40909091,31.3107242 C8.53172348,30.7063213 8.13754791,30.1150568 7.53314394,29.9924242 C7.46744764,29.9836653 7.40613191,29.9749053 7.34043561,29.9749053 Z M6.72727273,35.8787879 C6.10973039,35.8787879 5.60606061,36.3824577 5.60606061,37 C5.60606061,37.6175423 6.10973039,38.1212121 6.72727273,38.1212121 C7.34481506,38.1212121 7.84848485,37.6175423 7.84848485,37 C7.84848485,36.3824577 7.34481506,35.8787879 6.72727273,35.8787879 Z M67.2727273,35.8787879 C66.6551849,35.8787879 66.1515152,36.3824577 66.1515152,37 C66.1515152,37.6175423 66.6551849,38.1212121 67.2727273,38.1212121 C67.8902696,38.1212121 68.3939394,37.6175423 68.3939394,37 C68.3939394,36.3824577 67.8902696,35.8787879 67.2727273,35.8787879 Z M7.31415776,41.7826705 C7.23970142,41.7826705 7.16524621,41.7914305 7.090791,41.8045688 C6.48200758,41.9272014 6.087832,42.5184659 6.21046458,43.1272493 C6.33309715,43.7316522 6.91998106,44.1258289 7.52876448,44.0075758 C8.13754791,43.8849432 8.53172348,43.2936787 8.40909091,42.6892758 C8.30397727,42.1637077 7.84848485,41.7870499 7.31415776,41.7826705 Z M66.7208812,41.7826705 C66.1734135,41.769531 65.7004022,42.1505682 65.5909091,42.6892758 C65.472656,43.2936787 65.8668327,43.8849432 66.4712355,44.0075758 C67.0800189,44.1258289 67.6712834,43.7316522 67.793916,43.1272493 C67.9121691,42.5184659 67.5179924,41.9272014 66.909209,41.8045688 C66.8478933,41.7958099 66.7865764,41.7870499 66.7208812,41.7826705 Z M64.9952652,47.4588068 C64.5310138,47.4500479 64.1105593,47.7259704 63.9309893,48.1551849 C63.6944842,48.7245499 63.9660272,49.3815107 64.5397727,49.6180158 C65.1135183,49.8545221 65.7660985,49.5829779 66.0069842,49.013613 C66.2434893,48.4398674 65.9719463,47.7829078 65.3982008,47.5464015 C65.2711887,47.4938447 65.1310372,47.4631863 64.9952652,47.4588068 Z M9.03977273,47.4631863 C8.8908623,47.4631863 8.74195076,47.4894652 8.60179924,47.5464015 C8.33025624,47.6602752 8.11126894,47.8792614 7.99739639,48.1551849 C7.88352273,48.4311085 7.88352273,48.7376894 7.99301582,49.013613 C8.23390152,49.5873585 8.88648173,49.8589015 9.46022727,49.6180158 C9.73615085,49.5085227 9.95513703,49.2895365 10.0690107,49.013613 C10.1828832,48.7376894 10.1828832,48.4311085 10.0690107,48.1551849 C9.89820076,47.7391098 9.4908857,47.4675668 9.03977273,47.4631863 Z M62.1922348,52.6969697 C61.8111976,52.6882108 61.4520599,52.8765385 61.2418327,53.1918795 C60.8958333,53.7086887 61.0359848,54.4006863 61.5484135,54.7466856 C61.7936787,54.9131161 62.1002607,54.9744318 62.3893226,54.9131161 C62.6827652,54.8561787 62.9411698,54.6853699 63.1032197,54.4357242 C63.449219,53.9232955 63.3090675,53.2269173 62.7922582,52.8852986 C62.6170688,52.762666 62.4068416,52.6969697 62.1922348,52.6969697 Z M11.842803,52.6969697 C11.6150568,52.6925902 11.3960706,52.7582865 11.2077418,52.8852986 C10.6953131,53.2312979 10.5551615,53.9232955 10.8967803,54.4401047 C11.2427796,54.9525334 11.9391578,55.0926849 12.4559659,54.7466856 C12.9683946,54.4050668 13.1085461,53.7086887 12.7625479,53.1918795 C12.5567001,52.8852986 12.2107008,52.7013492 11.842803,52.6969697 Z M15.609375,57.2869318 C15.3071736,57.2825524 15.0137311,57.4008055 14.8035038,57.6154122 C14.3655303,58.0490062 14.3655303,58.7629022 14.8035038,59.1964962 C15.2370978,59.6344697 15.9509949,59.6344697 16.3845878,59.1964962 C16.8225613,58.7629022 16.8225613,58.0490062 16.3845878,57.6154122 C16.1787411,57.4051849 15.9028175,57.2869318 15.609375,57.2869318 Z M58.4212834,57.2869318 C58.119082,57.2825524 57.8256395,57.4008055 57.6154122,57.6154122 C57.1774387,58.0490062 57.1774387,58.7629022 57.6154122,59.1964962 C58.0490062,59.6344697 58.7629022,59.6344697 59.1964962,59.1964962 C59.6344697,58.7629022 59.6344697,58.0490062 59.1964962,57.6154122 C58.9906484,57.4051849 58.7147259,57.2869318 58.4212834,57.2869318 Z M20.2037166,61.0491243 C19.8226805,61.0403643 19.4635417,61.2286932 19.2533144,61.5440341 C18.9073151,62.0608434 19.0474666,62.7572204 19.5642758,63.1032197 C20.0767045,63.4448396 20.7730827,63.3046881 21.1147014,62.7922582 C21.4607008,62.2754501 21.3205492,61.5834514 20.8081205,61.2374532 C20.6285517,61.1192001 20.4183244,61.0491243 20.2037166,61.0491243 Z M53.8313213,61.0491243 C53.6035751,61.0447449 53.3845878,61.1104401 53.19626,61.2330726 C52.9466143,61.3995031 52.7758055,61.6579078 52.7188681,61.9513492 C52.6619318,62.2404122 52.7232487,62.5469931 52.889678,62.7922582 C53.2312979,63.3046881 53.9276749,63.4448396 54.4444842,63.1032197 C54.9569129,62.7572204 55.0970644,62.0608434 54.7510651,61.5440341 C54.5495978,61.2374532 54.2035985,61.0491243 53.8313213,61.0491243 Z M25.4418795,63.8433946 C24.9776281,63.8346357 24.5571736,64.1105593 24.3819842,64.5397727 C24.1454779,65.1091388 24.4170221,65.7660985 24.986387,66.0026047 C25.5601326,66.2391098 26.2170934,65.9675668 26.4535985,65.3982008 C26.6901047,64.8244552 26.4185606,64.1674955 25.8448151,63.9309893 C25.717803,63.8784325 25.582031,63.8477752 25.4418795,63.8433946 Z M48.5931584,63.8433946 C48.4442469,63.8433946 48.2953365,63.874053 48.1595644,63.9309893 C47.8836408,64.044863 47.6646546,64.2638492 47.550781,64.5353933 C47.4369084,64.8113168 47.4369084,65.1222772 47.5464015,65.3982008 C47.7872872,65.9675668 48.4398674,66.2391098 49.013613,66.0026047 C49.2895365,65.8887311 49.5085227,65.6697449 49.6223964,65.3982008 C49.7362689,65.1222772 49.7362689,64.8113168 49.6223964,64.5397727 C49.4515865,64.1193182 49.0442714,63.8477752 48.5931584,63.8433946 Z M31.1267758,65.5690107 C30.5793093,65.5558712 30.1019173,65.9369084 29.9968037,66.4712355 C29.8741711,67.0800189 30.2683478,67.666904 30.8771312,67.7895365 C31.4859135,67.9121691 32.0727986,67.5179924 32.1954312,66.909209 C32.3180637,66.3004267 31.923887,65.7135417 31.3151047,65.5909091 C31.2537879,65.5777696 31.1880916,65.5690107 31.1267758,65.5690107 Z M42.908262,65.5733902 C42.8338068,65.5690107 42.7593516,65.5777696 42.6892758,65.5909091 C42.0804924,65.7135417 41.6863168,66.3004267 41.8045688,66.909209 C41.8658857,67.2026515 42.0366956,67.4566767 42.2819608,67.6231061 C42.5316054,67.7895365 42.8338068,67.8508523 43.1272493,67.793916 C43.4163113,67.7325992 43.6747159,67.5617903 43.8411464,67.3165252 C44.0031963,67.0668795 44.064512,66.764678 44.0075758,66.4712355 C43.9024621,65.9500479 43.4425902,65.5733902 42.908262,65.5733902 Z M37,66.1515152 C37.6175423,66.1515152 38.1212121,66.6551849 38.1212121,67.2727273 C38.1212121,67.8902696 37.6175423,68.3939394 37,68.3939394 C36.3824577,68.3939394 35.8787879,67.8902696 35.8787879,67.2727273 C35.8787879,66.6551849 36.3824577,66.1515152 37,66.1515152 Z M50.4820012,37.8458898 C51.1727112,38.5363302 51.1727112,39.6562401 50.4817316,40.3485677 L38.8097574,52.0210811 C38.7895376,52.0404921 38.768509,52.0577464 38.7480195,52.0758094 C38.690056,52.1386258 38.6280484,52.2014421 38.5609185,52.2564401 C38.5401595,52.2734247 38.5185916,52.2871742 38.4981022,52.3038893 C38.4732992,52.3214132 38.4482266,52.3421722 38.4223452,52.3594265 C38.397003,52.3766808 38.3713912,52.3901607 38.3449706,52.4063365 C38.3215155,52.4195468 38.2983301,52.4346443 38.2737967,52.447585 C38.2473761,52.4624129 38.2206859,52.4742752 38.1937261,52.4872159 C38.1689231,52.4993478 38.1433113,52.5117493 38.1174299,52.5228029 C38.0904701,52.5343956 38.0653975,52.5430227 38.0378985,52.5511107 C38.0095907,52.5613554 37.9820917,52.5721393 37.9537839,52.5804968 C37.9268241,52.5885848 37.9006731,52.5945159 37.8731741,52.6012559 C37.8443271,52.6074566 37.8152106,52.616623 37.7858244,52.6222845 C37.755899,52.6290245 37.7238169,52.6311812 37.6930827,52.6368428 C37.6666621,52.6408868 37.6421287,52.6454699 37.6151689,52.6481659 C37.4992418,52.659489 37.3819666,52.659489 37.2660395,52.6481659 C37.2398885,52.6454699 37.2142767,52.6408868 37.1881257,52.6368428 C37.1571219,52.6311812 37.1258486,52.6279461 37.0948448,52.6222845 C37.065189,52.6168926 37.0366117,52.6074566 37.0074951,52.6012559 C36.9805353,52.5945159 36.9546539,52.5885848 36.9274245,52.5804968 C36.8991167,52.5721393 36.8713481,52.5613554 36.8433099,52.5511107 C36.8166197,52.5422139 36.7901991,52.5335868 36.7637785,52.5228029 C36.7387059,52.5117493 36.7136333,52.4993478 36.6874823,52.4872159 C36.6607921,52.4745448 36.6341019,52.4626825 36.6071421,52.447585 C36.5826087,52.4346443 36.5594233,52.4208948 36.5356986,52.4063365 C36.5103564,52.3901607 36.4847446,52.3764112 36.4585936,52.3594265 C36.433521,52.3421722 36.408718,52.3214132 36.3833758,52.3038893 C36.3620775,52.2869046 36.3407793,52.2731552 36.3202899,52.2564401 C36.275267,52.218966 36.2310529,52.1798743 36.1906132,52.1383562 L24.5186391,40.4666516 C23.8271203,39.775672 23.8271203,38.6557621 24.5186391,37.9650521 C25.2093491,37.2738029 26.3289894,37.2738029 27.0196994,37.9650521 L35.6727156,46.6177987 L35.6727156,23.7693714 C35.6727156,22.7918092 36.4642552,22 37.4412782,22 C38.4174924,22 39.21038,22.7915396 39.21038,23.7691018 L39.21038,46.6175291 L47.9814801,37.8458898 C48.6713813,37.1551798 49.7915608,37.1551798 50.4820012,37.8458898 Z", id: "Shape" }))))))); });
export default DownloadIcon;
//# sourceMappingURL=download.js.map