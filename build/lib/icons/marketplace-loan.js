"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var styles = {
    root: {
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: 'white',
        }
    }
};
exports.LoanIcon = react_jss_1.default(styles)(function (props) { return (React.createElement(core_1.SvgIcon, __assign({ style: { width: props.width || '36px', height: props.height || '34px' } }, props, { viewBox: props.viewBox || "0 0 36 34" }),
    React.createElement("g", { id: "\uD83D\uDCB9-Marketplace", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "760---Loans-Marketplace---Lending", transform: "translate(-151.000000, -153.000000)", fill: "#00C0D9", fillRule: "nonzero" },
            React.createElement("g", { id: "Title", transform: "translate(151.000000, 153.000000)" },
                React.createElement("path", { d: "M28.3677801,0 C25.0670156,0 22.3710359,2.71194584 22.3710359,6.03225806 C22.3710359,6.04082661 22.3710359,6.05153716 22.3710359,6.06010571 C18.7231586,6.34286781 15.8291332,9.41897668 15.8291332,13.1612903 C15.8291332,17.0878275 19.0127741,20.2903226 22.9161945,20.2903226 C26.8196148,20.2903226 30.0032558,17.0878275 30.0032558,13.1612903 C30.0032558,12.7157258 29.9564065,12.2830144 29.8776137,11.861013 C32.4543399,11.1840976 34.3645243,8.82774684 34.3645243,6.03225806 C34.3645243,2.71194584 31.6685451,0 28.3677801,0 Z M28.3677801,1.09677419 C31.0786661,1.09677419 33.2742072,3.30531768 33.2742072,6.03225806 C33.2742072,8.33077103 31.7068763,10.2544104 29.5943869,10.8049395 C29.419766,10.3015372 29.1876473,9.825983 28.9108093,9.38256048 C28.9108093,9.36113939 28.9129387,9.34185974 28.9129387,9.32258065 C28.9129387,9.06766619 28.7383178,8.84702648 28.4934223,8.78918865 C27.69485,7.76096284 26.6258284,6.95766129 25.3928329,6.49281768 C25.5482882,6.3921371 25.6419873,6.21862413 25.6419873,6.03225806 C25.6419873,5.73021687 25.3970917,5.48387097 25.0968287,5.48387097 C24.7965658,5.48387097 24.5516702,5.73021687 24.5516702,6.03225806 C24.5516702,6.105091 24.566577,6.17792339 24.5942607,6.24647177 C24.2279823,6.15435974 23.848927,6.0900959 23.461353,6.06010571 C23.461353,6.05153716 23.461353,6.04082661 23.461353,6.03225806 C23.461353,3.30531768 25.6568941,1.09677419 28.3677801,1.09677419 Z M28.3677801,2.19354839 C28.0675171,2.19354839 27.8226215,2.43989429 27.8226215,2.74193548 C27.8226215,3.04397668 28.0675171,3.29032258 28.3677801,3.29032258 C28.6680431,3.29032258 28.9129387,3.04397668 28.9129387,2.74193548 C28.9129387,2.43989429 28.6680431,2.19354839 28.3677801,2.19354839 Z M26.0615037,3.15751035 C25.9145666,3.15536781 25.7740182,3.21320565 25.669671,3.31817023 C25.4567184,3.53238394 25.4567184,3.87941042 25.669671,4.09362413 C25.8826236,4.30783784 26.227607,4.30783784 26.4405595,4.09362413 C26.6535121,3.87941042 26.6535121,3.53238394 26.4405595,3.31817023 C26.3404717,3.21749019 26.2041821,3.15965235 26.0615037,3.15751035 Z M30.6889633,3.15965235 C30.5420257,3.15536781 30.3993478,3.21320565 30.2950007,3.31817023 C30.1927834,3.42099281 30.1352867,3.56023213 30.1352867,3.70589745 C30.1352867,3.85156277 30.1927834,3.99080155 30.2950007,4.09576613 C30.5079532,4.30783784 30.8529367,4.30783784 31.0658892,4.09362413 C31.2788418,3.87941042 31.2788418,3.53238394 31.0658892,3.31817023 C30.9658014,3.21749019 30.8295117,3.15965235 30.6889633,3.15965235 Z M31.6387315,5.48387097 C31.3384685,5.48387097 31.0935729,5.73021687 31.0935729,6.03225806 C31.0935729,6.33429926 31.3384685,6.58064516 31.6387315,6.58064516 C31.9389945,6.58064516 32.1838901,6.33429926 32.1838901,6.03225806 C32.1838901,5.73021687 31.9389945,5.48387097 31.6387315,5.48387097 Z M22.9161945,7.12903226 C26.227607,7.12903226 28.9129387,9.830267 28.9129387,13.1612903 C28.9129387,16.4923136 26.227607,19.1935484 22.9161945,19.1935484 C19.604782,19.1935484 16.9194503,16.4923136 16.9194503,13.1612903 C16.9194503,9.830267 19.604782,7.12903226 22.9161945,7.12903226 Z M30.6868334,7.81237413 C30.5398963,7.80808958 30.3972179,7.86592742 30.2928713,7.970892 C30.0820481,8.18724826 30.0820481,8.53427419 30.2950007,8.7484879 C30.5079532,8.96055961 30.8529367,8.96055961 31.0658892,8.7484879 C31.2788418,8.53427419 31.2788418,8.18510571 31.0658892,7.970892 C30.9658014,7.87021197 30.8295117,7.81237413 30.6868334,7.81237413 Z M22.9161945,8.22580645 C22.6159315,8.22580645 22.3710359,8.47215235 22.3710359,8.77419355 C22.3710359,9.07623474 22.6159315,9.32258065 22.9161945,9.32258065 C23.2164575,9.32258065 23.461353,9.07623474 23.461353,8.77419355 C23.461353,8.47215235 23.2164575,8.22580645 22.9161945,8.22580645 Z M20.7206534,8.81489429 C20.6312136,8.81489429 20.5417733,8.84059994 20.4629809,8.88558468 C20.2010492,9.03767655 20.1116093,9.37399194 20.2628058,9.63533294 C20.4140017,9.89667339 20.7462077,9.98878542 21.0081395,9.83669355 C21.1316523,9.76386116 21.2232215,9.64390148 21.2615532,9.50252016 C21.2998844,9.36328139 21.2807188,9.21333152 21.2061853,9.08694584 C21.1082273,8.91343232 20.9208291,8.80846774 20.7206534,8.81489429 Z M25.0712744,8.81489429 C24.8860056,8.82346284 24.7177734,8.92628542 24.6240743,9.08908784 C24.5516702,9.21333152 24.5325046,9.36328139 24.5687064,9.50466216 C24.6070381,9.64604348 24.6986073,9.76600316 24.8242494,9.83669355 C25.0840518,9.98878542 25.4183872,9.89881539 25.5674538,9.63747494 C25.7186502,9.37399194 25.6292104,9.03981855 25.369408,8.88772668 C25.2778383,8.83417339 25.175621,8.81060974 25.0712744,8.81489429 Z M26.6790664,10.4193548 C26.5874967,10.4214968 26.4980569,10.4472025 26.419264,10.4921878 C26.2936224,10.5650202 26.2020527,10.6849798 26.1658509,10.8263612 C26.1275191,10.9655999 26.1466847,11.1155493 26.2212183,11.2419355 C26.3702853,11.5032765 26.7046207,11.593246 26.9644226,11.4411541 C27.224225,11.2912048 27.3157947,10.9548894 27.1645983,10.6935484 C27.0645104,10.5200354 26.8792416,10.4150708 26.6790664,10.4193548 Z M19.112862,10.4193548 C18.9275931,10.4300654 18.7593604,10.532888 18.6656613,10.6935484 C18.5932577,10.8199346 18.5740916,10.9698839 18.6124233,11.1091233 C18.6486251,11.250504 18.7401948,11.3704637 18.865837,11.4432966 C18.9914786,11.516129 19.1405457,11.5354081 19.2789647,11.4989919 C19.4195137,11.4604337 19.5387671,11.3683217 19.6111707,11.2419355 C19.7623671,10.980595 19.6707974,10.6442791 19.4109955,10.4943298 C19.3215552,10.4407765 19.2172086,10.4150708 19.112862,10.4193548 Z M18.554926,12.6129032 C18.254663,12.6129032 18.0097674,12.8592491 18.0097674,13.1612903 C18.0097674,13.4633315 18.254663,13.7096774 18.554926,13.7096774 C18.8551889,13.7096774 19.1000845,13.4633315 19.1000845,13.1612903 C19.1000845,12.8592491 18.8551889,12.6129032 18.554926,12.6129032 Z M27.277463,12.6129032 C26.9772,12.6129032 26.7323044,12.8592491 26.7323044,13.1612903 C26.7323044,13.4633315 26.9772,13.7096774 27.277463,13.7096774 C27.577726,13.7096774 27.8226215,13.4633315 27.8226215,13.1612903 C27.8226215,12.8592491 27.577726,12.6129032 27.277463,12.6129032 Z M19.1256388,14.8064516 C19.0340691,14.8085936 18.9446293,14.8342993 18.865837,14.8792845 C18.7401948,14.9521169 18.6486251,15.0720766 18.6124233,15.2134579 C18.5740916,15.3526967 18.5932577,15.502646 18.6656613,15.6290323 C18.8168578,15.8903733 19.1511931,15.9803427 19.4109955,15.8282509 C19.6707974,15.6783015 19.7623671,15.3419862 19.6111707,15.0806452 C19.5110828,14.9071322 19.3258145,14.8021676 19.1256388,14.8064516 Z M26.666289,14.8085936 C26.4810207,14.8171622 26.312788,14.9199847 26.2212183,15.0806452 C26.0700218,15.3441282 26.1594622,15.6783015 26.419264,15.8303934 C26.6811958,15.9824847 27.0134018,15.8925153 27.1645983,15.6290323 C27.3157947,15.3676918 27.2263544,15.0335184 26.9644226,14.8814265 C26.8749828,14.8278733 26.7706362,14.8043096 26.666289,14.8085936 Z M25.0819219,16.4109122 C24.9924821,16.4130547 24.9030418,16.4387604 24.8242494,16.4858871 C24.6986073,16.5565775 24.6070381,16.6765372 24.5687064,16.8179185 C24.5325046,16.9592993 24.5516702,17.1092491 24.6240743,17.2334928 C24.7752702,17.4969758 25.1074762,17.5869458 25.369408,17.434854 C25.6292104,17.2827621 25.7186502,16.9485887 25.5674538,16.6851057 C25.4694959,16.5115927 25.2820976,16.4066282 25.0819219,16.4109122 Z M20.7100059,16.4130547 C20.5226077,16.4216233 20.354375,16.5244458 20.2628058,16.6872483 C20.1116093,16.9485887 20.2010492,17.2849041 20.4629809,17.436996 C20.5864937,17.5098289 20.7355602,17.529108 20.8761092,17.4905493 C21.0166576,17.4541331 21.135911,17.362021 21.2061853,17.2356354 C21.2807188,17.1092491 21.2998844,16.9592993 21.2615532,16.8200605 C21.2232215,16.6786797 21.1316523,16.55872 21.0081395,16.4858871 C20.9165698,16.4323338 20.8122231,16.4087702 20.7100059,16.4130547 Z M8.74207183,17 C8.20756075,17 7.6964746,17.1028226 7.22584957,17.2806201 C7.20881337,17.2827621 7.2301089,17.2720515 7.16835224,17.2913306 L7.18325906,17.2870466 C6.00350213,17.6469257 0.41988563,19.2128275 0.41988563,19.2128275 C0.223969272,19.2599548 0.0706434256,19.4099041 0.0195348103,19.6026967 C-0.0337031944,19.7976313 0.0237941341,20.0054185 0.168601878,20.1446573 C0.311279686,20.281754 0.519973472,20.3310233 0.709501117,20.2710435 C0.709501117,20.2710435 6.16960485,18.7415573 7.46222705,18.3474041 C7.50055824,18.3409781 7.53888998,18.3324095 7.57509178,18.3174145 C7.94137019,18.1760331 8.33107351,18.0967742 8.74207183,18.0967742 C9.34046839,18.0967742 9.89627499,18.2595766 10.3796769,18.5423387 C10.398843,18.5551918 10.420138,18.5637604 10.4393036,18.5723289 C10.4435629,18.5744709 10.4478217,18.5766129 10.4520811,18.5787549 C13.8870058,20.2110636 20.8654612,23.7241685 20.8824974,23.734879 L20.8867567,23.734879 C20.8526843,23.7177419 20.856943,23.7198839 20.9229585,23.7627267 C20.9357359,23.7712952 20.9485128,23.7798638 20.9591603,23.7862903 C21.4766351,24.0669104 21.8258773,24.5981604 21.8258773,25.2258065 C21.8258773,25.5556958 21.7300488,25.855595 21.5639456,26.1147935 C21.0848024,26.8645412 20.1563292,27.0230596 19.2896122,26.6032007 C19.2789647,26.5989162 19.2683172,26.5946322 19.2597991,26.5882056 L18.887132,26.4361138 C18.7061224,26.3547128 18.4931699,26.3804185 18.3355847,26.5025202 C18.1780001,26.6224798 18.0970778,26.8216985 18.1268915,27.0187751 C18.1545751,27.2158517 18.2887354,27.3829386 18.4761337,27.453629 L18.8466708,27.6057209 L18.8168578,27.5907258 C19.9135636,28.1219758 21.2530351,28.0020161 22.1091041,27.1622984 L22.7032419,27.5714467 C22.8544384,27.6764113 23.0503547,27.6956904 23.2207168,27.625 L32.1647245,23.90625 L31.9368651,23.4499749 C32.066766,23.7091734 32.3734177,23.8227065 32.6374789,23.7091734 C32.8333952,23.6256299 33.0463478,23.5806452 33.2742072,23.5806452 C34.1835148,23.5806452 34.9096829,24.3111138 34.9096829,25.2258065 C34.9096829,25.8513105 34.5625701,26.3804185 34.0514839,26.6631806 C33.8044589,26.7981354 33.7001123,27.1044605 33.8172364,27.3658015 L33.6128019,26.9030999 L22.8650859,32.6418854 C22.8821221,32.6333168 22.8672153,32.6397428 22.8416609,32.6483114 C22.8161066,32.6568799 22.7905523,32.6654485 22.767128,32.6783015 C22.4732531,32.8196823 22.1602127,32.9032258 21.8258773,32.9032258 C21.5043188,32.9032258 21.2019265,32.8282509 20.9208291,32.6975806 C20.9080517,32.6932966 20.8952748,32.6868701 20.8824974,32.6825855 C20.8420368,32.667591 20.8356481,32.6633065 20.8633318,32.6783015 L7.3195487,26.9138105 C7.19603648,26.8623992 7.05974684,26.8559726 6.9341047,26.8988154 L0.392201933,29.0923638 C0.106845225,29.1887604 -0.0486100102,29.4993701 0.0472185073,29.7864162 C0.14304757,30.0734628 0.451828651,30.2298387 0.737184814,30.1334427 L7.08317122,28.0041581 L20.4246498,33.6808217 C20.5077008,33.7193799 20.524737,33.7193799 20.5055715,33.7108114 C20.9037929,33.8907509 21.350993,34 21.8258773,34 C22.3390929,34 22.8182366,33.8714718 23.2398824,33.6658266 C23.2718254,33.6551161 23.3016385,33.6486895 23.3420996,33.6272684 C23.3484883,33.6251259 23.354877,33.6208419 23.3591358,33.6186999 L34.5710882,27.6335685 C34.6626579,27.5842993 34.7371914,27.5114669 34.7883,27.4214968 C35.4910432,26.9288056 36,26.1554942 36,25.2258065 C36,23.7177419 34.7733932,22.483871 33.2742072,22.483871 C32.9760736,22.483871 32.6992355,22.5652725 32.430915,22.6552419 L32.4287856,22.6552419 C32.3563815,22.6552419 32.2839779,22.668095 32.2179625,22.6980847 L23.075909,26.4982362 L22.626579,26.1919104 C22.7522211,25.8791581 22.9161945,25.5814015 22.9161945,25.2258065 C22.9161945,24.1847281 22.326316,23.280746 21.4766351,22.8201864 L21.5149669,22.84375 C21.5341325,22.8544605 21.4979307,22.8201864 21.3999722,22.7666331 C21.3957134,22.7644911 21.3914541,22.7623491 21.3850654,22.7602065 C21.3850654,22.7602065 14.3725376,19.2256806 10.9056699,17.5805193 C10.9014111,17.5783773 10.8971518,17.5762347 10.8950224,17.5740927 C10.8332663,17.5483871 10.829007,17.5483871 10.8566906,17.5590976 C10.2306104,17.2077872 9.51083045,17 8.74207183,17 Z M22.9161945,17 C22.6159315,17 22.3710359,17.2463459 22.3710359,17.5483871 C22.3710359,17.8504283 22.6159315,18.0967742 22.9161945,18.0967742 C23.2164575,18.0967742 23.461353,17.8504283 23.461353,17.5483871 C23.461353,17.2463459 23.2164575,17 22.9161945,17 Z M12.0130232,24.1290323 C11.7127602,24.1290323 11.4678646,24.3753782 11.4678646,24.6774194 C11.4678646,24.9794605 11.7127602,25.2258065 12.0130232,25.2258065 C12.3132862,25.2258065 12.5581818,24.9794605 12.5581818,24.6774194 C12.5581818,24.3753782 12.3132862,24.1290323 12.0130232,24.1290323 Z M13.6484989,24.6774194 C13.3482359,24.6774194 13.1033403,24.9237653 13.1033403,25.2258065 C13.1033403,25.5278476 13.3482359,25.7741935 13.6484989,25.7741935 C13.9487619,25.7741935 14.1936575,25.5278476 14.1936575,25.2258065 C14.1936575,24.9237653 13.9487619,24.6774194 13.6484989,24.6774194 Z M15.2839746,25.2258065 C14.9837116,25.2258065 14.738816,25.4721524 14.738816,25.7741935 C14.738816,26.0762347 14.9837116,26.3225806 15.2839746,26.3225806 C15.5842376,26.3225806 15.8291332,26.0762347 15.8291332,25.7741935 C15.8291332,25.4721524 15.5842376,25.2258065 15.2839746,25.2258065 Z M16.9194503,25.7741935 C16.6191873,25.7741935 16.3742917,26.0205395 16.3742917,26.3225806 C16.3742917,26.6246218 16.6191873,26.8709677 16.9194503,26.8709677 C17.2197133,26.8709677 17.4646088,26.6246218 17.4646088,26.3225806 C17.4646088,26.0205395 17.2197133,25.7741935 16.9194503,25.7741935 Z", id: "icon-marketplace-loans" })))))); });
exports.default = exports.LoanIcon;
//# sourceMappingURL=marketplace-loan.js.map