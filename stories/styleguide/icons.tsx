import * as React from 'react';
import { Grid, Theme } from '@material-ui/core';
import { createStyles, withStyles } from '@material-ui/styles';
import {
    AddressBookIcon,
    AddressBookMenuIcon,
    AnimatedLoadingIcon,
    AttributeAlertIcon,
    BankIcon,
    BankRoundedIcon,
    BookIcon,
    BuyRoundedIcon,
    CalculatorIcon,
    CalendarIcon,
    CalendarDepositIcon,
    CertificateIcon,
    ChartIcon,
    CheckEmptyIcon,
    CheckIcon,
    CheckMaIcon,
    ClearIcon,
    ClipboardIcon,
    CloseButtonIcon,
    CoinsIcon,
    CompanyIcon,
    CopyIcon,
    CorporateIcon,
    CustomIcon,
    DashboardMenuIcon,
    DeleteIcon,
    DeniedIcon,
    DIDIcon,
    DirectorIcon,
    DocumentIcon,
    DownloadIcon,
    DownloadIcon2,
    DropdownIcon,
    EditTransparentIcon,
    Erc20Icon,
    EthereumIcon,
    ExchangeLargeIcon,
    ExchangeSmallIcon,
    ExchangeRoundedIcon,
    ExistingAddressIcon,
    FailedIcon,
    FileAudioIcon,
    FileDefaultIcon,
    FileImageIcon,
    FileMultipleIcon,
    FilePdfIcon,
    FileVideoIcon,
    FilterIcon,
    GearIcon,
    GreenTickIcon,
    HardDriveIcon,
    HelpIcon,
    HourGlassIcon,
    HourGlassLargeIcon,
    HourGlassSmallIcon,
    IdCardIcon,
    IncorporationsIcon,
    IncorporationsRoundedIcon,
    InfoTooltip,
    KeyIcon,
    LedgerIcon,
    LifebuoyIcon,
    ListIcon,
    LoanIcon,
    MailIcon,
    MarketplaceIcon,
    MarketplaceMenuIcon,
    MarketplaceNotariesIcon,
    MemberIcon,
    MenuAffiliateIcon,
    MenuButtonIcon,
    MenuHelpIcon,
    MenuExportIcon,
    MenuNewIcon,
    MergeIcon,
    ModalCloseIcon,
    MoneyIcon,
    MuiDeleteIcon,
    MuiEditIcon,
    MuiAddIcon,
    MuiVisibilityIcon,
    MyCryptoLargeIcon,
    NewAddressIcon,
    NotarizeDocumentIcon,
    ObserverIcon,
    OkayIcon,
    PasswordConfirmIcon,
    PasswordIcon,
    PaymentIcon,
    PendingRoundedIcon,
    PersonIcon,
    PowerIcon,
    PrintIcon,
    PrintSmallIcon,
    ProfileIcon,
    ProtectionIcon,
    QuitIcon,
    ReceiveIcon,
    ReceivedRoundedIcon,
    RefreshIcon,
    ReplyIcon,
    ReturnIcon,
    ReturnLargeIcon,
    RoundCompany,
    RoundPerson,
    SelectDropdownIcon,
    SelfkeyIcon,
    SelfkeyIDMenuIcon,
    SelfkeyLogo,
    SelfkeyLogoTemp,
    SentBlueIcon,
    SentIcon,
    SentRoundedIcon,
    ShareIcon,
    ShieldIcon,
    SignatureIcon,
    SimpleCheckIcon,
    SimpleDeniedIcon,
    SKIDIcon,
    SKUploadIcon,
    SmallRoundCompany,
    SmallRoundPerson,
    StickIcon,
    StructureIcon,
    SuccessIcon,
    SwitchAccountsIcon,
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
    NewRefreshIcon,
    IDIcon
} from '../../src/icons';

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
    <Grid container spacing={10}>
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
                <code className={classes.code}>{`<BankIcon />`}</code>
            </pre>
            <BankIcon width='18px' height='20px' />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<BankRoundedIcon />`}</code>
            </pre>
            <BankRoundedIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<BookIcon />`}</code>
            </pre>
            <BookIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<BuyRoundedIcon />`}</code>
            </pre>
            <BuyRoundedIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<CalculatorIcon />`}</code>
            </pre>
            <CalculatorIcon />
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
                <code className={classes.code}>{`<ChartIcon />`}</code>
            </pre>
            <ChartIcon />
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
                <code className={classes.code}>{`<CoinsIcon />`}</code>
            </pre>
            <CoinsIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<CompanyIcon />`}</code>
            </pre>
            <CompanyIcon />
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
            <DashboardMenuIcon width='16px' height='16px' viewBox='0 0 16 16' />
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
                <code className={classes.code}>{`<DirectorIcon />`}</code>
            </pre>
            <DirectorIcon />
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
                <code className={classes.code}>{`<DropdownIcon />`}</code>
            </pre>
            <DropdownIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<EditTransparentIcon />`}</code>
            </pre>
            <EditTransparentIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<Erc20Icon />`}</code>
            </pre>
            <Erc20Icon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<EthereumIcon />`}</code>
            </pre>
            <EthereumIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<ExchangeLargeIcon />`}</code>
            </pre>
            <ExchangeLargeIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<ExchangeSmallIcon />`}</code>
            </pre>
            <ExchangeSmallIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<ExchangeRoundedIcon />`}</code>
            </pre>
            <ExchangeRoundedIcon />
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
                <code className={classes.code}>{`<FilterIcon />`}</code>
            </pre>
            <FilterIcon />
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
                <code className={classes.code}>{`<LifebuoyIcon />`}</code>
            </pre>
            <LifebuoyIcon />
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
            <IdCardIcon fill="" />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<IncorporationsIcon />`}</code>
            </pre>
            <IncorporationsIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<IncorporationsRoundedIcon />`}</code>
            </pre>
            <IncorporationsRoundedIcon />
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
                <code className={classes.code}>{`<LoanIcon />`}</code>
            </pre>
            <LoanIcon />
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
                <code className={classes.code}>{`<MarketplaceNotariesIcon />`}</code>
            </pre>
            <MarketplaceNotariesIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<MemberIcon />`}</code>
            </pre>
            <MemberIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<MenuAffiliateIcon />`}</code>
            </pre>
            <MenuAffiliateIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<MenuButtonIcon />`}</code>
            </pre>
            <MenuButtonIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<MenuHelpIcon />`}</code>
            </pre>
            <MenuHelpIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<MenuExportIcon />`}</code>
            </pre>
            <MenuExportIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<MenuNewIcon />`}</code>
            </pre>
            <MenuNewIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<MergeIcon />`}</code>
            </pre>
            <MergeIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<MoneyIcon />`}</code>
            </pre>
            <MoneyIcon height="200" />
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
                <code className={classes.code}>{`<NotarizeDocumentIcon />`}</code>
            </pre>
            <NotarizeDocumentIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<ObserverIcon />`}</code>
            </pre>
            <ObserverIcon />
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
                <code className={classes.code}>{`<PendingRoundedIcon />`}</code>
            </pre>
            <PendingRoundedIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<PersonIcon />`}</code>
            </pre>
            <PersonIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<PowerIcon />`}</code>
            </pre>
            <PowerIcon />
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
                <code className={classes.code}>{`<ProtectionIcon />`}</code>
            </pre>
            <ProtectionIcon />
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
                <code className={classes.code}>{`<ReceivedRoundedIcon />`}</code>
            </pre>
            <ReceivedRoundedIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<RefreshIcon />`}</code>
            </pre>
            <RefreshIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<ReplyIcon />`}</code>
            </pre>
            <ReplyIcon />
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
                <code className={classes.code}>{`<RoundCompany />`}</code>
            </pre>
            <RoundCompany />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<SmallRoundCompany />`}</code>
            </pre>
            <SmallRoundCompany />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<RoundPerson />`}</code>
            </pre>
            <RoundPerson />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<SmallRoundPerson />`}</code>
            </pre>
            <SmallRoundPerson />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<SelfkeyIDMenuIcon />`}</code>
            </pre>
            <SelfkeyIDMenuIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<SelectDropdownIcon />`}</code>
            </pre>
            <SelectDropdownIcon />
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
                <code className={classes.code}>{`<SentIcon />`}</code>
            </pre>
            <SentIcon />
        </Grid>

        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<SentRoundedIcon />`}</code>
            </pre>
            <SentRoundedIcon />
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
                <code className={classes.code}>{`<SignatureIcon />`}</code>
            </pre>
            <SignatureIcon />
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
                <code className={classes.code}>{`<SwitchAccountsIcon />`}</code>
            </pre>
            <SwitchAccountsIcon />
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
        <Grid item className={classes.gridItem}>
            <pre className={classes.pre}>
                <code className={classes.code}>{`<IDIcon />`}</code>
            </pre>
            <IDIcon />
        </Grid>
    </Grid>
));
