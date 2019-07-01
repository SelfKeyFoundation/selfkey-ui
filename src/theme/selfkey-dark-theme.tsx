import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import {
  primary,
  typography,
  error,
  primaryTint,
  warning,
  white,
  grey,
  base,
  baseDark,
  baseLight,
} from '../colors';
export * from '../colors';
export * from '../materialui/colorPresentation';
export * from '../materialui/datepicker';
export * from '../materialui/inputs';
export * from '../materialui/lists';
export * from '../materialui/modalElements';
export * from '../materialui/pagination';
export * from '../materialui/statuses';
export * from '../materialui/tables';
export * from '../materialui/tooltipArrow';
export * from '../materialui/typography';
export * from '../icons/address-book-menu';
export * from '../icons/address-book';
export * from '../icons/animated-loading';
export * from '../icons/attribute-alert';
export * from '../icons/attribute-alert-large';
export * from '../icons/bank';
export * from '../icons/book';
export * from '../icons/calendar';
export * from '../icons/calendar-deposit';
export * from '../icons/certificate';
export * from '../icons/check-empty';
export * from '../icons/check';
export * from '../icons/check-ma';
export * from '../icons/clear';
export * from '../icons/clipboard';
export * from '../icons/close-button';
export * from '../icons/copy';
export * from '../icons/corporate';
export * from '../icons/custom';
export * from '../icons/dashboard-menu';
export * from '../icons/delete';
export * from '../icons/denied';
export * from '../icons/did';
export * from '../icons/document';
export * from '../icons/download-2';
export * from '../icons/download';
export * from '../icons/edit-transparent';
export * from '../icons/ethereum';
export * from '../icons/exchange-large';
// export * from '../icons/exchange';
export * from '../icons/existing-address';
export * from '../icons/failed';
export * from '../icons/file-audio';
export * from '../icons/file-default';
export * from '../icons/file-image';
export * from '../icons/file-multiple';
export * from '../icons/file-pdf';
export * from '../icons/file-video';
export * from '../icons/gear';
export * from '../icons/green-tick';
export * from '../icons/hard-drive';
export * from '../icons/help';
export * from '../icons/hourglass-large';
export * from '../icons/hourglass-simple';
export * from '../icons/hourglass-small';
export * from '../icons/id-card';
export * from '../icons/incorporations';
export * from '../icons/info';
export * from '../icons/key';
export * from '../icons/ledger';
export * from '../icons/list';
export * from '../icons/mail';
export * from '../icons/marketplace-menu';
export * from '../icons/marketplace';
export * from '../icons/menu-button';
export * from '../icons/merge';
export * from '../icons/modal-close';
export * from '../icons/money';
export * from '../icons/muiadd';
export * from '../icons/muidelete';
export * from '../icons/muiedit';
export * from '../icons/muivisibility';
export * from '../icons/my-crypto-large';
export * from '../icons/new-address';
export * from '../icons/okay';
export * from '../icons/password-confirm';
export * from '../icons/password';
export * from '../icons/payment';
export * from '../icons/person';
export * from '../icons/print-small';
export * from '../icons/print';
export * from '../icons/profile';
export * from '../icons/quit';
export * from '../icons/receive';
export * from '../icons/refresh';
export * from '../icons/refresh2';
export * from '../icons/return-large';
export * from '../icons/return';
export * from '../icons/selfkey-id-menu';
export * from '../icons/selfkey';
export * from '../icons/selfkeyLogo';
export * from '../icons/selfkeyLogoTemp';
export * from '../icons/sent-blue';
export * from '../icons/sent';
export * from '../icons/share';
export * from '../icons/shield';
export * from '../icons/simple-check';
export * from '../icons/simple-denied';
export * from '../icons/sk-id';
export * from '../icons/stick';
export * from '../icons/structure';
export * from '../icons/success';
export * from '../icons/tick';
export * from '../icons/transfer';
export * from '../icons/trezor-bridge';
export * from '../icons/trezor';
export * from '../icons/unlock-large';
export * from '../icons/unlock';
export * from '../icons/upload';
export * from '../icons/userplus';
export * from '../icons/view';
export * from '../icons/visibility-off';
export * from '../icons/visibility-on';
export * from '../icons/wallet';
export * from '../icons/warning-shield';
export * from '../icons/id';

export { MuiEditIcon } from '../icons/muiedit';
export { MuiAddIcon } from '../icons/muiadd';
export { MuiDeleteIcon } from '../icons/muidelete';
export { MuiVisibilityIcon } from '../icons/muivisibility';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: primary,
			light: primaryTint,
		},
		secondary: {
			main: typography,
		},
		error: {
			main: error,
		},
		text: {
			primary: white,
			secondary: grey,
			disabled: grey,
			hint: 'rgba(0, 0, 0, 0.38)',
		},
	},
	typography: {
		fontFamily: ['Lato', 'arial', 'sans-serif'].join(','),
		fontSize: 16,
		useNextVariants: true,
	},
	overrides: {
		MuiCard: {
			root: {
				backgroundColor: base,
				boxShadow: 'none',
				height: '100%',
			},
		},
		MuiCardHeader: {
			title: {
				color: white,
				fontSize: '18px',
				fontWeight: 600,
				lineHeight: '22px',
			},
			subheader: {
				color: white,
				fontSize: '16px',
				fontWeight: 600,
			},
		},
		MuiCardContent: {
			root: {
				height: '100%',
			},
		},
		MuiTypography: {
			root: {
				color: '#BE1E1E',
			},
			h1: {
				fontSize: '24px',
				fontWeight: 400,
				lineHeight: '30px',
			},
			h2: {
				fontSize: '18px',
				fontWeight: 400,
				lineHeight: '26px',
			},
			h3: {
				color: typography,
				fontSize: '16px',
				lineHeight: '24px',
			},
			h4: {
				fontSize: '18px',
				fontWeight: 600,
				lineHeight: '26px',
			},
			h5: {
				fontSize: '16px',
				fontWeight: 600,
				lineHeight: '20px',
				zIndex: 1,
			},
			h6: {
				fontSize: '15px',
				lineHeight: '18px',
			},
			body1: {
				fontSize: '18px',
				lineHeight: '28px',
			},
			body2: {
				fontSize: '16px',
				lineHeight: '24px',
			},
			subtitle1: {
				fontSize: '14px',
				lineHeight: '17px',
			},
			subtitle2: {
				fontSize: '13px',
				lineHeight: '19px',
			},
			caption: {
				color: warning,
				fontSize: '16px',
				lineHeight: '24px',
			},
			overline: {
				color: typography,
				fontSize: '12px',
				fontWeight: 600,
				lineHeight: '15px',
				textTransform: 'uppercase',
				whiteSpace: 'normal',
			},
		},
		MuiList: {
			root: {
				paddingRight: '8px!important',
			},
			padding: {
				boxSizing: 'border-box',
				paddingBottom: '4px',
				paddingLeft: '8px',
				paddingRight: '8px',
				paddingTop: '5px',
			},
		},
		MuiListItem: {
			root: {
				marginBottom: '10px',
				paddingBottom: '0',
				paddingTop: '0',
				'&$selected': {
					backgroundColor: grey,
					'&:hover': {
						backgroundColor: grey,
					},
				},
			},
			button: {
				margin: '0',
				'&:hover': {
					backgroundColor: '#394553',
				},
			},
		},
		MuiListItemText: {
			root: {
				fontSize: '18px',
			},
		},
		MuiInput: {
			root: {
				backgroundColor: baseDark,
				borderRadius: '4px',
				border: '1px solid #384656',
				boxSizing: 'border-box',
				color: white,
				fontSize: '14px',
				height: '44px',
				lineHeight: '21px',
				paddingLeft: '16px',
				'&$focused': {
					'&$focused:not($error):not($disabled)': {
						border: `1px solid ${primary}`,
						boxShadow: `0 0 3px 1px ${primary}`,
					},
				},
				'&$disabled': {
					color: '#93B0C1',
					opacity: 0.5,
				},
			},
			formControl: {
				marginTop: 0,
				label: {
					marginTop: '16px',
				},
			},
			underline: {
				'&:hover:not($disabled):not($focused):not($error):before': {
					borderBottom: '0',
				},
				'&:hover:not($disabled):not($focused):not($error):after': {
					borderBottom: '0',
				},
				'&:after': {
					borderBottom: '0',
				},
				'&:before': {
					borderBottom: '0',
				},
			},
			error: {
				backgroundColor: 'rgba(255, 46, 99, 0.09)',
				border: `1px solid ${error}`,
				color: error,
				marginBottom: '6px',
			},
		},
		MuiInputBase: {
			input: {
				'&::placeholder': {
					color: grey,
					opacity: 1,
				},
			},
			inputType: {
				height: '22px',
			},
			multiline: {
				overflow: 'scroll',
			},
		},
		MuiInputLabel: {
			filled: {
				marginTop: '5px',
			},
		},
		MuiInputAdornment: {
			positionEnd: {
				marginLeft: '151px',
				position: 'absolute',
			},
		},
		MuiSvgIcon: {
			root: {
				color: '#93B0C1',
				transition: 'all 0.2s ease-out',
				'&:hover': {
				  	color: white,
				},
				'&:focus': {
					color: primary,
				},
				'&:checked': {
					color: primary,
				},
			},
		},
		MuiCheckbox: {
			root: {
				borderRadius: '3px',
				color: grey,
				height: '18px',
				marginRight: '10px',
				padding: 0,
				width: '18px',
				'& svg': {
					color: 'inherit',
					'&:hover': {
						color: 'inherit',
					},
				},
				'&$checked:not($disabled):not($colorPrimary)': {
					backgroundColor: `${primary} !important`,
					border: `1px solid ${primary} !important`,
					color: `${baseDark} !important`,
				},
				'&$checked:not($disabled)': {
					backgroundColor: `${error} !important`,
					border: `1px solid ${error} !important`,
					color: `#392E3C !important`,
				},
				'&$checked': {
					backgroundColor: `#384656 !important`,
					border: `1px solid #2F3B48 !important`,
					color: `${baseDark} !important`,
				},
				'&$disabled:not($checked)': {
					color: 'transparent !important',
				},
				'&$disabled': {
					backgroundColor: '#222B34',
					border: '1px solid #2F3B48',
					borderRadius: '3px',
					color: 'transparent',
					height: '18px',
					padding: 0,
					width: '18px',
				},
				'&:hover': {
					backgroundColor: '#384656',
				},
			},
			colorSecondary: {
				backgroundColor: baseDark,
				border: `1px solid ${grey}`,
				borderRadius: '3px',
				color: 'transparent',
				height: '18px',
				padding: 0,
				width: '18px',
			},
			colorPrimary: {
				backgroundColor: 'rgba(255, 46, 99, 0.09)',
				border: `1px solid ${error}`,
				borderRadius: '3px',
				color: 'transparent',
				height: '18px',
				padding: 0,
				width: '18px',
				'&:hover': {
					backgroundColor: 'rgba(255, 46, 99, 0.05)',
				},
			},
		},
		MuiRadio: {
			root: {
				borderRadius: '50%',
				boxSizing: 'border-box',
				color: grey,
				height: '18px',
				marginRight: '10px',
				padding: 0,
				width: '18px',
				'& svg': {
					color: 'inherit',
					'&:hover': {
						color: 'inherit',
					},
				},
				'&$checked:not($disabled):not($colorPrimary)': {
					backgroundColor: `#1e262d !important`,
					border: `1px solid ${primary} !important`,
					color: `${primary} !important`,
				},
				'&$checked:not($disabled)': {
					backgroundColor: `#392E3C !important`,
					border: `1px solid ${error} !important`,
					color: `${error} !important`,
				},
				'&$checked': {
					backgroundColor: `${baseDark} !important`,
					border: `1px solid ${baseDark} !important`,
					color: `#35424e !important`,
				},
				'&$disabled:not($checked)': {
					color: 'transparent !important',
				},
				'&$disabled': {
					backgroundColor: '#222B34',
					border: '1px solid #2F3B48',
					borderRadius: '50%',
					color: 'transparent',
					height: '18px',
					padding: 0,
					width: '18px',
				},
				'&:hover': {
					backgroundColor: '#384656',
				},
			},
			colorSecondary: {
				backgroundColor: baseDark,
				border: `1px solid ${grey}`,
				borderRadius: '50%',
				color: 'transparent',
				height: '18px',
				padding: 0,
				width: '18px',
			},
			colorPrimary: {
				backgroundColor: 'rgba(255, 46, 99, 0.09)',
				border: `1px solid ${error}`,
				borderRadius: '50%',
				color: 'transparent',
				height: '18px',
				padding: 0,
				width: '18px',
				'&:hover': {
					backgroundColor: 'rgba(255, 46, 99, 0.05)',
				},
			},
		},
		MuiSelect: {
			root: {
				borderRadius: '4px',
				lineHeight: 'initial',
				'& option': {
					backgroundColor: `${baseDark} !important`,
					border: `1px solid ${baseDark} !important`,
					color: `#FFFFFF !important`,
				},
			},
			icon: {
				color: 'rgba(147, 176, 193, 0.5)',
			},
			selectMenu: {
				color: white,
				fontSize: '14px',
				lineHeight: '21px',
			},
			error: {
				backgroundColor: 'rgba(255, 46, 99, 0.09)',
				border: `1px solid ${error}`,
				color: error,
				marginBottom: '6px',
			},
		},
		MuiMenu: {
			paper: {
				border: `1px solid ${primary}`,
				boxShadow: `0 0 3px 1px ${primary}`,
				marginLeft: '-17px',
				marginTop: '-6px',
				maxHeight: '300px',
				overflowY: 'auto',
			},
		},
		MuiPaper: {
			root: {
				backgroundColor: baseDark,
				border: '1px solid #384656',
				boxSizing: 'border-box',
				color: white,
				minWidth: '200px',
				top: '535px',
				left: '31px',
			},
		},
		MuiMenuItem: {
			root: {
				borderRadius: '4px',
				fontSize: '14px',
				lineHeight: '21px',
			},
		},
		MuiFormGroup: {
			root: {
				backgroundColor: base,
				marginBottom: '15px',
			},
		},
		MuiFormControl: {
			root: {
				minWidth: '200px',
			},
		},
		MuiFormControlLabel: {
			root: {
				marginBottom: '15px',
				marginLeft: 0,
			},
			label: {
				color: typography,
			},
		},
		MuiFormLabel: {
			root: {
				display: 'block',
				fontSize: '14px',
				lineHeight: '21px',
				'$&focused': {
					display: 'none',
				},
			},
		},
		MuiButton: {
			root: {
				borderRadius: '4px',
				boxSizing: 'border-box',
				color: white,
				fontSize: '13px',
				fontWeight: 600,
				height: '36px',
				letterSpacing: '0.6px',
				lineHeight: '16px',
				minWidth: '120px',
				'&$disabled': {
					color: white,
					opacity: 0.5,
				},
			},
			contained: {
				background: 'linear-gradient(to bottom, #0abbd0 0%, #09a8ba 100%)',
				border: '1px solid #0FB8D0',
				boxShadow: 'none',
				color: white,
				'&:hover': {
					background: 'linear-gradient(to bottom, #0AA9D0 0%, #099BBA 100%)',
				},
				'&:focus': {
					background: 'linear-gradient(to top right, #0A99D0 10%, #097CBA 70%);',
				},
				'&$disabled': {
					color: white,
				},
			},
			outlined: {
				background: 'transparent',
				border: '2px solid #1CA9BA',
				color: primary,
				'&:hover': {
					background: '#313D49',
					borderColor: '#23E6FE',
				},
				'&:focus': {
					background: '#1E262E',
				},
				'&$disabled': {
					color: primary,
					border: '2px solid #1CA9BA',
				},
			},
			outlinedSecondary: {
				background: 'transparent',
				border: `1px solid ${typography}`,
				color: typography,
				'&:hover': {
					backgroundColor: '#313D49',
					border: `1px solid ${typography}`,
				},
				'&:focus': {
					background: baseDark,
				},
				'&$disabled': {
					border: `1px solid ${typography}`,
					color: typography,
				},
			},
			sizeLarge: {
				fontSize: '16px',
				height: '44px',
				lineHeight: '19px',
			},
			sizeSmall: {
				fontSize: '12px',
				fontWeight: 400,
				height: '26px',
				lineHeight: '15px',
				minHeight: '26px',
				minWidth: '50px',
				padding: '0 10px',
			},
		},
		MuiIconButton: {
			root: {
				color: grey,
				padding: '7px 0 7px 10px',
				'&:hover': {
					backgroundColor: 'transparent',
				},
				'&$disabled': {
					color: grey,
				},
			},
		},
		MuiTableRow: {
			root: {
				'&:nth-of-type(odd)': {
					backgroundColor: '#2E3945',
				},
			},
		},
		MuiTableCell: {
			root: {
				borderBottom: 0,
				padding: '15px 30px',
				whiteSpace: 'nowrap',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
			},
			head: {
				backgroundColor: baseDark,
				borderBottom: 0,
			},
			body: {
				boxSizing: 'border-box',
				minHeight: '74px',
			},
			footer: {
				color: warning,
			},
		},
		MuiTooltip: {
			tooltip: {
				backgroundColor: '#1F2830',
				border: '1px solid #43505B',
				borderRadius: '3px',
			},
		},
		MuiTabs: {
			root: {
				borderBottom: `1px solid ${grey}`,
			},
			indicator: {
				backgroundColor: primary,
				height: '4px',
				marginLeft: '-1px',
			},
		},
		MuiTab: {
			root: {
				borderBottom: `4px solid transparent`,
				textTransform: 'initial',
				minWidth: '0 !important',
				'&:hover': {
					borderBottom: `4px solid ${grey}`,
					boxSizing: 'border-box',
					color: white,
				},
				'&$selected': {
					color: white,
				},
			},
			textColorInherit: {
				color: typography,
			},
			wrapper: {
				width: 'initial',
			},
			labelContainer: {
				padding: '6px 15px !important'
			},
			label: {
				fontSize: '16px',
				lineHeight: '19px',
			}
		},
		MuiExpansionPanel: {
			root: {
				backgroundColor: base,
				borderRadius: '4px',
				boxShadow: 'none',
				position: 'initial',
			},
		},
		MuiExpansionPanelSummary: {
			content: {
				alignItems: 'baseline',
				flexDirection: 'row',
				justifyContent: 'space-between',
				paddingLeft: '30px',
			},
			expandIcon: {
				color: typography,
				left: '18px',
				padding: '0',
				right: 'initial',
				transform: 'translateY(-50%) rotate(90deg)',
				transformOrigin: '50%',
			},
		},
		MuiDivider: {
			root: {
				backgroundColor: '#303C49',
				height: '1px',
			},
		},
		MuiLinearProgress: {
			root: {
				backgroundColor: '#414F63',
				borderRadius: '10px',
				height: '4px',
				marginBottom: '15px',
				marginTop: '10px',
				width: '235px',
			},
			colorPrimary: {
				backgroundColor: '#414F63',
			},
			barColorPrimary: {
				background: 'linear-gradient(to right, #2DA1F8 0%, #08BCCD 20%)',
			},
		},
		MuiTablePagination: {
			actions: {},
			select: {
				backgroundColor: base,
				border: '1px solid #313D49',
				borderRadius: 0,
				paddingLeft: '12px',
				paddingRight: '30px',
			},
			selectIcon: {
				color: primary,
				right: '5px',
				top: '6px',
			},
		},
		MuiModal: {
			root: {
				height: '100%',
				overflow: 'auto',
			},
		},
		MuiBackdrop: {
			root: {
				backgroundColor: base,
			},
		},
		// @ts-ignore
		MuiToggleButtonGroup: {
			root: {
				boxShadow: 'none',
				'&$selected': {
					backgroundColor: 'transparent',
					boxShadow: 'none',
				},
			},
		},
		MuiToggleButton: {
			root: {
				backgroundColor: '#293743',
				border: '1px solid #1D505F',
				boxSizing: 'border-box',
				fill: typography,
				height: '44px',
				textTransform: 'initial',
				'&:hover': {
					border: `1px solid ${primaryTint}`,
				},
				'&$selected': {
					background: '#313D49',
					border: `1px solid ${primaryTint}`,
					fill: primary,
					color: primary,
				},
				'&$disabled': {
					opacity: 0.5,
				},
			},
		},
		MuiSlider: {
			root: {
				margin: '20px 0 33px',
			},
			track: {
				borderRadius: '6px',
				height: '10px',
			},
			trackAfter: {
				backgroundColor: '#313D49',
				opacity: 1,
			},
			thumb: {
				height: '18px',
				width: '18px',
			},
		},
		MuiDrawer: {
			paperAnchorRight: {
				backgroundColor: '#222B34',
				borderLeft: '1px solid #29333D',
				boxShadow: 'none',
			},
		},
		MuiAvatar: {
			root: {
				fontSize: '12px',
				height: '26px',
				marginTop: '16px',
				width: '26px',
			},
			colorDefault: {
				backgroundColor: baseLight,
			},
		},
	},
});

export const SelfkeyDarkTheme: React.SFC<{}> = ({ children }) => {
	return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default SelfkeyDarkTheme;
