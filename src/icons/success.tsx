import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles: StyleSheet = {
  root: {
    width: '68px !important',
    height: '74px !important'
  }
};

export const SuccessIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps)=> (
  <SvgIcon {...props} viewBox='0 0 68 74'>
    <title>icon-success</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="success-linearGradient-1">
            <stop stopColor="#1CA9BA" offset="0%"></stop>
            <stop stopColor="#23E6FE" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Modal---Dark" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="1.6.-Success" transform="translate(-686.000000, -277.000000)" fill="url(#success-linearGradient-1)" fillRule="nonzero">
            <g id="Modal-content" transform="translate(420.000000, 100.000000)">
                <path d="M299.972915,177 L299.446664,177.260837 C299.446664,177.260837 285.622287,184.166161 267.17148,184.166161 L266,184.166161 L266,185.337641 C266,212.519634 274.305609,228.952384 282.693587,238.530147 C291.07699,248.112486 299.611403,250.885598 299.611403,250.885598 L299.972915,251 L300.334427,250.885598 C300.334427,250.885598 308.86884,248.112486 317.252242,238.530147 C325.640221,228.952384 333.94583,212.519634 333.94583,185.337641 L333.94583,184.166161 L332.77435,184.166161 C314.323543,184.166161 300.499166,177.260837 300.499166,177.260837 L299.972915,177 Z M299.972915,179.590068 C301.318287,180.239874 314.12677,186.17049 331.561686,186.454208 C331.328305,212.455569 323.39336,227.963948 315.495023,236.992579 C307.766002,245.819863 300.512894,248.300106 299.972915,248.483149 C299.432936,248.300106 292.179828,245.819863 284.450807,236.992579 C276.552471,227.963948 268.617525,212.455569 268.384144,186.454208 C285.819059,186.17049 298.627544,180.239874 299.972915,179.590068 Z M297.77639,185.635087 L297.369118,185.708304 L297.259292,185.754066 L296.545421,186.522849 L296.737617,187.55247 L297.680293,188.023808 L298.087565,187.946015 L298.197391,187.904829 L298.906685,187.131469 L298.714489,186.101849 L297.77639,185.635087 Z M302.553831,185.722033 L301.510482,185.845588 L300.984231,186.75623 L301.400656,187.717209 L301.757592,187.923133 L301.867418,187.964319 L302.910767,187.840764 L303.432441,186.930121 L303.020593,185.964565 L302.663658,185.758642 L302.553831,185.722033 Z M293.310123,187.186383 L292.902851,187.23672 L292.793025,187.268753 L292.028817,187.991775 L292.152372,189.035124 L293.058438,189.561375 L293.470287,189.511038 L293.584689,189.479005 L294.344321,188.755983 L294.220766,187.712634 L293.310123,187.186383 Z M307.029251,187.23672 L305.995053,187.424339 L305.528292,188.362438 L305.999629,189.300538 L306.365717,189.483582 L306.48012,189.515614 L307.514316,189.327994 L307.985654,188.394471 L307.514316,187.456372 L307.143653,187.268753 L307.029251,187.23672 Z M288.770639,188.490569 L288.354214,188.508873 L288.239812,188.540906 L287.43442,189.213592 L287.489333,190.261517 L288.367943,190.842681 L288.775215,190.819801 L288.894194,190.792344 L289.699586,190.119658 L289.640097,189.071733 L288.770639,188.490569 Z M311.614496,188.508873 L310.589451,188.728526 L310.150146,189.68493 L310.653517,190.604724 L311.028756,190.77404 L311.143158,190.806072 L312.168203,190.58642 L312.602932,189.630017 L312.104138,188.710221 L311.724322,188.540906 L311.614496,188.508873 Z M284.121329,189.529342 L283.714057,189.538495 L283.595078,189.561375 L282.766805,190.206604 L282.785109,191.254529 L283.640839,191.867726 L284.052687,191.858573 L284.171666,191.835693 L284.999938,191.19504 L284.977058,190.142539 L284.121329,189.529342 Z M316.208893,189.543071 L315.202153,189.840517 L314.836065,190.824377 L315.403501,191.707563 L315.792468,191.849422 L315.911447,191.872302 L316.918188,191.574856 L317.279699,190.590996 L316.707687,189.70781 L316.323295,189.565951 L316.208893,189.543071 Z M320.890237,190.321006 L319.897225,190.664213 L319.576898,191.661802 L320.180942,192.517531 L320.574486,192.641085 L320.693464,192.65939 L321.6819,192.32076 L322.006803,191.323171 L321.398183,190.462865 L321.004639,190.33931 L320.890237,190.321006 Z M279.028137,190.343887 L278.909158,190.362192 L278.062581,190.975388 L278.039701,192.023313 L278.867974,192.668543 L279.284398,192.677694 L279.3988,192.65939 L280.249954,192.041617 L280.268259,190.993692 L279.439985,190.353039 L279.028137,190.343887 Z M274.45662,190.87929 C274.429164,190.874714 274.401707,190.87929 274.378827,190.87929 C274.310185,190.883866 274.291881,190.883866 274.319338,190.883866 L273.216498,190.952507 L273.216498,192.105683 C273.207347,192.590748 273.500217,193.030053 273.95325,193.208521 C274.401707,193.386989 274.918805,193.272587 275.248284,192.915651 C275.60522,192.590748 275.728774,192.078226 275.554882,191.625193 C275.376414,191.17216 274.941686,190.874714 274.45662,190.87929 Z M325.452601,190.87929 C324.967536,190.888442 324.537382,191.204193 324.377219,191.661802 C324.217056,192.123987 324.358915,192.631934 324.734155,192.947684 C324.734155,192.947684 324.734155,192.947684 324.738731,192.95226 C325.072785,193.286314 325.580732,193.382413 326.020037,193.194792 C326.454766,193.007173 326.738483,192.577021 326.733907,192.101107 L326.733907,190.952507 L325.631069,190.883866 C325.658525,190.883866 325.635645,190.883866 325.567003,190.87929 C325.530394,190.874714 325.493786,190.874714 325.452601,190.87929 Z M325.164307,195.729949 L324.34061,196.379753 L324.235361,196.782449 L324.226208,196.901428 L324.615176,197.876136 L325.631069,198.146126 L326.454766,197.491744 L326.560016,197.093624 L326.569168,196.974646 L326.1802,195.999938 L325.164307,195.729949 Z M274.145446,195.826046 L273.413271,196.57195 L273.358358,196.979222 L273.358358,197.066168 L273.362933,197.139385 L273.902913,198.040875 L274.946262,198.150702 L275.660133,197.377342 L275.701317,196.965493 L275.701317,196.928884 L275.696741,196.892276 L275.696741,196.883124 L275.188795,195.96333 L274.145446,195.826046 Z M314.05813,200.310617 L297.044215,216.711335 L288.422856,207.870323 L285.901428,210.323109 L296.966422,221.67182 L316.497187,202.836621 L314.05813,200.310617 Z M324.743306,200.589759 L323.878425,201.184652 L323.745719,201.573619 L323.727414,201.692598 L324.056893,202.690186 L325.049905,203.028817 L325.91021,202.433925 L326.042917,202.044957 L326.061221,201.921402 L325.740895,200.92839 L324.743306,200.589759 Z M274.484077,200.768227 L273.820543,201.578195 L273.802238,201.99462 L273.815967,202.113599 L274.406283,202.983056 L275.458785,203.02424 L276.122318,202.214272 L276.140622,201.802424 L276.122318,201.683445 L275.532002,200.813988 L274.484077,200.768227 Z M323.969947,205.399233 L323.068457,205.939213 L322.908293,206.319027 L322.885413,206.438006 L323.141674,207.453898 L324.111806,207.856595 L325.013296,207.321192 L325.17346,206.9368 L325.19634,206.822398 L324.940079,205.801929 L323.969947,205.399233 Z M276.232144,205.646343 L275.184219,205.669223 L274.571022,206.5158 L274.580175,206.932224 L274.603055,207.046626 L275.243708,207.879476 L276.29621,207.856595 L276.909406,207.005442 L276.900254,206.593593 L276.877373,206.474615 L276.232144,205.646343 Z M322.835076,210.140065 L321.896977,210.615979 L321.713933,210.986642 L321.6819,211.105621 L321.86952,212.135242 L322.812196,212.602004 L323.750294,212.12609 L323.933338,211.755426 L323.965371,211.641024 L323.773175,210.611403 L322.835076,210.140065 Z M277.275493,210.414631 L276.232144,210.501577 L275.673861,211.389338 L275.705893,211.801187 L275.737926,211.915589 L276.433492,212.702677 L277.481417,212.615731 L278.039701,211.72797 L278.003092,211.316121 L277.971059,211.201719 L277.275493,210.414631 Z M321.356997,214.780224 L320.38229,215.160039 L320.162637,215.512399 L320.121453,215.622225 L320.203822,216.67015 L321.09616,217.223857 L322.075445,216.839466 L322.295097,216.491683 L322.340858,216.381856 L322.249336,215.333931 L321.356997,214.780224 Z M278.66205,215.068517 L277.627852,215.256138 L277.161091,216.198813 L277.234309,216.601509 L277.275493,216.715911 L278.044277,217.429781 L279.078475,217.242162 L279.545235,216.304063 L279.472018,215.896791 L279.430833,215.782388 L278.66205,215.068517 Z M319.448767,219.273947 L318.455755,219.603426 L318.217798,219.946633 L318.167461,220.056459 L318.208645,221.104384 L319.068951,221.699277 L320.06654,221.365221 L320.299921,221.026591 L320.350257,220.916765 L320.309072,219.864263 L319.448767,219.273947 Z M280.483334,219.585121 L279.467442,219.855111 L279.073898,220.829819 L279.179148,221.227939 L279.234061,221.337765 L280.057758,221.98757 L281.069074,221.717581 L281.462619,220.742873 L281.357368,220.344753 L281.302455,220.239503 L280.483334,219.585121 Z M317.238514,223.593779 L316.208893,223.808856 L315.934327,224.115454 L315.874839,224.216128 L315.787892,225.264053 L316.570405,225.959619 L317.600025,225.749119 L317.874591,225.437945 L317.93408,225.33727 L318.021026,224.289345 L317.238514,223.593779 Z M282.62037,223.927833 L281.645662,224.321378 L281.375673,225.33727 L281.535836,225.717086 L281.595325,225.822337 L282.496815,226.362315 L283.466947,225.973347 L283.736937,224.952878 L283.576773,224.573063 L283.517284,224.472389 L282.62037,223.927833 Z M314.616413,227.707687 L313.577639,227.858698 L313.289346,228.151568 L313.220705,228.252242 L313.07427,229.291015 L313.815596,230.032342 L314.85437,229.876754 L315.147239,229.583884 L315.215881,229.487787 L315.362316,228.449013 L314.616413,227.707687 Z M285.274504,228.023437 L284.327252,228.476471 L284.121329,229.506091 L284.304372,229.876754 L284.373014,229.977429 L285.301961,230.462494 L286.244636,230.014038 L286.45056,228.97984 L286.276669,228.609177 L286.203451,228.513079 L285.274504,228.023437 Z M311.687713,231.588214 L310.639788,231.629398 L310.319461,231.88566 L310.241668,231.977181 L309.985406,232.993075 L310.644364,233.807619 L311.692289,233.77101 L312.012616,233.510173 L312.090409,233.418651 L312.346671,232.398182 L311.687713,231.588214 Z M288.253541,231.839899 L287.365778,232.398182 L287.283409,233.446107 L287.503062,233.79389 L287.580855,233.880836 L288.564715,234.260652 L289.447901,233.702368 L289.534847,232.654443 L289.315194,232.30666 L289.232824,232.215138 L288.253541,231.839899 Z M307.372457,235.125533 L307.024674,235.349762 L306.942305,235.432132 L306.580793,236.420568 L307.157382,237.294602 L308.205307,237.358667 L308.55309,237.134439 L308.635459,237.052068 L308.99697,236.063632 L308.420383,235.185022 L307.372457,235.125533 Z M291.630697,235.322306 L290.802424,235.97211 L290.834457,237.024612 L291.086143,237.344938 L291.177665,237.427309 L292.193557,237.697298 L293.017253,237.047493 L292.989797,235.999568 L292.733536,235.674665 L292.64659,235.596871 L291.630697,235.322306 Z M303.771073,238.278461 L303.404985,238.470658 L303.308886,238.543875 L302.86043,239.491127 L303.345495,240.420073 L304.384269,240.584812 L304.750356,240.397193 L304.841878,240.323975 L305.294911,239.372148 L304.805269,238.443201 L303.771073,238.278461 Z M295.373942,238.415745 L294.61431,239.138767 L294.74244,240.182116 L295.026159,240.484139 L295.122256,240.55278 L296.16103,240.726671 L296.916085,239.999072 L296.79253,238.9603 L296.508813,238.658277 L296.408138,238.589636 L295.373942,238.415745 Z M299.881393,240.918868 C299.336838,240.928019 298.874653,241.312411 298.760251,241.838662 C298.645848,242.369489 298.906685,242.909467 299.391751,243.142849 C299.391751,243.142849 299.405479,243.152001 299.442088,243.170306 L299.968339,243.431143 L300.54035,243.142849 C301.034568,242.904892 301.295405,242.351185 301.162699,241.815782 C301.034568,241.280378 300.544926,240.905139 299.995795,240.923444 C299.991219,240.918868 299.991219,240.918868 299.986643,240.923444 C299.950035,240.918868 299.913426,240.918868 299.881393,240.918868 Z" id="icon-success"></path>
            </g>
        </g>
    </g>
  </SvgIcon>
));

export default SuccessIcon;




