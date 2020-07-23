import * as React from 'react';
import { SvgIcon } from '@material-ui/core';

const defaultBulletStyle = {
    height: '8px',
    marginRight: '13px',
    width: '8px',
};

const defaultIconStyle = {
    height: '16px',
    marginRight: '13px',
    width: '16px',
};

const lineStyle = {
    backgroundColor: '#364357',
    height: '16px',
    // marginTop: '28px',
    width: '2px',
};

export const Line = (() => (
    <span style={ lineStyle }></span>
));

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
    <SvgIcon viewBox='0 0 16 16' style={ defaultIconStyle }>
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

export const DeniedTick = (() => (
    <SvgIcon viewBox='0 0 16 16' style={ defaultIconStyle }>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="5.-Style-Guide---UI-Elements" transform="translate(-647.000000, -657.000000)">
                <g id="Accordion" transform="translate(39.000000, 322.000000)">
                    <g id="Content" transform="translate(0.000000, 51.000000)">
                        <g id="Collapse-box-3" transform="translate(0.000000, 263.000000)">
                            <g id="Area-Header'" transform="translate(19.000000, 14.000000)">
                                <g id="Status" transform="translate(589.000000, 4.000000)">
                                    <g id="icon-denied" transform="translate(0.000000, 3.000000)">
                                        <rect id="Base" fill="#FE4B61" x="0" y="0" width="16" height="16" rx="4"></rect>
                                        <g id="Group-9" transform="translate(4.444444, 4.444444)">
                                            <path d="M7.11111111,0 L0,7.11111111" id="Fill-1" fillOpacity="0" fill="#000000"></path>
                                            <path d="M7.11111111,0 L0,7.11111111" id="Stroke-3" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="square"></path>
                                            <path d="M7.11111111,7.11111111 L0,0" id="Fill-4" fillOpacity="0" fill="#000000"></path>
                                            <path d="M7.11111111,7.11111111 L0,0" id="Stroke-5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="square"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </SvgIcon>
));

const InsideTick = ((color: any) => (
    <path d="M14.1607102,15.6128249 L18.7094828,11.0640523 C19.0983027,10.6752324 19.7273633,10.6738915 20.1206102,11.0671384 C20.5111345,11.4576627 20.5170209,12.0849413 20.1236963,12.4782659 L14.713208,17.8887542 C14.3243881,18.2775741 13.6953275,18.2789151 13.3020806,17.8856681 C13.2083814,17.7919689 13.1368248,17.6846405 13.087612,17.5701843 L11.1048627,15.5874349 C10.7144135,15.1969858 10.7192331,14.5591232 11.1022757,14.1760806 L11.2087372,14.0696191 C11.5977575,13.6805988 12.2268759,13.6789905 12.6200915,14.0722061 L14.1607102,15.6128249 Z" id="InsideTick" fill={color.color}></path>
));

const checkedStyle = {
    height: '44px',
    marginRight: '13px',
    width: '30px',
};

export const CheckedIcon = ((item: any ) => (
    <SvgIcon width="30px" height="44px" viewBox="0 0 30 44" style={ checkedStyle }>
        <title>item</title>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Group">
                <g id="list-count/checked">
                    <g>
                        <rect id="Base" stroke="#495B70" fill="#3B4B59" x="0.5" y="0.5" width="29" height="27" rx="13.5"></rect>
                        { item.item === 'verified' ? <InsideTick color="#1CBA7D" /> : <InsideTick color="#93B0C1" /> }
                    </g>
                </g>
                <polygon id="Line" fill="#364357" opacity="0.800000012" points="15 28 16 28 16 44 15 44"></polygon>
            </g>
        </g>
    </SvgIcon>
));

const emptyStyle = {
    color: 'white',
    fontSize: '14px',
    fontWeight: 600,
    textAnchor: 'middle' as 'middle'
};

export const StepIcon = ((step: any) => (
    <SvgIcon width="30px" height="44px" viewBox="0 0 30 44" style={ checkedStyle }>
        <title>item</title>
        <g id="empty1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="group">
                <g id="empty">
                    <rect id="base" stroke="#F5A623" fill="#F5A623" x="0.5" y="0.5" width="29" height="27" rx="13.5"></rect>
                    <text x="50%" y="19" fill="white" style={ emptyStyle }>
                        {step.step}
                    </text>
                </g>
                <polygon id="Line2" fill="#364357" opacity="0.800000012" points="15 28 16 28 16 44 15 44"></polygon>
            </g>
        </g>
    </SvgIcon>
));
