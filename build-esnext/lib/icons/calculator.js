import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
const styles = createStyles({
    root: {
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: 'white',
        }
    }
});
export const CalculatorIcon = withStyles(styles)((props) => (React.createElement(SvgIcon, Object.assign({ style: { width: props.width || '68px', height: props.height || '66px' } }, props, { viewBox: props.viewBox || "0 0 68 66" }),
    React.createElement("g", { id: "\uD83D\uDCB9-Marketplace", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "760---Loans-Marketplace---Lending-icon", transform: "translate(-195.000000, -297.000000)", fill: "#00C0D9", fillRule: "nonzero" },
            React.createElement("g", { id: "Calculator-box", transform: "translate(150.000000, 264.000000)" },
                React.createElement("path", { d: "M52.8461538,33 C50.6230769,33 48.9230769,34.7 48.9230769,36.9230769 L48.9230769,47.3846154 L47.6153846,47.3846154 C46.1769231,47.3846154 45,48.5615385 45,50 L45,60.4615385 C45,61.9 46.1769231,63.0769231 47.6153846,63.0769231 L48.9230769,63.0769231 L48.9230769,94.4615385 C48.9230769,96.6846154 50.6230769,98.3846154 52.8461538,98.3846154 L105.153846,98.3846154 C107.376923,98.3846154 109.076923,96.6846154 109.076923,94.4615385 L109.076923,63.0769231 L110.384615,63.0769231 C111.823077,63.0769231 113,61.9 113,60.4615385 L113,50 C113,48.4307692 111.823077,47.3846154 110.384615,47.3846154 L109.076923,47.3846154 L109.076923,36.9230769 C109.076923,34.7 107.376923,33 105.153846,33 L52.8461538,33 Z M52.8461538,35.6153846 L105.153846,35.6153846 C105.938462,35.6153846 106.461538,36.1384615 106.461538,36.9230769 L106.461538,50 L106.461538,53.9230769 L51.5384615,53.9230769 L51.5384615,50 L51.5384615,36.9230769 C51.5384615,36.1384615 52.0615385,35.6153846 52.8461538,35.6153846 Z M81.6153846,39.6048675 C81.3865385,39.6048675 81.1576923,39.6682095 80.9615385,39.7989787 L78.3461538,41.106671 C77.6923077,41.3682095 77.4307692,42.1538462 77.6923077,42.8076923 C77.9538462,43.4615385 78.7394828,43.7230769 79.393329,43.4615385 L80.0471752,43.0682095 L80.0471752,48.6923077 C80.0471752,49.4769231 80.5702521,50 81.3548675,50 C82.1394828,50 82.6625598,49.4769231 82.6625598,48.6923077 L82.6625598,40.8461538 C82.9240982,40.4538462 82.6615385,39.9297479 82.2692308,39.7989787 C82.0730769,39.6682095 81.8442308,39.6048675 81.6153846,39.6048675 Z M98.6153846,39.6048675 C98.3865385,39.6048675 98.1576923,39.6682095 97.9615385,39.7989787 L95.3461538,41.106671 C94.6923077,41.3682095 94.4307692,42.1538462 94.6923077,42.8076923 C94.9538462,43.4615385 95.7394828,43.7230769 96.393329,43.4615385 L97.0471752,43.0682095 L97.0471752,48.6923077 C97.0471752,49.4769231 97.5702521,50 98.3548675,50 C99.1394828,50 99.6625598,49.4769231 99.6625598,48.6923077 L99.6625598,40.8461538 C99.9240982,40.4538462 99.6615385,39.9297479 99.2692308,39.7989787 C99.0730769,39.6682095 98.8442308,39.6048675 98.6153846,39.6048675 Z M89.4615385,40.8461538 C88.6769231,40.8461538 88.1538462,41.3692308 88.1538462,42.1538462 L88.1538462,43.4615385 L86.8461538,43.4615385 C86.0615385,43.4615385 85.5384615,43.9846154 85.5384615,44.7692308 C85.5384615,45.5538462 86.0615385,46.0769231 86.8461538,46.0769231 L88.1538462,46.0769231 L88.1538462,47.3846154 C88.1538462,48.1692308 88.6769231,48.6923077 89.4615385,48.6923077 C90.2461538,48.6923077 90.7692308,48.1692308 90.7692308,47.3846154 L90.7692308,46.0769231 L92.0769231,46.0769231 C92.8615385,46.0769231 93.3846154,45.5538462 93.3846154,44.7692308 C93.3846154,43.9846154 92.8615385,43.4615385 92.0769231,43.4615385 L90.7692308,43.4615385 L90.7692308,42.1538462 C90.7692308,41.3692308 90.2461538,40.8461538 89.4615385,40.8461538 Z M47.6153846,50 L48.9230769,50 L48.9230769,60.4615385 L47.6153846,60.4615385 L47.6153846,50 Z M109.076923,50 L110.384615,50 L110.384615,60.4615385 L109.076923,60.4615385 L109.076923,50 Z M51.5384615,56.5384615 L106.461538,56.5384615 L106.461538,60.4615385 L106.461538,94.4615385 C106.461538,95.2461538 105.938462,95.7692308 105.153846,95.7692308 L52.8461538,95.7692308 C52.0615385,95.7692308 51.5384615,95.2461538 51.5384615,94.4615385 L51.5384615,60.4615385 L51.5384615,56.5384615 Z M59.3846154,59.1538462 C58.6,59.1538462 58.0769231,59.6769231 58.0769231,60.4615385 L58.0769231,63.0769231 C58.0769231,63.8615385 58.6,64.3846154 59.3846154,64.3846154 C60.1692308,64.3846154 60.6923077,63.8615385 60.6923077,63.0769231 L60.6923077,60.4615385 C60.6923077,59.6769231 60.1692308,59.1538462 59.3846154,59.1538462 Z M65.9230769,59.1538462 C65.1384615,59.1538462 64.6153846,59.6769231 64.6153846,60.4615385 L64.6153846,63.0769231 C64.6153846,63.8615385 65.1384615,64.3846154 65.9230769,64.3846154 C66.7076923,64.3846154 67.2307692,63.8615385 67.2307692,63.0769231 L67.2307692,60.4615385 C67.2307692,59.6769231 66.7076923,59.1538462 65.9230769,59.1538462 Z M72.4615385,59.1538462 C71.6769231,59.1538462 71.1538462,59.6769231 71.1538462,60.4615385 L71.1538462,63.0769231 C71.1538462,63.8615385 71.6769231,64.3846154 72.4615385,64.3846154 C73.2461538,64.3846154 73.7692308,63.8615385 73.7692308,63.0769231 L73.7692308,60.4615385 C73.7692308,59.6769231 73.2461538,59.1538462 72.4615385,59.1538462 Z M79,59.1538462 C78.2153846,59.1538462 77.6923077,59.6769231 77.6923077,60.4615385 L77.6923077,63.0769231 C77.6923077,63.8615385 78.2153846,64.3846154 79,64.3846154 C79.7846154,64.3846154 80.3076923,63.8615385 80.3076923,63.0769231 L80.3076923,60.4615385 C80.3076923,59.6769231 79.7846154,59.1538462 79,59.1538462 Z M85.5384615,59.1538462 C84.7538462,59.1538462 84.2307692,59.6769231 84.2307692,60.4615385 L84.2307692,63.0769231 C84.2307692,63.8615385 84.7538462,64.3846154 85.5384615,64.3846154 C86.3230769,64.3846154 86.8461538,63.8615385 86.8461538,63.0769231 L86.8461538,60.4615385 C86.8461538,59.6769231 86.3230769,59.1538462 85.5384615,59.1538462 Z M92.0769231,59.1538462 C91.2923077,59.1538462 90.7692308,59.6769231 90.7692308,60.4615385 L90.7692308,63.0769231 C90.7692308,63.8615385 91.2923077,64.3846154 92.0769231,64.3846154 C92.8615385,64.3846154 93.3846154,63.8615385 93.3846154,63.0769231 L93.3846154,60.4615385 C93.3846154,59.6769231 92.8615385,59.1538462 92.0769231,59.1538462 Z M98.6153846,59.1538462 C97.8307692,59.1538462 97.3076923,59.6769231 97.3076923,60.4615385 L97.3076923,63.0769231 C97.3076923,63.8615385 97.8307692,64.3846154 98.6153846,64.3846154 C99.4,64.3846154 99.9230769,63.8615385 99.9230769,63.0769231 L99.9230769,60.4615385 C99.9230769,59.6769231 99.4,59.1538462 98.6153846,59.1538462 Z M59.3846154,67 C57.9461538,67 56.7692308,68.1769231 56.7692308,69.6153846 L56.7692308,74.8461538 C56.7692308,76.2846154 57.9461538,77.4615385 59.3846154,77.4615385 L67.2307692,77.4615385 C68.6692308,77.4615385 69.8461538,76.2846154 69.8461538,74.8461538 L69.8461538,69.6153846 C69.8461538,68.1769231 68.6692308,67 67.2307692,67 L59.3846154,67 Z M75.0769231,67 C73.6384615,67 72.4615385,68.1769231 72.4615385,69.6153846 L72.4615385,74.8461538 C72.4615385,76.2846154 73.6384615,77.4615385 75.0769231,77.4615385 L82.9230769,77.4615385 C84.3615385,77.4615385 85.5384615,76.2846154 85.5384615,74.8461538 L85.5384615,69.6153846 C85.5384615,68.1769231 84.3615385,67 82.9230769,67 L75.0769231,67 Z M90.7692308,67 C89.3307692,67 88.1538462,68.1769231 88.1538462,69.6153846 L88.1538462,87.9230769 C88.1538462,89.3615385 89.3307692,90.5384615 90.7692308,90.5384615 L98.6153846,90.5384615 C100.053846,90.5384615 101.230769,89.3615385 101.230769,87.9230769 L101.230769,69.6153846 C101.230769,68.1769231 100.053846,67 98.6153846,67 L90.7692308,67 Z M59.3846154,69.6153846 L67.2307692,69.6153846 L67.2307692,74.8461538 L59.3846154,74.8461538 L59.3846154,69.6153846 Z M75.0769231,69.6153846 L82.9230769,69.6153846 L82.9230769,74.8461538 L75.0769231,74.8461538 L75.0769231,69.6153846 Z M90.7692308,69.6153846 L98.6153846,69.6153846 L98.6153846,87.9230769 L90.7692308,87.9230769 L90.7692308,69.6153846 Z M59.3846154,80.0769231 C57.9461538,80.0769231 56.7692308,81.2538462 56.7692308,82.6923077 L56.7692308,87.9230769 C56.7692308,89.3615385 57.9461538,90.5384615 59.3846154,90.5384615 L67.2307692,90.5384615 C68.6692308,90.5384615 69.8461538,89.3615385 69.8461538,87.9230769 L69.8461538,82.6923077 C69.8461538,81.2538462 68.6692308,80.0769231 67.2307692,80.0769231 L59.3846154,80.0769231 Z M75.0769231,80.0769231 C73.6384615,80.0769231 72.4615385,81.2538462 72.4615385,82.6923077 L72.4615385,87.9230769 C72.4615385,89.3615385 73.6384615,90.5384615 75.0769231,90.5384615 L82.9230769,90.5384615 C84.3615385,90.5384615 85.5384615,89.3615385 85.5384615,87.9230769 L85.5384615,82.6923077 C85.5384615,81.2538462 84.3615385,80.0769231 82.9230769,80.0769231 L75.0769231,80.0769231 Z M59.3846154,82.6923077 L67.2307692,82.6923077 L67.2307692,87.9230769 L59.3846154,87.9230769 L59.3846154,82.6923077 Z M75.0769231,82.6923077 L82.9230769,82.6923077 L82.9230769,87.9230769 L75.0769231,87.9230769 L75.0769231,82.6923077 Z", id: "icon-calculator-ma" })))))));
export default CalculatorIcon;
//# sourceMappingURL=calculator.js.map