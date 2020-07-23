import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = createStyles({});

export const ListingRecommendedIcon = withStyles(styles)((props: SvgIconProps & WithStyles<typeof styles>) => (
    <SvgIcon style={{ width: props.width || '16px', height: props.height || '21px' }} {...props} viewBox={props.viewBox || "0 0 16 21"}>
        <defs>
            <polygon id="xpath-1" points="0 0 9.82328482 0 9.82328482 10.9147609 4.91164241 9.08843028 0 10.9147609"></polygon>
            <circle id="xpath-3" cx="4.91164241" cy="-0.818607069" r="7.60101907"></circle>
            <filter x="-78.9%" y="-78.9%" width="257.9%" height="257.9%" filterUnits="objectBoundingBox" id="filter-4">
                <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="4" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.768144248 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
            </filter>
            <filter x="-65.8%" y="-65.8%" width="231.6%" height="231.6%" filterUnits="objectBoundingBox" id="filter-5">
                <feGaussianBlur stdDeviation="1" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                <feOffset dx="0" dy="2" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.293733016 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
            </filter>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-6">
                <stop stopColor="#FFFFFF" stopOpacity="0.522361866" offset="0%"></stop>
                <stop stopColor="#000000" stopOpacity="0.5" offset="100%"></stop>
            </linearGradient>
            <circle id="xpath-7" cx="7.64033264" cy="7.64033264" r="7.60101907"></circle>
            <linearGradient x1="56.828542%" y1="30.9502163%" x2="39.5290094%" y2="73.7581618%" id="linearGradient-9">
                <stop stopColor="#FFFFFF" offset="0%"></stop>
                <stop stopColor="#FFFFFF" stopOpacity="0" offset="100%"></stop>
            </linearGradient>
            <path d="M7.64033264,1.55951738 C10.9986742,1.55951738 13.7211479,4.28199111 13.7211479,7.64033264 C13.7211479,10.9986742 10.9986742,13.7211479 7.64033264,13.7211479 C4.28199111,13.7211479 1.55951738,10.9986742 1.55951738,7.64033264 C1.55951738,4.28199111 4.28199111,1.55951738 7.64033264,1.55951738 Z M7.64033264,2.47163967 C4.78574234,2.47163967 2.47163967,4.78574234 2.47163967,7.64033264 C2.47163967,10.4949229 4.78574234,12.8090256 7.64033264,12.8090256 C10.4949229,12.8090256 12.8090256,10.4949229 12.8090256,7.64033264 C12.8090256,4.78574234 10.4949229,2.47163967 7.64033264,2.47163967 Z" id="xpath-10"></path>
            <filter x="-8.2%" y="-8.2%" width="116.4%" height="132.9%" filterUnits="objectBoundingBox" id="filter-11">
                <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feComposite in="shadowOffsetOuter1" in2="SourceAlpha" operator="out" result="shadowOffsetOuter1"></feComposite>
                <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.138105752 0" type="matrix" in="shadowOffsetOuter1"></feColorMatrix>
            </filter>
            <filter x="-32.9%" y="-32.9%" width="165.8%" height="182.2%" filterUnits="objectBoundingBox" id="filter-12">
                <feGaussianBlur stdDeviation="3" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                <feOffset dx="0" dy="2" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                <feColorMatrix values="0 0 0 0 0.59468006   0 0 0 0 0.3610992   0 0 0 0 0.144786668  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
            </filter>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-13">
                <stop stopColor="#FFFFFF" stopOpacity="0.309386322" offset="0%"></stop>
                <stop stopColor="#000000" stopOpacity="0.5" offset="100%"></stop>
            </linearGradient>
            <path d="M5.42821178,10.7884894 C5.45102294,10.6531221 5.47164703,10.5297002 5.49264292,10.4063438 C5.58215977,9.88061282 5.67178598,9.35488187 5.76134658,8.82915092 C5.77595622,8.74330928 5.79327783,8.65779463 5.80346958,8.57142984 C5.80629091,8.54745173 5.79533368,8.5134682 5.77825264,8.49672712 C5.40266678,8.12901192 5.02535313,7.76306237 4.64836754,7.39678585 C4.51139122,7.26372914 4.37423994,7.13086861 4.23748233,6.99755032 C4.17027361,6.93204649 4.13563039,6.85514215 4.16692739,6.76140954 C4.19925231,6.66464697 4.27332844,6.61950273 4.37133113,6.60548643 C5.05247282,6.50813531 5.7332427,6.40821199 6.41495303,6.31511153 C6.50615393,6.30264291 6.55378835,6.27009808 6.59464286,6.18680684 C6.90632248,5.55145234 7.22454145,4.91925858 7.539786,4.28562614 C7.57694435,4.21092343 7.62457878,4.15442228 7.7155391,4.15274381 C7.7916492,4.15132692 7.85035021,4.1820189 7.88494969,4.25044371 C7.96274384,4.40429598 8.03926949,4.5587586 8.11588262,4.71319943 C8.37229493,5.23014567 8.62833545,5.7472881 8.8858413,6.26371118 C8.8937585,6.27958033 8.9149731,6.29651759 8.93205413,6.29904619 C9.43440268,6.37331294 9.93703556,6.44568323 10.4395809,6.51870748 C10.6521206,6.54957384 10.8645072,6.58153012 11.0770468,6.61244009 C11.1727968,6.62639099 11.2391526,6.67807471 11.2678907,6.76919153 C11.2956446,6.85730018 11.2659005,6.93359417 11.2010975,6.99665659 C10.8857218,7.30370718 10.5701054,7.6104962 10.2544453,7.91724161 C10.0548969,8.11118092 9.85576396,8.3055562 9.65464083,8.49786064 C9.62708372,8.52419296 9.62828661,8.54998033 9.63351371,8.58065051 C9.6929802,8.92937941 9.75233733,9.27813012 9.81184756,9.62683722 C9.8750102,9.99701564 9.93854464,10.3671287 10.0014667,10.7373507 C10.0150922,10.8175683 9.99092501,10.8842493 9.92494105,10.9341892 C9.85484539,10.9872462 9.7813379,10.98899 9.70489974,10.9489466 C9.42302991,10.8013286 9.14111633,10.6538415 8.8592465,10.5062017 C8.49363369,10.3147038 8.12782403,10.1235983 7.76291108,9.93077066 C7.72986442,9.91331024 7.70532547,9.91481432 7.67328487,9.93168619 C7.0330633,10.2689274 6.39225122,10.6051223 5.75159224,10.9415352 C5.63178444,11.004445 5.52157788,10.9826249 5.46101786,10.8799768 C5.4432807,10.8499388 5.43680697,10.8132959 5.42821178,10.7884894" id="xpath-14"></path>
            <filter x="-112.3%" y="-58.6%" width="324.6%" height="334.5%" filterUnits="objectBoundingBox" id="filter-15">
                <feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feColorMatrix values="0 0 0 0 0.988235294   0 0 0 0 0.708653692   0 0 0 0 0.231372549  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
            </filter>
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Group">
                <g id="Oval-17" transform="translate(2.728690, 9.277547)">
                    <mask id="mask-2" fill="white">
                        <use xlinkHref="#xpath-1"></use>
                    </mask>
                    <use id="Mask" fill="#F24C36" xlinkHref="#xpath-1"></use>
                    <g mask="url(#mask-2)" fill="black" fillOpacity="1">
                        <use filter="url(#filter-4)" xlinkHref="#xpath-3"></use>
                        <use filter="url(#filter-5)" xlinkHref="#xpath-3"></use>
                    </g>
                </g>
                <g id="Rectangle-37" transform="translate(-0.000000, -0.000000)">
                    <mask id="mask-8" fill="white">
                        <use xlinkHref="#xpath-7"></use>
                    </mask>
                    <g id="Mask">
                        <use fill="#FFC240" xlinkHref="#xpath-7"></use>
                        <use fillOpacity="0.3" fill="url(#linearGradient-6)" style={{ mixBlendMode: 'overlay' }} xlinkHref="#xpath-7"></use>
                    </g>
                    <polygon id="Path-8" fill="url(#linearGradient-9)" style={{ mixBlendMode: 'overlay' }} opacity="0.300000012" mask="url(#mask-8)" points="17.6476378 -2.13360079 -4.1477943 20.5362347 -2.14904524 -8.08254031"></polygon>
                </g>
                <g id="Combined-Shape">
                    <use fill="black" fillOpacity="1" filter="url(#filter-11)" xlinkHref="#xpath-10"></use>
                    <use fillOpacity="0.2" fill="#000000" fillRule="evenodd" style={{ mixBlendMode: 'overlay' }} xlinkHref="#xpath-10"></use>
                    <use fill="black" fillOpacity="1" filter="url(#filter-12)" xlinkHref="#xpath-10"></use>
                </g>
                <g id="Fill-1">
                    <use fill="black" fillOpacity="1" filter="url(#filter-15)" xlinkHref="#xpath-14"></use>
                    <use fill="#FFEEB4" fillRule="evenodd" xlinkHref="#xpath-14"></use>
                    <use fillOpacity="0.5" fill="url(#linearGradient-13)" fillRule="evenodd" style={{ mixBlendMode: 'overlay' }} xlinkHref="#xpath-14"></use>
                </g>
            </g>
        </g>
    </SvgIcon>
));

export default ListingRecommendedIcon;
