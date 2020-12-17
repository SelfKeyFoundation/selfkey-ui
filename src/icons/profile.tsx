import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = createStyles({});

export const ProfileIcon = withStyles(styles)((props: SvgIconProps & WithStyles<typeof styles>) => (
	<SvgIcon
		style={{ width: props.width || '42px', height: props.height || '37px' }}
		{...props}
		viewBox="0 0 42 37"
	>
		<defs />
		<g
			id="Modal---Dark"
			stroke="none"
			strokeWidth="1"
			fill="none"
			fillRule="evenodd"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<g
				id="1.-Select-Wallet-Modal"
				transform="translate(-509.000000, -463.000000)"
				stroke="#23E6FE"
				strokeWidth="0.833333333"
			>
				<g id="Modal-content" transform="translate(420.000000, 100.000000)">
					<g id="Radio-button-replace" transform="translate(70.000000, 341.000000)">
						<g id="Btn-Address">
							<g id="icn-profile" transform="translate(20.000000, 23.000000)">
								<polyline
									id="XMLID_45_"
									points="28.5 7.09952607 40 7.09952607 40 34.9253555 0 34.9253555 0 7.09952607 11.5 7.09952607"
								/>
								<rect
									id="XMLID_38_"
									x="3.975"
									y="11.6030806"
									width="14.3083333"
									height="14.2405213"
								/>
								<path d="M22.15,14.2156398 L36.025,14.2156398" id="XMLID_39_" />
								<path d="M22.15,19.4490521 L36.025,19.4490521" id="XMLID_41_" />
								<path d="M22.15,24.6824645 L36.025,24.6824645" id="XMLID_42_" />
								<path d="M22.15,29.9075829 L36.025,29.9075829" id="XMLID_43_" />
								<path d="M3.975,29.9075829 L18.2833333,29.9075829" id="XMLID_44_" />
								<path
									d="M23.35,3.40876777 C23.35,1.56753555 21.85,0.0746445498 20,0.0746445498 C18.15,0.0746445498 16.65,1.56753555 16.65,3.40876777 L11.5,3.40876777 L11.5,8.79146919 L28.5,8.79146919 L28.5,3.40876777 L23.35,3.40876777 Z"
									id="XMLID_46_"
								/>
								<path
									d="M5.63333333,25.8436019 C5.63333333,22.8163507 8.1,20.3696682 11.1333333,20.3696682 C14.1666667,20.3696682 16.6333333,22.8246445 16.6333333,25.8436019"
									id="XMLID_388_"
								/>
								<ellipse
									id="XMLID_372_"
									cx="11.1333333"
									cy="17.1184834"
									rx="3.25833333"
									ry="3.242891"
								/>
							</g>
						</g>
					</g>
				</g>
			</g>
		</g>
	</SvgIcon>
));

export default ProfileIcon;
