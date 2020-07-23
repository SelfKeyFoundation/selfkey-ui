import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
const styles = createStyles({
    root: {
        fill: '#93A4AF',
        transition: 'all 0.2s ease-out',
        '&:hover': {
            fill: 'white',
        }
    }
});
export const SignatureIcon = withStyles(styles)((props) => (React.createElement(SvgIcon, Object.assign({ style: { width: props.width || '30px', height: props.height || '27px' } }, props, { viewBox: props.viewBox || "0 0 30 27" }),
    React.createElement("g", { id: "\uD83C\uDFE6-Corporate-Wallet-signature", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "802.1---All-Member-Types-signature", transform: "translate(-357.000000, -358.000000)", fill: "#23E6FE", fillRule: "nonzero" },
            React.createElement("g", { id: "LLC-signature", transform: "translate(102.000000, 82.000000)" },
                React.createElement("g", { id: "Radio-button-replace-signature", transform: "translate(0.000000, 251.000000)" },
                    React.createElement("g", { id: "Btn-director-signature", transform: "translate(230.000000, 0.000000)" },
                        React.createElement("path", { d: "M44.9149876,25.5390178 C45.6334492,24.8203274 46.8028089,24.8203274 47.5212705,25.5390178 L47.5212705,25.5390178 L54.4609822,32.4787295 C55.1796726,33.1971911 55.1796726,34.3665508 54.4609822,35.0852413 L54.4609822,35.0852413 L52.119745,37.4264784 C51.771615,37.7746084 51.308815,37.9664118 50.8164891,37.9664118 C50.3241633,37.9664118 49.8613632,37.7746084 49.5132332,37.4264784 L49.5132332,37.4264784 L49.2287325,37.1419777 L46.7178936,44.6298625 C46.6611308,44.7987777 46.5306678,44.9329027 46.363126,44.9940143 L46.363126,44.9940143 L41.6270932,46.721618 C41.3231375,46.832397 40.9866805,46.6758415 40.8756726,46.3718858 C40.7648936,46.0679301 40.921449,45.7314731 41.2254047,45.6204652 L41.2254047,45.6204652 L45.6966207,43.9896787 L48.3031325,36.2163776 L43.7836224,31.6968675 L36.0103213,34.3033793 L30.9240986,48.2471186 L38.6706204,40.5008256 C38.2238421,39.6935577 38.3421743,38.6551187 39.0263035,37.9707606 C39.4273053,37.5697588 39.9606011,37.3488873 40.5277714,37.3488873 C41.0949418,37.3488873 41.6280087,37.5697588 42.0292394,37.9707606 C42.8571068,38.7988568 42.8571068,40.1458292 42.0292394,40.9736965 C41.6280087,41.3746983 41.0949418,41.5955697 40.5277714,41.5955697 C40.1615597,41.5955697 39.8099965,41.5031013 39.4987166,41.3300663 L39.4987166,41.3300663 L31.7528814,49.0759014 L36.8125538,47.2301945 C37.1167384,47.1194154 37.4529665,47.2759709 37.5637455,47.5799266 C37.6747534,47.8838823 37.5181979,48.2203394 37.2142422,48.3311184 L37.2142422,48.3311184 L29.6673058,51.0841148 C29.6018454,51.1079186 29.5338674,51.1195916 29.466576,51.1195916 L29.466576,51.1195916 C28.159658,51.1195916 26.9234646,50.5501324 26.0738535,49.5579276 C25.2242424,48.5654939 24.8523086,47.2560582 25.0534961,45.965162 L25.0534961,45.965162 L27.2422977,31.9266654 C27.286472,31.6435379 27.2113986,31.3791789 27.0250884,31.1617407 C26.8390071,30.9440736 26.5892965,30.8291747 26.3029647,30.8291747 C25.9793251,30.8291747 25.717026,30.5668755 25.717026,30.243236 L25.717026,30.243236 L25.717026,27.89971 C25.717026,27.5760704 25.9793251,27.3137713 26.3029647,27.3137713 C27.609196,27.3137713 28.8458472,27.8830016 29.6954583,28.8754353 C30.5450695,29.8676401 30.9170032,31.1770758 30.7158156,32.467972 L30.7158156,32.467972 L28.5270141,46.5066975 C28.4828398,46.789596 28.5579132,47.054184 28.7442234,47.2716221 C28.9305336,47.4892892 29.1802442,47.6041882 29.466576,47.6041882 L29.466576,47.6041882 L29.9112943,47.6041882 L35.0062146,33.6366452 C35.0673262,33.4691032 35.2012223,33.3386404 35.3703663,33.2818775 L35.3703663,33.2818775 L42.8580223,30.7712675 L42.5735216,30.4867668 C41.85506,29.7680763 41.85506,28.5989454 42.5735216,27.880255 L42.5735216,27.880255 Z M26.8886745,28.5380627 L26.8886745,29.7371772 C27.2839543,29.8488717 27.6371197,30.0745497 27.9154406,30.3995626 C28.3251399,30.8779266 28.4972594,31.4844648 28.4002133,32.1070247 L28.4002133,32.1070247 L26.2114118,46.1457501 C26.063096,47.0979005 26.3372971,48.0637839 26.9639768,48.7957495 C27.5029947,49.4254047 28.2532709,49.8229733 29.0658031,49.9223082 L29.0658031,49.9223082 L29.4839711,48.7760656 L29.466576,48.7760656 C28.836463,48.7760656 28.2635706,48.5123932 27.8538712,48.0338003 C27.4441719,47.5552073 27.2718236,46.9486692 27.3688697,46.3261094 L27.3688697,46.3261094 L29.5579,32.2876128 C29.7062158,31.3354624 29.4320148,30.3693501 28.805335,29.6373845 C28.307516,29.0560234 27.6295666,28.6715011 26.8886745,28.5380627 L26.8886745,28.5380627 Z M39.2203957,46.390883 C39.3746624,46.390883 39.5257247,46.4535968 39.6346727,46.5627736 C39.7438495,46.6717216 39.8063344,46.8227839 39.8063344,46.9770507 C39.8063344,47.1310884 39.7436207,47.2821508 39.6346727,47.3910987 C39.5257247,47.5002756 39.3746624,47.5629894 39.2203957,47.5629894 C39.0659002,47.5629894 38.9150667,47.5002756 38.8063476,47.3910987 C38.6967129,47.2821508 38.634457,47.1310884 38.634457,46.9770507 C38.634457,46.8227839 38.6967129,46.6717216 38.8063476,46.5627736 C38.9150667,46.4535968 39.0656713,46.390883 39.2203957,46.390883 Z M41.2004566,38.7995434 C40.8296672,38.4285252 40.2261046,38.4285252 39.8550864,38.7995434 C39.4840681,39.1705616 39.4840681,39.7741243 39.8550864,40.1449136 C40.2258757,40.5159319 40.8296672,40.5159319 41.2004566,40.1449136 C41.5714748,39.7741243 41.5714748,39.1705616 41.2004566,38.7995434 Z M46.6927165,26.3675718 C46.431104,26.1059593 46.005154,26.1059593 45.7435416,26.3675718 L45.7435416,26.3675718 L43.4023044,28.708809 C43.140463,28.9704215 43.140463,29.3963714 43.4023044,29.6579839 L43.4023044,29.6579839 L49.3884924,35.6441719 L50.3420161,36.5976956 C50.468588,36.7244964 50.6372743,36.7943055 50.8164891,36.7943055 C50.9959328,36.7943055 51.1643902,36.7244964 51.291191,36.5976956 L51.291191,36.5976956 L52.0474182,35.8414684 L48.0868387,31.8811178 C47.8581852,31.6522355 47.8581852,31.2812173 48.0868387,31.052335 C48.3159499,30.8234526 48.6867392,30.8234526 48.9156215,31.052335 L48.9156215,31.052335 L52.876201,35.0126855 L53.6324282,34.2564584 C53.8940407,33.994846 53.8940407,33.568896 53.6324282,33.3072835 L53.6324282,33.3072835 Z M46.8437788,29.2231075 C46.9978167,29.2231075 47.1491079,29.2858213 47.2580558,29.3947692 C47.3670038,29.5037172 47.4297176,29.6550084 47.4297176,29.8090462 C47.4297176,29.9637707 47.3670038,30.114833 47.2580558,30.223781 C47.1491079,30.3329578 46.9978167,30.394985 46.8437788,30.394985 C46.6897411,30.394985 46.5386787,30.3329578 46.4295019,30.223781 C46.3205539,30.114833 46.2578401,29.9637707 46.2578401,29.8090462 C46.2578401,29.6550084 46.3205539,29.5037172 46.4295019,29.3947692 C46.5384499,29.2858213 46.6897411,29.2231075 46.8437788,29.2231075 Z", id: "icon-signature-signature" })))))))));
export default SignatureIcon;
//# sourceMappingURL=signature.js.map