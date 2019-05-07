import * as React from 'react';
import { Grid, withStyles, createStyles, Theme } from '@material-ui/core';
import { MuiAddIcon } from '../../src/icons/muiadd';
import { 
	AddressBookIcon,
	AddressBookMenuIcon,
	AnimatedLoadingIcon,
	AttributeAlertIcon,
	BookIcon,
	CalendarIcon,
	CalendarDepositIcon,
	CertificateIcon,
	CheckEmptyIcon,
	CheckIcon,
	CheckMaIcon,
	ClearIcon,
	ClipboardIcon,
	CloseButtonIcon,
	CopyIcon,
	CustomIcon,
	DashboardMenuIcon,
	DeleteIcon,
	DeniedIcon,
	DIDIcon,
	DocumentIcon,
	DownloadIcon,
	DownloadIcon2,
	EditTransparentIcon,
	EthereumIcon,
	ExchangeIcon,
	ExistingAddressIcon,
	FailedIcon,
	FileAudioIcon,
	FileDefaultIcon,
	FileImageIcon,
	FileMultipleIcon,
	FilePdfIcon,
	FileVideoIcon,
	GearIcon,
	GreenTickIcon,
	HardDriveIcon,
	HelpIcon,
	HourGlassIcon,
	HourGlassLargeIcon,
	HourGlassSmallIcon,
	IdCardIcon,
	IncorporationsIcon,
	InfoTooltip,
	KeyIcon,
	LedgerIcon,
	ListIcon,
	MailIcon,
	MarketplaceIcon,
	MarketplaceMenuIcon,
	MenuButtonIcon,
	MergeIcon,
	ModalCloseIcon,
	MuiDeleteIcon,
	MuiEditIcon,
	MuiVisibilityIcon,
	MyCryptoLargeIcon,
	NewAddressIcon,
	OkayIcon,
	PasswordConfirmIcon,
	PasswordIcon,
	PaymentIcon,
	PrintIcon,
	PrintSmallIcon,
	ProfileIcon,
	QuitIcon,
	ReceiveIcon,
	RefreshIcon,
	ReturnIcon,
	ReturnLargeIcon,
	SelfkeyIcon,
	SelfkeyIDMenuIcon,
	SelfkeyLogo,
	SelfkeyLogoTemp,
	SentBlueIcon,
	SentIcon,
	ShareIcon,
	ShieldIcon,
	SimpleCheckIcon,
	SimpleDeniedIcon,
	SKIDIcon,
	SKUploadIcon,
	StickIcon,
	StructureIcon,
	SuccessIcon,
	TickIcon,
	TransferIcon,
	TrezorBridgeIcon,
	TrezorIcon,
	UnlockIcon,
	UnlockLargeIcon,
	UserPlusIcon,
	ViewIcon,
	VisibilityOffIcon,
	VisibilityOnIcon,
	WalletIcon,
	WarningShieldIcon, 
	NewRefreshIcon
} from '../../src/theme/selfkey-dark-theme';
import CorporateIcon from '../../src/icons/corporate';
import PersonIcon from '../../src/icons/person';

const iconStoryStyles = (theme: Theme) =>
	createStyles({
		pre: {
			backgroundColor: 'black',
			borderRadius: '3px',
			color: '#e6e6e6',
			fontFamily: 'monospace',
			padding: 0,
		},
		code: {
			display: 'block',
			fontSize: '13px',
			marginBottom: '10px',
			padding: '5px 7px'
		},
		gridItem: {
			textAlign: 'center',
			marginBottom: '20px',
			width: '233px'
		}
	});

export const IconsStory = withStyles(iconStoryStyles)(({ classes }: any) => (
	<Grid container spacing={32}>
		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<AddressBookMenuIcon />`}</code>
			</pre>
			<AddressBookMenuIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<AddressBookIcon />`}</code>
			</pre>
			<AddressBookIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<AnimatedLoadingIcon />`}</code>
			</pre>
			<AnimatedLoadingIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<AttributeAlertIcon />`}</code>
			</pre>
			<AttributeAlertIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<BookIcon />`}</code>
			</pre>
			<BookIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<CalendarIcon />`}</code>
			</pre>
			<CalendarIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<CalendarDepositIcon />`}</code>
			</pre>
			<CalendarDepositIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<CertificateIcon />`}</code>
			</pre>
			<CertificateIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<CheckEmptyIcon />`}</code>
			</pre>
			<CheckEmptyIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<CheckIcon />`}</code>
			</pre>
			<CheckIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<CheckMaIcon />`}</code>
			</pre>
			<CheckMaIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<ClearIcon />`}</code>
			</pre>
			<ClearIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<ClipboardIcon />`}</code>
			</pre>
			<ClipboardIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<CloseButtonIcon />`}</code>
			</pre>
			<CloseButtonIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<CopyIcon />`}</code>
			</pre>
			<CopyIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<CorporateIcon />`}</code>
			</pre>
			<CorporateIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<CustomIcon />`}</code>
			</pre>
			<CustomIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<DashboardMenuIcon />`}</code>
			</pre>
			<DashboardMenuIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<DeleteIcon />`}</code>
			</pre>
			<DeleteIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<DeniedIcon />`}</code>
			</pre>
			<DeniedIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<DIDIcon />`}</code>
			</pre>
			<DIDIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<DocumentIcon />`}</code>
			</pre>
			<DocumentIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<DownloadIcon2 />`}</code>
			</pre>
			<DownloadIcon2 />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<DownloadIcon />`}</code>
			</pre>
			<DownloadIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<EditTransparentIcon />`}</code>
			</pre>
			<EditTransparentIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<EthereumIcon />`}</code>
			</pre>
			<EthereumIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<ExchangeIcon />`}</code>
			</pre>
			<ExchangeIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<ExistingAddressIcon />`}</code>
			</pre>
			<ExistingAddressIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<FailedIcon />`}</code>
			</pre>
			<FailedIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<FileAudioIcon />`}</code>
			</pre>
			<FileAudioIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<FileDefaultIcon />`}</code>
			</pre>
			<FileDefaultIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<FileImageIcon />`}</code>
			</pre>
			<FileImageIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<FileMultipleIcon />`}</code>
			</pre>
			<FileMultipleIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<FilePdfIcon />`}</code>
			</pre>
			<FilePdfIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<FileVideoIcon />`}</code>
			</pre>
			<FileVideoIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<GearIcon />`}</code>
			</pre>
			<GearIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<GreenTickIcon />`}</code>
			</pre>
			<GreenTickIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<HardDriveIcon />`}</code>
			</pre>
			<HardDriveIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<HelpIcon />`}</code>
			</pre>
			<HelpIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<HourGlassLargeIcon />`}</code>
			</pre>
			<HourGlassLargeIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<HourGlassSmallIcon />`}</code>
			</pre>
			<HourGlassSmallIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<HourGlassIcon />`}</code>
			</pre>
			<HourGlassIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<IdCardIcon />`}</code>
			</pre>
			<IdCardIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<IncorporationsIcon />`}</code>
			</pre>
			<IncorporationsIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<InfoTooltip />`}</code>
			</pre>
			<InfoTooltip />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<KeyIcon />`}</code>
			</pre>
			<KeyIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<LedgerIcon />`}</code>
			</pre>
			<LedgerIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<ListIcon />`}</code>
			</pre>
			<ListIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<MailIcon />`}</code>
			</pre>
			<MailIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<MarketplaceMenuIcon />`}</code>
			</pre>
			<MarketplaceMenuIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<MarketplaceIcon />`}</code>
			</pre>
			<MarketplaceIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<MenuButtonIcon />`}</code>
			</pre>
			<MenuButtonIcon />
		</Grid>
		
		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<MergeIcon />`}</code>
			</pre>
			<MergeIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<ModalCloseIcon />`}</code>
			</pre>
			<ModalCloseIcon />
		</Grid>
		
		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<MuiAddIcon />`}</code>
			</pre>
			<MuiAddIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<MuiDeleteIcon />`}</code>
			</pre>
			<MuiDeleteIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<MuiEditIcon />`}</code>
			</pre>
			<MuiEditIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<MuiVisibilityIcon />`}</code>
			</pre>
			<MuiVisibilityIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<MyCryptoLargeIcon />`}</code>
			</pre>
			<MyCryptoLargeIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<NewAddressIcon />`}</code>
			</pre>
			<NewAddressIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<NewRefreshIcon />`}</code>
			</pre>
			<NewRefreshIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<OkayIcon />`}</code>
			</pre>
			<OkayIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<PasswordConfirmIcon />`}</code>
			</pre>
			<PasswordConfirmIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<PasswordIcon />`}</code>
			</pre>
			<PasswordIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<PaymentIcon />`}</code>
			</pre>
			<PaymentIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<PersonIcon />`}</code>
			</pre>
			<PersonIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<PrintSmallIcon />`}</code>
			</pre>
			<PrintSmallIcon />
		</Grid>
		
		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<PrintIcon />`}</code>
			</pre>
			<PrintIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<ProfileIcon />`}</code>
			</pre>
			<ProfileIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<QuitIcon />`}</code>
			</pre>
			<QuitIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<ReceiveIcon />`}</code>
			</pre>
			<ReceiveIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<RefreshIcon />`}</code>
			</pre>
			<RefreshIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<ReturnLargeIcon />`}</code>
			</pre>
			<ReturnLargeIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<ReturnIcon />`}</code>
			</pre>
			<ReturnIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<SelfkeyIDMenuIcon />`}</code>
			</pre>
			<SelfkeyIDMenuIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<SelfkeyIcon />`}</code>
			</pre>
			<SelfkeyIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<SelfkeyLogo />`}</code>
			</pre>
			<SelfkeyLogo />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<SelfkeyLogoTemp />`}</code>
			</pre>
			<SelfkeyLogoTemp />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<SentBlueIcon />`}</code>
			</pre>
			<SentBlueIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<SentIcon />`}</code>
			</pre>
			<SentIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<ShareIcon />`}</code>
			</pre>
			<ShareIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<ShieldIcon />`}</code>
			</pre>
			<ShieldIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<SimpleCheckIcon />`}</code>
			</pre>
			<SimpleCheckIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<SimpleDeniedIcon />`}</code>
			</pre>
			<SimpleDeniedIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<SKIDIcon />`}</code>
			</pre>
			<SKIDIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<SKUploadIcon />`}</code>
			</pre>
			<SKUploadIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<StickIcon />`}</code>
			</pre>
			<StickIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<StructureIcon />`}</code>
			</pre>
			<StructureIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<SuccessIcon />`}</code>
			</pre>
			<SuccessIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<TickIcon />`}</code>
			</pre>
			<TickIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<TransferIcon />`}</code>
			</pre>
			<TransferIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<TrezorBridgeIcon />`}</code>
			</pre>
			<TrezorBridgeIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<TrezorIcon />`}</code>
			</pre>
			<TrezorIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<UnlockLargeIcon />`}</code>
			</pre>
			<UnlockLargeIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<UnlockIcon />`}</code>
			</pre>
			<UnlockIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<UserPlusIcon />`}</code>
			</pre>
			<UserPlusIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<ViewIcon />`}</code>
			</pre>
			<ViewIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<VisibilityOffIcon />`}</code>
			</pre>
			<VisibilityOffIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<VisibilityOnIcon />`}</code>
			</pre>
			<VisibilityOnIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<WalletIcon />`}</code>
			</pre>
			<WalletIcon />
		</Grid>

		<Grid item className={classes.gridItem}>
			<pre className={classes.pre}>
				<code className={classes.code}>{`<WarningShieldIcon />`}</code>
			</pre>
			<WarningShieldIcon />
		</Grid>
	</Grid>
));
