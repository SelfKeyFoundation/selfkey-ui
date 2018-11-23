import * as React from 'react';
import { SvgIcon } from '@material-ui/core';

const defaultBulletStyle = {
    height: '8px',
    width: '8px',
};

const greenTickStyle = {
    height: '16px',
    width: '16px',
};

const checkedStyle = {
    height: '28px',
    width: '30px',
};

const checkedStyle2 = {
    height: '44px',
    width: '30px',
};

export const DefaultBullet = (() => (
    <SvgIcon viewBox="0 0 8 8" style={ defaultBulletStyle }>
        <title>Oval</title>
        <g id="oval" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-1089.000000, -198.000000)" fillRule="nonzero" stroke="#FFFFFF">
                <g id="Lists" transform="translate(1066.000000, 104.000000)">
                    <g id="List" transform="translate(24.000000, 82.000000)">
                        <circle id="Oval" cx="3" cy="16" r="3"></circle>
                    </g>
                </g>
            </g>
        </g>
    </SvgIcon>
));

export const GreenTick = (() => (
    <SvgIcon viewBox='0 0 16 16' style={ greenTickStyle }>
        <title>icon-attr-check</title>
        <g id="-ID-Dashboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="403---Identity-Summary" transform="translate(-321.000000, -347.000000)">
                <g id="Area-box-1" transform="translate(150.000000, 264.000000)">
                    <g id="Content" transform="translate(15.000000, 81.000000)">
                        <g id="DL1">
                            <g id="DD" transform="translate(156.000000, 0.000000)">
                                <g id="icon-attr-check" transform="translate(0.000000, 2.000000)">
                                    <rect id="Base" stroke="#22C73C" fill="#1BB934" x="0.5" y="0.5" width="15" height="15" rx="4"></rect>
                                    <path d="M12.7232,4.70478222 C12.3756444,4.35722667 11.8129778,4.35722667 11.4663111,4.70478222 L6.69831111,9.47278222 L5.07253333,7.84789333 C4.72586667,7.50033778 4.1632,7.50033778 3.81564444,7.84789333 C3.46897778,8.19456 3.46897778,8.75722667 3.81564444,9.10478222 L6.06986667,11.3581156 C6.41653333,11.7056711 6.9792,11.7056711 7.32675556,11.3581156 L12.7232,5.96167111 C13.0707556,5.61500444 13.0707556,5.05233778 12.7232,4.70478222" id="Tick" fill="#FFFFFF"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </SvgIcon>
));

export const CheckedIcon = (() => (
    <SvgIcon viewBox="0 0 30 28" style={ checkedStyle }>
        <title>checked</title>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="checked">
                <rect id="Base" stroke="#495B70" fill="#3B4B59" x="0.5" y="0.5" width="29" height="27" rx="13.5"></rect>
                <path d="M14.1607102,15.6128249 L18.7094828,11.0640523 C19.0983027,10.6752324 19.7273633,10.6738915 20.1206102,11.0671384 C20.5111345,11.4576627 20.5170209,12.0849413 20.1236963,12.4782659 L14.713208,17.8887542 C14.3243881,18.2775741 13.6953275,18.2789151 13.3020806,17.8856681 C13.2083814,17.7919689 13.1368248,17.6846405 13.087612,17.5701843 L11.1048627,15.5874349 C10.7144135,15.1969858 10.7192331,14.5591232 11.1022757,14.1760806 L11.2087372,14.0696191 C11.5977575,13.6805988 12.2268759,13.6789905 12.6200915,14.0722061 L14.1607102,15.6128249 Z" id="Tick" fill="#1CBA7D"></path>
            </g>
        </g>
    </SvgIcon>
));

export const CheckedIcon2 = (() => (
    <SvgIcon width="30px" height="44px" viewBox="0 0 30 44" style={ checkedStyle2 }>
        <title>Group</title>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Group">
                <g id="list-count/checked">
                    <g>
                        <rect id="Base" stroke="#495B70" fill="#3B4B59" x="0.5" y="0.5" width="29" height="27" rx="13.5"></rect>
                        <path d="M14.1607102,15.6128249 L18.7094828,11.0640523 C19.0983027,10.6752324 19.7273633,10.6738915 20.1206102,11.0671384 C20.5111345,11.4576627 20.5170209,12.0849413 20.1236963,12.4782659 L14.713208,17.8887542 C14.3243881,18.2775741 13.6953275,18.2789151 13.3020806,17.8856681 C13.2083814,17.7919689 13.1368248,17.6846405 13.087612,17.5701843 L11.1048627,15.5874349 C10.7144135,15.1969858 10.7192331,14.5591232 11.1022757,14.1760806 L11.2087372,14.0696191 C11.5977575,13.6805988 12.2268759,13.6789905 12.6200915,14.0722061 L14.1607102,15.6128249 Z" id="Tick" fill="#1CBA7D"></path>
                    </g>
                </g>
                <polygon id="Line" fill="#364357" opacity="0.300000012" points="15 28 16 28 16 44 15 44"></polygon>
            </g>
        </g>
    </SvgIcon>
));
