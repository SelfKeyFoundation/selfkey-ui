import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = createStyles({
	root: {
		transition: 'all 0.2s ease-out',
		'&:hover': {
			fill: 'white'
		}
	}
});

export const CodeIcon = withStyles(styles)((props: SvgIconProps & WithStyles<typeof styles>) => (
	<SvgIcon
		style={{ width: props.width || '66px', height: props.height || '66px' }}
		{...props}
		viewBox={props.viewBox || '0 0 66 66'}
	>
		<title>34CCD069-05CB-424C-A963-3EA08E2B3196</title>
		<desc>Created with sketchtool.</desc>
		<defs>
			<linearGradient
				x1="11.0842631%"
				y1="68.28767%"
				x2="36.0705554%"
				y2="0.141116699%"
				id="linearGradient-1"
			>
				<stop stopColor="#09A8BA" offset="0%"></stop>
				<stop stopColor="#0ABBD0" offset="100%"></stop>
			</linearGradient>
		</defs>
		<g id="🖥-Main-Dashboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g
				id="387---Buy-KEY/ETH---Verify-Email"
				transform="translate(-391.000000, -237.000000)"
				fill="url(#linearGradient-1)"
				fillRule="nonzero"
			>
				<g id="Modal1" transform="translate(341.000000, 122.000000)">
					<g id="Content" transform="translate(50.000000, 115.000000)">
						<path
							d="M3.18903857,0 C1.43506736,0 0,1.43506736 0,3.18903857 L0,47.8355786 C0,49.5895498 1.43506736,51.0246172 3.18903857,51.0246172 L20.4837592,51.0246172 L27.2127135,60.2719988 C29.8064649,63.8330919 33.8925035,65.9067972 38.2933778,65.9067972 L51.0495321,65.9067972 C55.2271715,65.9067972 59.1567484,64.2802217 62.0056229,61.2187446 C64.8544974,58.1678977 66.2584216,54.1929769 65.960778,50.0259665 L65.1406806,38.6504831 C64.9387082,36.0886221 62.759366,34.0807737 60.1868749,34.0807737 C58.9112594,34.0807737 57.7106364,34.5687625 56.7964453,35.4510632 C56.1905269,33.8033932 54.8195731,32.5712125 53.1506429,32.1353772 L53.1506429,3.18903857 C53.1506429,1.43506736 51.7155755,0 49.9616043,0 L3.18903857,0 Z M3.18903857,2.12602572 L49.9616043,2.12602572 C50.5462614,2.12602572 51.0246172,2.6043815 51.0246172,3.18903857 L51.0246172,32.071015 C49.9297139,32.2942477 48.9739155,32.8480104 48.2404366,33.6240098 C47.9321629,32.731079 47.4007404,31.9442837 46.7310423,31.3277362 C46.7629327,31.1682843 46.7725657,30.9974549 46.7725657,30.8273729 L46.7725657,26.5753214 C46.7725657,25.7568015 46.4544092,25.0126925 45.944163,24.4492957 C46.4544092,23.8858989 46.7725657,23.1417899 46.7725657,22.32327 L46.7725657,18.0712186 C46.7725657,17.2526987 46.4544092,16.5085897 45.944163,15.9451929 C46.4544092,15.381796 46.7725657,14.637687 46.7725657,13.8191671 L46.7725657,9.56711572 C46.7725657,7.8131445 45.3374984,6.37807715 43.5835272,6.37807715 L35.0794243,6.37807715 C34.2609044,6.37807715 33.5167954,6.6962336 32.9533986,7.20647977 C32.3900018,6.6962336 31.6458928,6.37807715 30.8273729,6.37807715 L22.32327,6.37807715 C21.5047501,6.37807715 20.7606411,6.6962336 20.1972443,7.20647977 C19.6338475,6.6962336 18.8897385,6.37807715 18.0712186,6.37807715 L9.56711572,6.37807715 C7.8131445,6.37807715 6.37807715,7.8131445 6.37807715,9.56711572 L6.37807715,13.8191671 C6.37807715,14.637687 6.6962336,15.381796 7.20647977,15.9451929 C6.6962336,16.5085897 6.37807715,17.2526987 6.37807715,18.0712186 L6.37807715,22.32327 C6.37807715,23.1417899 6.6962336,23.8858989 7.20647977,24.4492957 C6.6962336,25.0126925 6.37807715,25.7568015 6.37807715,26.5753214 L6.37807715,30.8273729 C6.37807715,32.5813441 7.8131445,34.0164114 9.56711572,34.0164114 L18.0712186,34.0164114 C18.8897385,34.0164114 19.6338475,33.6982549 20.1972443,33.1880087 C20.7606411,33.6982549 21.5047501,34.0164114 22.32327,34.0164114 L28.7013472,34.0164114 L28.7013472,39.3896098 L28.7013472,40.6394801 L22.32327,36.5244574 C20.6011892,35.418924 18.4955935,35.3450946 16.6884717,36.3230664 C14.8919799,37.3116684 13.8191671,39.1193717 13.8191671,41.1709865 C13.8191671,41.6174519 13.9582719,42.0532043 14.2240252,42.4146287 L14.9029417,43.3592974 L14.9029417,43.3717548 L14.9195513,43.3945936 C14.9078581,43.4583744 14.88218,43.5165574 14.88218,43.5835272 L14.88218,45.7095529 C14.88218,46.297399 15.3584098,46.7725657 15.9451929,46.7725657 C16.3852802,46.7725657 16.7615038,46.5053509 16.9230818,46.1247923 L18.9432208,48.8985914 L3.18903857,48.8985914 C2.6043815,48.8985914 2.12602572,48.4202357 2.12602572,47.8355786 L2.12602572,3.18903857 C2.12602572,2.6043815 2.6043815,2.12602572 3.18903857,2.12602572 Z M9.56711572,8.50410286 L18.0712186,8.50410286 C18.6558757,8.50410286 19.1342314,8.98245865 19.1342314,9.56711572 L19.1342314,13.8191671 C19.1342314,14.4038242 18.6558757,14.88218 18.0712186,14.88218 L9.56711572,14.88218 C8.98245865,14.88218 8.50410286,14.4038242 8.50410286,13.8191671 L8.50410286,9.56711572 C8.50410286,8.98245865 8.98245865,8.50410286 9.56711572,8.50410286 Z M22.32327,8.50410286 L30.8273729,8.50410286 C31.4120299,8.50410286 31.8903857,8.98245865 31.8903857,9.56711572 L31.8903857,11.2467589 C30.4021677,11.9270872 29.285174,13.2664005 28.9131195,14.88218 L22.32327,14.88218 C21.7386129,14.88218 21.2602572,14.4038242 21.2602572,13.8191671 L21.2602572,9.56711572 C21.2602572,8.98245865 21.7386129,8.50410286 22.32327,8.50410286 Z M35.0794243,8.50410286 L43.5835272,8.50410286 C44.1681842,8.50410286 44.64654,8.98245865 44.64654,9.56711572 L44.64654,13.8191671 C44.64654,14.4038242 44.1681842,14.88218 43.5835272,14.88218 L39.2774949,14.88218 C38.7353583,12.5222915 36.6104945,10.7692334 34.091154,10.7692334 L34.0164114,10.7692334 L34.0164114,9.56711572 C34.0164114,8.98245865 34.4947672,8.50410286 35.0794243,8.50410286 Z M34.1015354,12.8952586 C35.4303015,12.8952586 36.5778568,13.7128659 37.0455824,14.88218 C37.2050344,15.2542345 37.290574,15.6590925 37.290574,16.0842977 L37.2158314,37.2698123 C37.2158314,37.8650995 37.6941872,38.3328251 38.2788443,38.3328251 C38.8635013,38.3328251 39.3418571,37.8650995 39.3418571,37.2698123 L39.3418571,35.4946637 C39.3418571,35.3883624 39.3416073,35.2812309 39.3522374,35.1749296 C39.3947579,35.0686283 39.4165997,34.9617456 39.4165997,34.8448142 L39.4165997,34.8032897 C39.4697503,34.5269064 39.5550401,34.2609044 39.6719715,34.0164114 C40.2247393,32.7939467 41.4573356,31.954748 42.8817728,31.954748 C43.9873062,31.954748 44.9757413,32.4527865 45.6348103,33.2606752 C46.0068648,33.7177707 46.2738628,34.2923791 46.3801641,34.9195567 L46.7933274,37.4504415 C46.8889986,37.9925781 47.3889474,38.3753456 47.9310839,38.3328251 C48.4838506,38.2903046 48.9089728,37.8225789 48.9089728,37.2698123 C48.9089728,35.8985257 49.7915222,34.7182487 51.0246172,34.2717833 C51.3116306,34.165482 51.6296214,34.1017841 51.9485252,34.091154 C52.3737304,34.1124153 52.7892185,34.2073381 53.1506429,34.3880503 C54.0435737,34.8026253 54.723819,35.6326895 54.9257914,36.6531819 L55.28705,38.4387108 L55.28705,38.9805986 L55.28705,38.99098 C55.28705,39.575636 55.7654058,40.0436114 56.3500628,40.0436114 C56.9347199,40.0436114 57.4130757,39.5758858 57.4130757,38.9805986 C57.4130757,38.2471197 57.6998394,37.545697 58.2207157,37.0248207 C58.7522221,36.5039444 59.4427659,36.2067994 60.1868749,36.2067994 C61.6538326,36.2067994 62.9081049,37.3646532 63.0250352,38.8103507 L63.8347523,50.1733767 C64.0898754,53.7450999 62.8869275,57.1586999 60.4526281,59.7737115 C58.0076985,62.3993533 54.6920944,63.8347523 51.1097411,63.8347523 L38.3847299,63.8347523 C34.6535548,63.8347523 31.1260136,62.0369318 28.925577,59.0179753 L23.1101483,51.0246172 L21.5675338,48.8985914 L15.9451929,41.1709865 C15.9451929,39.9060012 16.6044267,38.7996376 17.70996,38.1937203 C18.2308363,37.9067058 18.7828557,37.7680995 19.3356224,37.7680995 C19.9734301,37.7680995 20.6011063,37.9485619 21.1751332,38.3099863 L28.7013472,43.1516782 L28.7013472,45.7676869 C28.7013472,46.355532 29.1775769,46.8306998 29.76436,46.8306998 C30.3511431,46.8306998 30.8273729,46.355532 30.8273729,45.7676869 L30.8273729,16.0718413 C30.8273729,15.6253759 30.9977866,15.2005024 31.1678686,14.8178178 C31.3379518,14.424503 31.582112,14.0752873 31.8903857,13.7776437 C32.4431524,13.2461373 33.1978915,12.9162706 34.0164114,12.9056405 C34.0483018,12.8952586 34.069645,12.8952586 34.1015354,12.8952586 Z M9.56711572,17.0082057 L18.0712186,17.0082057 C18.6558757,17.0082057 19.1342314,17.4865615 19.1342314,18.0712186 L19.1342314,22.32327 C19.1342314,22.9079271 18.6558757,23.3862829 18.0712186,23.3862829 L9.56711572,23.3862829 C8.98245865,23.3862829 8.50410286,22.9079271 8.50410286,22.32327 L8.50410286,18.0712186 C8.50410286,17.4865615 8.98245865,17.0082057 9.56711572,17.0082057 Z M22.32327,17.0082057 L28.7013472,17.0082057 L28.7013472,23.3862829 L22.32327,23.3862829 C21.7386129,23.3862829 21.2602572,22.9079271 21.2602572,22.32327 L21.2602572,18.0712186 C21.2602572,17.4865615 21.7386129,17.0082057 22.32327,17.0082057 Z M39.3314757,17.0082057 L43.5835272,17.0082057 C44.1681842,17.0082057 44.64654,17.4865615 44.64654,18.0712186 L44.64654,22.32327 C44.64654,22.9079271 44.1681842,23.3862829 43.5835272,23.3862829 L39.3314757,23.3862829 L39.3314757,17.0082057 Z M9.56711572,25.5123086 L18.0712186,25.5123086 C18.6558757,25.5123086 19.1342314,25.9906644 19.1342314,26.5753214 L19.1342314,30.8273729 C19.1342314,31.4120299 18.6558757,31.8903857 18.0712186,31.8903857 L9.56711572,31.8903857 C8.98245865,31.8903857 8.50410286,31.4120299 8.50410286,30.8273729 L8.50410286,26.5753214 C8.50410286,25.9906644 8.98245865,25.5123086 9.56711572,25.5123086 Z M22.32327,25.5123086 L28.7013472,25.5123086 L28.7013472,31.8903857 L22.32327,31.8903857 C21.7386129,31.8903857 21.2602572,31.4120299 21.2602572,30.8273729 L21.2602572,26.5753214 C21.2602572,25.9906644 21.7386129,25.5123086 22.32327,25.5123086 Z M39.3314757,25.5123086 L43.5835272,25.5123086 C44.1681842,25.5123086 44.64654,25.9906644 44.64654,26.5753214 L44.64654,30.1048558 C44.0937733,29.9241436 43.4983203,29.8287223 42.8817728,29.8287223 C41.574267,29.8287223 40.2881873,30.0832639 39.3314757,30.8273729 L39.3314757,25.5123086 Z M5.31506429,42.5205143 C4.72828119,42.5205143 4.25205143,42.9956811 4.25205143,43.5835272 L4.25205143,45.7095529 C4.25205143,46.297399 4.72828119,46.7725657 5.31506429,46.7725657 C5.90184739,46.7725657 6.37807715,46.297399 6.37807715,45.7095529 L6.37807715,43.5835272 C6.37807715,42.9956811 5.90184739,42.5205143 5.31506429,42.5205143 Z M10.6301286,42.5205143 C10.0433455,42.5205143 9.56711572,42.9956811 9.56711572,43.5835272 L9.56711572,45.7095529 C9.56711572,46.297399 10.0433455,46.7725657 10.6301286,46.7725657 C11.2169117,46.7725657 11.6931414,46.297399 11.6931414,45.7095529 L11.6931414,43.5835272 C11.6931414,42.9956811 11.2169117,42.5205143 10.6301286,42.5205143 Z"
							id="icon-code"
						></path>
					</g>
				</g>
			</g>
		</g>
	</SvgIcon>
));

export default CodeIcon;
