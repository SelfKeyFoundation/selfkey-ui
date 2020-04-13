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

export const ObserverIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps) => (
        <SvgIcon style={{ width: props.width || '30px', height: props.height || '30px' }} {...props} viewBox={props.viewBox || "0 0 30 30"}>
            <g id="🏦-Corporate-Wallet-observer" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="802.1---observer" transform="translate(-128.000000, -358.000000)" fill="#23E6FE" fillRule="nonzero">
                    <g id="LLC-observer" transform="translate(102.000000, 82.000000)">
                        <g id="Radio-button-replace-observer" transform="translate(0.000000, 251.000000)">
                            <g id="Btn-shareholder-observer">
                                <g id="User-Groups-595b40b75ba036ed117d8fbb" transform="translate(26.000000, 25.000000)">
                                    <path d="M5.79476861,-7.10542736e-15 C7.92482897,-7.10542736e-15 9.65794769,1.73311871 9.65794769,3.86317907 C9.65794769,5.18004024 8.99444668,6.34430584 7.98519115,7.04160966 C9.27839034,7.4767002 10.3639437,8.39855131 11.0018511,9.64539235 L11.0018511,9.64539235 L13.9330382,8.28700201 L13.3868813,6.757666 L12.7204829,7.09086519 C12.5205634,7.19082495 12.296499,7.24346076 12.0729175,7.24346076 C11.52,7.24346076 11.0235815,6.93682093 10.7773038,6.4428169 C10.6044266,6.09609658 10.5764185,5.70350101 10.6985915,5.33649899 C10.8212475,4.96997988 11.0791147,4.67203219 11.4248692,4.49915493 L11.4248692,4.49915493 L15.2880483,2.56756539 C15.4884507,2.46712274 15.7125151,2.41448692 15.9356137,2.41448692 C16.4880483,2.41448692 16.9844668,2.72112676 17.2307445,3.21561368 C17.4036217,3.56136821 17.4316298,3.95396378 17.3089738,4.32144869 C17.1868008,4.6889336 16.9289336,4.98639839 16.5831791,5.15927565 L16.5831791,5.15927565 L16.0418511,5.43018109 L16.6179477,7.04305835 L23.7078471,3.75742455 C23.62334,3.33488934 23.6721127,2.90462777 23.8657545,2.51734406 C24.0970624,2.05521127 24.4935211,1.71138833 24.9822133,1.54816901 C25.1797183,1.48201207 25.3859155,1.44869215 25.5940443,1.44869215 C26.4270423,1.44869215 27.1629779,1.97939638 27.4261569,2.7698994 L27.4261569,2.7698994 L29.8372636,9.51983903 C30.0038632,10.0191549 29.9666801,10.5426157 29.7358551,11.0042656 C29.5050302,11.4659155 29.1085714,11.8097384 28.6193964,11.9729577 C28.4228571,12.0386318 28.2171429,12.0724346 28.0080483,12.0724346 C27.3696579,12.0724346 26.7896982,11.7590342 26.4342857,11.2568209 L26.4342857,11.2568209 L19.9166197,12.7383501 C20.442495,13.3342455 20.7645875,14.1141247 20.7645875,14.9698189 C20.7645875,15.4251911 20.672837,15.8597988 20.5086519,16.2567404 L20.5086519,16.2567404 L25.0140845,27.9703823 C25.1396378,28.2968209 25.1372233,28.6483702 25.0208451,28.9738431 L25.0208451,28.9738431 L29.9396378,28.9738431 L29.9396378,29.9396378 L6.76056338,29.9396378 C6.18108652,29.9396378 5.66631791,29.6774245 5.31187123,29.2722736 C4.95742455,29.6779074 4.44265594,29.9396378 3.86317907,29.9396378 C2.79790744,29.9396378 1.93158954,29.0733199 1.93158954,28.0080483 L1.93158954,28.0080483 L1.93158954,16.4185111 C0.866317907,16.4185111 -1.45661261e-13,15.5521932 -1.45661261e-13,14.4869215 L-1.45661261e-13,14.4869215 L-1.45661261e-13,12.0724346 C-1.45661261e-13,9.73955734 1.5138833,7.75726358 3.60917505,7.04547284 C2.59702213,6.34816901 1.93158954,5.18245473 1.93158954,3.86317907 C1.93158954,1.73311871 3.66470825,-7.10542736e-15 5.79476861,-7.10542736e-15 Z M7.72635815,15.5087324 L6.78374245,15.7231388 C6.42881288,16.1447082 5.90438632,16.4185111 5.31187123,16.4185111 L5.31187123,16.4185111 L2.89738431,16.4185111 L2.89738431,28.0080483 C2.89738431,28.5406841 3.33054326,28.9738431 3.86317907,28.9738431 C4.39581489,28.9738431 4.82897384,28.5406841 4.82897384,28.0080483 L4.82897384,28.0080483 L4.82897384,18.3501006 L5.79476861,18.3501006 L5.79476861,28.0099799 C5.79476861,28.541167 6.22792757,28.9738431 6.76056338,28.9738431 C7.2931992,28.9738431 7.72635815,28.5406841 7.72635815,28.0080483 L7.72635815,28.0080483 L7.72635815,15.5087324 Z M14.1339235,14.0527968 L11.5895372,14.6308249 L11.5895372,15.4527163 C11.5895372,16.5179879 10.7232193,17.3843058 9.65794769,17.3843058 C9.3044668,17.3843058 8.97754527,17.2819316 8.69215292,17.1158149 L8.69215292,17.1158149 L8.69215292,28.0080483 C8.69215292,28.3615292 8.58977867,28.6884507 8.42366197,28.9738431 L8.42366197,28.9738431 L9.7477666,28.9738431 C9.63187123,28.6483702 9.62897384,28.2968209 9.75452716,27.9703823 L9.75452716,27.9703823 L14.2599598,16.2567404 C14.0957746,15.8597988 14.0040241,15.4251911 14.0040241,14.9698189 C14.0040241,14.6515895 14.0513481,14.3449497 14.1339235,14.0527968 L14.1339235,14.0527968 Z M21.1808451,26.0764588 L13.5877666,26.0764588 L12.4737223,28.9738431 L22.2948893,28.9738431 L21.1808451,26.0764588 Z M19.8610865,17.2626157 C19.6307445,17.5113078 19.364668,17.7252314 19.0696177,17.8956942 L19.0696177,17.8956942 L23.2109457,28.6652716 C23.3026962,28.9023742 23.5914688,29.0337223 23.8362978,28.9414889 C23.9550905,28.8960966 24.0507042,28.8053119 24.1028571,28.6874849 C24.155493,28.5691751 24.1588732,28.437827 24.1125151,28.3175855 L24.1125151,28.3175855 Z M14.9070423,17.2621328 L10.6551308,28.3171026 C10.6092555,28.4373441 10.6126358,28.5691751 10.6647887,28.687002 C10.7169416,28.804829 10.8125553,28.8951308 10.9332797,28.9419718 C11.1703823,29.0298592 11.4654326,28.9023742 11.5571831,28.6643058 L11.5571831,28.6643058 L15.698994,17.8956942 C15.4039437,17.7252314 15.1378672,17.5113078 14.9070423,17.2621328 L14.9070423,17.2621328 Z M20.437666,24.1448692 L14.3304628,24.1448692 L13.9591147,25.110664 L20.8090141,25.110664 L20.437666,24.1448692 Z M18.1723944,18.2535211 C17.9188732,18.3143662 17.6561771,18.3501006 17.3843058,18.3501006 C17.1124346,18.3501006 16.8497384,18.3143662 16.5967002,18.2535211 L16.5967002,18.2535211 L14.7022938,23.1790744 L20.0663179,23.1790744 Z M17.3843058,12.555332 C16.0529577,12.555332 14.9698189,13.6384708 14.9698189,14.9698189 C14.9698189,16.301167 16.0529577,17.3843058 17.3843058,17.3843058 C18.7156539,17.3843058 19.7987928,16.301167 19.7987928,14.9698189 C19.7987928,13.6384708 18.7156539,12.555332 17.3843058,12.555332 Z M17.3843058,13.5211268 C18.1830181,13.5211268 18.832998,14.1711066 18.832998,14.9698189 C18.832998,15.7685312 18.1830181,16.4185111 17.3843058,16.4185111 C16.5855936,16.4185111 15.9356137,15.7685312 15.9356137,14.9698189 C15.9356137,14.1711066 16.5855936,13.5211268 17.3843058,13.5211268 Z M10.6237425,14.8505433 L8.69215292,15.289497 L8.69215292,15.4527163 C8.69215292,15.9853521 9.12531187,16.4185111 9.65794769,16.4185111 C10.1905835,16.4185111 10.6237425,15.9853521 10.6237425,15.4527163 L10.6237425,15.4527163 L10.6237425,14.8505433 Z M17.3843058,14.4869215 C17.1182294,14.4869215 16.9014085,14.7037425 16.9014085,14.9698189 C16.9014085,15.2358954 17.1182294,15.4527163 17.3843058,15.4527163 C17.6503823,15.4527163 17.8672032,15.2358954 17.8672032,14.9698189 C17.8672032,14.7037425 17.6503823,14.4869215 17.3843058,14.4869215 Z M6.277666,7.72635815 L5.31187123,7.72635815 C2.91573441,7.72635815 0.965794769,9.67629779 0.965794769,12.0724346 L0.965794769,12.0724346 L0.965794769,14.4869215 C0.965794769,15.0195573 1.39895372,15.4527163 1.93158954,15.4527163 L1.93158954,15.4527163 L5.31187123,15.4527163 C5.84450704,15.4527163 6.277666,15.0195573 6.277666,14.4869215 C6.277666,13.9542857 5.84450704,13.5211268 5.31187123,13.5211268 L5.31187123,13.5211268 L1.93158954,13.5211268 L1.93158954,12.555332 L4.72273642,12.555332 L7.72635815,11.1631388 L7.72635815,9.65794769 L8.69215292,9.65794769 L8.69215292,10.7159759 L10.1171831,10.0553722 C9.37158954,8.63034205 7.91468813,7.72635815 6.277666,7.72635815 L6.277666,7.72635815 Z M11.576499,10.4431388 L6.35203219,12.8643863 C6.8865996,13.2086922 7.24346076,13.8055533 7.24346076,14.4869215 C7.24346076,14.53666 7.23235412,14.5830181 7.22897384,14.6317907 L7.22897384,14.6317907 L12.7499396,13.3767404 L11.576499,10.4431388 Z M8.36736918,12.6537291 L8.79907944,13.5171496 L7.93565891,13.9488599 L7.50394865,13.0854394 L8.36736918,12.6537291 Z M21.1093763,6.02607646 L12.4544064,10.0370221 L13.703662,13.1604024 L14.6907042,12.9358551 C15.3088129,12.1197586 16.2842656,11.5895372 17.3843058,11.5895372 C17.9444668,11.5895372 18.4717907,11.7286117 18.9373038,11.9705433 L18.9373038,11.9705433 L23.1080885,11.0226157 L21.1093763,6.02607646 Z M10.1084658,11.7966017 L10.5401761,12.660988 L9.67578978,13.0926983 L9.24407952,12.228312 L10.1084658,11.7966017 Z M14.7675008,10.0192182 L15.1741004,10.895194 L14.212279,11.3416404 L13.8056794,10.4656645 L14.7675008,10.0192182 Z M25.5940443,2.41448692 C25.4902213,2.41448692 25.3873642,2.43090543 25.2883702,2.46422535 C25.0435412,2.54583501 24.8455533,2.71774648 24.7301408,2.94905433 C24.6147284,3.17987928 24.5958954,3.44160966 24.677505,3.68547284 L24.677505,3.68547284 L27.0886117,10.4363783 C27.2571429,10.9424547 27.8221328,11.2201207 28.3127565,11.0573843 C28.5585513,10.9752918 28.7565392,10.8033803 28.8719517,10.5725553 C28.9868813,10.3422133 29.0057143,10.08 28.9241046,9.83565392 L28.9241046,9.83565392 L26.512998,3.08523139 C26.3782696,2.68008048 26.0103018,2.41448692 25.5940443,2.41448692 Z M24.0077264,4.68265594 L21.9872837,5.61899396 L24.0618109,10.8057948 L26.0344467,10.357666 L24.0077264,4.68265594 Z M20.5595696,7.32947155 L20.9661692,8.2054474 L16.1404182,10.4454046 L15.7338186,9.56942873 L20.5595696,7.32947155 Z M15.1721529,5.86527163 L14.2570624,6.32257545 L14.8133602,7.87991952 L15.7385915,7.45110664 L15.1721529,5.86527163 Z M5.79476861,0.965794769 C4.19686117,0.965794769 2.89738431,2.26527163 2.89738431,3.86317907 C2.89738431,5.46108652 4.19686117,6.76056338 5.79476861,6.76056338 C7.39267606,6.76056338 8.69215292,5.46108652 8.69215292,3.86317907 C8.69215292,2.26527163 7.39267606,0.965794769 5.79476861,0.965794769 Z M15.9356137,3.38028169 C15.8612475,3.38028169 15.7863984,3.397666 15.7192757,3.43098592 L15.7192757,3.43098592 L11.8560966,5.36257545 C11.7392354,5.42100604 11.6552113,5.51806841 11.614165,5.64217304 C11.5726358,5.76627767 11.5818109,5.89376258 11.6402414,6.01110664 C11.7556539,6.24193159 12.0569819,6.34237425 12.2882897,6.22696177 L12.2882897,6.22696177 L16.1519517,4.29585513 C16.2668813,4.23790744 16.352837,4.13891348 16.3934004,4.01625755 C16.4344467,3.89360161 16.4252716,3.76273642 16.3678068,3.64780684 C16.2857143,3.48265594 16.1200805,3.38028169 15.9356137,3.38028169 Z" id="icon-observer-CORP"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </SvgIcon>
    )
);

export default ObserverIcon;
