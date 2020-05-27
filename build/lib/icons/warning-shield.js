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
var _linearGradient_1 = require("./_linearGradient");
var styles = {
    root: {
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: 'white',
        },
    }
};
var linearGradientColor = 'url(#dlg)';
exports.WarningShieldIcon = react_jss_1.default(styles)(function (props) { return (React.createElement(core_1.SvgIcon, __assign({ style: { width: props.width || '68px', height: props.height || '74px', fill: props.fill || linearGradientColor } }, props, { viewBox: '0 0 68 74' }),
    React.createElement(_linearGradient_1.default, null),
    React.createElement("g", { id: "Marketplace", stroke: "none", strokeWidth: "1", fill: "inherit", fillRule: "evenodd" },
        React.createElement("g", { id: "504.3---Exchange-Details-+-Send-Stake-+-Transaction-Error", transform: "translate(-375.000000, -273.000000)", fill: linearGradientColor, fillRule: "nonzero" },
            React.createElement("g", { id: "Modal", transform: "translate(330.000000, 159.000000)" },
                React.createElement("path", { d: "M78.9076923,114 L78.3824516,114.260336 C78.3824516,114.260336 64.5846154,121.152403 46.1692308,121.152403 L45,121.152403 L45,122.321634 C45,149.451442 53.2896638,165.852644 61.6615385,175.412019 C70.0288462,184.975962 78.5468747,187.743749 78.5468747,187.743749 L78.9076923,187.857932 L79.2685099,187.743749 C79.2685099,187.743749 87.7865385,184.975962 96.1538462,175.412019 C104.525721,165.852644 112.815385,149.451442 112.815385,122.321634 L112.815385,121.152403 L111.646154,121.152403 C93.2307692,121.152403 79.432933,114.260336 79.432933,114.260336 L78.9076923,114 Z M78.9076923,116.585096 C80.2504814,117.233654 93.0343747,123.152885 110.435818,123.436057 C110.202885,149.3875 102.283174,164.866105 94.4,173.877403 C86.6858176,182.68774 79.4466352,185.163221 78.9076923,185.345913 C78.3687506,185.163221 71.129567,182.68774 63.4153846,173.877403 C55.5322121,164.866105 47.6125,149.3875 47.379567,123.436057 C64.7810099,123.152885 77.5649044,117.233654 78.9076923,116.585096 Z M76.7153846,122.618509 L76.3088945,122.691586 L76.1992791,122.737259 L75.4867791,123.504567 L75.6786055,124.532211 L76.6194714,125.002644 L77.0259615,124.925 L77.1355769,124.883893 L77.8435099,124.112019 L77.6516824,123.084375 L76.7153846,122.618509 Z M81.4836538,122.705288 L80.4423077,122.828605 L79.917067,123.7375 L80.3326923,124.696634 L80.6889429,124.902163 L80.7985583,124.943269 L81.8399044,124.819952 L82.3605769,123.911057 L81.9495198,122.947355 L81.5932692,122.741826 L81.4836538,122.705288 Z M72.2576923,124.166826 L71.8512022,124.217067 L71.7415868,124.249038 L70.9788462,124.970672 L71.1021638,126.012019 L72.0064901,126.537259 L72.4175484,126.487019 L72.5317308,126.455047 L73.2899044,125.733413 L73.1665868,124.692067 L72.2576923,124.166826 Z M85.9504814,124.217067 L84.9182692,124.404326 L84.4524044,125.340624 L84.9228362,126.276923 L85.2882209,126.459615 L85.4024044,126.491586 L86.4346154,126.304326 L86.9050484,125.372596 L86.4346154,124.436298 L86.0646638,124.249038 L85.9504814,124.217067 Z M67.7269231,125.468509 L67.3112978,125.486778 L67.1971154,125.518749 L66.3932692,126.190144 L66.4480769,127.236057 L67.325,127.816105 L67.7314901,127.793269 L67.8502407,127.765865 L68.6540868,127.09447 L68.5947121,126.048557 L67.7269231,125.468509 Z M90.5269231,125.486778 L89.5038462,125.706009 L89.0653846,126.660577 L89.567789,127.578605 L89.9423077,127.747596 L90.0564901,127.779567 L91.079567,127.560336 L91.5134615,126.605769 L91.0156253,125.68774 L90.6365385,125.518749 L90.5269231,125.486778 Z M63.0865385,126.505288 L62.6800484,126.514423 L62.5612978,126.537259 L61.7346154,127.181249 L61.7528846,128.227163 L62.6069714,128.839182 L63.0180286,128.830047 L63.1367791,128.807211 L63.9634615,128.167788 L63.9406253,127.117308 L63.0865385,126.505288 Z M95.1125,126.51899 L94.1076923,126.815865 L93.7423077,127.797836 L94.3086538,128.679326 L94.6968747,128.820913 L94.8156253,128.843749 L95.820433,128.546875 L96.1812506,127.564903 L95.6103362,126.683413 L95.2266824,126.541826 L95.1125,126.51899 Z M99.7848561,127.295432 L98.7937506,127.63798 L98.4740385,128.633654 L99.0769231,129.48774 L99.4697121,129.611057 L99.5884615,129.629326 L100.575,129.291346 L100.899279,128.295672 L100.291828,127.437019 L99.8990385,127.313701 L99.7848561,127.295432 Z M58.0031253,127.318269 L57.8843747,127.336538 L57.0394231,127.948557 L57.0165868,128.99447 L57.8432692,129.638462 L58.2588945,129.647596 L58.3730769,129.629326 L59.2225967,129.01274 L59.240866,127.966826 L58.4141824,127.327403 L58.0031253,127.318269 Z M53.4403846,127.852644 C53.4129814,127.848077 53.3855769,127.852644 53.3627407,127.852644 C53.2942308,127.857211 53.2759615,127.857211 53.303366,127.857211 L52.2026439,127.925721 L52.2026439,129.076682 C52.1935099,129.560816 52.4858176,129.999278 52.9379814,130.177403 C53.3855769,130.355529 53.9016824,130.241346 54.2305286,129.885096 C54.5867791,129.560816 54.7100967,129.049278 54.5365385,128.597115 C54.3584132,128.144952 53.9245198,127.848077 53.4403846,127.852644 Z M104.338462,127.852644 C103.854328,127.861778 103.425,128.176923 103.265144,128.633654 C103.105289,129.094952 103.246875,129.601923 103.621395,129.917067 C103.621395,129.917067 103.621395,129.917067 103.625962,129.921634 C103.959375,130.255047 104.466346,130.350962 104.904808,130.163701 C105.338702,129.976442 105.621875,129.547115 105.617308,129.072115 L105.617308,127.925721 L104.516587,127.857211 C104.54399,127.857211 104.521154,127.857211 104.452644,127.852644 C104.416105,127.848077 104.379567,127.848077 104.338462,127.852644 Z M74.1668275,130.506249 L75.4593747,155.060096 L82.3560099,155.060096 L82.4153846,153.95024 L83.6485583,130.506249 L74.1668275,130.506249 Z M104.050721,132.69399 L103.228605,133.342547 L103.123558,133.74447 L103.114423,133.863221 L103.502644,134.836057 L104.516587,135.105529 L105.338702,134.452403 L105.443751,134.055047 L105.452885,133.936298 L105.064664,132.963462 L104.050721,132.69399 Z M53.1298077,132.789903 L52.3990385,133.534375 L52.3442308,133.940865 L52.3442308,134.027644 L52.3487978,134.100721 L52.8877407,135.00048 L53.9290868,135.110096 L54.6415868,134.338221 L54.6826923,133.927163 L54.6826923,133.890624 L54.6781253,133.854086 L54.6781253,133.844952 L54.1711538,132.926923 L53.1298077,132.789903 Z M76.6286055,132.844711 L81.1867791,132.844711 L80.1362978,152.721634 L77.6790868,152.721634 L76.6286055,132.844711 Z M103.630529,137.54447 L102.767308,138.138221 L102.634856,138.526442 L102.616587,138.645192 L102.945433,139.640865 L103.936538,139.978846 L104.795192,139.385096 L104.927644,138.996875 L104.945913,138.873557 L104.626202,137.882452 L103.630529,137.54447 Z M53.467789,137.722596 L52.8055286,138.531009 L52.7872593,138.946634 L52.8009615,139.065385 L53.3901439,139.933172 L54.4406253,139.974278 L55.1028846,139.165865 L55.1211538,138.754808 L55.1028846,138.636057 L54.5137022,137.768269 L53.467789,137.722596 Z M102.858654,142.344711 L101.958895,142.883654 L101.799038,143.26274 L101.776202,143.38149 L102.031971,144.395432 L103.000241,144.797355 L103.9,144.26298 L104.059856,143.879326 L104.082692,143.765144 L103.826923,142.746634 L102.858654,142.344711 Z M55.2125,142.591346 L54.1665868,142.614182 L53.554567,143.459134 L53.5637022,143.874759 L53.5865385,143.988942 L54.2259615,144.820192 L55.2764429,144.797355 L55.8884615,143.947836 L55.8793275,143.536778 L55.8564901,143.418029 L55.2125,142.591346 Z M101.725962,147.076442 L100.789664,147.551442 L100.606971,147.921393 L100.575,148.040144 L100.762259,149.067788 L101.703125,149.533654 L102.639423,149.058654 L102.822115,148.688701 L102.854087,148.574519 L102.662259,147.546875 L101.725962,147.076442 Z M56.2538462,147.35048 L55.2125,147.437259 L54.655289,148.323316 L54.6872593,148.734375 L54.7192308,148.848557 L55.4134615,149.634134 L56.4593747,149.547355 L57.0165868,148.661298 L56.9800484,148.25024 L56.9480769,148.136057 L56.2538462,147.35048 Z M100.250721,151.707692 L99.2778846,152.086778 L99.0586538,152.438462 L99.0175484,152.548077 L99.0997593,153.59399 L99.9903846,154.146634 L100.967789,153.76298 L101.18702,153.415865 L101.232692,153.306249 L101.141346,152.260336 L100.250721,151.707692 Z M57.6377407,151.995432 L56.6055286,152.182692 L56.1396638,153.123557 L56.2127407,153.52548 L56.2538462,153.639663 L57.0211538,154.352163 L58.053366,154.164903 L58.5192308,153.228605 L58.4461538,152.822115 L58.4050484,152.707932 L57.6377407,151.995432 Z M98.3461538,156.192788 L97.3550484,156.521634 L97.1175484,156.864182 L97.0673077,156.973798 L97.1084132,158.019711 L97.967067,158.613462 L98.9627407,158.280047 L99.1956737,157.942067 L99.2459132,157.832452 L99.2048077,156.78197 L98.3461538,156.192788 Z M59.4555286,156.503365 L58.4415868,156.772836 L58.0487978,157.745672 L58.1538462,158.143029 L58.2086538,158.252644 L59.0307692,158.901201 L60.0401439,158.631731 L60.432933,157.658893 L60.3278846,157.261538 L60.2730769,157.15649 L59.4555286,156.503365 Z M78.9076923,158.567788 C76.3362978,158.567788 74.2307692,160.673316 74.2307692,163.244711 C74.2307692,165.816105 76.3362978,167.921634 78.9076923,167.921634 C81.4790868,167.921634 83.5846154,165.816105 83.5846154,163.244711 C83.5846154,160.673316 81.4790868,158.567788 78.9076923,158.567788 Z M96.1401439,160.504326 L95.1125,160.71899 L94.8384615,161.025 L94.7790868,161.12548 L94.6923077,162.171393 L95.4733176,162.865624 L96.5009615,162.655529 L96.775,162.344952 L96.8343747,162.24447 L96.9211538,161.198557 L96.1401439,160.504326 Z M61.5884615,160.83774 L60.6156253,161.230529 L60.3461538,162.24447 L60.5060099,162.623557 L60.5653846,162.728605 L61.4651439,163.267547 L62.4334132,162.879326 L62.7028846,161.860816 L62.5430286,161.481731 L62.4836538,161.381249 L61.5884615,160.83774 Z M78.9076923,160.906249 C80.2139429,160.906249 81.2461538,161.938462 81.2461538,163.244711 C81.2461538,164.550962 80.2139429,165.583172 78.9076923,165.583172 C77.6014429,165.583172 76.5692308,164.550962 76.5692308,163.244711 C76.5692308,161.938462 77.6014429,160.906249 78.9076923,160.906249 Z M93.5230769,164.610336 L92.4862978,164.761057 L92.1985583,165.053365 L92.1300484,165.153846 L91.9838945,166.190624 L92.7237978,166.930529 L93.7605769,166.77524 L94.0528846,166.482932 L94.1213945,166.387019 L94.2675484,165.35024 L93.5230769,164.610336 Z M64.2375,164.92548 L63.292067,165.377644 L63.0865385,166.405288 L63.2692308,166.77524 L63.3377407,166.875721 L64.2649044,167.359855 L65.2057692,166.912259 L65.4112978,165.880047 L65.2377407,165.510096 L65.1646638,165.414182 L64.2375,164.92548 Z M90.6,168.483413 L89.5540868,168.524519 L89.2343747,168.780288 L89.1567308,168.871634 L88.9009615,169.885577 L89.5586538,170.698557 L90.604567,170.662019 L90.9242791,170.401682 L91.0019231,170.310336 L91.2576923,169.291826 L90.6,168.483413 Z M67.2108176,168.734615 L66.3247593,169.291826 L66.2425484,170.33774 L66.4617791,170.684855 L66.5394231,170.771634 L67.5213945,171.150721 L68.4028846,170.593509 L68.4896638,169.547596 L68.270433,169.20048 L68.1882209,169.109134 L67.2108176,168.734615 Z M86.2930286,172.013942 L85.9459132,172.23774 L85.8637022,172.319952 L85.5028846,173.30649 L86.078366,174.178846 L87.1242791,174.242788 L87.4713945,174.01899 L87.5536055,173.936778 L87.9144231,172.95024 L87.3389429,172.073316 L86.2930286,172.013942 Z M70.5814901,172.210336 L69.7548077,172.858893 L69.7867791,173.909375 L70.0379814,174.229086 L70.1293275,174.311298 L71.1432692,174.580769 L71.9653846,173.932211 L71.9379814,172.886298 L71.6822121,172.562019 L71.595433,172.484375 L70.5814901,172.210336 Z M82.6985583,175.160816 L82.3331737,175.352644 L82.2372593,175.425721 L81.7896638,176.371154 L82.2737978,177.298316 L83.3105769,177.46274 L83.6759615,177.27548 L83.7673077,177.202403 L84.2194714,176.252403 L83.7307692,175.32524 L82.6985583,175.160816 Z M74.3175484,175.297836 L73.5593747,176.01947 L73.6872593,177.060816 L73.970433,177.362259 L74.0663462,177.430769 L75.1031253,177.604326 L75.8567308,176.878124 L75.7334132,175.841346 L75.4502407,175.539903 L75.3497593,175.471393 L74.3175484,175.297836 Z M78.8163462,177.796154 C78.2728362,177.805288 77.8115385,178.188942 77.6973561,178.714182 C77.5831737,179.24399 77.8435099,179.782932 78.3276439,180.015865 C78.3276439,180.015865 78.3413462,180.025 78.3778846,180.043269 L78.9031253,180.303605 L79.4740385,180.015865 C79.9673077,179.778365 80.2276439,179.225721 80.0951923,178.691346 C79.9673077,178.15697 79.4786055,177.782452 78.9305286,177.800721 C78.9259615,177.796154 78.9259615,177.796154 78.9213945,177.800721 C78.8848561,177.796154 78.8483176,177.796154 78.8163462,177.796154 Z", id: "icon-warning-large" })))))); });
exports.default = exports.WarningShieldIcon;
//# sourceMappingURL=warning-shield.js.map