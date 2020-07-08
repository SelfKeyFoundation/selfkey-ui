import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import LinearGradient from './_linearGradient';
const styles = createStyles({
    root: {
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: 'white',
        },
    }
});
const linearGradientColor = 'url(#default-linear-gradient)';
export const CoinsIcon = withStyles(styles)((props) => (React.createElement(SvgIcon, Object.assign({ style: { width: props.width || '62px', height: props.height || '64px', fill: props.fill || linearGradientColor } }, props, { viewBox: props.viewBox || "0 0 62 64" }),
    React.createElement(LinearGradient, null),
    React.createElement("g", { id: "Page-1-coins", stroke: "none", strokeWidth: "1", fill: "inherit", fillRule: "evenodd" },
        React.createElement("g", { id: "coins-icon", fill: "inherit", fillRule: "nonzero" },
            React.createElement("path", { d: "M25,0 C11.215,0 0,11.215 0,25 C0,34.118 4.9087031,42.108563 12.220703,46.476562 C11.804703,48.878563 11.975578,51.358328 12.767578,53.736328 C14.032578,57.538328 16.702156,60.618109 20.285156,62.412109 C22.434156,63.488109 24.722562,63.998047 26.976562,63.998047 C32.384563,63.998047 37.597531,61.060469 40.269531,55.980469 C40.512531,55.988469 40.755,56 41,56 C52.579,56 62,46.58 62,35 C62,25.883 56.148672,18.131328 48.013672,15.236328 C44.203672,6.2893281 35.323,0 25,0 Z M25,2 C37.683,2 48,12.318 48,25 C48,37.682 37.683,48 25,48 C12.317,48 2,37.682 2,25 C2,12.318 12.317,2 25,2 Z M25,5 C13.972,5 5,13.972 5,25 C5,36.028 13.972,45 25,45 C36.028,45 45,36.028 45,25 C45,19.351 42.593484,13.938391 38.396484,10.150391 C37.986484,9.7803906 37.354375,9.8116563 36.984375,10.222656 C36.614375,10.632656 36.646641,11.264766 37.056641,11.634766 C40.834641,15.044766 43,19.916 43,25 C43,34.925 34.925,43 25,43 C15.075,43 7,34.925 7,25 C7,15.075 15.075,7 25,7 C26.005,7 27.011188,7.0830469 27.992188,7.2480469 C28.533188,7.3390469 29.053531,6.9717344 29.144531,6.4277344 C29.235531,5.8827344 28.867266,5.3663906 28.322266,5.2753906 C27.231266,5.0913906 26.114,5 25,5 Z M31.945312,6.3183594 C31.556109,6.3274063 31.191312,6.567625 31.039062,6.953125 C30.837062,7.466125 31.088516,8.047 31.603516,8.25 C32.427516,8.575 33.238766,8.9651094 34.009766,9.4121094 C34.166766,9.5031094 34.339766,9.5488281 34.509766,9.5488281 C34.855766,9.5488281 35.19,9.3688281 35.375,9.0488281 C35.652,8.5708281 35.488719,7.9595937 35.011719,7.6835938 C34.154719,7.1865938 33.252938,6.751625 32.335938,6.390625 C32.207937,6.339375 32.075047,6.3153438 31.945312,6.3183594 Z M25,12 C24.447,12 24,12.448 24,13 L24,15 C21.794,15 20,16.794 20,19 L20,22 C20,24.206 21.794,26 24,26 L26,26 C27.103,26 28,26.897 28,28 L28,31 C28,32.103 27.103,33 26,33 L26,28 C26,27.448 25.553,27 25,27 C24.447,27 24,27.448 24,28 L24,33 C22.897,33 22,32.103 22,31 C22,30.448 21.553,30 21,30 C20.447,30 20,30.448 20,31 C20,33.206 21.794,35 24,35 L24,37 C24,37.552 24.447,38 25,38 C25.553,38 26,37.552 26,37 L26,35 C28.206,35 30,33.206 30,31 L30,28 C30,25.794 28.206,24 26,24 L26,19 C26,18.448 25.553,18 25,18 C24.447,18 24,18.448 24,19 L24,24 C22.897,24 22,23.103 22,22 L22,19 C22,17.897 22.897,17 24,17 L26,17 C27.103,17 28,17.897 28,19 C28,19.552 28.447,20 29,20 C29.553,20 30,19.552 30,19 C30,16.794 28.206,15 26,15 L26,13 C26,12.448 25.553,12 25,12 Z M48.927734,17.761719 C55.451734,20.771719 60,27.356 60,35 C60,45.477 51.477,54 41,54 C36.442,54 32.273047,52.363781 28.998047,49.675781 C40.889047,47.756781 50,37.424 50,25 C50,22.484 49.621734,20.054719 48.927734,17.761719 Z M11.392578,27.210938 C11.264812,27.188375 11.130094,27.190203 10.996094,27.220703 C10.458094,27.345703 10.122094,27.881922 10.246094,28.419922 C11.178094,32.455922 13.770328,35.975172 17.361328,38.076172 C17.519328,38.169172 17.693234,38.214844 17.865234,38.214844 C18.209234,38.214844 18.544469,38.03675 18.730469,37.71875 C19.008469,37.24175 18.847094,36.630563 18.371094,36.351562 C15.254094,34.527563 13.004313,31.472703 12.195312,27.970703 C12.101562,27.567203 11.775875,27.278625 11.392578,27.210938 Z M53.996094,28.753906 C53.866203,28.751797 53.733469,28.774672 53.605469,28.826172 L51.751953,29.576172 C51.239953,29.783172 50.992219,30.366906 51.199219,30.878906 C51.356219,31.268906 51.730953,31.505859 52.126953,31.505859 C52.251953,31.505859 52.378953,31.480641 52.501953,31.431641 L54.355469,30.681641 C54.867469,30.474641 55.11325,29.892859 54.90625,29.380859 C54.751,28.996109 54.385766,28.760234 53.996094,28.753906 Z M53,34 C52.447,34 52,34.448 52,35 C52,35.552 52.447,36 53,36 L55,36 C55.553,36 56,35.552 56,35 C56,34.448 55.553,34 55,34 L53,34 Z M52.046875,38.6894523 C51.657156,38.688984 51.285797,38.917078 51.123047,39.298828 C50.907047,39.806828 51.145297,40.393375 51.654297,40.609375 L53.494141,41.390625 C53.622141,41.444625 53.755719,41.470703 53.886719,41.470703 C54.275719,41.470703 54.644641,41.242328 54.806641,40.861328 C55.022641,40.353328 54.786344,39.766781 54.277344,39.550781 L52.435547,38.769531 C52.308297,38.715781 52.176781,38.689609 52.046875,38.6894523 Z M49.484375,42.484375 C49.228625,42.484375 48.972844,42.581844 48.777344,42.777344 C48.386344,43.168344 48.386344,43.800406 48.777344,44.191406 L50.191406,45.605469 C50.386406,45.800469 50.642437,45.898438 50.898438,45.898438 C51.154438,45.898438 51.410469,45.800469 51.605469,45.605469 C51.996469,45.214469 51.996469,44.582406 51.605469,44.191406 L50.191406,42.777344 C49.995906,42.581844 49.740125,42.484375 49.484375,42.484375 Z M45.509766,45.125 C45.380156,45.122766 45.248094,45.146016 45.121094,45.197266 C44.608094,45.404266 44.361359,45.988 44.568359,46.5 L45.316406,48.353516 C45.473406,48.742516 45.848141,48.980469 46.244141,48.980469 C46.369141,48.980469 46.495188,48.95525 46.617188,48.90625 C47.130187,48.69925 47.378875,48.117469 47.171875,47.605469 L46.421875,45.751953 C46.266625,45.367953 45.898594,45.131703 45.509766,45.125 Z M41,46 C40.447,46 40,46.448 40,47 L40,49 C40,49.552 40.447,50 41,50 C41.553,50 42,49.552 42,49 L42,47 C42,46.448 41.553,46 41,46 Z M14.117188,47.503906 C17.409188,49.101906 21.101,50 25,50 C25.443,50 25.883312,49.986844 26.320312,49.964844 C29.450312,53.038844 33.527219,55.146109 38.074219,55.787109 C34.591219,61.477109 27.256688,63.664 21.179688,60.625 C18.075688,59.07 15.760062,56.399469 14.664062,53.105469 C14.053062,51.270469 13.896187,49.367906 14.117188,47.503906 Z M18.175781,52.917969 C18.046812,52.932531 17.919078,52.973266 17.798828,53.041016 C17.317828,53.312016 17.146969,53.920344 17.417969,54.402344 C18.493969,56.316344 20.104219,57.851891 22.074219,58.837891 C23.143219,59.373891 24.282984,59.729484 25.458984,59.896484 C25.506984,59.903484 25.554562,59.90625 25.601562,59.90625 C26.091562,59.90625 26.518844,59.546875 26.589844,59.046875 C26.666844,58.499875 26.287234,57.993016 25.740234,57.916016 C24.778234,57.778016 23.846703,57.486828 22.970703,57.048828 C21.358703,56.240828 20.039203,54.985875 19.158203,53.421875 C18.954953,53.061125 18.562688,52.874281 18.175781,52.917969 Z M32.433594,56.285156 C32.306172,56.310594 32.182609,56.361703 32.068359,56.439453 C31.365359,56.917453 30.596109,57.294594 29.787109,57.558594 C29.262109,57.729594 28.976484,58.292359 29.146484,58.818359 C29.283484,59.240359 29.675656,59.509766 30.097656,59.509766 C30.200656,59.509766 30.30325,59.492984 30.40625,59.458984 C31.39525,59.136984 32.333406,58.67775 33.191406,58.09375 C33.648406,57.78275 33.767031,57.162078 33.457031,56.705078 C33.224531,56.362328 32.815859,56.208844 32.433594,56.285156 Z", id: "coins-icon" }))))));
export default CoinsIcon;
//# sourceMappingURL=coins.js.map