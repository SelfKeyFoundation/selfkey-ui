import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = createStyles({
    root: {
        width: '30px !important',
        height: '29px !important'
    }
});

export const DirectorIcon = withStyles(styles)((props: SvgIconProps & WithStyles<typeof styles>) => (
    <SvgIcon {...props} viewBox='0 0 30 29'>
        <g id="Corporate-Vault-icon-director" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="802---Add-New-Member" transform="translate(-450.000000, -346.000000)" fill="#23E6FE" fillRule="nonzero">
                <g id="Modal" transform="translate(240.000000, 142.000000)">
                    <g id="Select-role" transform="translate(185.000000, 127.000000)">
                        <g id="Radio-button-replace" transform="translate(0.000000, 52.000000)">
                            <g id="Btn-director">
                                <g id="icon-director" transform="translate(25.000000, 25.000000)">
                                    <path d="M15,0 C13.899,0 12.325203,0.3439297 11.345703,1.0029297 C9.484203,1.0709297 8.209453,2.3781953 8.001953,4.4501955 C7.873953,5.7301955 7.9908595,6.645953 8.0683595,7.251953 C8.0953595,7.462453 8.1252345,7.700508 8.1152345,7.770508 C8.0987345,7.864008 8.084289,7.9577345 8.071289,8.0527345 C7.988289,8.0557345 7.915039,8.0689375 7.852539,8.0859375 C7.401539,8.2059375 7.0854375,8.607297 6.9609375,9.216797 C6.8614375,9.705297 6.8922815,10.299172 7.050781,10.888672 C7.3182815,11.887672 7.8791875,12.6376875 8.4921875,12.8671875 C8.7916875,13.7816875 9.224289,14.689078 9.758789,15.517578 L3.1269531,18.689453 C1.22745315,19.597453 0,21.545367 0,23.651367 L0,27.5 C0,28.327 0.673,29 1.5,29 L28.5,29 C29.327,29 30,28.327 30,27.5 L30,23.651367 C30,21.545367 28.772547,19.597453 26.873047,18.689453 L20.2402345,15.517578 C20.7747345,14.689578 21.207836,13.781211 21.506836,12.866211 C22.119836,12.636711 22.680742,11.8866955 22.948242,10.8876955 C23.106242,10.2981955 23.1385625,9.705297 23.0390625,9.216797 C22.9145625,8.607297 22.5974845,8.205461 22.1464845,8.084961 C22.0849845,8.068461 22.012164,8.0557345 21.930664,8.0527345 C21.860164,7.5172345 21.7241795,7.0184845 21.4716795,6.3339845 C21.4641795,6.3144845 21.458625,6.2962735 21.453125,6.2802735 C21.629625,6.2947735 21.9120545,6.366414 22.1435545,6.461914 C22.3160545,6.533414 22.5127735,6.502789 22.6552735,6.383789 C22.7977735,6.264289 22.863242,6.0755545 22.823242,5.8935545 C22.016742,2.2030547 19.279,0 15.5,0 L15,0 Z M15,1 L15.5,1 C18.5345,1 20.7269765,2.5515156 21.6259765,5.2910155 C21.2804765,5.2510155 20.922758,5.2942735 20.676758,5.5302735 C20.485758,5.7132735 20.305703,6.0616875 20.533203,6.6796875 C20.842203,7.5176875 20.9528515,8.012797 20.9853515,8.716797 C20.9938515,8.895797 21.097336,9.0561955 21.256836,9.1376955 C21.415336,9.2196955 21.606336,9.2103045 21.756836,9.1123045 C21.837836,9.0598045 21.881125,9.0532345 21.890625,9.0527345 C21.919125,9.0637345 22.0085705,9.167992 22.0595705,9.416992 C22.1280705,9.751492 22.0998985,10.193883 21.9833985,10.629883 C21.7368985,11.551383 21.264664,11.9404295 21.118164,11.9404295 L21.1171875,11.9404295 C20.8961875,11.9404295 20.7011955,12.0858515 20.6376955,12.2978515 C19.7951955,15.1313515 17.5885,18 15,18 C12.4115,18 10.204781,15.1313515 9.363281,12.2978515 C9.2997815,12.0858515 9.104789,11.9404295 8.883789,11.9404295 L8.8828125,11.9404295 C8.7363125,11.9404295 8.264078,11.551383 8.017578,10.629883 C7.901078,10.193883 7.872906,9.751492 7.941406,9.416992 C7.993406,9.161992 8.0858985,9.058258 8.1083985,9.051758 C8.1093985,9.051758 8.1526405,9.0533045 8.2441405,9.1123045 C8.3941405,9.2098045 8.5851405,9.2201955 8.7441405,9.1376955 C8.9036405,9.0561955 9.007125,8.895797 9.015625,8.716797 C9.027625,8.455297 9.056086,8.195336 9.100586,7.944336 C9.138586,7.730336 9.1085235,7.49 9.0615235,7.125 C8.9900235,6.564 8.881547,5.7163045 8.998047,4.5498045 C9.157547,2.9533047 10.0932655,2 11.5097655,2 C11.6177655,2 11.7230705,1.9648906 11.8095705,1.9003906 C12.4935705,1.3868906 13.866,1 15,1 Z M12.263672,4.0625 C11.9068595,4.0321485 11.5474455,4.195664 11.3408205,4.508789 L10.5390625,5.7246095 C10.3870625,5.9551095 10.4506405,6.2659685 10.6816405,6.417969 C10.7661405,6.473469 10.8620545,6.5 10.9560545,6.5 C11.1185545,6.5 11.2780235,6.4213905 11.3740235,6.2753905 L12.176758,5.058594 L12.957031,5.439453 C14.3810315,6.133953 15.971164,6.5 17.555664,6.5 L18.8339845,6.5 C19.1104845,6.5 19.3339845,6.2765 19.3339845,6 C19.3339845,5.7235 19.1104845,5.5 18.8339845,5.5 L17.555664,5.5 C16.122164,5.5 14.683508,5.168039 13.395508,4.540039 L12.614258,4.1591795 C12.501633,4.1044295 12.3826095,4.072617 12.263672,4.0625 Z M10.350586,16.3427735 C11.579586,17.8947735 13.202,19 15,19 C16.798,19 18.420414,17.8947735 19.649414,16.3427735 L19.9716795,16.4970705 L17.5458985,23.472656 L16.540039,21.461914 L16.9746095,20.158203 C17.0616095,19.895703 16.920203,19.613367 16.658203,19.526367 C16.393703,19.438367 16.1128905,19.579797 16.0253905,19.841797 L15.6396485,21 L14.3603515,21 L13.973633,19.841797 C13.886133,19.580297 13.606797,19.438367 13.341797,19.526367 C13.080297,19.613367 12.9378905,19.895703 13.0253905,20.158203 L13.459961,21.461914 L12.4541015,23.472656 L10.0283205,16.4970705 L10.350586,16.3427735 Z M9.121094,16.9316405 L12.970703,28 L11.75,28 L7.625,22.5 L8.9003905,20.7998045 C8.9798905,20.6938045 9.014117,20.5606875 8.995117,20.4296875 L8.535156,17.211914 L9.121094,16.9316405 Z M20.878906,16.9316405 L21.464844,17.211914 L21.004883,20.4296875 C20.986383,20.5611875 21.0201095,20.6938045 21.0996095,20.7998045 L22.364258,22.4873045 L17.8125,28 L17.029297,28 L20.878906,16.9316405 Z M7.589844,17.6640625 L7.975586,20.366211 L6.5996095,22.2001955 C6.4661095,22.3776955 6.4661095,22.6223045 6.5996095,22.7998045 L10.5,28 L1.5,28 C1.224,28 1,27.776 1,27.5 L1,23.651367 C1,21.928867 2.00459375,20.334797 3.55859375,19.591797 L7.589844,17.6640625 Z M22.410156,17.6640625 L26.441406,19.591797 C27.9959065,20.334797 29,21.928367 29,23.651367 L29,27.5 C29,27.776 28.776,28 28.5,28 L19.1464845,28 L23.386719,22.816406 C23.5322185,22.6389065 23.537914,22.3841955 23.399414,22.2001955 L22.024414,20.366211 L22.410156,17.6640625 Z M14.308594,22 L15.691406,22 L17.0527345,24.723633 C17.0632345,24.744633 17.078797,24.760297 17.091797,24.779297 L16.0283205,27.8359375 C16.0093205,27.8904375 16.0058595,27.9455 16.0058595,28 L13.995117,28 C13.995117,27.9455 13.991656,27.8904375 13.972656,27.8359375 L12.9072265,24.774414 C12.9197265,24.756414 12.9372655,24.743633 12.9472655,24.723633 L14.308594,22 Z M2.5,25 C2.2235,25 2,25.2235 2,25.5 L2,26.5 C2,26.7765 2.2235,27 2.5,27 C2.7765,27 3,26.7765 3,26.5 L3,25.5 C3,25.2235 2.7765,25 2.5,25 Z M5,25 C4.7235,25 4.5,25.2235 4.5,25.5 L4.5,26.5 C4.5,26.7765 4.7235,27 5,27 C5.2765,27 5.5,26.7765 5.5,26.5 L5.5,25.5 C5.5,25.2235 5.2765,25 5,25 Z M7.5,25 C7.2235,25 7,25.2235 7,25.5 L7,26.5 C7,26.7765 7.2235,27 7.5,27 C7.7765,27 8,26.7765 8,26.5 L8,25.5 C8,25.2235 7.7765,25 7.5,25 Z M22.5,25 C22.2235,25 22,25.2235 22,25.5 L22,26.5 C22,26.7765 22.2235,27 22.5,27 C22.7765,27 23,26.7765 23,26.5 L23,25.5 C23,25.2235 22.7765,25 22.5,25 Z M25,25 C24.7235,25 24.5,25.2235 24.5,25.5 L24.5,26.5 C24.5,26.7765 24.7235,27 25,27 C25.2765,27 25.5,26.7765 25.5,26.5 L25.5,25.5 C25.5,25.2235 25.2765,25 25,25 Z M27.5,25 C27.2235,25 27,25.2235 27,25.5 L27,26.5 C27,26.7765 27.2235,27 27.5,27 C27.7765,27 28,26.7765 28,26.5 L28,25.5 C28,25.2235 27.7765,25 27.5,25 Z" id="icon-director-cv"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </SvgIcon>
));

export default DirectorIcon;
