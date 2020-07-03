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
var styles = createStyles({
    root: {
        fill: '#93A4AF',
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: 'white',
        }
    }
});
export var MemberIcon = withStyles(styles)(function (props) { return (React.createElement(SvgIcon, __assign({ style: { width: props.width || '30px', height: props.height || '27px' } }, props, { viewBox: props.viewBox || "0 0 30 27" }),
    React.createElement("g", { id: "\uD83C\uDFE6-Corporate-Wallet-member", stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
        React.createElement("g", { id: "member-icon-gg", transform: "translate(-357.000000, -163.000000)", fill: "#23E6FE", fillRule: "nonzero" },
            React.createElement("g", { id: "LLC-member", transform: "translate(102.000000, 82.000000)" },
                React.createElement("g", { id: "Radio-button-replace-member", transform: "translate(0.000000, 54.000000)" },
                    React.createElement("g", { id: "Btn-shareholder-member", transform: "translate(230.000000, 0.000000)" },
                        React.createElement("path", { d: "M37.5806452,27 C33.8451613,27 30.8064516,30.0387097 30.8064516,33.7741935 L30.8064516,34.7419355 C30.8064516,36.4340323 31.4694608,38.5195084 32.5963963,40.2261213 L27.6556199,43.0868197 C26.0177167,44.0352068 25,45.8001411 25,47.6930444 L25,51.6774194 C25,52.4777419 25.6512903,53.1290323 26.4516129,53.1290323 L48.7096774,53.1290323 C49.51,53.1290323 50.1612903,52.4777419 50.1612903,51.6774194 L50.1612903,50.2258065 L53.5483871,50.2258065 C54.3487097,50.2258065 55,49.5745161 55,48.7741935 L55,47.0513482 C55,45.2382837 54.0915627,43.5682635 52.5693042,42.5831023 L48.1322456,39.7120084 C48.2822456,39.5518471 48.4257739,39.3830144 48.5631932,39.206401 C48.5660965,39.2030139 48.566905,39.1984476 48.5698087,39.1950605 C49.5593248,37.9137702 50.1612903,36.2743548 50.1612903,34.7419355 L50.1612903,33.7741935 C50.1612903,30.5724194 47.5566129,27.9677419 44.3548387,27.9677419 C43.4645161,27.9677419 42.6246294,28.1757006 41.8702745,28.5366683 C40.7012423,27.5776361 39.2074194,27 37.5806452,27 Z M37.5806452,27.9677419 C40.7824194,27.9677419 43.3870968,30.5724194 43.3870968,33.7741935 L43.3870968,34.7419355 C43.3870968,38.1546774 40.6532258,42.483871 37.5806452,42.483871 C34.5080645,42.483871 31.7741935,38.1546774 31.7741935,34.7419355 L31.7741935,33.7741935 C31.7741935,30.5724194 34.378871,27.9677419 37.5806452,27.9677419 Z M44.3548387,28.9354839 C47.0229032,28.9354839 49.1935484,31.106129 49.1935484,33.7741935 L49.1935484,34.7419355 C49.1935484,36.176129 48.5764842,37.7185055 47.5860003,38.8633442 C47.5511616,38.9035055 47.5183116,38.9465473 47.482989,38.9852569 C47.3416987,39.1405795 47.1936492,39.2891811 47.0388105,39.4266005 L47.0388105,39.4275455 C46.7770363,39.6598035 46.50154,39.8603531 46.2194432,40.0229332 C45.987669,40.1559977 45.9077394,40.4522405 46.0417716,40.6835308 C46.1312877,40.8388534 46.2939594,40.9264113 46.4613787,40.9264113 C46.5431529,40.9264113 46.6264015,40.9052342 46.7023687,40.8612019 C46.9384977,40.7252342 47.1663405,40.5610205 47.3903732,40.3848915 L52.0429058,43.3958545 C53.2883897,44.2019835 54.0322581,45.5682837 54.0322581,47.0513482 L54.0322581,48.7741935 C54.0322581,49.0412903 53.8154839,49.2580645 53.5483871,49.2580645 L50.1612903,49.2580645 L50.1612903,48.2903226 C50.428871,48.2903226 50.6451613,48.0740323 50.6451613,47.8064516 L50.6451613,46.8387097 C50.6451613,46.571129 50.428871,46.3548387 50.1612903,46.3548387 C50.1017742,46.3548387 50.0458116,46.3690219 49.9930697,46.3888606 C49.6437148,45.0166031 48.7588963,43.8121423 47.5056705,43.0868197 L42.564894,40.2261213 C43.6918295,38.5195084 44.3548387,36.4340323 44.3548387,34.7419355 L44.3548387,33.7741935 C44.3548387,32.0409677 43.6948465,30.4629358 42.6206529,29.2634197 C43.1596852,29.0543874 43.7427419,28.9354839 44.3548387,28.9354839 Z M33.1700481,41.0124116 C34.3294029,42.4417665 35.8498387,43.4516129 37.5806452,43.4516129 C39.3114516,43.4516129 40.8318874,42.4417665 41.9912423,41.0124116 L47.0208545,43.9241429 C48.3611771,44.7002719 49.1935484,46.1446573 49.1935484,47.6930444 L49.1935484,51.6774194 C49.1935484,51.9445161 48.9767742,52.1612903 48.7096774,52.1612903 L26.4516129,52.1612903 C26.1845161,52.1612903 25.9677419,51.9445161 25.9677419,51.6774194 L25.9677419,47.6930444 C25.9677419,46.1446573 26.8005973,44.7002724 28.140436,43.9241429 L33.1700481,41.0124116 Z M36.1290323,46.3548387 C35.8614516,46.3548387 35.6451613,46.571129 35.6451613,46.8387097 C35.6451613,47.1062903 35.8614516,47.3225806 36.1290323,47.3225806 L39.0322581,47.3225806 C39.2998387,47.3225806 39.516129,47.1062903 39.516129,46.8387097 C39.516129,46.571129 39.2998387,46.3548387 39.0322581,46.3548387 L36.1290323,46.3548387 Z M52.5806452,46.3548387 C52.3130645,46.3548387 52.0967742,46.571129 52.0967742,46.8387097 L52.0967742,47.8064516 C52.0967742,48.0740323 52.3130645,48.2903226 52.5806452,48.2903226 C52.8482258,48.2903226 53.0645161,48.0740323 53.0645161,47.8064516 L53.0645161,46.8387097 C53.0645161,46.571129 52.8482258,46.3548387 52.5806452,46.3548387 Z M27.9032258,49.2580645 C27.6356452,49.2580645 27.4193548,49.4743548 27.4193548,49.7419355 L27.4193548,50.7096774 C27.4193548,50.9772581 27.6356452,51.1935484 27.9032258,51.1935484 C28.1708065,51.1935484 28.3870968,50.9772581 28.3870968,50.7096774 L28.3870968,49.7419355 C28.3870968,49.4743548 28.1708065,49.2580645 27.9032258,49.2580645 Z M30.3225806,49.2580645 C30.055,49.2580645 29.8387097,49.4743548 29.8387097,49.7419355 L29.8387097,50.7096774 C29.8387097,50.9772581 30.055,51.1935484 30.3225806,51.1935484 C30.5901613,51.1935484 30.8064516,50.9772581 30.8064516,50.7096774 L30.8064516,49.7419355 C30.8064516,49.4743548 30.5901613,49.2580645 30.3225806,49.2580645 Z M32.7419355,49.2580645 C32.4743548,49.2580645 32.2580645,49.4743548 32.2580645,49.7419355 L32.2580645,50.7096774 C32.2580645,50.9772581 32.4743548,51.1935484 32.7419355,51.1935484 C33.0095161,51.1935484 33.2258065,50.9772581 33.2258065,50.7096774 L33.2258065,49.7419355 C33.2258065,49.4743548 33.0095161,49.2580645 32.7419355,49.2580645 Z M35.1612903,49.2580645 C34.8937097,49.2580645 34.6774194,49.4743548 34.6774194,49.7419355 L34.6774194,50.7096774 C34.6774194,50.9772581 34.8937097,51.1935484 35.1612903,51.1935484 C35.428871,51.1935484 35.6451613,50.9772581 35.6451613,50.7096774 L35.6451613,49.7419355 C35.6451613,49.4743548 35.428871,49.2580645 35.1612903,49.2580645 Z M37.5806452,49.2580645 C37.3130645,49.2580645 37.0967742,49.4743548 37.0967742,49.7419355 L37.0967742,50.7096774 C37.0967742,50.9772581 37.3130645,51.1935484 37.5806452,51.1935484 C37.8482258,51.1935484 38.0645161,50.9772581 38.0645161,50.7096774 L38.0645161,49.7419355 C38.0645161,49.4743548 37.8482258,49.2580645 37.5806452,49.2580645 Z M40,49.2580645 C39.7324194,49.2580645 39.516129,49.4743548 39.516129,49.7419355 L39.516129,50.7096774 C39.516129,50.9772581 39.7324194,51.1935484 40,51.1935484 C40.2675806,51.1935484 40.483871,50.9772581 40.483871,50.7096774 L40.483871,49.7419355 C40.483871,49.4743548 40.2675806,49.2580645 40,49.2580645 Z M42.4193548,49.2580645 C42.1517742,49.2580645 41.9354839,49.4743548 41.9354839,49.7419355 L41.9354839,50.7096774 C41.9354839,50.9772581 42.1517742,51.1935484 42.4193548,51.1935484 C42.6869355,51.1935484 42.9032258,50.9772581 42.9032258,50.7096774 L42.9032258,49.7419355 C42.9032258,49.4743548 42.6869355,49.2580645 42.4193548,49.2580645 Z M44.8387097,49.2580645 C44.571129,49.2580645 44.3548387,49.4743548 44.3548387,49.7419355 L44.3548387,50.7096774 C44.3548387,50.9772581 44.571129,51.1935484 44.8387097,51.1935484 C45.1062903,51.1935484 45.3225806,50.9772581 45.3225806,50.7096774 L45.3225806,49.7419355 C45.3225806,49.4743548 45.1062903,49.2580645 44.8387097,49.2580645 Z M47.2580645,49.2580645 C46.9904839,49.2580645 46.7741935,49.4743548 46.7741935,49.7419355 L46.7741935,50.7096774 C46.7741935,50.9772581 46.9904839,51.1935484 47.2580645,51.1935484 C47.5256452,51.1935484 47.7419355,50.9772581 47.7419355,50.7096774 L47.7419355,49.7419355 C47.7419355,49.4743548 47.5256452,49.2580645 47.2580645,49.2580645 Z", id: "icon-member-corp" })))))))); });
export default MemberIcon;
//# sourceMappingURL=member.js.map