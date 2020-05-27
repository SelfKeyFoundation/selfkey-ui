import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import LinearGradient from './_linearGradient';

const styles: StyleSheet = {
	root: {
		transition: 'all 0.2s ease-out',
		'&:hover': {
			fill: 'white',
		},
	}
};

const linearGradientColor = 'url(#dlg)';

export const IDIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps) => (
	<SvgIcon style={{ width: props.width || '74px', height: props.height || '74px', fill: props.fill || linearGradientColor }} {...props} viewBox={props.viewBox || "0 0 74 74"}>
		<LinearGradient />
		<g id="Modal---Dark" stroke="none" strokeWidth="1" fill="inherit" fillRule="evenodd">
			<g id="SelectWalletModal" transform="translate(-683.000000, -277.000000)" fill={linearGradientColor} fillRule="nonzero">
				<g id="Modal-content" transform="translate(420.000000, 100.000000)">
					<g id="Text" transform="translate(147.000000, 177.000000)">
						<g id="icon-id" transform="translate(116.000000, 0.000000)">
							<path
								d="M4.48528677,0 C2.0234375,0 0,2.0234375 0,4.48528677 L0,69.5147132 C0,71.9765625 2.0234375,74 4.48528677,74 L69.5147132,74 C71.9765625,74 74,71.9765625 74,69.5147132 L74,4.48528677 C74,2.0234375 71.9765625,0 69.5147132,0 L4.48528677,0 Z M4.48528677,2.46666667 L69.5147132,2.46666667 C70.6324216,2.46666667 71.5333333,3.36757843 71.5333333,4.48528677 L71.5333333,69.5147132 C71.5333333,70.6324216 70.6324216,71.5333333 69.5147132,71.5333333 L61.6666667,71.5333333 L61.6666667,69.3123701 C61.6666667,67.1444007 60.3225257,65.337761 58.6026042,63.8539069 C56.8826826,62.3700527 54.6954424,61.1367194 52.5274743,60.1105466 C48.5962243,58.2605466 45.0985674,57.2391924 44.4,57.0416667 L44.4,53.6403652 C47.2954424,51.4434902 49.1888027,47.994011 49.2803382,44.0964841 C50.3450527,43.7592451 51.221875,42.9546875 51.221875,41.7791667 C51.221875,41.9911458 51.221875,41.8128909 51.2700527,41.6442708 C51.3182292,41.4708333 51.3856777,41.2395833 51.4579424,40.9842451 C51.578386,40.5795576 51.7180993,40.1748701 51.7759118,39.6786458 L51.7807292,39.6786458 C51.7807292,39.6786458 53.0333333,32.7555993 53.0333333,29.2916667 C53.0333333,25.8132819 51.347136,23.2984375 49.2996091,21.8097659 C47.4688799,20.4704424 45.450261,19.9453125 43.7785159,19.8296875 C43.5424485,19.4153652 43.3882819,18.9480466 42.434375,18.1675784 C41.1143235,17.0739583 38.9415368,16.0333333 35.7666667,16.0333333 C31.2042966,16.0333333 27.0128909,18.3458333 23.9295576,20.5860674 C20.8414069,22.8263027 18.8131507,25.0761716 18.8131507,25.0761716 L17.2618493,26.8057292 L19.5647132,27.1188799 C19.5647132,27.1188799 20.1861985,27.2104167 20.8510417,27.7018235 C21.5207034,28.1932292 22.2,28.9640625 22.2,30.8333333 L22.2,39.4666667 L22.2144534,39.4666667 C22.2433591,40.0592451 22.4023444,40.5265625 22.5420576,40.9842451 C22.6143235,41.2395833 22.6817708,41.4708333 22.7299485,41.6442708 C22.778125,41.8128909 22.778125,41.9911458 22.778125,41.7791667 C22.778125,42.9546875 23.6549485,43.7592451 24.7196618,44.0964841 C24.8111985,47.994011 26.7045576,51.4434902 29.6,53.6403652 L29.6,57.0416667 C28.9014326,57.2391924 25.4037757,58.2605466 21.4725257,60.1105466 C19.3045576,61.1367194 17.1173174,62.3700527 15.3973958,63.8539069 C13.6774743,65.337761 12.3333333,67.1444007 12.3333333,69.3123701 L12.3333333,71.5333333 L4.48528677,71.5333333 C3.36757843,71.5333333 2.46666667,70.6324216 2.46666667,69.5147132 L2.46666667,4.48528677 C2.46666667,3.36757843 3.36757843,2.46666667 4.48528677,2.46666667 Z M9.86666667,8.63333333 C9.1873701,8.63333333 8.63333333,9.1873701 8.63333333,9.86666667 C8.63333333,10.5459632 9.1873701,11.1 9.86666667,11.1 C10.5459632,11.1 11.1,10.5459632 11.1,9.86666667 C11.1,9.1873701 10.5459632,8.63333333 9.86666667,8.63333333 Z M14.8,8.63333333 C14.1207034,8.63333333 13.5666667,9.1873701 13.5666667,9.86666667 C13.5666667,10.5459632 14.1207034,11.1 14.8,11.1 C15.4792966,11.1 16.0333333,10.5459632 16.0333333,9.86666667 C16.0333333,9.1873701 15.4792966,8.63333333 14.8,8.63333333 Z M19.7333333,8.63333333 C19.0540368,8.63333333 18.5,9.1873701 18.5,9.86666667 C18.5,10.5459632 19.0540368,11.1 19.7333333,11.1 C20.4126299,11.1 20.9666667,10.5459632 20.9666667,9.86666667 C20.9666667,9.1873701 20.4126299,8.63333333 19.7333333,8.63333333 Z M24.6666667,8.63333333 C23.9873701,8.63333333 23.4333333,9.1873701 23.4333333,9.86666667 C23.4333333,10.5459632 23.9873701,11.1 24.6666667,11.1 C25.3459632,11.1 25.9,10.5459632 25.9,9.86666667 C25.9,9.1873701 25.3459632,8.63333333 24.6666667,8.63333333 Z M29.6,8.63333333 C28.9207034,8.63333333 28.3666667,9.1873701 28.3666667,9.86666667 C28.3666667,10.5459632 28.9207034,11.1 29.6,11.1 C30.2792966,11.1 30.8333333,10.5459632 30.8333333,9.86666667 C30.8333333,9.1873701 30.2792966,8.63333333 29.6,8.63333333 Z M34.5333333,8.63333333 C33.8540368,8.63333333 33.3,9.1873701 33.3,9.86666667 C33.3,10.5459632 33.8540368,11.1 34.5333333,11.1 C35.2126299,11.1 35.7666667,10.5459632 35.7666667,9.86666667 C35.7666667,9.1873701 35.2126299,8.63333333 34.5333333,8.63333333 Z M39.4666667,8.63333333 C38.7873701,8.63333333 38.2333333,9.1873701 38.2333333,9.86666667 C38.2333333,10.5459632 38.7873701,11.1 39.4666667,11.1 C40.1459632,11.1 40.7,10.5459632 40.7,9.86666667 C40.7,9.1873701 40.1459632,8.63333333 39.4666667,8.63333333 Z M44.4,8.63333333 C43.7207034,8.63333333 43.1666667,9.1873701 43.1666667,9.86666667 C43.1666667,10.5459632 43.7207034,11.1 44.4,11.1 C45.0792966,11.1 45.6333333,10.5459632 45.6333333,9.86666667 C45.6333333,9.1873701 45.0792966,8.63333333 44.4,8.63333333 Z M49.3333333,8.63333333 C48.6540368,8.63333333 48.1,9.1873701 48.1,9.86666667 C48.1,10.5459632 48.6540368,11.1 49.3333333,11.1 C50.0126299,11.1 50.5666667,10.5459632 50.5666667,9.86666667 C50.5666667,9.1873701 50.0126299,8.63333333 49.3333333,8.63333333 Z M54.2666667,8.63333333 C53.5873701,8.63333333 53.0333333,9.1873701 53.0333333,9.86666667 C53.0333333,10.5459632 53.5873701,11.1 54.2666667,11.1 C54.9459632,11.1 55.5,10.5459632 55.5,9.86666667 C55.5,9.1873701 54.9459632,8.63333333 54.2666667,8.63333333 Z M59.2,8.63333333 C58.5207034,8.63333333 57.9666667,9.1873701 57.9666667,9.86666667 C57.9666667,10.5459632 58.5207034,11.1 59.2,11.1 C59.8792966,11.1 60.4333333,10.5459632 60.4333333,9.86666667 C60.4333333,9.1873701 59.8792966,8.63333333 59.2,8.63333333 Z M64.1333333,8.63333333 C63.4540368,8.63333333 62.9,9.1873701 62.9,9.86666667 C62.9,10.5459632 63.4540368,11.1 64.1333333,11.1 C64.8126299,11.1 65.3666667,10.5459632 65.3666667,9.86666667 C65.3666667,9.1873701 64.8126299,8.63333333 64.1333333,8.63333333 Z M9.86666667,13.5666667 C9.1873701,13.5666667 8.63333333,14.1207034 8.63333333,14.8 C8.63333333,15.4792966 9.1873701,16.0333333 9.86666667,16.0333333 C10.5459632,16.0333333 11.1,15.4792966 11.1,14.8 C11.1,14.1207034 10.5459632,13.5666667 9.86666667,13.5666667 Z M64.1333333,13.5666667 C63.4540368,13.5666667 62.9,14.1207034 62.9,14.8 C62.9,15.4792966 63.4540368,16.0333333 64.1333333,16.0333333 C64.8126299,16.0333333 65.3666667,15.4792966 65.3666667,14.8 C65.3666667,14.1207034 64.8126299,13.5666667 64.1333333,13.5666667 Z M9.86666667,18.5 C9.1873701,18.5 8.63333333,19.0540368 8.63333333,19.7333333 C8.63333333,20.4126299 9.1873701,20.9666667 9.86666667,20.9666667 C10.5459632,20.9666667 11.1,20.4126299 11.1,19.7333333 C11.1,19.0540368 10.5459632,18.5 9.86666667,18.5 Z M35.7666667,18.5 C38.4212243,18.5 39.9484375,19.309375 40.8686201,20.0657549 C41.7888027,20.8269534 42.0296875,21.4484375 42.0296875,21.4484375 L42.3524743,22.2 L43.1666667,22.2 C44.3229167,22.2 46.3078125,22.6769534 47.8494792,23.7994792 C49.3911458,24.9268235 50.5666667,26.5696618 50.5666667,29.2916667 C50.5666667,31.1946618 50.1089841,34.3791667 49.7476569,36.6964841 C49.612761,36.653125 49.4730466,36.6145833 49.3333333,36.5856777 L49.3333333,34.225 C49.3333333,30.9778652 47.994011,28.7569007 46.6450527,27.4464841 C45.2960944,26.140886 43.8652341,25.6542966 43.8652341,25.6542966 L43.1618493,25.4182292 L42.6222659,25.9337243 C42.6222659,25.9337243 42.0923174,26.4636716 40.7192708,27.0899743 C39.3510417,27.7162757 37.2216152,28.3666667 34.225,28.3666667 C32.4809902,28.3666667 30.2455735,28.9688799 28.2847659,30.3419277 C26.4492194,31.6234375 25.0039069,33.7673174 24.8063799,36.5230466 C24.7582034,36.5326826 24.7148444,36.547136 24.6666667,36.5567708 L24.6666667,30.8333333 C24.6666667,28.2751299 23.4959632,26.5841152 22.315625,25.7121091 C22.1421875,25.5916667 22.1373701,25.6639326 21.96875,25.5675784 C22.6673174,24.8497402 23.3080735,24.0789069 25.3748701,22.5805993 C28.2414069,20.5041667 32.0618493,18.5 35.7666667,18.5 Z M64.1333333,18.5 C63.4540368,18.5 62.9,19.0540368 62.9,19.7333333 C62.9,20.4126299 63.4540368,20.9666667 64.1333333,20.9666667 C64.8126299,20.9666667 65.3666667,20.4126299 65.3666667,19.7333333 C65.3666667,19.0540368 64.8126299,18.5 64.1333333,18.5 Z M9.86666667,23.4333333 C9.1873701,23.4333333 8.63333333,23.9873701 8.63333333,24.6666667 C8.63333333,25.3459632 9.1873701,25.9 9.86666667,25.9 C10.5459632,25.9 11.1,25.3459632 11.1,24.6666667 C11.1,23.9873701 10.5459632,23.4333333 9.86666667,23.4333333 Z M64.1333333,23.4333333 C63.4540368,23.4333333 62.9,23.9873701 62.9,24.6666667 C62.9,25.3459632 63.4540368,25.9 64.1333333,25.9 C64.8126299,25.9 65.3666667,25.3459632 65.3666667,24.6666667 C65.3666667,23.9873701 64.8126299,23.4333333 64.1333333,23.4333333 Z M43.475,28.2510417 C43.7399743,28.3618493 44.16875,28.4822917 44.9299485,29.2194007 C45.8934902,30.1540368 46.8666667,31.6282549 46.8666667,34.225 L46.8666667,40.0688799 L48.7022132,39.0378909 C48.79375,38.9848958 48.8467451,38.9608076 48.9141924,38.9222659 C49.140625,38.975261 49.3333333,39.0957034 49.3333333,39.2787757 C49.3333333,39.2643235 49.2369792,39.8135417 49.0972659,40.2904951 C49.025,40.5265625 48.9479167,40.7674485 48.8901042,40.9938799 C48.8274743,41.2251299 48.7552083,41.3744792 48.7552083,41.7791667 C48.7552083,41.8514326 48.7022132,41.9333333 48.5432292,41.9333333 L46.8666667,41.9333333 L46.8666667,43.8170576 C46.8666667,48.6829424 43.359375,52.6960944 38.7391924,53.5151042 L38.3923174,53.5777341 L38.1321618,53.8234375 C37.819011,54.1028652 37.4384118,54.2666667 37,54.2666667 C36.5615882,54.2666667 36.1809902,54.1028652 35.8678382,53.8234375 L35.6076826,53.5777341 L35.2608076,53.5151042 C30.640625,52.6960944 27.1333333,48.6829424 27.1333333,43.8170576 L27.1333333,41.9333333 L25.4567708,41.9333333 C25.2977868,41.9333333 25.2447917,41.8514326 25.2447917,41.7791667 C25.2447917,41.3744792 25.1725257,41.2251299 25.1098958,40.9938799 C25.0520833,40.7674485 24.975,40.5265625 24.9027341,40.2904951 C24.7630208,39.8135417 24.6666667,39.2643235 24.6666667,39.2787757 C24.6666667,39.0957034 24.859375,38.975261 25.0858076,38.9222659 C25.1532549,38.9608076 25.20625,38.9848958 25.2977868,39.0378909 L27.1333333,40.0640625 L27.1333333,37.0481777 C27.1333333,34.8464841 28.2125,33.4011716 29.6963542,32.3605466 C31.1850257,31.3247402 33.1121091,30.8333333 34.225,30.8333333 C37.5829424,30.8333333 40.0785159,30.0962243 41.7454424,29.3350257 C42.8583333,28.8243493 43.0799485,28.5641924 43.475,28.2510417 Z M9.86666667,28.3666667 C9.1873701,28.3666667 8.63333333,28.9207034 8.63333333,29.6 C8.63333333,30.2792966 9.1873701,30.8333333 9.86666667,30.8333333 C10.5459632,30.8333333 11.1,30.2792966 11.1,29.6 C11.1,28.9207034 10.5459632,28.3666667 9.86666667,28.3666667 Z M64.1333333,28.3666667 C63.4540368,28.3666667 62.9,28.9207034 62.9,29.6 C62.9,30.2792966 63.4540368,30.8333333 64.1333333,30.8333333 C64.8126299,30.8333333 65.3666667,30.2792966 65.3666667,29.6 C65.3666667,28.9207034 64.8126299,28.3666667 64.1333333,28.3666667 Z M9.86666667,33.3 C9.1873701,33.3 8.63333333,33.8540368 8.63333333,34.5333333 C8.63333333,35.2126299 9.1873701,35.7666667 9.86666667,35.7666667 C10.5459632,35.7666667 11.1,35.2126299 11.1,34.5333333 C11.1,33.8540368 10.5459632,33.3 9.86666667,33.3 Z M64.1333333,33.3 C63.4540368,33.3 62.9,33.8540368 62.9,34.5333333 C62.9,35.2126299 63.4540368,35.7666667 64.1333333,35.7666667 C64.8126299,35.7666667 65.3666667,35.2126299 65.3666667,34.5333333 C65.3666667,33.8540368 64.8126299,33.3 64.1333333,33.3 Z M9.86666667,38.2333333 C9.1873701,38.2333333 8.63333333,38.7873701 8.63333333,39.4666667 C8.63333333,40.1459632 9.1873701,40.7 9.86666667,40.7 C10.5459632,40.7 11.1,40.1459632 11.1,39.4666667 C11.1,38.7873701 10.5459632,38.2333333 9.86666667,38.2333333 Z M64.1333333,38.2333333 C63.4540368,38.2333333 62.9,38.7873701 62.9,39.4666667 C62.9,40.1459632 63.4540368,40.7 64.1333333,40.7 C64.8126299,40.7 65.3666667,40.1459632 65.3666667,39.4666667 C65.3666667,38.7873701 64.8126299,38.2333333 64.1333333,38.2333333 Z M32.0666667,39.4666667 C31.3873701,39.4666667 30.8333333,40.0207034 30.8333333,40.7 C30.8333333,41.3792966 31.3873701,41.9333333 32.0666667,41.9333333 C32.7459632,41.9333333 33.3,41.3792966 33.3,40.7 C33.3,40.0207034 32.7459632,39.4666667 32.0666667,39.4666667 Z M41.9333333,39.4666667 C41.2540368,39.4666667 40.7,40.0207034 40.7,40.7 C40.7,41.3792966 41.2540368,41.9333333 41.9333333,41.9333333 C42.6126299,41.9333333 43.1666667,41.3792966 43.1666667,40.7 C43.1666667,40.0207034 42.6126299,39.4666667 41.9333333,39.4666667 Z M9.86666667,43.1666667 C9.1873701,43.1666667 8.63333333,43.7207034 8.63333333,44.4 C8.63333333,45.0792966 9.1873701,45.6333333 9.86666667,45.6333333 C10.5459632,45.6333333 11.1,45.0792966 11.1,44.4 C11.1,43.7207034 10.5459632,43.1666667 9.86666667,43.1666667 Z M64.1333333,43.1666667 C63.4540368,43.1666667 62.9,43.7207034 62.9,44.4 C62.9,45.0792966 63.4540368,45.6333333 64.1333333,45.6333333 C64.8126299,45.6333333 65.3666667,45.0792966 65.3666667,44.4 C65.3666667,43.7207034 64.8126299,43.1666667 64.1333333,43.1666667 Z M9.86666667,48.1 C9.1873701,48.1 8.63333333,48.6540368 8.63333333,49.3333333 C8.63333333,50.0126299 9.1873701,50.5666667 9.86666667,50.5666667 C10.5459632,50.5666667 11.1,50.0126299 11.1,49.3333333 C11.1,48.6540368 10.5459632,48.1 9.86666667,48.1 Z M64.1333333,48.1 C63.4540368,48.1 62.9,48.6540368 62.9,49.3333333 C62.9,50.0126299 63.4540368,50.5666667 64.1333333,50.5666667 C64.8126299,50.5666667 65.3666667,50.0126299 65.3666667,49.3333333 C65.3666667,48.6540368 64.8126299,48.1 64.1333333,48.1 Z M9.86666667,53.0333333 C9.1873701,53.0333333 8.63333333,53.5873701 8.63333333,54.2666667 C8.63333333,54.9459632 9.1873701,55.5 9.86666667,55.5 C10.5459632,55.5 11.1,54.9459632 11.1,54.2666667 C11.1,53.5873701 10.5459632,53.0333333 9.86666667,53.0333333 Z M64.1333333,53.0333333 C63.4540368,53.0333333 62.9,53.5873701 62.9,54.2666667 C62.9,54.9459632 63.4540368,55.5 64.1333333,55.5 C64.8126299,55.5 65.3666667,54.9459632 65.3666667,54.2666667 C65.3666667,53.5873701 64.8126299,53.0333333 64.1333333,53.0333333 Z M32.0666667,55.0904951 C32.847136,55.4325527 33.6661458,55.7071618 34.5188799,55.8805993 C35.2078125,56.4009118 36.0653652,56.7333333 37,56.7333333 C37.934636,56.7333333 38.7921875,56.4009118 39.4811201,55.8805993 C40.3338542,55.7071618 41.1528652,55.4325527 41.9333333,55.0904951 L41.9333333,58.9880208 C41.7888027,59.2770833 40.5313799,61.6666667 37,61.6666667 C33.4686201,61.6666667 32.2111985,59.2770833 32.0666667,58.9880208 L32.0666667,55.0904951 Z M9.86666667,57.9666667 C9.1873701,57.9666667 8.63333333,58.5207034 8.63333333,59.2 C8.63333333,59.8792966 9.1873701,60.4333333 9.86666667,60.4333333 C10.5459632,60.4333333 11.1,59.8792966 11.1,59.2 C11.1,58.5207034 10.5459632,57.9666667 9.86666667,57.9666667 Z M64.1333333,57.9666667 C63.4540368,57.9666667 62.9,58.5207034 62.9,59.2 C62.9,59.8792966 63.4540368,60.4333333 64.1333333,60.4333333 C64.8126299,60.4333333 65.3666667,59.8792966 65.3666667,59.2 C65.3666667,58.5207034 64.8126299,57.9666667 64.1333333,57.9666667 Z M29.6,59.6239583 L29.6,59.6673174 L29.7300784,59.9274743 C29.7300784,59.9274743 31.9365882,64.1333333 37,64.1333333 C42.0634118,64.1333333 44.2699216,59.9274743 44.2699216,59.9274743 L44.4,59.6673174 L44.4,59.6239583 C45.681511,60.0141924 48.2975257,60.8476569 51.4723958,62.3411458 C53.5199216,63.3095049 55.5529951,64.4802083 56.9934902,65.7231777 C58.4339841,66.9661458 59.2,68.1994792 59.2,69.3123701 L59.2,71.5333333 L14.8,71.5333333 L14.8,69.3123701 C14.8,68.1994792 15.5660159,66.9661458 17.006511,65.7231777 C18.4470049,64.4802083 20.4800784,63.3095049 22.5276042,62.3411458 C25.7024743,60.8476569 28.3184902,60.0141924 29.6,59.6239583 Z"
								id="Shape"
							/>
						</g>
					</g>
				</g>
			</g>
		</g>
	</SvgIcon>
));

export default IDIcon;
